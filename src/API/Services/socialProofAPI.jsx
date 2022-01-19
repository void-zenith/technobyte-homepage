import axios from "axios";

let url = "https://internal.technobyte.dev/api/social-proof/";
export const getAllData = async () => await axios.post(url);
