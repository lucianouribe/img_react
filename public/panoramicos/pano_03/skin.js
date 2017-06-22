// Garden Gnome Software - Skin
// Pano2VR 4.0/3102S
// Filename: WEB_Tablet_Radar.ggsk
// Generated Tue 7. Mar 21:49:48 2017

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
		this._marcador_140=document.createElement('div');
		this._marcador_140.ggId='Marcador 14';
		this._marcador_140.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marcador_140.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 1075px;';
		hs+='top:  582px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._marcador_140.setAttribute('style',hs);
		this._marcador_140.ggMarkerNodeId='3d';
		nodeMarker.push(this._marcador_140);
		this._marcador_140.onclick=function () {
			me.player.openNext('3d');
		}
		this._marcador_140.ggActivate=function () {
			me._menu_teclado.style[domTransition]='none';
			me._menu_teclado.style.visibility='inherit';
			me._menu_teclado.ggVisible=true;
		}
		this._marcador_140.ggDeactivate=function () {
			me._menu_teclado.style[domTransition]='none';
			me._menu_teclado.style.visibility='hidden';
			me._menu_teclado.ggVisible=false;
		}
		this.divSkin.appendChild(this._marcador_140);
		this._menu=document.createElement('div');
		this._menu.ggId='Menu';
		this._menu.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._menu.ggVisible=true;
		this._menu.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-150 + w/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -150px;';
		hs+='top:  10px;';
		hs+='width: 300px;';
		hs+='height: 64px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='overflow: hidden;';
		this._menu.setAttribute('style',hs);
		this._radar_but=document.createElement('div');
		this._radar_but.ggId='Radar_But';
		this._radar_but.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._radar_but.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: -360px;';
		hs+='top:  11px;';
		hs+='width: 40px;';
		hs+='height: 40px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._radar_but.setAttribute('style',hs);
		this._radar_but__img=document.createElement('img');
		this._radar_but__img.setAttribute('src',basePath + 'images/radar_but.svg');
		this._radar_but__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 40px;height: 40px;');
		this._radar_but.appendChild(this._radar_but__img);
		this._radar_but.onclick=function () {
			me.player.openNext("{node11}","");
			me.player.playSound("click_close","1");
			me._radar.style[domTransition]='none';
			me._radar.style.visibility='inherit';
			me._radar.ggVisible=true;
			me._how_radar.style[domTransition]='none';
			me._how_radar.style.visibility='inherit';
			me._how_radar.ggVisible=true;
		}
		this._radar_but.onmouseover=function () {
			me._radar_but__img.src=basePath + 'images/radar_but__o.svg';
		}
		this._radar_but.onmouseout=function () {
			me._radar_but__img.src=basePath + 'images/radar_but.svg';
		}
		this._menu.appendChild(this._radar_but);
		this.divSkin.appendChild(this._menu);
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
		hs+='top:  10px;';
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
		this._pic_frame=document.createElement('div');
		this._pic_frame.ggId='pic_frame';
		this._pic_frame.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._pic_frame.ggVisible=true;
		this._pic_frame.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-185 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-228 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -185px;';
		hs+='top:  -228px;';
		hs+='width: 398px;';
		hs+='height: 342px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0;';
		hs+='visibility: hidden;';
		hs+='border: 2px solid #ffffff;';
		hs+='border-radius: 20px;';
		hs+=cssPrefix + 'border-radius: 20px;';
		hs+='background-image:url(' + basePath + 'images/alpha_background_000000_150.png);';
		this._pic_frame.setAttribute('style',hs);
		this._popup_title=document.createElement('div');
		this._popup_title.ggId='popup_title';
		this._popup_title.ggParameter={ rx:0,ry:0,a:0,sx:1.2,sy:1.2 };
		this._popup_title.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 15px;';
		hs+='top:  8px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+=cssPrefix + 'transform-origin: 0% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._popup_title.ggParameter) + ';';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._popup_title.setAttribute('style',hs);
		this._popup_title.innerHTML="";
		this._pic_frame.appendChild(this._popup_title);
		this._popup_pic=document.createElement('div');
		this._popup_pic.ggId='popup_pic';
		this._popup_pic.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._popup_pic.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 18px;';
		hs+='top:  38px;';
		hs+='width: 360px;';
		hs+='height: 240px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._popup_pic.setAttribute('style',hs);
		this._popup_pic__img=document.createElement('img');
		this._popup_pic__img.setAttribute('src',basePath + '');
		this._popup_pic__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._popup_pic__img);
		this._popup_pic.appendChild(this._popup_pic__img);
		this._pic_frame.appendChild(this._popup_pic);
		this._popup_text=document.createElement('div');
		this._popup_text.ggId='popup_text';
		this._popup_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._popup_text.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 22px;';
		hs+='top:  287px;';
		hs+='width: 354px;';
		hs+='height: 38px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='background-image:url(images/alpha_background_ffffff_0.png);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._popup_text.setAttribute('style',hs);
		this._popup_text.innerHTML="";
		this._pic_frame.appendChild(this._popup_text);
		this._close=document.createElement('div');
		this._close.ggId='close';
		this._close.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._close.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 361px;';
		hs+='top:  1px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._close.setAttribute('style',hs);
		this._close__img=document.createElement('img');
		this._close__img.setAttribute('src',basePath + 'images/close.svg');
		this._close__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;');
		this._close.appendChild(this._close__img);
		this._close.onclick=function () {
			me._pic_frame.style[domTransition]='none';
			me._pic_frame.style.opacity='0';
			me._pic_frame.style.visibility='hidden';
			me.player.playSound("click_close","1");
			me.player.stopSound("#narration_.*");
			me._screen_tint.style[domTransition]='none';
			me._screen_tint.style.opacity='0';
			me._screen_tint.style.visibility='hidden';
			me._popup_pic.style[domTransition]='none';
			me._popup_pic.style.visibility='hidden';
			me._popup_pic.ggVisible=false;
		}
		this._close.onmouseover=function () {
			me._close__img.src=basePath + 'images/close__o.svg';
		}
		this._close.onmouseout=function () {
			me._close__img.src=basePath + 'images/close.svg';
		}
		this._pic_frame.appendChild(this._close);
		this.divSkin.appendChild(this._pic_frame);
		this._radar=document.createElement('div');
		this._radar.ggId='radar';
		this._radar.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._radar.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 77px;';
		hs+='top:  122px;';
		hs+='width: 500px;';
		hs+='height: 400px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._radar.setAttribute('style',hs);
		this._image_116=document.createElement('div');
		this._image_116.ggId='Image 116';
		this._image_116.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_116.ggVisible=true;
		this._image_116.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				h=this.parentNode.offsetHeight;
				this.style.top=(-194 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -29px;';
		hs+='top:  -194px;';
		hs+='width: 533px;';
		hs+='height: 400px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._image_116.setAttribute('style',hs);
		this._image_116__img=document.createElement('img');
		this._image_116__img.setAttribute('src',basePath + 'images/image_116.png');
		this._image_116__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._image_116__img);
		this._image_116.appendChild(this._image_116__img);
		this._svg_121=document.createElement('div');
		this._svg_121.ggId='Svg 121';
		this._svg_121.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._svg_121.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 444px;';
		hs+='top:  2px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._svg_121.setAttribute('style',hs);
		this._svg_121__img=document.createElement('img');
		this._svg_121__img.setAttribute('src',basePath + 'images/svg_121.svg');
		this._svg_121__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;');
		this._svg_121.appendChild(this._svg_121__img);
		this._svg_121.onclick=function () {
			me._radar.style[domTransition]='none';
			me._radar.style.visibility='hidden';
			me._radar.ggVisible=false;
			me.player.playSound("click_close","1");
		}
		this._image_116.appendChild(this._svg_121);
		this._radar_05=document.createElement('div');
		this._radar_05.ggId='radar_05';
		this._radar_05.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._radar_05.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 55px;';
		hs+='top:  156px;';
		hs+='width: 200px;';
		hs+='height: 200px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._radar_05.setAttribute('style',hs);
		this._svg_1193=document.createElement('div');
		this._svg_1193.ggId='Svg 119';
		this._svg_1193.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._svg_1193.ggVisible=true;
		this._svg_1193.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-100 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-100 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -100px;';
		hs+='top:  -100px;';
		hs+='width: 200px;';
		hs+='height: 200px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._svg_1193.setAttribute('style',hs);
		this._svg_1193__img=document.createElement('img');
		this._svg_1193__img.setAttribute('src',basePath + 'images/svg_1193.svg');
		this._svg_1193__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 200px;height: 200px;');
		this._svg_1193.appendChild(this._svg_1193__img);
		this._radar_05.appendChild(this._svg_1193);
		this._svg_1203=document.createElement('div');
		this._svg_1203.ggId='Svg 120';
		this._svg_1203.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._svg_1203.ggVisible=true;
		this._svg_1203.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-100 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-100 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -100px;';
		hs+='top:  -100px;';
		hs+='width: 200px;';
		hs+='height: 200px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._svg_1203.setAttribute('style',hs);
		this._svg_1203__img=document.createElement('img');
		this._svg_1203__img.setAttribute('src',basePath + 'images/svg_1203.svg');
		this._svg_1203__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 200px;height: 200px;');
		this._svg_1203.appendChild(this._svg_1203__img);
		this._radar_05.appendChild(this._svg_1203);
		this._marker_1228=document.createElement('div');
		this._marker_1228.ggId='Marker 122';
		this._marker_1228.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_1228.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 71px;';
		hs+='top:  -181px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._marker_1228.setAttribute('style',hs);
		this._marker_1228.ggMarkerNodeId='bano';
		nodeMarker.push(this._marker_1228);
		this._marker_1228.onclick=function () {
			me.player.openNext('bano');
		}
		this._marker_1228.ggActivate=function () {
			me._radar_05.style[domTransition]='none';
			me._radar_05.style.visibility='inherit';
			me._radar_05.ggVisible=true;
			me._radar_01.style[domTransition]='none';
			me._radar_01.style.visibility='hidden';
			me._radar_01.ggVisible=false;
			me._radar_02.style[domTransition]='none';
			me._radar_02.style.visibility='hidden';
			me._radar_02.ggVisible=false;
			me._radar_03.style[domTransition]='none';
			me._radar_03.style.visibility='hidden';
			me._radar_03.ggVisible=false;
			me._radar_04.style[domTransition]='none';
			me._radar_04.style.visibility='hidden';
			me._radar_04.ggVisible=false;
		}
		this._radar_05.appendChild(this._marker_1228);
		this._image_116.appendChild(this._radar_05);
		this._radar_04=document.createElement('div');
		this._radar_04.ggId='radar_04';
		this._radar_04.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._radar_04.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 87px;';
		hs+='top:  80px;';
		hs+='width: 200px;';
		hs+='height: 200px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._radar_04.setAttribute('style',hs);
		this._svg_1192=document.createElement('div');
		this._svg_1192.ggId='Svg 119';
		this._svg_1192.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._svg_1192.ggVisible=true;
		this._svg_1192.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-100 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-100 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -100px;';
		hs+='top:  -100px;';
		hs+='width: 200px;';
		hs+='height: 200px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._svg_1192.setAttribute('style',hs);
		this._svg_1192__img=document.createElement('img');
		this._svg_1192__img.setAttribute('src',basePath + 'images/svg_1192.svg');
		this._svg_1192__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 200px;height: 200px;');
		this._svg_1192.appendChild(this._svg_1192__img);
		this._radar_04.appendChild(this._svg_1192);
		this._svg_1202=document.createElement('div');
		this._svg_1202.ggId='Svg 120';
		this._svg_1202.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._svg_1202.ggVisible=true;
		this._svg_1202.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-100 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-100 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -100px;';
		hs+='top:  -100px;';
		hs+='width: 200px;';
		hs+='height: 200px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._svg_1202.setAttribute('style',hs);
		this._svg_1202__img=document.createElement('img');
		this._svg_1202__img.setAttribute('src',basePath + 'images/svg_1202.svg');
		this._svg_1202__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 200px;height: 200px;');
		this._svg_1202.appendChild(this._svg_1202__img);
		this._radar_04.appendChild(this._svg_1202);
		this._marker_1227=document.createElement('div');
		this._marker_1227.ggId='Marker 122';
		this._marker_1227.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_1227.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 71px;';
		hs+='top:  -181px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._marker_1227.setAttribute('style',hs);
		this._marker_1227.ggMarkerNodeId='cuarto';
		nodeMarker.push(this._marker_1227);
		this._marker_1227.onclick=function () {
			me.player.openNext('cuarto');
		}
		this._marker_1227.ggActivate=function () {
			me._radar_04.style[domTransition]='none';
			me._radar_04.style.visibility='inherit';
			me._radar_04.ggVisible=true;
			me._radar_01.style[domTransition]='none';
			me._radar_01.style.visibility='hidden';
			me._radar_01.ggVisible=false;
			me._radar_02.style[domTransition]='none';
			me._radar_02.style.visibility='hidden';
			me._radar_02.ggVisible=false;
			me._radar_03.style[domTransition]='none';
			me._radar_03.style.visibility='hidden';
			me._radar_03.ggVisible=false;
			me._radar_05.style[domTransition]='none';
			me._radar_05.style.visibility='hidden';
			me._radar_05.ggVisible=false;
		}
		this._radar_04.appendChild(this._marker_1227);
		this._image_116.appendChild(this._radar_04);
		this._radar_03=document.createElement('div');
		this._radar_03.ggId='radar_03';
		this._radar_03.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._radar_03.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 124px;';
		hs+='top:  216px;';
		hs+='width: 200px;';
		hs+='height: 200px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._radar_03.setAttribute('style',hs);
		this._svg_1191=document.createElement('div');
		this._svg_1191.ggId='Svg 119';
		this._svg_1191.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._svg_1191.ggVisible=true;
		this._svg_1191.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-100 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-100 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -100px;';
		hs+='top:  -100px;';
		hs+='width: 200px;';
		hs+='height: 200px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._svg_1191.setAttribute('style',hs);
		this._svg_1191__img=document.createElement('img');
		this._svg_1191__img.setAttribute('src',basePath + 'images/svg_1191.svg');
		this._svg_1191__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 200px;height: 200px;');
		this._svg_1191.appendChild(this._svg_1191__img);
		this._radar_03.appendChild(this._svg_1191);
		this._svg_1201=document.createElement('div');
		this._svg_1201.ggId='Svg 120';
		this._svg_1201.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._svg_1201.ggVisible=true;
		this._svg_1201.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-100 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-100 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -100px;';
		hs+='top:  -100px;';
		hs+='width: 200px;';
		hs+='height: 200px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._svg_1201.setAttribute('style',hs);
		this._svg_1201__img=document.createElement('img');
		this._svg_1201__img.setAttribute('src',basePath + 'images/svg_1201.svg');
		this._svg_1201__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 200px;height: 200px;');
		this._svg_1201.appendChild(this._svg_1201__img);
		this._radar_03.appendChild(this._svg_1201);
		this._marker_1226=document.createElement('div');
		this._marker_1226.ggId='Marker 122';
		this._marker_1226.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_1226.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 71px;';
		hs+='top:  -181px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._marker_1226.setAttribute('style',hs);
		this._marker_1226.ggMarkerNodeId='hall';
		nodeMarker.push(this._marker_1226);
		this._marker_1226.onclick=function () {
			me.player.openNext('hall');
		}
		this._marker_1226.ggActivate=function () {
			me._radar_03.style[domTransition]='none';
			me._radar_03.style.visibility='inherit';
			me._radar_03.ggVisible=true;
			me._radar_01.style[domTransition]='none';
			me._radar_01.style.visibility='hidden';
			me._radar_01.ggVisible=false;
			me._radar_02.style[domTransition]='none';
			me._radar_02.style.visibility='hidden';
			me._radar_02.ggVisible=false;
			me._radar_04.style[domTransition]='none';
			me._radar_04.style.visibility='hidden';
			me._radar_04.ggVisible=false;
			me._radar_05.style[domTransition]='none';
			me._radar_05.style.visibility='hidden';
			me._radar_05.ggVisible=false;
		}
		this._radar_03.appendChild(this._marker_1226);
		this._image_116.appendChild(this._radar_03);
		this._radar_02=document.createElement('div');
		this._radar_02.ggId='radar_02';
		this._radar_02.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._radar_02.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 194px;';
		hs+='top:  224px;';
		hs+='width: 200px;';
		hs+='height: 200px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._radar_02.setAttribute('style',hs);
		this._svg_1190=document.createElement('div');
		this._svg_1190.ggId='Svg 119';
		this._svg_1190.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._svg_1190.ggVisible=true;
		this._svg_1190.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-100 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-100 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -100px;';
		hs+='top:  -100px;';
		hs+='width: 200px;';
		hs+='height: 200px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._svg_1190.setAttribute('style',hs);
		this._svg_1190__img=document.createElement('img');
		this._svg_1190__img.setAttribute('src',basePath + 'images/svg_1190.svg');
		this._svg_1190__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 200px;height: 200px;');
		this._svg_1190.appendChild(this._svg_1190__img);
		this._radar_02.appendChild(this._svg_1190);
		this._svg_1200=document.createElement('div');
		this._svg_1200.ggId='Svg 120';
		this._svg_1200.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._svg_1200.ggVisible=true;
		this._svg_1200.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-100 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-100 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -100px;';
		hs+='top:  -100px;';
		hs+='width: 200px;';
		hs+='height: 200px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._svg_1200.setAttribute('style',hs);
		this._svg_1200__img=document.createElement('img');
		this._svg_1200__img.setAttribute('src',basePath + 'images/svg_1200.svg');
		this._svg_1200__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 200px;height: 200px;');
		this._svg_1200.appendChild(this._svg_1200__img);
		this._radar_02.appendChild(this._svg_1200);
		this._marker_1225=document.createElement('div');
		this._marker_1225.ggId='Marker 122';
		this._marker_1225.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_1225.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 71px;';
		hs+='top:  -181px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._marker_1225.setAttribute('style',hs);
		this._marker_1225.ggMarkerNodeId='cocina';
		nodeMarker.push(this._marker_1225);
		this._marker_1225.onclick=function () {
			me.player.openNext('cocina');
		}
		this._marker_1225.ggActivate=function () {
			me._radar_02.style[domTransition]='none';
			me._radar_02.style.visibility='inherit';
			me._radar_02.ggVisible=true;
			me._radar_01.style[domTransition]='none';
			me._radar_01.style.visibility='hidden';
			me._radar_01.ggVisible=false;
			me._radar_03.style[domTransition]='none';
			me._radar_03.style.visibility='hidden';
			me._radar_03.ggVisible=false;
			me._radar_04.style[domTransition]='none';
			me._radar_04.style.visibility='hidden';
			me._radar_04.ggVisible=false;
			me._radar_05.style[domTransition]='none';
			me._radar_05.style.visibility='hidden';
			me._radar_05.ggVisible=false;
		}
		this._radar_02.appendChild(this._marker_1225);
		this._image_116.appendChild(this._radar_02);
		this._radar_01=document.createElement('div');
		this._radar_01.ggId='radar_01';
		this._radar_01.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._radar_01.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 240px;';
		hs+='top:  70px;';
		hs+='width: 200px;';
		hs+='height: 200px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._radar_01.setAttribute('style',hs);
		this._svg_119=document.createElement('div');
		this._svg_119.ggId='Svg 119';
		this._svg_119.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._svg_119.ggVisible=true;
		this._svg_119.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-100 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-100 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -100px;';
		hs+='top:  -100px;';
		hs+='width: 200px;';
		hs+='height: 200px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._svg_119.setAttribute('style',hs);
		this._svg_119__img=document.createElement('img');
		this._svg_119__img.setAttribute('src',basePath + 'images/svg_119.svg');
		this._svg_119__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 200px;height: 200px;');
		this._svg_119.appendChild(this._svg_119__img);
		this._radar_01.appendChild(this._svg_119);
		this._svg_120=document.createElement('div');
		this._svg_120.ggId='Svg 120';
		this._svg_120.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._svg_120.ggVisible=true;
		this._svg_120.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-100 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-100 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -100px;';
		hs+='top:  -100px;';
		hs+='width: 200px;';
		hs+='height: 200px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._svg_120.setAttribute('style',hs);
		this._svg_120__img=document.createElement('img');
		this._svg_120__img.setAttribute('src',basePath + 'images/svg_120.svg');
		this._svg_120__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 200px;height: 200px;');
		this._svg_120.appendChild(this._svg_120__img);
		this._radar_01.appendChild(this._svg_120);
		this._marker_1224=document.createElement('div');
		this._marker_1224.ggId='Marker 122';
		this._marker_1224.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_1224.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 71px;';
		hs+='top:  -181px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._marker_1224.setAttribute('style',hs);
		this._marker_1224.ggMarkerNodeId='salon';
		nodeMarker.push(this._marker_1224);
		this._marker_1224.onclick=function () {
			me.player.openNext('salon');
		}
		this._marker_1224.ggActivate=function () {
			me._radar_01.style[domTransition]='none';
			me._radar_01.style.visibility='inherit';
			me._radar_01.ggVisible=true;
			me._radar_02.style[domTransition]='none';
			me._radar_02.style.visibility='hidden';
			me._radar_02.ggVisible=false;
			me._radar_03.style[domTransition]='none';
			me._radar_03.style.visibility='hidden';
			me._radar_03.ggVisible=false;
			me._radar_04.style[domTransition]='none';
			me._radar_04.style.visibility='hidden';
			me._radar_04.ggVisible=false;
			me._radar_05.style[domTransition]='none';
			me._radar_05.style.visibility='hidden';
			me._radar_05.ggVisible=false;
		}
		this._radar_01.appendChild(this._marker_1224);
		this._image_116.appendChild(this._radar_01);
		this._act_01=document.createElement('div');
		this._act_01.ggId='act_01';
		this._act_01.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._act_01.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 324px;';
		hs+='top:  153px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._act_01.setAttribute('style',hs);
		this._marker_1223=document.createElement('div');
		this._marker_1223.ggId='Marker 122';
		this._marker_1223.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_1223.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 71px;';
		hs+='top:  -181px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._marker_1223.setAttribute('style',hs);
		this._marker_1223.ggMarkerNodeId='salon';
		nodeMarker.push(this._marker_1223);
		this._marker_1223.onclick=function () {
			me.player.openNext('salon');
		}
		this._marker_1223.ggActivate=function () {
			me._activo_01.style[domTransition]='none';
			me._activo_01.style.visibility='inherit';
			me._activo_01.ggVisible=true;
			me._activo_02.style[domTransition]='none';
			me._activo_02.style.visibility='hidden';
			me._activo_02.ggVisible=false;
			me._activo_03.style[domTransition]='none';
			me._activo_03.style.visibility='hidden';
			me._activo_03.ggVisible=false;
			me._activo_04.style[domTransition]='none';
			me._activo_04.style.visibility='hidden';
			me._activo_04.ggVisible=false;
			me._activo_05.style[domTransition]='none';
			me._activo_05.style.visibility='hidden';
			me._activo_05.ggVisible=false;
		}
		this._act_01.appendChild(this._marker_1223);
		this._desactivo_01=document.createElement('div');
		this._desactivo_01.ggId='desactivo_01';
		this._desactivo_01.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._desactivo_01.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._desactivo_01.setAttribute('style',hs);
		this._desactivo_01__img=document.createElement('img');
		this._desactivo_01__img.setAttribute('src',basePath + 'images/desactivo_01.svg');
		this._desactivo_01__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;');
		this._desactivo_01.appendChild(this._desactivo_01__img);
		this._desactivo_01.onclick=function () {
			me.player.openNext("{node11}","");
			me.player.playSound("camera","1");
		}
		this._act_01.appendChild(this._desactivo_01);
		this._activo_01=document.createElement('div');
		this._activo_01.ggId='activo_01';
		this._activo_01.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._activo_01.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._activo_01.setAttribute('style',hs);
		this._activo_01__img=document.createElement('img');
		this._activo_01__img.setAttribute('src',basePath + 'images/activo_01.svg');
		this._activo_01__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;');
		this._activo_01.appendChild(this._activo_01__img);
		this._act_01.appendChild(this._activo_01);
		this._image_116.appendChild(this._act_01);
		this._act_02=document.createElement('div');
		this._act_02.ggId='act_02';
		this._act_02.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._act_02.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 278px;';
		hs+='top:  307px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._act_02.setAttribute('style',hs);
		this._marker_1222=document.createElement('div');
		this._marker_1222.ggId='Marker 122';
		this._marker_1222.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_1222.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 71px;';
		hs+='top:  -181px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._marker_1222.setAttribute('style',hs);
		this._marker_1222.ggMarkerNodeId='cocina';
		nodeMarker.push(this._marker_1222);
		this._marker_1222.onclick=function () {
			me.player.openNext('cocina');
		}
		this._marker_1222.ggActivate=function () {
			me._activo_02.style[domTransition]='none';
			me._activo_02.style.visibility='inherit';
			me._activo_02.ggVisible=true;
			me._activo_01.style[domTransition]='none';
			me._activo_01.style.visibility='hidden';
			me._activo_01.ggVisible=false;
			me._activo_03.style[domTransition]='none';
			me._activo_03.style.visibility='hidden';
			me._activo_03.ggVisible=false;
			me._activo_04.style[domTransition]='none';
			me._activo_04.style.visibility='hidden';
			me._activo_04.ggVisible=false;
			me._activo_05.style[domTransition]='none';
			me._activo_05.style.visibility='hidden';
			me._activo_05.ggVisible=false;
		}
		this._act_02.appendChild(this._marker_1222);
		this._desactivo_02=document.createElement('div');
		this._desactivo_02.ggId='desactivo_02';
		this._desactivo_02.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._desactivo_02.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._desactivo_02.setAttribute('style',hs);
		this._desactivo_02__img=document.createElement('img');
		this._desactivo_02__img.setAttribute('src',basePath + 'images/desactivo_02.svg');
		this._desactivo_02__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;');
		this._desactivo_02.appendChild(this._desactivo_02__img);
		this._desactivo_02.onclick=function () {
			me.player.openNext("{node13}","");
			me.player.playSound("camera","1");
		}
		this._act_02.appendChild(this._desactivo_02);
		this._activo_02=document.createElement('div');
		this._activo_02.ggId='activo_02';
		this._activo_02.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._activo_02.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._activo_02.setAttribute('style',hs);
		this._activo_02__img=document.createElement('img');
		this._activo_02__img.setAttribute('src',basePath + 'images/activo_02.svg');
		this._activo_02__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;');
		this._activo_02.appendChild(this._activo_02__img);
		this._act_02.appendChild(this._activo_02);
		this._image_116.appendChild(this._act_02);
		this._act_03=document.createElement('div');
		this._act_03.ggId='act_03';
		this._act_03.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._act_03.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 208px;';
		hs+='top:  299px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._act_03.setAttribute('style',hs);
		this._marker_1221=document.createElement('div');
		this._marker_1221.ggId='Marker 122';
		this._marker_1221.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_1221.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 71px;';
		hs+='top:  -181px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._marker_1221.setAttribute('style',hs);
		this._marker_1221.ggMarkerNodeId='hall';
		nodeMarker.push(this._marker_1221);
		this._marker_1221.onclick=function () {
			me.player.openNext('hall');
		}
		this._marker_1221.ggActivate=function () {
			me._activo_03.style[domTransition]='none';
			me._activo_03.style.visibility='inherit';
			me._activo_03.ggVisible=true;
			me._activo_01.style[domTransition]='none';
			me._activo_01.style.visibility='hidden';
			me._activo_01.ggVisible=false;
			me._activo_02.style[domTransition]='none';
			me._activo_02.style.visibility='hidden';
			me._activo_02.ggVisible=false;
			me._activo_04.style[domTransition]='none';
			me._activo_04.style.visibility='hidden';
			me._activo_04.ggVisible=false;
			me._activo_05.style[domTransition]='none';
			me._activo_05.style.visibility='hidden';
			me._activo_05.ggVisible=false;
		}
		this._act_03.appendChild(this._marker_1221);
		this._desactivo_03=document.createElement('div');
		this._desactivo_03.ggId='desactivo_03';
		this._desactivo_03.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._desactivo_03.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._desactivo_03.setAttribute('style',hs);
		this._desactivo_03__img=document.createElement('img');
		this._desactivo_03__img.setAttribute('src',basePath + 'images/desactivo_03.svg');
		this._desactivo_03__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;');
		this._desactivo_03.appendChild(this._desactivo_03__img);
		this._desactivo_03.onclick=function () {
			me.player.openNext("{node15}","");
			me.player.playSound("camera","1");
		}
		this._act_03.appendChild(this._desactivo_03);
		this._activo_03=document.createElement('div');
		this._activo_03.ggId='activo_03';
		this._activo_03.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._activo_03.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._activo_03.setAttribute('style',hs);
		this._activo_03__img=document.createElement('img');
		this._activo_03__img.setAttribute('src',basePath + 'images/activo_03.svg');
		this._activo_03__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;');
		this._activo_03.appendChild(this._activo_03__img);
		this._act_03.appendChild(this._activo_03);
		this._image_116.appendChild(this._act_03);
		this._act_04=document.createElement('div');
		this._act_04.ggId='act_04';
		this._act_04.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._act_04.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 171px;';
		hs+='top:  163px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._act_04.setAttribute('style',hs);
		this._marker_1220=document.createElement('div');
		this._marker_1220.ggId='Marker 122';
		this._marker_1220.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_1220.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 71px;';
		hs+='top:  -181px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._marker_1220.setAttribute('style',hs);
		this._marker_1220.ggMarkerNodeId='cuarto';
		nodeMarker.push(this._marker_1220);
		this._marker_1220.onclick=function () {
			me.player.openNext('cuarto');
		}
		this._marker_1220.ggActivate=function () {
			me._activo_04.style[domTransition]='none';
			me._activo_04.style.visibility='inherit';
			me._activo_04.ggVisible=true;
			me._activo_01.style[domTransition]='none';
			me._activo_01.style.visibility='hidden';
			me._activo_01.ggVisible=false;
			me._activo_02.style[domTransition]='none';
			me._activo_02.style.visibility='hidden';
			me._activo_02.ggVisible=false;
			me._activo_03.style[domTransition]='none';
			me._activo_03.style.visibility='hidden';
			me._activo_03.ggVisible=false;
			me._activo_05.style[domTransition]='none';
			me._activo_05.style.visibility='hidden';
			me._activo_05.ggVisible=false;
		}
		this._act_04.appendChild(this._marker_1220);
		this._desactivo_04=document.createElement('div');
		this._desactivo_04.ggId='desactivo_04';
		this._desactivo_04.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._desactivo_04.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._desactivo_04.setAttribute('style',hs);
		this._desactivo_04__img=document.createElement('img');
		this._desactivo_04__img.setAttribute('src',basePath + 'images/desactivo_04.svg');
		this._desactivo_04__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;');
		this._desactivo_04.appendChild(this._desactivo_04__img);
		this._desactivo_04.onclick=function () {
			me.player.openNext("{node14}","");
			me.player.playSound("camera","1");
		}
		this._act_04.appendChild(this._desactivo_04);
		this._activo_04=document.createElement('div');
		this._activo_04.ggId='activo_04';
		this._activo_04.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._activo_04.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._activo_04.setAttribute('style',hs);
		this._activo_04__img=document.createElement('img');
		this._activo_04__img.setAttribute('src',basePath + 'images/activo_04.svg');
		this._activo_04__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;');
		this._activo_04.appendChild(this._activo_04__img);
		this._act_04.appendChild(this._activo_04);
		this._image_116.appendChild(this._act_04);
		this._act_05=document.createElement('div');
		this._act_05.ggId='act_05';
		this._act_05.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._act_05.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 139px;';
		hs+='top:  240px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._act_05.setAttribute('style',hs);
		this._marker_122=document.createElement('div');
		this._marker_122.ggId='Marker 122';
		this._marker_122.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_122.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 71px;';
		hs+='top:  -181px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._marker_122.setAttribute('style',hs);
		this._marker_122.ggMarkerNodeId='bano';
		nodeMarker.push(this._marker_122);
		this._marker_122.onclick=function () {
			me.player.openNext('bano');
		}
		this._marker_122.ggActivate=function () {
			me._activo_05.style[domTransition]='none';
			me._activo_05.style.visibility='inherit';
			me._activo_05.ggVisible=true;
			me._activo_01.style[domTransition]='none';
			me._activo_01.style.visibility='hidden';
			me._activo_01.ggVisible=false;
			me._activo_02.style[domTransition]='none';
			me._activo_02.style.visibility='hidden';
			me._activo_02.ggVisible=false;
			me._activo_03.style[domTransition]='none';
			me._activo_03.style.visibility='hidden';
			me._activo_03.ggVisible=false;
			me._activo_04.style[domTransition]='none';
			me._activo_04.style.visibility='hidden';
			me._activo_04.ggVisible=false;
		}
		this._act_05.appendChild(this._marker_122);
		this._desactivo_05=document.createElement('div');
		this._desactivo_05.ggId='desactivo_05';
		this._desactivo_05.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._desactivo_05.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._desactivo_05.setAttribute('style',hs);
		this._desactivo_05__img=document.createElement('img');
		this._desactivo_05__img.setAttribute('src',basePath + 'images/desactivo_05.svg');
		this._desactivo_05__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;');
		this._desactivo_05.appendChild(this._desactivo_05__img);
		this._desactivo_05.onclick=function () {
			me.player.openNext("{node12}","");
			me.player.playSound("camera","1");
		}
		this._act_05.appendChild(this._desactivo_05);
		this._activo_05=document.createElement('div');
		this._activo_05.ggId='activo_05';
		this._activo_05.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._activo_05.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._activo_05.setAttribute('style',hs);
		this._activo_05__img=document.createElement('img');
		this._activo_05__img.setAttribute('src',basePath + 'images/activo_05.svg');
		this._activo_05__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;');
		this._activo_05.appendChild(this._activo_05__img);
		this._act_05.appendChild(this._activo_05);
		this._image_116.appendChild(this._act_05);
		this._radar.appendChild(this._image_116);
		this.divSkin.appendChild(this._radar);
		this._faq_radar=document.createElement('div');
		this._faq_radar.ggId='FAQ_radar';
		this._faq_radar.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._faq_radar.ggVisible=false;
		this._faq_radar.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-101 + w) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-88 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -101px;';
		hs+='top:  -88px;';
		hs+='width: 40px;';
		hs+='height: 40px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0;';
		hs+='visibility: hidden;';
		this._faq_radar.setAttribute('style',hs);
		this._faq_radar__img=document.createElement('img');
		this._faq_radar__img.setAttribute('src',basePath + 'images/faq_radar.svg');
		this._faq_radar__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 40px;height: 40px;');
		this._faq_radar.appendChild(this._faq_radar__img);
		this._faq_radar.onclick=function () {
			me._how_radar.style[domTransition]='none';
			me._how_radar.style.visibility='inherit';
			me._how_radar.ggVisible=true;
			me.player.playSound("click_close","1");
		}
		this._faq_radar.onmouseover=function () {
			me._faq_radar__img.src=basePath + 'images/faq_radar__o.svg';
		}
		this._faq_radar.onmouseout=function () {
			me._faq_radar__img.src=basePath + 'images/faq_radar.svg';
		}
		this._marcador_14=document.createElement('div');
		this._marcador_14.ggId='Marcador 14';
		this._marcador_14.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marcador_14.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 96px;';
		hs+='top:  -98px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._marcador_14.setAttribute('style',hs);
		this._marcador_14.ggMarkerNodeId='rad';
		nodeMarker.push(this._marcador_14);
		this._marcador_14.onclick=function () {
			me.player.openNext('rad');
		}
		this._marcador_14.ggActivate=function () {
			me._faq_radar.style[domTransition]='none';
			me._faq_radar.style.visibility='inherit';
			me._faq_radar.ggVisible=true;
		}
		this._faq_radar.appendChild(this._marcador_14);
		this.divSkin.appendChild(this._faq_radar);
		this._how_radar=document.createElement('div');
		this._how_radar.ggId='HOW_radar';
		this._how_radar.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._how_radar.ggVisible=false;
		this._how_radar.ggUpdatePosition=function() {
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
		this._how_radar.setAttribute('style',hs);
		this._how_radar.onmouseover=function () {
			me.elementMouseOver['how_radar']=true;
		}
		this._how_radar.onmouseout=function () {
			me.elementMouseOver['how_radar']=false;
		}
		this._how_radar.ontouchend=function () {
			me.elementMouseOver['how_radar']=false;
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
		hs+='top:  18px;';
		hs+='width: 100px;';
		hs+='height: 100px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._svg_70.setAttribute('style',hs);
		this._svg_70__img=document.createElement('img');
		this._svg_70__img.setAttribute('src',basePath + 'images/svg_70.svg');
		this._svg_70__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100px;height: 100px;');
		this._svg_70.appendChild(this._svg_70__img);
		this._svg_700=document.createElement('div');
		this._svg_700.ggId='Svg 70';
		this._svg_700.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._svg_700.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 100px;';
		hs+='height: 100px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._svg_700.setAttribute('style',hs);
		this._svg_700__img=document.createElement('img');
		this._svg_700__img.setAttribute('src',basePath + 'images/svg_700.svg');
		this._svg_700__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100px;height: 100px;');
		this._svg_700.appendChild(this._svg_700__img);
		this._svg_70.appendChild(this._svg_700);
		this._rectangle_69.appendChild(this._svg_70);
		this._svg_71=document.createElement('div');
		this._svg_71.ggId='Svg 71';
		this._svg_71.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._svg_71.ggVisible=true;
		this._svg_71.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				h=this.parentNode.offsetHeight;
				this.style.top=(-59 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 55px;';
		hs+='top:  -55px;';
		hs+='width: 100px;';
		hs+='height: 100px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._svg_71.setAttribute('style',hs);
		this._svg_71__img=document.createElement('img');
		this._svg_71__img.setAttribute('src',basePath + 'images/svg_71.svg');
		this._svg_71__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100px;height: 100px;');
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
		hs+='left: 55px;';
		hs+='top:  -121px;';
		hs+='width: 100px;';
		hs+='height: 100px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._svg_72.setAttribute('style',hs);
		this._svg_72__img=document.createElement('img');
		this._svg_72__img.setAttribute('src',basePath + 'images/svg_72.svg');
		this._svg_72__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100px;height: 100px;');
		this._svg_72.appendChild(this._svg_72__img);
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
		this._text_771.innerHTML="<b\/>The radar shows you what are you seeing.<b\/>";
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
		this._text_81.innerHTML="<b\/>El radar te muestra hacia donde estas mirando.<b\/>";
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
		this._text_770.innerHTML="<b\/>Click in the red button for a new space.<b\/>";
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
		this._text_82.innerHTML="<b\/>Haz Click en el bot\xf3n para ver un nuevo espacio.<b\/>\n";
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
		this._text_77.innerHTML="<b\/>Green button shows your where you are.<b\/>\n";
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
		this._text_83.innerHTML="<b\/>El bot\xf3n verde te muestra donde estas.<b\/>";
		this._rectangle_74.appendChild(this._text_83);
		this._rectangle_69.appendChild(this._rectangle_74);
		this._how_radar.appendChild(this._rectangle_69);
		this.divSkin.appendChild(this._how_radar);
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
			if (me.player.transitionsDisabled) {
				me._pic_frame.style[domTransition]='none';
			} else {
				me._pic_frame.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._pic_frame.style.opacity='1';
			me._pic_frame.style.visibility=me._pic_frame.ggVisible?'inherit':'hidden';
			me._popup_title.innerHTML="<b>Decoraci\xf3n<\/b>";
			if (me._popup_title.ggUpdateText) {
				me._popup_title.ggUpdateText=function() {
					me._popup_title.innerHTML="<b>Decoraci\xf3n<\/b>";
				}
			}
			me._popup_pic__img.src="http:\/\/imagenes360.net\/test\/img\/foto_01.jpg";
			if (me._popup_pic.ggUpdateText) {
				me._popup_pic.ggUpdateText=function() {
					me._popup_pic__img.src="http:\/\/imagenes360.net\/test\/img\/foto_01.jpg";
				}
			}
			me._popup_text.innerHTML="Foto ejemplo decoraci\xf3n<br>Example photo of decoration<br>";
			if (me._popup_text.ggUpdateText) {
				me._popup_text.ggUpdateText=function() {
					me._popup_text.innerHTML="Foto ejemplo decoraci\xf3n<br>Example photo of decoration<br>";
				}
			}
			me.player.playSound("camera","1");
			if (me.player.transitionsDisabled) {
				me._screen_tint.style[domTransition]='none';
			} else {
				me._screen_tint.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._screen_tint.style.opacity='1';
			me._screen_tint.style.visibility=me._screen_tint.ggVisible?'inherit':'hidden';
			me._popup_pic.style[domTransition]='none';
			me._popup_pic.style.visibility='inherit';
			me._popup_pic.ggVisible=true;
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
			if (me.player.transitionsDisabled) {
				me._pic_frame.style[domTransition]='none';
			} else {
				me._pic_frame.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._pic_frame.style.opacity='1';
			me._pic_frame.style.visibility=me._pic_frame.ggVisible?'inherit':'hidden';
			me._popup_title.innerHTML="<b>Vista<\/b>";
			if (me._popup_title.ggUpdateText) {
				me._popup_title.ggUpdateText=function() {
					me._popup_title.innerHTML="<b>Vista<\/b>";
				}
			}
			me._popup_pic__img.src="http:\/\/imagenes360.net\/test\/img\/foto_02.jpg";
			if (me._popup_pic.ggUpdateText) {
				me._popup_pic.ggUpdateText=function() {
					me._popup_pic__img.src="http:\/\/imagenes360.net\/test\/img\/foto_02.jpg";
				}
			}
			me._popup_text.innerHTML="Vista desde el Balc\xf3n<br>View from the balcony<br>";
			if (me._popup_text.ggUpdateText) {
				me._popup_text.ggUpdateText=function() {
					me._popup_text.innerHTML="Vista desde el Balc\xf3n<br>View from the balcony<br>";
				}
			}
			me.player.playSound("camera","1");
			if (me.player.transitionsDisabled) {
				me._screen_tint.style[domTransition]='none';
			} else {
				me._screen_tint.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._screen_tint.style.opacity='1';
			me._screen_tint.style.visibility=me._screen_tint.ggVisible?'inherit':'hidden';
			me._popup_pic.style[domTransition]='none';
			me._popup_pic.style.visibility='inherit';
			me._popup_pic.ggVisible=true;
		}
		this.divSkin.appendChild(this._popup_02);
		this._marcador_140.ggMarkerNormal=null;
		this._marcador_140.ggMarkerActive=null;
		this._marker_1228.ggMarkerNormal=null;
		this._marker_1228.ggMarkerActive=null;
		this._marker_1227.ggMarkerNormal=null;
		this._marker_1227.ggMarkerActive=null;
		this._marker_1226.ggMarkerNormal=null;
		this._marker_1226.ggMarkerActive=null;
		this._marker_1225.ggMarkerNormal=null;
		this._marker_1225.ggMarkerActive=null;
		this._marker_1224.ggMarkerNormal=null;
		this._marker_1224.ggMarkerActive=null;
		this._marker_1223.ggMarkerNormal=null;
		this._marker_1223.ggMarkerActive=null;
		this._marker_1222.ggMarkerNormal=null;
		this._marker_1222.ggMarkerActive=null;
		this._marker_1221.ggMarkerNormal=null;
		this._marker_1221.ggMarkerActive=null;
		this._marker_1220.ggMarkerNormal=null;
		this._marker_1220.ggMarkerActive=null;
		this._marker_122.ggMarkerNormal=null;
		this._marker_122.ggMarkerActive=null;
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
		var hs='';
		if (me._svg_1193.ggParameter) {
			hs+=parameterToTransform(me._svg_1193.ggParameter) + ' ';
		}
		hs+='rotate(' + (-1.0*(1 * me.player.getPanNorth() + 0)) + 'deg) ';
		hs+='scale(' + (Math.tan(me.player.getFov()/2.0*Math.PI/180.0)*1 + 0) + ',1.0) ';
		hs+='scale(1.0,' + (Math.cos(1*me.player.getTilt()*Math.PI/180.0 + 0)) + ') ';
		me._svg_1193.style[domTransform]=hs;
		var hs='';
		if (me._svg_1192.ggParameter) {
			hs+=parameterToTransform(me._svg_1192.ggParameter) + ' ';
		}
		hs+='rotate(' + (-1.0*(1 * me.player.getPanNorth() + 0)) + 'deg) ';
		hs+='scale(' + (Math.tan(me.player.getFov()/2.0*Math.PI/180.0)*1 + 0) + ',1.0) ';
		hs+='scale(1.0,' + (Math.cos(1*me.player.getTilt()*Math.PI/180.0 + 0)) + ') ';
		me._svg_1192.style[domTransform]=hs;
		var hs='';
		if (me._svg_1191.ggParameter) {
			hs+=parameterToTransform(me._svg_1191.ggParameter) + ' ';
		}
		hs+='rotate(' + (-1.0*(1 * me.player.getPanNorth() + 0)) + 'deg) ';
		hs+='scale(' + (Math.tan(me.player.getFov()/2.0*Math.PI/180.0)*1 + 0) + ',1.0) ';
		hs+='scale(1.0,' + (Math.cos(1*me.player.getTilt()*Math.PI/180.0 + 0)) + ') ';
		me._svg_1191.style[domTransform]=hs;
		var hs='';
		if (me._svg_1190.ggParameter) {
			hs+=parameterToTransform(me._svg_1190.ggParameter) + ' ';
		}
		hs+='rotate(' + (-1.0*(1 * me.player.getPanNorth() + 0)) + 'deg) ';
		hs+='scale(' + (Math.tan(me.player.getFov()/2.0*Math.PI/180.0)*1 + 0) + ',1.0) ';
		hs+='scale(1.0,' + (Math.cos(1*me.player.getTilt()*Math.PI/180.0 + 0)) + ') ';
		me._svg_1190.style[domTransform]=hs;
		var hs='';
		if (me._svg_119.ggParameter) {
			hs+=parameterToTransform(me._svg_119.ggParameter) + ' ';
		}
		hs+='rotate(' + (-1.0*(1 * me.player.getPanNorth() + 0)) + 'deg) ';
		hs+='scale(' + (Math.tan(me.player.getFov()/2.0*Math.PI/180.0)*1 + 0) + ',1.0) ';
		hs+='scale(1.0,' + (Math.cos(1*me.player.getTilt()*Math.PI/180.0 + 0)) + ') ';
		me._svg_119.style[domTransform]=hs;
		if (me.elementMouseOver['how_radar']) {
			me._how_radar.style[domTransition]='none';
			me._how_radar.style.visibility='hidden';
			me._how_radar.ggVisible=false;
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