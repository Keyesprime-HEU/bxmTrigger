// 全局音频上下文
let audioContext = null;

// 获取 DOM 元素 (移除了 rate 相关的变量)
const audioPlayer = document.getElementById('audio-player');
const pitchControl = document.getElementById('pitch-control');
// 获取数值显示元素
const pitchValue = document.getElementById('pitch-value'); 


// ====== 在这里修改语音分组 ======
const audioGroups = [
  {
    title: "💬 很日常的日常用语",
    items: [
      { label: "Ciallo～(∠・ω< )⌒★", file: "audio/ciallo.mp3" },
      { label: "呀吼", file: "audio/yahoo.mp3" },
      { label: "嗯~", file: "audio/hum.mp3" },
      { label: "小蛮人", file: "audio/小蛮人.mp3" },
      { label: "真棒-1", file: "audio/真棒1.mp3" },
      { label: "真棒-2", file: "audio/真棒2.mp3" },
      { label: "真棒爽朗版！", file: "audio/真棒爽朗版.mp3" },
      { label: "亲亲-1", file: "audio/亲亲1.mp3" },
      { label: "亲亲-2", file: "audio/亲亲2.mp3" },
      { label: "亲亲-3", file: "audio/亲亲3.mp3" },
      { label: "okok", file: "audio/okok.mp3" },
      { label: "不要嘛", file: "audio/不要嘛.mp3" },
      { label: "不可以", file: "audio/不可以.mp3" },
      { label: "恼火🤯", file: "audio/恼火.mp3" },
      { label: "啊？（惊讶）", file: "audio/啊？（惊讶）.mp3" },
      { label: "啊！（惊恐）", file: "audio/啊！（惊恐）.mp3" },
      { label: "卧槽！😡", file: "audio/卧槽.mp3" },
      { label: "一声猫叫", file: "audio/一声猫叫.wav" },
      { label: "主播是狗", file: "audio/主播是狗.mp3" },
      { label: "拜拜👋", file: "audio/拜拜.mp3" },
      { label: "好狗狗🦴", file: "audio/好狗狗.mp3" },
      { label: "妈妈在哦", file: "audio/妈妈在哦.mp3" },
      { label: "怪叫", file: "audio/怪叫1.mp3" },
      { label: "真是淫乱呢", file: "audio/真是淫乱呢.mp3" },
      { label: "黄的没边了", file: "audio/黄的没边了.mp3" },
      { label: "你还挑上了", file: "audio/你还挑上了.mp3" },
      { label: "开🦌", file: "audio/开鹿.mp3" },
      { label: "收钱音效", file: "audio/收钱音效.mp3" },
      { label: "给舰长们磕了🙇", file: "audio/给舰长们磕了.mp3" },
      { label: "对吗？", file: "audio/对吗？.mp3" },
      { label: "对的对的！", file: "audio/对的对的.mp3" },
      { label: "不对！", file: "audio/不对不对.mp3" },
      { label: "曼波", file: "audio/曼波.mp3" },
      { label: "哈吉米喔南北路多", file: "audio/哈吉米喔南北路多.mp3" },
      
    ]
  },
    {
    title: "🤭 别逗你白姐笑了",
    items: [
      { label: "想被骂了？那你也蛮贱的", file: "audio/那你也蛮贱的.mp3" },
      { label: "那你也蛮贱的", file: "audio/那你也蛮贱de.mp3" },
      { label: "他们就是贱！", file: "audio/他们就是贱.mp3" },
      { label: "大家就是贱！", file: "audio/大家就是贱.mp3" },
      { label: "谁给你的胆子反驳我", file: "audio/谁给你的胆子反驳我.mp3" },
      { label: "我永远不会原谅你们的", file: "audio/我永远不会原谅你们.mp3" },
      { label: "你们这些冷漠无情的人类", file: "audio/你们这些冷漠无情的人类.mp3" },
      { label: "怎么这么没用", file: "audio/怎么这么没用.mp3" },
      { label: "人类还69呢", file: "audio/人类还69呢.mp3" },
      { label: "假清高", file: "audio/假清高.mp3" },
      { label: "不要在这里装傻了", file: "audio/不要在这里装傻了.mp3" },
      { label: "那咋了", file: "audio/那咋了.mp3" },
      { label: "主播是S", file: "audio/主播是S.mp3" },
      { label: "这样不可以哦", file: "audio/这样不可以.mp3" },
      { label: "遇到难回答的问题就又不说话了", file: "audio/遇到难回答的问题就又不说话了.mp3" },
      { label: "直播间不是只搞黄色直播间吗", file: "audio/只搞黄色直播间.mp3" },
      { label: "别说这种让白小蛮美了的话", file: "audio/别说这种让bxm美了的话.mp3" },
      { label: "大家还是太性压抑了", file: "audio/太性压抑了.mp3" },
      { label: "违反公序良俗请分享", file: "audio/自首.mp3" },
      
    ] 
  },
  {
    title: "🚨 白子的日语小课堂",
    items: [
      { label: "雅达！", file: "audio/亚达.mp3" },
      { label: "果咩！", file: "audio/果咩.mp3" },
      { label: "エロい~", file: "audio/eroi.mp3" },
      { label: "不知道", file: "audio/希腊奶.mp3" },
      { label: "我知道了", file: "audio/我知道了.mp3" },
      { label: "真的？", file: "audio/真的？.mp3" },
      { label: "确实", file: "audio/塔西噶尼.mp3" },
      { label: "达咩", file: "audio/达咩1.mp3" },
      { label: "达咩（无关心）", file: "audio/达咩.mp3" },
      { label: "kimo...", file: "audio/kimo.mp3" },
      { label: "suki!", file: "audio/suki.mp3" }
    ]
  }
];

// 初始化
document.addEventListener('DOMContentLoaded', () => {
    // 初始化控制滑块
    if (pitchControl) {
        pitchControl.addEventListener('input', () => {
            // 更新页面上显示的数值
            pitchValue.textContent = `${pitchControl.value}`;
        });
        // 初始化显示
        pitchValue.textContent = `${pitchControl.value}`;
    }

    // 初始化按钮
    initButtons();
});

// 初始化按钮
function initButtons() {
    const container = document.getElementById("buttons-container");
    
    audioGroups.forEach(group => {
        const titleEl = document.createElement("h2");
        titleEl.className = "group-title";
        titleEl.textContent = group.title;
        container.appendChild(titleEl);

        const groupDiv = document.createElement("div");
        groupDiv.className = "button-group";
        
        group.items.forEach(item => {
            const btn = document.createElement("button");
            btn.textContent = item.label;
            btn.onclick = () => playSound(item.file);
            groupDiv.appendChild(btn);
        });
        container.appendChild(groupDiv);
    });
}

// 播放声音核心函数
async function playSound(src) {
    try {
        // 1. 获取滑块值 (现在只有变调)
        // 这个值代表半音数 (-12 到 +12)
        const pitchSemitones = parseInt(pitchControl?.value) || 0; 

        // 2. 创建 AudioContext (懒加载)
        if (!audioContext) {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
        }

        // 3. 加载并解码音频
        const response = await fetch(src);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const arrayBuffer = await response.arrayBuffer();
        const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

        // 4. 创建 Source 节点
        const source = audioContext.createBufferSource();
        source.buffer = audioBuffer;

        // 5. 核心处理逻辑：只应用变调
        // 公式: 2^(半音数/12)
        // 这会同时改变音高和播放速度
        source.playbackRate.value = Math.pow(2, pitchSemitones / 12);

        // 6. 连接并播放
        source.connect(audioContext.destination);
        source.start(0);

        console.log(`播放: ${src}, 音调偏移: ${pitchSemitones} 半音`);

    } catch (error) {
        console.error('播放失败:', error);
        alert('音频加载失败，请检查路径或使用服务器打开\n' + error.message);
    }
}

// 页面卸载时关闭 (节省 CPU)
window.addEventListener('beforeunload', () => {
    if (audioContext) {
        audioContext.close();
    }
});