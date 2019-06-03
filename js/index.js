var jsonData = [];
var i = 0 ;
var correctCount = 0;

function generate(index){
    if(!jsonData[index]){
        return;
    }
    else {
            document.getElementById("question").innerHTML = jsonData[index].question;
            document.getElementById("option1").innerHTML = jsonData[index].opt1;
            document.getElementById("option2").innerHTML = jsonData[index].opt2;
            document.getElementById("option3").innerHTML = jsonData[index].opt3;
            document.getElementById("option4").innerHTML = jsonData[index].opt4;
        }  
}

function checkAnswer(){
    if(document.getElementById("opt1").checked && jsonData[i].opt1 == jsonData[i].answer){
        correctCount++;
    }
    if(document.getElementById("opt2").checked && jsonData[i].opt2 == jsonData[i].answer){
        correctCount++;
    }
    if(document.getElementById("opt3").checked && jsonData[i].opt3 == jsonData[i].answer){
        correctCount++;
    }
    if(document.getElementById("opt4").checked && jsonData[i].opt4 == jsonData[i].answer){
        correctCount++;
    }
    // increase i for next question 
    
    i++;
    if(jsonData.length-1 < i){
        document.write("<div  style = 'color: white;background-color: #467706;height: 160px;font-size: 26px;text-align: center;;border-radius: 33px;padding: 23px;'>******* Your score is : "+correctCount+ "*******</div>");
    }
    generate(i);  
}
$(document).ready(function(){
    $.ajax({url: "http://www.json-generator.com/api/json/get/cfkJinfAEi?indent=2", success: function(result){
       //console.log(result);
        jsonData = result;
//initialize the first question
//generate(i);
//generate from json array data with index

    //callback to generate
    generate(i);

    }});
});
console.log(jsonData);





