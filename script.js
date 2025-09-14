

        let header = document.getElementById("header");

        window.addEventListener("scroll", function () {
            if (window.scrollY > 0) {
                header.classList.add("fixed");
            } else {
                header.classList.remove("fixed");
            }
        });


        const toggleButton = document.querySelector(".toggle-button");
        const navLinks = document.querySelector(".navbar");
        const links = document.querySelectorAll('.navbar ul li a');

        toggleButton.addEventListener("click", () => {
            navLinks.classList.toggle("nav-active")
        });

        links.forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("nav-active");
            });
        });

