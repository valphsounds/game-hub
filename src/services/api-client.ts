import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '6d06a392fa64470fa034f3183be45231'
    }
})