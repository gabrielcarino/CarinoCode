const body = document.body;
const div = body.children[1];
const main = div.children[0];
const p = main.children[3];
const a = document.createElement("a");
const linkText = document.createTextNode("the Flatiron School");
a.appendChild(linkText);
a.href = "https://flatironschool.com/";
p.appendChild(a);