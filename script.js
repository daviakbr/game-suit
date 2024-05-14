class Start {
    constructor() {
        this.playerName = "Kamu"
        this.botName = "botjancok"
        this.playerOption = null;
        this.botOption;
        this.winner = ""
    }

    get getBotOption() {
        return this.botOption;
    }

    set setBotOption(option) {
        this.botOption = option;
    }

    get getPlayerOption() {
        return this.playerOption
    }

    set setPlayerOption(option) {
        this.playerOption = option;
    }

    botBrain(){
        const option = ["✊", "✌", "🖐"]
        const botIndex = Math.floor([Math.random() * option.length])
        const botChoice = option[botIndex];
        //console.log("bot kamu memilih",botChoice);
        document.getElementById("pilihan-computer").innerText = botChoice;
        return botChoice;
    }

    winCalculation() {
        if (this.botOption == "🖐" && this.playerOption == "✌") {
            return this.winner = this.playerName
        } else if (this.botOption == "🖐" && this.playerOption == "✊") {
            return this.winner = this.botName;
        } else if (this.botOption == "✌" && this.playerOption == "🖐") {
            return this.winner = this.botName;
        } else if (this.botOption == "✌" && this.playerOption == "✊") {
            return this.winner = this.playerName
        } else if (this.botOption == "✊" && this.playerOption == "🖐") {
            return this.winner = this.playerName
        } else if (this.botOption == "✊" && this.playerOption == "✌") {
            return this.winner = this.botName;
        } else {
            return this.winner = "SERI"
        }
    }
}

function pickOption(option) {
    const start = new Start(); // Membuat instance dari kelas Start

    document.getElementById("pilihan-player").innerText = option;

    start.setPlayerOption = option; // Mengatur opsi pemain menggunakan setter
       
    document.getElementById("result-player").innerText = "...";
    document.getElementById("pilihan-computer").innerText = "...";
    document.getElementById("result-computer").innerText = "...";

    setTimeout(() => {
        
        start.setBotOption = start.botBrain();
        
        start.winCalculation();
        console.log("pemenang nyaa adalaaaaaaaa", start.winner)
        const winner = start.winner;
        if(winner === start.botName){
            document.getElementById("result-computer").innerText = "WIN";
            document.getElementById("result-player").innerText = "LOSE";
            document.querySelector(".papan-score .score-computer").innerText = parseInt(document.querySelector(".papan-score .score-computer").innerText) + 1;
           // document.getElementsByClassName ("score-computer"),innerHTML = ++1
        } else if (winner === start.playerName){
            document.getElementById("result-computer").innerText = "LOSE";
            document.getElementById("result-player").innerText = "WIN";
            document.querySelector(".papan-score .score-player").innerText = parseInt(document.querySelector(".papan-score .score-player").innerText) + 1;
            //document.getElementsByClassName ("score-player"),innerHTML = ++1
        } else{
            document.getElementById("result-computer").innerText = "DRAW";
            document.getElementById("result-player").innerText = "DRAW";
        }
        return 
    }, 1000)   
}
