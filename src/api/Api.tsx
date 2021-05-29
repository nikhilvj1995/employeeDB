import { get } from './fetch';
const getUsers = () => {
    return get('/users');
};
const Api = {
    getUsers
};
export default Api;