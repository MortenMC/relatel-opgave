import { StatusData } from "../../models/StatusData";

const baseURL = "https://status.relatel.dk/events.json";

export const getStatus = async (): Promise<StatusData> => {
    const result = await fetch(baseURL, {
        method: 'GET'
    })
    const json = await result.json();

    return json;

}