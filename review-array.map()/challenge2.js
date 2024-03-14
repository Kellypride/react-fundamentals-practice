const names = ["alice", "bob", "charlie", "daniella"]

const uppercase = names.map((name) => {
    return name[0].toUpperCase() +name.slice(1)
})
console.log(uppercase)