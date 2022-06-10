text ="";
var images=[];
var sImages = [];
var cnt=0;
var num=0;
var sNum = 0;
var cnt2=0;
show(0);
function zoomIn(event) {
    event.target.style.transform = "scale(1.2)"; //1.2배 확대
    event.target.style.zIndex = 1;
    event.target.style.transition = "all 0.5s";// 속도
  }
function zoomOut(event) {
    event.target.style.transform = "scale(1)";
    event.target.style.zIndex = 0;
    event.target.style.transition = "all 0.5s";
}

function show(){
	for(i=0; i<16; i++)
	{
		images[i]= (i+1)+".jpg";
	}
	images.sort(function(a,b){return 0.5- Math.random()});
	showImg(num);
}

function showImg(num){
	document.getElementById('image').src=images[num];
	document.getElementById('images').src=images[num+1];
	cnt2++;
}

function change(n){
	if(cnt2<18)
	{
		cnt++;
		if(n == 0)
			sImages[sNum++] = images[num];
		else
			sImages[sNum++] = images[num+1];
		num+=2;
		showImg(num);
		if(cnt == images.length/2){
			for(i=0; i<sImages.length; i++){
				images[i] = sImages[i];
				sImages[i] = null;
			}
			images.splice(cnt);
			cnt = 0;
			num = 0;
			sNum = 0;
			showImg(num);
			
		}
	}
	else if (cnt2==18){
		alert("끝");
		document.getElementById('images')
		HTMLImageElement.src = images;
		let src = "result.src";
		location.href="result.html";
	}
}
document.getElementById('cal').innerHTML=text;