const user = (name = "Anonymous", age) => {
    let userName = name;
    let userAge = age;

    function canBuyBeer() {
        console.log(`Hello ${userName}, ${userAge > 18 ? 'you can buy beer' : "u can't buy beer"}`);
    }
    return canBuyBeer;
}

const mieszko = user("Mieszko", 20);
mieszko();