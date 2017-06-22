// Garden Gnome Software - Skin
// Pano2VR 4.0/3102S
// Filename: WEB_Tablet_3D.ggsk
// Generated Wed 29. Mar 20:35:09 2017

function pano2vrSkin(player,base) {
	var me=this;
	var flag=false;
	var nodeMarker=new Array();
	var activeNodeMarker=new Array();
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=new Array();
	this.elementMouseOver=new Array();
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	for(i=0;i<prefixes.length;i++) {
		if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
			cssPrefix='-' + prefixes[i].toLowerCase() + '-';
			domTransition=prefixes[i] + 'Transition';
			domTransform=prefixes[i] + 'Transform';
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=new Array();
		stack.push(startElement);
		while(stack.length>0) {
			e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	parameterToTransform=function(p) {
		return 'translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
	}
	
	this.findElements=function(id,regex) {
		var r=new Array();
		var stack=new Array();
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		this._menu_izq=document.createElement('div');
		this._menu_izq.ggId='Menu_izq';
		this._menu_izq.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._menu_izq.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 80px;';
		hs+='height: 768px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._menu_izq.setAttribute('style',hs);
		this._menu_06_izq=document.createElement('div');
		this._menu_06_izq.ggId='Menu_06_izq';
		this._menu_06_izq.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._menu_06_izq.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 80px;';
		hs+='height: 768px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._menu_06_izq.setAttribute('style',hs);
		this._rectangle_izq4=document.createElement('div');
		this._rectangle_izq4.ggId='Rectangle_izq';
		this._rectangle_izq4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_izq4.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 80px;';
		hs+='height: 768px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.1;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='background-color: #ffffff;';
		this._rectangle_izq4.setAttribute('style',hs);
		this._menu_06_izq.appendChild(this._rectangle_izq4);
		this._atras4=document.createElement('div');
		this._atras4.ggId='atras';
		this._atras4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._atras4.ggVisible=true;
		this._atras4.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				h=this.parentNode.offsetHeight;
				this.style.top=(-100 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 7px;';
		hs+='top:  -100px;';
		hs+='width: 65px;';
		hs+='height: 170px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._atras4.setAttribute('style',hs);
		this._atras4__img=document.createElement('img');
		this._atras4__img.setAttribute('src',basePath + 'images/atras4.svg');
		this._atras4__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 65px;height: 170px;');
		this._atras4.appendChild(this._atras4__img);
		this._atras4.onclick=function () {
			me.player.openNext("{node16}","");
			me.player.playSound("camera","1");
		}
		this._atras4.onmouseover=function () {
			me._atras4__img.src=basePath + 'images/atras4__o.svg';
		}
		this._atras4.onmouseout=function () {
			me._atras4__img.src=basePath + 'images/atras4.svg';
		}
		this._menu_06_izq.appendChild(this._atras4);
		this._marcador_1411=document.createElement('div');
		this._marcador_1411.ggId='Marcador 14';
		this._marcador_1411.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marcador_1411.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 589px;';
		hs+='top:  836px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._marcador_1411.setAttribute('style',hs);
		this._marcador_1411.ggMarkerNodeId='6';
		nodeMarker.push(this._marcador_1411);
		this._marcador_1411.onclick=function () {
			me.player.openNext('6');
		}
		this._marcador_1411.ggActivate=function () {
			me._menu_06_izq.style[domTransition]='none';
			me._menu_06_izq.style.visibility='inherit';
			me._menu_06_izq.ggVisible=true;
			me._menu_05_izq.style[domTransition]='none';
			me._menu_05_izq.style.visibility='hidden';
			me._menu_05_izq.ggVisible=false;
		}
		this._menu_06_izq.appendChild(this._marcador_1411);
		this._menu_izq.appendChild(this._menu_06_izq);
		this._menu_05_izq=document.createElement('div');
		this._menu_05_izq.ggId='Menu_05_izq';
		this._menu_05_izq.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._menu_05_izq.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 80px;';
		hs+='height: 768px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._menu_05_izq.setAttribute('style',hs);
		this._rectangle_izq3=document.createElement('div');
		this._rectangle_izq3.ggId='Rectangle_izq';
		this._rectangle_izq3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_izq3.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 80px;';
		hs+='height: 768px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.1;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='background-color: #ffffff;';
		this._rectangle_izq3.setAttribute('style',hs);
		this._menu_05_izq.appendChild(this._rectangle_izq3);
		this._atras3=document.createElement('div');
		this._atras3.ggId='atras';
		this._atras3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._atras3.ggVisible=true;
		this._atras3.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				h=this.parentNode.offsetHeight;
				this.style.top=(-100 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 7px;';
		hs+='top:  -100px;';
		hs+='width: 65px;';
		hs+='height: 170px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._atras3.setAttribute('style',hs);
		this._atras3__img=document.createElement('img');
		this._atras3__img.setAttribute('src',basePath + 'images/atras3.svg');
		this._atras3__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 65px;height: 170px;');
		this._atras3.appendChild(this._atras3__img);
		this._atras3.onclick=function () {
			me.player.openNext("{node20}","");
			me.player.playSound("camera","1");
		}
		this._atras3.onmouseover=function () {
			me._atras3__img.src=basePath + 'images/atras3__o.svg';
		}
		this._atras3.onmouseout=function () {
			me._atras3__img.src=basePath + 'images/atras3.svg';
		}
		this._menu_05_izq.appendChild(this._atras3);
		this._marcador_1410=document.createElement('div');
		this._marcador_1410.ggId='Marcador 14';
		this._marcador_1410.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marcador_1410.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 589px;';
		hs+='top:  836px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._marcador_1410.setAttribute('style',hs);
		this._marcador_1410.ggMarkerNodeId='5';
		nodeMarker.push(this._marcador_1410);
		this._marcador_1410.onclick=function () {
			me.player.openNext('5');
		}
		this._marcador_1410.ggActivate=function () {
			me._menu_05_izq.style[domTransition]='none';
			me._menu_05_izq.style.visibility='inherit';
			me._menu_05_izq.ggVisible=true;
			me._menu_04_izq.style[domTransition]='none';
			me._menu_04_izq.style.visibility='hidden';
			me._menu_04_izq.ggVisible=false;
		}
		this._menu_05_izq.appendChild(this._marcador_1410);
		this._menu_izq.appendChild(this._menu_05_izq);
		this._menu_04_izq=document.createElement('div');
		this._menu_04_izq.ggId='Menu_04_izq';
		this._menu_04_izq.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._menu_04_izq.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 80px;';
		hs+='height: 768px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._menu_04_izq.setAttribute('style',hs);
		this._rectangle_izq2=document.createElement('div');
		this._rectangle_izq2.ggId='Rectangle_izq';
		this._rectangle_izq2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_izq2.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 80px;';
		hs+='height: 768px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.1;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='background-color: #ffffff;';
		this._rectangle_izq2.setAttribute('style',hs);
		this._menu_04_izq.appendChild(this._rectangle_izq2);
		this._atras2=document.createElement('div');
		this._atras2.ggId='atras';
		this._atras2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._atras2.ggVisible=true;
		this._atras2.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				h=this.parentNode.offsetHeight;
				this.style.top=(-100 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 7px;';
		hs+='top:  -100px;';
		hs+='width: 65px;';
		hs+='height: 170px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._atras2.setAttribute('style',hs);
		this._atras2__img=document.createElement('img');
		this._atras2__img.setAttribute('src',basePath + 'images/atras2.svg');
		this._atras2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 65px;height: 170px;');
		this._atras2.appendChild(this._atras2__img);
		this._atras2.onclick=function () {
			me.player.openNext("{node21}","");
			me.player.playSound("camera","1");
		}
		this._atras2.onmouseover=function () {
			me._atras2__img.src=basePath + 'images/atras2__o.svg';
		}
		this._atras2.onmouseout=function () {
			me._atras2__img.src=basePath + 'images/atras2.svg';
		}
		this._menu_04_izq.appendChild(this._atras2);
		this._marcador_149=document.createElement('div');
		this._marcador_149.ggId='Marcador 14';
		this._marcador_149.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marcador_149.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 589px;';
		hs+='top:  836px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._marcador_149.setAttribute('style',hs);
		this._marcador_149.ggMarkerNodeId='4';
		nodeMarker.push(this._marcador_149);
		this._marcador_149.onclick=function () {
			me.player.openNext('4');
		}
		this._marcador_149.ggActivate=function () {
			me._menu_04_izq.style[domTransition]='none';
			me._menu_04_izq.style.visibility='inherit';
			me._menu_04_izq.ggVisible=true;
			me._menu_03_izq.style[domTransition]='none';
			me._menu_03_izq.style.visibility='hidden';
			me._menu_03_izq.ggVisible=false;
		}
		this._menu_04_izq.appendChild(this._marcador_149);
		this._menu_izq.appendChild(this._menu_04_izq);
		this._menu_03_izq=document.createElement('div');
		this._menu_03_izq.ggId='Menu_03_izq';
		this._menu_03_izq.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._menu_03_izq.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 80px;';
		hs+='height: 768px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._menu_03_izq.setAttribute('style',hs);
		this._rectangle_izq1=document.createElement('div');
		this._rectangle_izq1.ggId='Rectangle_izq';
		this._rectangle_izq1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_izq1.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 80px;';
		hs+='height: 768px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.1;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='background-color: #ffffff;';
		this._rectangle_izq1.setAttribute('style',hs);
		this._menu_03_izq.appendChild(this._rectangle_izq1);
		this._atras1=document.createElement('div');
		this._atras1.ggId='atras';
		this._atras1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._atras1.ggVisible=true;
		this._atras1.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				h=this.parentNode.offsetHeight;
				this.style.top=(-100 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 7px;';
		hs+='top:  -100px;';
		hs+='width: 65px;';
		hs+='height: 170px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._atras1.setAttribute('style',hs);
		this._atras1__img=document.createElement('img');
		this._atras1__img.setAttribute('src',basePath + 'images/atras1.svg');
		this._atras1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 65px;height: 170px;');
		this._atras1.appendChild(this._atras1__img);
		this._atras1.onclick=function () {
			me.player.openNext("{node19}","");
			me.player.playSound("camera","1");
		}
		this._atras1.onmouseover=function () {
			me._atras1__img.src=basePath + 'images/atras1__o.svg';
		}
		this._atras1.onmouseout=function () {
			me._atras1__img.src=basePath + 'images/atras1.svg';
		}
		this._menu_03_izq.appendChild(this._atras1);
		this._marcador_148=document.createElement('div');
		this._marcador_148.ggId='Marcador 14';
		this._marcador_148.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marcador_148.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 589px;';
		hs+='top:  836px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._marcador_148.setAttribute('style',hs);
		this._marcador_148.ggMarkerNodeId='3';
		nodeMarker.push(this._marcador_148);
		this._marcador_148.onclick=function () {
			me.player.openNext('3');
		}
		this._marcador_148.ggActivate=function () {
			me._menu_03_izq.style[domTransition]='none';
			me._menu_03_izq.style.visibility='inherit';
			me._menu_03_izq.ggVisible=true;
			me._menu_02_izq.style[domTransition]='none';
			me._menu_02_izq.style.visibility='hidden';
			me._menu_02_izq.ggVisible=false;
		}
		this._menu_03_izq.appendChild(this._marcador_148);
		this._menu_izq.appendChild(this._menu_03_izq);
		this._menu_02_izq=document.createElement('div');
		this._menu_02_izq.ggId='Menu_02_izq';
		this._menu_02_izq.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._menu_02_izq.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 80px;';
		hs+='height: 768px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._menu_02_izq.setAttribute('style',hs);
		this._rectangle_izq0=document.createElement('div');
		this._rectangle_izq0.ggId='Rectangle_izq';
		this._rectangle_izq0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_izq0.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 80px;';
		hs+='height: 768px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.1;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='background-color: #ffffff;';
		this._rectangle_izq0.setAttribute('style',hs);
		this._menu_02_izq.appendChild(this._rectangle_izq0);
		this._atras0=document.createElement('div');
		this._atras0.ggId='atras';
		this._atras0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._atras0.ggVisible=true;
		this._atras0.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				h=this.parentNode.offsetHeight;
				this.style.top=(-100 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 7px;';
		hs+='top:  -100px;';
		hs+='width: 65px;';
		hs+='height: 170px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._atras0.setAttribute('style',hs);
		this._atras0__img=document.createElement('img');
		this._atras0__img.setAttribute('src',basePath + 'images/atras0.svg');
		this._atras0__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 65px;height: 170px;');
		this._atras0.appendChild(this._atras0__img);
		this._atras0.onclick=function () {
			me.player.openNext("{node17}","");
			me.player.playSound("camera","1");
		}
		this._atras0.onmouseover=function () {
			me._atras0__img.src=basePath + 'images/atras0__o.svg';
		}
		this._atras0.onmouseout=function () {
			me._atras0__img.src=basePath + 'images/atras0.svg';
		}
		this._menu_02_izq.appendChild(this._atras0);
		this._marcador_147=document.createElement('div');
		this._marcador_147.ggId='Marcador 14';
		this._marcador_147.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marcador_147.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 589px;';
		hs+='top:  836px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._marcador_147.setAttribute('style',hs);
		this._marcador_147.ggMarkerNodeId='2';
		nodeMarker.push(this._marcador_147);
		this._marcador_147.onclick=function () {
			me.player.openNext('2');
		}
		this._marcador_147.ggActivate=function () {
			me._menu_02_izq.style[domTransition]='none';
			me._menu_02_izq.style.visibility='inherit';
			me._menu_02_izq.ggVisible=true;
			me._menu_01_izq.style[domTransition]='none';
			me._menu_01_izq.style.visibility='hidden';
			me._menu_01_izq.ggVisible=false;
		}
		this._menu_02_izq.appendChild(this._marcador_147);
		this._menu_izq.appendChild(this._menu_02_izq);
		this._menu_01_izq=document.createElement('div');
		this._menu_01_izq.ggId='Menu_01_izq';
		this._menu_01_izq.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._menu_01_izq.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 80px;';
		hs+='height: 768px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._menu_01_izq.setAttribute('style',hs);
		this._rectangle_izq=document.createElement('div');
		this._rectangle_izq.ggId='Rectangle_izq';
		this._rectangle_izq.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_izq.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 80px;';
		hs+='height: 768px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.1;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='background-color: #ffffff;';
		this._rectangle_izq.setAttribute('style',hs);
		this._menu_01_izq.appendChild(this._rectangle_izq);
		this._atras=document.createElement('div');
		this._atras.ggId='atras';
		this._atras.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._atras.ggVisible=true;
		this._atras.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				h=this.parentNode.offsetHeight;
				this.style.top=(-100 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 7px;';
		hs+='top:  -100px;';
		hs+='width: 65px;';
		hs+='height: 170px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._atras.setAttribute('style',hs);
		this._atras__img=document.createElement('img');
		this._atras__img.setAttribute('src',basePath + 'images/atras.svg');
		this._atras__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 65px;height: 170px;');
		this._atras.appendChild(this._atras__img);
		this._atras.onclick=function () {
			me.player.playSound("click_close","1");
		}
		this._atras.onmouseover=function () {
			me._atras__img.src=basePath + 'images/atras__o.svg';
		}
		this._atras.onmouseout=function () {
			me._atras__img.src=basePath + 'images/atras.svg';
		}
		this._menu_01_izq.appendChild(this._atras);
		this._marcador_146=document.createElement('div');
		this._marcador_146.ggId='Marcador 14';
		this._marcador_146.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marcador_146.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 589px;';
		hs+='top:  836px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._marcador_146.setAttribute('style',hs);
		this._marcador_146.ggMarkerNodeId='1';
		nodeMarker.push(this._marcador_146);
		this._marcador_146.onclick=function () {
			me.player.openNext('1');
		}
		this._marcador_146.ggActivate=function () {
			me._menu_01_izq.style[domTransition]='none';
			me._menu_01_izq.style.visibility='inherit';
			me._menu_01_izq.ggVisible=true;
		}
		this._menu_01_izq.appendChild(this._marcador_146);
		this._menu_izq.appendChild(this._menu_01_izq);
		this.divSkin.appendChild(this._menu_izq);
		this._menu_der=document.createElement('div');
		this._menu_der.ggId='Menu_der';
		this._menu_der.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._menu_der.ggVisible=true;
		this._menu_der.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-80 + w) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -80px;';
		hs+='top:  0px;';
		hs+='width: 80px;';
		hs+='height: 768px;';
		hs+=cssPrefix + 'transform-origin: 100% 50%;';
		hs+='visibility: inherit;';
		this._menu_der.setAttribute('style',hs);
		this._menu_06_der=document.createElement('div');
		this._menu_06_der.ggId='Menu_06_der';
		this._menu_06_der.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._menu_06_der.ggVisible=true;
		this._menu_06_der.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-80 + w) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -80px;';
		hs+='top:  0px;';
		hs+='width: 80px;';
		hs+='height: 768px;';
		hs+=cssPrefix + 'transform-origin: 100% 50%;';
		hs+='visibility: inherit;';
		this._menu_06_der.setAttribute('style',hs);
		this._rectangle_der4=document.createElement('div');
		this._rectangle_der4.ggId='Rectangle_der';
		this._rectangle_der4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_der4.ggVisible=true;
		this._rectangle_der4.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-80 + w) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -80px;';
		hs+='top:  0px;';
		hs+='width: 80px;';
		hs+='height: 768px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.1;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='background-color: #ffffff;';
		this._rectangle_der4.setAttribute('style',hs);
		this._menu_06_der.appendChild(this._rectangle_der4);
		this._adelante4=document.createElement('div');
		this._adelante4.ggId='adelante';
		this._adelante4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._adelante4.ggVisible=true;
		this._adelante4.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-75 + w) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-100 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -75px;';
		hs+='top:  -100px;';
		hs+='width: 65px;';
		hs+='height: 170px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._adelante4.setAttribute('style',hs);
		this._adelante4__img=document.createElement('img');
		this._adelante4__img.setAttribute('src',basePath + 'images/adelante4.svg');
		this._adelante4__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 65px;height: 170px;');
		this._adelante4.appendChild(this._adelante4__img);
		this._adelante4.onclick=function () {
			me.player.playSound("click_close","1");
		}
		this._adelante4.onmouseover=function () {
			me._adelante4__img.src=basePath + 'images/adelante4__o.svg';
		}
		this._adelante4.onmouseout=function () {
			me._adelante4__img.src=basePath + 'images/adelante4.svg';
		}
		this._menu_06_der.appendChild(this._adelante4);
		this._marcador_145=document.createElement('div');
		this._marcador_145.ggId='Marcador 14';
		this._marcador_145.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marcador_145.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 589px;';
		hs+='top:  836px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._marcador_145.setAttribute('style',hs);
		this._marcador_145.ggMarkerNodeId='6';
		nodeMarker.push(this._marcador_145);
		this._marcador_145.onclick=function () {
			me.player.openNext('6');
		}
		this._marcador_145.ggActivate=function () {
			me._menu_06_der.style[domTransition]='none';
			me._menu_06_der.style.visibility='inherit';
			me._menu_06_der.ggVisible=true;
			me._menu_05_der.style[domTransition]='none';
			me._menu_05_der.style.visibility='hidden';
			me._menu_05_der.ggVisible=false;
		}
		this._menu_06_der.appendChild(this._marcador_145);
		this._menu_der.appendChild(this._menu_06_der);
		this._menu_05_der=document.createElement('div');
		this._menu_05_der.ggId='Menu_05_der';
		this._menu_05_der.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._menu_05_der.ggVisible=true;
		this._menu_05_der.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-80 + w) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -80px;';
		hs+='top:  0px;';
		hs+='width: 80px;';
		hs+='height: 768px;';
		hs+=cssPrefix + 'transform-origin: 100% 50%;';
		hs+='visibility: inherit;';
		this._menu_05_der.setAttribute('style',hs);
		this._rectangle_der3=document.createElement('div');
		this._rectangle_der3.ggId='Rectangle_der';
		this._rectangle_der3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_der3.ggVisible=true;
		this._rectangle_der3.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-80 + w) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -80px;';
		hs+='top:  0px;';
		hs+='width: 80px;';
		hs+='height: 768px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.1;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='background-color: #ffffff;';
		this._rectangle_der3.setAttribute('style',hs);
		this._menu_05_der.appendChild(this._rectangle_der3);
		this._adelante3=document.createElement('div');
		this._adelante3.ggId='adelante';
		this._adelante3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._adelante3.ggVisible=true;
		this._adelante3.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-75 + w) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-100 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -75px;';
		hs+='top:  -100px;';
		hs+='width: 65px;';
		hs+='height: 170px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._adelante3.setAttribute('style',hs);
		this._adelante3__img=document.createElement('img');
		this._adelante3__img.setAttribute('src',basePath + 'images/adelante3.svg');
		this._adelante3__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 65px;height: 170px;');
		this._adelante3.appendChild(this._adelante3__img);
		this._adelante3.onclick=function () {
			me.player.openNext("{node18}","");
			me.player.playSound("camera","1");
		}
		this._adelante3.onmouseover=function () {
			me._adelante3__img.src=basePath + 'images/adelante3__o.svg';
		}
		this._adelante3.onmouseout=function () {
			me._adelante3__img.src=basePath + 'images/adelante3.svg';
		}
		this._menu_05_der.appendChild(this._adelante3);
		this._marcador_144=document.createElement('div');
		this._marcador_144.ggId='Marcador 14';
		this._marcador_144.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marcador_144.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 589px;';
		hs+='top:  836px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._marcador_144.setAttribute('style',hs);
		this._marcador_144.ggMarkerNodeId='5';
		nodeMarker.push(this._marcador_144);
		this._marcador_144.onclick=function () {
			me.player.openNext('5');
		}
		this._marcador_144.ggActivate=function () {
			me._menu_05_der.style[domTransition]='none';
			me._menu_05_der.style.visibility='inherit';
			me._menu_05_der.ggVisible=true;
			me._menu_04_der.style[domTransition]='none';
			me._menu_04_der.style.visibility='hidden';
			me._menu_04_der.ggVisible=false;
		}
		this._menu_05_der.appendChild(this._marcador_144);
		this._menu_der.appendChild(this._menu_05_der);
		this._menu_04_der=document.createElement('div');
		this._menu_04_der.ggId='Menu_04_der';
		this._menu_04_der.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._menu_04_der.ggVisible=true;
		this._menu_04_der.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-80 + w) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -80px;';
		hs+='top:  0px;';
		hs+='width: 80px;';
		hs+='height: 768px;';
		hs+=cssPrefix + 'transform-origin: 100% 50%;';
		hs+='visibility: inherit;';
		this._menu_04_der.setAttribute('style',hs);
		this._rectangle_der2=document.createElement('div');
		this._rectangle_der2.ggId='Rectangle_der';
		this._rectangle_der2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_der2.ggVisible=true;
		this._rectangle_der2.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-80 + w) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -80px;';
		hs+='top:  0px;';
		hs+='width: 80px;';
		hs+='height: 768px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.1;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='background-color: #ffffff;';
		this._rectangle_der2.setAttribute('style',hs);
		this._menu_04_der.appendChild(this._rectangle_der2);
		this._adelante2=document.createElement('div');
		this._adelante2.ggId='adelante';
		this._adelante2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._adelante2.ggVisible=true;
		this._adelante2.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-75 + w) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-100 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -75px;';
		hs+='top:  -100px;';
		hs+='width: 65px;';
		hs+='height: 170px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._adelante2.setAttribute('style',hs);
		this._adelante2__img=document.createElement('img');
		this._adelante2__img.setAttribute('src',basePath + 'images/adelante2.svg');
		this._adelante2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 65px;height: 170px;');
		this._adelante2.appendChild(this._adelante2__img);
		this._adelante2.onclick=function () {
			me.player.openNext("{node16}","");
			me.player.playSound("camera","1");
		}
		this._adelante2.onmouseover=function () {
			me._adelante2__img.src=basePath + 'images/adelante2__o.svg';
		}
		this._adelante2.onmouseout=function () {
			me._adelante2__img.src=basePath + 'images/adelante2.svg';
		}
		this._menu_04_der.appendChild(this._adelante2);
		this._marcador_143=document.createElement('div');
		this._marcador_143.ggId='Marcador 14';
		this._marcador_143.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marcador_143.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 589px;';
		hs+='top:  836px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._marcador_143.setAttribute('style',hs);
		this._marcador_143.ggMarkerNodeId='4';
		nodeMarker.push(this._marcador_143);
		this._marcador_143.onclick=function () {
			me.player.openNext('4');
		}
		this._marcador_143.ggActivate=function () {
			me._menu_04_der.style[domTransition]='none';
			me._menu_04_der.style.visibility='inherit';
			me._menu_04_der.ggVisible=true;
			me._menu_03_der.style[domTransition]='none';
			me._menu_03_der.style.visibility='hidden';
			me._menu_03_der.ggVisible=false;
		}
		this._menu_04_der.appendChild(this._marcador_143);
		this._menu_der.appendChild(this._menu_04_der);
		this._menu_03_der=document.createElement('div');
		this._menu_03_der.ggId='Menu_03_der';
		this._menu_03_der.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._menu_03_der.ggVisible=true;
		this._menu_03_der.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-80 + w) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -80px;';
		hs+='top:  0px;';
		hs+='width: 80px;';
		hs+='height: 768px;';
		hs+=cssPrefix + 'transform-origin: 100% 50%;';
		hs+='visibility: inherit;';
		this._menu_03_der.setAttribute('style',hs);
		this._rectangle_der1=document.createElement('div');
		this._rectangle_der1.ggId='Rectangle_der';
		this._rectangle_der1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_der1.ggVisible=true;
		this._rectangle_der1.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-80 + w) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -80px;';
		hs+='top:  0px;';
		hs+='width: 80px;';
		hs+='height: 768px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.1;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='background-color: #ffffff;';
		this._rectangle_der1.setAttribute('style',hs);
		this._menu_03_der.appendChild(this._rectangle_der1);
		this._adelante1=document.createElement('div');
		this._adelante1.ggId='adelante';
		this._adelante1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._adelante1.ggVisible=true;
		this._adelante1.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-75 + w) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-100 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -75px;';
		hs+='top:  -100px;';
		hs+='width: 65px;';
		hs+='height: 170px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._adelante1.setAttribute('style',hs);
		this._adelante1__img=document.createElement('img');
		this._adelante1__img.setAttribute('src',basePath + 'images/adelante1.svg');
		this._adelante1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 65px;height: 170px;');
		this._adelante1.appendChild(this._adelante1__img);
		this._adelante1.onclick=function () {
			me.player.openNext("{node20}","");
			me.player.playSound("camera","1");
		}
		this._adelante1.onmouseover=function () {
			me._adelante1__img.src=basePath + 'images/adelante1__o.svg';
		}
		this._adelante1.onmouseout=function () {
			me._adelante1__img.src=basePath + 'images/adelante1.svg';
		}
		this._menu_03_der.appendChild(this._adelante1);
		this._marcador_142=document.createElement('div');
		this._marcador_142.ggId='Marcador 14';
		this._marcador_142.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marcador_142.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 589px;';
		hs+='top:  836px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._marcador_142.setAttribute('style',hs);
		this._marcador_142.ggMarkerNodeId='3';
		nodeMarker.push(this._marcador_142);
		this._marcador_142.onclick=function () {
			me.player.openNext('3');
		}
		this._marcador_142.ggActivate=function () {
			me._menu_03_der.style[domTransition]='none';
			me._menu_03_der.style.visibility='inherit';
			me._menu_03_der.ggVisible=true;
			me._menu_02_der.style[domTransition]='none';
			me._menu_02_der.style.visibility='hidden';
			me._menu_02_der.ggVisible=false;
		}
		this._menu_03_der.appendChild(this._marcador_142);
		this._menu_der.appendChild(this._menu_03_der);
		this._menu_02_der=document.createElement('div');
		this._menu_02_der.ggId='Menu_02_der';
		this._menu_02_der.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._menu_02_der.ggVisible=true;
		this._menu_02_der.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-80 + w) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -80px;';
		hs+='top:  0px;';
		hs+='width: 80px;';
		hs+='height: 768px;';
		hs+=cssPrefix + 'transform-origin: 100% 50%;';
		hs+='visibility: inherit;';
		this._menu_02_der.setAttribute('style',hs);
		this._rectangle_der0=document.createElement('div');
		this._rectangle_der0.ggId='Rectangle_der';
		this._rectangle_der0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_der0.ggVisible=true;
		this._rectangle_der0.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-80 + w) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -80px;';
		hs+='top:  0px;';
		hs+='width: 80px;';
		hs+='height: 768px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.1;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='background-color: #ffffff;';
		this._rectangle_der0.setAttribute('style',hs);
		this._menu_02_der.appendChild(this._rectangle_der0);
		this._adelante0=document.createElement('div');
		this._adelante0.ggId='adelante';
		this._adelante0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._adelante0.ggVisible=true;
		this._adelante0.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-75 + w) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-100 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -75px;';
		hs+='top:  -100px;';
		hs+='width: 65px;';
		hs+='height: 170px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._adelante0.setAttribute('style',hs);
		this._adelante0__img=document.createElement('img');
		this._adelante0__img.setAttribute('src',basePath + 'images/adelante0.svg');
		this._adelante0__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 65px;height: 170px;');
		this._adelante0.appendChild(this._adelante0__img);
		this._adelante0.onclick=function () {
			me.player.openNext("{node21}","");
			me.player.playSound("camera","1");
		}
		this._adelante0.onmouseover=function () {
			me._adelante0__img.src=basePath + 'images/adelante0__o.svg';
		}
		this._adelante0.onmouseout=function () {
			me._adelante0__img.src=basePath + 'images/adelante0.svg';
		}
		this._menu_02_der.appendChild(this._adelante0);
		this._marcador_141=document.createElement('div');
		this._marcador_141.ggId='Marcador 14';
		this._marcador_141.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marcador_141.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 589px;';
		hs+='top:  836px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._marcador_141.setAttribute('style',hs);
		this._marcador_141.ggMarkerNodeId='2';
		nodeMarker.push(this._marcador_141);
		this._marcador_141.onclick=function () {
			me.player.openNext('2');
		}
		this._marcador_141.ggActivate=function () {
			me._menu_02_der.style[domTransition]='none';
			me._menu_02_der.style.visibility='inherit';
			me._menu_02_der.ggVisible=true;
			me._menu_01_der.style[domTransition]='none';
			me._menu_01_der.style.visibility='hidden';
			me._menu_01_der.ggVisible=false;
		}
		this._menu_02_der.appendChild(this._marcador_141);
		this._menu_der.appendChild(this._menu_02_der);
		this._menu_01_der=document.createElement('div');
		this._menu_01_der.ggId='Menu_01_der';
		this._menu_01_der.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._menu_01_der.ggVisible=true;
		this._menu_01_der.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-80 + w) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -80px;';
		hs+='top:  0px;';
		hs+='width: 80px;';
		hs+='height: 768px;';
		hs+=cssPrefix + 'transform-origin: 100% 50%;';
		hs+='visibility: inherit;';
		this._menu_01_der.setAttribute('style',hs);
		this._rectangle_der=document.createElement('div');
		this._rectangle_der.ggId='Rectangle_der';
		this._rectangle_der.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_der.ggVisible=true;
		this._rectangle_der.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-80 + w) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -80px;';
		hs+='top:  0px;';
		hs+='width: 80px;';
		hs+='height: 768px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.1;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='background-color: #ffffff;';
		this._rectangle_der.setAttribute('style',hs);
		this._menu_01_der.appendChild(this._rectangle_der);
		this._adelante=document.createElement('div');
		this._adelante.ggId='adelante';
		this._adelante.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._adelante.ggVisible=true;
		this._adelante.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-75 + w) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-100 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -75px;';
		hs+='top:  -100px;';
		hs+='width: 65px;';
		hs+='height: 170px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._adelante.setAttribute('style',hs);
		this._adelante__img=document.createElement('img');
		this._adelante__img.setAttribute('src',basePath + 'images/adelante.svg');
		this._adelante__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 65px;height: 170px;');
		this._adelante.appendChild(this._adelante__img);
		this._adelante.onclick=function () {
			me.player.openNext("{node19}","");
			me.player.playSound("camera","1");
		}
		this._adelante.onmouseover=function () {
			me._adelante__img.src=basePath + 'images/adelante__o.svg';
		}
		this._adelante.onmouseout=function () {
			me._adelante__img.src=basePath + 'images/adelante.svg';
		}
		this._menu_01_der.appendChild(this._adelante);
		this._marcador_140=document.createElement('div');
		this._marcador_140.ggId='Marcador 14';
		this._marcador_140.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marcador_140.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 589px;';
		hs+='top:  836px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._marcador_140.setAttribute('style',hs);
		this._marcador_140.ggMarkerNodeId='1';
		nodeMarker.push(this._marcador_140);
		this._marcador_140.onclick=function () {
			me.player.openNext('1');
		}
		this._marcador_140.ggActivate=function () {
			me._menu_01_der.style[domTransition]='none';
			me._menu_01_der.style.visibility='inherit';
			me._menu_01_der.ggVisible=true;
		}
		this._menu_01_der.appendChild(this._marcador_140);
		this._menu_der.appendChild(this._menu_01_der);
		this.divSkin.appendChild(this._menu_der);
		this._marcador_14=document.createElement('div');
		this._marcador_14.ggId='Marcador 14';
		this._marcador_14.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marcador_14.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 1075px;';
		hs+='top:  582px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._marcador_14.setAttribute('style',hs);
		this._marcador_14.ggMarkerNodeId='3d';
		nodeMarker.push(this._marcador_14);
		this._marcador_14.onclick=function () {
			me.player.openNext('3d');
		}
		this._marcador_14.ggActivate=function () {
			me._menu_der.style[domTransition]='none';
			me._menu_der.style.visibility='inherit';
			me._menu_der.ggVisible=true;
			me._menu_izq.style[domTransition]='none';
			me._menu_izq.style.visibility='inherit';
			me._menu_izq.ggVisible=true;
			me._menu_teclado.style[domTransition]='none';
			me._menu_teclado.style.visibility='inherit';
			me._menu_teclado.ggVisible=true;
		}
		this._marcador_14.ggDeactivate=function () {
			me._menu_der.style[domTransition]='none';
			me._menu_der.style.visibility='hidden';
			me._menu_der.ggVisible=false;
			me._menu_izq.style[domTransition]='none';
			me._menu_izq.style.visibility='hidden';
			me._menu_izq.ggVisible=false;
			me._menu_teclado.style[domTransition]='none';
			me._menu_teclado.style.visibility='hidden';
			me._menu_teclado.ggVisible=false;
		}
		this.divSkin.appendChild(this._marcador_14);
		this._menu_teclado=document.createElement('div');
		this._menu_teclado.ggId='menu_teclado';
		this._menu_teclado.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._menu_teclado.ggVisible=true;
		this._menu_teclado.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				h=this.parentNode.offsetHeight;
				this.style.top=(-128 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 70px;';
		hs+='top:  -128px;';
		hs+='width: 164px;';
		hs+='height: 108px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._menu_teclado.setAttribute('style',hs);
		this._left=document.createElement('div');
		this._left.ggId='left';
		this._left.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._left.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 11px;';
		hs+='top:  55px;';
		hs+='width: 40px;';
		hs+='height: 40px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._left.setAttribute('style',hs);
		this._left__img=document.createElement('img');
		this._left__img.setAttribute('src',basePath + 'images/left.svg');
		this._left__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 40px;height: 40px;');
		this._left.appendChild(this._left__img);
		this._left.onclick=function () {
			me.player.changePan(1,true);
		}
		this._left.onmouseover=function () {
			me._left__img.src=basePath + 'images/left__o.svg';
		}
		this._left.onmouseout=function () {
			me._left__img.src=basePath + 'images/left.svg';
		}
		this._menu_teclado.appendChild(this._left);
		this._right=document.createElement('div');
		this._right.ggId='right';
		this._right.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._right.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 99px;';
		hs+='top:  54px;';
		hs+='width: 40px;';
		hs+='height: 40px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._right.setAttribute('style',hs);
		this._right__img=document.createElement('img');
		this._right__img.setAttribute('src',basePath + 'images/right.svg');
		this._right__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 40px;height: 40px;');
		this._right.appendChild(this._right__img);
		this._right.onclick=function () {
			me.player.changePan(-1,true);
		}
		this._right.onmouseover=function () {
			me._right__img.src=basePath + 'images/right__o.svg';
		}
		this._right.onmouseout=function () {
			me._right__img.src=basePath + 'images/right.svg';
		}
		this._menu_teclado.appendChild(this._right);
		this._up=document.createElement('div');
		this._up.ggId='up';
		this._up.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._up.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 55px;';
		hs+='top:  9px;';
		hs+='width: 40px;';
		hs+='height: 40px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._up.setAttribute('style',hs);
		this._up__img=document.createElement('img');
		this._up__img.setAttribute('src',basePath + 'images/up.svg');
		this._up__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 40px;height: 40px;');
		this._up.appendChild(this._up__img);
		this._up.onclick=function () {
			me.player.changeTilt(1,true);
		}
		this._up.onmouseover=function () {
			me._up__img.src=basePath + 'images/up__o.svg';
		}
		this._up.onmouseout=function () {
			me._up__img.src=basePath + 'images/up.svg';
		}
		this._menu_teclado.appendChild(this._up);
		this._down=document.createElement('div');
		this._down.ggId='down';
		this._down.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._down.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 55px;';
		hs+='top:  54px;';
		hs+='width: 40px;';
		hs+='height: 40px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._down.setAttribute('style',hs);
		this._down__img=document.createElement('img');
		this._down__img.setAttribute('src',basePath + 'images/down.svg');
		this._down__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 40px;height: 40px;');
		this._down.appendChild(this._down__img);
		this._down.onclick=function () {
			me.player.changeTilt(-1,true);
		}
		this._down.onmouseover=function () {
			me._down__img.src=basePath + 'images/down__o.svg';
		}
		this._down.onmouseout=function () {
			me._down__img.src=basePath + 'images/down.svg';
		}
		this._menu_teclado.appendChild(this._down);
		this.divSkin.appendChild(this._menu_teclado);
		this._screen_tint=document.createElement('div');
		this._screen_tint.ggId='screen_tint';
		this._screen_tint.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._screen_tint.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 5000px;';
		hs+='height: 5000px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0;';
		hs+='visibility: hidden;';
		hs+='border: 0px solid #000000;';
		hs+='background-image:url(' + basePath + 'images/alpha_background_000000_100.png);';
		this._screen_tint.setAttribute('style',hs);
		this.divSkin.appendChild(this._screen_tint);
		this._how_3d=document.createElement('div');
		this._how_3d.ggId='HOW_3D';
		this._how_3d.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._how_3d.ggVisible=false;
		this._how_3d.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-300 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-190 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -300px;';
		hs+='top:  -190px;';
		hs+='width: 600px;';
		hs+='height: 380px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._how_3d.setAttribute('style',hs);
		this._how_3d.onmouseover=function () {
			me.elementMouseOver['how_3d']=true;
		}
		this._how_3d.onmouseout=function () {
			me.elementMouseOver['how_3d']=false;
		}
		this._how_3d.ontouchend=function () {
			me.elementMouseOver['how_3d']=false;
		}
		this._rectangle_69=document.createElement('div');
		this._rectangle_69.ggId='Rectangle 69';
		this._rectangle_69.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_69.ggVisible=true;
		this._rectangle_69.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-302 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-192 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -302px;';
		hs+='top:  -192px;';
		hs+='width: 596px;';
		hs+='height: 376px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 4px solid #000000;';
		hs+='border-radius: 30px;';
		hs+=cssPrefix + 'border-radius: 30px;';
		hs+='background-image:url(' + basePath + 'images/alpha_background_ffffff_155.png);';
		this._rectangle_69.setAttribute('style',hs);
		this._svg_70=document.createElement('div');
		this._svg_70.ggId='Svg 70';
		this._svg_70.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._svg_70.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 55px;';
		hs+='top:  27px;';
		hs+='width: 100px;';
		hs+='height: 100px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._svg_70.setAttribute('style',hs);
		this._svg_70__img=document.createElement('img');
		this._svg_70__img.setAttribute('src',basePath + 'images/svg_70.svg');
		this._svg_70__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100px;height: 100px;');
		this._svg_70.appendChild(this._svg_70__img);
		this._rectangle_69.appendChild(this._svg_70);
		this._svg_71=document.createElement('div');
		this._svg_71.ggId='Svg 71';
		this._svg_71.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._svg_71.ggVisible=true;
		this._svg_71.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				h=this.parentNode.offsetHeight;
				this.style.top=(-55 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 23px;';
		hs+='top:  -51px;';
		hs+='width: 164px;';
		hs+='height: 108px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._svg_71.setAttribute('style',hs);
		this._svg_71__img=document.createElement('img');
		this._svg_71__img.setAttribute('src',basePath + 'images/svg_71.svg');
		this._svg_71__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 164px;height: 108px;');
		this._svg_71.appendChild(this._svg_71__img);
		this._rectangle_69.appendChild(this._svg_71);
		this._svg_72=document.createElement('div');
		this._svg_72.ggId='Svg 72';
		this._svg_72.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._svg_72.ggVisible=true;
		this._svg_72.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				h=this.parentNode.offsetHeight;
				this.style.top=(-125 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 40px;';
		hs+='top:  -121px;';
		hs+='width: 43px;';
		hs+='height: 100px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._svg_72.setAttribute('style',hs);
		this._svg_72__img=document.createElement('img');
		this._svg_72__img.setAttribute('src',basePath + 'images/svg_72.svg');
		this._svg_72__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 43px;height: 100px;');
		this._svg_72.appendChild(this._svg_72__img);
		this._svg_720=document.createElement('div');
		this._svg_720.ggId='Svg 72';
		this._svg_720.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._svg_720.ggVisible=true;
		this._svg_720.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				h=this.parentNode.offsetHeight;
				this.style.top=(-100 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 90px;';
		hs+='top:  -100px;';
		hs+='width: 43px;';
		hs+='height: 100px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._svg_720.setAttribute('style',hs);
		this._svg_720__img=document.createElement('img');
		this._svg_720__img.setAttribute('src',basePath + 'images/svg_720.svg');
		this._svg_720__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 43px;height: 100px;');
		this._svg_720.appendChild(this._svg_720__img);
		this._svg_72.appendChild(this._svg_720);
		this._rectangle_69.appendChild(this._svg_72);
		this._rectangle_741=document.createElement('div');
		this._rectangle_741.ggId='Rectangle 74';
		this._rectangle_741.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_741.ggVisible=true;
		this._rectangle_741.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-382 + w) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -378px;';
		hs+='top:  20px;';
		hs+='width: 357px;';
		hs+='height: 90px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 3px solid #000000;';
		hs+='border-radius: 15px;';
		hs+=cssPrefix + 'border-radius: 15px;';
		hs+='background-color: #646464;';
		this._rectangle_741.setAttribute('style',hs);
		this._text_771=document.createElement('div');
		this._text_771.ggId='Text 77';
		this._text_771.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_771.ggVisible=true;
		this._text_771.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-180 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-33 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -177px;';
		hs+='top:  -30px;';
		hs+='width: 350px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='background-image:url(images/alpha_background_ffffff_0.png);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._text_771.setAttribute('style',hs);
		this._text_771.innerHTML="<b\/>Hold Click and move your mouse.<b\/>";
		this._rectangle_741.appendChild(this._text_771);
		this._text_81=document.createElement('div');
		this._text_81.ggId='Text 81';
		this._text_81.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_81.ggVisible=true;
		this._text_81.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-180 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-50 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -177px;';
		hs+='top:  -47px;';
		hs+='width: 350px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='background-image:url(images/alpha_background_ffffff_0.png);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._text_81.setAttribute('style',hs);
		this._text_81.innerHTML="<b\/>Con Click sostenido mueve el mouse.<b\/>";
		this._rectangle_741.appendChild(this._text_81);
		this._rectangle_69.appendChild(this._rectangle_741);
		this._rectangle_740=document.createElement('div');
		this._rectangle_740.ggId='Rectangle 74';
		this._rectangle_740.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_740.ggVisible=true;
		this._rectangle_740.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-382 + w) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-53 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -378px;';
		hs+='top:  -49px;';
		hs+='width: 357px;';
		hs+='height: 90px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 3px solid #000000;';
		hs+='border-radius: 15px;';
		hs+=cssPrefix + 'border-radius: 15px;';
		hs+='background-color: #646464;';
		this._rectangle_740.setAttribute('style',hs);
		this._text_770=document.createElement('div');
		this._text_770.ggId='Text 77';
		this._text_770.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_770.ggVisible=true;
		this._text_770.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-180 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-33 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -177px;';
		hs+='top:  -30px;';
		hs+='width: 350px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='background-image:url(images/alpha_background_ffffff_0.png);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._text_770.setAttribute('style',hs);
		this._text_770.innerHTML="<b\/>Use THE or YOUR keyboard to move the scene.<b\/>";
		this._rectangle_740.appendChild(this._text_770);
		this._text_82=document.createElement('div');
		this._text_82.ggId='Text 82';
		this._text_82.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_82.ggVisible=true;
		this._text_82.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-180 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-48 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -177px;';
		hs+='top:  -45px;';
		hs+='width: 350px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='background-image:url(images/alpha_background_ffffff_0.png);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._text_82.setAttribute('style',hs);
		this._text_82.innerHTML="<b\/>Usa EL o TU teclado para mover la escena.<b\/>\n";
		this._rectangle_740.appendChild(this._text_82);
		this._rectangle_69.appendChild(this._rectangle_740);
		this._rectangle_74=document.createElement('div');
		this._rectangle_74.ggId='Rectangle 74';
		this._rectangle_74.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_74.ggVisible=true;
		this._rectangle_74.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-382 + w) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-123 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -378px;';
		hs+='top:  -119px;';
		hs+='width: 357px;';
		hs+='height: 90px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 3px solid #000000;';
		hs+='border-radius: 15px;';
		hs+=cssPrefix + 'border-radius: 15px;';
		hs+='background-color: #646464;';
		this._rectangle_74.setAttribute('style',hs);
		this._text_77=document.createElement('div');
		this._text_77.ggId='Text 77';
		this._text_77.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_77.ggVisible=true;
		this._text_77.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-180 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-32 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -177px;';
		hs+='top:  -29px;';
		hs+='width: 350px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='background-image:url(images/alpha_background_ffffff_0.png);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._text_77.setAttribute('style',hs);
		this._text_77.innerHTML="<b\/>Use the arrows to change panoramas.<b\/>\n";
		this._rectangle_74.appendChild(this._text_77);
		this._text_83=document.createElement('div');
		this._text_83.ggId='Text 83';
		this._text_83.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_83.ggVisible=true;
		this._text_83.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-180 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-44 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -177px;';
		hs+='top:  -41px;';
		hs+='width: 350px;';
		hs+='height: 20px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='background-image:url(images/alpha_background_ffffff_0.png);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._text_83.setAttribute('style',hs);
		this._text_83.innerHTML="<b\/>Usa las flechas para cambiar de panor\xe1mico.<b\/>";
		this._rectangle_74.appendChild(this._text_83);
		this._rectangle_69.appendChild(this._rectangle_74);
		this._how_3d.appendChild(this._rectangle_69);
		this.divSkin.appendChild(this._how_3d);
		this._popup_01=document.createElement('div');
		this._popup_01.ggId='popup_01';
		this._popup_01.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._popup_01.ggVisible=true;
		this._popup_01.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-540 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-384 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -540px;';
		hs+='top:  -384px;';
		hs+='width: 42px;';
		hs+='height: 36px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='overflow: hidden;';
		this._popup_01.setAttribute('style',hs);
		this._popup_01.onclick=function () {
			me.player.playSound("camera","1");
			if (me.player.transitionsDisabled) {
				me._screen_tint.style[domTransition]='none';
			} else {
				me._screen_tint.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._screen_tint.style.opacity='1';
			me._screen_tint.style.visibility=me._screen_tint.ggVisible?'inherit':'hidden';
		}
		this.divSkin.appendChild(this._popup_01);
		this._popup_02=document.createElement('div');
		this._popup_02.ggId='popup_02';
		this._popup_02.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._popup_02.ggVisible=true;
		this._popup_02.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-540 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-384 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -540px;';
		hs+='top:  -384px;';
		hs+='width: 42px;';
		hs+='height: 36px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='overflow: hidden;';
		this._popup_02.setAttribute('style',hs);
		this._popup_02.onclick=function () {
			me.player.playSound("camera","1");
			if (me.player.transitionsDisabled) {
				me._screen_tint.style[domTransition]='none';
			} else {
				me._screen_tint.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._screen_tint.style.opacity='1';
			me._screen_tint.style.visibility=me._screen_tint.ggVisible?'inherit':'hidden';
		}
		this.divSkin.appendChild(this._popup_02);
		this._marcador_1411.ggMarkerNormal=null;
		this._marcador_1411.ggMarkerActive=null;
		this._marcador_1410.ggMarkerNormal=null;
		this._marcador_1410.ggMarkerActive=null;
		this._marcador_149.ggMarkerNormal=null;
		this._marcador_149.ggMarkerActive=null;
		this._marcador_148.ggMarkerNormal=null;
		this._marcador_148.ggMarkerActive=null;
		this._marcador_147.ggMarkerNormal=null;
		this._marcador_147.ggMarkerActive=null;
		this._marcador_146.ggMarkerNormal=null;
		this._marcador_146.ggMarkerActive=null;
		this._marcador_145.ggMarkerNormal=null;
		this._marcador_145.ggMarkerActive=null;
		this._marcador_144.ggMarkerNormal=null;
		this._marcador_144.ggMarkerActive=null;
		this._marcador_143.ggMarkerNormal=null;
		this._marcador_143.ggMarkerActive=null;
		this._marcador_142.ggMarkerNormal=null;
		this._marcador_142.ggMarkerActive=null;
		this._marcador_141.ggMarkerNormal=null;
		this._marcador_141.ggMarkerActive=null;
		this._marcador_140.ggMarkerNormal=null;
		this._marcador_140.ggMarkerActive=null;
		this._marcador_14.ggMarkerNormal=null;
		this._marcador_14.ggMarkerActive=null;
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
		}
		this.divSkin.ggLoaded=function() {
			me.player.toggleFullscreen();
		}
		this.divSkin.ggReLoaded=function() {
		}
		this.divSkin.ggEnterFullscreen=function() {
		}
		this.divSkin.ggExitFullscreen=function() {
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
		if (id=='pop_01') {
			me._popup_01.onclick();
		}
		if (id=='pop_02') {
			me._popup_02.onclick();
		}
	}
	this.hotspotProxyOver=function(id) {
	}
	this.hotspotProxyOut=function(id) {
	}
	this.changeActiveNode=function(id) {
		var newMarker=new Array();
		var i,j;
		var tags=me.player.userdata.tags;
		for (i=0;i<nodeMarker.length;i++) {
			var match=false;
			if (nodeMarker[i].ggMarkerNodeId==id) match=true;
			for(j=0;j<tags.length;j++) {
				if (nodeMarker[i].ggMarkerNodeId==tags[j]) match=true;
			}
			if (match) {
				newMarker.push(nodeMarker[i]);
			}
		}
		for(i=0;i<activeNodeMarker.length;i++) {
			if (newMarker.indexOf(activeNodeMarker[i])<0) {
				if (activeNodeMarker[i].ggMarkerNormal) {
					activeNodeMarker[i].ggMarkerNormal.style.visibility='inherit';
				}
				if (activeNodeMarker[i].ggMarkerActive) {
					activeNodeMarker[i].ggMarkerActive.style.visibility='hidden';
				}
				if (activeNodeMarker[i].ggDeactivate) {
					activeNodeMarker[i].ggDeactivate();
				}
			}
		}
		for(i=0;i<newMarker.length;i++) {
			if (activeNodeMarker.indexOf(newMarker[i])<0) {
				if (newMarker[i].ggMarkerNormal) {
					newMarker[i].ggMarkerNormal.style.visibility='hidden';
				}
				if (newMarker[i].ggMarkerActive) {
					newMarker[i].ggMarkerActive.style.visibility='inherit';
				}
				if (newMarker[i].ggActivate) {
					newMarker[i].ggActivate();
				}
			}
		}
		activeNodeMarker=newMarker;
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
		if (me.elementMouseOver['how_3d']) {
			me._how_3d.style[domTransition]='none';
			me._how_3d.style.visibility='hidden';
			me._how_3d.ggVisible=false;
		}
	};
	function SkinHotspotClass(skinObj,hotspot) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		this.elementMouseDown=new Array();
		this.elementMouseOver=new Array();
		this.__div=document.createElement('div');
		this.__div.setAttribute('style','position:absolute; left:0px;top:0px;visibility: inherit;');
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		if (hotspot.skinid=='popduda') {
			this.__div=document.createElement('div');
			this.__div.ggId='popduda';
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			hs ='position:absolute;';
			hs+='left: 424px;';
			hs+='top:  20px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me._pdtext.style[domTransition]='none';
				me._pdtext.style.visibility='inherit';
				me._pdtext.ggVisible=true;
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me._pdtext.style[domTransition]='none';
				me._pdtext.style.visibility='inherit';
				me._pdtext.ggVisible=true;
				me.player.playSound("click_close","1");
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me._pdtext.style[domTransition]='none';
				me._pdtext.style.visibility='hidden';
				me._pdtext.ggVisible=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._picture0=document.createElement('div');
			this._picture0.ggId='picture';
			this._picture0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._picture0.ggVisible=true;
			hs ='position:absolute;';
			hs+='left: -17px;';
			hs+='top:  -16px;';
			hs+='width: 64px;';
			hs+='height: 64px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._picture0.setAttribute('style',hs);
			this._picture0__img=document.createElement('img');
			this._picture0__img.setAttribute('src',basePath + 'images/picture0.svg');
			this._picture0__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 64px;height: 64px;');
			this._picture0.appendChild(this._picture0__img);
			this._picture0.onmouseover=function () {
				me._picture0__img.src=basePath + 'images/picture0__o.svg';
			}
			this._picture0.onmouseout=function () {
				me._picture0__img.src=basePath + 'images/picture0.svg';
			}
			this.__div.appendChild(this._picture0);
			this._pdtext=document.createElement('div');
			this._pdtext.ggId='pdtext';
			this._pdtext.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._pdtext.ggVisible=false;
			this._pdtext.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.style.left=(-124 + (101-this.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -124px;';
			hs+='top:  20px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			hs+='border: 1px solid #ffffff;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			hs+='color: #ffffff;';
			hs+='background-image:url(images/alpha_background_000000_150.png);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='white-space: nowrap;';
			hs+='padding: 1px 2px 1px 2px;';
			hs+='overflow: hidden;';
			this._pdtext.setAttribute('style',hs);
			this._pdtext.innerHTML=me.hotspot.title;
			this.__div.appendChild(this._pdtext);
		} else
		if (hotspot.skinid=='popup') {
			this.__div=document.createElement('div');
			this.__div.ggId='popup';
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			hs ='position:absolute;';
			hs+='left: 424px;';
			hs+='top:  20px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._picture=document.createElement('div');
			this._picture.ggId='picture';
			this._picture.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._picture.ggVisible=true;
			hs ='position:absolute;';
			hs+='left: -17px;';
			hs+='top:  -16px;';
			hs+='width: 64px;';
			hs+='height: 64px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._picture.setAttribute('style',hs);
			this._picture__img=document.createElement('img');
			this._picture__img.setAttribute('src',basePath + 'images/picture.svg');
			this._picture__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 64px;height: 64px;');
			this._picture.appendChild(this._picture__img);
			this._picture.onmouseover=function () {
				me._picture__img.src=basePath + 'images/picture__o.svg';
			}
			this._picture.onmouseout=function () {
				me._picture__img.src=basePath + 'images/picture.svg';
			}
			this.__div.appendChild(this._picture);
		} else
		{
			this.__div=document.createElement('div');
			this.__div.ggId='hotspot';
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			hs ='position:absolute;';
			hs+='left: 350px;';
			hs+='top:  20px;';
			hs+='width: 5px;';
			hs+='height: 5px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this.__div.setAttribute('style',hs);
			this.__div.onclick=function () {
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
				me.player.playSound("camera","1");
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me._hstext.style[domTransition]='none';
				me._hstext.style.visibility='inherit';
				me._hstext.ggVisible=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
				me._hstext.style[domTransition]='none';
				me._hstext.style.visibility='hidden';
				me._hstext.ggVisible=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this._hsimage=document.createElement('div');
			this._hsimage.ggId='hsimage';
			this._hsimage.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hsimage.ggVisible=true;
			hs ='position:absolute;';
			hs+='left: -16px;';
			hs+='top:  -16px;';
			hs+='width: 64px;';
			hs+='height: 64px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._hsimage.setAttribute('style',hs);
			this._hsimage__img=document.createElement('img');
			this._hsimage__img.setAttribute('src',basePath + 'images/hsimage.svg');
			this._hsimage__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 64px;height: 64px;');
			this._hsimage.appendChild(this._hsimage__img);
			this._hsimage.onmouseover=function () {
				me._hsimage__img.src=basePath + 'images/hsimage__o.svg';
			}
			this._hsimage.onmouseout=function () {
				me._hsimage__img.src=basePath + 'images/hsimage.svg';
			}
			this.__div.appendChild(this._hsimage);
			this._hstext=document.createElement('div');
			this._hstext.ggId='hstext';
			this._hstext.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._hstext.ggVisible=false;
			this._hstext.ggUpdatePosition=function() {
				this.style[domTransition]='none';
				this.style.left=(-50 + (101-this.offsetWidth)/2) + 'px';
			}
			hs ='position:absolute;';
			hs+='left: -50px;';
			hs+='top:  20px;';
			hs+='width: auto;';
			hs+='height: auto;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: hidden;';
			hs+='border: 1px solid #000000;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			hs+='color: #000000;';
			hs+='background-image:url(images/alpha_background_ffffff_180.png);';
			hs+='text-align: center;';
			hs+='white-space: nowrap;';
			hs+='white-space: nowrap;';
			hs+='padding: 1px 2px 1px 2px;';
			hs+='overflow: hidden;';
			this._hstext.setAttribute('style',hs);
			this._hstext.innerHTML=me.hotspot.title;
			this.__div.appendChild(this._hstext);
		}
	};
	this.addSkinHotspot=function(hotspot) {
		return new SkinHotspotClass(me,hotspot);
	}
	this.addSkin();
};