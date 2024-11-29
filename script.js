const textbox=document.getElementById("textbox");
const h2=document.getElementById("h2");
const toFarenheit=document.getElementById("toFarenheit");
const toCelcius=document.getElementById("toCelcius");
const button=document.getElementById("button");
let temp;
function convert(event){
    event.preventDefault();
    if(toCelcius.checked){
        temp=(((Number(textbox.value))-32)*5/9).toFixed(1)
        h2.textContent=`${temp} C`
    }else if(toFarenheit.checked){
        temp=((Number(textbox.value)*9/5)+32).toFixed(1)
        h2.textContent=`${temp} F`

    }else{
        h2.textContent="Please select an option"
    }

}
button.addEventListener('click',convert);
