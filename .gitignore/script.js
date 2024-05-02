// Crea un array di oggetti con i seguenti parametri:
// - name
// - surname
// - age
// - city
// - hobby
// - favoriteFood
// - favoriteVideoGame
// - favoriteFilm
// - favoriteBook
// - petName

const people = [
  {
    name: 'Mario',
    surname: 'Sica',
    age: 26,
    city: 'San Ferdinando di Puglia',
    hobby: [
      {
        id: 1,
        name: 'Gym'
      },
      {
        id: 2,
        name: 'Cars'
      },
      {
        id: 3,
        name: 'IT'
      }
    ],
    favoriteFood: 'Parmigiana',
    favoriteVideoGame: 'Age of Empires - Saga',
    favoriteFilm: 'Inception',
    favoriteBook: 'Odissea',
    petName: 'Lilo'
  },
  {
    name: 'Luigi',
    surname: 'Cavalli',
    age: 26,
    city: 'Reggio Calabria',
    hobby: [
      {
        id: 1,
        name: 'Cooking'
      },
      {
        id: 2,
        name: 'Videogames'
      },
      {
        id: 3,
        name: 'Hiking'
      }
    ],
    favoriteFood: 'Pizza',
    favoriteVideoGame: 'The Last of Us',
    favoriteFilm: 'The Truman Show',
    favoriteBook: 'Harry Potter and The Chamber of Secrets',
    petName: 'Bua'
  }
  // Aggiungi nuovi oggetti qui!
];

// Stampa i nomi in ordine alfabetico (surname name).
const sortedByName = people.slice().sort((a, b) => {
  if (a.surname === b.surname) {
    return a.name.localeCompare(b.name);
  }
  return a.surname.localeCompare(b.surname);
});
console.log('Team names in alphabetical order:');
sortedByName.forEach((person) => {
  console.log(`${person.surname} ${person.name}`);
});

// Stampa i nomi in ordine di età (name age).
const sortedByAge = people.slice().sort((a, b) => a.age - b.age);
console.log('Team names by age:');
sortedByAge.forEach((person) => {
  console.log(`${person.name} ${person.age}`);
});

// Stampa l'età media.
const middleAge = people.reduce((acc, person) => acc + person.age, 0) / people.length;
console.log(`Team's middle age: ${middleAge}`);

//Stampa chi ha un animale domestico (name petName).
console.log('Members who have a pet:');
const peopleWithPets = people.slice().filter((person) => person.petName);
if (peopleWithPets.length > 0) {
  peopleWithPets.forEach((person) => {
    console.log(`${person.name} has a pet named ${person.petName}.`);
  });
} else {
  console.log('Nobody in the team has a pet.');
}

// Stampa chi ha scritto 'LOL' o 'League of Legends come videogioco preferito (name).
const peopleWhoLikeLol = people.slice().filter((person) => {
  return (
    person.favoriteVideoGame.toLowerCase() === 'lol' ||
    person.favoriteVideoGame.toLowerCase() === 'league of legends'
  );
});
console.log('Members who put League of Legends as favorite videogame:');
if (peopleWhoLikeLol > 0) {
  peopleWhoLikeLol.forEach((person) => {
    console.log(`${person.name} likes the videogame "League of Legends".`);
  });
} else {
  console.log(
    'Nobody in the team put League of Legends as favorite videogame.'
  );
}

// Stampa se ci sono membri con lo stesso nome (name).
