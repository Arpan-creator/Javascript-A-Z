function iPhone3(ASIN, color, display, camera, bluetooth){
     this.ASIN=ASIN;
     this.color=color;
     this.display=display;
     this.camera=camera;
     this.bluetooth=bluetooth

     this.dial=function(){
        return "tring.. tring.."
     }
     this.sendMessage=function(){
        return "Sending message"
     }
     this.cameraClick =function(){
        return "Camera clicked";
     }
     this.connectBluetooth =function(){
        return "Blutooth connected successfully"
     }
     this.iPhone3=function(){
        return this;
     };

}
let i3 = {};
iPhone3.call(i3, "B09X67JBQV", "Gray", 7.8, "2.0 MP", "Bluetooth 5.1");
// ---- properties
console.log(i3.ASIN); // 1
console.log(i3.color); // B09X67JBQV
console.log(i3.display); // 7.8
console.log(i3.camera); // IOS
console.log(i3.bluetooth); // 128mb

// ---- methods
console.log(i3.dial()); // "tring.. tring..."
console.log(i3.sendMessage()); // "Sending message..."
console.log(i3.cameraClick()); // "Camera clicked"
console.log(i3.connectBluetooth()); // "Bluetooth connected successfully..."
