import fetch from "node-fetch";

export default async function cancelBooking(context, args) {
    try {
        const trackingNo = args.trackingNo
        console.log("input", trackingNo);
        const baseUrl = "https://codapi.daewoo.net.pk/";
        const myMethod = `api/booking/quickCancel?piKey=$$BIZ-B--API13192X-PP$&apiUser=BIZ-B--API&apiPassword=$$BIZ-B--API13192X&trackingNo=${trackingNo}`;
        const url = `${baseUrl}${myMethod}`;
        
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log("response",response)
        if (!response.ok) {
            throw new Error(`Failed to cancel booking: ${response.statusText}`);
        }
      
        const data = await response.json();
        
        return {
            Success: data.Success,
            Error: data.Error,
            Response: data.Response
        };
    } catch (error) {
        throw new Error(`Failed to cancel booking: ${error.message}`);
    }
}
