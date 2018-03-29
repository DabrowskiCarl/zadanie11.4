function Phone(brand, price, color, memory) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.memory = memory;
}

Phone.prototype.printInfo = function () {
    console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ", for storage: " + this.memory);
}

const iPhone6S = new Phone("Apple", 2250, "silver", "32gb");
const GalaxyS6 = new Phone("Samsung", 2050, "black", "32gb");
const OneplusOne = new Phone("Oneplus", 2250, "sandstone", "32gb");
const p20pro = new Phone("Huawei", 3500, "Blue", "128gb");

iPhone6S.printInfo();
GalaxyS6.printInfo();
OneplusOne.printInfo();
p20pro.printInfo();