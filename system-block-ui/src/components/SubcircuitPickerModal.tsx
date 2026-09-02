import { useEffect, useMemo, useState } from "react";

import type { SubcircuitDefinition } from "../model";
import { getTiRecommendations } from "../ti-recommendations";

export function getSelectableSubcircuitCandidates(
  definitions: readonly SubcircuitDefinition[],
  currentDefinition: SubcircuitDefinition,
): readonly SubcircuitDefinition[] {
  return definitions
    .filter(
      (definition) =>
        definition.id !== currentDefinition.id &&
        definition.canInstantiate !== false &&
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
  const candidates = useMemo(
    () => getSelectableSubcircuitCandidates(definitions, currentDefinition),
    [currentDefinition, definitions],
  );
  const [recommendedIds, setRecommendedIds] = useState<ReadonlySet<string>>(
    () => new Set(),
  );
  const [recommendedPartNumbers, setRecommendedPartNumbers] = useState<
    readonly string[]
  >([]);

  useEffect(() => {
    let active = true;
    setRecommendedIds(new Set());
    setRecommendedPartNumbers([]);
    if (candidates.length === 0) return;
    void getTiRecommendations(currentDefinition.category, candidates).then(
      (recommendations) => {
        if (!active) return;
        setRecommendedIds(recommendations.definitionIds);
        setRecommendedPartNumbers(recommendations.partNumbers);
      },
    );
    return () => {
      active = false;
    };
  }, [candidates, currentDefinition.category]);

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
            <span>Available parts</span>
            <small>{candidates.length}</small>
          </div>

          <div className="subcircuit-picker-results">
            {recommendedPartNumbers.length > 0 && (
              <div
                aria-label="Parts recommended by TI Support Intelligence"
                aria-live="polite"
                className="ti-recommendation-strip"
              >
                <strong>TI suggestions</strong>
                <span>{recommendedPartNumbers.join(" · ")}</span>
              </div>
            )}

            {candidates.map((definition) => (
              <button
                aria-label={`Select ${definition.title}`}
                className="subcircuit-candidate"
                key={definition.id}
                onClick={() => onSelect(definition)}
                type="button"
              >
                <div className="subcircuit-candidate-heading">
                  <strong>{definition.title}</strong>
                  {recommendedIds.has(definition.id) && (
                    <small title="Recommended by TI Support Intelligence">
                      TI recommended
                    </small>
                  )}
                </div>
                {definition.description && (
                  <span>{definition.description}</span>
                )}
              </button>
            ))}

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
