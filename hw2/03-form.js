/** Exercise 03 - Form **/

// Add your code here

function submitForm(){
    console.log("========== Form Submission ===========");
var username = document.getElementById("username").value;
console.log("Name: " + username);
var email = document.getElementById("email").value;
console.log("Email: " + email);
var feedback = document.getElementById("message").value;
if (feedback == "")
console.log("Feedback: No feedback was submitted");
else
console.log("Feedback: " + feedback);
if (document.getElementById("exampleCheck1").checked)
console.log("Newsletter: Yes, I would like to join the newletter");
else
console.log("Newsletter: No, thank you.");
};

function resetForm(){
    document.getElementById("myform").reset();
};