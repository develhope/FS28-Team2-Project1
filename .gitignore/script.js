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
console.log('Team in alphabetical order:');
sortedByName.forEach((person) =>
  console.log(`${person.surname} ${person.name}`)
);

// Stampa i nomi in ordine di età (name age).
const sortedByAge = people.slice().sort((a, b) => a.age - b.age);
console.log('\nTeam in age order:');
sortedByAge.forEach((person) => console.log(`${person.name} ${person.age}`));

// Stampa l'età media.
const middleIndex = people.reduce((acc, person, index) => {
  acc = (acc * index + person.age) / (index + 1);
  return acc;
}, 0);
console.log(`\nTeam middle age: ${middleIndex}`);

// Stampa chi ha un animale domestico (name petName).

console.log('\nMembers who have a pet:');
const peopleWithPets = people.filter((person) => person.petName).map((person) => person.name);

if (peopleWithPets.length === 0) {
  console.log("No one has a pet")
}
console.log(peopleWithPets.join(`, `));

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

// Print if there are some members with the same name (name).

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