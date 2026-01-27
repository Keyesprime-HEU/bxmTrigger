// ====== 在这里修改你的语音分组！ ======
const audioGroups = [
  {
    title: "💬 很日常的日常用语",
    items: [
      { label: "Ciallo～(∠・ω< )⌒★", file: "audio/ciallo.mp3" },
      { label: "小蛮人真棒", file: "audio/小蛮人真棒.mp3" },
      { label: "恼火🤯", file: "audio/恼火.mp3" },
      { label: "拜拜👋", file: "audio/拜拜.mp3" },
      { label: "好狗狗🦴", file: "audio/好狗狗.mp3" },
      { label: "怪叫", file: "audio/怪叫1.mp3" },
      { label: "真是淫乱呢", file: "audio/真是淫乱呢.mp3" },
      { label: "收钱音效", file: "audio/收钱音效.mp3" },
      { label: "不对！", file: "audio/不对不对.mp3" }
    ]
  },
    {
    title: "🤭 别逗你白姐笑了",
    items: [
      { label: "那你也蛮贱的", file: "audio/那你也蛮贱的.mp3" },
      { label: "人类还69呢", file: "audio/人类还69呢.mp3" },
      { label: "那男同还当搅屎棍呢", file: "audio/男同还当搅屎棍呢.mp3" },
      { label: "假清高", file: "audio/假清高.mp3" },
      { label: "主播是S", file: "audio/主播是S.mp3" },
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
      { label: "真的？", file: "audio/真的？.mp3" },
      { label: "达咩", file: "audio/达咩.mp3" }
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