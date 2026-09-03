import { useEffect, useMemo, useState } from "react";

import type { SubcircuitDefinition } from "../model";
import {
  getTiMcpConversation,
  type TiMcpConversation,
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
  const candidates = useMemo(() => {
    const selectable = getSelectableSubcircuitCandidates(
      definitions,
      currentDefinition,
    );
    return [currentDefinition, ...selectable].sort((a, b) =>
      a.title.localeCompare(b.title, "en"),
    );
  }, [currentDefinition, definitions]);
  const [isConversationOpen, setIsConversationOpen] = useState(false);
  const [conversation, setConversation] = useState<TiMcpConversation | null>(
    null,
  );
  const [isFetchingConversation, setIsFetchingConversation] = useState(false);
  const [conversationUnavailable, setConversationUnavailable] = useState(false);

  useEffect(() => {
    setIsConversationOpen(false);
    setConversation(null);
    setIsFetchingConversation(false);
    setConversationUnavailable(false);
  }, [currentDefinition.category]);

  useEffect(() => {
    if (!isConversationOpen || conversation) return;

    let active = true;
    setConversationUnavailable(false);
    setIsFetchingConversation(true);
    void getTiMcpConversation(currentDefinition.category).then(
      (result) => {
        if (!active) return;
        setConversation(result);
        setIsFetchingConversation(false);
      },
      () => {
        if (!active) return;
        setConversationUnavailable(true);
        setIsFetchingConversation(false);
      },
    );
    return () => {
      active = false;
    };
  }, [conversation, currentDefinition.category, isConversationOpen]);

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
            <section className="ti-mcp-conversation">
              <button
                aria-expanded={isConversationOpen}
                className="ti-mcp-conversation-toggle"
                onClick={() => setIsConversationOpen((open) => !open)}
                type="button"
              >
                <strong>TI MCP conversation</strong>
                <span aria-hidden="true">›</span>
              </button>

              {isConversationOpen && (
                <div className="ti-mcp-conversation-content">
                  {isFetchingConversation && (
                    <div
                      aria-live="polite"
                      className="ti-mcp-conversation-fetching"
                      role="status"
                    >
                      <i aria-hidden="true" />
                      Contacting TI MCP…
                    </div>
                  )}

                  {conversationUnavailable && (
                    <p className="ti-mcp-conversation-error">
                      TI MCP conversation is temporarily unavailable. Collapse
                      and reopen to retry.
                    </p>
                  )}

                  {conversation && (
                    <>
                      <section className="ti-mcp-message">
                        <header>
                          <strong>Request</strong>
                          <small>{conversation.tool}</small>
                        </header>
                        <pre>{conversation.request}</pre>
                      </section>
                      <section className="ti-mcp-message" data-kind="response">
                        <header>
                          <strong>Response</strong>
                        </header>
                        <pre>
                          {conversation.response ||
                            "TI MCP returned an empty response."}
                        </pre>
                      </section>
                    </>
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
