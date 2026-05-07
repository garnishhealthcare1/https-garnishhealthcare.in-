function toggleAI(){
document.getElementById("aiBox").style.display =
document.getElementById("aiBox").style.display === "block" ? "none" : "block";
}

let aiBody = document.getElementById("aiBody");
let aiInput = document.getElementById("aiInput");

aiInput.addEventListener("keypress", function(e){
if(e.key === "Enter"){
let q = aiInput.value.toLowerCase();
aiInput.value="";

let r="Please contact clinic.";

if(q.includes("rct")) r="RCT is painless root canal treatment.";
else if(q.includes("implant")) r="Dental implant is permanent tooth replacement.";
else if(q.includes("cost")) r="Cost depends on case.";
else if(q.includes("time")) r="Clinic timing 10 AM - 8 PM.";

aiBody.innerHTML += "<p><b>You:</b>"+q+"</p>";
aiBody.innerHTML += "<p><b>AI:</b>"+r+"</p>";
}
});