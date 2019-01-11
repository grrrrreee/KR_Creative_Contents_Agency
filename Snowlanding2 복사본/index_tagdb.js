var db = firebase.firestore();

function storeData() {

    var inputText= document.getElementById("text_field").value;
    var emailText= document.getElementById("email_field").value;
    db.collection("Users").doc().set({
        name: inputText,
        email: emailText
    })
    .then(function() {
        console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
}

function upDateData() {

    var inputText= document.getElementById("text_field").value;
    var emailText= document.getElementById("email_field").value;
    db.collection("Users").doc("one").set({
        name: inputText,
        email: emailText
    })
    .then(function() {
        console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
}