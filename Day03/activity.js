

/*if (num<0 )
{
    if (num % 2 == 0)
    {
        console.log("The number is a negative even number");
    }
    else{
        console.log("The number is a negative odd number");
    }
}
else if(num >0){
    if (num % 2 != 0)
    {
        console.log("The number is positive odd number");
    }
    else{
        console.log("The number is positive even number");
    }
}
else{
    console.log("The number is zero");
}*/
var num = 0;
if (num == 0)
{
    console.log("The number is zero");
}
else if (num < 0 && num % 2 == 0)
{
    console.log("The number is negative even number");
}
else if (num < 0 && num % 2 != 0)
{
    console.log("The number is negative odd number");
}
else if(num > 0 && num % 2 == 0)
{
    console.log("The number is positive even number");
}
else
{
    console.log("The number is positive odd number")
}