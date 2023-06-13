// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAhrQOMhu3lcx3-72SgT_hD5LF2dA78TYM",
    authDomain: "lets-chat-web-app-4-99d69.firebaseapp.com",
    projectId: "lets-chat-web-app-4-99d69",
    storageBucket: "lets-chat-web-app-4-99d69.appspot.com",
    messagingSenderId: "242132931522",
    appId: "1:242132931522:web:3afc359f8eb2eafeacbc5b"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

    firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
    });

    function send(){
        msg = document.getElementById("msg").value;
        firebase.database().ref(room_name).push({
         name:user_name,
         message:msg,
         like:0
        });
    }

    function getData() {firebase.database().ref("/"+room_name).on('value',
    function(snapshot) {document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;childData = 
    childSnapshot.val(); if(childKey!="purpose") {
        firebase_message_id=childKey;
        message_data=childData;
        //Start code
        function updateLike(message_id){
            console.log("clicked on like button - " + message_id);
            button_id = message_id;
            likes = document.getElementById(button_id).value;
            updated_Like = Number(likes) + 1;
            console.log(updated_likes);
            firebase.database().ref(room_name).child(message_id).update({
            });
            
      }
      function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name")
      window.location.replace("qwitter.html");
      }
        //End code
    } }); }); }
    getData();
    