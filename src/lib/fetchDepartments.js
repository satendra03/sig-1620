let url = import.meta.env.VITE_SHIVAM;

export const fetchDepartments = async ({ route }) => {
  const fullUrl = url + `${route}`; // Store the updated URL in a separate variable to avoid issues
  console.log("Requesting from URL:", fullUrl); // Debugging log to check if the correct URL is being hit

  try {
    const response = await fetch(fullUrl, {
      method: 'GET',
    });

    // Check if the response is not OK (status code is not 200-299)
    if (!response.ok) {
      throw new Error(`Error fetching departments, status code: ${response.status}`);
    }

    const data = await response.json();
    console.log("Response from fetchDepartments function:", data);

    return data;
  } catch (error) {
    console.error("Error from fetching departments:", error.message);
    throw error;
  }
};
