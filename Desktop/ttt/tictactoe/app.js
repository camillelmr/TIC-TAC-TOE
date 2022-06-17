const container = document.querySelector("container");
let player = document.querySelector("player");
let result1 = document.querySelector("result1");
let result2 = document.querySelector("result2");
let matchsNul = document.querySelector("matchnul")





const  scoring= {
    playergame: 1,
    resultplayer1: 0,
    resultplayer2: 0,
    matchnul: 0,
    case1: 0,
    case2: 0,
    case3: 0,
    case4: 0,
    caes5: 0,
    case6: 0,
    case7: 0,
    case8: 0,
    case9: 0,
}; 

const victory = () => {
   if(
        (scoring.case1 == scoring.case2 && scoring.case2 == scoring.case3 && scoring.case1 > 0) ||
        (scoring.case1 == scoring.case4 && scoring.case4 == scoring.case7 && scoring.case1 > 0) ||
        (scoring.case1 == scoring.case5 && scoring.case5 == scoring.case9 && scoring.case1 > 0) ||
        (scoring.case1 == scoring.case2 && scoring.case2 == scoring.case3 && scoring.case1 > 0) ||
        (scoring.case3 == scoring.case5 && scoring.case5 == scoring.case7 && scoring.case3 > 0) ||
        (scoring.case3 == scoring.case6 && scoring.case6 == scoring.case9 && scoring.case3 > 0) ||
        (scoring.case2 == scoring.case5 && scoring.case5 == scoring.case8 && scoring.case2 > 0) ||
        (scoring.case4 == scoring.case5 && scoring.case5 == scoring.case9 && scoring.case4 > 0) ||
        (scoring.case7 == scoring.case8 && scoring.case8 == scoring.case9 && scoring.case7 > 0) 
   ) {   
       console.log('victory');
        

        
        return true;
    } else if (
    scoring.case1 !== 0 &&
    scoring.case2 !== 0 &&
    scoring.case3 !== 0 &&
    scoring.case4 !== 0 &&
    scoring.case5 !== 0 &&
    scoring.case6 !== 0 &&
    scoring.case7 !== 0 &&
    scoring.case8 !== 0 &&
    scoring.case9 !== 0
  ) {
    return null;
  } else {
        return false;
        }
    };


   

