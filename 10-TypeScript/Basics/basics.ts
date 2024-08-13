// primitives: number, string, boolean
// complex: arrays, objects
// function types, parameters

let age: number;

age = 30;

let userName: string = 'Luis';

//complex

let hobbies: string[]; //array of strings
hobbies = ['Sports', 'Cooking'];

type Person = {
    name: string;
    age: number;
};


let person: Person;

person = {
    name: 'Luis',
    age: 30
};

let people: Person[];

//type inference

let course: string | number = 'React - The Complete Guide';

course = 1234;

//functions & types

function add(a: number, b: number) {
    return a + b;
}

function printOutput(value: any) {
    console.log(value);
}

//Generics
function insertAtBeginning<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}
const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]