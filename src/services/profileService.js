import axios from 'axios'

export function getProfile(body) {
    return axios.post('https://3p.apps-dev.tid.es/api/login', body)
        
}

export function getProfileByID(id) {
    return axios.get('https://3p.apps-dev.tid.es/api/users/'+id)
        
}