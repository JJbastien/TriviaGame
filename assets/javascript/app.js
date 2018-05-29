$(document).ready ( function(){
   
    $("#button").on("click", function(){
        var correct = 0;
        var wrong = 0;
        var question1 = $("input[name = 'question1']:checked").val();
        var question2 = $("input[name = 'question2']:checked").val();
        var question3 = $("input[name = 'question3']:checked").val();
        var question4 = $("input[name = 'question4']:checked").val();
        var question5 = $("input[name = 'question5']:checked").val();
        var question6 = $("input[name = 'question6']:checked").val();
        var question7 = $("input[name = 'question7']:checked").val();
        var question8 = $("input[name = 'question8']:checked").val();
        var question9 = $("input[name = 'question9']:checked").val();
        var question10 = $("input[name = 'question10']:checked").val();

        if (question1 == "Meggido")
          correct ++;
          
          if (question2 == "June 6th 1944")
          correct ++;
          
          if (question3 == "Waterloo")
          correct ++;
        
          if (question4 == "Dwight Eisenhower")
          correct ++;
        
          if (question5 == "China")
          correct ++
          
          if (question6 == "Stalingrad")
          correct ++;
          
          if (question7 == "William the Conqueror")
          correct ++;
          
          if (question8 == "116 years")
          correct ++;
          
          if (question9 == "Troy")
          correct ++;
          
          if (question10 == "Marathon")
          correct ++;

         if (question1 != "Meggido")
         wrong ++

         if (question2 != "June 6th 1944")
         wrong ++

         if (question3 != "Waterloo")
         wrong ++

         if (question4 != "Dwight Eisenhower")
          wrong ++;

          if (question5 != "China")
          wrong ++ 

          if (question6 != "Stalingrad")
          wrong ++ 

          if (question7 != "William the Conqueror")
          wrong ++ 

          if (question8 != "116 years")
          wrong ++

          if (question9 != "Troy")
          wrong ++

          if (question10 != "Marathon")
          wrong ++

          

         
        
      
            
        
    
    document.getElementById("result").style.visibility = "visible";
    document.getElementById("right").innerHTML = "You have " + correct + " correct"
    document.getElementById("wrong").innerHTML = "You missed " + wrong + " question"

    
    
    
    
    
    })
 

})





