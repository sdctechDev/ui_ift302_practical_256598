document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("js-loaded");

    /*SPACE PARTICLES*/

    const starContainer = document.createElement("div");
    starContainer.className = "space-particles";
    document.body.prepend(starContainer);

    for (let i = 0; i < 70; i++) {
        const star = document.createElement("span");
        star.className = "space-star";
        star.style.left = Math.random() * 100 + "%";
        star.style.top = Math.random() * 100 + "%";
        star.style.animationDelay = Math.random() * 5 + "s";
        star.style.animationDuration = (2 + Math.random() * 4) + "s";
        const size = 1 + Math.random() * 3;
        star.style.width = size + "px";
        star.style.height = size + "px";
        starContainer.appendChild(star);
    }

    /*HERO TITLE ANIMATION*/

    const heroTitle = document.querySelector(".article-intro h1");
    if (heroTitle) {
        heroTitle.classList.add("hero-animate");
    }

    /*SCROLL REVEAL*/

    const revealElements = document.querySelectorAll(
        ".story-section, .article-statement, .pull-quote, .article-ending"
    );
    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        {
            threshold: 0.15
        }
    );

    revealElements.forEach((element) => {
        element.classList.add("reveal-element");
        revealObserver.observe(element);
    });

    /*SECTION HEADING ANIMATION*/

    const headings = document.querySelectorAll(
        ".section-content h2, .article-statement h2, .article-ending h2"
    );

    const headingObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("heading-visible");
                }
            });
        },
        {
            threshold: 0.3
        }
    );
    headings.forEach((heading) => {
        heading.classList.add("animated-heading");
        headingObserver.observe(heading);
    });

    /*PULSING SECTION NUMBERS*/

    const numbers = document.querySelectorAll(".section-number");

    numbers.forEach((number) => {
        number.classList.add("number-pulse");
    });


    const labels = document.querySelectorAll(
        ".article-label, .section-label, .article-statement span, .article-ending span"
    );
    labels.forEach((label) => {
        label.classList.add("cosmic-label");
    });


    const unknownSection = document.querySelector(
        ".article-statement.dark"
    );
    if (unknownSection) {
        unknownSection.classList.add("moving-universe");
    }


    const storySections = document.querySelectorAll(".story-section");
    storySections.forEach((section) => {
        section.addEventListener("mousemove", (event) => {
            const rect = section.getBoundingClientRect();
            const x =
                (event.clientX - rect.left) / rect.width - 0.5;
            const y =
                (event.clientY - rect.top) / rect.height - 0.5;
            const content = section.querySelector(".section-content");
            if (content) {
                content.style.transform =
                    `translate(${x * 8}px, ${y * 8}px)`;
            }
        });

        section.addEventListener("mouseleave", () => {
            const content = section.querySelector(".section-content");
            if (content) {
                content.style.transform = "translate(0, 0)";
            }
        });
    });


    const quote = document.querySelector(".pull-quote");
    if (quote) {
        quote.addEventListener("mousemove", (event) => {
            const rect = quote.getBoundingClientRect();
            const x =
                (event.clientX - rect.left) / rect.width - 0.5;
            const y =
                (event.clientY - rect.top) / rect.height - 0.5;
            quote.style.transform =
                `perspective(700px)
                 rotateX(${y * -5}deg)
                 rotateY(${x * 5}deg)
                 scale(1.02)`;
        });
        quote.addEventListener("mouseleave", () => {

            quote.style.transform =
                "perspective(700px) rotateX(0) rotateY(0) scale(1)";

        });

    }

    const emailInput = document.querySelector(
        ".newsletter-form input"
    );
    const subscribeButton = document.querySelector(
        ".newsletter-form button"
    );
    if (emailInput) {
        emailInput.addEventListener("focus", () => {
            emailInput.classList.add("email-active");
        });
        emailInput.addEventListener("blur", () => {
            emailInput.classList.remove("email-active");
        });

    }


    if (subscribeButton) {
        subscribeButton.addEventListener("mouseenter", () => {
            subscribeButton.classList.add("subscribe-active");
        });
        subscribeButton.addEventListener("mouseleave", () => {
            subscribeButton.classList.remove("subscribe-active");
        });
    }

    const progress = document.createElement("div");
    progress.className = "scroll-progress";
    document.body.appendChild(progress);
    window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY;
        const pageHeight =
            document.documentElement.scrollHeight -
            window.innerHeight;
        const percentage =
            (scrollTop / pageHeight) * 100;
        progress.style.width = percentage + "%";
    });
    console.log("🚀 SpaceHub animations initialized successfully.");

});