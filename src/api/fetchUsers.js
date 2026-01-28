
export async function fetchUsers() {
  try {
    // Make HTTP request
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/users'
    );

    // Check if response is OK (status 200-299)
    if (!response.ok) {
      throw new Error(`HTTP-Fehler: ${response.status}`);
    }

    // Parse JSON and return
    const data = await response.json();
    return data;
  } catch (error) {
    // Log error to console
    console.error('Fehler beim Laden der User:', error);
    // Re-throw so caller can handle it
    throw error;
  }
}

/**
 * Fetch a single user by ID
 * @param {number} id - User ID to fetch
 * @returns {Promise<Object>} User object
 */
export async function fetchUserById(id) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );

    if (!response.ok) {
      throw new Error(`HTTP-Fehler: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Fehler beim Laden von User ${id}:`, error);
    throw error;
  }
}