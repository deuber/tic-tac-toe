var turn = 'X';




window.addEventListener("load", function (){

//new player each time run
function next() {
    turn = turn === 'X' ? 'O' : 'X';
    return turn; 
}


}

//Set event listeners
for(var i = 0; i < 9; ++i){
     var box = document.getElementById("box" + i);

     box.addEventListener("click", function(event){
        
        if(this.innerHTML == 'X' || this.innerHTML =='O'){
            console.log("Already something here!")
        }
        else {
            var turn = next();
            this.innerHTML = turn;
            this.className = turn;
            winner();
            
        }
    })
}



// clear all innerHTML
var boxes = document.querySelectorAll(".box")
var button = document.getElementById("clear")
button.addEventListener("click", function(event){
    for (var i = 0 ; i < 9 ; ++i) {
        boxes[i].innerHTML = '';
        boxes[i].className = '';    
    }
})

var boxes = document.querySelectorAll(".box")
function reset(){

    for (var i = 0 ; i < 9 ; ++i) {
        boxes[i].innerHTML = '';
        boxes[i].className = '';    
    }
}


function winner(){
      // X Horizontal win
    if (document.getElementById("box0").innerHTML === "X" &&
        document.getElementById("box1").innerHTML === "X" &&
        document.getElementById("box2").innerHTML === "X"){
        alert("Winner is X Horizontal!")
        reset()
    }else if (document.getElementById("box3").innerHTML === "X" &&
        document.getElementById("box4").innerHTML === "X" &&
        document.getElementById("box5").innerHTML === "X"){
        alert("Winner is X Horizontal!")
        reset()
    }else if (document.getElementById("box6").innerHTML === "X" &&
        document.getElementById("box7").innerHTML === "X" &&
        document.getElementById("box8").innerHTML === "X"){
        alert("Winner is X Horizontal!")
        reset()
    // X Vert win
    }else if (document.getElementById("box0").innerHTML === "X" &&
        document.getElementById("box3").innerHTML === "X" &&
        document.getElementById("box6").innerHTML === "X"){
        alert("Winner is X Vertically!")
        reset()
    }else if (document.getElementById("box1").innerHTML === "X" &&
        document.getElementById("box4").innerHTML === "X" &&
        document.getElementById("box7").innerHTML === "X"){
        alert("Winner is X Vertically!")
        reset()
    }else if (document.getElementById("box2").innerHTML === "X" &&
        document.getElementById("box5").innerHTML === "X" &&
        document.getElementById("box8").innerHTML === "X"){
        alert("Winner is X Vertically!")
        reset()
    }
    // 0 Horizontal win
    else if (document.getElementById("box0").innerHTML === "O" &&
        document.getElementById("box1").innerHTML === "O" &&
        document.getElementById("box2").innerHTML === "O"){
        alert("Winner is 0 Horizontal!")
        reset()
    }else if (document.getElementById("box3").innerHTML === "O" &&
        document.getElementById("box4").innerHTML === "O" &&
        document.getElementById("box5").innerHTML === "O"){
        alert("Winner is 0 Horizontal!")
        reset()
    }else if (document.getElementById("box6").innerHTML === "O" &&
        document.getElementById("box7").innerHTML === "O" &&
        document.getElementById("box8").innerHTML === "O"){
        alert("Winner is 0 Horizontal!")
        reset()
    // Y Vert win
    }else if (document.getElementById("box0").innerHTML === "O" &&
        document.getElementById("box3").innerHTML === "O" &&
        document.getElementById("box6").innerHTML === "O"){
        alert("Winner is 0 Vertically!")
        reset()
    }else if (document.getElementById("box1").innerHTML === "O" &&
        document.getElementById("box4").innerHTML === "O" &&
        document.getElementById("box7").innerHTML === "O"){
        alert("Winner is 0 Vertically!")
        reset()
    }else if (document.getElementById("box2").innerHTML === "O" &&
        document.getElementById("box5").innerHTML === "O" &&
        document.getElementById("box8").innerHTML === "O"){
        alert("Winner is O Vertically!")
        reset()
    }
    // diagonal O
    else if (document.getElementById("box0").innerHTML === "O" &&
        document.getElementById("box4").innerHTML === "O" &&
        document.getElementById("box8").innerHTML === "O"){
        alert("Winner is 0 diagonal!")
        reset()
    }else if (document.getElementById("box2").innerHTML === "O" &&
        document.getElementById("box4").innerHTML === "O" &&
        document.getElementById("box6").innerHTML === "O"){
        alert("Winner is O diagonal!")
        reset()
    }
        // diagonal X
    else if (document.getElementById("box0").innerHTML === "X" &&
        document.getElementById("box4").innerHTML === "X" &&
        document.getElementById("box8").innerHTML === "X"){
        alert("Winner is X diagonal!")
        reset()
    }else if (document.getElementById("box2").innerHTML === "X" &&
        document.getElementById("box4").innerHTML === "X" &&
        document.getElementById("box6").innerHTML === "X"){
        alert("Winner is X diagonal!")
        reset()
    }


}









});

