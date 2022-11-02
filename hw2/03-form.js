/** Exercise 03 - Form **/

// Add your code here

function submitForm(){
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    if (!isValidFormSubmission(username, email)) return;
    console.group("Form Details");
    console.log("========== Form Submission ===========");
    
    console.log("Name: " + username);
    
    console.log("Email: " + email);
    const feedback = document.getElementById("message").value;
    if (feedback == "")
        console.log("Feedback: No feedback was submitted");
    else
        console.log("Feedback: " + feedback);
    if (document.getElementById("exampleCheck1").checked)
        console.log("Newsletter: Yes, I would like to join the newletter");
    else
        console.log("Newsletter: No, thank you.");
    console.groupEnd();
};

function isValidEmail(email)
{
    return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

function isValidFormSubmission(name, email) {
    if (name == "" && email == "") {
        alert("Please enter your name and email address");
    } else if (name == "") {
        alert("Please enter your name");
    } else if (email == "") {
        alert("Please enter your email address");
    } else if (!isValidEmail(email)) {
        alert("Please enter a valid email address") 
    } else { 
        return true;
    }
    return false;
}
function resetForm(){
    document.getElementById("myform").reset();
};