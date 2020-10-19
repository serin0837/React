// function printMyName(name){
//     console.log(name)
// }
// printMyName("Max")

// const printName= (name)=>{
//     console.log(name)
// }
// printName("Max")

// const Name= name=>{
//     console.log(name)
// }
// Name("Max")

// let multiply = (number)=>{
//     return number*2
// }

// console.log(multiply(2))


//  multiply=number=> number*2


// console.log(multiply(2))

// multiply=(number)=> number*2

// console.log(multiply(2))

// const oldObject = {
//     name1:"serin",
//     name2:"jack"
// }
// const newObject = {...oldObject, newProp: 5};

// console.log(...oldObject)
// console.log(newObject)


const numbers = [1,2,3]

const doubleNum = numbers.map(num=>{
    return num*2
})

console.log(doubleNum)

const doubleNumd = numbers.forEach(num=>{
    return [num*2]
})

console.log(doubleNumd)