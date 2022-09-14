import axios from 'axios'
export const base_url = 'https://localhost:7138/api/';

export const userDetailsEndPoint ="users";

export const createApiEndPoint = endpoint => {

    let url = base_url + endpoint + '/';
    return {
        fetch: () => axios.get(url),
        fetchByID: id => axios.get(url, { params: { id: id } })
    }
}