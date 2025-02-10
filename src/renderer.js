/**
 * This file will automatically be loaded by vite and run in the "renderer" context.
 * To learn more about the differences between the "main" and the "renderer" context in
 * Electron, visit:
 *
 * https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes
 *
 * By default, Node.js integration in this file is disabled. When enabling Node.js integration
 * in a renderer process, please be aware of potential security implications. You can read
 * more about security risks here:
 *
 * https://electronjs.org/docs/tutorial/security
 *
 * To enable Node.js integration in this file, open up `main.js` and enable the `nodeIntegration`
 * flag:
 *
 * ```
 *  // Create the browser window.
 *  mainWindow = new BrowserWindow({
 *    width: 800,
 *    height: 600,
 *    webPreferences: {
 *      nodeIntegration: true
 *    }
 *  });
 * ```
 */


console.log('👋 This message is being logged by "renderer.js", included via Vite');

function startTimer() {
    console.log("click registered!");
}

let timer;
let timeLeft = 0;



document.addEventListener("DOMContentLoaded", function() {

    let stillClock = document.getElementById("stillClock");
    let movingClock = document.getElementById("movingClock");

    document.getElementById("start-timer-btn").addEventListener("click", function() {
        if (document.getElementById("start-timer-btn").textContent == "Stop") {
            clearInterval(timer);
            stillClock.style.display = "block";
            movingClock.style.display = "none";
            document.getElementById("start-timer-btn").textContent = "Start";
            document.getElementById("text-display").textContent = "how long does your pasta cook?";       
        } else {
        
        
        timeLeft = parseInt(document.getElementById("time-input").value);
        timeLeft = timeLeft * 60;
        updateTimerDisplay();
    
        if (isNaN(timeLeft) || timeLeft <= 0) {
            alert("Please enter a valid number!");
            return;
        }
        
        stillClock.style.display = "none";
        movingClock.style.display = "block";
        document.getElementById("start-timer-btn").textContent = "Stop";
        
        clearInterval(timer); 
        timer = setInterval(() => {
            timeLeft--;
            updateTimerDisplay();
            
            if (timeLeft <= 0) {
                clearInterval(timer);
                document.getElementById("text-display").textContent = "Done!";
                stillClock.style.display = "block";
                movingClock.style.display = "none";
                alert("Your pasta is ready!");
                document.getElementById("start-timer-btn").textContent = "Start";
                document.getElementById("text-display").textContent = "how long does your pasta cook?";

            }
        }, 1000);
    }
    });


    function updateTimerDisplay() {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        document.getElementById("text-display").textContent = `${minutes}m ${seconds}s`;
    }
});



















