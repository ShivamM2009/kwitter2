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
    
    firebase.initializeApp(firebaseConfig);
    username = localStorage.getItem("username");
    room_name =localStorage.getItem("room name");

    function send() {
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:username,
                message : msg,
                like : 0
          });
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

console.log(firebase_message_id); 
console.log(message_data); 
name = message_data['name']; 
message = message_data['message']; 
like = message_data['like'];

name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'>"; 
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";

like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>"; 
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";

row = name_with_tag + message_with_tag +like_button + span_with_tag; 
document.getElementById("output").innerHTML += row;

//End code
      } });  }); }
getData();

function updateLike(message_id) { console.log("clicked on like button - " + message_id); 
button_id = message_id; likes = document.getElementById(button_id).value; 
updated_likes = Number(likes) + 1; 
console.log(updated_likes); 
firebase.database().ref(room_name).child(message_id).update({ like : updated_likes }); }

function logout() {
      localStorage.removeItem("username");
      localStorage.removeItem("room name");
      window.location.replace("index.html");      
}