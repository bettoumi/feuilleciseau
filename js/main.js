
     
    //document.getElementById("btjouer").onclick = function() {jouer()};
    //
   var p1=0;
  var p2=0;
   p=document.getElementById("joueurname");
  
    
 function jouer()

{
     p1=0;
     p2=0;
    
   document.getElementById("name").value="";
    document.getElementById("scorej").innerHTML=0;
  document.getElementById("scorord").innerHTML=0;

}  
function saisinom() {
        var x = document.getElementById("name");
        x.value = x.value.toUpperCase();
        p.innerHTML =x.value;
       }
function choixClick(but) {
      
        
  saisinom();
     
     var u=but.id;

     
        var t=document.getElementsByClassName("choixo");
        var o=t[Math.floor(Math.random()*3)];
  

       if(((u==="pierre")&&(o.alt==="ciseau"))||
        ((u==="feuille")&&(o.alt==="pierre"))||
        ((u==="ciseau")&&(o.alt==="feuille")))
             { p1+=1 ;}
           else if(((o.alt==="pierre")&&(u==="ciseau"))||
            ((o.alt==="feuille")&&(u==="pierre"))||
            ((o.alt==="ciseau")&&(u==="feuille"))){p2+=1;} 
           document.getElementById("scorej").innerHTML=p1;
          document.getElementById("scorord").innerHTML=p2;
    
           
          

         if(p1>=3||p2>=3){
              if((p1==3)&&(p2<33)) 
                {document.getElementById("ganiant").innerHTML="WOAH "+ p.innerHTML +" A GANIER";
                    jouer() ;  }
              else if( (p2==3)&&(p1<3))
               {document.getElementById("ganiant").innerHTML="L'ORDINATEUR A GANIER";

                 jouer();}
                else if((p1==3)&&(p2==3)){document.getElementById("ganiant").innerHTML="EGALITEE";
               jouer();

               }}


     }

    