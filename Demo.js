const greetingMachine = (name, greeting) => {
    return greeting(name)
}

const hi = (name) => {
    return `Hi, ${name}!`
}

const yo = (name) => {
    return `yo, ${name}, what's up?`
}

const nice = (name) => {
    return `Nice to meet ya, ${name}`
}

let people = {
    titles: ["Mr.", "Mrs.", "Dr."],
    firstNames: ["carl", "kyle", "Lukas"],
    lastNames: ["Work", "Borcik", "nessi"],
}
console.log("-----------------------------------")
let greetings = {
    hi: (title, firstName, lastName) => {
        return `Hi, ${title} ${firstName} ${lastName}!`
    },
    yo: (title, firstName, lastName) => {
        return `Yo, ${title} ${firstName} ${lastName}, what's up?`
    },
    nice: (title, firstName, lastName) => {
        return `Nice to meet ya, ${title} ${firstName} ${lastName}`
    }
}
console.log(greetings.yo("Carl"))

const getRandom = arr => {
    let randInt = Math.floor(Math.random() * arr.length)
    return arr[randInt]
}

const getRandomKey = obj => {
    let count = 0
    for(let key in obj){
    count++
}
    let randInt = Math.ceil(Math.random() * count)
    let currKey = 1
    for(let key in obj){
        if(currKey === randInt){
            return obj[key]
        }
        currKey++
    }
}
// const getRandom => arr[Math.floor(math.random() * arr.length)]

const greetingMachineTwo = (personObj, functionObj) => {
    const { titles, firstNames, lastNames } = personObj
    let title = getRandom(titles)
    let firstName = getRandom(firstNames)
    let lastName = getRandom(lastNames)

    let greeting = getRandomKey(functionObj)

    return greeting(title,firstName,lastName)
}

console.log(greetingMachineTwo(people,greetings))