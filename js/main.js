
     
    // var input = document.getElementById("name");
     var p = document.getElementById("joueurname");
      p.innerHTML="";
      var x = document.getElementById("name");
     x.value = "";

   // input.onkeydown = function(){
   //  value = this.value;
   //  p.innerHTML = value;
   //  }
   function saisinom() {
        var x = document.getElementById("name");
       x.value = x.value.toUpperCase();
       p.innerHTML = x.value;
     }



        var p1=0;
          var p2=0;
        var t=document.getElementsByClassName("choixo");
      
    
        var choixut;
        function choixClick(but)
         {
           
             
            choixut =but.id;
           
               but.classList.add("z-indexc");
                              
              var choixord=t[Math.floor(Math.random()*3)]
             // alert(choixord.alt);
           
             choixord.classList.add("z-indexO");
         
             if(((choixut==="pierre")&&(choixord.alt==="ciseau"))|| ((choixut==="feuille")&&(choixord.alt==="pierre"))||((choixut==="ciseau")&&(choixord.alt==="feuille")))
             { p1+=1 ;}
           else if(((choixord.alt==="pierre")&&(choixut==="ciseau"))|| ((choixord.alt==="feuille")&&(choixut==="pierre"))||((choixord.alt==="ciseau")&&(choixut==="feuille"))){p2+=1;} 
           document.getElementById("scorej").innerHTML=p1;
           document.getElementById("scoreord").innerHTML=p2;
           if(p1>=3||p2>=3)
           {
             alert("fin de jeux");
           }
         }
        
  
           
      
      
     