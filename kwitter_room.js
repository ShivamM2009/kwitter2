

var firebaseConfig = {
      apiKey: "AIzaSyB8KAg3uAit85YKQatjU9sZDRzsnKgbY58",
      authDomain: "kwitter-9069b.firebaseapp.com",
      databaseURL: "https://kwitter-9069b-default-rtdb.firebaseio.com",
      projectId: "kwitter-9069b",
      storageBucket: "kwitter-9069b.appspot.com",
      messagingSenderId: "600959182480",
      appId: "1:600959182480:web:42268149783990e0ad1a15",
      measurementId: "G-CHK0XP1T21"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("username");
document.getElementById("un").innerHTML="welcome -"+username;

function addRoom()
{
  roomname = document.getElementById("room").value;
  firebase.database().ref("/").child(roomname).update({
        purpose:"adding room"
  });
  localStorage.setItem("room name",roomname);
  window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value'
, function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();

function redirectToRoomName(name)
{ console.log(name); localStorage.setItem("room_name", name); window.location = "kwitter_page.html"; }
