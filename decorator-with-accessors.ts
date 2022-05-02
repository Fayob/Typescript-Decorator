function Log1(target: any, propertyName: string | Symbol, descriptor: PropertyDescriptor){
    console.log("Accessor Decorator");
    console.log(target);
    console.log(propertyName);
    console.log(descriptor);
    
}


class ProductAccessor {
    
    title: string
    private _price: number

    @Log1 
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

    getPriceWithTax(tax: number){
        return this._price * tax
    }
}