const app = {

    devourBurger: function (id) {
        $.ajax("/api/burger/" + id, {
            type: "PUT",
        })
    },

    burgerClicks: function () {
        $(".devour-btn").on("click", function (event) {
            var id = $(this).data("data-burger");

            $.ajax("/api/burger" + id, {
                type: "ADD",
            }).then(
                function () {
                    location.reload();
                }
            )
        })
        app.devourBurger(id);

        //ADD BURGER TO DEVOURED
    }
}


