import axios from 'axios'


export default {
    getBios(params={}) {
        return axios.get('api/bio/',{
            params: params
          })
            .then(response => {
                return response.data
            })
    },
    getBio(pk,params={}) {
        const url = `api/bio/${pk}`;
        return axios.get( url,{
            params: params
          })
            .then(response => {
                return response.data
            })
    },
    getProyects(params={}) {
        const url = `api/project/`;
        return axios.get( url,{
            params: params
          })
            .then(response => {
                return response.data
            })
    },
    getProyect(pk,params={}) {
        const url = `api/project/${pk}`;
        return axios.get( url,{
            params: params
          })
            .then(response => {
                return response.data
            })
    }
}