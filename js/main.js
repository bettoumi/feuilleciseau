
     
    //function jouer()
    //{
     var p = document.getElementById("joueurname");
      p.innerHTML="";
     
     
      var p1=0;
      var p2=0;

   // input.onkeydown = function(){
   //  value = this.value;
   //  p.innerHTML = value;
   //  }
     function saisinom() {
        var x = document.getElementById("name");
       x.value = x.value.toUpperCase();
       p.innerHTML = x.value;
       }



        
        var t=document.getElementsByClassName("choixo");
      
    
        var choixut;
        function choixClick(but)
         {
           
             
            choixut =but.id;
           
               but.classList.add("z-indexc");

                              
              var choixord=t[Math.floor(Math.random()*3)];
             
           
             choixord.classList.add("z-indexO");
         
             if(((choixut==="pierre")&&(choixord.alt==="ciseau"))|| ((choixut==="feuille")&&(choixord.alt==="pierre"))||((choixut==="ciseau")&&(choixord.alt==="feuille")))
             { p1+=1 ;}
           else if(((choixord.alt==="pierre")&&(choixut==="ciseau"))|| ((choixord.alt==="feuille")&&(choixut==="pierre"))||((choixord.alt==="ciseau")&&(choixut==="feuille"))){p2+=1;} 
           document.getElementById("scorej").innerHTML=p1;
           document.getElementById("scorord").innerHTML=p2;
           
            if(p1>=3||p2>=3)
              if((p1==3)&&(p2=!3)) {document.getElementById("ganiant").innerHTML="WOAH "" AS GANIER";}
              else if( (p2==3)&&(p1=!3)) {document.getElementById("ganiant").innerHTML="L'ORDINATEUR A GANIER";}
                else {document.getElementById("ganiant").innerHTML="EGALITEE";}
           
         }
        
  //}
      
      
      
     