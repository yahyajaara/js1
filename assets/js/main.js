function change_size()
{
    document.querySelector(".title").classList.toggle("changeSize");
    document.querySelector(".change-size-b").classList.toggle("changeButton");
    document.querySelector(".change-mood-b").classList.toggle("changeButton");


}


function change_mode()
{
    document.querySelector("body").classList.toggle("changeMode");
}


document.querySelector(".change-size-b").onclick = change_size;
document.querySelector(".change-mood-b").onclick = change_mode;

