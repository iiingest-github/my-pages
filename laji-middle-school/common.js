var i = -1;
var select = false;
		
function next(){
	if(select == false){
		i += 1;
		var line = lines[i];
		var newdiv = document.createElement("div");
		newdiv.classList.add("item",i);
		newdiv.setAttribute("onmouseover","overitm(this);");
		newdiv.setAttribute("onmouseout","outitm(this);");
		newdiv.setAttribute("onclick","clcitm(this);");
		newdiv.innerHTML = line;
		if(line.indexOf("你：")==0){newdiv.style.backgroundColor="var(--c-1)";}
		else if(line.indexOf("王最强：")==0){newdiv.style.backgroundColor="var(--c-2)";}
		else if(line.indexOf("李上天：")==0){newdiv.style.backgroundColor="var(--c-3)";}
		else if(line.indexOf("胡老师：")==0){newdiv.style.backgroundColor="var(--c-4)";}
		else if(line.indexOf("杨日龙：")==0){newdiv.style.backgroundColor="var(--c-5)";}
		else if(line.indexOf("老哥：")==0){newdiv.style.backgroundColor="var(--c-6)";}
		else if(line.indexOf("赵如花：")==0){newdiv.style.backgroundColor="var(--c-7)";}
		document.getElementById("container").appendChild(newdiv);
		checkques();}}

function addevd(txt){
	var newdiv = document.createElement("div");
	newdiv.className = "evidence";
	newdiv.innerHTML = txt;
	document.getElementById("container").appendChild(newdiv);
}

function selitm(){
	select = true;
	addevd("&lt;在历史记录中选择证据&gt;");
	document.getElementById("skipbtn").setAttribute("hidden",true);
	document.getElementById("nxtbtn").setAttribute("hidden",true);
	document.getElementById("waitbtn1").removeAttribute("hidden");
	document.getElementById("waitbtn2").removeAttribute("hidden");}
function inputword(){
	var newinp = document.createElement("input");
	newinp.type = "text";
	newinp.setAttribute("maxlength","5");
	newinp.setAttribute("onblur","checkinp(this);");
	newinp.setAttribute("oninput","checkinp(this);");
	document.getElementById("container").appendChild(newinp);
	document.getElementById("skipbtn").setAttribute("hidden",true);
	document.getElementById("nxtbtn").setAttribute("hidden",true);
	document.getElementById("waitbtn1").removeAttribute("hidden");
	document.getElementById("waitbtn2").removeAttribute("hidden");}
function end(){
	document.getElementById("skipbtn").setAttribute("hidden",true);
	document.getElementById("nxtbtn").setAttribute("hidden",true);
	document.getElementById("endbtn").removeAttribute("hidden");}

function overitm(me){
	if(select){
		me.style.opacity = "0.5";
		me.style.cursor = "pointer";}}
function outitm(me){
	me.style.opacity = "1";
	me.style.cursor = "text";}
function clcitm(me){
	if(select){
		document.getElementById("waitbtn2").setAttribute("hidden",true);
		document.getElementById("chkbtn").removeAttribute("hidden");
		var es = document.getElementsByClassName("evidence");
		es[es.length-1].innerHTML = me.innerHTML;
		document.getElementById("chkbtn").className = "btn "+(me.classList[1]);
		window.scrollTo(0,document.body.scrollHeight);}}
function checkinp(me){
	if(me.value == ""){
		document.getElementById("chkbtn").setAttribute("hidden",true);
		document.getElementById("waitbtn2").removeAttribute("hidden");}
	else{
		document.getElementById("waitbtn2").setAttribute("hidden",true);
		document.getElementById("chkbtn").removeAttribute("hidden");}}

function correct(){
	select = false;
	document.getElementById("skipbtn").removeAttribute("hidden");
	document.getElementById("nxtbtn").removeAttribute("hidden");
	document.getElementById("chkbtn").setAttribute("hidden",true);
	document.getElementById("waitbtn1").setAttribute("hidden",true);
	var inp = document.getElementsByTagName("input")[0];
	if(inp != null){document.getElementById("container").removeChild(inp);}
	next();}