class Statistics {
    constructor(){
        this.gamesResults = [];
    }

    addGameResultToStatistics(win, bid){
        let gameResult = {
            win,
            bid,
        }

        this.gamesResults.push(gameResult);
    }

    showGameStatistics() {
        let numberOfGames = this.gamesResults.length;
        let numberOfWins = 0;
        this.gamesResults.forEach(game => {
            if(game.win === true){
                numberOfWins++
            }
        });

        let numberOfLosts = numberOfGames - numberOfWins;

        return [numberOfGames, numberOfWins, numberOfLosts]
    }

}

