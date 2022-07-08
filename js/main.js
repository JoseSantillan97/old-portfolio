(function(){
    document.onmousemove = function(ev){
        var x = -ev.clientX / 18;
        var y = -ev.clientY / 18;
        document.getElementById('parallax').style.backgroundPosition = x + 'px '+ y + 'px';
    };

    window.onscroll = function() {myFunction()};
    function myFunction() {
        // var nav = document.getElementById('barrita')[0];
        if (document.documentElement.scrollTop > 250) {
            document.getElementById("navBar").className = "barraNavegacionScroll";
            document.getElementById("logo").className = "loguitoScroll";
        } else {
            document.getElementById("navBar").className = "barraNavegacion";
            document.getElementById("logo").className = "loguito";
        }
    }


}());