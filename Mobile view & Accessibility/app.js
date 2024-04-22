var body_text = document.getElementById("t"); //get the text size
var get_text_size = localStorage.getItem("font-size");
document.body.style.fontSize = get_text_size;
document.getElementById("t").style.fontSize= get_text_size;
var style_sheets = localStorage.getItem("styles");

function clicking()
{
    var text_size = document.getElementById("text_box").value+"pt";
    body_text.style.fontSize = text_size;
    localStorage.setItem("font-size", text_size);
    console.log(text_size);

}

function swapStyleSheet(styles, id)

{
    document.getElementById("pageStyle").setAttribute("href", styles);
    localStorage.setItem("styles", id);
}

switch(style_sheets)
{
    case "a":
        document.getElementById("pageStyle").setAttribute("href","styles/one.css");
        break;
    case "b":
        document.getElementById("pageStyle").setAttribute("href","styles/two.css");
        break;
    case "c":
        document.getElementById("pageStyle").setAttribute("href","styles/three.css");
        break;
    case "d":
        document.getElementById("pageStyle").setAttribute("href","styles/four.css");
        break;


}
