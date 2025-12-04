import Lenis from "@studio-freight/lenis";

// Lenis 스크롤 초기화 함수
export const initLenis = () => {
    const lenis = new Lenis({
        duration: 1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenis.on("scroll", (e) => {
        console.log(e);
    });
};

// 앵커 링크 스무스 스크롤 함수
export const initLink = () => {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
};
