import fetch from "node-fetch";

export default async function daewooAllLocations(context, args) {
  const apiKey = process.env.Daewoo_API_KEY;
  const apiUser = process.env.Daewoo_API_USERID;
  const baseUrl = process.env.Daewoo_API_URL;
  const apiPassword = process.env.Daewoo_API_PASSWORD;

  try {
    console.log("apiKey", apiKey);
    console.log("apiUser", apiUser);
    console.log("baseUrl", baseUrl);
    console.log("apiPassword", apiPassword);
    const url = `${baseUrl}api/cargo/getLocations?apiKey=$$BIZ-B--API13192X-PP$&apiUser=BIZ-B--API&apiPassword=$$BIZ-B--API13192X`;
    const response = await fetch(url);
    console.log("response", response);

    if (!response.ok) {
      throw new Error(`Failed to fetch locations: ${response.statusText}`);
    }

    const data = await response.json(); // Convert response body to JSON

    return data.Data; // Assuming Data contains an array of locations
  } catch (error) {
    throw new Error(`Failed to fetch locations from the API: ${error.message}`);
  }
}
