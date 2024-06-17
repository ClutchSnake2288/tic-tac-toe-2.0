let table = document.querySelector(".table")
let char = document.querySelector("span")
let turnCounter = 1
let turnChar = "X"
let area = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
]
table.onclick = function() {
     let target = event.target
     let row = target.parentElement.rowIndex
     let column = target.cellIndex
     area[row][column] = turnChar
     console.log(area);
    console.dir(target);
    changeTurn(target)
    if (checkWinner() == "X") {
        setTimeout(() => {
            alert("крестики выиграли")
            newGame()
        },
            500
        )
        
    }
    if (checkWinner() == "O") {
        setTimeout(() => {
            alert("нолики выиграли")
            newGame()
        },
            500
        )
        
    }
    if (checkWinner() == false && turnCounter == 10){
        setTimeout(() => {
            alert("ничья")
            newGame()
        },
            500
        )
        
    }
}


function changeTurn(cell) {
    cell.innerHTML = turnChar
    turnCounter = turnCounter + 1
    if (turnCounter % 2 == 1) {
        turnChar = "X"
    }
    else {
        turnChar = "O"
    }
    char.innerHTML = turnChar
}

function checkWinner() {
    if (area[0][0] == "X" && area[1][1] == "X" && area[2][2] == "X") {
        return "X"
    }
    if (area[0][0] == "X" && area[1][0] == "X" && area[2][0] == "X") {
        return "X"
    }
    if (area[0][1] == "X" && area[1][1] == "X" && area[2][1] == "X") {
        return "X"
    }
    if (area[0][2] == "X" && area[1][2] == "X" && area[2][2] == "X") {
        return "X"
    }
    if (area[2][0] == "X" && area[1][1] == "X" && area[0][2] == "X") {
        return "X"
    }
    if (area[0][0] == "X" && area[0][1] == "X" && area[0][2] == "X") {
        return "X"
    }
    if (area[1][0] == "X" && area[1][1] == "X" && area[1][2] == "X") {
        return "X"
    }
    if (area[2][0] == "X" && area[2][1] == "X" && area[2][2] == "X") {
        return "X"
    }

    if (area[0][0] == "O" && area[1][1] == "O" && area[2][2] == "O") {
        return "O"
    }
    if (area[0][0] == "O" && area[1][0] == "O" && area[2][0] == "O") {
        return "O"
    }

    if (area[0][1] == "O" && area[1][1] == "O" && area[2][1] == "O") {
        return "O"
    }

    if (area[0][2] == "O" && area[1][2] == "O" && area[2][2] == "O") {
        return "O"
    }


    if (area[2][0] == "O" && area[1][1] == "O" && area[0][2] == "O") {
        return "O"
    }

    if (area[0][0] == "O" && area[0][1] == "O" && area[0][2] == "O") {
        return "O"
    }

    if (area[1][0] == "O" && area[1][1] == "O" && area[1][2] == "O") {
        return "O"
    }

    if (area[2][0] == "O" && area[2][1] == "O" && area[2][2] == "O") {
        return "O"
    }
    return false
}

// function newGame() {
//     let rows = document.querySelectorAll(".table tr")

//     for (let i = 0; i < rows.length; i++) {
//         console.log(rows[i]);
//         let row = rows[i]
//         let cells = row.querySelectorAll("td")
//         for (let j = 0; j < cells.length; j++) {
//             console.log(cells[j]);
//             cells[j].innerHTML = ""
//             area[i][j] = ""
//         }
//     }
//     turnCounter = 1
//     turnChar = "X"
//     char.innerHTML = turnChar
//     document.querySelector(".row").value = ""
//     document.querySelector(".column").value = ""
// }