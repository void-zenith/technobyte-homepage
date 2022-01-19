import axios from "axios";

export const submitEmail = async (
    email,
) => {
    let url = "https://internal.technobyte.dev/api/newsletter/";
    let data = {
        email
    };
    const res = await axios.post(url, data);
    return res;
};