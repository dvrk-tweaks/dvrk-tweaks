document.addEventListener("DOMContentLoaded", () => {

    /* Fade-in animation */

    const sections = document.querySelectorAll(
        ".module-card, .about-section, .discord-section"
    );

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold: 0.1
        }
    );


    sections.forEach((section) => {

        section.style.opacity = "0";

        section.style.transform =
            "translateY(30px)";

        section.style.transition =
            "opacity .7s ease, transform .7s ease";

        observer.observe(section);

    });


    /* Download feedback */

    const downloads = document.querySelectorAll(
        ".module-link"
    );

    downloads.forEach((button) => {

        button.addEventListener("click", () => {

            const originalText =
                button.innerHTML;

            button.innerHTML =
                "STARTING DOWNLOAD... <span>↘</span>";

            setTimeout(() => {

                button.innerHTML =
                    originalText;

            }, 2000);

        });

    });

});