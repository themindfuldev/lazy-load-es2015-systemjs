// Importing Cat module synchronously
import Cat from 'cat';

// DOM content node
let contentNode = document.getElementById( 'content' );

// Rendering cat
let myCat = new Cat( 'Bugsy' );
contentNode.innerHTML += myCat.meow();

// Button to lazy load Zoo
contentNode.innerHTML += `<p><button id='loadZoo'>Lazy load <b>Zoo</b></button></p>`;

// Listener to lazy load Zoo
document.getElementById( 'loadZoo' ).addEventListener( 'click', e => {

  // Importing Zoo module asynchronously
  System.import( 'zoo' ).then( Zoo => {

    // Rendering dog
    let myDog = new Zoo.Dog( 'Sherlock', 'beagle' );
    contentNode.innerHTML += `${myDog.bark()}`;

    // Rendering wolf
    let myWolf = new Zoo.Wolf( 'Direwolf' );
    contentNode.innerHTML += `<br/>${myWolf.bark()}`;

  } );

} );