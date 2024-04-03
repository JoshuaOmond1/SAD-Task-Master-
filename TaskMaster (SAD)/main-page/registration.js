const firebaseConfig = {
    apiKey: "AIzaSyALtSRDgqRLiIuPmCWFz1QNrbflVi45dpM",
    authDomain: "sad-task-manger-project.firebaseapp.com",
    databaseURL: "https://sad-task-manger-project-default-rtdb.firebaseio.com",
    projectId: "sad-task-manger-project",
    storageBucket: "sad-task-manger-project.appspot.com",
    messagingSenderId: "627141050054",
    appId: "1:627141050054:web:86d64d568ffc77be8561c7",
    measurementId: "G-JRDHXXGD9E"
  };
const auth = firbase.auth()
const database = firebase.database()

function register () {
    email = document.getElementById('email').value
    password = document.getElementById('password').value
    full_name = document.getElementById('full_name').value
}
if (validate_email('email') == false || validate_password(password) == false) {
    alert('Email or Password is incorrect')
    return
}
if (validate_field(full_name) == false) {
    return
}
auth.createUserWithEmailAndPassword(email, password)
.then(function(){
    var user  = auth.currentUser
    var database_ref =database.ref()
    var user_data = {
        email : email,
        full_name : full_name,
        last_login : Date.now()

    }

    database_ref.child('users/' + user.uid).set(user_data)



    alert('User Created!') 

})
.catch(function(error) {
    var error_code = error.error_code
    var error_message = error.message

    alert(error_message)
})

function validate_email(email){
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if(expression.test(email) ==true){
        return true
    } else{
        return false
    }
}
function validate_password(password) {
    if (password < 6){
        return false
    } else {
        return true
    }
}
function validate_field(field) {
    if(field == null){
        return false
    } else {
        return true
    }

    if (field.lenght <= 0) {
        return false
    } else { 
        return true
    }
}
function checkIfEighteen(birthYear) {
    const currentYear = new Date().getFullYear();
    const age = currentYear - birthYear;
    
    if (age < 18) {
      alert("You are not 18 yet.");
      return;
    }
    
    if (age > 100) {
      return;
    }
    
    console.log("You are 18 or older.");
  }

  // Example usage
  checkIfEighteen(2006); // Alerts: "You are not 18 yet."
  checkIfEighteen(1920); // Does not log anything
  checkIfEighteen(1900); // Does not log anything
  checkIfEighteen(2004); // Logs: "You are 18 or older."
  
  function isValidPhoneNumber(phoneNumber) {
    // Regular expression to match a valid phone number in NANP format
    const phoneRegex = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    return phoneRegex.test(phoneNumber);
  }
  
  // Example usage
  console.log(isValidPhoneNumber("123-456-7890")); // true
  console.log(isValidPhoneNumber("(123) 456-7890")); // true
  console.log(isValidPhoneNumber("1234567890")); // true
  console.log(isValidPhoneNumber("123-45-6789")); // false
  console.log(isValidPhoneNumber("12-3456-7890")); // false
  
  

  