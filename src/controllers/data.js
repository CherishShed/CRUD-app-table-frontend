import axios from "axios";

const api = {
    getAllData: async () => {
        const result = axios.get("http://127.0.0.1:8081/");
        return result.then((response) => response.data);
    },

    getOne: async (id) => {
        console.log("getting");
        const result = axios.get(`http://127.0.0.1:8081/${id}`);
        return result.then((response) => response.data);
    },
    createPerson: async (data) => {
        axios.post(`http://127.0.0.1:8081/`, data)
            .then((err, result) => {
                if (err) {
                    return "error"
                } else {
                    return "success"
                }
            })
    },
    editPerson: async (id, data) => {
        const result = axios.patch(`http://127.0.0.1:8081/${id}`, data);
        return result.then((response) => response.data)
    }
}

export default api; 