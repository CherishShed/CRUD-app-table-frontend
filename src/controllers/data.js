import axios from "axios";

const api = {
    getAllData: async () => {
        const result = axios.get("http://127.0.0.1:8081/");
        return result.then((response) => response.data);
    },

    getOne: async (id) => {
        const result = axios.get(`http://127.0.0.1:8081/${id}`);
        return result.then((response) => response.data);
    }
}

export default api; 