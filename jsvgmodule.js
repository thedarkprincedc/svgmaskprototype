(function(jQuery, window){ 
    var title = $(".title");
    var previewWindow = $(".preview-window");
    var lastSelectedColor = null;
    function getColorTemplate(node){
        return `<div class='color-selection'>
                    <li class="`+ node +` color hide-text">`+ node +`</li>
                </div>`;
    }
    function onSelectionClicked(event){
        setSelectedColor(event.target.textContent);
        
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
    
    $.fn.setColorSwatches = function(data, callback){
        jQuery(".color-swatches").html(
            `<ul class="textures">` + 
                data.reduce(function(agg, value){ 
                    agg += getColorTemplate(value);
                    return agg;
                }, "") +
            `</ul>`)
        jQuery(".color-selection").click(function(event){
            onSelectionClicked(event);
            callback({
                name: lastSelectedColor
            });
            $(this).addClass("color-is-selected");
        });
        setSelectedColor(data[0]);
        $(data[0]).addClass("color-is-selected");
        callback({
            name: lastSelectedColor
        });
    }
}($, window))