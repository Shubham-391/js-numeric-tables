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