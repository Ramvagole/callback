function calculate(num1,num2){
    function operation(num1,num2,callback){
        return callback(num1,num2);
    };
    function addition(num1,num2){
        return num1+num2;
    };
    function multiplication(num1,num2){
        return num1*num2;
    };
    let a=operation(num1,num2,addition);
    let b=operation(num1,num2,multiplication);
    console.log("Addition Result:",a);
    console.log("Multiplication Result",)
}
calculate(5,3)
calculate(10,2)