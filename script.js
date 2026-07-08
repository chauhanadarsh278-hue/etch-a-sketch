function makeGrid(num){
    let cont = document.querySelector("#container");
    cont.style.border="2px solid black";
    cont.innerHTML = "";
    cont.style.display="flex";
    cont.style.width="960px";
    cont.style.height="960px";
    if(num>100) num = 100;
    cont.style.flexDirection="column";
    for(let i = 1; i <= num; i++){
    let rowDiv = document.createElement("div");
    rowDiv.style.flex="auto";   
    rowDiv.style.display="flex";
    cont.appendChild(rowDiv);
    for(let j = 1; j <= num; j++){
        let colDiv = document.createElement("div");
        rowDiv.appendChild(colDiv);
        colDiv.style.flex="auto";
        colDiv.addEventListener('mouseenter', () => {
            colDiv.style.backgroundColor = "black";
        });
    }
    }
}
makeGrid(16);
let btn = document.querySelector("button");
btn.addEventListener("click", () =>{
    num= prompt("Enter the number of squares per side for the new grid, remember maximum input you can enter is 100 otherwise it will be 100*100 grid.",16);    
    makeGrid(num);
});
