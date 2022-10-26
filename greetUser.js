
window.onLoad = init;

function init() {
    onGreetUserBtnClicked();
}


function onGreetUserBtnClicked() {
    console.log(`onGreetUserBtnClicked() called`);
    let nameField = document.getElementById('nameField');
    let name = nameField.value;
    console.log(name);
    let greeting = `Hello ${name}`;
    alert(greeting);
 
 
}
