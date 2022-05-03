function WithAnotherTemplate(template: string, hookId: string){
    console.log("Template factory...");
    return function <T extends {new(...args: any[]): {name: string, age: number}}> (originalConstructor: T) {
        console.log("Rendering Template...");
        return class extends originalConstructor {
          constructor(..._: any[]){
            super()
            const hookEl = document.getElementById(hookId)
            // const hook = document.querySelector("p")
            const hook = document.querySelector("p")
            if (hookEl && hook){
              hookEl.innerHTML = template
              hook.textContent = this.name + " is " + this.age
            }
          }
        }
    }
}

@WithAnotherTemplate("<h1>template</h1>", "app")
class Personals {
    name = "Max"
    age = 30

    constructor(){
        console.log("Creating Person...");
    }
}

const personals = new Personals()

console.log(personals);
