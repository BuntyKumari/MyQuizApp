
/* $(document).ready(function(){
 // $("button").click(function(){
    $.ajax({url: "http://www.json-generator.com/api/json/get/cfYlRVxTeG?indent=2", success: function(result){
      console.log(result);
    }});
 // });
}); */
/* var jsonData = [];
$(document).ready(function(){
    $.ajax({url: "http://www.json-generator.com/api/json/get/cfkJinfAEi?indent=2", success: function(result){
       // console.log(result);
        jsonData = result;
    }});
});
console.log(jsonData); */

/* var output = document.getElementById("output");
var jsonData = new XMLHttpRequest();
jsonData.onreadystatechange = function(){
  if (this.readyState == 4){
    var myObj = JSON.parse(this.responseText);
    console.log(myObj);
    for ( i in myObj){
      output.innerHTML += myObj[i].question + " " + myObj[i].opt1 + " " + myObj[i].opt2 + " " + myObj[i].opt3 + myObj[i].opt4 +"<br>";
    }
  }
  console.log(myObj);
}
jsonData.open("GET", "http://www.json-generator.com/api/json/get/cfkJinfAEi?indent=2", true);
jsonData.send(); */
var jsonData = [
    {
    "question": "1. OSI stands for ", 
     "opt1": "Open system interconnection",
     "opt2": "Operating system interface",
     "opt3": "Optical service implementation", 
     "opt4": "None of the mentioned", 
     "answer": "Open system interconnection"
    },
    {
    "question": "2. The OSI model has _______ layers. ", 
     "opt1": "4",
     "opt2": "6",
     "opt3": "5", 
     "opt4": "7", 
     "answer": "7"
    },
    {
    "question": "3. TCP/IP model does not have ______ layer but OSI model               have this layer. ", 
     "opt1": "Session layer",
     "opt2": "Transport layer",
     "opt3": "Application layer", 
     "opt4": "None of the mentioned", 
     "answer": "Session layer"
    },
    {
    "question": "4. Which layer links the network support layers and user     support layers ", 
     "opt1": "Session layer",
     "opt2": "Data link layer",
     "opt3": "Transport layer", 
     "opt4": "Network layer", 
     "answer": "Transport layer"
    }
  ];
