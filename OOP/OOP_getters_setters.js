class Car{
  constructor(brand, model, years, color, type) {
    this.brand = brand;
    this.model = model;
    this.years = years;
    this.color = color;
    this.type = type;
  }

    set setBrand  (brand)  { this.brand = brand }
    get getBrand  ()       { return this.brand }
    set setModel (model) { this.model = model }
    get getModel ()       { return this.model }
    set setYears (years) { this.years = years }
    get getYears ()       { return this.years }
    set setColor (color) { this.color = color }
    get getColor ()       { return this.color }
    set setTipo (type) { this.type = type }
    get getTipo ()       { return this.type }
    get detalles () {
    console.log(`Tu coche es un ${this.brand} ${this.model} con ${this.yeras} años, clase ${this.type} y color ${this.color}`);
  }
}

let myCar = new Car("Peugeot", "607", 2002, "rojo", "turismo");
myCar.getColor;
miCoche.setColor = 'Black';
miCoche.color;