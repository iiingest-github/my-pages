var lines = [
	"（本章无出题，请佛系观看。）",
	"李上天依旧带着平日里的高傲表情，只是这次半天都没有说出话来。",
	"李上天：…",
	"李上天：竟然能观察到这个地步，不愧是你，丑女人。",
	"李上天：虽然这一个多月以来我也一直在秘密研究解谜和推理，但还是完全输给你了。",
	"万年傲娇居然承认了！你一下子轻松不少，但同时也感到一丝愧疚。",
	"你：那本书果然就是生日礼物？",
	"李上天：对，已经没有后续的提示了。",
	"李上天：不如说我是从那本书开始往回设置谜题，现在总共才只有四道题而已。",
	"你：你的意思是，现在还没有完成？",
	"李上天：哼，正是如此。",
	"胡老师：行了，你们两个，先不要打情骂俏了！",
	"李上天：谁在跟这个丑女人打情骂俏啊！！！",
	"你：（果然还是那个李上天…）",
	"胡老师：既然已经确定了出题者的身份，那就真相大白了！",
	"胡老师：凶手就是你，李上天！",
	"李上天：哈？",
	"你：（老师…干嘛这么执着于解谜呢？）",
	"你：那个…不管怎么看，李上天设置的谜题都跟案件没有关系吧。",
	"李上天：哼，我不是一开始就这样说了么。",
	"你：（…你这个傲娇说出来的话正常人能听懂就怪了啊！）",
	"胡老师：不行，凶手的话不能当作证据！",
	"李上天：话说回来，现在最可疑的人应该是你才对吧，胡老师。",
	"胡老师：你说什么？！",
	"你：对，我刚才就想说了。",
	"你：我仔细看了讲台上那张纸条，上面写的是“你想要的东西在这里”。",
	"你：如果说这是李上天写给我看的，那就没什么奇怪的。",
	"李上天：哼，因为担心会坑，我每做一张纸条都这么写。",
	"你：但老师看到这一信息，为什么会觉得这是凶手留下的纸条呢？",
	"胡老师：！！！",
	"你：老师…莫非你有什么把柄在别人手上吗？",
	"胡老师：…",
	"胡老师：这都被你发现了啊。",
	"胡老师：也罢，看你们两个这么聪明，就请你们协助我好了。",
	"李上天：啧，除了数学什么都不会的家伙，也敢用这种口气跟我们说话。",
	"胡老师：哼！！！",
	"胡老师：我的U盘被人偷了，里面有非常重要的文件！",
	"胡老师：早上来学校之后，我先去了办公室放包，U盘就在那个包里。",
	"胡老师：保险起见，出了办公室以后，我又给门上了锁。",
	"胡老师：来到五楼的谈判教室后，看到了已经被杀害的杨日龙。",
	"胡老师：我在现场调查了一会儿，才意识到有些不对劲…",
	"你：于是赶紧跑回办公室，发现门没锁，U盘被人偷走了…",
	"胡老师：什么！你怎么会知道？",
	"你：老师你也太奇怪了，比起杀人事件，偷U盘这种事根本就无所谓吧…",
	"胡老师：很有所谓啊！那里面的东西真的很重要啊！！！",
	"李上天：所以就误以为纸条是凶手留下的，还要我们跟你一起解谜？",
	"李上天：哼，真是可笑。",
	"你：既然没什么别的大事了，那还是赶快报警吧。",
	"胡老师：不行！因为偷U盘这件事，跟案件有关！",
	"胡老师：如果不能找出真正的凶手，我们就仍然处于危险之中！",
	"你：（这个人到底有什么奇怪的执念啊！）",
	"李上天：哼，就这么待着也无济于事，说来听听。",
	"胡老师：就在昨天，杨日龙突然找我借一些书，于是我今天就给他带来了。",
	"胡老师：由于带着那些书，我来到学校的时候已经累成狗，就先到办公室放了包。",
	"胡老师：现在想来，其实就是为了保证我会去放包才让我带这么多书吧！",
	"你：（胖子的懒惰被人利用了…吗…）",
	"李上天：你的意思是，有人指使杨日龙这么做，得手后还杀了他灭口？",
	"胡老师：不对！杨日龙被杀，其实只是为了吸引我的注意，随后凶手才去偷走了U盘！",
	"胡老师：对于谈判的内容，杨日龙始终只字未提，也许谈判本身就是一个谎言！",
	"李上天：呵，有趣！",
	"你：（老师的说法很有道理…但真的就是这样吗？）",
	"你：（老师的确很可疑，但如果是老师杀了班长，干嘛还要傻乎乎地跑去解谜呢？）",
	"你：（那个U盘，似乎是很重要的东西，甚至能让老师面对杀人现场都能忍住不报警…）",
	"你：（应该…不至于在这种情况下说谎吧？）",
	"你：暂且相信老师的话，班长很有可能与外人合谋，那个人趁今天门卫大爷不在直接进入学校…",
	"你：…这样的话嫌犯不就太多了吗，我们在这里瞎猜怎么可能猜中是谁啊！",
	"胡老师：嗯？你怎么知道门卫大爷今天不在？",
	"你把今天上午被王最强绑架的大致经过告诉了胡老师。",
	"胡老师：不，门卫大爷不可能因为他玩些小把戏就不来学校的。",
	"胡老师：就在发现U盘被偷之后，我还给门卫大爷打了电话，让他赶紧挂上今日停课的牌子关门回家。",
	"李上天：哼，怪不得没看到其他老师来上课。",
	"胡老师：重点来了，大爷还说今天有人很早就来了学校，但没看到有人出去。",
	"胡老师：也就是说，我们现在所有人，连同凶手一起，都被困在了这所学校之中！",
	"你：！！！",
	"这！这经典的套路，这熟悉的味道，这不就是——",
	"你：竟然是暴风雪山庄模式吗！",
	"李上天：ふふふ…実に面白い！",
	"胡老师：你们两个…不要讲一些我听不懂的话啊！！！"
];
	
function checkques(){
	switch(i){
	case 77:end();}
	window.scrollTo(0,document.body.scrollHeight);}
	
function checkans(me){
	}

function skip(){
	while(i!=77){
		next();}}