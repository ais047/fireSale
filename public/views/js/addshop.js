$(document).on('ready', function() {
    var currentURL = window.location.origin;
    var id = ;
    $("#submit").on("click", function() {


        var itemurl;
        var newStore = {
            shopName: $("#name").val().trim(),
            shopDescription: $("#description").val().trim()
        };
        // window.location.href= "/";


        $.post("/api/shops", newStore)
            .done(function(data) {
                console.log(data);
                console.log("--------------------shop id: " + data.id);
                itemurl = "/api/items" + data.id;
                id = data.id;
                var item = {
                    itemTitle: $("#itemName").val(),
                    image: $("#image"),
                    price: $("#price").val(),
                    stock: $("#Inventory").val(),
                    ShopId: data.id

                };

                $.post(itemurl, item).done(function(da) {
                    console.log(da)

                });



            });
        window.location.href = "additem/" + id;


    });
        //    window.location.href = "/";

});
// $("#submit").on("click", function() {
//     var newStore = {
//         shopName: $("#name").val().trim(),
//         shopDescription: $("#description").val().trim()
//     };
//     var item1 = {    
//         itemName: $("#itemName1").val(),
//         image: $("#image1"),
//         price: $("#price1").val(),
//         stock: $("#inventory1").val()
//     };
//      var item2 = {    
//         itemName: $("#itemName2").val(),
//         image: $("#image2"),
//         price: $("#price2").val(),
//         stock: $("#inventory2").val()
//     };
//      var item3 = {    
//         itemName: $("#itemName3").val(),
//         image: $("#image3"),
//         price: $("#price3").val(),
//         stock: $("#inventory3").val()
//     };
//      var item4 = {    
//         itemName: $("#itemName4").val(),
//         image: $("#image4"),
//         price: $("#price4").val(),
//         stock: $("#inventory4").val()
//     };
//     console.log(newStore);
//     console.log(item1);
//     console.log(item2);
//     console.log(item3);
//     console.log(item4);
//     var currentURL = window.location.origin;

//     $.post(currentURL + "/api/shops", newStore)
//         .done(function(data) {
//             console.log(data);

//         });
//      $.post(currentURL + "/api/items", item1, item2, item3, item4)
//         .done(function(data) {
//             console.log(data);

//         });
// });