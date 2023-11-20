import React from 'react';

// Creating variables 

let name: string;
let age: number | string; // could be both number and string
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];
let anything: any;
let personName: unknown; // better then any

// Creating a new object

type Person = {
  name: string;
  age?: number; // age is optional
};

let person: Person = {
  name: "Bruno",
};

let lotsOfPeople: Person[]

// Creating a function

let printName: (name: string) => void;

// function printName(name: string) {
//   console.log(name);
// }

// Difference between type and interface

type X = {
  a: string;
  b: number;
};

// In this type we have both Y and X 
type Y = X & {
  c: string;
  d: number;
};

interface AnotherPerson {
  name: string;
  age?: number;
}

// Guy has been extended with AnotherPerson
interface Guy extends Person {
  professional: string;
}
