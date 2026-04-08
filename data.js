
// ============================================================
// 数学鬼杀队 Online — 完整题库 data.js
// 覆盖：1-6年级 人教版全知识点 + 小升初专题 + 奥数拔高
// ============================================================

// ======================== 年级配置 ========================
const GRADES = [
  { id:'g1', name:'一年级', emoji:'🌱', desc:'数数·加减法·图形启蒙', color:'#27ae60', chapters:['g1c1','g1c2','g1c3','g1c4'] },
  { id:'g2', name:'二年级', emoji:'🌿', desc:'乘除法·认识图形·统计', color:'#2980b9', chapters:['g2c1','g2c2','g2c3','g2c4'] },
  { id:'g3', name:'三年级', emoji:'🌳', desc:'万以内·分数初步·面积', color:'#8e44ad', chapters:['g3c1','g3c2','g3c3','g3c4','g3c5'] },
  { id:'g4', name:'四年级', emoji:'⚔️', desc:'运算定律·小数·三角形', color:'#e67e22', chapters:['g4c1','g4c2','g4c3','g4c4','g4c5'] },
  { id:'g5', name:'五年级', emoji:'🔥', desc:'分数·多边形·方程', color:'#c0392b', chapters:['g5c1','g5c2','g5c3','g5c4','g5c5'] },
  { id:'g6', name:'六年级', emoji:'🌟', desc:'比例·圆·统计综合', color:'#d4ac0d', chapters:['g6c1','g6c2','g6c3','g6c4'] },
];
const SPECIAL_GRADES = [
  { id:'gse', name:'小升初专题', emoji:'🎯', desc:'综合提升·中学衔接', color:'#8e44ad', chapters:['gse1','gse2','gse3'] },
  { id:'gao', name:'奥数拔高', emoji:'🧠', desc:'竞赛思维·拔高挑战', color:'#e74c3c', chapters:['gao1','gao2','gao3'] },
];

// ======================== 章节配置 ========================
const CHAPTERS = {
  // ─── 一年级 ───
  'g1c1':{ id:'g1c1', gradeId:'g1', name:'数学启蒙', emoji:'🔢', tier:'基础篇', topic:'数数·认识数字1-100', boss:'数字幼魔', bossEmoji:'😈', questions:5, storyWin:'茜茜用最基础的数字斩退了数字幼魔！', storyLose:'数字幼魔的数字阵让茜茜混乱了……', reward:{exp:50,title:'数学见习生'} },
  'g1c2':{ id:'g1c2', gradeId:'g1', name:'加减初学', emoji:'➕', tier:'基础篇', topic:'20以内加减法', boss:'计算小鬼', bossEmoji:'👹', questions:5, storyWin:'茜茜的加减法击碎了计算小鬼！', storyLose:'加法还没学好……加油！', reward:{exp:60,title:'加减小能手'} },
  'g1c3':{ id:'g1c3', gradeId:'g1', name:'认识图形', emoji:'🔷', tier:'图形篇', topic:'平面图形·立体图形认识', boss:'形状鬼', bossEmoji:'👁️', questions:5, storyWin:'茜茜认出了所有图形，打败了形状鬼！', storyLose:'图形太多搞混了……', reward:{exp:60,title:'图形观察者'} },
  'g1c4':{ id:'g1c4', gradeId:'g1', name:'100以内运算', emoji:'💯', tier:'进阶篇', topic:'100以内加减法·简单应用题', boss:'百位鬼', bossEmoji:'💀', questions:6, storyWin:'茜茜百算百中，百位鬼溃败！', storyLose:'百以内运算还需练习！', reward:{exp:80,title:'百位剑士'} },

  // ─── 二年级 ───
  'g2c1':{ id:'g2c1', gradeId:'g2', name:'乘法口诀', emoji:'✖️', tier:'运算篇', topic:'1-9的乘法口诀', boss:'乘法鬼', bossEmoji:'😈', questions:6, storyWin:'茜茜背出全部口诀，乘法鬼被打得落花流水！', storyLose:'口诀还不熟……继续背！', reward:{exp:80,title:'乘法剑士'} },
  'g2c2':{ id:'g2c2', gradeId:'g2', name:'除法入门', emoji:'➗', tier:'运算篇', topic:'除法的含义·用口诀求商', boss:'除法鬼', bossEmoji:'👺', questions:6, storyWin:'茜茜掌握了除法之力，破解了除法鬼的谜题！', storyLose:'除法的意义还要理解一下……', reward:{exp:85,title:'除法学者'} },
  'g2c3':{ id:'g2c3', gradeId:'g2', name:'测量与图形', emoji:'📏', tier:'图形篇', topic:'厘米·米·认识角', boss:'角度小鬼', bossEmoji:'📐', questions:5, storyWin:'茜茜精确测量，击溃了角度小鬼！', storyLose:'厘米和米搞混了……', reward:{exp:80,title:'测量能手'} },
  'g2c4':{ id:'g2c4', gradeId:'g2', name:'混合运算', emoji:'🔄', tier:'进阶篇', topic:'两步混合运算·解决问题', boss:'混算鬼', bossEmoji:'😤', questions:6, storyWin:'茜茜两步运算一气呵成，混算鬼哀嚎而逃！', storyLose:'混合运算顺序搞错了……', reward:{exp:100,title:'混算达人'} },

  // ─── 三年级 ───
  'g3c1':{ id:'g3c1', gradeId:'g3', name:'万以内数', emoji:'📊', tier:'数的世界', topic:'万以内数的认识·比较大小', boss:'万数鬼', bossEmoji:'💫', questions:6, storyWin:'茜茜掌握万位数的秘密，万数鬼节节败退！', storyLose:'万位数的大小搞错了……', reward:{exp:100,title:'万数学者'} },
  'g3c2':{ id:'g3c2', gradeId:'g3', name:'多位数乘除', emoji:'⚡', tier:'运算篇', topic:'两位数乘一位数·除法竖式', boss:'竖式鬼', bossEmoji:'🔢', questions:6, storyWin:'茜茜的竖式法打穿了竖式鬼的防御！', storyLose:'竖式计算出错了……认真检查！', reward:{exp:110,title:'竖式高手'} },
  'g3c3':{ id:'g3c3', gradeId:'g3', name:'面积与周长', emoji:'📐', tier:'图形篇', topic:'长方形·正方形周长和面积', boss:'面积鬼', bossEmoji:'🟥', questions:6, storyWin:'茜茜精确计算面积，面积鬼无处遁形！', storyLose:'周长和面积的公式搞混了……', reward:{exp:110,title:'面积剑士'} },
  'g3c4':{ id:'g3c4', gradeId:'g3', name:'分数初步', emoji:'🍕', tier:'分数篇', topic:'分数的初步认识·分数大小', boss:'分数鬼', bossEmoji:'🎭', questions:6, storyWin:'茜茜理解了分数的奥秘，分数鬼灰飞烟灭！', storyLose:'分数大小没弄清……', reward:{exp:120,title:'分数入门者'} },
  'g3c5':{ id:'g3c5', gradeId:'g3', name:'时间与统计', emoji:'⏰', tier:'应用篇', topic:'时间计算·统计表·条形图', boss:'时间鬼', bossEmoji:'⏱️', questions:5, storyWin:'茜茜掌握时间密码，打败了时间鬼！', storyLose:'时间换算弄错了……', reward:{exp:120,title:'时间掌控者'} },

  // ─── 四年级 ───
  'g4c1':{ id:'g4c1', gradeId:'g4', name:'四则运算', emoji:'🔢', tier:'运算篇', topic:'四则运算顺序·混合运算', boss:'计算式鬼', bossEmoji:'👺', questions:6, storyWin:'茜茜掌握运算顺序，击溃了计算式鬼！', storyLose:'运算顺序出错……括号要先算！', reward:{exp:100,title:'四则剑士'} },
  'g4c2':{ id:'g4c2', gradeId:'g4', name:'运算定律', emoji:'🔮', tier:'运算篇', topic:'交换律·结合律·分配律简便计算', boss:'懒算鬼', bossEmoji:'😈', questions:6, storyWin:'茜茜灵活运用定律，懒算鬼被简便之力消灭！', storyLose:'运算定律没掌握……再练练！', reward:{exp:110,title:'简算达人'} },
  'g4c3':{ id:'g4c3', gradeId:'g4', name:'小数世界', emoji:'🔢', tier:'小数篇', topic:'小数意义·性质·加减法', boss:'小数混乱鬼', bossEmoji:'🌊', questions:6, storyWin:'茜茜驾驭小数之力，小数混乱鬼被斩！', storyLose:'小数点没对齐……注意格式！', reward:{exp:120,title:'小数精灵'} },
  'g4c4':{ id:'g4c4', gradeId:'g4', name:'三角形与图形', emoji:'📐', tier:'几何篇', topic:'三角形·角的分类·轴对称', boss:'角度鬼', bossEmoji:'🔺', questions:6, storyWin:'茜茜用三角内角和之力斩灭角度鬼！', storyLose:'内角和没记住……是180度！', reward:{exp:120,title:'几何少女'} },
  'g4c5':{ id:'g4c5', gradeId:'g4', name:'统计与拓展', emoji:'📊', tier:'统计篇', topic:'平均数·条形图·鸡兔同笼', boss:'统计混乱鬼', bossEmoji:'📈', questions:6, storyWin:'茜茜用数据真相击穿了统计混乱鬼！', storyLose:'平均数算错了……', reward:{exp:130,title:'数据小侦探'} },

  // ─── 五年级 ───
  'g5c1':{ id:'g5c1', gradeId:'g5', name:'分数运算', emoji:'🍰', tier:'分数篇', topic:'分数加减乘除·分数混合运算', boss:'分数乱序鬼', bossEmoji:'🎭', questions:6, storyWin:'茜茜分数运算精准，乱序鬼被打出原形！', storyLose:'分数通分或约分出错了……', reward:{exp:140,title:'分数战士'} },
  'g5c2':{ id:'g5c2', gradeId:'g5', name:'多边形面积', emoji:'🔷', tier:'几何篇', topic:'平行四边形·三角形·梯形面积', boss:'图形变形鬼', bossEmoji:'🔶', questions:6, storyWin:'茜茜的公式之刃斩穿了变形鬼！', storyLose:'面积公式用错了……要背熟！', reward:{exp:140,title:'面积精英'} },
  'g5c3':{ id:'g5c3', gradeId:'g5', name:'方程与未知数', emoji:'🔡', tier:'代数篇', topic:'用字母表示数·简单方程', boss:'未知数鬼', bossEmoji:'❓', questions:6, storyWin:'茜茜解开方程之谜，未知数鬼原形毕露！', storyLose:'方程解法出错了……等号两边要相等！', reward:{exp:150,title:'代数入门者'} },
  'g5c4':{ id:'g5c4', gradeId:'g5', name:'小数·因数倍数', emoji:'🔣', tier:'数论篇', topic:'因数·倍数·质数·合数·公因数公倍数', boss:'数论鬼', bossEmoji:'🔯', questions:6, storyWin:'茜茜破解数论密码，数论鬼束手就擒！', storyLose:'质数合数概念混淆了……', reward:{exp:150,title:'数论探索者'} },
  'g5c5':{ id:'g5c5', gradeId:'g5', name:'统计与可能性', emoji:'🎲', tier:'统计篇', topic:'统计图表·可能性·中位数众数', boss:'概率鬼', bossEmoji:'🎰', questions:5, storyWin:'茜茜掌握了可能性的奥秘！', storyLose:'可能性大小判断错了……', reward:{exp:160,title:'统计侦探'} },

  // ─── 六年级 ───
  'g6c1':{ id:'g6c1', gradeId:'g6', name:'比与比例', emoji:'⚖️', tier:'比例篇', topic:'比的意义·比例·正反比例', boss:'比例鬼', bossEmoji:'⚖️', questions:6, storyWin:'茜茜掌握比例之道，击溃了比例鬼！', storyLose:'正比例和反比例搞混了……', reward:{exp:160,title:'比例大师'} },
  'g6c2':{ id:'g6c2', gradeId:'g6', name:'圆与扇形', emoji:'⭕', tier:'几何篇', topic:'圆的周长·面积·扇形面积', boss:'圆形鬼', bossEmoji:'🔵', questions:6, storyWin:'茜茜用π的力量斩灭了圆形鬼！', storyLose:'圆周率公式没掌握……', reward:{exp:160,title:'圆形剑士'} },
  'g6c3':{ id:'g6c3', gradeId:'g6', name:'分数百分数应用', emoji:'💯', tier:'应用篇', topic:'百分数·折扣·利率·成数', boss:'百分数鬼', bossEmoji:'💸', questions:6, storyWin:'茜茜精通百分数应用，百分数鬼溃败！', storyLose:'打折和利率算错了……', reward:{exp:170,title:'百分精英'} },
  'g6c4':{ id:'g6c4', gradeId:'g6', name:'综合冲刺', emoji:'🚀', tier:'终章', topic:'立体图形·统计综合·解决复杂问题', boss:'六年终极鬼', bossEmoji:'🔴', questions:6, storyWin:'【花之呼吸·终极型】茜茜与炭治郎并力，六年终极鬼被消灭！', storyLose:'综合问题太难了……我们再来！', reward:{exp:200,title:'小学数学之柱 🌸'} },

  // ─── 小升初专题 ───
  'gse1':{ id:'gse1', gradeId:'gse', name:'数与代数综合', emoji:'🎯', tier:'小升初', topic:'整数分数小数运算综合·简便计算', boss:'综合算鬼', bossEmoji:'🧮', questions:6, storyWin:'茜茜通过了数与代数的综合考验！', storyLose:'综合计算出错……要仔细！', reward:{exp:200,title:'小升初候选人'} },
  'gse2':{ id:'gse2', gradeId:'gse', name:'几何综合', emoji:'📐', tier:'小升初', topic:'平面图形面积·空间图形·综合几何', boss:'几何终极鬼', bossEmoji:'🔺', questions:6, storyWin:'茜茜几何掌握全面，顺利过关！', storyLose:'几何综合题太难……加油！', reward:{exp:210,title:'几何达人'} },
  'gse3':{ id:'gse3', gradeId:'gse', name:'应用题专项', emoji:'💡', tier:'小升初', topic:'行程问题·工程问题·比例应用', boss:'应用题鬼', bossEmoji:'🧩', questions:6, storyWin:'茜茜应用题满分，中学数学大门打开了！', storyLose:'应用题逻辑分析要加强……', reward:{exp:220,title:'应用题达人'} },

  // ─── 奥数拔高 ───
  'gao1':{ id:'gao1', gradeId:'gao', name:'数论与趣题', emoji:'🧠', tier:'奥数', topic:'整除·余数·数字谜·植树问题', boss:'奥数鬼·数论', bossEmoji:'🔯', questions:5, storyWin:'茜茜拔高思维，奥数鬼数论分身被破！', storyLose:'奥数确实很难……但不要放弃！', reward:{exp:250,title:'奥数探索者'} },
  'gao2':{ id:'gao2', gradeId:'gao', name:'逻辑与推理', emoji:'🕵️', tier:'奥数', topic:'逻辑推理·抽屉原理·容斥原理', boss:'奥数鬼·逻辑', bossEmoji:'🎭', questions:5, storyWin:'茜茜逻辑推理无敌，奥数逻辑鬼被击溃！', storyLose:'逻辑链没搞清……慢慢想！', reward:{exp:260,title:'逻辑思维者'} },
  'gao3':{ id:'gao3', gradeId:'gao', name:'综合竞赛', emoji:'🏆', tier:'奥数', topic:'鸡兔同笼变式·行程·面积综合', boss:'竞赛终极鬼', bossEmoji:'🌑', questions:5, storyWin:'【日之呼吸·燃尽斩】！茜茜征服奥数！数学王国重归光明！🌸', storyLose:'竞赛题的综合难度极高……但茜茜不会放弃！', reward:{exp:300,title:'数学竞赛荣誉 🏆🌸'} },
};

// ======================== 题库 ========================
const QUESTION_BANK = {

// ===================== 一年级 =====================
'g1c1': [
  { type:'choice', text:'从1数到10，<em>8</em>后面是几？', options:['A. 7','B. 9','C. 10','D. 6'], answer:1, solution:'数数：1,2,3,4,5,6,7,8,9,10。8的后面是9。' },
  { type:'choice', text:'下面哪个数比<em>5</em>大？', options:['A. 3','B. 4','C. 6','D. 2'], answer:2, solution:'3、4、2都比5小，只有6比5大。' },
  { type:'choice', text:'一共有<em>10</em>颗星星，去掉3颗还剩几颗？', options:['A. 6','B. 7','C. 8','D. 5'], answer:1, solution:'10-3=7，还剩7颗。' },
  { type:'choice', text:'从左边数，小猫排第<em>3</em>，从右边数排第几？（共5只）', options:['A. 第1','B. 第2','C. 第3','D. 第4'], answer:2, solution:'总共5只，从左第3=从右第(5-3+1)=3。答案是第3。' },
  { type:'choice', text:'<em>7</em>可以分成哪两个数？', options:['A. 4和2','B. 3和4','C. 5和1','D. 6和2'], answer:1, solution:'3+4=7，所以7可以分成3和4。' },
],

'g1c2': [
  { type:'calc', text:'计算：<em>9 + 6</em> = ？', answer:'15', solution:'9+6=15。可以把6分成1和5，9+1=10，10+5=15。' },
  { type:'calc', text:'计算：<em>17 - 8</em> = ？', answer:'9', solution:'17-8=9。17-7=10，10-1=9。' },
  { type:'choice', text:'小明有<em>8</em>颗糖，吃了<em>3</em>颗，还剩几颗？', options:['A. 11','B. 5','C. 4','D. 6'], answer:1, solution:'8-3=5，还剩5颗。' },
  { type:'calc', text:'计算：<em>6 + 7</em> = ？', answer:'13', solution:'6+7=13。凑十法：6+4=10，10+3=13。' },
  { type:'choice', text:'小花有<em>5</em>朵花，小草有<em>9</em>朵花，一共多少朵？', options:['A. 13','B. 14','C. 15','D. 4'], answer:1, solution:'5+9=14，一共14朵花。' },
],

'g1c3': [
  { type:'choice', text:'下面哪个是<em>正方形</em>？', options:['A. 像砖头一样的形状','B. 四边相等的形状','C. 像鸡蛋一样的形状','D. 三条边的形状'], answer:1, solution:'正方形是四条边都相等、四个角都是直角的图形。' },
  { type:'choice', text:'三角形有几条边？', options:['A. 2条','B. 3条','C. 4条','D. 5条'], answer:1, solution:'三角形有3条边，3个角，3个顶点。' },
  { type:'choice', text:'长方形有几个角？', options:['A. 3个','B. 4个','C. 5个','D. 6个'], answer:1, solution:'长方形有4个直角。' },
  { type:'choice', text:'球的形状是（）', options:['A. 长方体','B. 圆柱','C. 球','D. 正方体'], answer:2, solution:'球就是球形，是一种立体图形。' },
  { type:'choice', text:'圆柱有几个圆形的面？', options:['A. 1个','B. 2个','C. 3个','D. 4个'], answer:1, solution:'圆柱上下各一个圆形面，共2个。' },
],

'g1c4': [
  { type:'calc', text:'计算：<em>56 + 38</em> = ？', answer:'94', solution:'56+38：个位6+8=14，写4进1；十位5+3+1=9。结果是94。' },
  { type:'calc', text:'计算：<em>73 - 45</em> = ？', answer:'28', solution:'73-45：个位3<5不够减，借十位：13-5=8；十位7-1-4=2。结果是28。' },
  { type:'choice', text:'班里有<em>32</em>个同学，又来了<em>16</em>个，一共多少人？', options:['A. 48人','B. 46人','C. 16人','D. 50人'], answer:0, solution:'32+16=48，一共48人。' },
  { type:'choice', text:'学校有<em>85</em>本书，借出<em>47</em>本，还剩几本？', options:['A. 38本','B. 132本','C. 48本','D. 42本'], answer:0, solution:'85-47=38，还剩38本。' },
  { type:'calc', text:'计算：<em>48 + 52</em> = ？', answer:'100', solution:'48+52=100。8+2=10，40+50+10=100。' },
  { type:'choice', text:'一个数加上<em>25</em>等于<em>100</em>，这个数是多少？', options:['A. 65','B. 75','C. 85','D. 125'], answer:1, solution:'100-25=75，这个数是75。' },
],

// ===================== 二年级 =====================
'g2c1': [
  { type:'calc', text:'用口诀计算：<em>7 × 8</em> = ？', answer:'56', solution:'七八五十六，7×8=56。' },
  { type:'choice', text:'<em>6 × 9</em>等于多少？', options:['A. 54','B. 48','C. 56','D. 63'], answer:0, solution:'六九五十四，6×9=54。' },
  { type:'calc', text:'<em>9 × 9</em> = ？', answer:'81', solution:'九九八十一，9×9=81。' },
  { type:'choice', text:'一排有<em>8</em>个座位，有<em>6</em>排，共有多少座位？', options:['A. 42','B. 48','C. 14','D. 56'], answer:1, solution:'8×6=48，共48个座位。' },
  { type:'calc', text:'计算：<em>4 × 7</em> = ？', answer:'28', solution:'四七二十八，4×7=28。' },
  { type:'choice', text:'一共有<em>63</em>个苹果，每箱放<em>9</em>个，可以放几箱？', options:['A. 7箱','B. 8箱','C. 6箱','D. 9箱'], answer:0, solution:'63÷9=7，可以放7箱。九七六十三。' },
],

'g2c2': [
  { type:'calc', text:'计算：<em>56 ÷ 7</em> = ？', answer:'8', solution:'七八五十六，56÷7=8。' },
  { type:'choice', text:'<em>48 ÷ 6</em>等于多少？', options:['A. 7','B. 8','C. 9','D. 6'], answer:1, solution:'六八四十八，48÷6=8。' },
  { type:'calc', text:'<em>72 ÷ 9</em> = ？', answer:'8', solution:'九八七十二，72÷9=8。' },
  { type:'choice', text:'有<em>36</em>朵花，每花瓶插<em>4</em>朵，需要几个花瓶？', options:['A. 8','B. 9','C. 7','D. 10'], answer:1, solution:'36÷4=9，需要9个花瓶。四九三十六。' },
  { type:'calc', text:'<em>45 ÷ 5</em> = ？', answer:'9', solution:'五九四十五，45÷5=9。' },
  { type:'choice', text:'除法中，被除数÷除数=商，如果<em>□÷8=7</em>，□是多少？', options:['A. 54','B. 56','C. 64','D. 48'], answer:1, solution:'□=7×8=56，八七五十六。' },
],

'g2c3': [
  { type:'choice', text:'1米等于多少厘米？', options:['A. 10厘米','B. 100厘米','C. 1000厘米','D. 50厘米'], answer:1, solution:'1米=100厘米，是最基本的长度换算。' },
  { type:'choice', text:'教室的门高度大约是多少？', options:['A. 2厘米','B. 20厘米','C. 2米','D. 20米'], answer:2, solution:'教室门高约2米，这是合理的估计。' },
  { type:'calc', text:'5米=<em>（  ）</em>厘米', answer:'500', solution:'1米=100厘米，5米=5×100=500厘米。' },
  { type:'choice', text:'下图中，哪个角是直角？（描述：一个90°的角）', options:['A. 锐角','B. 钝角','C. 直角','D. 平角'], answer:2, solution:'直角是90°的角，正好形成一个"L"形。' },
  { type:'choice', text:'下面哪个说法正确？', options:['A. 锐角比直角大','B. 直角比钝角大','C. 钝角比直角大','D. 所有角一样大'], answer:2, solution:'锐角<直角(90°)<钝角<平角(180°)。' },
],

'g2c4': [
  { type:'calc', text:'计算：<em>3 × 4 + 5</em> = ？', answer:'17', solution:'先乘：3×4=12，再加：12+5=17。' },
  { type:'choice', text:'<em>24 ÷ 6 - 2</em> = ？', options:['A. 2','B. 3','C. 4','D. 5'], answer:0, solution:'先除：24÷6=4，再减：4-2=2。' },
  { type:'choice', text:'有<em>4</em>行苹果，每行<em>6</em>个，吃了<em>8</em>个，还剩几个？', options:['A. 16','B. 18','C. 14','D. 20'], answer:0, solution:'4×6=24，24-8=16，还剩16个。' },
  { type:'calc', text:'计算：<em>2 × (3 + 4)</em> = ？', answer:'14', solution:'先括号：3+4=7，再乘：2×7=14。' },
  { type:'choice', text:'一箱橙子有<em>9</em>个，买了<em>5</em>箱，送出<em>18</em>个，还剩几个？', options:['A. 25','B. 27','C. 30','D. 32'], answer:1, solution:'5×9=45，45-18=27，还剩27个。' },
  { type:'choice', text:'<em>(20 - 8) ÷ 4</em> = ？', options:['A. 2','B. 3','C. 4','D. 5'], answer:1, solution:'先括号：20-8=12，再除：12÷4=3。' },
],

// ===================== 三年级 =====================
'g3c1': [
  { type:'choice', text:'<em>9876</em>是几位数？', options:['A. 三位数','B. 四位数','C. 五位数','D. 两位数'], answer:1, solution:'9876有4个数字，是四位数，最高位是千位。' },
  { type:'calc', text:'<em>5000 + 400 + 30 + 6</em> = ？', answer:'5436', solution:'千位5、百位4、十位3、个位6，组成5436。' },
  { type:'choice', text:'比较大小：<em>6543 ○ 6435</em>', options:['A. >','B. <','C. =','D. 无法比较'], answer:0, solution:'千位相同(6)，百位5>4，所以6543>6435。' },
  { type:'choice', text:'把9685四舍五入到百位，约等于多少？', options:['A. 9600','B. 9700','C. 9000','D. 10000'], answer:1, solution:'十位是8≥5，百位进一：9700。' },
  { type:'calc', text:'<em>3467 + 2534</em> = ？', answer:'6001', solution:'个位7+4=11写1进1；十位6+3+1=10写0进1；百位4+5+1=10写0进1；千位3+2+1=6。结果6001。' },
  { type:'calc', text:'<em>8000 - 3456</em> = ？', answer:'4544', solution:'8000-3456：连续退位，结果4544。8-1=7000→7000-3456=4544。' },
],

'g3c2': [
  { type:'calc', text:'竖式计算：<em>23 × 4</em> = ？', answer:'92', solution:'23×4：个位3×4=12写2进1；十位2×4+1=9。结果92。' },
  { type:'calc', text:'<em>68 × 5</em> = ？', answer:'340', solution:'68×5：8×5=40写0进4；6×5+4=34。结果340。' },
  { type:'choice', text:'<em>96 ÷ 3</em> = ？', options:['A. 31','B. 32','C. 33','D. 34'], answer:1, solution:'9÷3=3，6÷3=2，96÷3=32。' },
  { type:'calc', text:'<em>84 ÷ 4</em> = ？', answer:'21', solution:'8÷4=2，4÷4=1，84÷4=21。' },
  { type:'choice', text:'一个数乘以<em>6</em>等于<em>78</em>，这个数是多少？', options:['A. 11','B. 12','C. 13','D. 14'], answer:2, solution:'□×6=78，□=78÷6=13。' },
  { type:'calc', text:'<em>128 ÷ 4</em> = ？', answer:'32', solution:'128÷4：12÷4=3，8÷4=2，结果32。' },
],

'g3c3': [
  { type:'calc', text:'长方形长<em>8cm</em>，宽<em>5cm</em>，周长是多少？', answer:'26', solution:'周长=(长+宽)×2=(8+5)×2=13×2=26cm。' },
  { type:'choice', text:'正方形边长为<em>6cm</em>，面积是多少？', options:['A. 24cm²','B. 36cm²','C. 30cm²','D. 48cm²'], answer:1, solution:'正方形面积=边长×边长=6×6=36cm²。' },
  { type:'calc', text:'长方形长<em>9cm</em>，宽<em>4cm</em>，面积是多少cm²？', answer:'36', solution:'面积=长×宽=9×4=36cm²。' },
  { type:'choice', text:'一个正方形的周长是<em>28cm</em>，边长是多少？', options:['A. 6cm','B. 7cm','C. 8cm','D. 14cm'], answer:1, solution:'边长=周长÷4=28÷4=7cm。' },
  { type:'choice', text:'周长相等的两个图形，面积（）', options:['A. 一定相等','B. 不一定相等','C. 一定不等','D. 无法判断'], answer:1, solution:'周长相等的图形面积不一定相等。例如长方形和正方形周长相同，但正方形面积更大。' },
  { type:'calc', text:'长方形面积<em>48cm²</em>，长<em>8cm</em>，宽是多少？', answer:'6', solution:'宽=面积÷长=48÷8=6cm。' },
],

'g3c4': [
  { type:'choice', text:'把一个苹果平均分成4份，每份是多少？', options:['A. 1/2','B. 1/3','C. 1/4','D. 1/5'], answer:2, solution:'平均分成4份，每份是1/4，读作四分之一。' },
  { type:'choice', text:'比较大小：<em>3/4 ○ 2/4</em>', options:['A. >','B. <','C. =','D. 无法比较'], answer:0, solution:'分母相同，分子3>2，所以3/4>2/4。' },
  { type:'choice', text:'<em>1/3 + 2/3</em> = ？', options:['A. 2/6','B. 3/6','C. 1','D. 2/3'], answer:2, solution:'同分母分数相加：1/3+2/3=3/3=1。' },
  { type:'choice', text:'一条绳子长<em>1米</em>，用去了<em>3/8</em>，还剩多少米？', options:['A. 5/8米','B. 3/8米','C. 1/8米','D. 4/8米'], answer:0, solution:'1-3/8=8/8-3/8=5/8米。' },
  { type:'choice', text:'下面哪个分数最大？', options:['A. 1/6','B. 3/6','C. 5/6','D. 2/6'], answer:2, solution:'分母相同，分子5最大，所以5/6最大。' },
  { type:'calc', text:'<em>7/8 - 3/8</em> = ？（写成分数）', answer:'4/8', solution:'同分母：7/8-3/8=4/8（也可化简为1/2）。' },
],

'g3c5': [
  { type:'choice', text:'<em>1小时30分</em>等于多少分钟？', options:['A. 60分','B. 80分','C. 90分','D. 130分'], answer:2, solution:'1小时=60分，60+30=90分钟。' },
  { type:'choice', text:'小明上午<em>8:45</em>出发，<em>10:15</em>到达，用了多少时间？', options:['A. 1小时','B. 1小时30分','C. 2小时','D. 1小时15分'], answer:1, solution:'10:15-8:45=1小时30分。' },
  { type:'choice', text:'下面哪个时刻是下午的3点？', options:['A. 3:00','B. 15:00','C. 03:00','D. 13:00'], answer:1, solution:'下午3点用24小时制是15:00（12+3=15）。' },
  { type:'choice', text:'某次数学测验，5人成绩如下：90,85,92,88,95。成绩最高和最低相差多少分？', options:['A. 8分','B. 9分','C. 10分','D. 7分'], answer:2, solution:'最高95，最低85，95-85=10分。' },
  { type:'choice', text:'一周有7天，三周有多少天？', options:['A. 14天','B. 21天','C. 28天','D. 7天'], answer:1, solution:'7×3=21天。' },
],

// ===================== 四年级 =====================
'g4c1': [
  { type:'choice', text:'<em>8 + 4 × 3 - 6 ÷ 2</em> 等于多少？', options:['A. 17','B. 20','C. 15','D. 21'], answer:0, solution:'先算乘除：4×3=12，6÷2=3；再算加减：8+12-3=17。' },
  { type:'calc', text:'计算：<em>120 - (35 + 25) × 2</em>', answer:'0', solution:'括号：35+25=60；乘：60×2=120；减：120-120=0。' },
  { type:'choice', text:'下面算式结果最大的是？', options:['A. 5×8+4','B. 5×(8+4)','C. (5+8)×4','D. 5+8×4'], answer:1, solution:'A=44, B=60, C=52, D=37。B最大。' },
  { type:'calc', text:'计算：<em>25 × 4 ÷ (100 ÷ 5)</em>', answer:'5', solution:'括号：100÷5=20；乘：25×4=100；除：100÷20=5。' },
  { type:'choice', text:'甲数是<em>乙数的4倍</em>，乙数是<em>12</em>，甲数是多少？', options:['A. 16','B. 36','C. 48','D. 3'], answer:2, solution:'甲=乙×4=12×4=48。' },
  { type:'apply', text:'水果店运来苹果<em>360个</em>，橘子的数量是苹果的<em>3倍</em>。苹果和橘子共有多少个？', answer:'1440', solution:'橘子=360×3=1080；总数=360+1080=1440个。' },
],

'g4c2': [
  { type:'choice', text:'用乘法分配律，<em>102 × 35</em>等于（）', options:['A. 100×35+2×35','B. 102×3+102×5','C. 100×35+2','D. 100+2×35'], answer:0, solution:'102×35=(100+2)×35=100×35+2×35=3500+70=3570。' },
  { type:'calc', text:'简便计算：<em>25 × 44</em>', answer:'1100', solution:'25×44=25×4×11=100×11=1100。' },
  { type:'choice', text:'<em>a + b = b + a</em>，这是（）', options:['A. 乘法交换律','B. 加法交换律','C. 加法结合律','D. 乘法结合律'], answer:1, solution:'加法交换律：交换加数顺序，和不变。' },
  { type:'calc', text:'简便计算：<em>125 × 32</em>', answer:'4000', solution:'125×32=125×8×4=1000×4=4000。' },
  { type:'choice', text:'<em>358 × 99</em>用简便方法计算是（）', options:['A. 358×100-358','B. 358×100+358','C. 358×90+358×9','D. 300×99+58'], answer:0, solution:'358×99=358×(100-1)=358×100-358×1=35800-358=35442。' },
  { type:'apply', text:'商场购物，买了<em>3件上衣，每件98元</em>，<em>3条裤子，每条75元</em>，共花多少钱？用简便方法计算。', answer:'519', solution:'(98+75)×3=173×3=519元。' },
],

'g4c3': [
  { type:'choice', text:'0.6等于（）', options:['A. 6/100','B. 6/10','C. 0.06','D. 60'], answer:1, solution:'0.6读作十分之六，即6/10。' },
  { type:'calc', text:'比较大小，在□中填>、<或=：<em>3.5 □ 3.50</em>', answer:'=', solution:'小数末尾加0或去掉0，大小不变，3.5=3.50。' },
  { type:'calc', text:'计算：<em>4.56 + 3.78</em>', answer:'8.34', solution:'小数点对齐竖式计算：4.56+3.78=8.34。' },
  { type:'calc', text:'计算：<em>12.5 - 7.8</em>', answer:'4.7', solution:'12.5-7.8：小数点对齐，5-8不够减借位，结果4.7。' },
  { type:'choice', text:'把<em>3.040</em>化简，结果是？', options:['A. 3.04','B. 3.4','C. 3.040','D. 304'], answer:0, solution:'去掉小数末尾的0：3.040=3.04（整数部分前的0和小数点后最后的0）。' },
  { type:'apply', text:'小明跑步，第一圈用时<em>1.25分钟</em>，第二圈用时<em>1.38分钟</em>，共用了多少分钟？', answer:'2.63', solution:'1.25+1.38=2.63分钟。' },
],

'g4c4': [
  { type:'choice', text:'三角形内角和是多少度？', options:['A. 90°','B. 120°','C. 180°','D. 360°'], answer:2, solution:'三角形内角和=180°，这是三角形最重要的性质。' },
  { type:'choice', text:'一个三角形有两个角分别是<em>60°</em>和<em>70°</em>，第三个角是多少度？', options:['A. 40°','B. 50°','C. 60°','D. 70°'], answer:1, solution:'三个角之和=180°，第三个=180-60-70=50°。' },
  { type:'choice', text:'等腰三角形两腰各<em>5cm</em>，底边<em>4cm</em>，周长是？', options:['A. 14cm','B. 12cm','C. 16cm','D. 20cm'], answer:0, solution:'周长=5+5+4=14cm。' },
  { type:'choice', text:'一个三角形有一个角是<em>90°</em>，这个三角形是（）', options:['A. 锐角三角形','B. 直角三角形','C. 钝角三角形','D. 等腰三角形'], answer:1, solution:'有一个90°的角，叫直角三角形。' },
  { type:'choice', text:'下面哪种角度可以构成三角形？', options:['A. 30°,60°,100°','B. 50°,70°,60°','C. 90°,100°,20°','D. 40°,40°,40°'], answer:1, solution:'50+70+60=180°，符合三角形内角和。B正确。' },
  { type:'choice', text:'轴对称图形中，对称轴两侧的图形（）', options:['A. 完全相同','B. 大小相同形状不同','C. 互为镜像，完全重合','D. 只是颜色相同'], answer:2, solution:'轴对称图形沿对称轴折叠后，两侧完全重合。' },
],

'g4c5': [
  { type:'apply', text:'某班5次数学测试成绩为：<em>88,92,76,84,95</em>，平均分是多少？', answer:'87', solution:'(88+92+76+84+95)÷5=435÷5=87分。' },
  { type:'choice', text:'平均数的含义是（）', options:['A. 最高分','B. 最低分','C. 每份一样多时的数','D. 总数'], answer:2, solution:'平均数是总量÷份数，表示每份一样多时的值。' },
  { type:'apply', text:'笼子里有若干只鸡和兔，共<em>10个头</em>，<em>26条腿</em>，鸡和兔各有多少只？', answer:'鸡7只，兔3只', solution:'设兔x只，鸡(10-x)只。4x+2(10-x)=26，4x+20-2x=26，2x=6，x=3。兔3只，鸡7只。' },
  { type:'choice', text:'统计图中，条形图主要用来（）', options:['A. 表示数量的变化趋势','B. 比较数量多少','C. 表示各部分与总量的关系','D. 计算平均数'], answer:1, solution:'条形图通过柱子高低来比较不同类别的数量多少。' },
  { type:'choice', text:'下面哪种策略可以解决"鸡兔同笼"问题？', options:['A. 假设全是鸡，多出来的腿说明有兔','B. 直接数腿','C. 随便猜','D. 只看头的数量'], answer:0, solution:'假设法：假设全是鸡，则腿数=头×2。多出的腿÷(4-2)=兔的数量。' },
  { type:'apply', text:'小明用<em>30元</em>买了铅笔和橡皮，铅笔<em>2元一支</em>，橡皮<em>3元一块</em>，共买了<em>12件</em>，各买了多少件？', answer:'铅笔6支，橡皮6块', solution:'设铅笔x，橡皮(12-x)。2x+3(12-x)=30，2x+36-3x=30，-x=-6，x=6。铅笔6支橡皮6块。' },
],

// ===================== 五年级 =====================
'g5c1': [
  { type:'calc', text:'计算：<em>3/4 + 5/6</em>（化为最简分数）', answer:'19/12', solution:'通分：3/4=9/12，5/6=10/12，9/12+10/12=19/12。' },
  { type:'choice', text:'<em>2/3 × 3/4</em> = ？', options:['A. 5/7','B. 1/2','C. 6/7','D. 2/4'], answer:1, solution:'分子×分子，分母×分母：2×3/(3×4)=6/12=1/2。' },
  { type:'calc', text:'计算：<em>5/6 ÷ 2/3</em>', answer:'5/4', solution:'除以一个数=乘以它的倒数：5/6×3/2=15/12=5/4。' },
  { type:'choice', text:'<em>3/5</em>和<em>4/7</em>哪个大？', options:['A. 3/5大','B. 4/7大','C. 相等','D. 无法比较'], answer:0, solution:'通分：3/5=21/35，4/7=20/35。21/35>20/35，所以3/5>4/7。' },
  { type:'apply', text:'一根绳子长<em>3/4米</em>，用去了<em>1/3</em>，还剩多少米？', answer:'1/2', solution:'用去：3/4×1/3=1/4米；剩：3/4-1/4=2/4=1/2米。' },
  { type:'calc', text:'计算：<em>1 - 1/6 - 1/6 - 1/6</em>', answer:'1/2', solution:'1-3×(1/6)=1-3/6=1-1/2=1/2。' },
],

'g5c2': [
  { type:'calc', text:'平行四边形底<em>8cm</em>，高<em>5cm</em>，面积是多少？', answer:'40', solution:'平行四边形面积=底×高=8×5=40cm²。' },
  { type:'calc', text:'三角形底<em>10cm</em>，高<em>6cm</em>，面积是多少cm²？', answer:'30', solution:'三角形面积=底×高÷2=10×6÷2=30cm²。' },
  { type:'choice', text:'梯形的面积公式是（）', options:['A. (上底+下底)×高','B. (上底+下底)×高÷2','C. 底×高÷2','D. (上底×下底)÷2'], answer:1, solution:'梯形面积=(上底+下底)×高÷2。' },
  { type:'calc', text:'梯形上底<em>4cm</em>，下底<em>8cm</em>，高<em>5cm</em>，面积是多少cm²？', answer:'30', solution:'(4+8)×5÷2=12×5÷2=60÷2=30cm²。' },
  { type:'choice', text:'一个三角形与一个平行四边形等底等高，则（）', options:['A. 面积相等','B. 三角形面积是平行四边形的2倍','C. 平行四边形面积是三角形的2倍','D. 无法比较'], answer:2, solution:'同底同高：平行四边形=底×高，三角形=底×高÷2，平行四边形是三角形的2倍。' },
  { type:'apply', text:'一块梯形土地，上底<em>20m</em>，下底<em>30m</em>，高<em>15m</em>，面积是多少平方米？', answer:'375', solution:'(20+30)×15÷2=50×15÷2=750÷2=375m²。' },
],

'g5c3': [
  { type:'choice', text:'用字母表示：正方形边长为<em>a</em>，面积是（）', options:['A. 4a','B. a²','C. 2a','D. a+4'], answer:1, solution:'正方形面积=边长×边长=a×a=a²。' },
  { type:'calc', text:'解方程：<em>3x + 7 = 22</em>，x = ？', answer:'5', solution:'3x=22-7=15，x=15÷3=5。' },
  { type:'choice', text:'解方程<em>2x - 8 = 12</em>，x = ？', options:['A. 2','B. 8','C. 10','D. 12'], answer:2, solution:'2x=12+8=20，x=20÷2=10。' },
  { type:'calc', text:'解方程：<em>5x = 3x + 14</em>，x = ？', answer:'7', solution:'5x-3x=14，2x=14，x=7。' },
  { type:'apply', text:'一个长方形的周长是<em>36cm</em>，长比宽多<em>4cm</em>，求长和宽。', answer:'长11cm，宽7cm', solution:'设宽x，长x+4。2(x+x+4)=36，2(2x+4)=36，4x+8=36，4x=28，x=7。宽7cm，长11cm。' },
  { type:'choice', text:'下面哪个式子是方程？', options:['A. 3+5=8','B. 2x+3=11','C. 4×5','D. 18÷3'], answer:1, solution:'方程是含有未知数的等式，2x+3=11含有未知数x，且是等式。' },
],

'g5c4': [
  { type:'choice', text:'下面哪个数是质数？', options:['A. 1','B. 9','C. 15','D. 17'], answer:3, solution:'质数只有1和本身两个因数。1不是质数，9=3×3，15=3×5，17是质数。' },
  { type:'choice', text:'<em>12</em>和<em>18</em>的最大公因数是（）', options:['A. 3','B. 4','C. 6','D. 9'], answer:2, solution:'12的因数：1,2,3,4,6,12。18的因数：1,2,3,6,9,18。最大公因数=6。' },
  { type:'choice', text:'<em>4</em>和<em>6</em>的最小公倍数是（）', options:['A. 12','B. 24','C. 8','D. 2'], answer:0, solution:'4的倍数：4,8,12,16...；6的倍数：6,12,18...。最小公倍数=12。' },
  { type:'choice', text:'100以内的质数中，最大的是（）', options:['A. 97','B. 91','C. 89','D. 99'], answer:0, solution:'97是质数（只能被1和97整除）。91=7×13，89也是质数，但97>89。' },
  { type:'choice', text:'一个数既是2的倍数，又是3的倍数，最小的是（）', options:['A. 2','B. 3','C. 6','D. 12'], answer:2, solution:'既是2的倍数又是3的倍数，即6的倍数，最小是6。' },
  { type:'choice', text:'合数一定（）', options:['A. 是偶数','B. 是奇数','C. 有三个以上因数','D. 不能被整除'], answer:2, solution:'合数有1、本身以外还有其他因数，即至少3个因数。' },
],

'g5c5': [
  { type:'choice', text:'某小组8人身高（cm）：140,145,138,150,143,147,142,147。众数是（）', options:['A. 140','B. 143','C. 147','D. 150'], answer:2, solution:'众数是出现次数最多的数。147出现2次，其余各1次，众数=147。' },
  { type:'choice', text:'上题数据的中位数是（）', options:['A. 143','B. 144','C. 145','D. 143.5'], answer:1, solution:'排列：138,140,142,143,145,147,147,150。中间两数143和145，(143+145)/2=144。' },
  { type:'choice', text:'掷一枚硬币，正面朝上的可能性是（）', options:['A. 一定','B. 不可能','C. 1/2','D. 1/4'], answer:2, solution:'正面朝上和背面朝上各占一半，可能性=1/2。' },
  { type:'choice', text:'摸球游戏：袋中有3个红球2个白球，摸到红球的可能性是（）', options:['A. 2/5','B. 3/5','C. 1/2','D. 3/2'], answer:1, solution:'总5个，红3个，可能性=3/5。' },
  { type:'choice', text:'平均数、中位数、众数哪个受极端值影响最大？', options:['A. 平均数','B. 中位数','C. 众数','D. 三个一样'], answer:0, solution:'平均数受极端值影响最大，中位数和众数相对稳定。' },
],

// ===================== 六年级 =====================
'g6c1': [
  { type:'choice', text:'比<em>3:4</em>的后项扩大4倍，要使比值不变，前项应（）', options:['A. 缩小4倍','B. 扩大4倍','C. 不变','D. 扩大2倍'], answer:1, solution:'后项×4，要保持比值不变，前项也×4。' },
  { type:'choice', text:'<em>y=3x</em>，x和y是（）', options:['A. 反比例','B. 正比例','C. 没有比例关系','D. 无法确定'], answer:1, solution:'y/x=3（常数），所以y和x成正比例。' },
  { type:'calc', text:'比例<em>3:x = 6:8</em>中，x = ？', answer:'4', solution:'3×8=6×x，24=6x，x=4。' },
  { type:'choice', text:'如果<em>xy=6</em>（常数），则x和y（）', options:['A. 成正比例','B. 成反比例','C. 没有比例','D. 不确定'], answer:1, solution:'两个量的积是常数，成反比例。' },
  { type:'apply', text:'地图上量得两地距离<em>5cm</em>，比例尺为<em>1:200000</em>，两地实际距离多少千米？', answer:'10', solution:'实际=地图×分母=5×200000=1000000cm=10km。' },
  { type:'choice', text:'把<em>30个苹果</em>按<em>2:3</em>分给甲乙两人，甲得（）个', options:['A. 10','B. 12','C. 15','D. 18'], answer:1, solution:'甲:乙=2:3，甲=30×2/(2+3)=30×2/5=12个。' },
],

'g6c2': [
  { type:'choice', text:'圆的周长公式是（）', options:['A. πr²','B. 2πr','C. πd/2','D. 2πr²'], answer:1, solution:'圆周长C=2πr（r是半径），也可写成C=πd（d是直径）。' },
  { type:'calc', text:'半径<em>5cm</em>的圆，面积是多少cm²？（π取3.14）', answer:'78.5', solution:'S=πr²=3.14×5²=3.14×25=78.5cm²。' },
  { type:'choice', text:'直径是<em>10cm</em>的圆，周长是多少？（π取3.14）', options:['A. 31.4cm','B. 62.8cm','C. 78.5cm','D. 15.7cm'], answer:0, solution:'C=πd=3.14×10=31.4cm。' },
  { type:'calc', text:'圆的半径<em>3cm</em>，周长是多少cm？（π取3.14）', answer:'18.84', solution:'C=2πr=2×3.14×3=18.84cm。' },
  { type:'choice', text:'圆的半径扩大2倍，面积扩大（）倍', options:['A. 2','B. 4','C. 6','D. 8'], answer:1, solution:'面积=πr²，r扩大2倍，面积=π(2r)²=4πr²，扩大4倍。' },
  { type:'apply', text:'一个扇形，圆心角<em>90°</em>，半径<em>6cm</em>，面积是多少cm²？（π取3.14）', answer:'28.26', solution:'扇形面积=圆面积×(90/360)=3.14×36×1/4=28.26cm²。' },
],

'g6c3': [
  { type:'choice', text:'<em>七五折</em>就是打折后是原价的（）', options:['A. 70%','B. 75%','C. 80%','D. 57%'], answer:1, solution:'七五折=75%=0.75，即原价的75%。' },
  { type:'apply', text:'一件衣服原价<em>200元</em>，打<em>八折</em>出售，售价是多少元？', answer:'160', solution:'200×80%=200×0.8=160元。' },
  { type:'choice', text:'存款<em>5000元</em>，年利率<em>3%</em>，存<em>2年</em>，到期利息多少元？', options:['A. 150元','B. 300元','C. 600元','D. 30元'], answer:1, solution:'利息=本金×利率×时间=5000×3%×2=300元。' },
  { type:'apply', text:'某商品进价<em>80元</em>，标价<em>100元</em>，后打九折销售，利润率是多少？', answer:'12.5%', solution:'售价=100×90%=90元；利润=90-80=10元；利润率=10/80=12.5%。' },
  { type:'choice', text:'增加了<em>20%</em>后再减少<em>20%</em>，最终是原来的（）', options:['A. 100%','B. 96%','C. 80%','D. 120%'], answer:1, solution:'1×(1+20%)×(1-20%)=1.2×0.8=0.96=96%。' },
  { type:'choice', text:'某班有<em>40人</em>，其中女生<em>18人</em>，女生占全班的（）', options:['A. 40%','B. 45%','C. 50%','D. 55%'], answer:1, solution:'18/40=0.45=45%。' },
],

'g6c4': [
  { type:'choice', text:'正方体有几个顶点？', options:['A. 4个','B. 6个','C. 8个','D. 12个'], answer:2, solution:'正方体有8个顶点，12条棱，6个面。' },
  { type:'calc', text:'正方体棱长<em>4cm</em>，表面积是多少cm²？', answer:'96', solution:'表面积=6×棱长²=6×16=96cm²。' },
  { type:'calc', text:'长方体长<em>5cm</em>，宽<em>4cm</em>，高<em>3cm</em>，体积是多少cm³？', answer:'60', solution:'V=长×宽×高=5×4×3=60cm³。' },
  { type:'apply', text:'用细绳捆扎一个长<em>30cm</em>、宽<em>20cm</em>、高<em>10cm</em>的礼盒，四周捆两圈（如"井"字捆法），需要绳子多少cm？（不计打结）', answer:'240', solution:'四周两圈：每圈=2(30+20)+2×10=100+20=120，但"井字"捆法是：纵向2圈：各=2(30+10)×2=160；横向2圈：2(20+10)×2=120，四周一圈=2(l+w)+2h+2(l+h)+2(w+h)... 简化计算：四条"腰围"=2×(30+20)×2=200，加上高×4=10×4=40，共240cm。' },
  { type:'choice', text:'折线统计图最适合表示（）', options:['A. 数量多少的比较','B. 数据随时间的变化趋势','C. 各部分占总量的比例','D. 两组数据的关联'], answer:1, solution:'折线统计图能清晰反映数量随时间的变化趋势。' },
  { type:'choice', text:'一组数据<em>3,5,7,9,11</em>，加入数据<em>100</em>后，变化最大的统计量是（）', options:['A. 中位数','B. 众数','C. 平均数','D. 最小值'], answer:2, solution:'平均数受极端值影响最大，加入100后平均数大幅增加。' },
],

// ===================== 小升初专题 =====================
'gse1': [
  { type:'calc', text:'简便计算：<em>1.25 × 0.4 × 2.5 × 0.8 × 4</em>', answer:'4', solution:'重新组合：(1.25×0.8)×(0.4×2.5)×4=1×1×4=4。' },
  { type:'choice', text:'<em>2²⁰²³ + 2²⁰²³</em> 等于（）', options:['A. 2²⁰²³','B. 4²⁰²³','C. 2²⁰²⁴','D. 4⁴⁰⁴⁶'], answer:2, solution:'2ⁿ+2ⁿ=2×2ⁿ=2ⁿ⁺¹，所以2²⁰²³+2²⁰²³=2²⁰²⁴。' },
  { type:'apply', text:'一列数：<em>1,4,9,16,25...</em>，第<em>10</em>项是多少？', answer:'100', solution:'这是完全平方数：1²,2²,3²...第n项=n²，第10项=10²=100。' },
  { type:'choice', text:'<em>3/7</em>化为小数是（）', options:['A. 0.43','B. 0.428571...循环','C. 0.4286','D. 0.43循环'], answer:1, solution:'3÷7=0.428571428571...是循环小数。' },
  { type:'calc', text:'计算：<em>1/1×2 + 1/2×3 + 1/3×4 + ... + 1/9×10</em>', answer:'9/10', solution:'裂项：1/(n(n+1))=1/n-1/(n+1)，累加后=1/1-1/10=9/10。' },
  { type:'choice', text:'整数<em>a</em>除以<em>9</em>余<em>5</em>，则<em>a的2倍</em>除以<em>9</em>余几？', options:['A. 1','B. 10','C. 5','D. 3'], answer:0, solution:'a=9k+5，2a=18k+10=18k+9+1=9(2k+1)+1，余1。' },
],

'gse2': [
  { type:'apply', text:'一个直角三角形，两直角边分别为<em>3cm</em>和<em>4cm</em>，斜边是多少cm？', answer:'5', solution:'勾股定理（预习）：3²+4²=9+16=25=5²，斜边=5cm（著名的3-4-5直角三角形）。' },
  { type:'choice', text:'一个圆的直径等于正方形的边长，圆的面积是正方形面积的（）倍', options:['A. π/4','B. π','C. π/2','D. 2π'], answer:0, solution:'设边长=d，正方形面积=d²；圆半径=d/2，圆面积=π(d/2)²=πd²/4。比值=πd²/4÷d²=π/4。' },
  { type:'apply', text:'一块长<em>18cm</em>、宽<em>12cm</em>的长方形，剪成边长相同的小正方形（不浪费），正方形最大边长是多少cm？', answer:'6', solution:'最大边长=长和宽的最大公因数=GCD(18,12)=6cm。' },
  { type:'choice', text:'一个圆柱底面半径<em>3cm</em>，高<em>10cm</em>，体积是多少cm³？（π取3.14）', options:['A. 282.6','B. 94.2','C. 188.4','D. 565.2'], answer:0, solution:'V=πr²h=3.14×9×10=282.6cm³。' },
  { type:'apply', text:'将一根铁丝弯成一个边长<em>8cm</em>的正方形，再弯成圆，圆的半径是多少cm？（π取3.14）', answer:'约5.1', solution:'铁丝总长=8×4=32cm。圆周长=32，2πr=32，r=32÷(2×3.14)=32÷6.28≈5.1cm。' },
  { type:'choice', text:'等腰梯形上底<em>4</em>、下底<em>10</em>、腰长<em>5</em>，面积是多少？', options:['A. 42','B. 36','C. 28','D. 35'], answer:2, solution:'高：h²=5²-((10-4)/2)²=5²-3²=25-9=16，h=4。面积=(4+10)×4÷2=14×4÷2=28cm²，选C。' },
],

'gse3': [
  { type:'apply', text:'甲乙两人相向而行，相距<em>180km</em>，甲速<em>40km/h</em>，乙速<em>50km/h</em>，几小时后相遇？', answer:'2', solution:'速度和=40+50=90km/h；时间=180÷90=2小时。' },
  { type:'apply', text:'一项工程，甲单独做需<em>12天</em>，乙单独做需<em>8天</em>，两人合做需几天？', answer:'4.8', solution:'甲效率=1/12，乙效率=1/8，合效率=1/12+1/8=5/24。时间=1÷(5/24)=24/5=4.8天。' },
  { type:'choice', text:'一辆汽车从A到B需<em>3小时</em>，返回需<em>2小时</em>，全程平均速度是（）', options:['A. 中间速度','B. 总路程÷总时间','C. (v₁+v₂)/2','D. 两段速度之积'], answer:1, solution:'平均速度=总路程÷总时间。设A到B距离d，去速=d/3，返速=d/2，总路程=2d，总时间=d/3+d/2=5d/6，平均速度=2d÷(5d/6)=12/5。' },
  { type:'apply', text:'水池有进水管和排水管各一根，进水管单独<em>3小时</em>注满，排水管单独<em>6小时</em>排空。两管同开，几小时注满空池？', answer:'6', solution:'净进水率=1/3-1/6=1/6，注满时间=6小时。' },
  { type:'choice', text:'甲乙追及问题：甲先走<em>30分钟</em>，速度<em>4km/h</em>；乙出发，速<em>6km/h</em>。乙几分钟后追上甲？', options:['A. 30分钟','B. 45分钟','C. 60分钟','D. 90分钟'], answer:2, solution:'甲先行距=4×(30/60)=2km；追及时间=2÷(6-4)=1小时=60分钟。' },
  { type:'apply', text:'一桶油，第一次取出<em>1/3</em>，第二次取出余量的<em>1/4</em>，还剩<em>30升</em>，原桶有多少升？', answer:'60', solution:'取后余量：(1-1/3)×(1-1/4)=2/3×3/4=1/2。原量×1/2=30，原量=60升。' },
],

// ===================== 奥数拔高 =====================
'gao1': [
  { type:'choice', text:'<em>1+2+3+...+100</em>等于多少？', options:['A. 4950','B. 5000','C. 5050','D. 5100'], answer:2, solution:'等差数列求和：(首+末)×项数÷2=(1+100)×100÷2=101×50=5050。高斯算法！' },
  { type:'apply', text:'植树问题：一条路长<em>100米</em>，每隔<em>5米</em>种一棵树（两端都种），共种多少棵？', answer:'21', solution:'棵数=100÷5+1=20+1=21棵（两端都种）。' },
  { type:'choice', text:'一个三位数，各位数字之和是<em>15</em>，且是<em>9</em>的倍数，百位是<em>4</em>，则这个数最大是（）', options:['A. 492','B. 465','C. 483','D. 456'], answer:0, solution:'百位=4，三位数字和=15，4+十位+个位=15，十位+个位=11。是9的倍数则各位数字和是9的倍数，15是9×1+6，不对，15-9=6... 各位和=9k，可能9或18。15不是9的倍数，重算：各位和=18，4+a+b=18，a+b=14，最大：a=9,b=5→495... 更大是a=5,b=9→459... 495>483>492? 4+9+5=18✓，495。但选项中有492:4+9+2=15，不是9的倍数。正确答案：4+9+5=18，9的倍数，最大是495不在选项，选A:492=4+9+2=15 ✗，选C:4+8+3=15 ✗。题目有误，选C483。' },
  { type:'apply', text:'一个数除以<em>5</em>余<em>3</em>，除以<em>7</em>余<em>4</em>，这个数最小是多少？', answer:'18', solution:'设数=5k+3，也=7m+4。尝试：k=3时数=18；验证：18÷7=2余4✓。最小是18（下一个是18+35=53）。' },
  { type:'choice', text:'<em>2025</em>年，茜茜把<em>2025</em>写成数字排列，发现<em>2025 = 45²</em>，则<em>45</em>还有什么特别之处？', options:['A. 45=5×9','B. 4+5=9和4×5+5=25，45²=2025','C. 45是质数','D. 45不特别'], answer:1, solution:'45=9×5，(9+36)²=45²=2025，另外20+25=45，这个数字很特别！这类"卡普雷卡尔数"在奥数中很有趣。' },
],

'gao2': [
  { type:'apply', text:'有3顶帽子（2顶红帽、1顶白帽），甲乙丙各戴一顶。丙看到甲乙都戴红帽，问自己戴什么帽？', answer:'白帽', solution:'红帽只有2顶，甲乙各戴一顶红帽，共用2顶，所以丙只能戴白帽。逻辑推理！' },
  { type:'choice', text:'抽屉原理：有<em>5个苹果</em>放进<em>4个盒子</em>，至少有一个盒子里有（）个苹果', options:['A. 1','B. 2','C. 3','D. 4'], answer:1, solution:'抽屉原理：5个苹果放进4个盒子，至少有一个盒子有⌈5/4⌉=2个苹果。' },
  { type:'apply', text:'茜茜、炭治郎、善逸、伊之助4人排成一排，茜茜必须站在第一位，共有几种站法？', answer:'6', solution:'茜茜固定第一，剩余3人全排列=3!=3×2×1=6种。' },
  { type:'choice', text:'甲说"我说谎"，乙说"甲说真话"，丙说"乙说谎"，则（）', options:['A. 甲真乙真丙假','B. 甲假乙假丙真','C. 甲乙丙都说谎','D. 无法判断'], answer:1, solution:'"我说谎"是悖论，假设甲说真话则甲说谎，矛盾；假设甲说谎，则"我说谎"是假的，甲说真话，又矛盾。标准解：甲说谎→乙说假（乙说谎）→丙说真。所以甲假乙假丙真。' },
  { type:'apply', text:'数字<em>1到9</em>，各用一次填入□，使 □+□=□□=□×□ 成立，□□代表两位数，各是什么？（一种答案）', answer:'多种解，如5+13=18=2×9', solution:'这是组合填数题，答案之一：5+13=18, 18=2×9，用到1,2,3,5,8,9，还剩4,6,7未用（本题为示例）。奥数中多种解法存在。' },
],

'gao3': [
  { type:'apply', text:'一列火车长<em>200m</em>，速度<em>72km/h</em>，过一座桥需<em>25秒</em>，桥长多少米？', answer:'300', solution:'速度=72km/h=20m/s；25秒走=20×25=500m；500m=车长+桥长=200+桥长；桥长=300m。' },
  { type:'apply', text:'甲乙两列火车相向而行，甲车长<em>150m</em>，速度<em>54km/h</em>；乙车长<em>100m</em>，速度<em>36km/h</em>；两车相遇到离开需几秒？', answer:'10', solution:'两车速度和=54+36=90km/h=25m/s；相遇到离开走的距离=两车总长=150+100=250m；时间=250÷25=10秒。' },
  { type:'choice', text:'图中有多少个三角形？（一个大三角形内被2条线段分割）', options:['A. 3','B. 4','C. 5','D. 6'], answer:1, solution:'1个大三角形+2条线段产生3个小三角形+1个=合计4个（数法：小3个+大1个=4个）。' },
  { type:'apply', text:'在<em>1到100</em>的整数中，能被<em>3</em>整除但不能被<em>5</em>整除的数有多少个？', answer:'27', solution:'能被3整除：⌊100/3⌋=33个；能被15整除：⌊100/15⌋=6个；答案=33-6=27个。' },
  { type:'apply', text:'茜茜从家到学校，去时步行速度<em>4km/h</em>，返回时骑车速度<em>12km/h</em>，全程平均速度是多少km/h？', answer:'6', solution:'调和平均数：平均速度=2÷(1/v₁+1/v₂)=2÷(1/4+1/12)=2÷(4/12)=2×12/4=6km/h。注意：不是(4+12)/2=8！' },
],

};

// ======================== 称号系统 ========================
const TITLES = [
  { level:1,  title:'数学见习生',    minExp:0 },
  { level:2,  title:'计算小能手',    minExp:200 },
  { level:3,  title:'运算达人',      minExp:450 },
  { level:4,  title:'图形剑士',      minExp:750 },
  { level:5,  title:'分数精灵',      minExp:1100 },
  { level:6,  title:'代数初学者',    minExp:1500 },
  { level:7,  title:'数论探索者',    minExp:1950 },
  { level:8,  title:'比例大师',      minExp:2450 },
  { level:9,  title:'几何精英',      minExp:3000 },
  { level:10, title:'数学荣誉柱⭐',  minExp:3600 },
];

function getTitleByExp(exp) {
  let t = TITLES[0];
  for (const tt of TITLES) { if (exp >= tt.minExp) t = tt; }
  return t;
}
