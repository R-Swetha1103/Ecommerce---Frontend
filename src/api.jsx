const API_URL = "http://localhost:5001/api/products"; // Correct endpoint

export const fetchProducts = async (category = "") => {
  try {
    const response = await fetch(
      `${API_URL}?category=${encodeURIComponent(category)}`
    );

    // Ensure response is JSON
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Check if the response is JSON
    const contentType = response.headers.get("Content-Type");
    if (!contentType || !contentType.includes("application/json")) {
      const rawResponse = await response.text();
      console.error("Expected JSON, but got:", rawResponse);
      throw new Error("Invalid JSON response");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
