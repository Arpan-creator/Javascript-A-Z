//Factory function-1
function iPhone1(ASIN, color, display, camera) {

    let iPhone = {
        ASIN: ASIN,
        color: color,
        display: display,
        camera: camera,
        dial: function () {
            return "tring.. tring.."
        },
        sendMessage: function () {
            return "Sending message..."
        },
        cameraClick: function () {
            return "Camera clicked"
        },
        
    };
    return iPhone
}

let i1 = iPhone1(
    1,
    "B09X67JBQV",
    7.8,
    "IOS",
    "128mb",
    "Gray",
    "90mm",
    "2.0 MP"
);
// ---- properties
console.log(i1.ASIN); // 1
console.log(i1.color); // "B09X67JBQV"
console.log(i1.display); // 7.8
console.log(i1.camera); // "IOS"

// ---- methods
console.log(i1.dial()); // "tring.. tring..."
console.log(i1.sendMessage()); // "Sending message..."
console.log(i1.cameraClick()); // "Camera clicked"

//Factory function-2

function iPhone2(ASIN, color, display, camera, bluetooth) {
    let iPhone = {
        ASIN: ASIN,
        color: color,
        display: display,
        camera: camera,
        blutooth: bluetooth,
        dial: function () {
            return "tring.. tring.."
        },
        sendMessage: function () {
            return "Sending message..."
        },
        cameraClick: function () {
            return "Camera clicked"
        },
        connectBlutooth: function () {
            return "Blutooth connected successfully"
        },
        // iPhone2: function () {
        //     return this;
        // }
    };
    return iPhone;

}

let i2 = iPhone2(
    1,
    "B09X67JBQV",
    7.8,
    "IOS",
    "128mb",
    "Gray",
    "90mm",
    "2.0 MP",
    "5.1"
  );
//   ---- properties
  console.log(i2.ASIN); // 1
  console.log(i2.color); // "B09X67JBQV"
  console.log(i2.display); // 7.8
  console.log(i2.camera); // "IOS"
  console.log(i2.blutooth); // "128GB"
  
//   ---- methods
  console.log(i2.dial()); // "tring.. tring..."
  console.log(i2.sendMessage()); // "Sending message..."
  console.log(i2.cameraClick()); // "Camera clicked"
  console.log(i2.connectBlutooth()); //"Bluetooth connected successfully..."
  