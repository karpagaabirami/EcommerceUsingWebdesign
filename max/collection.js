
var productContainer = document.getElementById("products");
var search = document.getElementById("search");
var productlist = productContainer.querySelectorAll(".products-box");

search.addEventListener("keyup", function() {
    var enterValue = event.target.value.toUpperCase();

    for (var count = 0; count < productlist.length; count++) {
        var productname = productlist[count].querySelector("p").textContent.toUpperCase();
        if (productname.indexOf(enterValue) < 0) {
            productlist[count].style.display = "none";
        } else {
            productlist[count].style.display = "block";
        }
    }

    // Reset display if search input is empty
    if (enterValue === '') {
        productlist.forEach(function(product) {
            product.style.display = "block";
        });
    }
});
