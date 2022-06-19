const info = document.querySelector('.info');
const cellules = document.querySelectorAll('.cell');



let lock = true;
let player1 = "X" ;

info.innerHTML = `Au tour de ${player1}`;

const victory = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

let game = ["","","","","","","","",""];

cellules.forEach(cell => {
    cell.addEventListener('click', clickOnCase);
})

function clickOnCase(e){
    const caseClick = e.target;
    const caseIndex = caseClick.getAttribute('data-index');

    if(game[caseIndex] !== "" || !lock){
        return;
    }

    game[caseIndex] = player1;
    caseClick.innerHTML = player1;
    console.log(game)

    checkresults();

}

function checkresults(){

    let endOfGame = false;

    for(let i = 0; i < victory.length; i++ ){

        const checkWin = victory[i];
        //  [0, 1, 2],
        let a = game[checkWin[0]];
        let b = game[checkWin[1]];
        let c = game[checkWin[2]];

        if(a === '' || b === '' || c === ''){
            continue;
        }
        if( a === b && b === c){
            endOfGame = true;
            break;
        }
    }

    if(endOfGame){
        info.innerText = `Le joueur ${player1} a gagné !`
        lock = false;
        return;
    }

    let matchNul = !game.includes('');
    if(matchNul){
        info.innerText =  'Match nul !';
        lock = false;
        return;
    }

    changePlayers();
}

function changePlayers(){
    player1 = player1 === "X" ? "O" : "X";
    info.innerText = `Au tour de ${player1}`;
}