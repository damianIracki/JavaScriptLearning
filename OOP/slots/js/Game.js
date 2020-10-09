class Game{
    constructor(moneyOnStart){
        this.statistics = new Statistics();
        this.wallet = new Wallet(moneyOnStart);

        document.getElementById("start").addEventListener("click", this.startGame.bind(this));
        this.colorsBoard = document.querySelectorAll("div.color");
        this.bidInput = document.getElementById("bid")
        this.spanWallet = document.querySelector("span.wallet");
        this.spanResult = document.querySelector(".score .result");
        this.spanNumberOfGames = document.querySelector(".score .numberOfGames");
        this.spanWins = document.querySelector(".score .wins");
        this.spanLosts = document.querySelector(".score .losts");

        this.render();
    }

    render(colors = ['grey', 'grey', 'grey'], money = this.wallet.getWalletValue(), result = "", stats = [0,0,0], bid = 0, wonMoney = 0
    ) {
        this.colorsBoard.forEach((board, index) => {
            board.style.backgroundColor = colors[index];
        })

        this.spanWallet.textContent = money + "$";
        if(result) {
            result = `You win ${wonMoney}$,`;
        } else if(!result && result !== ""){
            result = `You lose ${bid}$,`;
        }
        this.spanResult.textContent = result;
        this.spanNumberOfGames.textContent = stats[0];
        this.spanWins.textContent = stats[1];
        this.spanLosts.textContent = stats[2];d
    }

    startGame(){
        if(this.bidInput.value < 1) {
            return alert("Minimum bid is 1!");
        }
        const bid = Math.floor(this.bidInput.value);
        if(!this.wallet.chceckCanPlay(bid)){
            return alert("You dont have enough money or entered value is incorrect!")
        }
        this.wallet.changeWallet(bid, "-");

        this.draw = new Draw();
        const colors = this.draw.getDrawResult();
        const win = Result.checkGameResult(colors);
        const wonMoney = Result.moneyWinInGame(win, bid);
        this.wallet.changeWallet(wonMoney);

        this.statistics.addGameResultToStatistics(win, bid);

        this.render(colors, this.wallet.getWalletValue(), win, this.statistics.showGameStatistics(), bid, wonMoney)
    }
}

