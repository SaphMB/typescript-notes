// Similar to interfaces, classes provide a blueprint for an object. However, with the 'new' keyword, they are also able create new instances of objects.
var IceCream = /** @class */ (function () {
    function IceCream(flavour, topping, cone) {
        this.flavour = flavour;
        this.topping = topping;
        this.cone = cone;
    }
    IceCream.prototype.describeIceCream = function () {
        console.log(this.flavour + " cone wih " + this.topping + " in a " + this.cone + " cone 🍦");
    };
    return IceCream;
}());
var pistachioCrunch = new IceCream("pistachio", "pistachio", "waffle");
pistachioCrunch.describeIceCream();
