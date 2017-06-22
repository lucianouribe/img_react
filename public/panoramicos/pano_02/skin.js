// Garden Gnome Software - Skin
// Pano2VR 4.0/3102S
// Filename: WEB_Tablet_photo.ggsk
// Generated Tue 7. Mar 21:48:51 2017

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
		this._faq_foto=document.createElement('div');
		this._faq_foto.ggId='FAQ_foto';
		this._faq_foto.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._faq_foto.ggVisible=false;
		this._faq_foto.ggUpdatePosition=function() {
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
		this._faq_foto.setAttribute('style',hs);
		this._faq_foto__img=document.createElement('img');
		this._faq_foto__img.setAttribute('src',basePath + 'images/faq_foto.svg');
		this._faq_foto__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 40px;height: 40px;');
		this._faq_foto.appendChild(this._faq_foto__img);
		this._faq_foto.onclick=function () {
			me._how_foto.style[domTransition]='none';
			me._how_foto.style.visibility='inherit';
			me._how_foto.ggVisible=true;
			me.player.playSound("click_close","1");
		}
		this._faq_foto.onmouseover=function () {
			me._faq_foto__img.src=basePath + 'images/faq_foto__o.svg';
		}
		this._faq_foto.onmouseout=function () {
			me._faq_foto__img.src=basePath + 'images/faq_foto.svg';
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
		this._marcador_14.ggMarkerNodeId='foto';
		nodeMarker.push(this._marcador_14);
		this._marcador_14.onclick=function () {
			me.player.openNext('foto');
		}
		this._marcador_14.ggActivate=function () {
			me._faq_foto.style[domTransition]='none';
			me._faq_foto.style.visibility='inherit';
			me._faq_foto.ggVisible=true;
		}
		this._faq_foto.appendChild(this._marcador_14);
		this.divSkin.appendChild(this._faq_foto);
		this._how_foto=document.createElement('div');
		this._how_foto.ggId='HOW_foto';
		this._how_foto.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._how_foto.ggVisible=false;
		this._how_foto.ggUpdatePosition=function() {
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
		this._how_foto.setAttribute('style',hs);
		this._how_foto.onmouseover=function () {
			me.elementMouseOver['how_foto']=true;
		}
		this._how_foto.onmouseout=function () {
			me.elementMouseOver['how_foto']=false;
		}
		this._how_foto.ontouchend=function () {
			me.elementMouseOver['how_foto']=false;
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
				this.style.top=(-49 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 55px;';
		hs+='top:  -45px;';
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
		this._text_771.innerHTML="<b\/>Click here for passing to a new scene.<b\/>";
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
		this._text_81.innerHTML="<b\/>Haz click aqu\xed para pasar al siguiente espacio.<b\/>";
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
		this._text_770.innerHTML="<b\/>Click here for information.<b\/>";
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
		this._text_82.innerHTML="<b\/>Haz Click aqu\xed para nueva informaci\xf3n.<b\/>\n";
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
		this._text_77.innerHTML="<b\/>Click here for photos.<b\/>\n";
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
		this._text_83.innerHTML="<b\/>Haz Click aqu\xed para ver fotos.<b\/>";
		this._rectangle_74.appendChild(this._text_83);
		this._rectangle_69.appendChild(this._rectangle_74);
		this._how_foto.appendChild(this._rectangle_69);
		this.divSkin.appendChild(this._how_foto);
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
		if (me.elementMouseOver['how_foto']) {
			me._how_foto.style[domTransition]='none';
			me._how_foto.style.visibility='hidden';
			me._how_foto.ggVisible=false;
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
			hs+='width: 40px;';
			hs+='height: 40px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._picture0.setAttribute('style',hs);
			this._picture0__img=document.createElement('img');
			this._picture0__img.setAttribute('src',basePath + 'images/picture0.svg');
			this._picture0__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 40px;height: 40px;');
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
			hs+='width: 40px;';
			hs+='height: 40px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._picture.setAttribute('style',hs);
			this._picture__img=document.createElement('img');
			this._picture__img.setAttribute('src',basePath + 'images/picture.svg');
			this._picture__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 40px;height: 40px;');
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
			hs+='width: 40px;';
			hs+='height: 40px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._hsimage.setAttribute('style',hs);
			this._hsimage__img=document.createElement('img');
			this._hsimage__img.setAttribute('src',basePath + 'images/hsimage.svg');
			this._hsimage__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 40px;height: 40px;');
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