// ============================================================
// 数学鬼杀队 Online — 游戏逻辑 game.js
// ============================================================

// ======================== 游戏状态 ========================
const state = {
  playerExp: 0,
  playerLevel: 1,
  playerTitle: '数学见习生',
  gradeProgress: {},   // {gradeId: {chapterId: {stars, completed, correct, total}}}
  currentGrade: null,
  currentChapter: null,
  currentQuestions: [],
  currentQIdx: 0,
  playerHP: 100,
  playerMaxHP: 100,
  enemyHP: 100,
  enemyMaxHP: 100,
  breathVal: 0,
  correct: 0,
  total: 0,
  answered: false,
};

// ======================== 初始化 ========================
window.onload = function() {
  loadState();
  initParticles();
  renderGradeGrid();
};

function initParticles() {
  const container = document.getElementById('particles');
  for (let i = 0; i < 18; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.cssText = `left:${Math.random()*100}%;animation-duration:${5+Math.random()*8}s;animation-delay:${-Math.random()*10}s;--drift:${(Math.random()-0.5)*60}px`;
    container.appendChild(p);
  }
}

// ======================== 存档 ========================
function saveState() {
  localStorage.setItem('mathSlayerState', JSON.stringify({
    playerExp: state.playerExp,
    playerLevel: state.playerLevel,
    playerTitle: state.playerTitle,
    gradeProgress: state.gradeProgress,
  }));
}

function loadState() {
  const raw = localStorage.getItem('mathSlayerState');
  if (raw) {
    try {
      const s = JSON.parse(raw);
      state.playerExp = s.playerExp || 0;
      state.playerLevel = s.playerLevel || 1;
      state.playerTitle = s.playerTitle || '数学见习生';
      state.gradeProgress = s.gradeProgress || {};
    } catch(e) {}
  }
}

// ======================== 屏幕切换 ========================
function showScreen(id) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  window.scrollTo(0, 0);
}

function showGradeSelect() {
  renderGradeGrid();
  showScreen('screen-grade');
}

function showRanking() {
  renderRanking();
  showScreen('screen-ranking');
}

// ======================== 年级选择 ========================
function renderGradeGrid() {
  const grid = document.getElementById('grade-grid');
  const specialGrid = document.getElementById('grade-special-grid');
  if (!grid) return;

  grid.innerHTML = '';
  GRADES.forEach(g => {
    const prog = getGradeProgress(g.id);
    const card = document.createElement('div');
    card.className = 'grade-card';
    card.onclick = () => selectGrade(g.id);
    card.innerHTML = `
      <div class="grade-emoji">${g.emoji}</div>
      <div class="grade-name">${g.name}</div>
      <div class="grade-desc">${g.desc}</div>
      <div class="grade-stars">${'★'.repeat(prog.stars)}${'☆'.repeat(Math.max(0,5-prog.stars))}</div>
      <div class="grade-progress"><div class="grade-bar" style="width:${prog.pct}%"></div></div>
    `;
    grid.appendChild(card);
  });

  specialGrid.innerHTML = '';
  specialGrid.className = 'grade-grid grade-special';
  SPECIAL_GRADES.forEach(g => {
    const prog = getGradeProgress(g.id);
    const card = document.createElement('div');
    card.className = 'grade-card';
    card.onclick = () => selectGrade(g.id);
    card.innerHTML = `
      <div class="grade-emoji">${g.emoji}</div>
      <div class="grade-name">${g.name}</div>
      <div class="grade-desc">${g.desc}</div>
      <div class="grade-stars">${'★'.repeat(prog.stars)}${'☆'.repeat(Math.max(0,5-prog.stars))}</div>
      <div class="grade-progress"><div class="grade-bar" style="width:${prog.pct}%"></div></div>
    `;
    specialGrid.appendChild(card);
  });
}

function getGradeProgress(gradeId) {
  const gp = state.gradeProgress[gradeId] || {};
  const allGrades = [...GRADES, ...SPECIAL_GRADES];
  const grade = allGrades.find(g => g.id === gradeId);
  if (!grade) return { stars: 0, pct: 0 };
  const total = grade.chapters.length;
  let stars = 0, completed = 0;
  grade.chapters.forEach(cid => {
    const cp = gp[cid];
    if (cp) { stars += (cp.stars || 0); if (cp.completed) completed++; }
  });
  return { stars, pct: total > 0 ? Math.round(completed/total*100) : 0 };
}

function selectGrade(gradeId) {
  const allGrades = [...GRADES, ...SPECIAL_GRADES];
  const grade = allGrades.find(g => g.id === gradeId);
  if (!grade) return;
  state.currentGrade = grade;
  renderMapScreen(grade);
  showScreen('screen-map');
}

// ======================== 章节地图 ========================
function renderMapScreen(grade) {
  document.getElementById('map-title').textContent = `🗺️ ${grade.name} · 茜茜的冒险地图`;
  updateMapHeader();

  const list = document.getElementById('stage-list');
  list.innerHTML = '';

  let prevTier = '';
  grade.chapters.forEach((cid, idx) => {
    const ch = CHAPTERS[cid];
    if (!ch) return;

    if (ch.tier !== prevTier) {
      prevTier = ch.tier;
      const div = document.createElement('div');
      div.className = 'tier-divider';
      div.textContent = `— ${ch.tier} —`;
      list.appendChild(div);
    }

    const gp = state.gradeProgress[grade.id] || {};
    const cp = gp[cid] || {};
    const isLocked = idx > 0 && !((state.gradeProgress[grade.id] || {})[grade.chapters[idx-1]]?.completed);
    const card = document.createElement('div');
    card.className = `stage-card${isLocked ? ' locked' : ''}${cp.completed ? ' completed' : ''}`;
    if (!isLocked) card.onclick = () => startStage(cid);

    const stars = cp.stars || 0;
    card.innerHTML = `
      <div class="sc-header">
        <div class="sc-emoji">${ch.emoji}</div>
        <div class="sc-info">
          <div class="sc-name">${ch.name}</div>
          <div class="sc-topic">${ch.topic}</div>
        </div>
        <div class="sc-stars">${'★'.repeat(stars)}${'☆'.repeat(3-stars)}</div>
      </div>
      <div class="sc-meta">
        <span>👹 ${ch.boss}</span>
        <span>📝 ${ch.questions}道题</span>
        ${cp.completed ? `<span style="color:#27ae60">✅ 已通关</span>` : ''}
      </div>
    `;
    list.appendChild(card);
  });
}

function updateMapHeader() {
  const t = getTitleByExp(state.playerExp);
  state.playerLevel = t.level;
  state.playerTitle = t.title;
  document.getElementById('player-name-display').textContent = '茜茜';
  document.getElementById('player-level-display').textContent = `${state.playerTitle} · Lv.${state.playerLevel}`;
  document.getElementById('hdr-stars').textContent = getTotalStars();
  document.getElementById('hdr-gems').textContent = Math.floor(state.playerExp / 10);
}

function getTotalStars() {
  let total = 0;
  Object.values(state.gradeProgress).forEach(gp => {
    Object.values(gp).forEach(cp => { total += (cp.stars || 0); });
  });
  return total;
}

// ======================== 战斗系统 ========================
function startStage(chapterId) {
  const ch = CHAPTERS[chapterId];
  if (!ch) return;

  state.currentChapter = ch;
  const bank = QUESTION_BANK[chapterId] || [];
  if (bank.length === 0) {
    alert(`关卡 ${ch.name} 题库建设中，请先挑战其他关卡！`);
    return;
  }

  // 从题库随机抽题，数量不超过关卡配置
  const shuffled = [...bank].sort(() => Math.random() - 0.5);
  state.currentQuestions = shuffled.slice(0, Math.min(ch.questions, bank.length));
  state.currentQIdx = 0;
  state.correct = 0;
  state.total = state.currentQuestions.length;
  state.answered = false;

  // 根据年级调整HP
  const gradeHpMap = { g1:80, g2:90, g3:100, g4:120, g5:140, g6:160, gse:160, gao:180 };
  const enemyHp = gradeHpMap[ch.gradeId] || 100;
  state.playerHP = state.playerMaxHP = 100;
  state.enemyHP = state.enemyMaxHP = enemyHp;
  state.breathVal = 0;

  document.getElementById('battle-stage-info').textContent = `${ch.name} — ${ch.boss}`;
  document.getElementById('enemy-art').textContent = ch.bossEmoji || '👺';
  document.getElementById('enemy-name').textContent = ch.boss;
  updateBattleHP();
  updateBreathBar();
  document.getElementById('btn-skill').disabled = true;

  showScreen('screen-battle');
  setBattleLog(`<span class="story-text">🌸 茜茜与炭治郎并肩出击！${ch.boss}出现了——答题就是攻击！</span>`);
  renderQuestion();
}

function renderQuestion() {
  const q = state.currentQuestions[state.currentQIdx];
  if (!q) return;

  state.answered = false;
  document.getElementById('q-progress').textContent = `${state.currentQIdx+1}/${state.total}`;
  document.getElementById('q-topic').textContent = state.currentChapter.topic;
  document.getElementById('q-text').innerHTML = q.text;

  const optionsEl = document.getElementById('q-options');
  const inputWrap = document.getElementById('q-input-wrap');
  const solBox = document.getElementById('solution-box');
  solBox.style.display = 'none';

  if (q.type === 'choice') {
    optionsEl.style.display = 'flex';
    inputWrap.style.display = 'none';
    optionsEl.innerHTML = '';
    q.options.forEach((opt, i) => {
      const btn = document.createElement('button');
      btn.className = 'q-opt-btn';
      btn.textContent = opt;
      btn.onclick = () => submitChoice(i);
      optionsEl.appendChild(btn);
    });
  } else {
    optionsEl.style.display = 'none';
    inputWrap.style.display = 'flex';
    const input = document.getElementById('q-input');
    const btnSubmit = document.getElementById('btn-submit');
    input.value = '';
    input.disabled = false;
    btnSubmit.disabled = true;
    input.focus();
  }
}

function onInputChange() {
  const input = document.getElementById('q-input');
  document.getElementById('btn-submit').disabled = input.value.trim() === '';
}

function submitChoice(idx) {
  if (state.answered) return;
  state.answered = true;
  const q = state.currentQuestions[state.currentQIdx];
  const btns = document.querySelectorAll('.q-opt-btn');
  btns.forEach(b => b.disabled = true);
  const isCorrect = idx === q.answer;
  btns[idx].classList.add(isCorrect ? 'correct' : 'wrong');
  if (!isCorrect) btns[q.answer].classList.add('correct');
  handleAnswer(isCorrect, q);
}

function submitAnswer() {
  if (state.answered) return;
  const input = document.getElementById('q-input');
  const raw = input.value.trim();
  if (!raw) return;
  state.answered = true;
  input.disabled = true;
  document.getElementById('btn-submit').disabled = true;

  const q = state.currentQuestions[state.currentQIdx];
  const userAns = raw.replace(/\s/g, '').toLowerCase();
  const correctAns = String(q.answer).replace(/\s/g, '').toLowerCase();
  const isCorrect = userAns === correctAns || checkNumericAnswer(raw, q.answer);
  handleAnswer(isCorrect, q);
}

function checkNumericAnswer(userStr, correct) {
  try {
    const u = parseFloat(userStr);
    const c = parseFloat(String(correct));
    if (!isNaN(u) && !isNaN(c)) return Math.abs(u - c) < 0.01;
  } catch(e) {}
  return false;
}

function handleAnswer(isCorrect, q) {
  if (isCorrect) {
    state.correct++;
    const dmg = 20 + Math.floor(Math.random() * 15);
    state.enemyHP = Math.max(0, state.enemyHP - dmg);
    state.breathVal = Math.min(100, state.breathVal + 25);
    setBattleLog(`<span class="result-text good">✅ 答对了！茜茜出剑，造成 ${dmg} 点伤害！炭治郎：「太厉害了！」呼吸值 +25</span>`);
    floatEffect('+' + dmg, 'float-dmg', 'enemy-art');
    animateCombatant('player-art', 'attack');
    animateCombatant('enemy-art', 'shake');
  } else {
    const dmg = 10 + Math.floor(Math.random() * 10);
    state.playerHP = Math.max(0, state.playerHP - dmg);
    setBattleLog(`<span class="result-text bad">❌ 答错了！茜茜受到 ${dmg} 点反击！炭治郎：「没关系，看解析再来！」</span>`);
    floatEffect('-' + dmg, 'float-dmg', 'player-art');
    animateCombatant('enemy-art', 'attack');
    animateCombatant('player-art', 'shake');
  }
  updateBattleHP();
  updateBreathBar();
  showSolution(q, isCorrect);
}

function showSolution(q, isCorrect) {
  const solBox = document.getElementById('solution-box');
  const solTitle = document.getElementById('sol-title');
  const solText = document.getElementById('sol-text');
  const btnNext = document.getElementById('btn-next');

  solTitle.textContent = isCorrect ? '✅ 答对了！解析如下：' : '❌ 答错了，看看解析：';
  solTitle.style.color = isCorrect ? '#27ae60' : '#e74c3c';
  solText.textContent = q.solution || '（暂无解析）';

  const isLast = state.currentQIdx >= state.total - 1;
  btnNext.textContent = isLast ? '查看结果 🏆' : '下一题 →';
  solBox.style.display = 'block';
  solBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function nextQuestion() {
  const isLast = state.currentQIdx >= state.total - 1;
  if (isLast || state.playerHP <= 0) {
    endBattle();
    return;
  }
  state.currentQIdx++;
  setBattleLog(`<span class="story-text">🌸 茜茜深呼一口气，第 ${state.currentQIdx+1} 题，继续！</span>`);
  renderQuestion();
}

function useSkill() {
  if (state.breathVal < 100 || state.answered) return;
  state.breathVal = 0;
  updateBreathBar();
  document.getElementById('btn-skill').disabled = true;
  setBattleLog(`<span class="result-text good">🌸 茜茜·花之呼吸发动！炭治郎助攻，消除此题并跳过！呼吸值清零。</span>`);

  // 跳过当前题（算正确）
  state.correct++;
  state.currentQIdx++;
  if (state.currentQIdx >= state.total) {
    endBattle();
  } else {
    renderQuestion();
  }
}

function confirmQuit() {
  if (confirm('确定退出当前关卡吗？本次进度不会保存。')) {
    goToMap();
  }
}

function updateBattleHP() {
  const pPct = state.playerMaxHP > 0 ? (state.playerHP / state.playerMaxHP * 100) : 0;
  const ePct = state.enemyMaxHP > 0 ? (state.enemyHP / state.enemyMaxHP * 100) : 0;
  document.getElementById('player-hp-val').textContent = state.playerHP;
  document.getElementById('player-hp-max').textContent = state.playerMaxHP;
  document.getElementById('player-hp-bar').style.width = pPct + '%';
  document.getElementById('enemy-hp-val').textContent = state.enemyHP;
  document.getElementById('enemy-hp-max').textContent = state.enemyMaxHP;
  document.getElementById('enemy-hp-bar').style.width = ePct + '%';

  // HP颜色变化
  const bar = document.getElementById('player-hp-bar');
  if (pPct < 25) bar.style.background = 'linear-gradient(90deg,#e74c3c,#c0392b)';
  else if (pPct < 50) bar.style.background = 'linear-gradient(90deg,#e67e22,#d35400)';
  else bar.style.background = 'linear-gradient(90deg,#27ae60,#2ecc71)';
}

function updateBreathBar() {
  document.getElementById('breath-bar').style.width = state.breathVal + '%';
  document.getElementById('breath-val').textContent = state.breathVal + '%';
  document.getElementById('btn-skill').disabled = state.breathVal < 100;
}

// ======================== 战斗结束 ========================
function endBattle() {
  const ch = state.currentChapter;
  const correct = state.correct;
  const total = state.total;
  const win = state.playerHP > 0 && correct >= Math.ceil(total * 0.6);
  const pct = Math.round(correct / total * 100);
  let stars = 0;
  if (win) {
    if (pct >= 90) stars = 3;
    else if (pct >= 75) stars = 2;
    else stars = 1;
  }

  // 更新进度
  if (!state.gradeProgress[ch.gradeId]) state.gradeProgress[ch.gradeId] = {};
  const prev = state.gradeProgress[ch.gradeId][ch.id] || { stars: 0, completed: false };
  const newStars = Math.max(prev.stars, stars);

  if (win) {
    state.gradeProgress[ch.gradeId][ch.id] = { stars: newStars, completed: true, correct, total };
    if (!prev.completed) {
      state.playerExp += ch.reward.exp;
      const newTitle = getTitleByExp(state.playerExp);
      state.playerLevel = newTitle.level;
      state.playerTitle = newTitle.title;
    }
  } else if (!prev.completed) {
    state.gradeProgress[ch.gradeId][ch.id] = { stars: 0, completed: false, correct, total };
  }
  saveState();

  // 结果屏
  document.getElementById('result-art').textContent = win ? '🌸' : '💔';
  const titleEl = document.getElementById('result-title');
  titleEl.textContent = win ? '茜茜胜利！🌸' : '再接再厉…';
  titleEl.className = 'result-title ' + (win ? 'win' : 'lose');
  document.getElementById('result-stars').textContent = win
    ? ('★'.repeat(stars) + '☆'.repeat(3 - stars))
    : '✕✕✕';
  document.getElementById('result-story').textContent = win ? ch.storyWin : ch.storyLose;
  document.getElementById('res-correct').textContent = correct;
  document.getElementById('res-total').textContent = total;
  document.getElementById('res-score').textContent = pct + '%';
  document.getElementById('result-rewards').innerHTML = win
    ? `🌸 茜茜获得经验 +${ch.reward.exp}！${stars===3 ? '🌟 满分通关！炭治郎为你喝彩！' : '炭治郎说：「继续努力！」'}<br>茜茜的称号：${state.playerTitle} · Lv.${state.playerLevel}`
    : `炭治郎鼓励道：「茜茜，答对 ${correct}/${total} 道，还需 ${Math.ceil(total*0.6)} 道才能过关，我们再来！」`;

  showScreen('screen-result');
}

function retryStage() {
  if (state.currentChapter) startStage(state.currentChapter.id);
}

function goToMap() {
  if (state.currentGrade) {
    renderMapScreen(state.currentGrade);
    showScreen('screen-map');
  } else {
    showGradeSelect();
  }
}

// ======================== 排行榜 ========================
function renderRanking() {
  const container = document.getElementById('ranking-content');
  container.innerHTML = '';

  // 茜茜的成绩
  const totalStars = getTotalStars();
  const completedCount = getCompletedCount();

  container.innerHTML = `
    <div class="ranking-section">
      <h3>🌸 茜茜的冒险记录</h3>
      <div class="rank-row">
        <div class="rank-num">🌸</div>
        <div class="rank-info">
          <div class="rank-name">茜茜</div>
          <div class="rank-sub">${state.playerTitle} · Lv.${state.playerLevel} · 通关${completedCount}关</div>
        </div>
        <div class="rank-score">⭐${totalStars}</div>
      </div>
    </div>
    <div class="ranking-section">
      <h3>📊 各年级通关情况</h3>
      ${renderGradeRankRows()}
    </div>
    <div class="ranking-section">
      <h3>💡 成长提示</h3>
      <div style="padding:12px;background:rgba(30,20,50,.6);border-radius:10px;font-size:13px;line-height:1.8;color:#c8c0d0">
        ${getGrowthTip()}
      </div>
    </div>
  `;
}

function getCompletedCount() {
  let count = 0;
  Object.values(state.gradeProgress).forEach(gp => {
    Object.values(gp).forEach(cp => { if (cp.completed) count++; });
  });
  return count;
}

function renderGradeRankRows() {
  const allGrades = [...GRADES, ...SPECIAL_GRADES];
  return allGrades.map(g => {
    const prog = getGradeProgress(g.id);
    const gp = state.gradeProgress[g.id] || {};
    const completed = Object.values(gp).filter(cp => cp.completed).length;
    const total = g.chapters.length;
    return `<div class="rank-row">
      <div class="rank-num">${g.emoji}</div>
      <div class="rank-info">
        <div class="rank-name">${g.name}</div>
        <div class="rank-sub">${completed}/${total} 关 · 进度${prog.pct}%</div>
      </div>
      <div class="rank-score">⭐${prog.stars}</div>
    </div>`;
  }).join('');
}

function getGrowthTip() {
  const exp = state.playerExp;
  if (exp === 0) return '🌱 茜茜刚刚开始修行！快去一年级挑战第一关吧！';
  if (exp < 500) return '💪 茜茜已经初露锋芒！继续完成低年级关卡，积累更多经验！';
  if (exp < 1500) return '⚔️ 茜茜进步神速！挑战高年级知识点和小升初专题！';
  if (exp < 3000) return '🔥 茜茜已是高手！奥数拔高关卡在等你！';
  return '🌸 茜茜征服了数学王国！你是最强的数学鬼杀队士！';
}

// ======================== 特效 ========================
function setBattleLog(html) {
  document.getElementById('battle-log').innerHTML = html;
}

function floatEffect(text, cls, anchorId) {
  const anchor = document.getElementById(anchorId);
  if (!anchor) return;
  const rect = anchor.getBoundingClientRect();
  const el = document.createElement('div');
  el.className = `float-text ${cls}`;
  el.textContent = text;
  el.style.left = (rect.left + rect.width/2) + 'px';
  el.style.top = (rect.top + window.scrollY) + 'px';
  document.getElementById('float-effects').appendChild(el);
  setTimeout(() => el.remove(), 1300);
}

function animateCombatant(id, cls) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.remove('shake', 'attack');
  void el.offsetWidth;
  el.classList.add(cls);
  setTimeout(() => el.classList.remove(cls), 500);
}
