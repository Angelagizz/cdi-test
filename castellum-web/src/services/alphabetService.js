export const handleSort = async (words) => {
    const url = "http://localhost:8080/digital/castellum/api/alphabet/sort";
    const data = {
      words: words,
    };
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      return response.json();
    } catch (error) {
      throw error;
    }
  };
