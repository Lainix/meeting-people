  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBYF8vLyCdg3zReb6KENA6M4Txp_COX8fM",
    authDomain: "plusone-b5241.firebaseapp.com",
    databaseURL: "https://plusone-b5241.firebaseio.com",
    projectId: "plusone-b5241",
    storageBucket: "plusone-b5241.appspot.com",
    messagingSenderId: "437981876140"
  };
  firebase.initializeApp(config);

  

  $(document).ready(function () {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // ...
        console.log(user);
      }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
    
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
        console.log(errorCode, errorMessage);
      });

  });

