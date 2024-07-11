class Car{
    constructor(name,AccPower,brakingPower,speed){
        this.name=name,
        this.AccPower=AccPower,
        this.brakingPower=brakingPower,
        this.speed=speed;
    };
    accelerate(){
        if(this.fuelLevel>0){
            this.speed=this.AccPower;
            this.consumeFuel(this.AccPower);
            console.log(`Accelerating: speed is ${this.speed} m/s`);
        }

    }
    brake(){
        this.speed-=this.brakingPower;
        if(this.speed<0){
            this.speed=0;
        }
        console.log(`Brakes applied:  Current speed is ${this.speed} m/s`)

    }
    CurrentSpeed(){
        return this.speed;
    }  
}

const myCar =new Car("XUV",5,3,40)
let a=myCar.brake()
