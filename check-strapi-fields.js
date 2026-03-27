async function checkStrapi() {
  const STRAPI_URL = "http://localhost:1337";
  try {
    const response = await fetch(`${STRAPI_URL}/api/insights`);
    const data = await response.json();
    if (data.data && data.data.length > 0) {
      console.log(`Found ${data.data.length} insights.`);
      data.data.forEach((item, index) => {
        console.log(`Item ${index}:`, "id=" + item.id, "documentId=" + item.documentId, "slug=" + item.slug, "title=" + item.title);
      });
    } else {
      console.log("No data found");
    }
  } catch (e) {
    console.log("Fetch failed:", e.message);
  }
}

checkStrapi();
