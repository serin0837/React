# 1. Getting Started

- JavaScript Library for building User Interfaces
- Components? Header, Sidebar, Headline ....
- reusable component!!!!
- react code
- why react?
  - UI state becomes difficult to handle with Vanilla JavaScript
  - Focus on Business Logic
  - Huge Ecosystem
- React Alternatives
  - Angular, Vue, jQuery(not so much)
- Single Page Application: only one HTML page, Content is (re)rendered on Client
  - Multi page application: multiple HTML pages, Content is rendered on Server
- course outline

  1. getting started
  2. the basics
  3. debugging
  4. styling components
  5. components deep dive
  6. http requests
  7. **routing**
  8. forms and validations
  9. Redux
  10. authentication( sign in etc)
  11. testing introduction
  12. deployment
  13. bonus

- how to get the most out of this course
  - code along
  - check my source code
  - ask and **answer**
  - practice, practice, practice

# 2. ES6 19.10.20

1.  let, const

- let : variable values
- const: constant values

2. Arrow functions

```js
//normal one
function myFuc() {}
//arrow function
const myFuc = () => {};
```

no more issues with the this keyword!

- when you ues this inside an arrow function it will always keep its context
- in arrow function, if there is only one argument, you can get rid of ()
- in arrow function, if there is only return statement omit the curly brace and write one line with out return statement

```js
let multiply = (number) => {
  return number * 2;
};

multiply = (number) => number * 2;
```

3. Exports and Imports(Modules)

- default export

export default person

(person export as default so we can call whatever we want to when we import.)

import person from "./person.js"
import prs from "./person.js"

- named export
  export const clean =()=>{}
  export const baseData =10

import {baseData} from "./utility.js"
import {clean} from "./utility.js

use curly brace to specifically target
named export

- also I can do like these

  - import {smth as Smth} from "./utility.js"
  - import ad bundled from "./utility.js"

4. classes

- class can have Property and Method

```js
class Person {
  name = "Max"; //property
  call = () => {}; //method
}
```

- class is instantiated like this with the new keyword

```js
const myPerson = new Person();
myPerson.call();
console.log(myPerson.name);
```

- class support inheritance
  `class Person extends Master`

5. classes, properties, methods

- Properties

```js
//Es6
constructor(){
  this.myProperty = "value"
}
//ES7 // you can skip the constructor call
myProperty = "value"
```

- Methods

```js
//ES6
myMethod(){...}
//ES7
myMethod = ()=>{...}
```

in ES7 since you use an arrow function as a property value here, you have no problems with this keyword

6. Spread and Rest Operators

- Spread?
  Used to split up array elements OR object properties

```js
const newArray = [...oldArray, 1, 2];
const newObject = { ...oldObject, newProp: 5 };
```

- rest?
  used to merge a list of function arguments into an array

```js
function sortArgs(...args) {
  return args.sort();
}

//example
const filter = (...args) => {
  return args.filter((el) => el === 1);
};

filter.log(filter(1, 2, 3)); //[1]//come as array
```

all args going to be merge in array, so you can use array methods

7. Destructuring

- Easily extract array elements or object properties and store them in variables
- Array Destructuring
  [a,b] = ["Hello","Max"]
  console.log(a)//Hello
  console.log(b)//Max
- Object Destructuring
  {name}= {name:"Max", age:28}
  console.log(name)//Max
  console.log(age)//Undefined

8. Reference and Primitive Types ( not new generation)
   object and array is reference
9. array methods( not new generation)

read wrap up again and array method get use to!!!
