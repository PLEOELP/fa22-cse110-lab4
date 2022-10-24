function time_reporter(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}
setInterval(time_reporter, 1000);