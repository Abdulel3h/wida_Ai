function openProject1(e) {
    e.stopPropagation();
    addRipple(e, document.getElementById('card1'));
    const overlay = document.getElementById('expandedOverlay');
    const content = document.getElementById('expandedContent');
    content.innerHTML = `
            <div class="eval-embedded" id="evalRoot">
              <div id="evalContainer"></div>
            </div>
          `;
    overlay.classList.add('active');
    document.body.classList.add('no-scroll');
    document.getElementById('backBtn').classList.add('visible');
    overlay.scrollTop = 0;
    setTimeout(() => {
        initEvaluation();
        overlay.scrollTo({ top: 0, behavior: 'smooth' });
    }, 200);
}

function openProject2(e) {
    e.stopPropagation();
    addRipple(e, document.getElementById('card2'));
    const overlay = document.getElementById('expandedOverlay');
    const content = document.getElementById('expandedContent');
    content.innerHTML = `
            <div class="detail-view">
              <div class="detail-icon">🔧</div>
              <h2>مشروع العروض التقديمية</h2>
              <p class="mb-16">نواجه حالياً بعض التحديات التقنية في هذا المشروع، وجاري العمل على إيجاد الحلول المناسبة.</p>
              <ul class="challenge-list">
                <li>تحليل مسببات المشكلات التقنية</li>
                <li>البحث عن أفضل الممارسات والحلول</li>
                <li>اختبار الحلول المقترحة</li>
                <li>تطبيق الإصلاحات النهائية</li>
              </ul>
              <p class="mt-16-fs-13-muted">سنوافيكم بأي مستجدات في أقرب وقت ممكن 🕐</p>
            </div>
          `;
    overlay.classList.add('active');
    document.body.classList.add('no-scroll');
    document.getElementById('backBtn').classList.add('visible');
    overlay.scrollTo({ top: 0, behavior: 'smooth' });
    attachEval3D();
}

function goBack() {
    const overlay = document.getElementById('expandedOverlay');
    overlay.classList.remove('active');
    document.body.classList.remove('no-scroll');
    document.getElementById('backBtn').classList.remove('visible');
    document.getElementById('expandedContent').innerHTML = '';
    if (window._evalCharts) {
        window._evalCharts.forEach(c => { try { c.destroy(); } catch (e) { } });
        window._evalCharts = [];
    }
    if (window._closeEvalModal) window._closeEvalModal();
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const modal = document.getElementById('globalEvalModal');
        if (modal && modal.classList.contains('open')) {
            window._closeEvalModal();
            return;
        }
        if (document.getElementById('expandedOverlay').classList.contains('active')) {
            goBack();
        }
    }
});
