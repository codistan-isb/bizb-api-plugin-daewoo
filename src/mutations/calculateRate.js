import fetch from "node-fetch";

export default async function calculateRate(context,args, info) {
    const qty = args.qty;
    const weight = args.weight;
    const destinationTerminalId = args.destinationTerminalId;
    console.log("args",args)
    try {
        const baseUrl = "https://codapi.daewoo.net.pk/";
        const myMethod = `api/booking/quickCalculateRate?apiKey=$$BIZ-B--API13192X-PP$&apiUser=BIZ-B--API&apiPassword=$$BIZ-B--API13192X`;
        const url = `${baseUrl}${myMethod}`;
        
        const requestBody = {
            destination_terminal_id: destinationTerminalId,
            qty: qty,
            weight: weight
        };

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestBody)
        });
        console.log("response",response)
        
        if (!response.ok) {
            throw new Error(`Failed to calculate rate: ${response.statusText}`);
        }
      
        const data = await response.json();
        
        return {
            Success: data.Success,
            Error: data.Error,
            Validations: data.Validations,
            Response: data.Response,
            ServiceCharges: data.ServiceCharges
        };
    } catch (error) {
        throw new Error(`Failed to calculate rate: ${error.message}`);
    }
}
