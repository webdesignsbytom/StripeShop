import { jwtDecode } from "jwt-decode";

export default function LoggedInUser() {
  const loadedToken = localStorage.getItem('token');

  // Check if the token exists
  if (!loadedToken) {
    return null; // Return null if the token is not present
  }

  try {
    // Decode the token
    const decoded = jwtDecode(loadedToken);

    // Optionally: Check if token has expired (check the exp field in the decoded token)
    if (decoded.exp && Date.now() >= decoded.exp * 1000) {
      console.warn('Token has expired');
      return null; // Return null if the token is expired
    }

    return decoded; // Return decoded token data if valid
  } catch (error) {
    console.error('Error decoding token:', error);
    return null; // Return null if decoding fails or token is malformed
  }
}
