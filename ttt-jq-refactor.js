var player = 'X';

window.addEventListener("load", function (){


function next() {
    player = player === 'X' ? 'O' : 'X';
    return player; 
}



//Set event listeners
for(var i = 0; i < 9; ++i){
     var $box = $("#box" + i );
      $box.on( "click", function() {
        if($(this).html()=='X' || $(this).html() =='O'){
            console.log("Already something here!")
        }
        else {
            var player = next();
            $(this).html(player);
            $(this).addClass(player);
            winner();
            
        }
    })
}

var $boxes = $(".box")
var $button = $("#clear"); 
$button.on( "click", function() {
    for (var i = 0 ; i < 9 ; ++i) {
        $boxes.eq(i).html('');
        $boxes.removeClass('X');
        $boxes.removeClass('O');
  
    }
})

var $boxes = $(".box")
function reset(){
    for (var i = 0 ; i < 9 ; ++i) {
        $boxes.eq(i).html('');
        $boxes.removeClass('X');
        $boxes.removeClass('O');   
    }
}

function winner(){
      // X Horizontal win
    if ($boxes.eq(0).html() ===  player &&
        $boxes.eq(1).html() ===  player &&
        $boxes.eq(2).html() ===  player){
        alert("Winner is " + player )
        reset()
    }else if ($boxes.eq(3).html() ===  player &&
        $boxes.eq(4).html() ===  player &&
        $boxes.eq(5).html() ===  player){
        alert("Winner is " + player )
        reset()
    }else if ($boxes.eq(6).html() ===  player &&
        $boxes.eq(7).html() ===  player &&
        $boxes.eq(8).html() ===  player){
        alert("Winner is " + player )
        reset()
    // X Vert win
    }else if ($boxes.eq(0).html() ===  player &&
        $boxes.eq(3).html() ===  player &&
        $boxes.eq(6).html() ===  player){
        alert("Winner is " + player )
        reset()
    }else if ($boxes.eq(1).html() ===  player &&
        $boxes.eq(4).html() ===  player &&
        $boxes.eq(7).html() ===  player){
        alert("Winner is " + player )
        reset()
    }else if ($boxes.eq(2).html() ===  player &&
        $boxes.eq(5).html() ===  player &&
        $boxes.eq().html() ===  player){
        alert("Winner is " + player )
        reset()
    }
        // diagonal 
    else  if ($boxes.eq(0).html() ===  player &&
        $boxes.eq(4).html() ===  player &&
        $boxes.eq(8).html() ===  player){
        alert("Winner is " + player )
        reset()
    }else if ($boxes.eq(2).html() ===  player &&
        $boxes.eq(4).html() ===  player &&
        $boxes.eq(6).html() ===  player){
        alert("Winner is " + player )
        reset()
        reset()
    }


}

});

