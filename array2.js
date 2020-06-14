
var arr=[];
var namej=document.querySelector("#namej");
var name=document.querySelector("#name");
arr.push("jname","name","shivansh","sunny","shweta","yaakov","jagesh","Jason");
for(var i=0;i<arr.length;i++)
{
	var names=arr[i];
	var res=names.charAt(0);
	if(res==="j"||res==="J")
	{
		console.log("Goodbye "+names);
	}
	else
	{
		console.log("Hello "+names);
	}

}

