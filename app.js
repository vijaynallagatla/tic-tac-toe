var gBoard = ["","","","","","","","",""];
var numOfTrials = 0;
var player = "x"

document.querySelector(".container").addEventListener("click", (e) => {
  updateBoard(e.target);
});

function updateBoard(el) {
  if (el.innerHTML == "") {
    el.innerHTML = player;
    numOfTrials++;
    gBoard[el.getAttribute("dataset")] = player;
    checkWinner();
    togglePlayer();
  }
}

function togglePlayer() {
  (player == 'x') ? player = 'o' : player = 'x';
}

function resetBoard() {
  for (let i=0;i<gBoard.length;i++) {
    document.getElementById("cell"+i).innerHTML = "";
    gBoard[i] = "";
  }
  player = "x";
  numOfTrials = 0;
}

function checkWinner() {
  if (gBoard[0] != "" && gBoard[1] != "" && gBoard[2] != "" && gBoard[0] === gBoard[1] && gBoard[1] === gBoard[2]) {
      alert("Winner is " + player);
      resetBoard();
      return
  } else if (gBoard[0] != "" && gBoard[3] != "" && gBoard[6] != "" && gBoard[0] === gBoard[3] && gBoard[3] === gBoard[6]) {
    alert("Winner is " + player)
    resetBoard();
    return
  } else if (gBoard[0] != "" && gBoard[3] != "" && gBoard[6] != "" && gBoard[0] === gBoard[3] && gBoard[3] === gBoard[6]) {
    alert("Winner is " + player)
    resetBoard();
    return 
  } else if (gBoard[2] != "" && gBoard[4] != "" && gBoard[6] != "" && gBoard[2] === gBoard[4] && gBoard[4] === gBoard[6]) {
    alert("Winner is " + player)
    resetBoard();
    return 
  } else if (gBoard[3] != "" && gBoard[4] != "" && gBoard[5] != "" && gBoard[3] === gBoard[4] && gBoard[4] === gBoard[5]) {
    alert("Winner is " + player)
    resetBoard();
    return 
  } else if (gBoard[6] != "" && gBoard[7] != "" && gBoard[8] != "" && gBoard[6] === gBoard[7] && gBoard[7] === gBoard[8]) {
    alert("Winner is " + player)
    resetBoard();
    return 
  } else if (gBoard[1] != "" && gBoard[4] != "" && gBoard[7] != "" && gBoard[1] === gBoard[4] && gBoard[4] === gBoard[7]) {
    alert("Winner is " + player)
    resetBoard();
    return 
  } else if (gBoard[2] != "" && gBoard[5] != "" && gBoard[8] != "" && gBoard[2] === gBoard[5] && gBoard[5] === gBoard[8]) {
    alert("Winner is " + player)
    resetBoard();
    return 
  } else if (gBoard[0] != "" && gBoard[4] != "" && gBoard[8] != "" && gBoard[0] === gBoard[4] && gBoard[4] === gBoard[8]) {
    alert("Winner is " + player)
    resetBoard();
    return 
  } else if(numOfTrials > 8) {
    alert("It's a Draw!")
    resetBoard();
    return 
  }
}

resetBoard();