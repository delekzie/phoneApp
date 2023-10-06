// const change =()=> {
//     homeScreen.style.display = "block";
// }

const onTree = () => {
    // alert("isss working")
    blackScreen.style.display ="none"
    unlockScreen.style.display  = "none"
    lockScreen.style.display = "inline-block"
    
}
let date = new Date();
displayDate.innerHTML = date.toDateString();
var getTimeDate = () =>{
    var i = new Date();
    let myhrs = i.getHours();
    let mymin = i.getMinutes();
    if(myhrs.toString().length < 2){
        // myhrs = "0" + hr;

    }
    if(mymin.toString().length < 2){
        // mymin = "0" + min;

    }
    if(myhrs > 12){
        myhrs = myhrs -12;
      if (mymin < 10) {
        mymin = "0" + mymin;
        displayTime.innerHTML = myhrs +":" + mymin +  " PM"
      } else {
        displayTime.innerHTML = myhrs +":" + mymin +  " PM"
      }

    }else{
       if (mymin < 10) {
         mymin = "0" + mymin;
         displayTime.innerHTML = `${myhrs}:${mymin}  AM`
       } else {
        displayTime.innerHTML = `${myhrs}:${mymin}  AM`
       }
    }

}
setInterval(function () {
    getTimeDate();
},1000)
const swipeScreen = () => {
    // alert("isss working")
    blackScreen.style.display ="none"
    unlockScreen.style.display  = "block"
    lockScreen.style.display = "none"
    
}
const blankScreen = () => {
    // alert("isss working")
    blackScreen.style.display ="block"
    unlockScreen.style.display  = "none"
    lockScreen.style.display = "none"
    
}