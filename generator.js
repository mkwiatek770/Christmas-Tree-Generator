var CONTAINER_WIDTH = 800;


function createContainer() {
    var container = document.createElement('div')
    container.classList.add('container')

    container.style.backgroundColor = '#eee';
    container.style.width = CONTAINER_WIDTH + "px";
    container.style.height = "90vh";
    container.style.margin = "5vh auto";
    container.style.position = "relative";

    document.body.appendChild(container)
}

function createTriangles() {
    var element_width = 100
    var container = document.querySelector('.container');
    for (var i = 1; i <= 4; i++) {
        var div = document.createElement('div');
        div.style.width = "0px";
        div.style.height = "0px";
        div.style.margin = "0 auto";
        div.style.position = "absolute";
        div.style.border = "solid " + element_width + "px";
        div.style.borderColor = "transparent transparent green transparent";
        var left = CONTAINER_WIDTH / 2 - element_width;
        div.style.left = left + "px";
        div.style.top = "-50px";

        container.appendChild(div);

        element_width += 50;
    }

}

function createTrunk() {

    var container = document.querySelector('.container');

    var trunk = document.createElement('div')
    trunk.style.width = "70px";
    trunk.style.height = "90px";
    trunk.style.top = "450px";
    trunk.style.left = "365px";
    trunk.style.position = 'absolute';
    trunk.style.backgroundColor = "saddlebrown";

    container.appendChild(trunk);

}

function createHeader() {
    var container = document.querySelector('.container');

    var div = document.createElement('div');
    div.style.fontSize = "60px";
    div.style.fontFamily = "Arial";
    div.style.position = "absolute";
    div.style.bottom = "20px";
    div.style.width = "100%";
    div.style.textAlign = "center";
    div.style.color = "red";

    div.innerHTML = "Merry Christmas!!"

    container.appendChild(div)
}

createContainer();
createTriangles();
createTrunk();
createHeader();
