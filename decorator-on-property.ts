function Log(target: any, propertyName: string | Symbol){
    console.log("Property Decorator");
    console.log(target);
    console.log(propertyName);
    
}


class ProductProperty {
    @Log 
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

    getPriceWithTax(tax: number){
        return this._price * tax
    }
}