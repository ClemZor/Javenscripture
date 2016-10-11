// JavaScript File

// code OK via http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_prompt ; ici : ReferenceError: prompt is not defined...  du à Node.js ??!

var choix_race= prompt("Veuillez choisir votre race : ELFE ou HUMAIN ? [autres_à_venir...]").toUpperCase();  
var choix_classe= prompt("Maintenant êtes vous plutôt MAGE ou GUERRIER(E) ? [autres_à_venir..]").toUpperCase();

var force_random_elfe = Math.floor(Math.random() * 5 +1);  // force de 1 à 6
var magie_random_elfe = Math.floor(Math.random() * 9 +1);  ////////////////////////// magie de 1 à 10 MAIS je veux de 4 à 10 !!! => condition
var resistance_random_elfe = Math.floor(Math.random() * 5 +1); // resistance de 1 à 6

var force_random_humain = Math.floor(Math.random() * 9 +1); /////////////////////// force 1 à 10  MAIS je veux de 4 à 10 !!!!
var magie_random_humain = Math.floor(Math.random() * 5 +1); // magie de 1 à 6
var resistance_random_humain = Math.floor(Math.random() * 9 +1); ///////////////// 1 à 10  MAIS je veux de 5 à 10 !

// COMBAT  var combattre = true;   // .... while(combattre) .....

switch(choix_race) {
        case 'ELFE' :
                        if ( choix_classe === 'MAGE' && force_random_elfe >= 4 ) {  
                                                                                   var force_elfe = force_random_elfe - 2;
                                                                                    alert('Votre force est de ' + force_elfe);
                                                                                   // return force_elfe;
                                                                                 }    
                           
                      else if ( choix_classe === 'GUERRIER' && force_random_elfe <=3 ) { // si guerrier et si <=3 alors +3
                                                                                    var force_elfe = force_random_elfe +3;
                                                                                    alert('Votre force est de ' + force_elfe);
                                                                                    }
                           
                            else {  var force_elfe = force_random_elfe;    
                                    alert('Votre force est de ' + force_elfe); };
                        
                       
                        if ( choix_classe === 'MAGE' && magie_random_elfe <=6 ) {           //si mage et si <=6 alors +3
                                                                                    var magie_elfe = magie_random_elfe + 3;
                                                                                    alert('Votre magie est de ' + magie_elfe);
                                                                                }
                           
                            else if ( choix_classe === 'GUERRIER' && magie_random_elfe >=7 ) {      //  si guerrier et si >=7 -2
                                                                                    var magie_elfe = magie_random_elfe -2;
                                                                                    alert('Votre magie est de ' + magie_elfe);
                                                                                }
                             else {  var magie_elfe = magie_random_elfe;    
                                    alert('Votre magie est de ' + magie_elfe); };
     
        break;
        case 'HUMAIN':    console.log('humain');
        
}       



