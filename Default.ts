function CalculatePercentage(Marks : number, Outof : number = 500) : number
{
    var Result : number = 0
    Result = (Marks / Outof) * 100
    return Result
}

console.log(CalculatePercentage(230))
console.log(CalculatePercentage(230,300))