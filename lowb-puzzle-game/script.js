var lines = [
"<b class='clickable' onclick=\"useitem(this,'钥匙',5,1,0);\">门</b>是锁住的。",
"你打开了和基友的聊天记录。<br/><br/>基友：“你的作业在桌上，钥匙在<b class='clickable' onclick=\"useitem(this,'',4,0,1);\">花盆</b>里面。”<br/><br/>你发现手机快没电了，于是关掉了手机。",
"你在花盆里找到了一把钥匙。",
"你打开了门，走进屋子。一个<b class='clickable' onclick=\"useitem(this,'',6,0,0);\">盒子</b>摆在桌面上，旁边还有一张<b class='clickable' onclick=\"useitem(this,'',7,0,0);\">纸条</b>。",
"盒子上挂着一个密码锁，似乎需要输入四个字母才能打开。<br/><br/><input type='text' maxlength='4' class='clickable' oninput=\"checkinp(this,'yhfg',35);\"/>",
"纸条上写着：“听说你很喜欢解谜，于是我把线索藏在了<b class='clickable' onclick=\"useitem(this,'',8,0,0);\">屋里</b>的某处，你一定可以get到的😆”",
"你环顾四周，屋子并没有多大，只有<b class='clickable' onclick=\"useitem(this,'',9,0,0);\">床</b>、<b class='clickable' onclick=\"useitem(this,'',13,0,0);\">书桌</b>、<b class='clickable' onclick=\"useitem(this,'',12,0,0);\">洗手间</b>三块区域。",
"是一张普通的床，上面有一根<b class='clickable' onclick=\"useitem(this,'',10,0,2);\">充电线</b>。你还在被子里发现了<b class='clickable' onclick=\"useitem(this,'',29,0,7);\">基友的胖次</b>。",
"你拿走了充电线。",
"你把充电线接在了手机上。",
"洗手台上放着<b class='clickable' onclick=\"useitem(this,'',23,0,5);\">肥皂</b>、<b class='clickable' onclick=\"useitem(this,'',24,0,6);\">牙刷</b>和各种洗浴用品，旁边还有<b class='clickable' onclick=\"useitem(this,'',30,0,8);\">拖把</b>。似乎没有什么奇怪的地方。",
"桌上放着<b class='clickable' onclick=\"useitem(this,'',17,0,0);\">电脑</b>和<b class='clickable' onclick=\"useitem(this,'带充电线的手机',14,1,4);\">插排</b>，还有一堆乱七八糟的<b class='clickable' onclick=\"useitem(this,'',18,0,0);\">课本</b>。",
"你将手机接在插排上，它又有电了。<br/><br/>你可以选择直接给基友<b class='clickable' onclick=\"useitem(this,'',15,0,0);\">发消息</b>或者<b class='clickable' onclick=\"useitem(this,'',16,0,0);\">打电话</b>，让他把密码交出来。",
"你向基友发送了消息，然而他并没有回复。",
"你拨通了基友的手机号，但并没有人接。",
"你打开电脑，进入了以《你的名字》海报为背景的锁屏界面。似乎还需要输入密码。<br/><br/><input type='text' maxlength='4' class='clickable' oninput=\"checkinp(this,'9833',22);\"/>",
"你随便翻了一下，在某一页中发现一张写着<b class='clickable' onclick=\"useitem(this,'手机',19,0,0);\">电话号码</b>的纸条。",
"你拨通了电话，发现对方是基友的学姐。<br/><br/>学姐：是小高啊，有什么事吗？<br/><br/>你决定向学姐<b class='clickable' onclick=\"useitem(this,'',20,0,0);\">询问基友的下落</b>或<b class='clickable' onclick=\"useitem(this,'',21,0,0);\">求助密码</b>。",
"学姐：“emm，他今天应该来开会的，但是没有来，我们也联系不上他。”",
"学姐：“我觉得像他这样的傻子，密码应该会很简单，你可以试试输入他的生日之类的。”<br/><br/>基友的生日是1998年3月3日。<br/><br/>由于盒子使用的是字母锁，你觉得这并不是盒子的密码。",
"你居然真的解锁了电脑，桌面上有一个写着基友名字的<b class='clickable' onclick=\"useitem(this,'',25,0,0);\">压缩包</b>，任务栏里的<b class='clickable' onclick=\"useitem(this,'',28,0,0);\">聊天框</b>也还没有关。",
"虽然不知道为什么，但你拿走了肥皂。",
"你拿走了牙刷。",
"你解开了压缩包，发现里面全是基友裸睡的照片，最后还有一个文本文档。<br/><br/>里面写着：“在你<b class='clickable' onclick=\"useitem(this,'',26,0,0);\">床下</b>。”",
"你向床下望了望，似乎有人在这里爬过，于是你也爬了进去。<br/><br/>你发现地板上有一个<b class='clickable' onclick=\"useitem(this,'牙刷',27,1,0);\">洞</b>，和手指差不多粗，不知道是做什么用的。",
"你把牙刷伸进洞里，似乎按下了什么，你听到附近传来嘎吱一声。<br/><br/>你从床下爬出来，发现墙上多了一道<b class='clickable' onclick=\"useitem(this,'',31,0,0);\">暗门</b>。",
"你打开了聊天框，是不久前你和基友的对话。<br/><br/>你：“下午就交作业了，你什么时候还我？”<br/><br/>基友：“诶，我放在家里了，我等下要去开会，要不你去我家里拿吧。”<br/><br/>你：“法克鱿。”",
"你怀着谜一样的心态拿走了基友的胖次。",
"你将拖把放进了你的四次元口袋。",
"你在里面走了一会儿，来到一扇虚掩的门前。<br/><br/>你看到基友在里面被一个神秘男子吊起来抽打，画面仿佛GV现场。<br/><br/>你必须做点什么来<b class='clickable' onclick=\"useitem(this,'塞肥皂的胖次',33,1,0);\">吸引神秘男子的注意</b>！",
"你带着猥琐的笑容把肥皂塞进了基友的胖次。",
"你将胖次扔向墙角。<b class='clickable' onclick=\"useitem(this,'拖把',34,1,0);\">神秘男子</b>看见掉在远处的胖次，便走过去查看。",
"趁神秘男子蹲下捡胖次的时候，你拿着拖把跳出来，对着神秘男子当头就是一棒。<br/><br/>神秘男子被打倒在地，“嗷”了一声，便夺门而出。<br/><br/>你成功地拯救了基友的贞操（也可能没有），拿回了你的作业！<br/><br/>— 完 —",
"你输入自己名字的首字母，成功打开了盒子，拿回了作业。<br/><br/>你离开了基友的家，从今以后，你再也没有见过基友。<br/><br/>— 完 —"
]
var itemlist = [
["没电的手机","combineitem(this,'充电线',3,11);"],
["钥匙","chooseitem(this);"],
["充电线","combineitem(this,'没电的手机',3,11);"],
["带充电线的手机","chooseitem(this);"],
["手机","chooseitem(this);"],
["肥皂","combineitem(this,'基友的胖次',9,32);"],
["牙刷","chooseitem(this);"],
["基友的胖次","combineitem(this,'肥皂',9,32);"],
["拖把","chooseitem(this);"],
["塞肥皂的胖次","chooseitem(this);"]
];
var currentitem;

function useitem(me,item,num,del,add){
	if((me.className == "clickable")||(me.className.match("item"))){
		if(currentitem != null){var temp = currentitem.innerHTML;}
		if((item == "")||(item == temp)){//执行部分
			if(me.className == "clickable"){me.className = "";}
			var newp = document.createElement("p");
			newp.className = "newline";
			newp.innerHTML = lines[num-2];
			document.getElementById("scene").appendChild(newp);
			document.getElementsByClassName("newline")[0].className = "";
			if(del){document.getElementById("itembar").removeChild(currentitem);}
			if(add){additem(add);}
			if(item == ''){resetitems();}
			if((num == 34)||(num === 35)){freezeall();}
			document.getElementById("scene").scrollTop = document.getElementById("scene").scrollHeight;}
		else{resetitems();}
	}
}

function freezeall(){
	var bs = document.getElementsByTagName("b");
	for(var i=0;i<bs.length;i++){bs[i].className = "";}
	var inputs = document.getElementsByTagName("input");
	for(var i=0;i<inputs.length;i++){inputs[i].disabled = true;}
	var items = document.getElementById("itembar").childNodes;
	for(var i=0;i<items.length;i++){items[i].className = "item a b c";}
	currentitem = null;
}

function resetitems(){
	var items = document.getElementById("itembar").childNodes;
	for(var i=0;i<items.length;i++){items[i].className = "item";}
	currentitem = null;
}

function chooseitem(me){
	if(me.classList.length == 1){
		resetitems();
		me.className += " chosen";
		currentitem = me;}
	else if(me.classList.length == 2){resetitems();}
}

function additem(num){
	var newdiv = document.createElement("div");
	newdiv.className = "item";
	newdiv.innerHTML = itemlist[num][0];
	newdiv.setAttribute("onclick",itemlist[num][1]);
	document.getElementById("itembar").appendChild(newdiv);
}

function combineitem(me,item,newitem,num){
	if(currentitem != null){var temp = currentitem.innerHTML;}
	if(item == temp){//执行部分
		document.getElementById("itembar").removeChild(currentitem);
		document.getElementById("itembar").removeChild(me);
		currentitem = null;
	useitem(me,'',num,0,newitem);}
	else{
		chooseitem(me);}
}

function checkinp(me,pw,num){
	if(me.value.toLowerCase() == pw){
		me.disabled = true;
		useitem(me,'',num,0,0);}
}