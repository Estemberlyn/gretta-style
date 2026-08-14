/* =========================================
   GRETTA-STYLE
   ECOMMERCE JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", () => {


    /* =====================================
       MENU HAMBURGUESA
    ===================================== */

    const hamburger =
        document.getElementById("hamburger");

    const sideMenu =
        document.getElementById("sideMenu");

    const menuOverlay =
        document.getElementById("menuOverlay");

    const closeMenu =
        document.getElementById("closeMenu");


    function openMenu() {

        sideMenu.classList.add("active");

        menuOverlay.classList.add("active");

        document.body.classList.add("menu-open");

    }


    function closeSideMenu() {

        sideMenu.classList.remove("active");

        menuOverlay.classList.remove("active");

        document.body.classList.remove("menu-open");

    }


    hamburger.addEventListener(
        "click",
        openMenu
    );


    closeMenu.addEventListener(
        "click",
        closeSideMenu
    );


    menuOverlay.addEventListener(
        "click",
        closeSideMenu
    );


    /* =====================================
       CATEGORÍAS DEL MENÚ
    ===================================== */

    const categoryButtons =
        document.querySelectorAll("button.category-title");


    categoryButtons.forEach(button => {

        button.addEventListener("click", () => {

            const category =
                button.parentElement;


            document
                .querySelectorAll(".menu-category")
                .forEach(item => {

                    if (item !== category) {

                        item.classList.remove("open");

                    }

                });


            category.classList.toggle("open");

        });

    });


    /* =====================================
       CERRAR MENÚ AL HACER CLICK
       EN UNA CATEGORÍA
    ===================================== */

    document
        .querySelectorAll(".category-items a, .menu-extra a")
        .forEach(link => {

            link.addEventListener("click", () => {

                closeSideMenu();

            });

        });


    /* =====================================
       SEARCH
    ===================================== */

    const searchButton =
        document.getElementById("searchButton");

    const searchPanel =
        document.getElementById("searchPanel");

    const closeSearch =
        document.getElementById("closeSearch");

    const searchInput =
        document.getElementById("searchInput");


    searchButton.addEventListener("click", () => {

        searchPanel.classList.add("active");

        setTimeout(() => {

            searchInput.focus();

        }, 300);

    });


    closeSearch.addEventListener("click", () => {

        searchPanel.classList.remove("active");

    });


    /* =====================================
       CUENTA / REGISTRO
    ===================================== */

    const accountButton =
        document.getElementById("accountButton");

    const accountPanel =
        document.getElementById("accountPanel");

    const closeAccount =
        document.getElementById("closeAccount");

    const registerForm =
        document.getElementById("registerForm");


    accountButton.addEventListener("click", () => {

        accountPanel.classList.add("active");

    });


    closeAccount.addEventListener("click", () => {

        accountPanel.classList.remove("active");

    });


    registerForm.addEventListener("submit", event => {

        event.preventDefault();

        registerForm.reset();

        accountPanel.classList.remove("active");

        alert("¡Cuenta creada con éxito! Bienvenido/a a GRETTA-STYLE.");

    });


    /* =====================================
       VISTA PANTALONES (MUJER / HOMBRE)
    ===================================== */

    const defaultView =
        document.getElementById("defaultView");

    const pantalonesView =
        document.getElementById("pantalonesView");

    const pantalonesLink =
        document.getElementById("pantalonesLink");

    const backToAll =
        document.getElementById("backToAll");


    function showDefaultView() {

        defaultView.classList.remove("hidden-view");

        pantalonesView.classList.remove("active");

    }


    function showPantalonesView() {

        defaultView.classList.add("hidden-view");

        pantalonesView.classList.add("active");

    }


    pantalonesLink.addEventListener("click", event => {

        event.preventDefault();

        closeSideMenu();

        showPantalonesView();

        document
            .getElementById("productos")
            .scrollIntoView({ behavior: "smooth" });

    });


    backToAll.addEventListener("click", () => {

        showDefaultView();

    });


    document
        .querySelectorAll('a[href="#productos"]')
        .forEach(link => {

            if (link.id === "pantalonesLink") return;

            link.addEventListener("click", showDefaultView);

        });


    /* =====================================
       FILTROS
    ===================================== */

    const filters =
        document.querySelectorAll(".filter");

    const products =
        document.querySelectorAll(".product-card");


    filters.forEach(filter => {

        filter.addEventListener("click", () => {

            filters.forEach(item => {

                item.classList.remove("active");

            });


            filter.classList.add("active");


            const selected =
                filter.dataset.filter;


            products.forEach(product => {

                const category =
                    product.dataset.category;


                if (
                    selected === "all" ||
                    category === selected
                ) {

                    product.classList.remove("hidden");

                } else {

                    product.classList.add("hidden");

                }

            });

        });

    });


    /* =====================================
       WISHLIST
    ===================================== */

    const wishlistButtons =
        document.querySelectorAll(".wishlist");


    wishlistButtons.forEach(button => {

        button.addEventListener("click", () => {

            button.classList.toggle("active");


            if (button.classList.contains("active")) {

                button.textContent = "♥";

            } else {

                button.textContent = "♡";

            }

        });

    });


    /* =====================================
       CARRITO
    ===================================== */

    const cartButton =
        document.getElementById("cartButton");

    const cart =
        document.getElementById("cart");

    const cartOverlay =
        document.getElementById("cartOverlay");

    const closeCart =
        document.getElementById("closeCart");

    const cartItems =
        document.getElementById("cartItems");

    const cartCount =
        document.getElementById("cartCount");

    const cartTotal =
        document.getElementById("cartTotal");

    const toast =
        document.getElementById("toast");

    const checkoutButton =
        document.getElementById("checkoutButton");

    const paymentPanel =
        document.getElementById("paymentPanel");

    const closePayment =
        document.getElementById("closePayment");

    const paymentForm =
        document.getElementById("paymentForm");

    const paymentTotal =
        document.getElementById("paymentTotal");


    let shoppingCart = [];


    function openCart() {

        cart.classList.add("active");

        cartOverlay.classList.add("active");

        document.body.classList.add("cart-open");

    }


    function closeShoppingCart() {

        cart.classList.remove("active");

        cartOverlay.classList.remove("active");

        document.body.classList.remove("cart-open");

    }


    cartButton.addEventListener(
        "click",
        openCart
    );


    closeCart.addEventListener(
        "click",
        closeShoppingCart
    );


    cartOverlay.addEventListener(
        "click",
        closeShoppingCart
    );


    checkoutButton.addEventListener("click", () => {

        if (shoppingCart.length === 0) {

            alert("Tu carrito está vacío.");

            return;

        }


        const total =
            shoppingCart.reduce(
                (sum, item) =>
                    sum + item.price,
                0
            );


        paymentTotal.textContent =
            formatARS(total);


        closeShoppingCart();

        paymentPanel.classList.add("active");

    });


    /* =====================================
       PAGO
    ===================================== */

    closePayment.addEventListener("click", () => {

        paymentPanel.classList.remove("active");

    });


    paymentForm.addEventListener("submit", event => {

        event.preventDefault();

        alert("¡Gracias por tu compra! Tu pedido fue confirmado.");

        paymentForm.reset();

        paymentPanel.classList.remove("active");

        shoppingCart = [];

        updateCart();

    });


    /* =====================================
       ADD PRODUCT
    ===================================== */

    const addButtons =
        document.querySelectorAll(".quick-add");


    addButtons.forEach(button => {

        button.addEventListener("click", () => {

            const product =
                button.dataset.product;

            const price =
                parseFloat(button.dataset.price);


            shoppingCart.push({

                name: product,

                price: price

            });


            updateCart();

            showToast();

            openCart();

        });

    });


    /* =====================================
       UPDATE CART
    ===================================== */

    function formatARS(price) {

        return "$" + price.toLocaleString("es-AR");

    }


    function updateCart() {

        cartCount.textContent =
            shoppingCart.length;


        if (shoppingCart.length === 0) {

            cartItems.innerHTML = `

                <p class="empty-cart">
                    Tu carrito está vacío.
                </p>

            `;

            cartTotal.textContent =
                "$0";

            return;

        }


        cartItems.innerHTML = "";


        shoppingCart.forEach((item, index) => {

            const cartItem =
                document.createElement("div");


            cartItem.classList.add("cart-item");


            cartItem.innerHTML = `

                <div
                    style="
                        width:80px;
                        height:100px;
                        background:#eee;
                        display:flex;
                        align-items:center;
                        justify-content:center;
                        font-size:10px;
                    "
                >
                    GRETTA-STYLE
                </div>


                <div>

                    <h3>
                        ${item.name}
                    </h3>

                    <p>
                        ${formatARS(item.price)}
                    </p>

                </div>


                <button
                    class="remove-item"
                    data-index="${index}"
                >
                    ×
                </button>

            `;


            cartItems.appendChild(cartItem);

        });


        const removeButtons =
            document.querySelectorAll(".remove-item");


        removeButtons.forEach(button => {

            button.addEventListener("click", () => {

                const index =
                    parseInt(button.dataset.index);


                shoppingCart.splice(
                    index,
                    1
                );


                updateCart();

            });

        });


        const total =
            shoppingCart.reduce(
                (sum, item) =>
                    sum + item.price,
                0
            );


        cartTotal.textContent =
            formatARS(total);

    }


    /* =====================================
       TOAST
    ===================================== */

    function showToast() {

        toast.classList.add("show");


        setTimeout(() => {

            toast.classList.remove("show");

        }, 2200);

    }


    /* =====================================
       NEWSLETTER
    ===================================== */

    const newsletterForm =
        document.getElementById(
            "newsletterForm"
        );


    newsletterForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const input =
                newsletterForm.querySelector(
                    "input"
                );


            if (!input.value) return;


            input.value = "";


            alert(
                "¡Gracias por suscribirte a GRETTA-STYLE!"
            );

        }
    );


    /* =====================================
       ESC KEY
    ===================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (event.key !== "Escape") return;


            closeSideMenu();

            closeShoppingCart();

            searchPanel.classList.remove(
                "active"
            );

            accountPanel.classList.remove(
                "active"
            );

            paymentPanel.classList.remove(
                "active"
            );

        }
    );


});
