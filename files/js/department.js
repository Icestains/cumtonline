var groupsDiv = document.getElementById('groups');
var anBtn = document.getElementById('anext');
var apBtn = document.getElementById('aprev');

function nex() {
	groupsDiv.style.left='-900px';
	anext.style.borderColor='green';
	aprev.style.borderColor='black';
}

function pre() {
	groupsDiv.style.left='0';
	aprev.style.borderColor='green';
	anext.style.borderColor='black';
}

aprev.onclick=function(){pre()}
anext.onclick=function(){nex()}



// aprev.onclick=setTimeout("pre();",2000);

// anext.onclick=function() {}