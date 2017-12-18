// Interfaces provide a blueprint for a typescript object

interface People {
    name: string;
    age: number;
    favourite_colour?: string;
    // ^ optional ^
}

function describePerson(person: People) {
    console.log("This person's name is " + person.name);
    console.log("Their age is " + person.age);
}

describePerson({ name: 'Edwidge', age: 35 });