// ---EX1---
// Write a function that mimics the behaviour of a typewriter.
// Using setInterval display the word Keller one character at a time (one letter per second). Once the word is written on the screen clear the interval.

//----MON APPROCHE----
// parcourir les éléments d'un array et conbsole.log chaque élement de l'array

// fonction set interval : let timerId = setInterval(func, [delay], [arg1], [arg2], ...)

// ---affiche KELLER en boucle toute les 1s, ce n'est pas ce qu'on veut---
// let arrayKellerLetter = ["K", "E", "L", "L", "E", "R"];
// setInterval(function displayKeller() {
//   arrayKellerLetter.forEach((element) => {
//     console.log(element);
//   });
// }, 1000); //la synthaxe de setInterval est setInterval(function, delay) d'ou le 5000 à la fin
// displayKeller();

// ---> if else pour check quand le mot est ecrit pour stop la boucle (si plus petit que la longueur de l'array alors on continue la boucle, sinon on stop)

function displayKeller() {
  let arrayKellerLetter = ["K", "E", "L", "L", "E", "R"];
  let index = 0; //variable qui va nous permettre de check la longueur du mot

  const intervalId = setInterval(function () {
    if (index < arrayKellerLetter.length) {
      //si index est plus petit que la longueur de l'array, ça veut dire que le mot n,'est pas encore ecrit au complet, donc on continue de log la lettre

      console.log(arrayKellerLetter[index]);
      index++;
    } else {
      clearInterval(intervalId); //stop via clearInterval quand le mot est ecrit au complet
    }
  }, 1000); // la synthaxe de setInterval est setInterval(function, delay) d'ou le 1000 à la fin pour dellay chaque lettre de 1s
}

displayKeller();


// ---EX2--
