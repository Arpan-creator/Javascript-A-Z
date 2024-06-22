// Object Factory Function: Write a function objectFactory that takes a first name 'fname' and an age 'age' as parameters. The function should return an object with 'fname' as the key and 'age' as the value. Ensure that the age is coerced to a number before being assigned to the object.
// Example Invocation: objectFactory("John", "25") Expected Output: { John: 25 }
function objectFactory(fname,age){
    const con=Number(age)
    return {[fname]:con}
}
console.log(objectFactory("John", "25"))

// Grade Classifier Function: Write a function gradeClassifier that takes a student's score 'score' out of 100 as a parameter. The function should return a grade based on the score range. Include logical operators to handle exceptional cases such as invalid input or score exceeding 100.
// Example Invocation: gradeClassifier(85) Expected Output: "B"
function gradeClassifier(grade){
    if (grade>=90 && grade<=100){
        return "A"
    }
    else if(grade>=80 && grade<90){
        return "B"
    }
    else if(grade>=70 && grade<80){
        return "C"
    }
    else if(grade>=60 && grade<70){
        return "D"
    }
    else{
        return "E"
    }
}
console.log(gradeClassifier(85))

// String Manipulator Function: Write a function stringManipulator that takes two strings 'str1' and 'str2' as parameters. The function should concatenate the strings if their lengths are equal; otherwise, it should append the shorter string to the end of the longer string. Ensure both inputs are strings and handle cases where either or both inputs are empty strings.
// Example Invocation: stringManipulator("hello", "world") Expected Output: "helloworld"

function stringManipulator(str1,str2){
    if(typeof str1=='string' && typeof str2=='string'){
        if (str1==='')return str1
        if (str2==='')return str2
        if(str1.length==str2.length){
            return str1+str2
        }
        else if(str1.length>str2.length){
            return str1+str2
        }
        else{
            return str2+str1
        }
    }
    else{
        return "Not a string input!!"
    }
}
console.log(stringManipulator("hello", "world"))