class Wallet{
    constructor(money){
        let _money = money;

        this.getWalletValue = () => _money;

        this.chceckCanPlay = value => {
            if(_money >= value){
                return true;
            }
            return false;
        }

        this.changeWallet = (value, typeOfOperation = "+") => {
            if(typeof value === 'number' && !isNaN(value)){
                if(typeOfOperation === "+"){
                    return _money += value;
                } else if(typeOfOperation ==="-"){
                    return _money -= value;
                } else {
                    throw new Error('Incorrect type of operation!');
                }
                
            } else {
                console.log(typeof value);
                throw new Error("Incorrect value!");
            }
        }
    }
}
