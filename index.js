const startbtn = document.getElementById('start');

function clock(){
    var monthName = ["January","February","March","April","May",
        "June","July","Aujust","September",
        "October","November","December"];

    var dayName = ["Sunday","Monday","Tuesday","Wednesday",
        "Thursday","Friday","Saturday"];
        
    var date = new Date();    

    document.getElementById('Date').innerHTML =
        (dayName[date.getDay()] + " " +
        date.getDate() + " " +
        monthName[date.getMonth()] + " " +
        date.getFullYear());


     var h = date.getHours();
     var m = date.getMinutes(); 
     var s = date.getSeconds();
     var day = h <11 ? "AM" : "PM";

     h = h<10? "0" + h : h; 
     m = m<10? "0" + m : m;   
     s = s<10? "0" + s : s;

        document.getElementById('hours').innerHTML =h;
        document.getElementById('min').innerHTML =m; 
        document.getElementById('sec').innerHTML =s;

}
var inter = setInterval(clock,400);