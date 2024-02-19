const athletes = [
    { name: "Amar", age: 17, weight: 55, height: 179 },
    { name: "Matic", age: 25, weight: 45, height: 196 },
    { name: "Gal", age: 36, weight: 100, height: 155 },
    { name: "Zorko", age: 43, weight: 95, height: 182 },
    { name: "Urban", age: 6, weight: 80, height: 147 },
    { name: "Rok", age: 76, weight: 85, height: 165 },
];

athletes.forEach(athlete => console.log(athlete));

athletes.forEach(athlete => console.log(athlete.height));

athletes.map(athlete => console.log(athlete.weight / 100 * 50));

console.log(athletes.filter(athlete => athlete.height > 180));

sortAge = athletes.sort((a, b) => a.age > b.age ? 1 : -1);

subtractAges = athletes.reduce((total, a) => total + a.age, 0);

console.log(subtractAges);