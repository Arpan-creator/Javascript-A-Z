function Product(name,price,quantity){
    this.name=name,
    this.price=price,
    this.quantity=quantity
}

Product.prototype.Display=function(){
    return `Name : ${this.name}, Price : ${this.price}, Quantity : ${this.quantity}`
}

function Electronics(name,price,quantity,brand,model){
    Product.call(this,name,price,quantity)
    this.brand=brand,
    this.model=model
}

Electronics.prototype.PowerOn=function(){
    console.log(`${this.name} is ON Now`)
}
Electronics.prototype.PowerOff=function(){
    console.log(`${this.name} is Off Now`)
}

Electronics.prototype.Display=function(){
    return `${Product.prototype.Display.call(this)}, Brand:${this.brand}`;
}

Electronics.prototype=Object.create(Product.prototype)
Electronics.prototype.constructor=Electronics;

function Clothing(name,price,quantity,size,color){
    Product.call(this,name,price,quantity)
    this.quantity=quantity,
    this.size=size,
    this.color=color


}
Clothing.prototype=Object.create(Product.prototype)
Clothing.prototype.constructor=Clothing;

Clothing.prototype.Display=function(){
    return `${Product.prototype.Display.call(this)}, Brand:${this.brand}, Model:${this.model}`;
}

function Book(name,price,quantity,type,author){
     Product.call(this,name,price,quantity)
     this.type=type,
     this.author=author
}
Book.prototype.Display=function(){
    return `${Product.prototype.Display.call(this)}, Type : ${this.type},Author: ${this.author}`
}
const pc=new Electronics('Mobile',20000,200,'MI','Note10s')
console.log(pc.Display())
pc.PowerOn();
const shirt =new Clothing('Tshirt',500,10,'M','red')
console.log(shirt)

const book= new Book('Monkify',600,5,'Biography','J Shetty')
console.log(book)