const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NTIxNmFkY2EyYTEzMTY4YzZhODY0OWY1ODZjNDI2ZCIsIm5iZiI6MTc0MjkxMDc5Ni43NjQsInN1YiI6IjY3ZTJiNTRjZTI4YWY0MWNmYzc1ZmUwYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._HDAMMPMNhKT1Hw4tAKYIAVp4zJty7MQfdt7JeRCaew";

const options = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${API_KEY}`,
    },
};

export const fetchData = async (endpoint) => {
    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, options);
        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error("API fetch error:", error);
        throw error;
    }
};
