function greet(){
    return function(){
        console.log("o");

    }
}

const result = greet();
result();