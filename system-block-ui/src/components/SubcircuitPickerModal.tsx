import { useEffect, useMemo } from "react";

import type { SubcircuitDefinition } from "../model";

export function getSelectableSubcircuitCandidates(
  definitions: readonly SubcircuitDefinition[],
  currentDefinition: SubcircuitDefinition,
): readonly SubcircuitDefinition[] {
  return definitions
    .filter(
      (definition) =>
        definition.id !== currentDefinition.id &&
        definition.canInstantiate !== false,
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
            {candidates.map((definition) => (
              <button
                aria-label={`Select ${definition.title}`}
                className="subcircuit-candidate"
                key={definition.id}
                onClick={() => onSelect(definition)}
                type="button"
              >
                <strong>{definition.title}</strong>
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
