class Arithematic
{
    No1 : number
    No2 : number

    constructor(X : number, Y : number)
    {
        console.log("Inside Parameterised constructor")
        this.No1 = X
        this.No2 = Y
    }

    Addition() : number
    {
        var Ans : number = 0;
        Ans = this.No1 + this.No2
        return Ans
    }

    Substraction() : number
    {
        var Ans : number = 0;
        Ans = this.No1 - this.No2
        return Ans
    }
}

var obj1 = new Arithematic(11,10)
obj1.No1 = 11
obj1.No2 = 10

var Result : number = 0
Result = obj1.Addition()
console.log("Addition is : "+Result)

Result = obj1.Substraction()
console.log("Substraction is : "+Result)

var obj2 = new Arithematic(11,10)
Result = obj2.Addition()
console.log("Addition is : "+Result)

Result = obj2.Substraction()
console.log("Substraction is : "+Result)

