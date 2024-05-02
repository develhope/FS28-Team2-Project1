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