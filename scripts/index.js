window.onload=function(){
	// var hSlider=document.getElementById('home-slider');
	//     homeSlider=document.getElementsByClassName('home-slider'),
	//     point=document.getElementsByClassName('point'),
	//     hSBtn=document.getElementsByClassName('h-s-btn'),
	//     hSBtnL=document.getElementById('h-s-btn-l'),
	//     hSBtnR=document.getElementById('h-s-btn-r');

	// homeSlider[0].style.display='block';
	// var xianShi=homeSlider[0],pointXS=point[0],kaiguan=true;
	// var timerId;
	// // 以下使用闭包
	// var lunbo=(function(){
	// 	var count=0;
	// 	return function(){
	// 		pointXS.setAttribute('class','point');
	// 		xianShi.style.display='none';
	// 		count++;
	// 		if(count==homeSlider.length){
	// 			count=0;
	// 		}
	// 		point[count].setAttribute('class','point point1');
	// 		homeSlider[count].style.display='block';
	// 		// homeSlider[count].style.webkitTransition='all .8s ease';
	// 		pointXS=point[count];
	// 		xianShi=homeSlider[count];
	// 	};
	// })();
	// timerId=setInterval(lunbo,2000);
	// hSlider.onmouseover=function(){
	// 	clearInterval(timerId);
	// };	
	// hSlider.onmouseout=function(){
	// 	if(kaiguan){
	// 		clearInterval(timerId);
	// 		timerId=setInterval(lunbo,2000);
	// 	}
	// };	
	// for(var i=0;i<homeSlider.length;i++){	
	// 	point[i].index=i;	
	// 	point[i].onclick=function(){
	// 		clearInterval(timerId);
	// 		kaiguan=false;
	// 		pointXS.setAttribute('class','point');
	// 		this.setAttribute('class','point point1');
	// 		pointXS=this;
	// 		xianShi.style.display='none';
	// 		homeSlider[this.index].style.display='block';
	// 		xianShi=homeSlider[this.index];
	// 	};
	// }
	// // for(var j=0;j<hSBtn.length;j++){
	// // 	hSBtn[j].index=j;
	// // 	hSBtn[j].onmouseover=function(){
	// // 		hSBtn[this.index].style.background='rgba(0,0,0,0.6)';
	// // 		hSBtn[this.index].style.color='white';     //(white)行内样式才可以显示出来
	// // 	};
	// // 	hSBtn[j].onmouseout=function(){
	// // 		hSBtn[this.index].style.background='rgba(0,0,0,0)';
	// // 		hSBtn[this.index].style.color='#ccc';
	// // 	};
	// // }
	// // -----------------左移
	// hSBtnL.onclick=function(){
	// 	clearInterval(timerId);
	// 	kaiguan=false;
	// 	pointXS.setAttribute('class','point');
	// 	var prevP=(pointXS.previousElementSibling)?pointXS.previousElementSibling:point[point.length-1];
	// 	prevP.setAttribute('class','point point1');
	// 	pointXS=prevP;
	// 	xianShi.style.display='none';
	// 	var prevS=(xianShi.previousElementSibling)?xianShi.previousElementSibling:homeSlider[homeSlider.length-1];
	// 	prevS.style.display='block';
	// 	xianShi=prevS;			
	// };
	// // -----------------右移
	// hSBtnR.onclick=function(){
	// 	clearInterval(timerId);
	// 	kaiguan=false;
	// 	pointXS.setAttribute('class','point');
	// 	var nextP=(pointXS.nextElementSibling)?pointXS.nextElementSibling:point[0];
	// 	nextP.setAttribute('class','point point1');
	// 	pointXS=nextP;
	// 	xianShi.style.display='none';	
	// 	var nextS=(xianShi.nextElementSibling)?xianShi.nextElementSibling:homeSlider[0];
	// 	nextS.style.display='block';		
	// 	xianShi=nextS;			
	// };
	// hSlider.onmousedown=function(ee){
	// 	ee.preventDefault();        // 阻止双击被选中
	// };
// -----------------------------------------------优化整理后的代码----------------------------------------------------
	var hSlider=document.getElementById('home-slider'),
		slider=document.getElementsByClassName('home-slider'),
		LBut=document.getElementById('h-s-btn-l'),
		RBut=document.getElementById('h-s-btn-r'),
		point=document.getElementsByClassName('point');
	var currentS=slider[0],
		currentP=point[0],
		timerId1,
		kaiguan=true;
	var fn=(function(){
		var count=0;
		return function(){
			count++;
			if(count==slider.length){count=0;}
			currentS.setAttribute('class','home-slider');
			slider[count].setAttribute('class','home-slider show');
			currentS=slider[count];
			currentP.setAttribute('class','point');
			point[count].setAttribute('class','point point1');
			currentP=point[count];
		};
	})();
	timerId1=setInterval(fn,3000);
	hSlider.onmouseover=function(){
		clearInterval(timerId1);
	};
	hSlider.onmouseout=function(){
		if(kaiguan){
			clearInterval(timerId1);
			timerId1=setInterval(fn,3000);
		}	
	};
	for(var i=0;i<point.length;i++){
		point[i].index=i;
		// 下面注释的那句等同于上一句（现在html中给类名为point的div添加data属性）
		// point[i].index=point[i].getAttribute('data'); 
		point[i].onclick=function(){
			clearInterval(timerId1);
			kaiguan=false;
			currentS.setAttribute('class','home-slider');
			slider[this.index].setAttribute('class','home-slider show');
			currentS=slider[this.index];
			currentP.setAttribute('class','point');
			this.setAttribute('class','point point1');
			currentP=this;
		};
	}
	RBut.onclick=function(){
		clearInterval(timerId1);
		kaiguan=false;
		currentS.setAttribute('class','home-slider');
		var nextS=(currentS.nextElementSibling)?currentS.nextElementSibling:slider[0];
		nextS.setAttribute('class','home-slider show');
		currentS=nextS;
		currentP.setAttribute('class','point');
		var nextP=(currentP.nextElementSibling)?currentP.nextElementSibling:point[0];
		nextP.setAttribute('class','point point1')
		currentP=nextP;
	};
	LBut.onclick=function(){
		clearInterval(timerId1);
		kaiguan=false;
		currentS.setAttribute('class','home-slider');
		var prevS=(currentS.previousElementSibling)?currentS.previousElementSibling:slider[slider.length-1];
		prevS.setAttribute('class','home-slider show');
		currentS=prevS;
		currentP.setAttribute('class','point');
		var prevP=(currentP.previousElementSibling)?currentP.previousElementSibling:point[point.length-1];
		prevP.setAttribute('class','point point1');
		currentP=prevP;
	};
	hSlider.onmousedown=function(e){
		e.preventDefault();
	};
// ----------------------------------------------------------------------------------------------------------------


	// 关于闭包的小练习(点一下输出一个1,三次之后不能再输出)
	// hSBtnL.onclick=function(){
	// 	var i=0;
	// 	return function(){
	// 		if(i==3){return;}
	// 		console.log(1);
	// 		i++;
	// 	}
	// }();

	// （最初的代码）
	// ------------向左移(不能获取当前位置)
	// var l=homeSlider.length;
	// hSBtnL.onclick=function(){
	// 	clearInterval(timerId);
	// 	// kaiguan=false;
	// 	pointXS.setAttribute('class','point');
	// 	xianShi.style.display='none';
	// 	if(l==0){l=homeSlider.length;}
	// 	l--;
	// 	point[l].setAttribute('class','point point1');
	// 	homeSlider[l].style.display='block';
	// 	pointXS=point[l];
	// 	xianShi=homeSlider[l];			
	// };
	// // -----------------向右移(不能获取当前位置)
	// var r=0;	
	// hSBtnR.onclick=function(){
	// 	clearInterval(timerId);
	// 	pointXS.setAttribute('class','point');
	// 	xianShi.style.display='none';
	// 	r++;
	// 	if(r==homeSlider.length){r=0;}
	// 	point[r].setAttribute('class','point point1');
	// 	homeSlider[r].style.display='block';
	// 	pointXS=point[r];
	// 	xianShi=homeSlider[r];			
	// };












};