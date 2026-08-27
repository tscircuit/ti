import { getPinnedTiEvaluationFsMap } from "./pinned-ti-sources";

export const GENERATED_SYSTEM_MAIN_FILE_NAME = "GeneratedSystem.circuit.tsx";

interface GeneratedSystemSourceArtifacts {
  tsx: string;
  systemDiagramModuleFileName: string;
  systemDiagramModuleSource: string;
}

export interface GeneratedSystemSourceFile {
  fileName: string;
  source: string;
}

/** Returns every source file required to evaluate the generated system. */
export const getGeneratedSystemSourceFiles = (
  artifacts: GeneratedSystemSourceArtifacts,
): readonly GeneratedSystemSourceFile[] => [
  {
    fileName: GENERATED_SYSTEM_MAIN_FILE_NAME,
    source: artifacts.tsx,
  },
  {
    fileName: artifacts.systemDiagramModuleFileName,
    source: artifacts.systemDiagramModuleSource,
  },
];

/** Returns companion modules and the pinned TI package for evaluation. */
export const getGeneratedSystemEvaluationFsMap = (
  artifacts: GeneratedSystemSourceArtifacts,
): Readonly<Record<string, string>> => ({
  ...getPinnedTiEvaluationFsMap(),
  [artifacts.systemDiagramModuleFileName]: artifacts.systemDiagramModuleSource,
});
