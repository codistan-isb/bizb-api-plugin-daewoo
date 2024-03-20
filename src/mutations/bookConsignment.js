import fetch from "node-fetch";

export default async function bookConsignment(context, { input }) {
    try {
      
        const baseUrl = "https://codapi.daewoo.net.pk/";
        const myMethod = `api/booking/quickBookV3?apiKey=$$BIZ-B--API13192X-PP$&apiUser=BIZ-B--API&apiPassword=$$BIZ-B--API13192X`;
        const url = `${baseUrl}${myMethod}`;
        console.log("input", input);
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(input)
        });
        
        if (!response.ok) {
            throw new Error(`Failed to book consignment: ${response.statusText}`);
        }
      
        const data = await response.json();
        
        return {
            Success: data.Success,
            Error: data.Error,
            Validations: data.Validations,
            Response: data.Response,
            TrackNo: data.TrackNo,
            Barcode: data.Barcode,
            CashCollection: data.CashCollection,
            OrderId: data.OrderId
        };
    } catch (error) {
        throw new Error(`Failed to book consignment: ${error.message}`);
    }
}
