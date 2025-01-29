var lines = [
	"这里是特典房间，但并没有什么有趣的东西，请不要报以期待。",
	"虽然跟剧情关系不大，但仍有剧透的危险…",
	"所以，请接受测试。",
	"“6，14，2”",
	"“8，68，15”",
	"“10，18，11”",
	"“5，69，17”",
	"通过破解密码来获取特典！"
	];
	
function checkques(){
	switch(i){
	case 7:inputword();}
	window.scrollTo(0,document.body.scrollHeight);}
	
function checkans(me){
	switch(i){
	case 7:
		if(document.getElementsByTagName("input")[0].value == "感谢游玩"){
			showimg();}
			else{alert("没答对哦！");}}}

function showimg(){
	var inp = document.getElementsByTagName("input")[0];
	document.getElementById("container").removeChild(inp);
	document.getElementById("bottom").style.display = "none";
	document.getElementById("bottom").style.textAlign = "left";
	var newp = document.createElement("p");
	newp.style.marginTop = "30px";
	newp.innerHTML = "<hr/><br/><img src='img1.jpg'><br/>完结印象画（2019.12.07）<br/><br/><img src='img2.jpg'><br/>重制版河图（2021.10.26）";
	document.getElementById("container").appendChild(newp);}

function skip(){
	while(i!=7){
		next();}}