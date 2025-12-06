const timei = document.querySelector('#timeInput');
      const btn = document.querySelector('#startBtn');
      const timerd = document.querySelector('#timerDisplay');
      const alarmSound = new Audio('wake_up.mp3');
      let countdi;
      function requestnp(){
        if(Notification.permission!=="granted"){
          Notification.requestPermission();
        }
      }
      requestnp();
      function startt(){
        clearInterval(countdi);
        let timel = parseInt(timei.value);
        if(isNaN(timel)||timel<=0){
          alert("Please enter a valid number of seconds!");
        return;
        }
        timerd.textContent=timel;
        function tick(){
          timel--;
          timerd.textContent=timel;
          if(timel<=0){
            clearInterval(countdi);
            timerFinished();
          }
        }
        countdi=setInterval(tick,1000);
        function timerFinished(){
          timerd.textContent= "Time's Up!";
          alarmSound.play();
            if (Notification.permission === "granted") {

        new Notification("Timer Finished!", {
            body: "Your countdown has reached zero.",
            icon: "https://cdn-icons-png.flaticon.com/512/2693/2693507.png"

        });

    }
        }
      }
      btn.addEventListener('click',startt);
