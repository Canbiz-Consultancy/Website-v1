async function checkStrapi() {
  const STRAPI_URL = "http://localhost:1337";
  try {
    const response = await fetch(`${STRAPI_URL}/api/insights?pagination[pageSize]=1`);
    const data = await response.json();
    if (data.data && data.data.length > 0) {
      const item = data.data[0];
      const keys = Object.keys(item);
      console.log("ALL Keys of first item:", JSON.stringify(keys));
      console.log("Full first item:", JSON.stringify(item, null, 2));
    } else {
      console.log("No data found");
    }
  } catch (e) {
    console.log("Fetch failed:", e.message);
  }
}

checkStrapi();
