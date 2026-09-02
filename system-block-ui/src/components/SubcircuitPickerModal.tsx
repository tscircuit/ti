import { useEffect, useMemo, useState } from "react";

import type { SubcircuitDefinition } from "../model";
import {
  getTiRecommendations,
  matchTiRecommendedDefinitionIds,
  type TiRecommendedPart,
} from "../ti-recommendations";

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
  const recommendationDefinitions = useMemo(
    () =>
      definitions.filter(
        (definition) =>
          definition.canInstantiate !== false &&
          definition.sourcePath.startsWith("lib/subcircuits/") &&
          definition.category === currentDefinition.category,
      ),
    [currentDefinition.category, definitions],
  );
  const candidates = useMemo(() => {
    const selectable = getSelectableSubcircuitCandidates(
      definitions,
      currentDefinition,
    );
    return [currentDefinition, ...selectable].sort((a, b) =>
      a.title.localeCompare(b.title, "en"),
    );
  }, [currentDefinition, definitions]);
  const [recommendedIds, setRecommendedIds] = useState<ReadonlySet<string>>(
    () => new Set(),
  );
  const [recommendedParts, setRecommendedParts] = useState<
    readonly TiRecommendedPart[]
  >([]);
  const [isFetchingRecommendations, setIsFetchingRecommendations] =
    useState(false);
  const widerPortfolioParts = useMemo(
    () =>
      recommendedParts.filter(
        (part) =>
          matchTiRecommendedDefinitionIds(
            [part.partNumber],
            recommendationDefinitions,
          ).size === 0,
      ),
    [recommendationDefinitions, recommendedParts],
  );

  useEffect(() => {
    let active = true;
    setRecommendedIds(new Set());
    setRecommendedParts([]);
    if (candidates.length === 0) {
      setIsFetchingRecommendations(false);
      return;
    }
    setIsFetchingRecommendations(true);
    void getTiRecommendations(
      currentDefinition.category,
      recommendationDefinitions,
    ).then(
      (recommendations) => {
        if (!active) return;
        setRecommendedIds(recommendations.definitionIds);
        setRecommendedParts(recommendations.parts);
        setIsFetchingRecommendations(false);
      },
      () => {
        if (active) setIsFetchingRecommendations(false);
      },
    );
    return () => {
      active = false;
    };
  }, [
    candidates.length,
    currentDefinition.category,
    recommendationDefinitions,
  ]);

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
            <div className="subcircuit-picker-results-summary">
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
              <small>{candidates.length}</small>
            </div>
          </div>

          <div className="subcircuit-picker-results">
            {widerPortfolioParts.length > 0 && (
              <section
                aria-label="Recommendations from the wider TI portfolio"
                className="ti-portfolio-recommendations"
              >
                <div className="ti-portfolio-recommendations-heading">
                  <strong>TI portfolio recommendations</strong>
                  <small>{widerPortfolioParts.length}</small>
                </div>
                {widerPortfolioParts.map((part) => (
                  <article className="ti-portfolio-part" key={part.partNumber}>
                    <div>
                      <strong>{part.name}</strong>
                      <small>Recommended</small>
                    </div>
                    {part.description && <span>{part.description}</span>}
                  </article>
                ))}
              </section>
            )}

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
                      {recommendedIds.has(definition.id) && (
                        <small title="Recommended by TI Support Intelligence">
                          Recommended
                        </small>
                      )}
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
