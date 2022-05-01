function Autobind(target: any, _1: string, descriptor: PropertyDescriptor){
    console.log(target);
    console.log(descriptor)
    const originalDescriptor = descriptor.value
    const adjDescriptor: PropertyDescriptor = {
        configurable: true,
        enumerable: false,
        get (){
            const boundFn = originalDescriptor.bind(this)
            return boundFn
        }
    }
    return adjDescriptor
}

class Printer {
    message = "This works";

    @Autobind
    showMessage(){
        console.log(this.message);
        
    }
}

const ps = new Printer()
// ps.showMessage()

// const butt = document.querySelector("button")!;
// butt.addEventListener("click", ps.showMessage)
