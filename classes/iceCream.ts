// Similar to interfaces, classes provide a bluepront for an object. However, with the 'new' keyword, they are also able create new instances of objects.

class IceCream {
    flavour: string;
    topping: string;
    cone: string;
    constructor(flavour: string, topping: string, cone: string) {
        this.flavour = flavour;
        this.topping = topping;
        this.cone = cone;
    }
    describeIceCream() {
        console.log(this.flavour + " cone wih " + this.topping + " in a " + this.cone + " cone 🍦");
    }
}

let pistachioCrunch = new IceCream("pistachio", "pistachio", "waffle");
pistachioCrunch.describeIceCream();