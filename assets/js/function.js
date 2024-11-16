
if ($('.text-anime-style').length) {		
    let	animatedTextElements = document.querySelectorAll('.text-anime-style');
    
     animatedTextElements.forEach((element) => {
        //Reset if needed
        if (element.animation) {
            element.animation.progress(1).kill();
            element.split.revert();
        }

        element.split = new SplitText(element, {
            type: "lines,words,chars",
            linesClass: "split-line",
        });
        gsap.set(element, { perspective: 400 });

        gsap.set(element.split.chars, {
            opacity: 0,
            x: "50",
        });

        element.animation = gsap.to(element.split.chars, {
            scrollTrigger: { trigger: element,	start: "top 90%" },
            x: "0",
            y: "0",
            rotateX: "0",
            opacity: 1,
            duration: 1,
            ease: Back.easeOut,
            stagger: 0.02,
        });
    });		
}
