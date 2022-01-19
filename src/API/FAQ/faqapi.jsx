import axios from "axios";

let url = "https://internal.technobyte.dev/api/faq/";
export const getAllData = async () => await axios.get(url);
