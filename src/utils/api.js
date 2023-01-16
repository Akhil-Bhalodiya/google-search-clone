import axios from "axios";

const BaseURL =  "https://www.googleapis.com/customsearch/v1"

const params = {
    key: "AIzaSyBshKCOxf_apDWPtC6AO8Rugnc3zOP3q2E",
    cx: "70ed9b59a42574ad3"
}

export const fetchDataFromApi = async (payload) => {
    const { data } = await axios.get(BaseURL, {
        params: {...params, ...payload}
    })
    return data;
};
