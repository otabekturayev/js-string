let str = "LOREM IPSUM dolor sit amet."
let result = ""

function checkString(str){
    for(let i = 0; i < str.length; i++){
        if(str[i].includes("a") || str[i].includes("e") || str[i].includes("i") || str[i].includes("o") || str[i].includes("u")){
            result += "*"
        }else if(str[i].includes("A") || str[i].includes("E") || str[i].includes("I") || str[i].includes("O") || str[i].includes("U")){
            result += "*"
        }else{
            result += str[i]
        }
    }
    console.log(result)
}
checkString(str)
