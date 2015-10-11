//------------------------------------------------------
//--Practice with Forms and the DOM Event Model (10 points)
//------------------------------------------------------

//1.       Add a button to a web page. Use the old school HTML attribute method to attach a click event handler to the button. That handler should call a function that displays the message “I have been clicked” out into an alert box.

function alertMessage(){
    alert("I have been clicked!!");
};

//2.       Add a button to a web page and uniquely ID the button. Write a script that finds the button by its ID. Then use the DOM Element method to associate a function with the onclick event of the button. Again, display the message “I have been clicked” out into an alert box.

var newClick = document.getElementById("btn2");
newClick.onclick = function(){
    alert("Yes! I have been clicked!");
};