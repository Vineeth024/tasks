var str="JavaScript is a full-fledged dynamic programming language that can add interactivity to a website.JavaScript itself is relatively compact, yet very flexible. Developers have written a variety of tools on top of the core JavaScript language, unlocking a vast amount of functionality with minimum effort.";
document.getElementById("js").innerHTML=str;

//To print in console
var a = "Welcome to SERC RDIP by IIT Hyderabad"
console.log(a);

//To print Date in console
var d = new Date(2020, 07, 03, 12, 00);
console.log(d);

//To find Fibonacci series
function FibonacciSeries()
{
    var n= document.getElementById("fibvalue").value;
    
    try { 
    if(n == "")  throw "empty";
    if(isNaN(n)) throw "not a number";
    n = Number(n);
    if(n < 10)  throw "too low";
    if(n > 100)   throw "too high";
  }
  catch(err) {
    alert("Input is " + err);
  }


  alert("check output in console-log");
    if(n>10 && n<100)
    {
        var a=0
        var b=1
        var i=0
        for(i=3;i<=n;i++)
        {
            c=a+b;
            console.log("fibonacci at "+ i +" ="+ c);
            a=b;
            b=c;

        }
    }
}

//All alert messages
function popup()
{
    alert("Home Page loaded!\nYou need to go to Fibonacci page to load fibonacci series");
    }
function home()
{
    alert("Moved to home page");

}
function FibonacciPopup()
{
    alert("Fibonacci Series page loaded");
}

//To get Words
function words() {
    var arr = str.split(" ");
    document.getElementById("word5").innerHTML = "5th word is = " + "'"+ arr[4]+"'";
    document.getElementById("word7").innerHTML = "7th word is = " + "'" +arr[6] + "'";
    document.getElementById("word10").innerHTML = "10th word is = " +"'"+ arr[9]+"'";

  }