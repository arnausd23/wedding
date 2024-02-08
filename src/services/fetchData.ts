export const fetchData = async (url: string) => {
  const notionAPIKey = "secret_u57TwLDeX18bsX6GUjfGyEPo1CQFTWkwQoo7iEqZS9I";
  const proxyUrl = "https://corsproxy.io";

  const headers = {
    Authorization: `Bearer ${notionAPIKey}`,
    "Notion-Version": "2021-08-16",
    "Content-Type": "application/json",
  };

  try {
    const body = {};

    const response = await fetch(`${proxyUrl}?${url}`, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    });

    return response.json();
  } catch (error) {
    console.error("Error fetching Timeline:", error);
    throw error;
  }
};

export default fetchData;
