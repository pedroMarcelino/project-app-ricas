$(function () {
    var slider = document.getElementById("myRange");
    var output = document.getElementById("demo");
    output.innerHTML = slider.value;

    slider.oninput = function () {
        output.innerHTML = this.value;
    }

    var slider2 = document.getElementById("myRange2");
    var output2 = document.getElementById("demo2");
    output2.innerHTML = slider2.value;

    slider2.oninput = function () {
        output2.innerHTML = this.value;
    }
})

function aplicaFiltro(id, slider, unidade, filtro) {

    var unidade = unidade.toString();
    var valinput = document.getElementById(slider).value;
    
    var a =  filtro + "("+ valinput + unidade +")";

    $("#" + id).css('filter', a );
}