function Loggers (loggerString: string) {
    return function(target: Function){
        console.log(loggerString);
        console.log(target);
    }
    
}

@Loggers("LOGGING-PERSON")
class Pers {
    name = "Max"

    constructor(){
        console.log("Creating Person...");
    }
}

const perm = new Pers()

console.log(perm);
