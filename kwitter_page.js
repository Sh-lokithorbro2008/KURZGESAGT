var firebaseConfig = {
      apiKey: "AIzaSyC32D5yEQrjWCUyOsUkA4d8wP1ocDEqmEk",
      authDomain: "kurzgesagt-chat-website.firebaseapp.com",
      databaseURL: "https://kurzgesagt-chat-website-default-rtdb.firebaseio.com",
      projectId: "kurzgesagt-chat-website",
      storageBucket: "kurzgesagt-chat-website.appspot.com",
      messagingSenderId: "209873344047",
      appId: "1:209873344047:web:1ab9d04c8caf1b828158da"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//YOUR FIREBASE LINKS
var user_name=localStorage.getItem("username");
var room_name=localStorage.getItem("room_name");

function send()
{
      var message=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
           name:user_name,
           message:message,
           like:0
      })
      document.getElementById("msg").value=""
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
