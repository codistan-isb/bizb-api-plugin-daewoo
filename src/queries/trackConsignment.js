import fetch from "node-fetch";

export default async function trackConsignment(context, args) {
    const trackingNo = args.trackingNo;
    console.log("trackingNo", trackingNo);
  
    try {
        const baseUrl = process.env.Daewoo_API_URL;
        const url = `${baseUrl}api/booking/quickTrack?trackingNo=${trackingNo}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch track details: ${response.statusText}`);
        }
  
        const data = await response.json(); // Convert response body to JSON
        console.log("data", data);
  
        if (!data || !data.Result) {
            throw new Error("Invalid response format");
        }
  
        return data.Result;
    } catch (error) {
        throw new Error(`Failed to fetch track details from the API: ${error.message}`);
    }
}
