function Logge (loggerString: string) {
    console.log("Logge Factory...");
    
    return function(target: Function){
        console.log("Rendering Logge...");
        console.log(loggerString);
        console.log(target);
    }
    
}

function WithTemplate(template: string, hookId: string){
    console.log("Template factory...");
    
    return function (constructor: any) {
        console.log("Rendering Template...");
        
        const hookEl = document.getElementById(hookId)
        // const hook = document.querySelector("p")
        const hook = document.querySelector("p")
        const p = new constructor()
        if (hookEl && hook){
            hookEl.innerHTML = template
            hook.textContent = p.name
        }
    }
}

@Logge("LOGGING-PERSON")
@WithTemplate("<h1>template</h1>", "app")
class Personal {
    name = "Max"
    age = 30

    constructor(){
        console.log("Creating Person...");
    }
}

const personal = new Personal()

console.log(personal);
