export async function waitFor(predicate, describeFailure) {
  const deadline = Date.now() + 15000;
  while (Date.now() < deadline) {
    if (await predicate()) return;
    await new Promise((resolveDelay) => setTimeout(resolveDelay, 25));
  }
  throw new Error(`Watch condition timed out: ${describeFailure()}`);
}
