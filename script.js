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

// ---EX2---
// Write a function that displays every second that has passed on the page since it was opened. The display should be refreshed every second. If 60 seconds are elapsed, write "a minute has passed", then "2 minutes have passed" (for 120 seconds and more), etc.
//---MON APPROCHE---
// 1. calculer le temps écouler sur la page et le log dans la console. Si +60 alors affiché "une minute est passée"
// 2. utiliser setInterval pour refresh

const startTime = new Date(); // constante dans laquelle on stock en mémoire la date d'ouverture de la page

function ElapsedTime() {
  const currentTime = new Date();
  const elapsedSeconds = Math.floor((currentTime - startTime) / 1000); // constante dans laquelle on stock le nombre de seconde passée. Pq ça et pas simplement : (currentTime - startTime) / 1000 ? Car il faut arrondire sinon on a des truc du style 1.002s, 2.0564s, 3,351s etc

  if (elapsedSeconds >= 60) { // Si il y a plus de 60 secondes de passées, alors on veut afficher le nombre de MINUTE passée 
    const elapsedMinutes = Math.floor(elapsedSeconds / 60); // on divise par 60 pour voir si la minute est atteinte ou pas, c'est le cas quand 60/60=1
    if (elapsedMinutes === 1) {
      console.log("1 minute est passée");
    } else {
      console.log(elapsedMinutes + " minutes sont passées");
    }
  } else {
    // si il y a moins que 60s de passées, alors on veut afficher ce nombre de SECONDE passée
    console.log(elapsedSeconds + " secondes sont passées");
  }
}

setInterval(ElapsedTime, 1000); // refresh la fonction toute les 1s
