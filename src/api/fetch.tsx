const BASE_URL = 'http://www.mocky.io/v2/5d565297300000680030a986';
export const get = async () => {
    let response = await fetch(BASE_URL);
    let responseJson = await response.json();
    return responseJson;
}
