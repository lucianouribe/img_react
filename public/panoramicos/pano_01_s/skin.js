// Garden Gnome Software - Skin
// Pano2VR 4.0/3102S
// Filename: WEB_Tablet_3Dcito.ggsk
// Generated Wed 29. Mar 21:14:08 2017

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
		this._menu_izq.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				h=this.parentNode.offsetHeight;
				this.style.top=(-240 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  -240px;';
		hs+='width: 80px;';
		hs+='height: 768px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._menu_izq.setAttribute('style',hs);
		this._menu_06_izq=document.createElement('div');
		this._menu_06_izq.ggId='Menu_06_izq';
		this._menu_06_izq.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._menu_06_izq.ggVisible=true;
		this._menu_06_izq.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				h=this.parentNode.offsetHeight;
				this.style.top=(-384 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  -384px;';
		hs+='width: 80px;';
		hs+='height: 768px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._menu_06_izq.setAttribute('style',hs);
		this._atras4=document.createElement('div');
		this._atras4.ggId='atras';
		this._atras4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._atras4.ggVisible=true;
		this._atras4.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				h=this.parentNode.offsetHeight;
				this.style.top=(-184 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 7px;';
		hs+='top:  -184px;';
		hs+='width: 32px;';
		hs+='height: 86px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._atras4.setAttribute('style',hs);
		this._atras4__img=document.createElement('img');
		this._atras4__img.setAttribute('src',basePath + 'images/atras4.svg');
		this._atras4__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 86px;');
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
		this._menu_05_izq.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				h=this.parentNode.offsetHeight;
				this.style.top=(-384 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  -384px;';
		hs+='width: 80px;';
		hs+='height: 768px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._menu_05_izq.setAttribute('style',hs);
		this._atras3=document.createElement('div');
		this._atras3.ggId='atras';
		this._atras3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._atras3.ggVisible=true;
		this._atras3.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				h=this.parentNode.offsetHeight;
				this.style.top=(-184 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 7px;';
		hs+='top:  -184px;';
		hs+='width: 32px;';
		hs+='height: 86px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._atras3.setAttribute('style',hs);
		this._atras3__img=document.createElement('img');
		this._atras3__img.setAttribute('src',basePath + 'images/atras3.svg');
		this._atras3__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 86px;');
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
		this._menu_04_izq.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				h=this.parentNode.offsetHeight;
				this.style.top=(-384 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  -384px;';
		hs+='width: 80px;';
		hs+='height: 768px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._menu_04_izq.setAttribute('style',hs);
		this._atras2=document.createElement('div');
		this._atras2.ggId='atras';
		this._atras2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._atras2.ggVisible=true;
		this._atras2.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				h=this.parentNode.offsetHeight;
				this.style.top=(-184 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 7px;';
		hs+='top:  -184px;';
		hs+='width: 32px;';
		hs+='height: 86px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._atras2.setAttribute('style',hs);
		this._atras2__img=document.createElement('img');
		this._atras2__img.setAttribute('src',basePath + 'images/atras2.svg');
		this._atras2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 86px;');
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
		this._menu_03_izq.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				h=this.parentNode.offsetHeight;
				this.style.top=(-384 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  -384px;';
		hs+='width: 80px;';
		hs+='height: 768px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._menu_03_izq.setAttribute('style',hs);
		this._atras1=document.createElement('div');
		this._atras1.ggId='atras';
		this._atras1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._atras1.ggVisible=true;
		this._atras1.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				h=this.parentNode.offsetHeight;
				this.style.top=(-184 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 7px;';
		hs+='top:  -184px;';
		hs+='width: 32px;';
		hs+='height: 86px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._atras1.setAttribute('style',hs);
		this._atras1__img=document.createElement('img');
		this._atras1__img.setAttribute('src',basePath + 'images/atras1.svg');
		this._atras1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 86px;');
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
		this._menu_02_izq.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				h=this.parentNode.offsetHeight;
				this.style.top=(-384 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  -384px;';
		hs+='width: 80px;';
		hs+='height: 768px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._menu_02_izq.setAttribute('style',hs);
		this._atras0=document.createElement('div');
		this._atras0.ggId='atras';
		this._atras0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._atras0.ggVisible=true;
		this._atras0.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				h=this.parentNode.offsetHeight;
				this.style.top=(-184 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 7px;';
		hs+='top:  -184px;';
		hs+='width: 32px;';
		hs+='height: 86px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._atras0.setAttribute('style',hs);
		this._atras0__img=document.createElement('img');
		this._atras0__img.setAttribute('src',basePath + 'images/atras0.svg');
		this._atras0__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 86px;');
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
		this._menu_01_izq.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				h=this.parentNode.offsetHeight;
				this.style.top=(-384 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  -384px;';
		hs+='width: 80px;';
		hs+='height: 768px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._menu_01_izq.setAttribute('style',hs);
		this._atras=document.createElement('div');
		this._atras.ggId='atras';
		this._atras.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._atras.ggVisible=true;
		this._atras.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				h=this.parentNode.offsetHeight;
				this.style.top=(-184 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 7px;';
		hs+='top:  -184px;';
		hs+='width: 32px;';
		hs+='height: 86px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._atras.setAttribute('style',hs);
		this._atras__img=document.createElement('img');
		this._atras__img.setAttribute('src',basePath + 'images/atras.svg');
		this._atras__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 86px;');
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
				this.style.left=(-40 + w) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-240 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -40px;';
		hs+='top:  -240px;';
		hs+='width: 40px;';
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
				this.style.left=(-40 + w) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-384 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -40px;';
		hs+='top:  -384px;';
		hs+='width: 40px;';
		hs+='height: 768px;';
		hs+=cssPrefix + 'transform-origin: 100% 50%;';
		hs+='visibility: inherit;';
		this._menu_06_der.setAttribute('style',hs);
		this._adelante4=document.createElement('div');
		this._adelante4.ggId='adelante';
		this._adelante4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._adelante4.ggVisible=true;
		this._adelante4.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-40 + w) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-184 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -40px;';
		hs+='top:  -184px;';
		hs+='width: 32px;';
		hs+='height: 86px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._adelante4.setAttribute('style',hs);
		this._adelante4__img=document.createElement('img');
		this._adelante4__img.setAttribute('src',basePath + 'images/adelante4.svg');
		this._adelante4__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 86px;');
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
				this.style.left=(-40 + w) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -40px;';
		hs+='top:  0px;';
		hs+='width: 40px;';
		hs+='height: 768px;';
		hs+=cssPrefix + 'transform-origin: 100% 50%;';
		hs+='visibility: inherit;';
		this._menu_05_der.setAttribute('style',hs);
		this._adelante3=document.createElement('div');
		this._adelante3.ggId='adelante';
		this._adelante3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._adelante3.ggVisible=true;
		this._adelante3.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-40 + w) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-184 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -40px;';
		hs+='top:  -184px;';
		hs+='width: 32px;';
		hs+='height: 86px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._adelante3.setAttribute('style',hs);
		this._adelante3__img=document.createElement('img');
		this._adelante3__img.setAttribute('src',basePath + 'images/adelante3.svg');
		this._adelante3__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 86px;');
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
				this.style.left=(-40 + w) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-384 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -40px;';
		hs+='top:  -384px;';
		hs+='width: 40px;';
		hs+='height: 768px;';
		hs+=cssPrefix + 'transform-origin: 100% 50%;';
		hs+='visibility: inherit;';
		this._menu_04_der.setAttribute('style',hs);
		this._adelante2=document.createElement('div');
		this._adelante2.ggId='adelante';
		this._adelante2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._adelante2.ggVisible=true;
		this._adelante2.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-40 + w) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-184 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -40px;';
		hs+='top:  -184px;';
		hs+='width: 32px;';
		hs+='height: 86px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._adelante2.setAttribute('style',hs);
		this._adelante2__img=document.createElement('img');
		this._adelante2__img.setAttribute('src',basePath + 'images/adelante2.svg');
		this._adelante2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 86px;');
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
				this.style.left=(-40 + w) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-384 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -40px;';
		hs+='top:  -384px;';
		hs+='width: 40px;';
		hs+='height: 768px;';
		hs+=cssPrefix + 'transform-origin: 100% 50%;';
		hs+='visibility: inherit;';
		this._menu_03_der.setAttribute('style',hs);
		this._adelante1=document.createElement('div');
		this._adelante1.ggId='adelante';
		this._adelante1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._adelante1.ggVisible=true;
		this._adelante1.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-40 + w) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-184 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -40px;';
		hs+='top:  -184px;';
		hs+='width: 32px;';
		hs+='height: 86px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._adelante1.setAttribute('style',hs);
		this._adelante1__img=document.createElement('img');
		this._adelante1__img.setAttribute('src',basePath + 'images/adelante1.svg');
		this._adelante1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 86px;');
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
				this.style.left=(-40 + w) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-384 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -40px;';
		hs+='top:  -384px;';
		hs+='width: 40px;';
		hs+='height: 768px;';
		hs+=cssPrefix + 'transform-origin: 100% 50%;';
		hs+='visibility: inherit;';
		this._menu_02_der.setAttribute('style',hs);
		this._adelante0=document.createElement('div');
		this._adelante0.ggId='adelante';
		this._adelante0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._adelante0.ggVisible=true;
		this._adelante0.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-40 + w) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-184 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -40px;';
		hs+='top:  -184px;';
		hs+='width: 32px;';
		hs+='height: 86px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._adelante0.setAttribute('style',hs);
		this._adelante0__img=document.createElement('img');
		this._adelante0__img.setAttribute('src',basePath + 'images/adelante0.svg');
		this._adelante0__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 86px;');
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
				this.style.left=(-40 + w) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-384 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -40px;';
		hs+='top:  -384px;';
		hs+='width: 40px;';
		hs+='height: 768px;';
		hs+=cssPrefix + 'transform-origin: 100% 50%;';
		hs+='visibility: inherit;';
		this._menu_01_der.setAttribute('style',hs);
		this._adelante=document.createElement('div');
		this._adelante.ggId='adelante';
		this._adelante.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._adelante.ggVisible=true;
		this._adelante.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-40 + w) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-184 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -40px;';
		hs+='top:  -184px;';
		hs+='width: 32px;';
		hs+='height: 86px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._adelante.setAttribute('style',hs);
		this._adelante__img=document.createElement('img');
		this._adelante__img.setAttribute('src',basePath + 'images/adelante.svg');
		this._adelante__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 86px;');
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
		}
		this._marcador_14.ggDeactivate=function () {
			me._menu_der.style[domTransition]='none';
			me._menu_der.style.visibility='hidden';
			me._menu_der.ggVisible=false;
			me._menu_izq.style[domTransition]='none';
			me._menu_izq.style.visibility='hidden';
			me._menu_izq.ggVisible=false;
		}
		this.divSkin.appendChild(this._marcador_14);
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