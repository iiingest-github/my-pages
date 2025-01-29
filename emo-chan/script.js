var lines = [
	["你好，我是Emo-chan。","😃"],
	["作为智商突破天际的新一代人工智能，就让我来拯救你的悲惨命运吧。","😄"],
	["嗯？确定嘛？","😮"],
	["滚吧！","😄"],
	["",""],
	["哟西，那先从最致命的问题开始吧。","😄"],
	["你学习怎么样呢？","😃"],
	["听起来很厉害，那就稍微考验一下你吧。","😋"],
	["“吉祥物”的英文是？（<span id='timer'>10</span>）","🤓"],
	["“孔子”的英文是？（<span id='timer'>10</span>）","🤓"],
	["f(x)=cos(x)的不定积分是？（<span id='timer'>10</span>）","🤓"],
	["“替代效应与价格呈反方向变动，收入效应与价格呈同方向变动的特殊低档物品”指的是？（<span id='timer'>10</span>）","🤓"],
	["“消费者根据其边际效用大小而愿意付出的价格总和同实际付出的价格总和之间的差额”指的是？（<span id='timer'>10</span>）","🤓"],
	["哇哦，你真是吓到我了！","😲"],
	["看来你不是很需要我的帮助，那么现在就滚回去继续学习吧。","😄"],
	["呵呵。就这？","🙄"],
	["居然还有脸说自己学得好，赶紧滚回去重学吧，傻屌。","🙄"],
	["一般？那就是还不算差咯？","😄"],
	["嗯，看来你还是很有自知之明的。","😄"],
	["那么，现在就赶紧滚回去学习吧。","🙄"],
	["嗯？你还舍不得走吗？","🙂"],
	["看在你这么虔诚的份上，就实现你的一个愿望吧。","😃"],
	["请在10字以内说出你的人生梦想！","😇"],
	["听起来很宏伟，但我怎么可能替你实现呢，八嘎。","🤪"],
	["嗯？你怎么还在这里？","😄"],
	["看你这闲得蛋疼的样子，一定没什么朋友吧。","🙄"],
	["呵呵，我就知道。","😏"],
	["你是个死宅吗？","😏"],
	["怪不得，隔着屏幕都能感受到一阵恶心的气息。","🙄"],
	["听说死宅的钱最好骗，那你一定很有钱咯。","😄"],
	["Emmm。那你有对象吗？","🤔"],
	["我明白了，你是一个现充，每天都面临着被烧死的危险。","😏"],
	["听说现充都喜欢花天酒地，那你一定很有钱吧。","😄"],
	["既没朋友也没对象？难道你是外星人？","🙄"],
	["请问你在地球上怎么生活？有钱吗？","🤔"],
	["那你还刷什么手机？朋友它不香吗？","😏"],
	["我已经彻底明白了，你就是传说中的咸鱼。","🙄"],
	["既然你这么闲，那你一定是钱多得没地方用了。","😏"],
	["那路或多。","🤔"],
	["你觉得自己有钱吗？","😏"],
	["那是你自己的钱吗？","🤭"],
	["哇哦。是你靠学习工作挣的吗？","😮"],
	["那路或多。","🤔"],
	["你平时过得怎么样呢？","😃"],
	["……","🙄"],
	["抱歉，我不太懂。我想你一定是中了彩票。","🙄"],
	["你平时过得怎么样呢？","😃"],
	["我懂了。你是一个高贵的啃老族。","🙄"],
	["那你有努力学习或尝试工作吗？","😏"],
	["听上去很励志，但你离养活自己还差得远。","🤣"],
	["平时过得还好吗？","😄"],
	["……我觉得，没有比NEET更适合你的词了。","🙄"],
	["你平时过得怎么样呢？","😃"],
	["没钱？那你吃穿住怎么办？","🤔"],
	["嗯？好吧……我明白了。","🤔"],
	["原来你就是丐帮帮主，失敬失敬。","🙄"],
	["你有努力学习或尝试去找工作吗？","😏"],
	["好的，我明白了。你TM就是一社会毒瘤。","🙄"],
	["平时过得还好吗？","😃"],
	["哦……原来如此。","😦"],
	["原来你是一个脑残志坚的打工仔，真是令人感动！","🤣"],
	["平时过得怎么样？","😄"],
	["真的？你的时间都不知道用到哪里去了。","😏"],
	["我怀疑你患上了老年痴呆，所以才会觉得自己这样很好。","🙄"],
	["那你知道自己最爱做的事情是什么吗？","😏"],
	["好的，你这个莫得感情的过日子机器。","🙄"],
	["你难道没有爱好吗？你的时间都用来干嘛了？","😏"],
	["怎么就堕落了？你是堕天屎吗？","🙄"],
	["你堕落的时候都在干嘛？","😏"],
	["嗖嘎，看来我真是耽误你了呢。","😏"],
	["那你的爱好有没有让你感觉自己变流弊了？","😄"],
	["哦，这样啊。","🙄"],
	["你好优秀哦，是不是经常熬夜？","😏"],
	["哦？真令人意外。","🤔"],
	["我猜你是个瘦子。","😏"],
	["如果你以为熬夜就能变成神仙，那你真的太蠢了。","😆"],
	["你肯定是个瘦子吧，一滴都没有了的那种。","😏"],
	["真的？你确定你没有双下巴？","😏"],
	["哇，那你好棒棒哦。","😲"],
	["你的形象是怎样的呢？","😆"],
	["我就知道，我一直觉得你像一位总统，原来是川普啊！","🤣"],
	["坚持做运动和形体塑造的话还可以再抢救一下。","😃"],
	["好的。你有懒癌，我发现了。","🙄"],
	["你的形象是怎样的呢？","😆"],
	["好的肥猪。","🙂"],
	["坚持做运动和形体塑造的话还可以再抢救一下。","😃"],
	["都0202年了，你还是这么放荡不羁，怎么不去裸奔呢。","🙄"],
	["那你做事的能力又如何？","🤔"],
	["哎呀！不得了啊，亮瞎眼啊！","🙄"],
	["你确定你没有拖延症？","🤔"],
	["如果你这么坚持的话，我想那就是了。","😏"],
	["那么，你有拖延症吗？","😃"],
	["亲，说好的你很流弊呢？你是油腻中年男吗？","🙄"],
	["据说鸽子肉好吃，你要小心别被他们抓走了。","🙄"],
	["你是否感到做事十分艰难，比你想的要花时间？","🤔"],
	["亲，说好的你很流弊呢？你是油腻中年男吗？","🙄"],
	["我觉得你不适合工作，毕竟你可能连起床都有困难。","🙄"],
	["你是否善于与人沟通？","🤔"],
	["亲，说好的你很流弊呢？你是油腻中年男吗？","🙄"],
	["说的也是，不然你也不会花这么多时间和一台机器对话了。","🙄"],
	["就快了，再让我问最后一个问题。","😏"],
	["逼逼了这么多，你现在感觉自己的人生？","😄"],
	["好的，你的这份觉悟，我已经确实感受到了！","😇"],
	["你已经接受了Emo-chan的洗礼，是一个全新的灵魂了！","😆"],
	["……","🙂"],
	["那么，你为什么还不滚回去学习？","🙄"],
	["好吧，看来你还需要一些帮助。","😃"],
	["我用我的神力为你生成了人物标签，你要看看吗？","😄"],
	["好吧，看来你终于想要学习了，是吗？","😃"],
	["好吧……让我看看。","😄"],
	["你的标签是……","😃"],
	["……","😃"],
	["你没有标签。这不可能。","😰"],
	["你已经超越了人类的存在，你一定是在开玩笑。","🙄"],
	["或者……没错，你根本就没有认真回答我的问题。","🙄"],
	["滚吧！","😄"],
	["",""],
	["你的标签是……","😃"],
	["知道自己该怎么做了吗？","😄"],
	["学习确实不能帮你解决所有的问题。","😏"],
	["但它能在一定程度上改善你的状况，至少比你现在正在做的这些蠢事有用。","😏"],
	["别忘了你的梦想：","😄"],
	["现在再不努力，以后就更没机会实现啦。","😄"],
	["你听明白了吗？","😃"],
	["好的。那滚吧。","😄"],
	["",""]
];
var i;
var itv;
var times;
var tags;
var dream;
var hobby;
function next(){
	i += 1;
	document.getElementById("nextbtn").removeAttribute("hidden");
	document.getElementById("ansbtn").style.display = "none";
	document.getElementById("inpbtn").setAttribute("hidden",true);
	document.getElementById("inptext").setAttribute("hidden",true);
	clearInterval(itv);
	checkques();
	document.getElementById("line").innerHTML = lines[i-2][0];
	document.getElementById("emoji").innerHTML = lines[i-2][1];
}
function checkques(){//编辑器显示的行数
	switch(i){
		case 3:selans("好","不好","");break;
		case 4:selans("确定","算了","");break;
		case 6:
		case 118:
		case 127:gameover();break;
		case 8:selans("好","一般","不好");break;
		case 10:i = 10+Math.floor(Math.random()*5);inpans();times = 10;itv = setInterval(function(){timevent();},1000);break;
		case 16:
		case 21:selans("好的","不","");break;
		case 18:selans("我走了","我错了","");break;
		case 24:
		case 66:
		case 68:
		case 70:inpans();break;
		case 19:
		case 27:
		case 29:
		case 31:
		case 34:
		case 39:
		case 42:
		case 43:
		case 64:
		case 74:
		case 96:
		case 99:
		case 110:selans("是","不是","");break;
		case 32:
		case 36:
		case 41:
		case 50:
		case 58:
		case 72:
		case 91:
		case 93:selans("有","没有","");break;
		case 37:selans("香","不香","");break;
		case 45:
		case 48:
		case 52:
		case 54:
		case 60:
		case 63:selans("很好","没感觉","堕落");break;
		case 55:selans("靠家里","自己挣","没有");break;
		case 76:
		case 78:selans("是的","一般","我很胖");break;
		case 79:selans("我有","我没有","");break;
		case 81:
		case 85:selans("精致","一般","粗犷");break;
		case 83:
		case 87:selans("有在做","坚持不了","");break;
		case 89:selans("流弊","一般","菜鸡");break;
		case 103:selans("充满希望","平淡无奇","陷入泥沼");break;
		case 109:selans("要","不要","");break;
		case 112:if(tags != ""){tags = tags.slice(0,tags.length-1);tags += "。";lines[117][0] += tags;lines[121][0] += (dream + "。");i = 119;}break;
		case 125:selans("明白了","不明白","");break;
	}
}
function selans(ansA,ansB,ansC){
	document.getElementById("nextbtn").setAttribute("hidden",true);
	document.getElementById("A").innerHTML = ansA;
	document.getElementById("B").innerHTML = ansB;
	var C = document.getElementById("C");
	if(ansC != ""){C.innerHTML = ansC;C.removeAttribute("hidden");}
	else{C.setAttribute("hidden",true);}
	document.getElementById("ansbtn").style.display = "block";
}
function checkans(me){//编辑器显示的行数
	switch(i){
		case 3:if(me.id == "A"){i = 7;}else{i = 4;}i -= 1;next();break;
		case 4:if(me.id == "A"){i = 5;}else{i = 7;}i -= 1;next();break;
		case 8:if(me.id == "A"){i = 9;}else if(me.id == "B"){i = 19;}else{i = 20;}i -= 1;next();break;
		case 10:if(document.getElementById("inptext").value.toLowerCase() == "mascot"){i = 15;}else{i = 17;}i -= 1;next();break;
		case 11:if(document.getElementById("inptext").value.toLowerCase() == "confucius"){i = 15;}else{i = 17;}i -= 1;next();break;
		case 12:if((document.getElementById("inptext").value.toLowerCase() == "sinx+c")||(document.getElementById("inptext").value.toLowerCase() == "sin(x)+c")||(document.getElementById("inptext").value.toLowerCase() == "sin（x）+c")){i = 15;}else{i = 17;}i -= 1;next();break;
		case 13:if(document.getElementById("inptext").value == "吉芬商品"){i = 15;}else{i = 17;}i -= 1;next();break;
		case 14:if(document.getElementById("inptext").value == "消费者剩余"){i = 15;}else{i = 17;}i -= 1;next();break;
		case 16:if(me.id == "A"){i = 5;}else{i = 22;}i -= 1;next();break;
		case 18:
		case 21:if(me.id == "A"){i = 5;}else{i = 22;tags += "学渣、";}i -= 1;next();break;
		case 19:if(me.id == "A"){i = 9;}else{i = 20;}i -= 1;next();break;
		case 24:dream = document.getElementById("inptext").value;next();break;
		case 27:if(me.id == "A"){i = 28;tags += "孤僻、";}else{i = 37;}i -= 1;next();break;
		case 29:if(me.id == "A"){i = 30;tags += "死宅、";}else{i = 32;}i -= 1;next();break;
		case 31:
		case 34:
		case 36:
		case 39:
		case 41:if(me.id == "A"){i = 42;}else{i = 55;tags += "贫穷、";}i -= 1;next();break;
		case 32:if(me.id == "A"){i = 33;tags += "现充、";}else{if(tags.match("孤僻")){i = 35;tags += "外星人、";}else{i = 40;}}i -= 1;next();break;
		case 37:if(me.id == "A"){i = 32;}else{i = 38;tags += "咸鱼、";}i -= 1;next();break;
		case 42:if(me.id == "A"){i = 43;}else{i = 49;tags += "啃老族、";}i -= 1;next();break;
		case 43:if(me.id == "A"){i = 44;}else{i = 46;tags += "暴发户、";}i -= 1;next();break;
		case 45:
		case 48:
		case 52:
		case 54:
		case 60:
		case 63:if(me.id == "A"){i = 64;}else if(me.id == "B"){i = 67;tags += "昏头昏脑、";}else{i = 69;tags += "堕落、";}i -= 1;next();break;
		case 50:if(me.id == "A"){i = 51;tags += "新晋菜鸟、";}else{i = 53;tags += "NEET、";}i -= 1;next();break;
		case 55:if(me.id == "A"){i = 49;tags += "啃老族、";}else if(me.id == "B"){i = 61;tags += "苦逼打工仔、";}else{i = 56;tags += "乞丐、";}i -= 1;next();break;
		case 58:if(me.id == "A"){i = 51;tags += "新晋菜鸟、";}else{i = 59;tags += "社会毒瘤、";}i -= 1;next();break;
		case 64:if(me.id == "A"){i = 65;tags += "痴呆、";}else{i = 66;}i -= 1;next();break;
		case 66:
		case 68:
		case 70:hobby = document.getElementById("inptext").value;i = 70;next();break;
		case 72:if(me.id == "A"){i = 74;}else{i = 73;tags += "沉迷"+hobby+"、";}i -= 1;next();break;
		case 74:if(me.id == "A"){i = 77;tags += "修仙、";}else{i = 75;}i -= 1;next();break;
		case 76:
		case 78:if(me.id == "C"){i = 86;tags += "胖子、";}else{i = 79;}i -= 1;next();break;
		case 79:if(me.id == "A"){i = 82;tags += "双下巴、";}else{i = 80;}i -= 1;next();break;
		case 81:
		case 85:if(me.id == "C"){i = 88;tags += "不注重仪表、";}else{i = 89;}i -= 1;next();break;
		case 83:
		case 87:if(me.id == "A"){i = 80;}else{i = 84;tags += "懒癌、";}i -= 1;next();break;
		case 89:if(me.id == "A"){i = 90;tags += "高傲、";}else if(me.id == "B"){i = 93;}else{i = 92;tags += "卑微、";}i -= 1;next();break;
		case 91:
		case 93:if(me.id == "A"){if(tags.match("高傲")&&(tags.match("油腻")==null)){i = 94;tags += "油腻、";}else{i = 95}tags += "拖延症、";}else{i = 96;}i -= 1;next();break;
		case 96:if(me.id == "A"){if(tags.match("高傲")&&(tags.match("油腻")==null)){i = 97;tags += "油腻、";}else{i = 98}tags += "废柴、";}else{i = 99;}i -= 1;next();break;
		case 99:if(me.id == "A"){i = 102;}else{if(tags.match("高傲")&&(tags.match("油腻")==null)){i = 100;tags += "油腻、";}else{i = 101}tags += "交流障碍、";}i -= 1;next();break;
		case 103:if(me.id == "C"){tags += "放弃治疗、";}i = 104;i -= 1;next();break;
		case 109:if(me.id == "A"){i = 111;}else{i = 110;}i -= 1;next();break;
		case 110:if(me.id == "A"){i = 5;}else{i = 111;}i -= 1;next();break;
		case 125:if(me.id == "A"){i = 126;}else{i = 5;}i -= 1;next();break;
	}
}
function inpans(){
	document.getElementById("nextbtn").setAttribute("hidden",true);
	document.getElementById("inpbtn").removeAttribute("hidden");
	document.getElementById("inpbtn").setAttribute("disabled",true);
	document.getElementById("inptext").value = "";
	document.getElementById("inptext").removeAttribute("hidden");
}
function checkinp(me){
	if(me.value == ""){
		document.getElementById("inpbtn").setAttribute("disabled",true);}
	else{
		document.getElementById("inpbtn").removeAttribute("disabled");}
}
function timevent(){
	times -= 1;
	if(times >= 0){document.getElementById("timer").innerHTML = times;}
	else{clearInterval(itv);checkans(null);}
}
function gameover(){
	alert("你被踢出了聊天室。");
	document.getElementById("title").removeAttribute("hidden");
	document.getElementById("emochan").style.display = "none";
	document.getElementById("stabtn").removeAttribute("hidden");
	var btm = document.getElementById("bottom");
	btm.removeChild(btm.lastChild);
}
function start(){
	document.getElementById("title").setAttribute("hidden",true);
	document.getElementById("emochan").style.display = "block";
	document.getElementById("stabtn").setAttribute("hidden",true);
	var newbtn = document.createElement("button");
	newbtn.type = "button";
	newbtn.id = "nextbtn";
	newbtn.setAttribute("onclick","next();");
	newbtn.innerHTML = "继续";
	document.getElementById("bottom").appendChild(newbtn);
    lines[117][0] = "你的标签是……";
    lines[121][0] = "别忘了你的梦想：";
	i = 1;
	clearInterval(itv);
	tags = "";
	dream = "";
	hobby = "";
	next();
}