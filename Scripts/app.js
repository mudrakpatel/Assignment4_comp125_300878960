/*Mudrak Patel;CentennialCollege;300878960;Semester2*/
/*Custom script go here*/
var NavDiv = document.getElementById("NavDiv");
//grabbing logo in the logo div tag
var logoDiv = document.getElementById("logoDiv");
//Grabbing MVISION text
var MVISION_text = document.getElementById("MVISION_text");
MVISION_text.innerText = "M Vision";
//All function declarations used for all pages
function Final(event) {
    event.preventDefault();
    //LinkBackToHome_A.preventDefault();
    console.log("submitted");
    showFormInput();
    event.reset();
}
//SendButtonClicked function declaration
function SendButtonClicked() {
    console.log("Send button is clicked!");
}
//showFormInput function declaration
function showFormInput() {
    console.log("++++++++++++++++++++++++++++++++++++++++++");
    console.log("First Name : " + FirstName.value);
    console.log("++++++++++++++++++++++++++++++++++++++++++");
    console.log("++++++++++++++++++++++++++++++++++++++++++");
    console.log("Last Name : " + LastName.value);
    console.log("++++++++++++++++++++++++++++++++++++++++++");
    console.log("++++++++++++++++++++++++++++++++++++++++++");
    console.log("Email : " + Email.value);
    console.log("++++++++++++++++++++++++++++++++++++++++++");
}


//Grabbing ContactLink div tag for all possible places

var CL_AboutPage = document.getElementById("CL_AboutPage");

if (CL_AboutPage !== null)
    CL_AboutPage.innerText = "Contact me";

var CL_ProjectsPage = document.getElementById("CL_ProjectsPage");

if (CL_ProjectsPage !== null)
    CL_ProjectsPage.innerText = "Contact me";
//Grabbing ProjectsLink div tag

var PL_AboutPage = document.getElementById("PL_AboutPage");

if (PL_AboutPage !== null)
    PL_AboutPage.innerText = "Projects";
// var PLA_AboutPage=document.getElementById("PLA_AboutPage");
// PLA_AboutPage.innerText="Projects";
var PL_ContactPage = document.getElementById("PL_ContactPage");

if (PL_ContactPage !== null)
    PL_ContactPage.innerText = "Projects";
//Grabbing AboutLink div tag
var AL_ContactPage = document.getElementById("AL_ContactPage");

if (AL_ContactPage !== null)
    AL_ContactPage.innerText = "About me";

var AL_ProjectsPage = document.getElementById("AL_ProjectsPage");

if (AL_ProjectsPage !== null)
    AL_ProjectsPage.innerText = "About me";
//Grabbing text through div tags on projects page
var MyProjectsDiv = document.getElementById("MyProjectsDiv");
if (MyProjectsDiv !== null) {
    MyProjectsDiv.innerText = "Here are some of my projects :";
}
//Grabbing AboutMeParagraph and AboutMeHeading
var AboutMeHeading = document.getElementById("AboutMeHeading");
if (AboutMeHeading !== null) {
    AboutMeHeading.innerText = "About me :)";
}
//Grabbing all links to my projects present on ProjectsPage
var ListElement1 = document.getElementById("ListElement1");
var ListElement2 = document.getElementById("ListElement2");
var ListElement3 = document.getElementById("ListElement3");
var ListElement4 = document.getElementById("ListElement4");
var ListElement5 = document.getElementById("ListElement5");
var ListElement6 = document.getElementById("ListElement6");
var ListElement7 = document.getElementById("ListElement7");
//checking for existence of each list anchor
if (ListElement1 !== null) {
    ListElement1.innerText = "Assignment 1";
}
if (ListElement2 !== null) {
    ListElement2.innerText = "Assignment 2";
}
if (ListElement3 !== null) {
    ListElement3.innerText = "Assignment 3";
}
if (ListElement4 !== null) {
    ListElement4.innerText = "Assignment 4";
}
if (ListElement5 !== null) {
    ListElement5.innerText = "Practical Test 1";
}
if (ListElement6 !== null) {
    ListElement6.innerText = "Practical Test 2";
}
if (ListElement7 !== null) {
    ListElement7.innerText = "Term Project";
}
var AboutMeParagraph = document.getElementById("AboutMeParagraph");

//grabbing div tag ContactMeTextDiv on conatct page
var ContactMeTextDiv = document.getElementById("ContactMeTextDiv");

//Form functionality part
if (document.title == "ContactMe") {
    ContactMeTextDiv.innerText = "Contact form";
    //Form fields scripting
    var FNameDiv = document.getElementById("FNameDiv");
    var LNameDiv = document.getElementById("LNameDiv");
    var EmailDiv = document.getElementById("EmailDiv");
    //Putting inner text and inner html in above three elements
    FNameDiv.innerText = "First Name";
    LNameDiv.innerText = "Last Name";
    EmailDiv.innerText = "Email";
    //Submit button and reset button
    var LinkBackToHome = document.getElementById("LinkBackToHome");
    var ResetButton = document.getElementById("ResetButton");
    var LinkBackToHome_A = document.getElementById("LinkBackToHome_A");
    //Putting inner text and inner html in above three elements
    ResetButton.innerHTML = "Reset";
    LinkBackToHome.innerText = "Submit";
    LinkBackToHome_A.innerText = "Submit";
    ///////
    var LinkBackToHome_A = document.getElementById("LinkBackToHome_A");
    //LinkBackToHome_A.addEventListener("click",showFormInput);

    //Grabbing and declaring form feilds
    var FirstName = document.getElementById("FNameInput");
    var LastName = document.getElementById("LNameInput");
    var Email = document.getElementById("EmailInput");

    //Grabbing and declaring Form
    var Form = document.getElementById("Form");
    //Adding event listener to Form
    Form.addEventListener("click", Final);



}