// Write your solution below:

function tshirtSorter(shirt) {
    let small = ""
    let medium = ""
    let large = ""

    for (let i = 0; i < shirt.length; i++) {
        if (shirt[i] === "s") {
            small += "s"
        } else if (shirt[i] === "m") {
            medium += "m"
        } else {
            large += "l"
        }
    }

    return small + medium + large
}

// Cool soultion from the solution
/*function tshirtSorter(str) {
  // splits the string into a array of characters
  // sorts the array (alphabetically automatiically)
  // reverses the now sorted array (which happens to give us the order we need)
  // rejoins the elements into a single string
  return str.split("").sort().reverse().join("")
}
*/

console.log(tshirtSorter('smllmslms'))