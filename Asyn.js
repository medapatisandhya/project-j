var s=0;
var m=0;
var h=0;
var x;
function time(){
    if(s==59){
        s==0;
        if(m==59){
            m==0;
            if(h==12){
                h==0
            }
            else{
                h++;
            }
        }
        else{
            m++;
        }
    }else{
        s++;
    }
    
    document.getElementsByClassName('Hours')[0].innerHTML=h;
    document.getElementsByClassName('Minutes')[0].innerHTML=m;
    document.getElementsByClassName('Seconds')[0].innerHTML=s;
    // document.getElementsByClassName('Millisecond')[0].innerHTML=x.getMilliseconds();
    // if(x.getSeconds()==50){
    //     clearInterval(add)
    // }
// var add =setInterval(fun,1000);
}
function start_time(){
 setInterval(time,1000);
}
function stop_time(){
    clearInterval(x)
}
function reset_time(){
    let h=0;
    let m=0;
    let s=0;
    document.getElementsByClassName('Hours')[0].innerHTML="00";
    document.getElementsByClassName('Minutes')[0].innerHTML="00";
    document.getElementsByClassName('Seconds')[0].innerHTML="00";
    clearInterval(x)
}