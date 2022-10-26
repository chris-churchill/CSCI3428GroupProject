/*
  The purpose of this file is to generate 9 screens one after another,
  each containing 3 images, where one image must match the associated audio
  that can be played.
  When all 9 screens have been played, the software goes back to the first
  screen, and starts the process over again.
  Authors: Terry Goldsmith (Created fully functioning code

         : Chris Churchill (revised code to apply to woodland conservation site)
*/

let questions = [
  "Which one is the Yellow Birch Tree?",
  "Which one is the Apple Tree?",
  "What one is the Pear Tree?"
 ];
 
 
 
 // global array containing the questions for the game
 // Note: Each screen contains 3 images: image 1, image 2 and image 3 from
 //       left to right or from top to bottom depending on your device.
 let answers = [1, 2, 3, 2, 3, 1, 3, 1, 2];
 
 // global array containing 9 sets of 3 images making up the 9 screens.
 // There are 27 elements in this array.
 let panels = [
   "Yellow Birch.jpg",
   "Apple Tree.jpg",             ,
   "Pear Tree.jpg",             
   "kil.jpg",
   "ltu.jpg",
   "mijisi.jpg",
   "nin.jpg",
   "teluisi.jpg",
   "wiktm.jpg",
   "Yellow Birch.jpg",
   "eliey.jpg",
   "kesalk.jpg",
   "kil.jpg",
   "ltu.jpg",
   "mijisi.jpg",
   "nin.jpg",
   "teluisi.jpg",
   "wiktm.jpg",
   "Yellow Birch.jpg",
   "eliey.jpg",
   "kesalk.jpg",
   "kil.jpg",
   "ltu.jpg",
   "mijisi.jpg",
   "nin.jpg",
   "teluisi.jpg",
   "wiktm.jpg",
 ];
 
 // Contains the current screen number starting at zero.
 let panelSet = 0;
 
 /*
   The purpose of this function is to inject HTML that consists of:
     - 3 images
     - each image is clickable
     - each image when clicked will call the same "choose" function
       but with a different argument: 1, 2 or 3 representing the image
       number
   Authors: same as file header
 */
 function setup() {

  document.getElementById("correctgif").style.visibility = "hidden";
  
  document.getElementById("heading").innerHTML = questions[panelSet];
 
   let str1 = '<input class="button" type="image" src="./pics/';
   let str2 = '" width="325" height="325" onclick="choose(1)"/>';
   let str3 = str1 + panels[0] + str2;
   document.getElementById("pic1").innerHTML = str3;
 
   str2 = '" width="325" height="325" onclick="choose(2)"/>';
   str3 = str1 + panels[1] + str2;
   document.getElementById("pic2").innerHTML = str3;
 
   str2 = '" width="325" height="325" onclick="choose(3)"/>';
   str3 = str1 + panels[2] + str2;
   document.getElementById("pic3").innerHTML = str3;
 }
 
 
 /*
   The purpose of this function is to quit the application.
   Authors: Terry Goldsmith
 */
 function quit() {
   window.close();
 }
 
 /*
   The purpose of this function is to produce a "try again" alert if the
   wrong image was clicked on, and to produce a "congratulations" alert if
   the correct image was clicked on. Also, for a correct image selection,
   the code will set up the next screen once the alert has finished.
   IF USER CHOICE EQUALS CORRECT ANSWER
       PRODUCE CONGRATULATING MESSAGE
       INSERT CLICKABLE IMAGE 1 INCLUDING FUNCTION CALL WITH ARGUMENT = 1
       INSERT CLICKABLE IMAGE 2 INCLUDING FUNCTION CALL WITH ARGUMENT = 2
       INSERT CLICKABLE IMAGE 3 INCLUDING FUNCTION CALL WITH ARGUMENT = 3
   ELSE
       PRODUCE TRY AGAIN MESSAGE
   Authors: same as the file header
  */
 function choose(choice) {
   if (choice == answers[panelSet]) {
    document.getElementById("correctgif").style.visibility = "visible";
 
     // update panelSet in the sequence: 0 1 2 3 4 5 6 7 8 and back to 0
     panelSet = (panelSet + parseInt(1)) % parseInt(9);
 
     document.getElementById("heading").innerHTML = questions[panelSet];
 
     let str1 = '<input class="button" type="image" src="./pics/';
     let str2 = '" width="325" height="325" onclick="choose(1)"/>';
     let str3 = str1 + panels[panelSet * 3] + str2;
     document.getElementById("pic1").innerHTML = str3;
 
     str2 = '" width="325" height="325" onclick="choose(2)"/>';
     str3 = str1 + panels[panelSet * 3 + parseInt(1)] + str2;
     document.getElementById("pic2").innerHTML = str3;
 
     str2 = '" width="325" height="325" onclick="choose(3)"/>';
     str3 = str1 + panels[panelSet * 3 + parseInt(2)] + str2;
     document.getElementById("pic3").innerHTML = str3;
   } else {
     alert("Try again");
   }
 }
