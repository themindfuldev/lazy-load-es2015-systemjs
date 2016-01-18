import { Dog, Wolf } from './zoo';

var contentNode = document.getElementById('content');

var myDog = new Dog('Sherlock', 'beagle');
contentNode.innerHTML += myDog.bark();

var myWolf = new Wolf('Direwolf');
contentNode.innerHTML += `<br/>${myWolf.bark()}`;

document.getElementById('loadCat').addEventListener('click', e => {
  System.import('./cat').then(Cat => {
    var myCat = new Cat('Bugsy');
    contentNode.innerHTML += `<br/>${myCat.meow()}`;
  });
});