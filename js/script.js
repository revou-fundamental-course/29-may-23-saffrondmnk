function changePlaceholder() {
    var elementUser = document.getElementById("user");
    var elementName = document.getElementById("full-name");

    
    var elementNew = elementUser.innerText;
    elementName.placeholder = elementNew;
}

function validateForm() {

    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = date+' '+time;

    
    const name = document.forms["message-form"]["full-name"].value; 
    const birthDate = document.forms["message-form"]["birth-date"].value; 
    const gender = document.forms["message-form"]["gender"].value; 
    const messages = document.forms["message-form"]["messages"].value;
    
    if (name == "" || birthDate == "" || gender == "" || messages == "") {
        alert("Tidak boleh ada yang kosong");
        return false;
    }
    
    setSenderUI  (dateTime, name, birthDate, gender, messages);
    return false;
}

function setSenderUI(dateTime, name, birthDate, gender, messages) {
    document.getElementById("sender-current-time").innerHTML = dateTime;
    document.getElementById("sender-full-name").innerHTML = name;
    document.getElementById("sender-birth-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
    
}