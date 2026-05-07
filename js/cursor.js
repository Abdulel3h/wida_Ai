if (window.matchMedia("(pointer: fine)").matches) {
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    const cursorDot = document.createElement('div');
    cursorDot.className = 'custom-cursor-dot';
    document.body.appendChild(cursor);
    document.body.appendChild(cursorDot);

    let cursorX = 0, cursorY = 0;
    let dotX = 0, dotY = 0;

    document.addEventListener('mousemove', (e) => {
        cursorX = e.clientX;
        cursorY = e.clientY;
        cursorDot.style.transform = `translate(calc(${cursorX}px - 50%), calc(${cursorY}px - 50%))`;
    });

    function animateCursor() {
        const dx = cursorX - dotX;
        const dy = cursorY - dotY;
        dotX += dx * 0.12;
        dotY += dy * 0.12;
        cursor.style.transform = `translate(calc(${dotX}px - 50%), calc(${dotY}px - 50%))`;
        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    const attachCursorHover = () => {
        const clickables = document.querySelectorAll('button, .project-card-wrap, .cat-header, .etab, .ctab, .notes-btn, .crit-row');
        clickables.forEach(el => {
            if (el.dataset.cursorAttached) return;
            el.dataset.cursorAttached = 'true';
            el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
        });
    };

    attachCursorHover();

    const observer = new MutationObserver((mutations) => {
        attachCursorHover();
    });
    observer.observe(document.body, { childList: true, subtree: true });
}
