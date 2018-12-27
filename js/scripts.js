var result=0;
function correction(one,two,three,four,five,six,seven,eight,nine,ten,eleven,twelve,thirteen,fourteen,fifteen){
    
  if(one==="d"){
    result+=1;
}
  if(two==="d"){
    result+=1;
  }
  if(three==="c"){
    result+=1;
  }
  if(four==="a"){
    result+=1;
  }
  if(five==="c"){
    result+=1;
  }
  if(six==="d"){
    result+=1;
  }
  if(seven==="b"){
    result+=1;
  }
  if(eight==="c"){
    result+=1;
  }
  if(nine==="a"){
    result+=1;
  }
  if(ten==="b"){
    result+=1;
  }
  if(eleven==="b"){
    result+=1;
  }
  if(twelve==="b"){
    result+=1;
  }
  if(thirteen==="d"){
    result+=1;
  }
  if(fourteen==="d"){
    result+=1;
  }
  if(fifteen==="a"){
    result+=1;
  }
  return result;

}

function forDisplay(final){
  document.getElementById("grade").innerHTML=final;
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
    var answer15=$("input:radio[name=question15]:checked").val();
    console.log(answer14)
    correction(answer1,answer2,answer3,answer4,answer5,answer6,answer7,answer8,answer9,answer10,answer11,answer12,answer13,answer14,answer15);
    $("#output").show();
    forDisplay(result);
    $("form#quiz").hide();
  });
});
