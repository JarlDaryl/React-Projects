// primitives: number, string, boolean
// complex: arrays, objects
// function types, parameters

let age: number;

age = 30;

let userName: string = 'Luis';

//complex

let hobbies: string[]; //array of strings
hobbies = ['Sports', 'Cooking'];

let person: {      //object
    name: string;
    age: number;
};

person = {
    name: 'Luis',
    age: 30
};

let people: {      //array of objects
    name: string;
    age: number;
}[];

//type inference

let course: string | number = 'React - The Complete Guide';

course = 1234;

