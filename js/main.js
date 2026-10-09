/* =========================================================
   COLLEGE PLACEMENT PORTAL
   MAIN JAVASCRIPT
========================================================= */


/* =========================================================
   NAVBAR SCROLL EFFECT
========================================================= */

const navbar = document.querySelector(".placement-navbar");

window.addEventListener("scroll", () => {

    if (!navbar) return;

    if (window.scrollY > 50) {

        navbar.style.boxShadow =
            "0 5px 25px rgba(0, 0, 0, 0.15)";

    } else {

        navbar.style.boxShadow = "none";

    }

});


/* =========================================================
   ANIMATED COUNTERS
========================================================= */

const counters = document.querySelectorAll(".counter");

const startCounter = (counter) => {

    const target = Number(counter.dataset.target);

    let current = 0;

    const increment = Math.max(
        1,
        Math.ceil(target / 60)
    );

    const updateCounter = () => {

        current += increment;

        if (current >= target) {

            counter.textContent = target;

            return;

        }

        counter.textContent = current;

        requestAnimationFrame(updateCounter);

    };

    updateCounter();

};


/* =========================================================
   COUNTER OBSERVER
========================================================= */

if (counters.length > 0) {

    const counterObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        startCounter(entry.target);

                        observer.unobserve(entry.target);

                    }

                });

            },
            {
                threshold: 0.5
            }
        );


    counters.forEach(counter => {

        counterObserver.observe(counter);

    });

}


/* =========================================================
   BACK TO TOP BUTTON
========================================================= */

const backToTop =
    document.getElementById("backToTop");


if (backToTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 400) {

            backToTop.classList.add("show");

        } else {

            backToTop.classList.remove("show");

        }

    });


    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* =========================================================
   MOBILE NAVBAR CLOSE
========================================================= */

const navLinks =
    document.querySelectorAll(".navbar-nav .nav-link");

const navbarCollapse =
    document.querySelector(".navbar-collapse");


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (
            navbarCollapse &&
            navbarCollapse.classList.contains("show")
        ) {

            const bsCollapse =
                bootstrap.Collapse.getInstance(
                    navbarCollapse
                );

            if (bsCollapse) {

                bsCollapse.hide();

            }

        }

    });

});


/* =========================================================
   SMOOTH SCROLLING
========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId =
            this.getAttribute("href");

        if (
            targetId === "#" ||
            targetId.length === 0
        ) {
            return;
        }


        const target =
            document.querySelector(targetId);


        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


/* =========================================================
   SCROLL REVEAL ANIMATION
========================================================= */

const animatedElements =
    document.querySelectorAll(
        ".stat-card, .company-card, .drive-card, " +
        ".testimonial-card, .training-card, " +
        ".announcement-item, .process-item"
    );


animatedElements.forEach(element => {

    element.classList.add("animate-on-scroll");

});


if (animatedElements.length > 0) {

    const animationObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    animatedElements.forEach(element => {

        animationObserver.observe(element);

    });

}


/* =========================================================
   ACTIVE NAVIGATION LINK
========================================================= */

const currentPage =
    window.location.pathname
        .split("/")
        .pop();


document
    .querySelectorAll(".navbar-nav .nav-link")
    .forEach(link => {

        const linkPage =
            link.getAttribute("href");

        if (
            linkPage === currentPage ||
            (
                currentPage === "" &&
                linkPage === "index.html"
            )
        ) {

            document
                .querySelectorAll(
                    ".navbar-nav .nav-link"
                )
                .forEach(item => {

                    item.classList.remove("active");

                });

            link.classList.add("active");

        }

    });


/* =========================================================
   CURRENT YEAR
========================================================= */

const yearElements =
    document.querySelectorAll(".current-year");


yearElements.forEach(element => {

    element.textContent =
        new Date().getFullYear();

});


/* =========================================================
   CONSOLE MESSAGE
========================================================= */

console.log(
    "College Placement Portal loaded successfully."
);