window.onload = function(e) {
    var height = window.innerHeight;
    document.getElementById("mountains").setAttribute("style",`height:${height.toString()}px`);
    document.getElementById("city").setAttribute("style",`height:${height.toString()}px`);
    // alert(document.getElementById("city").height);
}