// 7. Write a js program to toggle case of each character of a string.
let str = "Hello , Qasim"
let toggleCase = str.split("").map(charac =>{
    if (charac==charac.toUpperCase()) {
        return charac.toLowerCase()
        
    }
    else{
        return charac.toUpperCase()
    }
}).join("") ;
console.log(toggleCase);