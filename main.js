(function(){
    $( document ).ready(function() {
        $(".title").html("fossil title");
        $(".color-swatches").initColorSwatches({ 
            data: ["Red-T09", "Green-T08","Blue-T044","Vien-T044"],
            success: function(response){
                $(".color-name").html("Color: " + response.name)
            }
        })
    });
}())