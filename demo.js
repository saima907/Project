const choices = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

document.querySelectorAll(".choice").forEach(button => {
    button.addEventListener("click", () => {
        let playerChoice = button.id;
        let computerChoice = choices[Math.floor(Math.random() * 3)];
        let result = getWinner(playerChoice, computerChoice);

        document.getElementById("result").textContent = `You chose ${playerChoice} | Computer chose ${computerChoice} → ${result}`;

        document.getElementById("player-score").textContent = playerScore;
        document.getElementById("computer-score").textContent = computerScore;
    });
});

function getWinner(player, computer) {
    if (player === computer) return "It's a tie!";
    
    if (
        (player === "rock" && computer === "scissors") ||
        (player === "paper" && computer === "rock") ||
        (player === "scissors" && computer === "paper")
    ) {
        playerScore++;
        return "You win! 🎉";
    } else {
        computerScore++;
        return "You lose! 😢";
    }
}
