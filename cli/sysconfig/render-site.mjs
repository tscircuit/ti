import { readFile, writeFile } from "node:fs/promises";
import { pathToFileURL } from "node:url";

// Run with Bun to load the private package's TypeScript exports. Source stays data.
try {
  const [viewerModulePath, requestPath, outputPath] = process.argv.slice(2);
  if (!viewerModulePath || !requestPath || !outputPath)
    throw new Error(
      "The site renderer requires its module, input and output paths",
    );
  const renderer = await import(pathToFileURL(viewerModulePath).href);
  if (
    typeof renderer.generateReadOnlyHtml !== "function" ||
    typeof renderer.getBundledSdkCatalog !== "function" ||
    typeof renderer.readReadOnlyViewerInput !== "function"
  )
    throw new Error(
      "The installed private sysconfig-viewer does not support read-only site generation. Install the matching reviewed version.",
    );
  const request = JSON.parse(await readFile(requestPath, "utf8"));
  const source = await readFile(request.sourcePath, "utf8");
  const sdk_catalog = request.catalogPath
    ? JSON.parse(await readFile(request.catalogPath, "utf8"))
    : renderer.getBundledSdkCatalog(source);
  const input = renderer.readReadOnlyViewerInput(
    JSON.stringify({ source, filename: request.filename, sdk_catalog }),
  );
  await writeFile(outputPath, await renderer.generateReadOnlyHtml(input), {
    flag: "wx",
  });
} catch (error) {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
}
