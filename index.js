let timeRemaining;

function startTimer(){
    let hours = Number(document.getElementById("hours").value);
    let minutes =Number(document.getElementById("minutes").value);
    let seconds = Number(document.getElementById("seconds").value);

    timeRemaining = hours * 3600 + minutes * 60 + seconds;

      intervalId = setInterval(function(){
        timeRemaining--;


      let hrs = Math.floor(timeRemaining / 3600);
      let min = Math.floor((timeRemaining % 3600) / 60);
      let sec = timeRemaining % 60;

      document.getElementById("hours").value = hrs;
      document.getElementById("minutes").value = min;
      document.getElementById("seconds").value = sec;

      if(timeRemaining <= 0){
        clearInterval(intervalId)
        intervalId = null;
      }


    } ,1000)

}

function pauseTimer(){
    clearInterval(intervalId)
    intervalId = null;
}

function resetTimer(){
    pauseTimer();
    document.getElementById("hours").value = 0;
    document.getElementById("minutes").value = 0;
    document.getElementById("seconds").value = 0;
}