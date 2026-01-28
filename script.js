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
      { label: "恼火🤯", file: "audio/恼火.mp3" },
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
      { label: "对吗？", file: "audio/对吗？.mp3" },
      { label: "对的对的！", file: "audio/对的对的.mp3" },
      { label: "不对！", file: "audio/不对不对.mp3" },
    ]
  },
    {
    title: "🤭 别逗你白姐笑了",
    items: [
      { label: "想被骂了？那你也蛮贱的", file: "audio/那你也蛮贱的.mp3" },
      { label: "那你也蛮贱的", file: "audio/那你也蛮贱de.mp3" },
      { label: "他们就是贱！", file: "audio/他们就是贱.mp3" },
      { label: "大家就是贱！", file: "audio/大家就是贱.mp3" },
      { label: "怎么这么没用", file: "audio/怎么这么没用.mp3" },
      { label: "人类还69呢", file: "audio/人类还69呢.mp3" },
      { label: "假清高", file: "audio/假清高.mp3" },
      { label: "那咋了", file: "audio/那咋了.mp3" },
      { label: "主播是S", file: "audio/主播是S.mp3" },
      { label: "遇到难回答的问题就又不说话了", file: "audio/遇到难回答的问题就又不说话了.mp3" },
      { label: "直播间不是只搞黄色直播间吗", file: "audio/只搞黄色直播间.mp3" },
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
      { label: "达咩", file: "audio/达咩.mp3" },
      { label: "kimo...", file: "audio/kimo.mp3" },
      { label: "suki!", file: "audio/suki.mp3" }
    ]
  }
];

// ====== 自动生成按钮 ======
const container = document.getElementById("buttons-container");
const audioPlayer = document.getElementById("audio-player");

audioGroups.forEach(group => {
  // 分组标题
  const titleEl = document.createElement("h2");
  titleEl.className = "group-title";
  titleEl.textContent = group.title;
  container.appendChild(titleEl);

  // 按钮容器
  const groupDiv = document.createElement("div");
  groupDiv.className = "button-group";

  group.items.forEach(item => {
    const btn = document.createElement("button");
    btn.textContent = item.label;
    btn.onclick = () => {
      audioPlayer.src = item.file;
      audioPlayer.play().catch(e => {
        alert("❌ 音频播放失败！\n音频文件不存在：" + item.file);
        console.error("播放错误:", e);
      });
    };
    groupDiv.appendChild(btn);
  });

  container.appendChild(groupDiv);
});