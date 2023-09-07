import axios from "axios";

const baseUrl = "https://geo.ipify.org/api/v2/country,city?apiKey=at_RS5t3rwy1ymOLfL8w7FA73WIICYXi"

const initial = () => {
    const request = axios.get(`${baseUrl}`)
    return request.then(response => response.data)
}

const search =(ip) => {
    const request = axios.get(`${baseUrl}&ipAddress=${ip}`)
    return request.then(response => response.data)
}

export default {initial, search}