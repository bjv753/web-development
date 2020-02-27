function calculate()
{
    var field1=document.getElementById("num1").value;
    var field2=document.getElementById("num2").value;
    var field3=document.getElementById("num3").value;

    var result=parseFloat(field1*5)+parseFloat(field2*7)+parseFloat(field3*11)

    if(!isNaN(result))
    {
        document.getElementById("answer").innerHTML="Peaches Owes You " + result + " Coins as Payment";
    }
}