
function start_assessment() {
    
    document.getElementById("description").style.display = "none";
    document.getElementById("img").style.display = "none";
    document.getElementById("btn").style.display = "none";
    document.getElementById("hidden").style.display = "block";
   
    document.getElementById("second").style.display = "none";
    document.getElementById("third").style.display = "none";
    document.getElementById("fourth").style.display = "none";
    document.getElementById("fifth").style.display = "none";
    document.getElementById("sixth").style.display = "none";
    document.getElementById("seventh").style.display = "none";
}
/*------------Validation Function-----------------*/
 // To count blank fields.
var count = 0;
function validation(event) {
    var radio_check = document.getElementsByName('gender'); // Fetching radio button by name.
    var radio_check1 = document.getElementsByName('age');
    var radio_check2 = document.getElementsByName('live');

    var radio_check3 = document.getElementsByName('falls');
    var radio_check4 = document.getElementsByName('osteo');

    var radio_check5 = document.getElementsByName('visual');
    var radio_check6 = document.getElementsByName('heart');
    var radio_check7 = document.getElementsByName('diabetes');

    var radio_check8 = document.getElementsByName('lights');
    var radio_check9 = document.getElementsByName('sensor');

    var radio_check10 = document.getElementsByName('switches');
    var radio_check11 = document.getElementsByName('floor');
    var radio_check12 = document.getElementsByName('surface');
    
    var radio_check13 = document.getElementsByName('rugs');
    var radio_check14 = document.getElementsByName('rails');
    var radio_check15 = document.getElementsByName('steps');

    var radio_check16 = document.getElementsByName('hall');
    var radio_check17 = document.getElementsByName('cord');
    var radio_check18 = document.getElementsByName('pet');



    var input_field = document.getElementsByClassName('text_field'); // Fetching all inputs with same class name text_field and an html tag textarea.
    var text_area = document.getElementsByTagName('textarea');
    var y = 1;
    var score = 0;
    // Validating radio button for question 1
    if (radio_check[0].checked == false && radio_check[1].checked == false) {
        y = 0;
    }
    else {
        if (radio_check[0].checked) {
            score = score + 0;
        }
        if (radio_check[1].checked) {
            score = score + 0;
        }
    }
    // Validating radio button for question 2
    if (radio_check1[0].checked == false && radio_check1[1].checked == false && radio_check1[2].checked == false && radio_check1[3].checked == false && radio_check1[4].checked == false && radio_check1[5].checked == false) {
        y = 0;
    } else {
        if (radio_check1[0].checked) {
            score = score + 1;
        }
        if (radio_check1[1].checked) {
            score = score + 2;
        }
        if (radio_check1[2].checked) {
            score = score + 3;
        }
        if (radio_check1[3].checked) {
            score = score + 5;
        }
        if (radio_check1[4].checked) {
            score = score + 9;
        }
        if (radio_check1[5].checked) {
            score = score + 13;
        }
    }
    // Validating radio button for question 3

    if (radio_check2[0].checked == false && radio_check2[1].checked == false) {
        var y = 0;
    }
    else {
        if (radio_check2[0].checked) {
            score = score + 5;
        }
        if (radio_check2[1].checked) {
            score = score + 0;
        }
    }
    // Validating radio button for question 4

    if (radio_check3[0].checked == false && radio_check3[1].checked == false && radio_check3[2].checked == false) {
        var y = 0;
    }
    else {
        if (radio_check3[0].checked) {
            score = score + 0;
        }
        if (radio_check3[1].checked) {
            score = score + 5;
        }
        if (radio_check3[2].checked) {
            score = score + 10;
        }
    }

    // Validating radio button for question 5
    var q5 = " ";
    if (radio_check4[0].checked == false && radio_check4[1].checked == false) {
        var y = 0;
    }
    else {
        if (radio_check4[0].checked) {
            score = score + 0;
            q5 = "y";
        }
        if (radio_check4[1].checked) {
            score = score + 20;
            q5 = "n";
        }
    }
    // Validating radio button for question 6
    var q6 = " ";
    if (radio_check5[0].checked == false && radio_check5[1].checked == false) {
        var y = 0;
    }
    else {
        if (radio_check5[0].checked) {
            score = score + 0;
            q6 = "y";
        }
        if (radio_check5[1].checked) {
            score = score + 20;
            q6 = "n";
        }
    }

    // Validating radio button for question 7
    var q7 = " ";
    if (radio_check6[0].checked == false && radio_check6[1].checked == false) {
        var y = 0;
    }
    else {
        if (radio_check6[0].checked) {
            score = score + 0;
            q7 = "y";
        }
        if (radio_check6[1].checked) {
            score = score + 20;
            q7 = "n";
        }
    }
    // Validating radio button for question 8
    var q8 = " ";
    if (radio_check7[0].checked == false && radio_check7[1].checked == false) {
        var y = 0;
    }
    else {
        if (radio_check7[0].checked) {
            score = score + 0;
            q8 = "y";
        }
        if (radio_check7[1].checked) {
            score = score + 20;
            q8 = "n";
        }
    }
    // Validating radio button for question 9
    var q9 = " ";
    if (radio_check8[0].checked == false && radio_check8[1].checked == false) {
        var y = 0;
    }
    else {
        if (radio_check8[0].checked) {
            score = score + 0;
            q9 = "y";
        }
        if (radio_check8[1].checked) {
            score = score + 5;
            q9 = "n";
        }
    }
    // Validating radio button for question 10
    var q10 = " ";
    if (radio_check9[0].checked == false && radio_check9[1].checked == false) {
        var y = 0;
    }
    else {
        if (radio_check9[0].checked) {
            score = score + 0;
            q10 = "y";
        }
        if (radio_check9[1].checked) {
            score = score + 5;
            q10 = "n";
        }
    }
    // Validating radio button for question 11
    var q11 = " ";
    if (radio_check10[0].checked == false && radio_check10[1].checked == false) {
        var y = 0;
    }
    else {
        if (radio_check10[0].checked) {
            score = score + 0;
            q11 = "y";
        }
        if (radio_check10[1].checked) {
            score = score + 5;
            q11 = "n";
        }
    }
    // Validating radio button for question 12
    var q12 = " ";
    if (radio_check11[0].checked == false && radio_check11[1].checked == false) {
        var y = 0;
    }
    else {
        if (radio_check11[0].checked) {
            score = score + 0;
            q12 = "y";
        }
        if (radio_check11[1].checked) {
            score = score + 5;
            q12 = "n";
        }
    }

    // Validating radio button for question 13
        var q13 = " ";
    if (radio_check12[0].checked == false && radio_check12[1].checked == false) {
        var y = 0;
    }
    else {
        if (radio_check12[0].checked) {
            score = score + 0;
            q13 = "y";
        }
        if (radio_check12[1].checked) {
            score = score + 5;
            q13 = "n";
        }
    }

    // Validating radio button for question 14
    var q14 = " ";
    if (radio_check13[0].checked == false && radio_check13[1].checked == false) {
        var y = 0;
    }
    else {
        if (radio_check13[0].checked) {
            score = score + 0;
            q14 = "y";
        }
        if (radio_check13[1].checked) {
            score = score + 5;
            q14 = "n";
        }
    }

    // Validating radio button for question 15
    var q15 = " ";
    if (radio_check14[0].checked == false && radio_check14[1].checked == false) {
        var y = 0;
    }
    else {
        if (radio_check14[0].checked) {
            score = score + 0;
            q15 = "y";
        }
        if (radio_check14[1].checked) {
            score = score + 5;
            q15 = "n";
        }
    }
    // Validating radio button for question 16
    var q16 = " ";
    if (radio_check15[0].checked == false && radio_check15[1].checked == false) {
        var y = 0;
    }
    else {
        if (radio_check15[0].checked) {
            score = score + 0;
            q16 = "y";
        }
        if (radio_check15[1].checked) {
            score = score + 5;
            q16 = "n";
        }
    }
    // Validating radio button for question 17
    var q17 = " ";
    if (radio_check16[0].checked == false && radio_check16[1].checked == false) {
        var y = 0;
    }
    else {
        if (radio_check16[0].checked) {
            score = score + 0;
            q17 = "y";
        }
        if (radio_check16[1].checked) {
            score = score + 5;
            q17 = "n";
        }
    }
    // Validating radio button for question 18
    var q18 = " ";
    if (radio_check17[0].checked == false && radio_check17[1].checked == false) {
        var y = 0;
    }
    else {
        if (radio_check17[0].checked) {
            score = score + 0;
            q18 = "y";
        }
        if (radio_check17[1].checked) {
            score = score + 5;
            q19 = "n";
        }
    }
    // Validating radio button for question 19
    var q19 = " ";
    if (radio_check18[0].checked == false && radio_check18[1].checked == false) {
        var y = 0;
    }
    else {
        if (radio_check18[0].checked) {
            score = score + 0;
            q19 = "y";
        }
        if (radio_check18[1].checked) {
            score = score + 5;
            q19 = "n";
        }
    }



    
    
    if (y == 0) {
        alert("*All Fields are mandatory*"); // Notifying validation

    } else {
        window.location.href = "http://iteration.fallrelief.vision/Home/Report?id="+score+"&q5="+q5+"&q6="+q6+"&q7="+q7+"&q8="+q8+"&q9="+q9+"&q10="+q10+"&q11="+q11+"&q12="+q12+"&q13"+q13+"&q14"+q14+"&q15"+q15+"&q16"+q16+"&q17"+q17+"&q18"+q18+"q19"+q19;
    }
}


  


function prev_step0() {
    document.getElementById("second").style.display = "none";
    document.getElementById("first").style.display = "block";


}

/*---------------------------------------------------------*/
// Function that executes on click of first next button.
function next_step1() {
    document.getElementById("first").style.display = "none";
    document.getElementById("second").style.display = "block";
    

}


// Function that executes on click of first previous button.
function prev_step1() {
    document.getElementById("second").style.display = "block";
    document.getElementById("third").style.display = "none";

   
}
// Function that executes on click of second next button.
function next_step2() {
    
    document.getElementById("second").style.display = "none";
    document.getElementById("third").style.display = "block";
    
   
    
   
}
// Function that executes on click of second previous button.
function prev_step2() {
   

    document.getElementById("fourth").style.display = "none";
    document.getElementById("third").style.display = "block";
    
    
    
}
// Function that executes on click of third next button.
function next_step3() {
   
    document.getElementById("third").style.display = "none";
    document.getElementById("fourth").style.display = "block";
   
}
// Function that executes on click of third previous button.
function prev_step3() {
   
   
    document.getElementById("fifth").style.display = "none";
    document.getElementById("fourth").style.display = "block";
   
    
   
}

//Function that executes on click of fourth next button.
function next_step4() {
   
    document.getElementById("fourth").style.display = "none";
    document.getElementById("fifth").style.display = "block";
    
    
        
}
//fourth previous button


function next_step5() {

    document.getElementById("fourth").style.display = "none";
    document.getElementById("fifth").style.display = "none";
    document.getElementById("sixth").style.display = "block";

    
    }  

function prev_step5() {
    
    
    document.getElementById("sixth").style.display = "none";
    document.getElementById("fifth").style.display = "block";
   
  
}
function next_step6() {
    
    document.getElementById("sixth").style.display = "none";
    document.getElementById("seventh").style.display = "block";

}
function prev_step6() {
    
    

    document.getElementById("seventh").style.display = "none";
    document.getElementById("sixth").style.display = "block";
}

