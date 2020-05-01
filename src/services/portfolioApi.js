import axios from "axios";

export default {
    getBios(params = {}) {
        return axios
            .get("api/bio/", {
                params: params,
            })
            .then((response) => {
                return response.data;
            });
    },
    getBio(pk, params = {}) {
        const url = `api/bio/${pk}`;
        return axios
            .get(url, {
                params: params,
            })
            .then((response) => {
                return response.data;
            });
    },
    getProjects(params = {}) {
        const url = `api/projects/`;
        return axios
            .get(url, {
                params: params,
            })
            .then((response) => {
                return response.data;
            });
    },
    getProject(pk, params = {}) {
        const url = `api/projects/${pk}`;
        return axios
            .get(url, {
                params: params,
            })
            .then((response) => {
                return response.data;
            });
    },
    getServices(params = {}) {
        const url = `api/service/`;
        return axios
            .get(url, {
                params: params,
            })
            .then((response) => {
                return response.data;
            });
    },
};
