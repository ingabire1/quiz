var finalGrade=0;
function correctionOfQuiz(one,two,three,four,five,six,seven,eight,nine,ten,eleven,twelve,thirteen,fourteen,fifteen,sixteen,seventeen,eighteen,nineteen,twenty){
    
  if(one==="d"){
       finalGrade+=2;
}
  if(two==="d"){
    finalGrade+=2;
  }
  if(three==="c"){
    finalGrade+=2;
  }
  if(four==="a"){
    finalGrade+=2;
  }
  if(five==="c"){
    finalGrade+=2;
  }
  if(six==="d"){
    finalGrade+=2;
  }
  if(seven==="b"){
    finalGrade+=2;
  }
  if(eight==="c"){
    finalGrade+=2;
  }
  if(nine==="a"){
    finalGrade+=2;
  }
  if(ten==="b"){
    finalGrade+=2;
  }
  if(eleven==="b"){
    finalGrade+=2;
  }
  if(twelve==="b"){
    finalGrade+=2;
  }
  if(thirteen==="d"){
    finalGrade+=2;
  }
  if(fourteen==="d"){
    finalGrade+=2;
  }
  if(fifteen==="a"){
    finalGrade+=2;
  }
  if(sixteen==="c"){
    finalGrade+=2;
  }
  if(seventeen==="d"){
    finalGrade+=2;
  }
  if(eighteen==="d"){
    finalGrade+=2;
  }
  if(nineteen==="c"){
    finalGrade+=2;
  }
  if(twenty==="c"){
    finalGrade+=2;
  }
  return finalGrade;

}

function display(final){
  document.getElementById("score").innerHTML=final;
}





$(document).ready(function(){
  $("form#quiz").submit(function(event){
    event.preventDefault();
    var answer1=$("input:radio[name=question1]:checked").val();
    var answer2=$("input:radio[name=question2]:checked").val();
    var answer3=$("input:radio[name=question3]:checked").val();
    var answer4=$("input:radio[name=question4]:checked").val();
    var answer5=$("input:radio[name=question5]:checked").val();
    var answer6=$("input:radio[name=question6]:checked").val();
    var answer7=$("input:radio[name=question7]:checked").val();
    var answer8=$("input:radio[name=question8]:checked").val();
    var answer9=$("input:radio[name=question9]:checked").val();
    var answer10=$("input:radio[name=question10]:checked").val();
    var answer11=$("input:radio[name=question11]:checked").val();
    var answer12=$("input:radio[name=question12]:checked").val();
    var answer13=$("input:radio[name=question13]:checked").val();
    var answer14=$("input:radio[name=question14]:checked").val();
    var answer15=$("input:radio[name=question15:checked").val();
    correctionOfQuiz(answer1,answer2,answer3,answer4,answer5,answer6,answer7,answer8,answer9,answer10,answer11,answer12,answer13,answer14,answer15,answer16,answer17,answer18,answer19,answer20);
    $("#phrase").show();
    display(finalGrade);
    $("form#quiz").hide();
  });
});
