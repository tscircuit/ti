type RawSourceModules = Record<string, string>;

export const PINNED_TI_GIT_COMMIT = "63f4f01cf28400c4ced9423d9058252485fb987d";
export const PINNED_TI_PACKAGE_NAME = "@tscircuit/ti";

const INSTALLED_PACKAGE_PREFIX = "../../node_modules/@tscircuit/ti/";
const EVALUATOR_PACKAGE_PREFIX = "node_modules/@tscircuit/ti/";
const BQ25731_SOURCE_PATH =
  "node_modules/@tscircuit/ti/lib/chips/BQ25731RSN.circuit.tsx";

const applyEvaluatorCompatibilityPatches = (
  path: string,
  source: string,
): string => {
  if (path !== BQ25731_SOURCE_PATH) return source;
  return source.replace('pin5: "OTG/VAP"', 'pin5: "OTG_VAP"');
};

const discoverPinnedTiSources = (): RawSourceModules => {
  try {
    return import.meta.glob(
      [
        "../../node_modules/@tscircuit/ti/index.ts",
        "../../node_modules/@tscircuit/ti/lib/**/*.ts",
        "../../node_modules/@tscircuit/ti/lib/**/*.tsx",
        "../../node_modules/@tscircuit/ti/lib/**/*.json",
        "../../node_modules/@tscircuit/ti/imports/**/*.ts",
        "../../node_modules/@tscircuit/ti/imports/**/*.tsx",
        "../../node_modules/@tscircuit/ti/package.json",
      ],
      {
        eager: true,
        import: "default",
        query: "?raw",
      },
    ) as RawSourceModules;
  } catch {
    return {};
  }
};

export const createPinnedTiSourceFsMap = (
  rawSources: RawSourceModules,
): Readonly<Record<string, string>> =>
  Object.fromEntries(
    Object.entries(rawSources).map(([path, source]) => {
      const evaluatorPath = path.startsWith(INSTALLED_PACKAGE_PREFIX)
        ? `${EVALUATOR_PACKAGE_PREFIX}${path.slice(INSTALLED_PACKAGE_PREFIX.length)}`
        : path;
      return [
        evaluatorPath,
        applyEvaluatorCompatibilityPatches(evaluatorPath, source),
      ];
    }),
  );

const PINNED_TI_SOURCE_FS_MAP = createPinnedTiSourceFsMap(
  discoverPinnedTiSources(),
);

export const getPinnedTiEvaluationFsMap = (): Readonly<
  Record<string, string>
> => ({
  ...PINNED_TI_SOURCE_FS_MAP,
  "package.json": JSON.stringify({
    dependencies: {
      [PINNED_TI_PACKAGE_NAME]: `github:tscircuit/ti#${PINNED_TI_GIT_COMMIT}`,
    },
  }),
});
