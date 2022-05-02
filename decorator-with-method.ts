function Log2(target: any, propertyName: string | Symbol, descriptor: PropertyDescriptor){
    console.log("Method Decorator");
    console.log(target);
    console.log(propertyName);
    console.log(descriptor);
}


class ProductMethod {   
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

    @Log2
    getPriceWithTax(tax: number){
        return this._price * tax
    }
}