(function(jQuery, window){ 
    var lastSelectedColorName = null;
    var colorSwatches = {
        onColorSelected: function(event){
            if(lastSelectedColorName !== event.target.textContent){
                jQuery(".selected-color").html(event.target.textContent);
                jQuery(".preview-window").addClass(event.target.textContent);
                jQuery(".preview-window").removeClass(lastSelectedColorName);
                jQuery(".color-is-selected").removeClass("color-is-selected");
                jQuery(this).addClass("color-is-selected");
                lastSelectedColorName = event.target.textContent;
            }
        },
        generateColorSwatches: function(data){
            return `<ul class="textures">` + 
                data.reduce(function(agg, value){ 
                    agg += `<div class='color-selection'>
                                <li class="`+ value +` color hide-text">`+ value +`</li>
                            </div>`
                    return agg;
                }, "") +
            `</ul>`;
        }, init: function(options){
            options.success.call(this, { name: options.data[0]});
            jQuery(".preview-window").addClass(options.data[0]);
            jQuery(jQuery(".color-selection")[0]).addClass("color-is-selected");
        }
    };
    $.fn.initColorSwatches = function(options){
        var options = options || {};
        if(options.data){
            jQuery(".color-swatches").html(colorSwatches.generateColorSwatches(options.data));
            jQuery(".color-selection").click(function(event){
                colorSwatches.onColorSelected.call(this, event);
                options.success.call(this, { name: event.target.textContent });
            });
            colorSwatches.init(options);
        }

        if(options.url){
            // $.getJSON(options.url, function(response){
            //     options.success.call(this, { response: response})
            // });
        }
    }
}($, window))