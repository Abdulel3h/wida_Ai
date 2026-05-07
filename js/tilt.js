function apply3DTilt(element, targetSelector, intensity, baseTransform = '') {
    const target = targetSelector ? element.querySelector(targetSelector) : element;
    if (!target) return;
    element.style.perspective = '1200px';
    target.style.transformStyle = 'preserve-3d';

    element.addEventListener('mousemove', (e) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -intensity;
        const rotateY = ((x - centerX) / centerX) * intensity;
        target.style.transform = `${baseTransform} rotateX(${rotateX}deg) rotateY(${rotateY}deg)`.trim();
    });

    element.addEventListener('mouseleave', () => {
        target.style.transform = '';
    });
}
