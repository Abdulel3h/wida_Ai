function initEvaluation() {
    const evalData = {
        categories: [{
            id: 'c1',
            name: 'أولاً: معايير الهيكلة والشمول',
            icon: '🏗️',
            iconClass: 'c1',
            items: [
                {
                    text: 'اكتمال الأقسام الرئيسية التي يبدأ بها العرض الفني من النبذة التعريفية وما بعدها.',
                    max: 10, scores: { miqidad: [9, 9, 7], mahmoud: [5, 4, 5] }, notes: {
                        miqidad: '',
                        mahmoud: ''
                    }
                },
                {
                    text: 'تطابق فهرس المحتويات مع العناوين الداخلية والترقيم والوصف الموجز لكل قسم.',
                    max: 10, scores: { miqidad: [8, 7, 6], mahmoud: [5, 5, 5] }, notes: {
                        miqidad: '',
                        mahmoud: ''
                    }
                },
                {
                    text: 'وجود "ميثاق المشروع" كوثيقة مرجعية تحدد أهداف المشروع ونطاقه وأصحاب المصلحة بوضوح.',
                    max: 10, scores: { miqidad: [8, 8, 7], mahmoud: [4, 4, 5] }, notes: {
                        miqidad: '',
                        mahmoud: ''
                    }
                },
                {
                    text: 'تضمين "جدول تنفيذ المخرجات" الذي يوضح الأنشطة والمخرجات المتوقعة.', max: 10,
                    scores: { miqidad: [9, 9, 8], mahmoud: [5, 5, 5] }, notes: { miqidad: '', mahmoud: '' }
                },
                {
                    text: 'توظيف أرقام وإنجازات Wida لدعم المصداقية وبناء الثقة في العرض.', max: 10,
                    scores: { miqidad: [9, 9, 7], mahmoud: [5, 5, 7] }, notes: { miqidad: '', mahmoud: '' }
                }
            ]
        }, {
            id: 'c2',
            name: 'ثانياً: معايير الترابط الفني',
            icon: '🔗',
            iconClass: 'c2',
            items: [
                {
                    text: 'الربط المباشر بين "فهم المشروع" و"المنهجية" لضمان عدم وجود انفصال بين التحدي والحل.',
                    max: 10, scores: { miqidad: [8, 8, 6], mahmoud: [6, 5, 6] },
                    notes: {
                        miqidad: 'نموذج 3: الربط بين التحدي والحل عام ولا يظهر بوضوح في بنية النص',
                        mahmoud: ''
                    }
                },
                {
                    text: 'انسجام "القيم المضافة" مع طبيعة المشروع.', max: 10, scores: {
                        miqidad: [6, 8, 9],
                        mahmoud: [6, 5, 6]
                    },
                    notes: {
                        miqidad: 'نموذج 1: عبارة "نوظّف الذكاء الاصطناعي في عمليات الإنتاج الإعلامي" قد تثير مخاوف العميل، لا داع لذكر ذلك صراحة.',
                        mahmoud: ''
                    }
                },
                {
                    text: 'قدرة المنهجية على تقسيم المشروع إلى دورات عمل Sprint محددة الأهداف والمدة والمخرجات.',
                    max: 10, scores: { miqidad: [9, 9, 7], mahmoud: [8, 5, 8] }, notes: {
                        miqidad: '',
                        mahmoud: ''
                    }
                },
                {
                    text: 'ربط الأهداف الاستراتيجية بمؤشرات قابلة للقياس وطريقة قياسها.', max: 10,
                    scores: { miqidad: [9, 8, 7], mahmoud: [9, 8, 6] },
                    notes: { miqidad: 'نموذج 3: طريقة القياس غير محددة للمؤشرات', mahmoud: '' }
                }
            ]
        }, {
            id: 'c3',
            name: 'ثالثاً: معايير اللغة والأسلوب التحريري',
            icon: '✍️',
            iconClass: 'c3',
            items: [
                {
                    text: 'استخدام "اللغة المؤسسية" التي تدمج بين الاحترافية الفنية والروح الإبداعية، مع تجنب الحشو الزائد.',
                    max: 10, scores: { miqidad: [8, 9, 7], mahmoud: [7, 5, 8] }, notes: {
                        miqidad: 'نموذج 1 فيه بعض الإسهاب', mahmoud: ''
                    }
                },
                {
                    text: 'تخصيص الرسائل الإعلامية والترويجية لتعكس خصوصية الجهة الحكومية بدلاً من الكلام العام.',
                    max: 10, scores: { miqidad: [8, 8, 6], mahmoud: [6, 7, 8] }, notes: {
                        miqidad: '',
                        mahmoud: ''
                    }
                },
                {
                    text: 'الدقة اللغوية والنحوية التامة، مع الالتزام بالمصطلحات الفنية المعتمدة في قطاع الإعلام والاتصال الحكومي.',
                    max: 10, scores: { miqidad: [9, 9, 6], mahmoud: [7, 8, 8] }, notes: {
                        miqidad: '',
                        mahmoud: ''
                    }
                },
                {
                    text: 'وضوح "اتفاقية مستوى الخدمة SLA" بحيث تحدد معايير الجودة وأوقات التسليم بشكل مباشر ومفهوم.',
                    max: 10, scores: { miqidad: [7, 9, 6], mahmoud: [0, 8, 9] }, notes: {
                        miqidad: '',
                        mahmoud: ''
                    }
                }
            ]
        }, {
            id: 'c4',
            name: 'رابعاً: معايير التنسيق',
            icon: '📊',
            iconClass: 'c4',
            items: [
                {
                    text: 'استخدام الجداول المنظمة لعرض البيانات.', max: 10, scores: {
                        miqidad: [10, 9, 8],
                        mahmoud: [10, 9, 10]
                    }, notes: { miqidad: '', mahmoud: '' }
                },
                {
                    text: 'وضوح "الهيكل التنظيمي" لفريق العمل.', max: 10, scores: {
                        miqidad: [9, 9, 7],
                        mahmoud: [9, 10, 10]
                    }, notes: { miqidad: '', mahmoud: '' }
                },
                {
                    text: 'توفير "سير ذاتية" مختصرة ومركزة لأعضاء الفريق تبرز خبراتهم في مشاريع حكومية مشابهة.',
                    max: 10, scores: { miqidad: [8, 9, 6], mahmoud: [8, 8, 8] },
                    notes: { miqidad: 'السير مختصرة وقد لا تغطي المطلوبات', mahmoud: '' }
                },
                {
                    text: 'إبراز "سابقة الأعمال" و"شركاء النجاح" ممثلين في الجهات الحكومية.', max: 10,
                    scores: { miqidad: [9, 10, 9], mahmoud: [9, 9, 9] }, notes: { miqidad: '', mahmoud: '' }
                }
            ]
        }]
    };

    const M1 = '#9168ea',
        M2 = '#dc8dd9',
        M3 = '#e6c8fe',
        GOLD = '#6e4fdc';
    const M1a = 'rgba(145, 104, 234, 0.12)',
        M2a = 'rgba(220, 141, 217, 0.12)',
        M3a = 'rgba(230, 200, 254, 0.12)';
    const catColors = ['#9168ea', '#dc8dd9', '#e6c8fe', '#6e4fdc'];
    const catShort = ['هيكلة', 'ترابط', 'لغة', 'تنسيق'];
    const modelColors = [M1, M2, M3];
    const modelNames = ['نموذج 1', 'نموذج 2', 'نموذج 3'];
    let currentEval = 'all';
    window._evalCharts = [];

    function getScores(item, ev) {
        if (ev === 'all') {
            const m = item.scores.miqidad;
            const ma = item.scores.mahmoud;
            return [Math.round((m[0] + ma[0]) / 2 * 10) / 10, Math.round((m[1] + ma[1]) / 2 * 10) / 10, Math
                .round((m[2] + ma[2]) / 2 * 10) / 10
            ];
        }
        return item.scores[ev];
    }

    function getCatTotals(ci, ev) {
        const cat = evalData.categories[ci];
        const t = [0, 0, 0];
        cat.items.forEach(item => {
            const s = getScores(item, ev);
            s.forEach((v, i) => t[i] += v);
        });
        return t.map(v => Math.round(v * 10) / 10);
    }

    function getAllTotals(ev) {
        const t = [0, 0, 0];
        evalData.categories.forEach((_, ci) => {
            const ct = getCatTotals(ci, ev);
            ct.forEach((v, i) => t[i] += v);
        });
        return t.map(v => Math.round(v * 10) / 10);
    }

    function getMaxTotal() {
        let mx = 0;
        evalData.categories.forEach(c => c.items.forEach(i => mx += i.max)); return mx;
    }

    function getBestModels(scores) {
        const best = Math.max(...scores); return scores.map((s, i) => s === best ? i :
            -1).filter(i => i >= 0);
    }

    function mClass(i) { return ['m1', 'm2', 'm3'][i]; }

    function mName(i) { return modelNames[i]; }

    const evalRoot = document.getElementById('evalRoot');
    if (!evalRoot) return;

    if (!document.getElementById('evalStyles')) {
        const styleEl = document.createElement('style');
        styleEl.id = 'evalStyles';
        styleEl.textContent = `
          .eval-wrap { font-family:'Inter','Cairo',sans-serif; color:#ffffff; background:transparent; padding:20px 16px 80px; max-width:1400px; margin:0 auto; direction:rtl; perspective:1500px; }
          .eval-wrap > * { animation: fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; }
          .eval-header { animation-delay: 0.1s; }
          .eval-tabs { animation-delay: 0.2s; }
          .legend-row { animation-delay: 0.3s; }
          .summary-row { animation-delay: 0.4s; }
          #evalCatsContainer { animation-delay: 0.5s; }
          .winner-section { animation-delay: 0.6s; }
          .chart-section { animation-delay: 0.7s; }
          .eval-header { text-align:center; margin-bottom:40px; padding:40px 16px 20px; transform-style:preserve-3d; }
          .eval-badge { display:inline-block; font-size:12px; font-weight:700; letter-spacing:3px; color:var(--wida-accent-light); border:1px solid rgba(230, 200, 254, 0.3); padding:8px 20px; border-radius:30px; background:rgba(230, 200, 254, 0.1); margin-bottom:16px; -webkit-backdrop-filter:blur(10px); backdrop-filter:blur(10px); }
          .eval-title { font-family:'Cairo',sans-serif; font-size:clamp(28px,5vw,48px); font-weight:900; background:linear-gradient(135deg,#fff 0%,${M1} 50%,${M2} 100%); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; margin-bottom:12px; filter:drop-shadow(0 10px 20px rgba(145, 104, 234, 0.3)); }
          .eval-subtitle { color:rgba(255,255,255,0.6); font-size:18px; }
          .eval-tabs { display:flex; gap:12px; justify-content:center; flex-wrap:wrap; margin-bottom:40px; }
          .etab { padding:12px 28px; border-radius:40px; border:1px solid rgba(255,255,255,0.1); background:rgba(30,25,35,0.4); color:rgba(255,255,255,0.7); cursor:pointer; font-family:'Inter','Cairo',sans-serif; font-size:15px; font-weight:600; transition:all 0.4s cubic-bezier(0.16,1,0.3,1); -webkit-backdrop-filter:blur(10px); backdrop-filter:blur(10px); }
          .etab.active { color:#fff; border-color:rgba(145,104,234,0.5); background:linear-gradient(135deg,rgba(145,104,234,0.8),rgba(110,79,220,0.8)); box-shadow:0 10px 30px rgba(145,104,234,0.4); transform:translateY(-2px); }
          .etab:hover:not(.active){color:#fff;border-color:rgba(145,104,234,0.3);background:rgba(145,104,234,0.1);}
          .legend-row { display:flex; gap:24px; justify-content:center; margin-bottom:32px; flex-wrap:wrap; }
          .leg-item { display:flex; align-items:center; gap:8px; font-size:14px; color:rgba(255,255,255,0.8); font-weight:500; }
          .leg-dot { width:12px;height:12px;border-radius:50%; box-shadow:0 0 10px currentColor; }
          .summary-row { display:grid; grid-template-columns:repeat(3,1fr); gap:20px; margin-bottom:40px; }
          .s-card { background:rgba(30,25,35,0.4); border:1px solid rgba(255,255,255,0.05); border-radius:24px; padding:32px 24px; text-align:center; transition:all 0.6s cubic-bezier(0.16,1,0.3,1); -webkit-backdrop-filter:blur(20px); backdrop-filter:blur(20px); transform-style:preserve-3d; box-shadow:0 10px 30px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.1); }
          .s-card:hover { transform:translateY(-10px) translateZ(20px); box-shadow:0 20px 40px rgba(0,0,0,0.6), 0 0 30px rgba(145,104,234,0.2), inset 0 1px 1px rgba(255,255,255,0.2); border-color:rgba(145,104,234,0.3); }
          .s-card.winner { border-color:rgba(110,79,220,0.5); background:linear-gradient(135deg,rgba(30,25,35,0.6) 0%,rgba(110,79,220,0.15) 100%); box-shadow:0 10px 30px rgba(110,79,220,0.2), inset 0 1px 1px rgba(255,255,255,0.1); }
          .s-card.m1 { border-top:3px solid ${M1}; } .s-card.m2 { border-top:3px solid ${M2}; } .s-card.m3 { border-top:3px solid ${M3}; } .s-card.winner { border-top:3px solid ${GOLD}; }
          .s-label { font-size:12px; letter-spacing:3px; color:rgba(255,255,255,0.6); margin-bottom:8px; text-transform:uppercase; }
          .s-score { font-family:'Inter',sans-serif; font-size:48px; font-weight:800; text-shadow:0 5px 15px rgba(0,0,0,0.3); }
          .s-score.gold{color:${GOLD};text-shadow:0 0 20px rgba(110,79,220,0.4);} .s-score.m1{color:${M1};} .s-score.m2{color:${M2};} .s-score.m3{color:${M3};}
          .s-max { font-size:14px; color:rgba(255,255,255,0.4); margin-top:4px; }
          .w-badge { display:inline-block; margin-top:12px; padding:6px 16px; background:rgba(110,79,220,0.2); border:1px solid rgba(110,79,220,0.4); border-radius:20px; font-size:11px; font-weight:700; color:#fff; box-shadow:0 0 15px rgba(110,79,220,0.3); }
          .cat-section { margin-bottom:24px; border-radius:24px; overflow:hidden; border:1px solid rgba(255,255,255,0.05); background:rgba(30,25,35,0.4); -webkit-backdrop-filter:blur(20px); backdrop-filter:blur(20px); transition:all 0.4s; }
          .cat-section:hover { border-color:rgba(145,104,234,0.2); box-shadow:0 10px 30px rgba(0,0,0,0.3); }
          .cat-header { padding:20px 24px; display:flex; align-items:center; gap:16px; cursor:pointer; user-select:none; transition:background 0.3s; }
          .cat-header:hover { background:rgba(255,255,255,0.05); }
          .cat-icon { width:44px;height:44px;border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0; box-shadow:inset 0 0 10px rgba(255,255,255,0.1); }
          .cat-icon.c1{background:rgba(145,104,234,0.15);color:#9168ea;} .cat-icon.c2{background:rgba(220,141,217,0.15);color:#dc8dd9;} .cat-icon.c3{background:rgba(230,200,254,0.15);color:#e6c8fe;} .cat-icon.c4{background:rgba(110,79,220,0.15);color:#6e4fdc;}
          .cat-title { font-size:18px; font-weight:700; color:#fff; flex:1; }
          .cat-avgs { display:flex; gap:8px; }
          .avg-chip { padding:4px 12px; border-radius:20px; font-size:12px; font-weight:700; border:1px solid rgba(255,255,255,0.05); }
          .avg-chip.m1{background:rgba(145,104,234,0.1);color:${M1};} .avg-chip.m2{background:rgba(220,141,217,0.1);color:${M2};} .avg-chip.m3{background:rgba(230,200,254,0.1);color:${M3};}
          .chev { color:rgba(255,255,255,0.5); font-size:20px; transition:transform 0.4s cubic-bezier(0.16,1,0.3,1); }
          .chev.open { transform:rotate(180deg); }
          .crit-body { display:none; }
          .crit-body.open { display:block; animation:fadeInDown 0.4s ease-out; }
          @keyframes fadeInDown { from{opacity:0;transform:translateY(-10px);} to{opacity:1;transform:translateY(0);} }
          .crit-row { padding:20px 24px; border-top:1px solid rgba(255,255,255,0.05); display:grid; grid-template-columns:1fr auto; gap:20px; align-items:center; transition:background 0.3s; cursor:pointer; }
          .crit-row:hover { background:rgba(255,255,255,0.03); }
          .crit-text { font-size:15px; color:rgba(255,255,255,0.9); line-height:1.7; font-weight:500; }
          .best-tag { font-size:10px; padding:4px 10px; border-radius:12px; font-weight:700; display:inline-block; margin-top:8px; border:1px solid rgba(255,255,255,0.1); }
          .best-tag.m1{background:rgba(145,104,234,0.15);color:${M1};} .best-tag.m2{background:rgba(220,141,217,0.15);color:${M2};} .best-tag.m3{background:rgba(230,200,254,0.15);color:${M3};} .best-tag.tie{background:rgba(110,79,220,0.15);color:${GOLD};}
          .scores-block { display:flex; gap:8px; align-items:center; flex-shrink:0; flex-wrap:wrap; }
          .score-pill { display:flex; flex-direction:column; align-items:center; gap:4px; min-width:48px; }
          .score-circle { width:44px; height:44px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:14px; font-weight:800; position:relative; font-family:'Inter',sans-serif; transition:all 0.3s; flex-shrink:0; }
          .score-circle.m1{background:${M1a};color:${M1};border:2px solid rgba(145,104,234,0.3);} .score-circle.m2{background:${M2a};color:${M2};border:2px solid rgba(220,141,217,0.3);} .score-circle.m3{background:${M3a};color:${M3};border:2px solid rgba(230,200,254,0.3);}
          .score-circle.best{box-shadow:0 0 15px;transform:scale(1.1);} .score-circle.m1.best{box-shadow:0 0 20px rgba(145,104,234,0.4);border-color:${M1};} .score-circle.m2.best{box-shadow:0 0 20px rgba(220,141,217,0.4);border-color:${M2};} .score-circle.m3.best{box-shadow:0 0 20px rgba(230,200,254,0.4);border-color:${M3};}
          .best-crown { position:absolute; top:-10px; right:-6px; font-size:12px; filter:drop-shadow(0 2px 4px rgba(0,0,0,0.5)); }
          .notes-btn { background:rgba(110,79,220,0.1); border:1px solid rgba(110,79,220,0.3); color:#fff; border-radius:8px; padding:6px 14px; font-size:12px; cursor:pointer; font-family:'Inter','Cairo',sans-serif; transition:all 0.3s; white-space:nowrap; margin-right:10px; font-weight:600; }
          .notes-btn:hover { background:rgba(110,79,220,0.3); box-shadow:0 0 15px rgba(110,79,220,0.4); }
          .winner-section { background:linear-gradient(135deg,rgba(30,25,35,0.4) 0%,rgba(145,104,234,0.05) 100%); border:1px solid rgba(145,104,234,0.15); border-radius:24px; padding:40px; margin-top:40px; -webkit-backdrop-filter:blur(20px); backdrop-filter:blur(20px); }
          .winner-section h2 { font-family:'Cairo',sans-serif; font-size:24px; font-weight:800; color:${M3}; margin-bottom:24px; text-align:center; }
          .cwr { display:flex; align-items:center; justify-content:space-between; padding:14px 20px; border-radius:16px; background:rgba(0,0,0,0.2); border:1px solid rgba(255,255,255,0.05); margin-bottom:12px; transition:all 0.3s; }
          .cwr:hover { background:rgba(145,104,234,0.05); border-color:rgba(145,104,234,0.2); transform:translateY(-2px); }
          .cwr-name { font-size:15px; color:#fff; font-weight:600; }
          .cwr-chip { padding:6px 16px; border-radius:20px; font-size:13px; font-weight:700; border:1px solid rgba(255,255,255,0.1); }
          .cwr-chip.m1{background:rgba(145,104,234,0.15);color:${M1};} .cwr-chip.m2{background:rgba(220,141,217,0.15);color:${M2};} .cwr-chip.m3{background:rgba(230,200,254,0.15);color:${M3};} .cwr-chip.gold{background:rgba(110,79,220,0.2);color:#fff;border-color:rgba(110,79,220,0.5);box-shadow:0 0 10px rgba(110,79,220,0.3);}
          .winner-grid { display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); gap:16px; }
          .wi { background:rgba(0,0,0,0.2); border:1px solid rgba(255,255,255,0.05); border-radius:20px; padding:24px; text-align:center; transition:all 0.3s; }
          .wi:hover { transform:translateY(-5px); box-shadow:0 10px 20px rgba(0,0,0,0.3); }
          .wi.highlight { border-color:rgba(145,104,234,0.4); background:linear-gradient(135deg,rgba(145,104,234,0.1),transparent); box-shadow:0 10px 30px rgba(145,104,234,0.2); }
          .wi-cat { font-size:12px; color:rgba(255,255,255,0.6); letter-spacing:2px; margin-bottom:8px; font-weight:700; }
          .wi-model { font-size:24px; font-weight:800; font-family:'Cairo',sans-serif; margin-bottom:4px; }
          .wi-score { font-size:13px; color:rgba(255,255,255,0.5); }
          .chart-section { margin-top:60px; }
          .chart-tabs { display:flex; gap:12px; justify-content:center; margin-bottom:32px; flex-wrap:wrap; }
          .ctab { padding:10px 24px; border-radius:30px; border:1px solid rgba(255,255,255,0.1); background:rgba(30,25,35,0.4); color:rgba(255,255,255,0.6); cursor:pointer; font-family:'Inter','Cairo',sans-serif; font-size:14px; font-weight:600; transition:all 0.3s; -webkit-backdrop-filter:blur(5px); backdrop-filter:blur(5px); }
          .ctab.active { color:#fff; border-color:rgba(145,104,234,0.5); background:linear-gradient(135deg,rgba(145,104,234,0.8),rgba(110,79,220,0.8)); box-shadow:0 5px 15px rgba(145,104,234,0.3); }
          .ctab:hover:not(.active){color:#fff;border-color:rgba(145,104,234,0.3);background:rgba(145,104,234,0.1);}
          .chart-card { background:rgba(30,25,35,0.4); border:1px solid rgba(255,255,255,0.05); border-radius:24px; padding:32px; margin-bottom:24px; -webkit-backdrop-filter:blur(20px); backdrop-filter:blur(20px); box-shadow:0 20px 40px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,0.1); }
          .chart-legend { display:flex; gap:24px; justify-content:center; flex-wrap:wrap; margin-bottom:24px; }
          @media(max-width:768px){ .summary-row{grid-template-columns:1fr;} .crit-row{grid-template-columns:1fr; gap:16px;} .scores-block{flex-direction:row; flex-wrap:wrap; gap:8px; justify-content:flex-start;} .cat-avgs{display:none;} .eval-wrap{padding:20px 12px 60px;} .s-card{padding:24px 16px;} .cat-header{padding:16px;} .crit-row{padding:16px;} }
        `;
        document.head.appendChild(styleEl);
    }

    const maxTotal = getMaxTotal();
    const totals = getAllTotals(currentEval);
    const bestOverall = getBestModels(totals);

    let summaryHTML = totals.map((t, i) => {
        const isWinner = bestOverall.includes(i);
        const isSole = bestOverall.length === 1 && bestOverall[0] === i;
        return `<div class="s-card ${mClass(i)}${isWinner ? ' winner' : ''}">
            <div class="s-label">${modelNames[i]}</div>
            <div class="s-score ${isSole ? 'gold' : mClass(i)}">${t}</div>
            <div class="s-max">من ${maxTotal}</div>
            ${isSole ? '<div class="w-badge">🏆 الأفضل إجمالاً</div>' : ''}
            ${bestOverall.length > 1 && isWinner ? '<div class="w-badge">🤝 تعادل</div>' : ''}
          </div>`;
    }).join('');

    let catsHTML = evalData.categories.map((cat, ci) => {
        const catTotals = getCatTotals(ci, currentEval);
        const catBest = getBestModels(catTotals);
        const catMax = cat.items.reduce((a, it) => a + it.max, 0);
        const itemsHTML = cat.items.map((item, ii) => {
            const scores = getScores(item, currentEval);
            const bestIdx = getBestModels(scores);
            const hasNotes = (item.notes.miqidad && item.notes.miqidad.trim()) || (item.notes
                .mahmoud && item.notes.mahmoud.trim());
            const circles = scores.map((s, i) => {
                const isB = bestIdx.includes(i);
                return `<div class="score-pill"><div class="score-circle ${mClass(i)}${isB ? ' best' : ''}">${isB ? '<span class="best-crown">👑</span>' : ''}${s}</div></div>`;
            }).join('');
            let bestTag = '';
            if (bestIdx.length === 1) bestTag =
                `<span class="best-tag ${mClass(bestIdx[0])}">الأعلى: ${mName(bestIdx[0])}</span>`;
            else bestTag =
                `<span class="best-tag tie">تعادل: ${bestIdx.map(i => mName(i)).join(' و ')}</span>`;
            return `<div class="crit-row"><div><div class="crit-text">${item.text}</div>${bestTag}</div><div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;justify-content:flex-end">${hasNotes ? `<button class="notes-btn" onclick="event.stopPropagation();window._openEvalNote(${ci},${ii},event)">📝 ملاحظات</button>` : ''}<div class="scores-block">${circles}</div></div></div>`;
        }).join('');
        const avgChips = catTotals.map((t, i) =>
            `<span class="avg-chip ${mClass(i)}">${t}/${catMax}</span>`).join('');
        return `<div class="cat-section"><div class="cat-header" onclick="window._toggleEvalCat('cat${ci}')"><div class="cat-icon ${cat.iconClass}">${cat.icon}</div><div class="cat-title">${cat.name}</div><div class="cat-avgs">${avgChips}</div><div class="chev" id="chev${ci}">▾</div></div><div class="crit-body open" id="cat${ci}">${itemsHTML}</div></div>`;
    }).join('');

    let catWinnersHTML = evalData.categories.map((cat, ci) => {
        const t = getCatTotals(ci, currentEval);
        const b = getBestModels(t);
        let chipHTML = b.length === 1 ?
            `<span class="cwr-chip ${mClass(b[0])}">${mName(b[0])} · ${t[b[0]]}</span>` :
            b.map(i => `<span class="cwr-chip gold">${mName(i)} · ${t[i]}</span>`).join('');
        return `<div class="cwr"><div class="cwr-name">${cat.icon} ${cat.name}</div><div>${chipHTML}</div></div>`;
    }).join('');

    let overallWinnerHTML = totals.map((t, i) => {
        const pct = Math.round(t / maxTotal * 100);
        const isB = bestOverall.includes(i);
        return `<div class="wi ${isB ? 'highlight' : ''}"><div class="wi-cat">${bestOverall.length > 1 && isB ? '🤝 تعادل' : bestOverall[0] === i ? '🥇 الأفضل' : i === 1 ? '🥈 ثانٍ' : '🥉 ثالث'}</div><div class="wi-model ${mClass(i)}">${mName(i)}</div><div class="wi-score">${t} / ${maxTotal} (${pct}%)</div></div>`;
    }).join('');

    evalRoot.innerHTML = `
          <div class="eval-wrap">
            <div class="eval-header">
              <div class="eval-badge">📊 كتاب التقييم</div>
              <div class="eval-title">تقييم النماذج الثلاثة</div>
              <div class="eval-subtitle">مقارنة شاملة وتفصيلية لأداء كل نموذج عبر محاور التقييم</div>
            </div>
            <div class="eval-tabs">
              <button class="etab active" onclick="window._setEval('all',this)">جميع المقيّمين</button>
              <button class="etab" onclick="window._setEval('miqidad',this)">مقداد</button>
              <button class="etab" onclick="window._setEval('mahmoud',this)">محمود</button>
            </div>
            <div class="legend-row">
              <span class="leg-item"><span class="leg-dot" style="background:${M1}"></span> نموذج 1</span>
              <span class="leg-item"><span class="leg-dot" style="background:${M2}"></span> نموذج 2</span>
              <span class="leg-item"><span class="leg-dot" style="background:${M3}"></span> نموذج 3</span>
            </div>
            <div class="summary-row" id="evalSummaryRow">${summaryHTML}</div>
            <div id="evalCatsContainer">${catsHTML}</div>
            <div class="winner-section">
              <h2>🏆 الفائز في كل محور</h2>
              <div id="evalCatWinners">${catWinnersHTML}</div>
              <br>
              <h2 style="font-size:18px;margin-bottom:14px">🥇 الأفضل الإجمالي</h2>
              <div class="winner-grid" id="evalOverallWinner">${overallWinnerHTML}</div>
            </div>
            <div class="chart-section">
              <div style="text-align:center;margin-bottom:20px">
                <div class="eval-badge">📈 التحليل البياني</div>
                <h3 style="font-family:'Cairo',sans-serif;font-size:20px;font-weight:900;background:linear-gradient(135deg,#fff 0%,${M1} 50%,${M2} 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;margin-top:8px">المخططات البيانية</h3>
              </div>
              <div class="chart-tabs">
                <button class="ctab active" onclick="window._setChart('radar',this)">مخطط الرادار</button>
                <button class="ctab" onclick="window._setChart('bar',this)">مقارنة المحاور</button>
                <button class="ctab" onclick="window._setChart('line',this)">بند بند</button>
                <button class="ctab" onclick="window._setChart('doughnut',this)">التوزيع الكلي</button>
              </div>
              <div class="chart-card" id="chart-radar"><div class="chart-legend"></div><div style="position:relative;width:100%;height:380px"><canvas id="radarCanvas"></canvas></div></div>
              <div class="chart-card" id="chart-bar" style="display:none"><div class="chart-legend"></div><div style="position:relative;width:100%;height:340px"><canvas id="barCanvas"></canvas></div></div>
              <div class="chart-card" id="chart-line" style="display:none"><div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap;margin-bottom:12px"><button class="ctab active" onclick="window._setLineEval('all',this)">الكل</button><button class="ctab" onclick="window._setLineEval('miqidad',this)">مقداد</button><button class="ctab" onclick="window._setLineEval('mahmoud',this)">محمود</button></div><div style="position:relative;width:100%;height:400px"><canvas id="lineCanvas"></canvas></div></div>
              <div class="chart-card" id="chart-doughnut" style="display:none"><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:16px"><div><p style="text-align:center;font-size:12px;color:#64748b;margin-bottom:6px;font-weight:700">نموذج 1</p><div style="position:relative;width:100%;height:200px"><canvas id="doughnut1"></canvas></div></div><div><p style="text-align:center;font-size:12px;color:#64748b;margin-bottom:6px;font-weight:700">نموذج 2</p><div style="position:relative;width:100%;height:200px"><canvas id="doughnut2"></canvas></div></div><div><p style="text-align:center;font-size:12px;color:#64748b;margin-bottom:6px;font-weight:700">نموذج 3</p><div style="position:relative;width:100%;height:200px"><canvas id="doughnut3"></canvas></div></div></div></div>
            </div>
          </div>
        `;

    attachEval3D();

    window._setEval = function (ev, btn) {
        currentEval = ev;
        document.querySelectorAll('.etab').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        refreshEvalView();
        const activeChart = ['radar', 'bar', 'line', 'doughnut'].find(t => document.getElementById(
            'chart-' + t)?.style.display !== 'none');
        if (activeChart && activeChart !== 'line') buildChart(activeChart);
    };
    window._toggleEvalCat = function (id) {
        const el = document.getElementById(id);
        const ci = id.replace('cat', '');
        const chev = document.getElementById('chev' + ci);
        el.classList.toggle('open');
        if (chev) chev.classList.toggle('open');
    };
    window._openEvalNote = function (ci, ii, event) {
        if (event) {
            event.stopPropagation();
            event.preventDefault();
        }

        const item = evalData.categories[ci].items[ii];

        document.getElementById('globalModalCriteria').textContent = item.text;
        let html = '';
        [{ key: 'miqidad', label: 'مقداد' }, { key: 'mahmoud', label: 'محمود' }].forEach(ev => {
            const note = item.notes[ev.key];
            if (note && note.trim()) html +=
                `<div class="notes-popup-item">
                            <div class="notes-popup-evaluator">المقيّم: ${ev.label}</div>
                            <div class="notes-popup-text">${note}</div>
                        </div>`;
        });
        document.getElementById('globalModalNotes').innerHTML = html ||
            '<p style="color:rgba(255,255,255,0.4);font-size:13px;text-align:center;padding:8px 0">لا توجد ملاحظات إضافية.</p>';

        const popup   = document.getElementById('globalEvalModal');
        const backdrop = document.getElementById('notesBackdrop');
        const overlay = document.getElementById('expandedOverlay');
        const POPUP_W  = 360;
        const GAP      = 12;

        popup.classList.remove('open', 'arrow-bottom');
        backdrop.classList.add('open');
        if (overlay) overlay.classList.add('no-scroll-overlay');

        const trigger = event && event.currentTarget ? event.currentTarget : (event && event.target ? event.target : null);

        if (trigger) {
            const r = trigger.getBoundingClientRect();
            const vw = window.innerWidth;
            const vh = window.innerHeight;
            const POPUP_H = popup.offsetHeight || 340;
            const POPUP_W_ACTUAL = popup.offsetWidth || POPUP_W;
            let left = r.right - POPUP_W_ACTUAL;
            left = Math.max(16, Math.min(left, vw - POPUP_W_ACTUAL - 16));
            const spaceBelow = vh - r.bottom - GAP;
            const spaceAbove = r.top - GAP;
            let top;
            if (spaceBelow >= POPUP_H || spaceBelow > spaceAbove) {
                top = r.bottom + GAP;
                popup.classList.remove('arrow-bottom');
                popup.style.transformOrigin = 'top right';
            } else {
                top = r.top - GAP - POPUP_H;
                popup.classList.add('arrow-bottom');
                popup.style.transformOrigin = 'bottom right';
            }
            top = Math.max(16, Math.min(top, vh - POPUP_H - 16));
            popup.style.left = left + 'px';
            popup.style.top  = top + 'px';
            popup.style.right = 'auto';
            let arrowRight = (left + POPUP_W_ACTUAL) - r.right + (r.width / 2) - 5;
            arrowRight = Math.max(16, Math.min(arrowRight, POPUP_W_ACTUAL - 26));
            popup.style.setProperty('--arrow-right', arrowRight + 'px');
        }

        requestAnimationFrame(() => popup.classList.add('open'));
    };

    window._closeEvalModal = function () {
        const popup    = document.getElementById('globalEvalModal');
        const backdrop = document.getElementById('notesBackdrop');
        const overlay = document.getElementById('expandedOverlay');
        if (popup)    popup.classList.remove('open');
        if (backdrop) backdrop.classList.remove('open');
        if (overlay)  overlay.classList.remove('no-scroll-overlay');
    };

    function refreshEvalView() {
        const maxT = getMaxTotal();
        const tots = getAllTotals(currentEval);
        const bestO = getBestModels(tots);
        document.getElementById('evalSummaryRow').innerHTML = tots.map((t, i) => {
            const isW = bestO.includes(i);
            const isS = bestO.length === 1 && bestO[0] === i;
            return `<div class="s-card ${mClass(i)}${isW ? ' winner' : ''}"><div class="s-label">${modelNames[i]}</div><div class="s-score ${isS ? 'gold' : mClass(i)}">${t}</div><div class="s-max">من ${maxT}</div>${isS ? '<div class="w-badge">🏆 الأفضل إجمالاً</div>' : ''}${bestO.length > 1 && isW ? '<div class="w-badge">🤝 تعادل</div>' : ''}</div>`;
        }).join('');
        document.getElementById('evalCatsContainer').innerHTML = evalData.categories.map((cat, ci) => {
            const ct = getCatTotals(ci, currentEval);
            const cb = getBestModels(ct);
            const cm = cat.items.reduce((a, it) => a + it.max, 0);
            const itemsH = cat.items.map((item, ii) => {
                const sc = getScores(item, currentEval);
                const bi = getBestModels(sc);
                const hn = (item.notes.miqidad && item.notes.miqidad.trim()) || (item.notes
                    .mahmoud && item.notes.mahmoud.trim());
                const circ = sc.map((s, i) => {
                    const isB = bi.includes(i);
                    return `<div class="score-pill"><div class="score-circle ${mClass(i)}${isB ? ' best' : ''}">${isB ? '<span class="best-crown">👑</span>' : ''}${s}</div></div>`;
                }).join('');
                let bt = '';
                if (bi.length === 1) bt =
                    `<span class="best-tag ${mClass(bi[0])}">الأعلى: ${mName(bi[0])}</span>`;
                else bt =
                    `<span class="best-tag tie">تعادل: ${bi.map(i => mName(i)).join(' و ')}</span>`;
                return `<div class="crit-row"><div><div class="crit-text">${item.text}</div>${bt}</div><div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;justify-content:flex-end">${hn ? `<button class="notes-btn" onclick="event.stopPropagation();window._openEvalNote(${ci},${ii},event)">📝 ملاحظات</button>` : ''}<div class="scores-block">${circ}</div></div></div>`;
            }).join('');
            const ac = ct.map((t, i) =>
                `<span class="avg-chip ${mClass(i)}">${t}/${cm}</span>`).join('');
            return `<div class="cat-section"><div class="cat-header" onclick="window._toggleEvalCat('cat${ci}')"><div class="cat-icon ${cat.iconClass}">${cat.icon}</div><div class="cat-title">${cat.name}</div><div class="cat-avgs">${ac}</div><div class="chev" id="chev${ci}">▾</div></div><div class="crit-body open" id="cat${ci}">${itemsH}</div></div>`;
        }).join('');
        document.getElementById('evalCatWinners').innerHTML = evalData.categories.map((cat, ci) => {
            const t = getCatTotals(ci, currentEval);
            const b = getBestModels(t);
            let ch = b.length === 1 ?
                `<span class="cwr-chip ${mClass(b[0])}">${mName(b[0])} · ${t[b[0]]}</span>` :
                b.map(i => `<span class="cwr-chip gold">${mName(i)} · ${t[i]}</span>`).join('');
            return `<div class="cwr"><div class="cwr-name">${cat.icon} ${cat.name}</div><div>${ch}</div></div>`;
        }).join('');
        document.getElementById('evalOverallWinner').innerHTML = tots.map((t, i) => {
            const pct = Math.round(t / maxT * 100);
            const isB = bestO.includes(i);
            return `<div class="wi ${isB ? 'highlight' : ''}"><div class="wi-cat">${bestO.length > 1 && isB ? '🤝 تعادل' : bestO[0] === i ? '🥇 الأفضل' : i === 1 ? '🥈 ثانٍ' : '🥉 ثالث'}</div><div class="wi-model ${mClass(i)}">${mName(i)}</div><div class="wi-score">${t} / ${maxT} (${pct}%)</div></div>`;
        }).join('');
        attachEval3D();
    }

    let radarChart, barChart, lineChart;
    let lineEval = 'all';

    function getCatTotalsChart(ci, ev) {
        const cat = evalData.categories[ci];
        const t = [0, 0, 0];
        cat.items.forEach(item => {
            const s = ev === 'all' ? item.scores.miqidad.map((v, i) => Math.round((v + item
                .scores.mahmoud[i]) / 2 * 10) / 10) : item.scores[ev];
            s.forEach((v, i) => t[i] += v);
        });
        return t.map(v => Math.round(v * 10) / 10);
    }

    function getAllItemsLine(ev) {
        const res = [];
        evalData.categories.forEach(cat => {
            cat.items.forEach(item => {
                const s = ev === 'all' ? item.scores.miqidad.map((v, i) => Math.round((v + item
                    .scores.mahmoud[i]) / 2 * 10) / 10) : item.scores[ev];
                res.push({ text: item.text.substring(0, 26) + '…', scores: s });
            });
        });
        return res;
    }

    function makeLegend(container) {
        if (!container) return;
        container.innerHTML = modelNames.map((n, i) =>
            `<span style="display:flex;align-items:center;gap:5px;font-size:11px;color:#94a3b8"><span style="width:10px;height:10px;border-radius:2px;background:${modelColors[i]};display:inline-block"></span>${n}</span>`
        ).join('');
    }

    function buildChart(type) {
        if (typeof Chart === 'undefined') {
            setTimeout(() => buildChart(type), 100);
            return;
        }
        document.querySelectorAll('.chart-legend').forEach(l => makeLegend(l));
        if (type === 'radar') {
            if (radarChart) radarChart.destroy();
            const ctx = document.getElementById('radarCanvas')?.getContext('2d');
            if (!ctx) return;
            const datasets = modelNames.map((n, i) => ({
                label: n,
                data: evalData.categories.map((_, ci) => getCatTotalsChart(ci, currentEval)[i]),
                borderColor: modelColors[i],
                backgroundColor: [M1a, M2a, M3a][i],
                borderWidth: 2,
                pointBackgroundColor: modelColors[i],
                pointRadius: 4,
            }));
            radarChart = new Chart(ctx, {
                type: 'radar',
                data: {
                    labels: ['الهيكلة والشمول', 'الترابط الفني', 'اللغة والأسلوب', 'التنسيق'],
                    datasets
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: {
                        r: {
                            min: 0, grid: { color: 'rgba(255,255,255,0.06)' },
                            angleLines: { color: 'rgba(255,255,255,0.08)' },
                            pointLabels: {
                                color: '#94a3b8', font: {
                                    family: 'Tajawal',
                                    size: 11
                                }
                            }, ticks: {
                                color: '#64748b',
                                backdropColor: 'transparent', font: { size: 9 }
                            }
                        }
                    }
                }
            });
            window._evalCharts.push(radarChart);
        }
        if (type === 'bar') {
            if (barChart) barChart.destroy();
            const ctx = document.getElementById('barCanvas')?.getContext('2d');
            if (!ctx) return;
            const cd = evalData.categories.map((_, ci) => getCatTotalsChart(ci, currentEval));
            const datasets = modelNames.map((n, i) => ({
                label: n,
                data: cd.map(t => t[i]),
                backgroundColor: [M1a, M2a, M3a][i],
                borderColor: modelColors[i],
                borderWidth: 2,
                borderRadius: 6,
            }));
            barChart = new Chart(ctx, {
                type: 'bar',
                data: { labels: catShort, datasets },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: {
                        x: {
                            grid: { color: 'rgba(255,255,255,0.04)' }, ticks: {
                                color: '#94a3b8',
                                font: { family: 'Tajawal', size: 11 }
                            }
                        }, y: {
                            grid: { color: 'rgba(255,255,255,0.04)' },
                            ticks: { color: '#94a3b8', font: { size: 10 } }, beginAtZero: true
                        }
                    }
                }
            });
            window._evalCharts.push(barChart);
        }
        if (type === 'line') {
            if (lineChart) lineChart.destroy();
            const ctx = document.getElementById('lineCanvas')?.getContext('2d');
            if (!ctx) return;
            const items = getAllItemsLine(lineEval);
            const datasets = modelNames.map((n, i) => ({
                label: n,
                data: items.map(it => it.scores[i]),
                borderColor: modelColors[i],
                backgroundColor: [M1a, M2a, M3a][i],
                borderWidth: 2.5,
                pointRadius: 3,
                pointBackgroundColor: modelColors[i],
                tension: 0.35,
                fill: true,
            }));
            lineChart = new Chart(ctx, {
                type: 'line',
                data: { labels: items.map(it => it.text), datasets },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: { legend: { display: false } },
                    scales: {
                        x: {
                            grid: { color: 'rgba(255,255,255,0.04)' }, ticks: {
                                color: '#94a3b8',
                                font: { size: 9 }, maxRotation: 40, autoSkip: false
                            }
                        },
                        y: {
                            min: 0, max: 10, grid: { color: 'rgba(255,255,255,0.04)' },
                            ticks: { color: '#94a3b8', font: { size: 10 } }
                        }
                    }
                }
            });
            window._evalCharts.push(lineChart);
        }
        if (type === 'doughnut') {
            ['doughnut1', 'doughnut2', 'doughnut3'].forEach((id, mi) => {
                const existing = Chart.getChart(id);
                if (existing) existing.destroy();
                const ctx = document.getElementById(id)?.getContext('2d');
                if (!ctx) return;
                const catTotals = evalData.categories.map((_, ci) => getCatTotalsChart(ci,
                    currentEval)[mi]);
                const chart = new Chart(ctx, {
                    type: 'doughnut',
                    data: {
                        labels: catShort,
                        datasets: [{
                            data: catTotals,
                            backgroundColor: catColors.map(c => c + '33'),
                            borderColor: catColors, borderWidth: 2
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                display: true, position: 'bottom',
                                labels: {
                                    color: '#94a3b8', font: {
                                        family: 'Tajawal',
                                        size: 10
                                    }, boxWidth: 10, padding: 6
                                }
                            }
                        }
                    }
                });
                window._evalCharts.push(chart);
            });
        }
    }

    window._setChart = function (type, btn) {
        ['radar', 'bar', 'line', 'doughnut'].forEach(t => {
            const el = document.getElementById('chart-' + t);
            if (el) el.style.display = t === type ? 'block' : 'none';
        });
        document.querySelectorAll('.chart-section .ctab').forEach(b => b.classList.remove('active'));
        if (btn) btn.classList.add('active');
        buildChart(type);
    };
    window._setLineEval = function (ev, btn) {
        lineEval = ev;
        document.querySelectorAll('#chart-line .ctab').forEach(b => b.classList.remove('active'));
        if (btn) btn.classList.add('active');
        buildChart('line');
    };

    setTimeout(() => {
        document.querySelectorAll('.chart-legend').forEach(l => makeLegend(l));
        buildChart('radar');
    }, 300);
}
