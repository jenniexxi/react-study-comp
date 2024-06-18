export const getCoinList = async () => {
    let result = await fetch('https://api.coinpaprika.com/v1/coins');
    result = await result.json();
    return result.slice(0, 100); // 개수가 많아서 100개만 가져오게 해주었음.
}

export const getCoinDetail = async (coinId) => {
    let result = await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`);
    result = await result.json();
    return result;
}

// export 만 쓰는것은, 여러개의 api를 가져와야 할 수도 있기 때문에.
// object 방식으로 여러개 가져올 수도 있음.
// axios 로 하면 json 으로 안 바꿔줘도 됨
// fetch는 json 형식으로 안 주기 때문에 우리가 바꿔줘야함
