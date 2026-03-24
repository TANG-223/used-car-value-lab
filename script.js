const translations = {
  en: {
    brandSub: 'Student-built estimator for the U.S. market',
    navEstimator: 'Estimator', navHow: 'How It Works', navMarket: 'Learn the Market', navAbout: 'About',
    heroEyebrow: 'Explainable · Lightweight · Educational',
    heroTitle: 'Understand used-car prices more clearly',
    heroCopy: 'This project connects a student-built regression model with a lightweight web tool. It helps users estimate used-car value and understand how age, mileage, condition, and premium factors shape the final result.',
    heroBtnPrimary: 'Start Estimating', heroBtnSecondary: 'How It Works',
    heroNote: 'Designed for project demos, student research, and general learning about the U.S. used-car market.',
    heroCardLabel: 'Quick snapshot', heroStat1: 'rows in the original project dataset', heroStat2: 'model modes: linear and cubic', heroStat3: 'simple static site for easy GitHub Pages deployment', heroStat4: 'better for explanation than a black-box estimate',
    whyEyebrow: 'Why this tool', whyTitle: 'A clearer way to explore used-car value',
    whyCopy: 'Commercial valuation platforms are useful, but they often feel opaque. This site keeps the model simple and visible, making it easier to learn how major variables influence price.',
    feature1Title: 'Explainable', feature1Copy: 'See how each factor contributes to the estimate instead of getting only a final number.',
    feature2Title: 'Lightweight', feature2Copy: 'Built as a simple static site that is easy for a student project to maintain and present.',
    feature3Title: 'Educational', feature3Copy: 'Useful for demos, school presentations, science fairs, and learning about the U.S. market.',
    estimatorEyebrow: 'Estimator', estimatorTitle: 'Estimate a vehicle value', estimatorCopy: 'Enter the vehicle information below to generate an educational value estimate and a contribution breakdown.',
    presetLabel: 'Try an example', presetCopy: 'Use a preset vehicle profile to see how the model responds.', presetEconomy: 'Economy Sedan', presetFamily: 'Family SUV', presetPremium: 'Premium Vehicle',
    modeLabel: 'Model type', modeLinear: 'Linear model', modeCubic: 'Cubic model', loadDemo: 'Load demo coefficients', resetBtn: 'Reset',
    inputsTitle: 'Inputs', ageLabel: 'Vehicle age (years)', ageHint: 'Typical: 0–15', mileageLabel: 'Mileage (miles)', mileageHint: 'The model also computes mileage per 10,000 miles.',
    accidentLabel: 'Accident history', accidentNo: 'No', accidentYes: 'Yes', accidentHint: 'Binary factor: 0 or 1', conditionLabel: 'Condition (1–5)', conditionHint: 'A simplified condition score for demo purposes.',
    brandLabel: 'Brand premium ($)', brandHint: 'Example: Toyota +800, BMW +2500.', trimLabel: 'Trim premium ($)', trimHint: 'Higher trim packages can support a premium.',
    xTypeLabel: 'Choose x variable', xTypeAge: 'Age (years)', xTypeMileage: 'Mileage (per 10k miles)', xTypeHint: 'Cubic mode uses one variable only.',
    xValueLabel: 'x value', xValueHint: 'If x is mileage_10k, enter miles divided by 10,000.',
    coefTitle: 'Coefficients', coefHint: 'Units matter. In this template: age in years, mileage in 10k miles, price in USD.',
    exportBtn: 'Export JSON', importBtn: 'Import JSON', minClampLabel: 'Clamp min price ($)', tipTitle: 'Tip:', tipCopy: 'Cubic mode can overshoot with noisy data. Use it for comparison and teaching, not as a production pricing engine.',
    resultLabel: 'Result', educationalPill: 'Educational demo only', breakdownTitle: 'Contribution breakdown', breakdownCopy: 'Negative terms reduce the estimate. Positive terms support it.',
    howEyebrow: 'How it works', howTitle: 'A simple model-to-interface workflow', howCopy: 'The website does not train a model online. It reads prepared coefficients, accepts user inputs, and computes an estimate directly in the browser.',
    howStep1Title: 'Data and preprocessing', howStep1Copy: 'The original project cleaned real used-car data, reduced outliers, and prepared variables for regression analysis.',
    howStep2Title: 'Regression model', howStep2Copy: 'A linear model was built as the baseline, and a cubic model was explored for comparison.',
    howStep3Title: 'Interactive estimator', howStep3Copy: 'The web interface turns the model into a visible tool that users can test, compare, and discuss.',
    marketEyebrow: 'Learn the market', marketTitle: 'Why these inputs matter', marketCopy: 'This section helps users — especially students and Chinese readers learning about the U.S. market — understand common used-car pricing logic.',
    market1Title: 'Mileage', market1Copy: 'Higher mileage often means more wear and longer usage history, which usually reduces resale value.',
    market2Title: 'Vehicle age', market2Copy: 'Older vehicles generally lose value because of depreciation, aging components, and changing buyer preference.',
    market3Title: 'Condition', market3Copy: 'Cars in better condition often receive higher estimates because they may require fewer repairs.',
    market4Title: 'Brand and trim', market4Copy: 'Some brands and trims hold value better because of reliability, features, and buyer demand.',
    aboutEyebrow: 'About this project', aboutTitle: 'A complete high-school-style research and web demo project',
    aboutCopy1: 'This site was upgraded from an existing single-file estimator into a more complete project website with bilingual support, preset vehicles, clearer results, and educational sections.',
    aboutCopy2: 'It is still intentionally lightweight: static HTML, CSS, and JavaScript, easy to deploy on GitHub Pages, and realistic for a student-built project.',
    aboutListLabel: 'What this version adds', aboutList1: 'Bilingual English-Chinese interface', aboutList2: 'Hero section and clearer project positioning', aboutList3: 'Preset example vehicles for quick demos', aboutList4: 'Reference price range and explanation text', aboutList5: 'How It Works, Learn the Market, and About sections',
    footerCopy: 'Educational demo only. This site is for learning, demonstration, and general reference. It is not an official vehicle appraisal service.', backTop: 'Back to top',
    referenceRange: 'Reference range', linearPill: 'Linear', cubicPill: 'Cubic',
    contribHeaderTerm: 'Term', contribHeaderValue: 'Input', contribHeaderCoef: 'Coef', contribHeaderContribution: 'Contribution',
    interceptTerm: 'Intercept', ageTerm: 'Age', mileageTerm: 'Mileage (10k)', accidentTerm: 'Accident', conditionTerm: 'Condition', brandTerm: 'Brand premium', trimTerm: 'Trim premium',
    cubicXTerm: 'x', cubicX2Term: 'x²', cubicX3Term: 'x³',
    explainA: 'Higher mileage and older vehicle age reduce the estimated value in this case.',
    explainB: 'Better condition and positive brand or trim factors help support a higher estimated price.',
    explainC: 'This estimate should be viewed as an educational reference rather than an official market appraisal.'
  },
  zh: {
    brandSub: '面向美国市场的学生自建估值工具',
    navEstimator: '估值器', navHow: '工作原理', navMarket: '市场学习', navAbout: '关于项目',
    heroEyebrow: '可解释 · 轻量化 · 教育型',
    heroTitle: '更清晰地理解二手车价格',
    heroCopy: '这个项目把学生自建的回归模型和一个轻量网页工具连接起来，帮助用户估算二手车价格，并理解车龄、里程、车况和溢价因素如何影响结果。',
    heroBtnPrimary: '开始估值', heroBtnSecondary: '查看原理',
    heroNote: '适用于项目演示、学生研究展示，以及对美国二手车市场的一般性学习。',
    heroCardLabel: '项目速览', heroStat1: '原始项目数据行数', heroStat2: '模型模式：线性与三次', heroStat3: '适合 GitHub Pages 的静态网站', heroStat4: '比黑箱估值更适合讲解',
    whyEyebrow: '为什么做这个工具', whyTitle: '一种更清楚的二手车估值学习方式',
    whyCopy: '商业估值平台当然有用，但普通用户很难理解其内部逻辑。这个网站尽量保持模型简单、结果可见，便于学习主要变量如何影响价格。',
    feature1Title: '可解释', feature1Copy: '不仅给出一个数字，还能看到每个因素如何影响最终估值。',
    feature2Title: '轻量', feature2Copy: '采用静态网站架构，适合高中生项目维护、演示和上线。',
    feature3Title: '教育型', feature3Copy: '适合课堂演示、科研展示、科学展和美国市场认知学习。',
    estimatorEyebrow: '估值器', estimatorTitle: '估算车辆价格', estimatorCopy: '输入车辆相关信息，即可得到一个教育用途的参考估值和贡献拆解。',
    presetLabel: '试试示例车辆', presetCopy: '点击预设车辆，快速查看模型如何响应不同类型的车。', presetEconomy: '经济型轿车', presetFamily: '家用 SUV', presetPremium: '高端品牌车',
    modeLabel: '模型类型', modeLinear: '线性模型', modeCubic: '三次模型', loadDemo: '载入演示系数', resetBtn: '重置',
    inputsTitle: '输入项', ageLabel: '车龄（年）', ageHint: '常见范围：0–15', mileageLabel: '里程（英里）', mileageHint: '系统也会自动换算为每 1 万英里。',
    accidentLabel: '事故记录', accidentNo: '无', accidentYes: '有', accidentHint: '二元变量：0 或 1', conditionLabel: '车况（1–5）', conditionHint: '用于演示的简化车况评分。',
    brandLabel: '品牌溢价（美元）', brandHint: '例如：Toyota +800，BMW +2500。', trimLabel: '配置溢价（美元）', trimHint: '高配车型通常会有更高溢价。',
    xTypeLabel: '选择 x 变量', xTypeAge: '车龄（年）', xTypeMileage: '里程（每 1 万英里）', xTypeHint: '三次模型只使用一个变量。',
    xValueLabel: 'x 数值', xValueHint: '若 x 为 mileage_10k，请输入里程 ÷ 10,000。',
    coefTitle: '系数', coefHint: '注意单位。本模板中：age 用年、mileage 用每 1 万英里、price 用美元。',
    exportBtn: '导出 JSON', importBtn: '导入 JSON', minClampLabel: '最低价格钳制（美元）', tipTitle: '提示：', tipCopy: '三次模型在有噪声的数据上可能会明显偏离，适合做对比和教学，不适合直接当成商业定价引擎。',
    resultLabel: '结果', educationalPill: '仅供教育演示', breakdownTitle: '贡献拆解', breakdownCopy: '负值会拉低估值，正值会抬高估值。',
    howEyebrow: '工作原理', howTitle: '一个简单的“模型到界面”流程', howCopy: '网站本身不在线训练模型，而是读取预先准备好的系数，接收用户输入，并直接在浏览器里完成估值计算。',
    howStep1Title: '数据与预处理', howStep1Copy: '原始项目对真实二手车数据做了清洗、异常值处理，并准备好了回归分析所需变量。',
    howStep2Title: '回归模型', howStep2Copy: '项目先建立线性模型作为基线，并进一步尝试三次模型进行比较。',
    howStep3Title: '交互式估值器', howStep3Copy: '网页把模型变成了可视化工具，方便用户测试、比较和讲解。',
    marketEyebrow: '市场学习', marketTitle: '为什么这些变量重要', marketCopy: '这一部分帮助用户，尤其是中国学生和想了解美国市场的用户，理解美国二手车定价的常见逻辑。',
    market1Title: '里程', market1Copy: '里程越高通常意味着使用时间更长、磨损更多，因此往往会降低转售价值。',
    market2Title: '车龄', market2Copy: '车辆越老，通常会因为折旧、部件老化和买家偏好变化而贬值。',
    market3Title: '车况', market3Copy: '车况更好的车辆通常估值更高，因为买家预期后续维修压力更小。',
    market4Title: '品牌与配置', market4Copy: '部分品牌和配置保值更好，原因包括可靠性、配置水平和市场需求。',
    aboutEyebrow: '关于项目', aboutTitle: '一个完整的高中生研究 + 网页演示项目',
    aboutCopy1: '这个版本是在原有单页估值器的基础上升级而成，加入了中英双语、示例车辆、更清晰的结果展示和教育型说明页面。',
    aboutCopy2: '它仍然保持轻量：静态 HTML、CSS 和 JavaScript，适合 GitHub Pages 部署，也符合高中生项目的可实现性。',
    aboutListLabel: '本次升级增加了', aboutList1: '中英双语界面', aboutList2: '首页说明和更清晰的项目定位', aboutList3: '用于快速演示的示例车辆', aboutList4: '参考区间与自动解释文本', aboutList5: '工作原理、市场学习和关于项目页面',
    footerCopy: '本网站仅供学习、演示和一般参考，不构成官方车辆评估服务。', backTop: '返回顶部',
    referenceRange: '参考区间', linearPill: '线性', cubicPill: '三次',
    contribHeaderTerm: '项', contribHeaderValue: '输入', contribHeaderCoef: '系数', contribHeaderContribution: '贡献值',
    interceptTerm: '截距', ageTerm: '车龄', mileageTerm: '里程（万英里）', accidentTerm: '事故', conditionTerm: '车况', brandTerm: '品牌溢价', trimTerm: '配置溢价',
    cubicXTerm: 'x', cubicX2Term: 'x²', cubicX3Term: 'x³',
    explainA: '在这个案例中，较高的里程和更老的车龄会明显拉低估值。',
    explainB: '更好的车况以及正向的品牌或配置因素，会对估值形成支撑。',
    explainC: '这个结果应被理解为教育型参考，而不是官方市场评估。'
  }
};

const demoDefaults = {
  linearInputs: { age: 5, mileage: 62000, accident: 0, condition: 4, brandPremium: 800, trimPremium: 600 },
  cubicInputs: { xType: 'age', xValue: 5 },
  linearCoefs: { b0: 23500, bAge: -900, bMileage: -650, bAccident: -1800, bCondition: 950, bBrand: 1, bTrim: 1, minPriceLinear: 3000 },
  cubicCoefs: { c0: 22000, c1: -1200, c2: 35, c3: -1.2, minPriceCubic: 3000 }
};

const presets = {
  economy: { age: 7, mileage: 86000, accident: 0, condition: 3, brandPremium: 500, trimPremium: 250 },
  family: { age: 5, mileage: 62000, accident: 0, condition: 4, brandPremium: 1200, trimPremium: 800 },
  premium: { age: 4, mileage: 42000, accident: 0, condition: 5, brandPremium: 2800, trimPremium: 1600 }
};

let currentLang = 'en';

const el = id => document.getElementById(id);
const money = value => new Intl.NumberFormat(currentLang === 'zh' ? 'zh-CN' : 'en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(value);

function applyTranslations() {
  const t = translations[currentLang];
  document.documentElement.lang = currentLang === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-i18n]').forEach(node => {
    const key = node.dataset.i18n;
    if (t[key]) node.textContent = t[key];
  });
  document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.toggle('active', btn.dataset.lang === currentLang));
  renderAll();
}

function getMode() { return el('mode').value; }

function toggleModeFields() {
  const isLinear = getMode() === 'linear';
  document.querySelector('.linear-fields').classList.toggle('hidden', !isLinear);
  document.querySelector('.linear-coefs').classList.toggle('hidden', !isLinear);
  document.querySelector('.cubic-fields').classList.toggle('hidden', isLinear);
  document.querySelector('.cubic-coefs').classList.toggle('hidden', isLinear);
  renderAll();
}

function setDefaults() {
  Object.entries(demoDefaults.linearInputs).forEach(([k, v]) => el(k).value = v);
  Object.entries(demoDefaults.cubicInputs).forEach(([k, v]) => el(k).value = v);
  Object.entries(demoDefaults.linearCoefs).forEach(([k, v]) => el(k).value = v);
  Object.entries(demoDefaults.cubicCoefs).forEach(([k, v]) => el(k).value = v);
  el('mode').value = 'linear';
  toggleModeFields();
}

function applyPreset(name) {
  const p = presets[name];
  if (!p) return;
  Object.entries(p).forEach(([k, v]) => el(k).value = v);
  renderAll();
}

function getLinearState() {
  const age = Number(el('age').value || 0);
  const mileage = Number(el('mileage').value || 0);
  const mileage10k = mileage / 10000;
  const accident = Number(el('accident').value || 0);
  const condition = Number(el('condition').value || 0);
  const brandPremium = Number(el('brandPremium').value || 0);
  const trimPremium = Number(el('trimPremium').value || 0);
  const coefs = {
    b0: Number(el('b0').value || 0),
    bAge: Number(el('bAge').value || 0),
    bMileage: Number(el('bMileage').value || 0),
    bAccident: Number(el('bAccident').value || 0),
    bCondition: Number(el('bCondition').value || 0),
    bBrand: Number(el('bBrand').value || 0),
    bTrim: Number(el('bTrim').value || 0),
    minPriceLinear: Number(el('minPriceLinear').value || 0)
  };
  const contributions = [
    { term: 'interceptTerm', input: '—', coef: coefs.b0, contribution: coefs.b0 },
    { term: 'ageTerm', input: age, coef: coefs.bAge, contribution: age * coefs.bAge },
    { term: 'mileageTerm', input: mileage10k.toFixed(2), coef: coefs.bMileage, contribution: mileage10k * coefs.bMileage },
    { term: 'accidentTerm', input: accident, coef: coefs.bAccident, contribution: accident * coefs.bAccident },
    { term: 'conditionTerm', input: condition, coef: coefs.bCondition, contribution: condition * coefs.bCondition },
    { term: 'brandTerm', input: money(brandPremium), coef: coefs.bBrand, contribution: brandPremium * coefs.bBrand },
    { term: 'trimTerm', input: money(trimPremium), coef: coefs.bTrim, contribution: trimPremium * coefs.bTrim }
  ];
  const raw = contributions.reduce((sum, row) => sum + row.contribution, 0);
  const price = Math.max(raw, coefs.minPriceLinear);
  return { price, contributions, modeLabel: translations[currentLang].linearPill };
}

function getCubicState() {
  const x = Number(el('xValue').value || 0);
  const c0 = Number(el('c0').value || 0);
  const c1 = Number(el('c1').value || 0);
  const c2 = Number(el('c2').value || 0);
  const c3 = Number(el('c3').value || 0);
  const minPriceCubic = Number(el('minPriceCubic').value || 0);
  const contributions = [
    { term: 'interceptTerm', input: '—', coef: c0, contribution: c0 },
    { term: 'cubicXTerm', input: x, coef: c1, contribution: x * c1 },
    { term: 'cubicX2Term', input: `${x}²`, coef: c2, contribution: x * x * c2 },
    { term: 'cubicX3Term', input: `${x}³`, coef: c3, contribution: x * x * x * c3 }
  ];
  const raw = contributions.reduce((sum, row) => sum + row.contribution, 0);
  const price = Math.max(raw, minPriceCubic);
  return { price, contributions, modeLabel: translations[currentLang].cubicPill };
}

function getResultState() {
  return getMode() === 'linear' ? getLinearState() : getCubicState();
}

function buildRange(price) {
  const width = Math.max(price * 0.07, 900);
  return [Math.max(0, price - width), price + width];
}

function buildExplainer(contributions) {
  const t = translations[currentLang];
  const sorted = [...contributions].sort((a, b) => Math.abs(b.contribution) - Math.abs(a.contribution));
  const top1 = sorted[0]?.term;
  const top2 = sorted[1]?.term;
  const ageOrMileage = ['ageTerm', 'mileageTerm'].includes(top1) || ['ageTerm', 'mileageTerm'].includes(top2);
  const qualityBoost = ['conditionTerm', 'brandTerm', 'trimTerm'].includes(top1) || ['conditionTerm', 'brandTerm', 'trimTerm'].includes(top2);
  let parts = [];
  if (ageOrMileage) parts.push(t.explainA);
  if (qualityBoost) parts.push(t.explainB);
  parts.push(t.explainC);
  return parts.join(' ');
}

function renderTable(contributions) {
  const t = translations[currentLang];
  const maxAbs = Math.max(...contributions.map(r => Math.abs(r.contribution)), 1);
  const rows = contributions.map(row => {
    const width = Math.max(6, Math.round(Math.abs(row.contribution) / maxAbs * 100));
    const cls = row.contribution >= 0 ? 'contrib-pos' : 'contrib-neg';
    const inputValue = typeof row.input === 'number' ? row.input : row.input;
    return `
      <tr>
        <td>
          <strong>${t[row.term]}</strong>
          <div class="contrib-bar-track"><div class="contrib-bar-fill ${cls}" style="width:${width}%"></div></div>
        </td>
        <td>${inputValue}</td>
        <td>${Number(row.coef).toLocaleString(currentLang === 'zh' ? 'zh-CN' : 'en-US')}</td>
        <td>${money(row.contribution)}</td>
      </tr>
    `;
  }).join('');
  return `
    <table class="contrib-table">
      <thead>
        <tr>
          <th>${t.contribHeaderTerm}</th>
          <th>${t.contribHeaderValue}</th>
          <th>${t.contribHeaderCoef}</th>
          <th>${t.contribHeaderContribution}</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `;
}

function renderAll() {
  const state = getResultState();
  const [minRange, maxRange] = buildRange(state.price);
  el('resultPrice').textContent = money(state.price);
  el('resultRange').textContent = `${translations[currentLang].referenceRange}: ${money(minRange)} – ${money(maxRange)}`;
  el('resultModePill').textContent = state.modeLabel;
  el('resultExplainer').textContent = buildExplainer(state.contributions);
  el('contribTableWrap').innerHTML = renderTable(state.contributions);
}

function exportJson() {
  const payload = {
    mode: getMode(),
    linearInputs: {
      age: Number(el('age').value || 0), mileage: Number(el('mileage').value || 0), accident: Number(el('accident').value || 0),
      condition: Number(el('condition').value || 0), brandPremium: Number(el('brandPremium').value || 0), trimPremium: Number(el('trimPremium').value || 0)
    },
    cubicInputs: { xType: el('xType').value, xValue: Number(el('xValue').value || 0) },
    linearCoefs: {
      b0: Number(el('b0').value || 0), bAge: Number(el('bAge').value || 0), bMileage: Number(el('bMileage').value || 0), bAccident: Number(el('bAccident').value || 0),
      bCondition: Number(el('bCondition').value || 0), bBrand: Number(el('bBrand').value || 0), bTrim: Number(el('bTrim').value || 0), minPriceLinear: Number(el('minPriceLinear').value || 0)
    },
    cubicCoefs: {
      c0: Number(el('c0').value || 0), c1: Number(el('c1').value || 0), c2: Number(el('c2').value || 0), c3: Number(el('c3').value || 0), minPriceCubic: Number(el('minPriceCubic').value || 0)
    }
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: 'application/json' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = 'used-car-value-lab-config.json';
  link.click();
  URL.revokeObjectURL(link.href);
}

function importJson(file) {
  const reader = new FileReader();
  reader.onload = e => {
    try {
      const data = JSON.parse(e.target.result);
      if (data.mode) el('mode').value = data.mode;
      ['linearInputs', 'cubicInputs', 'linearCoefs', 'cubicCoefs'].forEach(group => {
        if (!data[group]) return;
        Object.entries(data[group]).forEach(([k, v]) => {
          if (el(k)) el(k).value = v;
        });
      });
      toggleModeFields();
      renderAll();
    } catch {
      alert(currentLang === 'zh' ? '导入失败：JSON 文件格式不正确。' : 'Import failed: invalid JSON file.');
    }
  };
  reader.readAsText(file);
}

function wireEvents() {
  document.querySelectorAll('input, select').forEach(node => {
    node.addEventListener('input', renderAll);
    node.addEventListener('change', renderAll);
  });
  document.querySelectorAll('.lang-btn').forEach(btn => btn.addEventListener('click', () => { currentLang = btn.dataset.lang; applyTranslations(); }));
  document.querySelectorAll('.preset-btn').forEach(btn => btn.addEventListener('click', () => applyPreset(btn.dataset.preset)));
  el('mode').addEventListener('change', toggleModeFields);
  el('loadDemoBtn').addEventListener('click', setDefaults);
  el('resetBtn').addEventListener('click', setDefaults);
  el('exportBtn').addEventListener('click', exportJson);
  el('importFile').addEventListener('change', e => { if (e.target.files[0]) importJson(e.target.files[0]); e.target.value = ''; });
  el('xType').addEventListener('change', () => {
    if (el('xType').value === 'mileage_10k') el('xValue').value = 4.5;
    else el('xValue').value = 5;
    renderAll();
  });
}

setDefaults();
wireEvents();
applyTranslations();
