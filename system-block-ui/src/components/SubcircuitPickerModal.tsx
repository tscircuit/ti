import { useEffect, useMemo, useState } from "react";

import type { SubcircuitDefinition } from "../model";
import { getTiRecommendationText } from "../ti-recommendations";

export function getSelectableSubcircuitCandidates(
  definitions: readonly SubcircuitDefinition[],
  currentDefinition: SubcircuitDefinition,
): readonly SubcircuitDefinition[] {
  return definitions
    .filter(
      (definition) =>
        definition.id !== currentDefinition.id &&
        definition.canInstantiate !== false &&
        definition.sourcePath.startsWith("lib/subcircuits/") &&
        definition.category === currentDefinition.category,
    )
    .sort((a, b) => a.title.localeCompare(b.title, "en"));
}

interface SubcircuitPickerModalProps {
  currentDefinition: SubcircuitDefinition;
  definitions: readonly SubcircuitDefinition[];
  onClose: () => void;
  onSelect: (definition: SubcircuitDefinition) => void;
}

export function SubcircuitPickerModal({
  currentDefinition,
  definitions,
  onClose,
  onSelect,
}: SubcircuitPickerModalProps) {
  const candidates = useMemo(() => {
    const selectable = getSelectableSubcircuitCandidates(
      definitions,
      currentDefinition,
    );
    return [currentDefinition, ...selectable].sort((a, b) =>
      a.title.localeCompare(b.title, "en"),
    );
  }, [currentDefinition, definitions]);
  const [isRecommendationOpen, setIsRecommendationOpen] = useState(false);
  const [recommendationText, setRecommendationText] = useState<string | null>(
    null,
  );
  const [isFetchingRecommendations, setIsFetchingRecommendations] =
    useState(false);
  const [recommendationUnavailable, setRecommendationUnavailable] =
    useState(false);

  useEffect(() => {
    setIsRecommendationOpen(false);
    setRecommendationText(null);
    setRecommendationUnavailable(false);
  }, [currentDefinition.category]);

  useEffect(() => {
    if (!isRecommendationOpen || recommendationText !== null) return;
    let active = true;
    setIsFetchingRecommendations(true);
    setRecommendationUnavailable(false);
    void getTiRecommendationText(currentDefinition.category).then(
      (text) => {
        if (!active) return;
        setRecommendationText(text);
        setIsFetchingRecommendations(false);
      },
      () => {
        if (!active) return;
        setRecommendationUnavailable(true);
        setIsFetchingRecommendations(false);
      },
    );
    return () => {
      active = false;
    };
  }, [currentDefinition.category, isRecommendationOpen, recommendationText]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div
      className="subcircuit-picker-backdrop"
      onMouseDown={(event) => {
        if (event.currentTarget === event.target) onClose();
      }}
      role="presentation"
    >
      <section
        aria-labelledby="subcircuit-picker-title"
        aria-modal="true"
        className="subcircuit-picker-modal"
        role="dialog"
      >
        <header className="subcircuit-picker-header">
          <h2 id="subcircuit-picker-title">Choose a TI subcircuit</h2>
          <button
            aria-label="Close subcircuit picker"
            className="subcircuit-picker-close"
            onClick={onClose}
            type="button"
          >
            ×
          </button>
        </header>

        <div className="subcircuit-picker-catalog">
          <div className="subcircuit-picker-results-heading">
            <span>Available subcircuits</span>
            <small>{candidates.length}</small>
          </div>

          <div className="subcircuit-picker-results">
            <section className="ti-recommendation-disclosure">
              <button
                aria-controls="ti-recommendation-text"
                aria-expanded={isRecommendationOpen}
                className="ti-recommendation-toggle"
                onClick={() => setIsRecommendationOpen((open) => !open)}
                type="button"
              >
                <div>
                  <strong>TI portfolio recommendations</strong>
                  <span>View TI's recommendation text</span>
                </div>
                <div className="ti-recommendation-toggle-meta">
                  <small>Recommended</small>
                  <span aria-hidden="true" data-open={isRecommendationOpen}>
                    ›
                  </span>
                </div>
              </button>
              {isRecommendationOpen && (
                <div
                  className="ti-recommendation-content"
                  id="ti-recommendation-text"
                >
                  {isFetchingRecommendations && (
                    <span
                      aria-live="polite"
                      className="ti-recommendation-fetching"
                      role="status"
                    >
                      <i aria-hidden="true" />
                      Fetching TI recommendations…
                    </span>
                  )}
                  {recommendationUnavailable && (
                    <span role="status">
                      TI recommendations are temporarily unavailable. Close and
                      reopen to retry.
                    </span>
                  )}
                  {!isFetchingRecommendations && !recommendationUnavailable && (
                    <pre>
                      {recommendationText ||
                        "TI returned no recommendation text."}
                    </pre>
                  )}
                </div>
              )}
            </section>

            {candidates.map((definition) => {
              const isCurrent = definition.id === currentDefinition.id;
              return (
                <button
                  aria-label={
                    isCurrent
                      ? `Current subcircuit: ${definition.title}`
                      : `Select ${definition.title}`
                  }
                  className="subcircuit-candidate"
                  disabled={isCurrent}
                  key={definition.id}
                  onClick={() => onSelect(definition)}
                  type="button"
                >
                  <div className="subcircuit-candidate-heading">
                    <strong>{definition.title}</strong>
                    <div className="subcircuit-candidate-badges">
                      {isCurrent && <small data-tone="current">Current</small>}
                    </div>
                  </div>
                  {definition.description && (
                    <span>{definition.description}</span>
                  )}
                </button>
              );
            })}

            {candidates.length === 0 && (
              <div className="subcircuit-picker-empty">
                No other TI subcircuits are available.
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
