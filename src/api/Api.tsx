import { get } from './fetch';
const getUsers = () => {
    return get();
};
const Api = {
    getUsers
};
export default Api;