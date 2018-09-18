(function(){
    var title = $(".title");
    var previewWindow = $(".preview-window");
    var lastSelectedColor = null;
    function onSelectionClicked(event){
        setSelectedColor(event.target.textContent);    
        $(this).addClass("color-is-selected");
    }
    function setSelectedColor(colorName){
        if(lastSelectedColor !== colorName){
            $(".selected-color").html(colorName);
            previewWindow.addClass(colorName);
            $(".preview-window").removeClass(lastSelectedColor)
            $(".color-is-selected").removeClass("color-is-selected")
            lastSelectedColor = colorName;
        }
        
    }

    $( document ).ready(function() {
        title.html("fossil title");
        setSelectedColor("Red-T09");
        $(".color-selection").click(onSelectionClicked);
    });
}())