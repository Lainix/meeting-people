

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  // var name =profile.getName();
  // var email = profile.getEmail();
  // var imageUser = profile.getImageuRL();
  // var myStorage = window.localStorage;
  // console.log(myStorage);
  // console.log("juan"+name);
  // window.location.href = "../views/main.html";
  var name = profile.getName();
  var photo = profile.getImageUrl();
  var email = profile.getEmail();

  $("#name").append(name);
  $("#email").append(email);
  $("#photo").attr("src",photo);

  // console.log("juanito" + name, photo, email);
  // console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  // console.log('Name: ' + profile.getName());
  // console.log('Image URL: ' + profile.getImageUrl());
  // console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log('User signed out.');
    window.location.href = "../index.html";
  });
}







