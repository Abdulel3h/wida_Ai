function showProjectCards() {
    const skeleton = document.getElementById('skeletonSection');
    if (skeleton) skeleton.remove();
    document.querySelector('.projects-section.hide-until-ready')?.classList.remove('hide-until-ready');
}

function attachEval3D() {
    setTimeout(() => {
        document.querySelectorAll('.s-card').forEach(el => {
            if (el.dataset.tiltInit) return;
            el.dataset.tiltInit = 'true';
            apply3DTilt(el, null, 3, 'translateY(-10px) translateZ(20px)');
        });
        document.querySelectorAll('.wi').forEach(el => {
            if (el.dataset.tiltInit) return;
            el.dataset.tiltInit = 'true';
            apply3DTilt(el, null, 3, 'translateY(-5px)');
        });
        document.querySelectorAll('.cat-section, .detail-view').forEach(el => {
            if (el.dataset.tiltInit) return;
            el.dataset.tiltInit = 'true';
            apply3DTilt(el, null, 3, '');
        });
    }, 100);
}

document.querySelectorAll('.project-card-wrap').forEach(wrap => {
    apply3DTilt(wrap, '.project-card', 6);
    wrap.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            wrap.click();
        }
    });
});

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setTimeout(showProjectCards, 300));
} else {
    setTimeout(showProjectCards, 10);
}

const backdropEl = document.getElementById('notesBackdrop');
if (backdropEl) {
    backdropEl.addEventListener('wheel', e => { e.preventDefault(); e.stopPropagation(); }, { passive: false });
    backdropEl.addEventListener('touchmove', e => { e.preventDefault(); e.stopPropagation(); }, { passive: false });
}
