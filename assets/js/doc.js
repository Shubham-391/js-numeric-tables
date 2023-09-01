let y = prompt("Please enter a number");

if (y != null) {
    document.querySelector(".number").innerHTML = y;
}


for (let x = 1 ; x < 11; x++) {
    let output = y + " " + "X" + " " + x + " " + "=" + " " + y * x;

    const para = document.createElement("p");
    const node = document.createTextNode(output);
    para.appendChild(node);

    const element = document.body;
    element.appendChild(para);

}

let fresh = document.createElement("button");
let fnode = document.createTextNode("Enter another number.");
fresh.appendChild(fnode);
const element2 = document.body;
element2.appendChild(fresh);
fresh.addEventListener("click", function () {
    window.location.reload();
})

