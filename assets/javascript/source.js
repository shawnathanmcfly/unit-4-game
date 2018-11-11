////////////////////////////////////////////////////////////
//
//                       Crystal Collector
//
//                             V1.0
//
//
////////////////////////////////////////////////////////////

//crystal values
var bv, pv, rv, yv;

//opposing and player values
var oppV, pV;

// wins and losses counters
var loss = 0, win = 0;

// returns -1 if smallest is bigger that bigger arg
function randomValue( smallest, biggest ){

    let i = Math.floor((Math.random() * biggest) + smallest);

    if( smallest > biggest ){
        i = -1;
    }
    return i;
}

function nextGame(){

    bv = randomValue( 1, 12 );
    pv = randomValue( 1, 12 );
    rv = randomValue( 1, 12 );
    yv = randomValue( 1, 12 );

    oppV = randomValue( 19, 120 );
    pV = 0;

    $("#oWin").html(oppV);
    $("#pWin").html(pV);
}

function newGame(){

    nextGame();
    loss = 0;
    win = 0;
    $("#losses").html("LOSSES <br>"+ loss);
    $("#wins").html("WINS <br>"+ win);
}

$("#r_gem, #y_gem, #b_gem, #p_gem").on( "click", function(){
 
    let clkId = $(this).attr('id');

    switch(clkId){
        case "r_gem":
        pV += rv;
        break;
        case "b_gem":
        pV += bv;
        break;
        case "y_gem":
        pV += yv;
        break;
        case "p_gem":
        pV += pv;
        break;
        default:
        break;
    }

    if( pV > oppV){
        loss++;
        $("#losses").html("LOSSES <br>"+ loss);
        nextGame();
    }else if( pV === oppV){
        win++;
        $("#wins").html("WINS <br>"+ win);
        nextGame();
    }

    $("#pWin").html(pV);

});
    
window.onload = newGame();

