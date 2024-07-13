function Car(make,model,year,isAvailable=true){
        this.make=make,
        this.model=model,
        this.year=year,
        this.isAvailable=isAvailable;
};
function Customer(name1,rentedCars=[]){
        this.name=name1,
        this.rentedCars=rentedCars
};

Customer.prototype.rentCar=function(car){
    if(car.isAvailable){
        car.isAvailable=false
        this.rentals.push(car)
        console.log(`${this.name} has rented a ${car.model}`)
    }
    else{
        console.log(`This ${car.make} ${car.model} is already rented`)
    }
}

function PremiumCustomer(name1,rentedCars=[],discountRate=0.1){
    Customer.call(this,name1,rentals);
    this.discount=discount;

}
PremiumCustomer.prototype=Object.create(Customer.prototype);
PremiumCustomer.prototype.constructor=PremiumCustomer;

