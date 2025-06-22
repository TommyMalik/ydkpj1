var button = $(".play");


button.on("click",music)

function music(){
    var buttontxt = $(this).text();

                // Use a switch statement to determine the outcome
                switch (buttontxt) {
                    case "a":
                        playSong("songA.mp3"); 
                        $(this).css("background-color", "lightblue")
                        break;
                    case "b":
                        playSong("songB.mp3"); 
                        $(this).css("background-color", "lightblue")
                        break;
                    case "e":
                        playSong("songB.mp3"); 
                        break;
                    default:
                        alert("No song assigned for this option.");
                        }}

            function playSong(song) {
                     var audio = new Audio(song);
                     audio.play();
                     alert("Playing: " + song);
                }                


