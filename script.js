let projects = [
"Password Generator",
"Number Guessing Game",
"Random Quote Generator"
];

let projectList = document.getElementById("projectList");

projects.forEach(function(project){

let li = document.createElement("li");

li.textContent = project;

projectList.appendChild(li);

});


let year = new Date().getFullYear();

document.getElementById("year").innerText =
"© " + year + " Janak Tanwar";