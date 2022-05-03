interface ValidatorConfig {
    [property: string]: {
        [validatable: string]: string[]
    }
}

const registeredValidators: ValidatorConfig = {}

function Required(target: any, propertyName: string){
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propertyName] : ["Required"]
    }
}

function PositiveNumber(target: any, propName: string){
    registeredValidators[target.constructor.name] = {
        ...registeredValidators[target.constructor.name],
        [propName]: ["Positive"]
    }
}

function validate (obj: any){
    const objValidatorConfig = registeredValidators[obj.constructor.name]
    if (!objValidatorConfig){
        return true
    }
    let isValid = true
    for (const prop in objValidatorConfig){
        for (const validator of objValidatorConfig[prop]){
            switch (validator) {
              case "Required":
                isValid= isValid && !!obj[prop]
                break;
              case "Positive": 
                isValid= isValid && obj[prop] > 0
                break;
            }
        }
    }
    return isValid
}

class Course {
    @Required
    title: string
    @PositiveNumber
    price: number

    constructor(t: string, p:number){
      this.title = t
      this.price = p
    }
}

const courseForm = document.querySelector("form")!
courseForm.addEventListener("submit", (e)=>{
    e.preventDefault()
    const titleEl = document.getElementById("title") as HTMLInputElement
    const priceEl = document.getElementById("price") as HTMLInputElement

    const title = titleEl.value
    const price = +priceEl.value
    
    // if (!title || !price){
    //     throw new Error("Please provide all values")
    // }
    const course1 = new Course(title, price)
     if(!validate(course1)){
        alert("Invalid Input, Please try again later")
        return
     }

    console.log(course1);
    
})