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
    favoriteVideoGame: 'The Last Of Us',
    favoriteFilm: 'The Truman Show',
    favoriteBook: 'Harry Potter and The Chamber of Secrets',
    petName: 'Bua'
  },
  {
    name: 'Marzia',
    surname: 'Bragagnolo',
    age: 29,
    city: 'Resana',
    hobby: [
      {
        id: 1,
        name: 'Crocheting'
      },
      {
        id: 2,
        name: 'Games'
      },
      {
        id: 3,
        name: 'Wood art'
      }
    ],
    favoriteFood: 'Gnocchi',
    favoriteVideoGame: "Assassin's creed",
    favoriteFilm: 'Una settimana da Dio',
    favoriteBook: "La Passe-Miroir Livre 4, La tempête des écho",
    petName: 'Uga'
  },
  {
    name: 'Lorenzo',
    surname: 'de Vita',
    age: 23,
    city: 'Napoli',
    hobby: [
      {
        id: 1,
        name: 'Videogames'
      },
      {
        id: 2,
        name: 'Music'
      },
      {
        id: 3,
        name: 'Cinema'
      }
    ],
    favoriteFood: 'Pizza',
    favoriteVideoGame: 'Baldur\'s gate 3',
    favoriteFilm: 'Lord of the rings',
    favoriteBook: 'Zanna bianca',
    petName: ''
  },
  // Aggiungi nuovi oggetti qui!
];


//Stampa i nomi in ordine alfabetico (surname name).
const sortedByName = people.slice().sort((a, b) => {
  if (a.surname === b.surname) {
    return a.name.localeCompare(b.name);
  }
  return a.surname.localeCompare(b.surname);
});
console.log('Team in alphabetical order:');
sortedByName.forEach((person) =>
  console.log(`${person.surname} ${person.name}`)
);

// Stampa i nomi in ordine di età (name age).
const sortedByAge = people.slice().sort((a, b) => a.age - b.age);
console.log('\nTeam in age order:');
sortedByAge.forEach((person) => console.log(`${person.name} ${person.age}`));

// Stampa l'età media.
const middleAge = people.reduce((acc, person) => acc + person.age, 0) / people.length;
console.log(`\nTeam's middle age: ${middleAge}`);

//Stampa chi ha un animale domestico (name petName).
console.log('\nMembers who have a pet:');
const peopleWithPets = people.slice().filter((person) => person.petName);
if (peopleWithPets.length > 0) {
  peopleWithPets.forEach((person) => {
    console.log(`${person.name} has a pet named ${person.petName}.`);
  });
} else {
  console.log('Nobody in the team has a pet.');
}

// Stampa chi ha indicato League of Legends come gioco preferito. (name).
let anyoneLikesLol = false;

console.log('\nMembers who like League of Legends:');
people.forEach((person) => {
  if (
    person.favoriteVideoGame.toLowerCase().includes('lol') ||
    person.favoriteVideoGame.toLowerCase().includes('league of legends')
  ) {
    console.log(`${person.name}`);
    anyoneLikesLol = true
  }
});

if (!anyoneLikesLol) {
  console.log(`No one likes League of Legends`);
}

// Stampa eventuali nomi duplicati (name).

let sameName = false;
const names = {};

console.log('\nMembers with the same name:');
people.forEach((person, index) => {
    if (names[person.name]) {
        names[person.name].push(index);
        sameName = true;
    } else {
        names[person.name] = [index];
    }
});

for (const index in names) {
    if (names[index].length > 1) {
        console.log(`${index}:`);
        names[index].forEach(index => console.log(`- ${people[index].name} ${people[index].surname}`));
    }
}

if (!sameName) {console.log(`All people have different names`)};