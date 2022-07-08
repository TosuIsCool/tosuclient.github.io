function init() {
    let query = window.matchMedia("(max-width: 979px)");

    if(query.matches) {
      const myDiv = document.getElementById("textlol");
      const parent = myDiv.parentNode;
      parent.removeChild(myDiv);
    } else {

    }
}