import axios from './custom-axios'

const fetchUsers  = (page) => {
    return axios.get(`/api/users?page=${page}`);
}

const postUser = (name, job) => {
    return axios.post("api/users",{name: name, job: job});
}

export {fetchUsers, postUser};