$(function(){
    $("#devourBtn").on("click", function(){
        var id = $(this).data("id");
        var burgerDevoured = 1
        location.reload();

        var newBurger = {
            devoured: burgerDevoured
        };
        //send the PUT request
        $.ajax("/api/burgers/" + id,{
            type: "PUT",
            data: newBurger
        }).then(
            function(){
                console.log(burgerDevoured);

                location.reload();
            }
        )
    });

    $(".create-form").on("submit", function(event){

        event.preventDefault();

        var newBurger = {
            burger_name: $("#burgertext").val().trim()
        };
            // send post request
        $.ajax("/api/burgers/", {
            type: "POST",
            data: newBurger
        }).then(
            function(){
                console.log("Burger ordered")
                //reload page to get updated list
                location.reload();
            }
        )
    });

    $(".deleteburger").on("click", function(event){
        var id = $(this).data("id");

        $.ajax("/api/burgers/" + id , {
            type: "DELETE"
        }).then(
            function(){
                console.log("deleted burger", id);

                location.reload();
            }
        )
    })


});