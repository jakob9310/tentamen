// JavaScript för att implementera kraven A-E.
$(function(){

    var $products = $('#products');

    $.ajax({
        type: 'GET',
        url: 'http://demo.edument.se/api/products',
        success: function(products){
            console.log('success', products);
            var i = 0;

            $.each(products, function(i, products){
                let property = Math.floor((Math.random() * 10) + 1);
                $products.append('<li style="display: flex; flex-direction: column">' + "<img src='" + products.Image + "' />" + products.Name + '<p>' + ' property: ' + property + '</p>' + '<button class="addCart">Add to Cart</button>' + '</li>');

            });

            $( ".addCart" ).click(function() {
                alert( "Added to cart" );
                document.getElementById('cartQuantity').innerHTML = ++i;
            });

        }


    });
});


