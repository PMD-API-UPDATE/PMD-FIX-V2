/**
8888888b.   .d88888b.  888b     d888 8888888 
888   Y88b d88P" "Y88b 8888b   d8888   888   
888    888 888     888 88888b.d88888   888   
888   d88P 888     888 888Y88888P888   888   
8888888P"  888     888 888 Y888P 888   888   
888 T88b   888     888 888  Y8P  888   888   
888  T88b  Y88b. .d88P 888   "   888   888   
888   T88b  "Y88888P"  888       888 8888888                                                                                         
                                                                                                                                      
* @project_name 𓄂✘𝐑o͜͡M̸i͜͡🥀🅱Ѻ𝐓🇵🇰𓅂
* @authors Prabath Kumara & sachibot-team(Sachintha) <https://github.com/prabathLK>
* @description The main hope of creating this bot is to take full advantage of the WhatsApp app and make its work easier
* @link <https://github.com/prabathLK/PRABATH-MD>
* @version 2.0.5

© 2023 Prabath Kumara, SACHI-BOT. All rights reserved.
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.*/



const LANG = {
  en: {
    bingenq: "❌ *Please give me the first few numbers of the card!*",
    xvdlq: "❌ *Please give me a text or url that I want to search!*",
    twitterq: "❌ *Please give me a twitter video url!*",
    emojiq: "❌ *Please give me a emoji!*",
    sisubq: "❌ *Please give me a name in sinhala subtitle!*",
    graphq: "❌ *Give me the formula of the graph you want!*",
    ttdlq: "❌ *Please give me a tik tok video or image url!*",
    fbdlq: "❌ *Please give me a facebook video url!*",
    songq: "❌ *Please give me a text or url that I want to search!*",
    videoq: "❌ *Please give me a text or url that I want to search!*",
    imagineq: "❌ *Please the text I need to make the image!*",
    deviceq: "❌ *Please mention a message!*",
    ipq: "❌ *Please Give Me A  Ip address!* ",
    newgroupq: "❌ *Input is incorrect, please enter below*\n\nGroup name : Group desc : hello",
    saveq: "❌ *Please mention Status video/photo!*",
    gitcloneq: "❌ *Please Give me a Github Reposity Url!*",
    helpq: "❌ *Please Give me A Command Name!*",
    surlq: "❌ *Please Give Me A Url!*",
    ttsq: "❌ *Please Give Me A Text!*",
    wameq: "❌ *Please Give Me A User!*",
    img2url: "❌ *Please Mention Image!*",
    fancyq: "❌ *Please Give Me Text!*",
    trtq: "❌ *Please Give Me A Text!*",
    toimgq: "*❌ Please Give Me A Sticker!*",
    pdfq: "❌ *give me image links. ex:  .pdf <image_link_1.jpg>,<image_link_2.jpg>,<image_link_3.jpg>,<image_link_4.jpg>,...*",
    applyq: "❌ *Please reply to a message!*",
    igq: "❌ *Please give me Instagram URL*",
    apkq: "❌ *Need application name or url*",
    gdriveq: "❌ *Please give me a google_drive url*",
    mediafireq: "❌ *Please give me mediafire url*",
    ssq: "❌ *Please Give Me A Url*",
    findq: "*❌ Please Give Me A Video/Audio message*",
    ytsq: "❌ *Please Give Me A Text*",
    spotifyq: "❌ *Please Give me Spotify url or query for search*",
    banq: "❌ *Please Give Me A User*",
    reportq: "❌ *Please mention a text*",
    kapd: "❌ *Please Give Me A Participant*",
    htagq: "❌ *Please give me a text or media message*",
    groupupdates: "❌ *Please give me A text!*",
    gdpq: "❌ *Please Give me A Image*",
    ppq: "❌ *Please Give me A Image*",
    logoq: "❌ *Please Give Me A Text*",
    editq: "❌ *Please Give me A Image*",
    imgq: "❌ *Please Give Me A Text*",
    joinq: "❌ *Please Give Me A WhatsApp Group Url*",
    npmq: "❌ *Please provide the package name of the npm you want!*",
    movieq: "❌ *Please Give Me A Movie Name*",
    weatherq: "❌ *Please Give Me A Location*",
    lyricq: "❌ *Please give me a lyrics name*",
    gitq: "❌ *Please Give Me A Github UserName*",
    attpTtp: "*❌ Please Give Me A Text*",
    findapkq: "❌ *Need application name or url*",
    mp4audioq: "❌ *Please Give Me A Video*",
    stickerq: "❌ *Please mention a Video/Image/Gif.*",
    stealq: "❌ *Please mention a Sticker.*",
    amuteq: "❌ *Please Give me time!!*\n\n🕘 *example:- .automute 10m*\n*.automute 10s*\n*.automute 2h*",
    aunmuteq: "❌ *Please Give me time!!*\n\n🕘 *example:- .autounmute 10m*\n*.autounmute 10s*\n*.autounmute 2h*",
    img2qrq: "❌ *Please Give Me A Image*",
    toqrq: "❌ *Please Give Me A Image*",
    capcutq: "❌ *Please Give me CapCut template Url!*",
    removebgq: "❌ *Please Give Me A Image*",
    calq: "❌ *Please give me Number* \n\n *e.x:- .cal 2 + 1*",
    sendaudioq:  "❌ *Incorrect information entry*\n\n      ✔️ *Enter below correctly,* 👇\n\n> 12436318251135639@g.us , 10 , Dj nonstop , audio\n\n> your group jid , count , topic , type your mimeType\n\n✨ This is a process of uploading random songs to a group.",
    sendmsgq: "❌ *Incorrect information entry*\n\n✔️ *Enter below correctly,* 👇\n\n12036318251135639@g.us , hello i am 𓄂✘𝐑o͜͡M̸i͜͡🥀🅱Ѻ𝐓🇵🇰𓅂",
    sendtagq: "❌ *Incorrect information entry*\n\n✔️ *Enter below correctly,* 👇\n\n12036318251135639@g.us , hello everyone 👋",
    readmoreq: "❌ *Incorrect information entry*\n\n✔️ *Enter below correctly,* 👇\n\n.readmore hello , i am 𓄂✘𝐑o͜͡M̸i͜͡🥀🅱Ѻ𝐓🇵🇰𓅂 🫣",
    addreplyq: "❌ *Incorrect information entry*\n\n✔️ *Enter below correctly,* 👇\n\n .addreply hi+hello bro",
    addvoiceq: "❌ *Incorrect information entry*\n\n✔️ *Enter below correctly,* 👇\n\n .addvoice hi+<github uploaded audio url>\n\n*1 || I NEED HELP!*\n*2 || HOW TO GET GITHUB-AUDIO-URL?*",



    err: "❌ *I Couldn't find anything. Please try again later...*",
    videoerror: "⚠️ *This video is too big so it cannot be sent as a video.  Please select the document type.*",
    audioerror: "⚠️ *This audio is too big so it cannot be sent as a audio.  Please select the document type.*",
    fbchange: "⚠️ *This video has failed to download. But I will give it to you in another way…*",
    maxsize: "❌ *This file has exceeded the download limit.*",
data: {
     isOwner: "⛔ *THIS IS AN OWNER COMMAND.*",
     isGroup: "⛔ *THIS COMMAND ONLY FOR GROUPS.*",
     isAdmins: "⛔ *THIS COMMAND ONLY FOR ADMINS.*",
     isBotAdmins: "⛔ *First, Give Admin To PRABATH-MD BOT In The Group*",
},
  },
  si: {
    bingenq: "❌ *කරුණාකර මට කාඩ්පතේ මුල් අංක කිහිපය ලබාදෙන්න!*",
    xvdlq: "❌ *කරුණාකර සෙවීමට අවශ්‍ය title එකක් හෝ url එකක් දෙන්න!*",
    twitterq: "❌ *කරුණාකර මට twitter video Url එකක් ලබාදෙන්න!*",
    emojiq: "❌ *කරුණාකර මට ඉමොජියක් දෙන්න!*",
    sisubq: "❌ *කරුණාකර මට සිංහල උපසිරැසියක නමක් ලබාදෙන්න!*",
    graphq: "❌ *කරුණාකර ඔබට අවශ්‍ය ප්‍රස්තාරයේ සූත්‍රය මට ලබාදෙන්න!*",
    ttdlq: "❌ *කරුණාකර මට Tiktok video හෝ image Url එකක් ලබාදෙන්න!*",
    fbdlq: "❌ *කරුණාකර මට Facebook video Url එකක් ලබාදෙන්න!*",
    songq: "❌ *කරුණාකර සෙවීමට අවශ්‍ය title එකක් හෝ url එකක් දෙන්න!*",
    videoq: "❌ *කරුණාකර සෙවීමට අවශ්‍ය title එකක් හෝ url එකක් දෙන්න!*",
    imagineq: "❌ *කරුණාකර image එක සෑදීමට අවශ්‍ය text එක ලබාදෙන්න!*",
    deviceq: "❌ *කරුණාකර message එකක් mention කරන්න!*",
    ipq: "❌ *කරුණාකර මට Ip ලිපිනයක් ලබා දෙන්න!* ",
    newgroupq: "❌ *ඇතුලත් කිරීම වැරදීයි, පහත ලෙස ඇතුලත් කරන්න*\n\nගෘපයේ නම : Group desc එක : හායි",
    saveq: "❌ *කරුණාකර මට status video/photo එකක් mention කරන්න!*",
    gitcloneq: "❌ *කරුණාකර මට Github Reposity Url එකක් දෙන්න!*",
    helpq: "❌ *කරුණාකර මට විදානයක නමක් ලබාදෙන්න!*",
    surlq: "❌ *කරුණාකර මට Url එකක් දෙන්න!*",
    ttsq: "❌ *කරුණාකර මට Text එකක් දෙන්න!*",
    wameq: "❌ *කරුණාකර මට පුද්ගලයකු mention කරන්න!*",
    img2urlq: "❌ *කරුණාකර මට image එකක් ලබාදෙන්න!*",
    fancyq: "*❌ කරුණාකර මට Text එකක් දෙන්න!*",
    trtq: "❌ *කරුණාකර ට්‍රාන්ස්ලේට් කිරීමට අවශ්‍ය Text එක ලබාදෙන්න!*",
    toimgq: "*❌ කරුණාකර මට Sticker එකක් ලබාදෙන්න!*",
    pdfq: "*❌ කරුණාකර image url ලබාදෙන්න ex:  .pdf <image_link_1.jpg>,<image_link_2.jpg>,<image_link_3.jpg>,<image_link_4.jpg>,...*",
    applyq: "❌ *කරුණාකර මැසේජ් එකක් mention කරන්න!*",
    igq: "❌ *කරුණාකර මට Instagram URL එකක් දෙන්න!*",
    apkq: "❌ *කරුණාකර මට යෙදුමේ නම හෝ url එකක් අවශ්‍යයි!*",
    gdriveq: "❌ *කරුණාකර මට google_drive url එකක් දෙන්න!*",
    mediafireq: "❌ *කරුණාකර මට mediafire url එකක් දෙන්න!*",
    ssq: "❌ *කරුණාකර මට Url එකක් ලබාදෙන්න!*",
    findq: "*❌ කරුණාකර මට video/audio පණිවිඩයක් mention කරන්න!*",
    ytsq: "❌ *කරුණාකර මට Text එකක් ලබාදෙන්න*",
    spotifyq: "❌ *කරුණාකර මට Spotify url හෝ සෙවීම සඳහා Text එකක් ලබාදෙන්න!*",
    banq: "❌ *කරුණාකර මට පරිශීලකයෙකු ලබා දෙන්න!*",
    reportq: "❌ *කරුණාකර  Text එකක් mention කරන්න!*",
    kapd: "❌ *කරුණාකර මට පරිශීලකයකු ලබාදෙන්න!*",
    htagq: "❌ *කරුණාකර මට කෙටි පණිවිඩයක් හෝ මාධ්‍ය පණිවිඩයක් දෙන්න!*",
    groupupdates: "❌ *කරුණාකර මට ඔබට අදාල Text එක ලබාදෙන්න!*",
    gdpq: "❌ *කරුණාකර මට image එකක් ලබාදෙන්න!*",
    ppqq: "❌ *කරුණාකර මට image එකක් ලබාදෙන්න!*",
    logoq: "❌ *කරුණාකර මට Text එකක් ලබාදෙන්න!*",
    editq: "❌ *කරුණාකර මට image එකක් ලබාදෙන්න!*",
    imgq: "❌ *කරුණාකර මට Text එකක් ලබාදෙන්න!*",
    joinq: "❌ *කරුණාකර මට WhatsApp Group Url එකක් දෙන්න!*",
    npmq: "❌ *කරුණාකර ඔබට අවශ්‍ය npm එකෙහි package name එක ලබාදෙන්න!*",
    movieq: "❌ *කරුණාකර මට චිත්‍රපටයේ නමක් ලබාදෙන්න!*",
    weatherq: "❌ *කරුණාකර මට Location එකක් ලබාදෙන්න!*",
    lyricq: "❌ *කරුණාකර මට ගී පද නාමයක් දෙන්න!*",
    gitq: "❌ *කරුණාකර මට Github පරිශීලක නාමයක් දෙන්න!*",
    attpTtp: "*❌ කරුණාකර මට Text එකක් ලබාදෙන්න!*",
    findapkq: "❌ *කරුණාකර මට යෙදුමේ නම හෝ url ලබාදෙන්න!*",
    mp4audioq: "❌ *කරුණාකර මට Video එකක් ලබාදෙන්න!*",
    stickerq: "❌ *කරුණාකර Video/Image/Gif එකක් mention කරන්න*",
    stealq: "❌ *කරුණාකර Sticker එකක් mention කරන්න*",
    automuteq: "❌ *කරුණාකර මට කාලය දෙන්න!!*\n\n🕘 *උදාහරණය:- .automute 20s*\n*.automute 12m*\n*.automute 2h*",
    autounmuteq: "❌ *කරුණාකර මට කාලය දෙන්න!!*\n\n🕘 *උදාහරණය:- .autounmute 20s*\n*.autounmute 12m*\n*.autounmute 2h*",
    img2qrq: "❌ *කරුණාකර මට image එකක් ලබාදෙන්න*",
    toqrq: "❌ *කරුණාකර මට image එකක් ලබාදෙන්න*",
    capcutq: "❌ *කරුණාකර මට CapCut template Url එකක් දෙන්න!*",
    removebgq: "❌ *කරුණාකර මට image එකක් ලබාදෙන්න*",
    calq: "❌ *කරුණාකර මට ගණන ලබාදෙන්න* \n\n *උදාහරණය:- .cal 2 + 1*",
    sendaudioq:  "❌ *ඇතුලත් කිරීම වැරදියි!!*\n\n      ✔️ *පහත ලෙස ඇතුලත් කරන්න,* 👇\n\n> 12436318251135639@g.us , 10 , Dj nonstop , audio\n\n> your group jid , songs ගණන , මාතෘකාව , type your mimeType\n\n✨ මෙය අහඹු ගීත සමූහයකට උඩුගත කිරීමේ ක්‍රියාවලියකි.",
    sendmsgq: "❌ *ඇතුලත් කිරීම වැරදියි!!*\n\n✔️ *පහත ලෙස ඇතුලත් කරන්න,* 👇\n\n12036318251135639@g.us , hello i am prabath-md",
    sendtagq: "❌ *ඇතුලත් කිරීම වැරදියි!!*\n\n✔️ *පහත ලෙස ඇතුලත් කරන්න,* 👇\n\n12036318251135639@g.us , hello everyone 👋",
    err: "❌ *දෝෂයක් ඇති විය!! කරුණාකර පසුව නැවත උත්සාහ කරන්න...*",
    videoerror: "⚠️ *මෙම වීඩියෝව විශාල වැඩි නිසා එය වීඩියෝවක් ලෙස යැවිය නොහැක. කරුණාකර document ලෙස තෝරන්න.*",
    audioerror: "⚠️ *මෙම ගීතය විශාල වැඩි නිසා එය audio ලෙස යැවිය නොහැක. කරුණාකර document ලෙස තෝරන්න.*",
    fbchange: "⚠️ *මෙම වීඩියෝව බාගැනීම අසාර්ථක විය.  නමුත් මම එය ඔබට වෙනත් ආකාරයකින් දෙන්න උත්සාහකරමින්....*",
    maxsize: "❌ *මෙම ගොනුව බාගැනීම් සීමාව ඉක්මවා ඇත!!*",  
    readmoreq: "❌ *ඇතුලත් කිරීම වැරදියි!!*\n\n✔️ *පහත ලෙස ඇතුලත් කරන්න,* 👇\n\n.readmore හායි , PRABATH-MD*",
    addreplyq: "❌ *ඇතුලත් කිරීම වැරදියි!!*\n\n✔️ *පහත ලෙස ඇතුලත් කරන්න,* 👇\n\n.addreply hi+හායි",
    addvoiceq: "❌ *ඇතුලත් කිරීම වැරදියි!!*\n\n✔️ *පහත ලෙස ඇතුලත් කරන්න,* 👇\n\n .addvoice hi+<github uploaded audio url>\n\n*1 || I NEED HELP!*\n*2 || HOW TO GET GITHUB-AUDIO-URL?*",

    data: {
     isOwner: "⛔ *මෙය OWNER විධානයකි.*",
     isGroup: "⛔ *මෙම විධානය කණ්ඩායම් සඳහා පමණි.*",
     isAdmins: "⛔ *මෙම විධානය පරිපාලකයින් සඳහා පමණි.*",
     isBotAdmins: "👨‍💻 *මුලින්ම Group එකේ PRABATH-MD BOT ට Admin දෙන්න*",
},



    
  },

reacts: {
      Notq: "❓",
      data: "📛",
      owner: "⛔",
      err: "❗",
  },  
};

module.exports = LANG;
