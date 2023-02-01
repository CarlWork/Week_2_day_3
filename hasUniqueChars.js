// Write your code below
function unique (word){
    const char = [...word]
    const set = new Set(char)
    console.log(set)
    return set.size === word.length
}

console.log(unique('hello'))
console.log(unique('world'))


