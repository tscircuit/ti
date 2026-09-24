import assert from "node:assert/strict";

globalThis.fetch = async (url) => {
  assert.equal(
    url,
    "https://tisearch.tscircuit.com/api/search?limit=10&q=buck%20converter",
  );
  return Response.json({
    components: [
      {
        mfr: "TPS62160DSGR",
        description: "Buck converter",
        stock: 1200,
        price: null,
      },
    ],
  });
};
