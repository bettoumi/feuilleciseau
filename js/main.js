// function jeux(){
//         var p1=0;
//        var p2=0;
//         var t=["feuille","ciseau","pierre"];
//        while((p1<3)&&(p2<3))
//         {
//          var choixsut=prompt('entrer votre choix');
//          var choixord=t[Math.floor(Math.random()*3)];
//          console.log("l'odinateur a choisi:  "+choixord);
//          (((choixsut==="pierre")&&(choixord==="ciseau"))|| ((choixsut==="feuille")&&(choixord==="pierre"))||((choixsut==="ciseau")&&(choixord==="feuille")))? p1+=1 :
           
//           (((choixord==="pierre")&&(choixsut==="ciseau"))|| ((choixord==="feuille")&&(choixsut==="pierre"))||((choixord==="ciseau")&&(choixsut==="feuille")))? p2+=1 : console.log("egalite");

//         console.log("le score de l'ordinateur est: "+ p2 + " le score de sahbia est: " + p1 );

//         }   
           
//         (p1>p2)? console.log("sahbia est ganiante"): console.log("l'ordinateur est ganiant");

//       }
//      jeux();