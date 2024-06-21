const SERVER_API_ADDR = 'https://api.coinpaprika.com/';

export const get = async (url) => {
    let result = await fetch(SERVER_API_ADDR + url);
    result = await result.json();
    return result;
}
