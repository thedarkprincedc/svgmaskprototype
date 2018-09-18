(function(){
    $( document ).ready(function() {
        $(".title").html("fossil title");
        $(".color-swatches").setColorSwatches([
            "Red-T09", "Green-T08","Blue-T044","Vien-T044"
        ], function(selected){
            $(".color-name").html("Color: " + selected.name)
        })
    });
}())