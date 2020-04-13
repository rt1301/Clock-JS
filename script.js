window.onload = function(){
    const hH= document.querySelector("#hourHand");
    const sH= document.querySelector("#secondHand");
    const mH= document.querySelector("#minuteHand");
    const clock = document.querySelector("#clock");
    function time(){
        var today= new Date();
        var second= today.getSeconds();
        var secondDeg= ((second)/60)*360;
         sH.style.transform = `rotate(${secondDeg}deg)`;

        var minute= today.getMinutes();
        var minuteDeg = ((minute)/60)*360;
         mH.style.transform = `rotate(${minuteDeg}deg)`;

        var hour= today.getHours();
        var hourDeg= ((hour+(minute/60))/12)*360;

         hH.style.transform = `rotate(${hourDeg}deg)`;
    }
    setInterval(time,1000);
}