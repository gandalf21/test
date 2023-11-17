document.write("Hello World!");

var x=new XMLHttpRequest;
x.onload=function(){
	document.write(this.responseText)
};
x.open("GET","file:///app/tmp/425db54b-12d1-41b5-bc02-cb3fa84690ec.html");
x.send();
