   var yourchoice=document.querySelector(".yourchoice");
   var cpuchoice=document.querySelector(".cpuchoice");
   var btnsang=document.querySelector(".sang");
   var btnkaghaz=document.querySelector(".kaghaz");
   var btngheychi=document.querySelector(".gheychi");
   var yourscoretxt=document.querySelector(".yourscore");
   var cpuscoretxt=document.querySelector(".cpurscore");
   var result=document.querySelector(".result");
   
   
   var yourscore=0;
   var cpuscore=0;


var numberrandom=Math.floor(Math.random()*3+1);


  btnsang.addEventListener("click",function(){
    var numberrandom=Math.floor(Math.random()*3+1);
    yourchoice.innerHTML="your choice : <strong>sang</strong>";
    
    if (numberrandom==1) {
      cpuchoice.innerHTML="cpu choice : <strong>sang</strong>";
      result.textContent="equal"

      
    }else if (numberrandom==2) {
      cpuchoice.innerHTML="cpu choice : <strong>kaghaz</strong>";
      result.textContent="you loose"
      cpuscore++;
      cpuscoretxt.textContent="cpu score:"+cpuscore;
      
    }else if (numberrandom==3) {
      cpuchoice.innerHTML="cpu choice : <strong>gheychi</strong>";

      result.textContent="you win"
      yourscore++;
      yourscoretxt.textContent="your score:"+yourscore;
    } 
    

  })
  btnkaghaz.addEventListener("click",function(){
    var numberrandom=Math.floor(Math.random()*3+1);
    yourchoice.innerHTML="your choice : <strong>kaghaz</strong>";
    if (numberrandom==1) {
      cpuchoice.innerHTML="cpu choice : <strong>sang</strong>";
      result.textContent="you win"
      yourscore++;
      yourscoretxt.textContent="your score:"+yourscore;

      
    }else if (numberrandom==2) {
      cpuchoice.innerHTML="cpu choice : <strong>kaghaz</strong>";
      result.textContent="equal"
      
    }else if (numberrandom==3) {
      cpuchoice.innerHTML="cpu choice : <strong>gheychi</strong>";
      result.textContent="you loose"
      cpuscore++;
      cpuscoretxt.textContent="cpu score:"+cpuscore;
      
    } 

  })
  btngheychi.addEventListener("click",function(){
    var numberrandom=Math.floor(Math.random()*3+1);
    yourchoice.innerHTML="your choice : <strong>gheychi</strong>";
    if (numberrandom==1) {
      cpuchoice.innerHTML="cpu choice : <strong>sang</strong>";
      result.textContent="you loose"
      cpuscore++;
      cpuscoretxt.textContent="cpu score:"+cpuscore;
      
      
      
    }else if (numberrandom==2) {
      cpuchoice.innerHTML="cpu choice : <strong>kaghaz</strong>";
      result.textContent="you win"
      yourscore++;
      yourscoretxt.textContent="your score:"+yourscore;

      
    }else if (numberrandom==3) {
      cpuchoice.innerHTML="cpu choice : <strong>gheychi</strong>";
      result.textContent="equal"
      
    } 

  })



   
   


   
  
