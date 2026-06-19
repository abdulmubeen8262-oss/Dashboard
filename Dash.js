
function addRecentDraft(title){

    let container = document.getElementById("recentDrafts");

    let item = document.createElement("div");

    item.className = "draft-item";

    item.innerHTML = `
        <h4>${title}</h4>
        <span>📅 ${new Date().toLocaleDateString()}</span>
    `;

    container.prepend(item);
}
function saveDraft() {

    let title = document.getElementById("title").value.trim();
    let content = document.getElementById("content").value.trim();
    let msg = document.getElementById("msg");

    if(title === ""){
        msg.style.color = "red";
        msg.innerHTML = " Please enter a title";
        return;
    }

    // Save in browser storage
    localStorage.setItem("draftTitle", title);
    localStorage.setItem("draftContent", content);

    msg.style.color = "green";
    msg.innerHTML = "Draft Saved Successfully";

    setTimeout(() => {
        msg.innerHTML = "";
    }, 3000);
}


// Load saved draft automatically
window.onload = function(){

    let savedTitle = localStorage.getItem("draftTitle");
    let savedContent = localStorage.getItem("draftContent");

    if(savedTitle){
        document.getElementById("title").value = savedTitle;
    }

    if(savedContent){
        document.getElementById("content").value = savedContent;
    }

    // Welcome Alert
    console.log("Dashboard Loaded Successfully");
};
// Counter
function countChars(){

    let text = document.getElementById("content").value;

    document.getElementById("counter").innerHTML =
    text.length + " Characters";
}
// dark mood
function toggleMode(){

    document.body.classList.toggle("dark-mode");

}

function updateClock(){

    let now = new Date();

    document.getElementById("clock").innerHTML =
    now.toLocaleTimeString();

}

setInterval(updateClock,1000);
updateClock();