function Log3(target: any, name: string | Symbol, position: number){
    console.log("Parameter Decorator");
    console.log(target);
    console.log(name);
    console.log(position);
}


class ProductParameter {   
    title: string
    private _price: number

     
    set price(val: number){
        if(val > 0){
        this._price = val
        } else {
            throw new Error("price must be positive")
        }
    }

    constructor(t: string, p: number){
        this.title = t
        this._price = p
    }

    
    getPriceWithTax(@Log3 tax: number){
        return this._price * tax
    }
}