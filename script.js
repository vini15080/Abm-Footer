
    function hiddenButton() {

        var checkBox = document.getElementById("show-foot");

        var text = document.getElementById("btnMoreInfos");
        
        if (checkBox.checked == true){
            text.style.visibility = "hidden";
        } else {
            text.style.visibility = "visible";
        }
    }
