let userName = getFirstName("Pedro Henrique Neves Pereira Bertolani")
console.log("Seja bem-vindo " + userName)

function getFirstName(name){
    let firstName = name.split(" ")[0]
    return firstName
}