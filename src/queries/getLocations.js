var apiKey = process.env.Daewoo_API_KEY;
var apiUser = process.env.Daewoo_API_USERID;
var baseUrl = process.env.Daewoo_API_URL;
var apiPassword = process.env.Daewoo_API_PASSWORD;
import fetch from "node-fetch";
import ReactionError from "@reactioncommerce/reaction-error";

export default async function getLocations(context, args) {
  try {
    const response = await axios.get(`${baseUrl}/api/cargo/getLocations?apiKey=${apiKey}&apiUser=${apiUser}&apiPassword=${apiPassword}`);
    console.log("response", response);
    return response.data.Data; // Assuming Data contains an array of locations
  } catch (error) {
    throw new Error('Failed to fetch locations from the API');
  }
}
