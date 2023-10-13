const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
];

const people = [
  "Bernhard, Sandra",
  "Bethea, Erin",
  "Becker, Carl",
  "Bentsen, Lloyd",
  "Beckett, Samuel",
  "Blake, William",
  "Berger, Ric",
  "Beddoes, Mick",
  "Beethoven, Ludwig",
  "Belloc, Hilaire",
  "Begin, Menachem",
  "Bellow, Saul",
  "Benchley, Robert",
  "Blair, Robert",
  "Benenson, Peter",
  "Benjamin, Walter",
  "Berlin, Irving",
  "Benn, Tony",
  "Benson, Leana",
  "Bent, Silas",
  "Berle, Milton",
  "Berry, Halle",
  "Biko, Steve",
  "Beck, Glenn",
  "Bergman, Ingmar",
  "Black, Elk",
  "Berio, Luciano",
  "Berne, Eric",
  "Berra, Yogi",
  "Berry, Wendell",
  "Bevan, Aneurin",
  "Ben-Gurion, David",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bennington, Chester",
  "Bierce, Ambrose",
  "Billings, Josh",
  "Birrell, Augustine",
  "Blair, Tony",
  "Beecher, Henry",
  "Biondo, Frank",
];

const boulevards = [
  "Boulevards of Paris",
  "City walls of Paris",
  "Thiers wall",
  "Wall of Charles V",
  "Wall of Philip II Augustus",
  "City gates of Paris",
  "Haussmann's renovation of Paris",
  "Boulevards of the Marshals",
  "Boulevard Auguste-Blanqui",
  "Boulevard Barbès",
  "Boulevard Beaumarchais",
  "Boulevard de l'Amiral-Bruix",
  "Boulevard Mortier",
  "Boulevard Poniatowski",
  "Boulevard Soult",
  "Boulevard des Capucines",
  "Boulevard de la Chapelle",
  "Boulevard de Clichy",
  "Boulevard du Crime",
  "Boulevard du Général-d'Armée-Jean-Simon",
  "Boulevard Haussmann",
  "Boulevard de l'Hôpital",
  "Boulevard des Italiens",
  "Boulevard Lefebvre",
  "Boulevard de la Madeleine",
  "Boulevard de Magenta",
  "Boulevard Malesherbes",
  "Boulevard Marguerite-de-Rochechouart",
  "Boulevard Montmartre",
  "Boulevard du Montparnasse",
  "Boulevard Raspail",
  "Boulevard Richard-Lenoir",
  "Boulevard Saint-Germain",
  "Boulevard Saint-Michel",
  "Boulevard de Sébastopol",
  "Boulevard de Strasbourg",
  "Boulevard du Temple",
  "Boulevard Voltaire",
  "Boulevard de la Zone",
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's

const inventorsFrom1500s = inventors.filter(
  (person) => person.year >= 1500 && person.year < 1600
);
console.log(
  "Here I am filtering the list of inventors for those who were born in the 1500's with Array.prototype.filter()",
  JSON.stringify(inventorsFrom1500s, null, 2)
);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names

const names = inventors.map((person) => person.first + " " + person.last);
console.log(
  "Here I am giving you an array of the inventors first and last names with Array.prototype.map()",
  JSON.stringify(names, null, 2)
);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

const inventorsAgeSorting = inventors.sort((a, b) => a.year - b.year);
console.log(
  "Here I am sorting the inventors by birthdate, oldest to youngest with Array.prototype.sort()",
  JSON.stringify(inventorsAgeSorting, null, 2)
);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?

const inventorsSumOfAge = inventors.reduce(
  (acc, cur) => acc + (cur.passed - cur.year),
  0
);
console.log(
  "Here I am counting how many years all the inventors lived all together with Array.prototype.reduce()",
  JSON.stringify(inventorsSumOfAge, null, 2)
);

// 5. Sort the inventors by years lived

const inventorsYearsOfLifeSorting = inventors.sort(
  (a, b) => b.passed - b.year - (a.passed - a.year)
);
console.log(
  "Here I am sorting the inventors by years lived with Array.prototype.sort()",
  JSON.stringify(inventorsYearsOfLifeSorting, null, 2)
);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

const boulevardsFiltering = boulevards.filter((boulevar) =>
  boulevar.includes("de")
);
console.log(
  "Here I am creating a list of Boulevards in Paris that contain 'de' anywhere in the name with Array.prototype.filter() and string.prototype.includes()",
  JSON.stringify(boulevardsFiltering, null, 2)
);

// 7. sort Exercise
// Sort the people alphabetically by last name

const alphabetSorting = people.sort((a, b) =>
  a.split(",")[0].localeCompare(b.split(",")[0])
);
console.log(
  "Here I am sorting the people alphabetically by last name with Array.prototype.sort()",
  JSON.stringify(alphabetSorting, null, 2)
);

// 8. Reduce Exercise
// Sum up the instances of each of these

const data = [
  "car",
  "car",
  "truck",
  "truck",
  "bike",
  "walk",
  "car",
  "van",
  "bike",
  "walk",
  "car",
  "van",
  "car",
  "truck",
];

const sumOfInstances = data.reduce((acc, i) => {
  if (acc.hasOwnProperty(i)) acc[i] += 1;
  else acc[i] = 1;
  return acc;
}, {});

console.log(
  "Here I am suming up the instances of each of elements in the array with Array.prototype.reduce()",
  JSON.stringify(sumOfInstances, null, 2)
);
