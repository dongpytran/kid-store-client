import axios from "axios";
import { url } from "./config";
export const GetById = async (id) =>{
    console.log(id);
    return await (await (axios.get(url + 'ChucVu?machucvu=' + id))).data;
}