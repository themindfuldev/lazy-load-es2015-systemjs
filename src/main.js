import Cat from './cat.js';

let contentNode = document.getElementById('content');

let myCat = new Cat('Bugsy');
contentNode.innerHTML += myCat.meow();

contentNode.innerHTML += `<p><button id='loadZoo'>Lazy load <b>Zoo</b></button></p>`;

document.getElementById('loadZoo').addEventListener('click', e => {
  System.import('./src/zoo.js').then(Zoo => {

	let myDog = new Zoo.Dog('Sherlock', 'beagle');
	contentNode.innerHTML += `${myDog.bark()}`;

	let myWolf = new Zoo.Wolf('Direwolf');
	contentNode.innerHTML += `<br/>${myWolf.bark()}`;
  });
});