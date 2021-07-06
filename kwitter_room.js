
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAFF_NflVlHcBVjVHDhmliwAvNyp5nO1Ws",
      authDomain: "kwitter-project-ff0f3.firebaseapp.com",
      projectId: "kwitter-project-ff0f3",
      storageBucket: "kwitter-project-ff0f3.appspot.com",
      messagingSenderId: "846918624346",
      appId: "1:846918624346:web:daa3ee65338e9d50db6463"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

function logout(){
      window.location="index.html";
}
