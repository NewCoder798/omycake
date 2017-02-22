//window.onload=function(){
//	var imgs = document.getElementById("pics").getElementsByTagName("a");
//	var ps = document.getElementById("pics").getElementsByTagName("div");
//	var mask = document.getElementById("msk");
//	for(var i =0 ;i<imgs.length;i++){
//		imgs[i].onclick=function(){
//			for(var i =0 ;i<imgs.length;i++)
//			if(this==imgs[i]){
//				mask.style.display="block";
//				ps[i].style.display="block";
//			}
//			else{
//				imgs[i].className="";
//				ps[i].style.display="none";
//			}
//		}
//	}
//	mask.onclick=function(){
//		mask.style.display="none";
//		for(var i =0 ;i<imgs.length;i++){
//			if(ps[i].style.display=="block"){
//				ps[i].style.display="none";
//			}
//		}
//		
//	}
//}
window.onload=function(){
	var imgs = document.getElementById("pics").getElementsByTagName("a");
	var ps = document.getElementById("pics").getElementsByTagName("div");
	var mask = document.getElementById("msk");
	for(var i =0 ;i<imgs.length;i++){
		imgs[i].onclick=function(){
			for(var i =0 ;i<imgs.length;i++)
			if(this==imgs[i]){
				this.className="on";
				mask.style.display="block";
				ps[i].style.display="block";
			}
			else{
				imgs[i].className="";
				ps[i].style.display="none";
			}
		}
	}
	mask.onclick=function(){
		mask.style.display="none";
		for(var i =0 ;i<imgs.length;i++){
			if(ps[i].style.display=="block"){
				ps[i].style.display="none";
			}
			if(imgs[i].className=="on"){
				imgs[i].className="";
			}
		}
		
	}
}