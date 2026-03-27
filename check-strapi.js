async function checkStrapi() {
  const STRAPI_URL = "http://localhost:1337";
  try {
    const response = await fetch(`${STRAPI_URL}/api/insights?pagination[pageSize]=1`);
    const data = await response.json();
    if (data.data && data.data.length > 0) {
      const item = data.data[0];
      const keys = Object.keys(item);
      console.log("Keys of first item:", keys);
      if (item.attributes) {
        console.log("Keys of components/attributes:", Object.keys(item.attributes));
      }
      // Check for content field if it exists
      if (item.content) {
        console.log("Content exists");
      }
    } else {
      console.log("No data found");
    }
  } catch (e) {
    console.log("Fetch failed:", e.message);
  }
}

checkStrapi();
