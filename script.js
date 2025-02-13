document.addEventListener("DOMContentLoaded", () => {
    const textSpans = document.querySelectorAll('.text span');
    const linkElements = document.querySelectorAll('.link');

    // Анимация текста
    gsap.from(textSpans, {
        opacity: 0,
        y: 50,
        stagger: 0.3,
        duration: 1,
        ease: "back.out(1.7)"
    });

    // Анимация сердца
    gsap.to('.heart', {
        scale: 1.2,
        repeat: -1,
        yoyo: true,
        duration: 0.6,
        ease: "power1.inOut"
    });

    // Анимация ссылок
    gsap.to(linkElements, {
        opacity: 1,
        y: 20,
        stagger: 0.3,
        duration: 1,
        ease: "back.out(1.7)",
        delay: textSpans.length * 0.3 + 1 // Задержка перед началом анимации ссылок
    });
});
