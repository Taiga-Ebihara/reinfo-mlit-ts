async function fetchXPT001() {
  const resRaw = await fetch(
    "https://www.reinfolib.mlit.go.jp/ex-api/external/XPT001?response_format=pbf&z=13&x=7312&y=3008&from=20223&to=20234&priceClassification=01&landTypeCode=01,02,07",
    {
      method: "GET",
      headers: {
        "Ocp-Apim-Subscription-Key": "48acd91f22f344799f510b639e12fb69",
      },
    }
  );

  return await resRaw.arrayBuffer();
}

const res = await fetchXPT001();
