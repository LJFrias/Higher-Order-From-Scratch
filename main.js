const array1 = [2, 4, 6, 8, 10, 15]
const mapArray = array1.map(x => x * 3)

console.log(mapArray)

let foodArray = [
    {
     food: "Hamburger",
     price: 6.00
    },
    {
     food: "Fries",
     price: 3.00
    },
    {
     food: "Tacos",
     price: 4.00
    },
    {
     food: "Milkshake",
     price: 3.00
    }
]

const initialValue = 0;
const sumWithInitial = foodArray.reduce(
  (accumulator, currentValue) => accumulator + currentValue.price,
  initialValue
 )

console.log(sumWithInitial)


let peopleArray = [
    {
        name: "Bob",
        job: "Mechanic",
        age: 45
    },
    {
        name: "Carl",
        job: "Doctor",
        age: 57
    },
    {
        name: "Sally",
        job: "Cashier",
        age: 24
    },
    {
        name: "Luke",
        job: "Programmer",
        age: 29
    },
    {
        name: "Nancy",
        job: "Admin",
        age: 54
    },
    {
        name: "Rob",
        job: "Plummer",
        age: 39
    },
]

const filterByAge = (year) => {
    if(year.age >= 40){
        return true
    }
}


const overForty = peopleArray.filter(filterByAge)

console.log(overForty)