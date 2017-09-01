Checkbix.init();
$(function() {
	var form = $(".joinUs");
	form.submit(function() {
		var gender = $("input[name='gender']");
		var group = $("input[name='theGroup']");
		var colleage = $("select[name='college']").val();
		var genderIsChecked = false;
		var groupIsChecked = false;
		gender.each(function(i) {
			if(this.checked) {
				genderIsChecked = true;
			}
		})
		group.each(function(i) {
			if(this.checked) {
				groupIsChecked = true;
			}
		})

		if(colleage == '请选择学院') {
			swal("请正确填写", "请选择学院!", "warning");
			return false;

		}
		if(!genderIsChecked) {
			swal("请正确填写", "请选择性别!", "warning");
			return false;
		}
		if(!groupIsChecked) {
			swal("请正确填写", "请至少选择一组!", "warning");
			return false;
		}
	})

	var groupCheckBoxs = $("input[name='theGroup']");
	var introduction=$("#introduction");
	groupCheckBoxs.change(function() {
		switch(this.value) {
			case '视觉设计':
			introduction.text("打开一个网站或一个APP,你能看得到和感受到的地方，就有我们的存在。这里有热爱设计，充满创意的小伙伴。我们利用Ps,Ai,Fw等软件为各种网站，APP 和海报设计呈现精美的UI和视觉效果。");
				break;
			case '前端':
			introduction.text("酷炫界面是前端，狂拽吊炸是前端，前端，哎呦不错哈");
				break;
			case '后端':
			introduction.text("后端就是这么吊,什么都能干,么都能干,都能干,能干,干");
				break;
			case '移动互联':
			introduction.text("在这个移动终端驰骋的时代，各大APP如春后雨笋般登上时代的舞台，“萌宠”（Android和ios）在等待它们的小主人，来吧，移动互联组在等你，给你想要的舞台，做一个移动互联时代最耀眼的“舞者”。");
				break;
			case '办公':
			introduction.text("酷炫office，策划统筹，制度执行，有形装逼同样致命");
				break;
			case '运营':
			introduction.text("运营即对运营过程的计划、组织、实施和控制，是与产品和服务密切相关的各项工作的总成。目前互联网企业都必须具备运营工作。“运营”的角色因团队而千差万别。学生在线运营组，涵盖整个团队的产品研发、产品推广、团队宣传以及易班建设。是维护学生在线产品运作和形象推广的小组，任重且道远。作为校内互联网团队，学生在线为学生体验运营工作的提供了良好的实践机会，并于2016年开始建设矿大易班总站，因此运营组的工作将分为团队运营和矿大易班。探求新的境界，静候你的加入。");
				break;
			case '视频':
			introduction.text("轻松剪辑找pr 酷炫后期看ae我们有的是 一块钱特效带你装逼带你飞");
				break;
			default:
				break;
		}
	})

})