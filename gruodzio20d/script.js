"use strict"

function countTime () {
    //randame kiek isviso laiko liko iki kaledu
    let now = new Date();
    let year =now.getFullYear();
    let timeDate = new Date("December 25, " + year + " 00:01:00");
    let timeDiff = timeDate.getTime() - now.getTime()
    //gauname laika likusi iki kaledu sekundemis
    console.log(timeDiff)

    //Baigsis laikas ismes Christmas is here
    if (timeDiff <=0) {
        clearTimeout(time_looper);
        console.log("Christmas is here")
        return;
    }

    //susirasome sekundes, minutes, valandas ir dienas
    let seconds = Math.floor(timeDiff/1000);
    let minutes = Math.floor(seconds/60);
    let hours = Math.floor(minutes/60);
    let days =Math.floor(hours/24);

    //this command ensure that hours is within the range [0,23], same with minutes and with seconds
    //% operator is used to perform the module operation
    hours %=24
    minutes %=60
    seconds %=60

    // requestAnimationFrame() is a JavaScript method that allows you to perform animations at a specific framerate. It tells the browser that you wish to perform an animation and requests that the browser call a specified function to update an animation before the next repaint 1. The frequency of calls to the callback function will generally match the display refresh rate 2.
    requestAnimationFrame(() => {
        // nusistatome kad po sec pasikeicia laikas
        setTimeout(countTime, 1000);
    });

    document.getElementById("days").textContent = `${days} days`;
    document.getElementById("hours").textContent= `${hours} hours`;
    document.getElementById("minutes").textContent = `${minutes} min`;
    document.getElementById("second").textContent = `${seconds} sec`;

  

}

countTime();