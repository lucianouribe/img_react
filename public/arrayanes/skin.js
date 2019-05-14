// Garden Gnome Software - Skin
// Pano2VR 4.0/3102S
// Filename: Carlos_E_Tablet_02.ggsk
// Generated Tue 21. Jul 11:58:07 2015

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
		this._menu=document.createElement('div');
		this._menu.ggId='Menu';
		this._menu.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._menu.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 80px;';
		hs+='top:  10px;';
		hs+='width: 220px;';
		hs+='height: 64px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='overflow: hidden;';
		this._menu.setAttribute('style',hs);
		this._home_but=document.createElement('div');
		this._home_but.ggId='Home_But';
		this._home_but.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._home_but.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 5px;';
		hs+='top:  0px;';
		hs+='width: 64px;';
		hs+='height: 64px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._home_but.setAttribute('style',hs);
		this._home_but__img=document.createElement('img');
		this._home_but__img.setAttribute('src',basePath + 'images/home_but.svg');
		this._home_but__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 64px;height: 64px;');
		this._home_but.appendChild(this._home_but__img);
		this._home_but.onclick=function () {
			me.player.playSound("click_close","1");
			me._home_plano.style[domTransition]='none';
			me._home_plano.style.visibility='inherit';
			me._home_plano.ggVisible=true;
			me._how.style[domTransition]='none';
			me._how.style.visibility='inherit';
			me._how.ggVisible=true;
			if (me.player.transitionsDisabled) {
				me._screen_tint.style[domTransition]='none';
			} else {
				me._screen_tint.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._screen_tint.style.opacity='1';
			me._screen_tint.style.visibility=me._screen_tint.ggVisible?'inherit':'hidden';
			me.player.openNext("{node4}","");
		}
		this._home_but.onmouseover=function () {
			me._home_but__img.src=basePath + 'images/home_but__o.svg';
		}
		this._home_but.onmouseout=function () {
			me._home_but__img.src=basePath + 'images/home_but.svg';
		}
		this._menu.appendChild(this._home_but);
		this._radar_but_101=document.createElement('div');
		this._radar_but_101.ggId='Radar_But_101';
		this._radar_but_101.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._radar_but_101.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 80px;';
		hs+='top:  0px;';
		hs+='width: 64px;';
		hs+='height: 64px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._radar_but_101.setAttribute('style',hs);
		this._radar_but_101__img=document.createElement('img');
		this._radar_but_101__img.setAttribute('src',basePath + 'images/radar_but_101.svg');
		this._radar_but_101__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 64px;height: 64px;');
		this._radar_but_101.appendChild(this._radar_but_101__img);
		this._radar_but_101.onclick=function () {
			me.player.playSound("click_close","1");
			me._mapa_101.style[domTransition]='none';
			me._mapa_101.style.visibility='inherit';
			me._mapa_101.ggVisible=true;
			if (me.player.transitionsDisabled) {
				me._screen_tint.style[domTransition]='none';
			} else {
				me._screen_tint.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._screen_tint.style.opacity='1';
			me._screen_tint.style.visibility=me._screen_tint.ggVisible?'inherit':'hidden';
		}
		this._radar_but_101.onmouseover=function () {
			me._radar_but_101__img.src=basePath + 'images/radar_but_101__o.svg';
		}
		this._radar_but_101.onmouseout=function () {
			me._radar_but_101__img.src=basePath + 'images/radar_but_101.svg';
		}
		this._menu.appendChild(this._radar_but_101);
		this._radar_but_46=document.createElement('div');
		this._radar_but_46.ggId='Radar_But_46';
		this._radar_but_46.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._radar_but_46.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 80px;';
		hs+='top:  0px;';
		hs+='width: 64px;';
		hs+='height: 64px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._radar_but_46.setAttribute('style',hs);
		this._radar_but_46__img=document.createElement('img');
		this._radar_but_46__img.setAttribute('src',basePath + 'images/radar_but_46.svg');
		this._radar_but_46__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 64px;height: 64px;');
		this._radar_but_46.appendChild(this._radar_but_46__img);
		this._radar_but_46.onclick=function () {
			me.player.playSound("click_close","1");
			me._mapa_46.style[domTransition]='none';
			me._mapa_46.style.visibility='inherit';
			me._mapa_46.ggVisible=true;
			if (me.player.transitionsDisabled) {
				me._screen_tint.style[domTransition]='none';
			} else {
				me._screen_tint.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._screen_tint.style.opacity='1';
			me._screen_tint.style.visibility=me._screen_tint.ggVisible?'inherit':'hidden';
		}
		this._radar_but_46.onmouseover=function () {
			me._radar_but_46__img.src=basePath + 'images/radar_but_46__o.svg';
		}
		this._radar_but_46.onmouseout=function () {
			me._radar_but_46__img.src=basePath + 'images/radar_but_46.svg';
		}
		this._menu.appendChild(this._radar_but_46);
		this._info_but_101=document.createElement('div');
		this._info_but_101.ggId='Info_But_101';
		this._info_but_101.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._info_but_101.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 155px;';
		hs+='top:  0px;';
		hs+='width: 64px;';
		hs+='height: 64px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._info_but_101.setAttribute('style',hs);
		this._info_but_101__img=document.createElement('img');
		this._info_but_101__img.setAttribute('src',basePath + 'images/info_but_101.svg');
		this._info_but_101__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 64px;height: 64px;');
		this._info_but_101.appendChild(this._info_but_101__img);
		this._info_but_101.onclick=function () {
			me.player.playSound("click_close","1");
			me._texto_46.style[domTransition]='none';
			me._texto_46.style.visibility='hidden';
			me._texto_46.ggVisible=false;
			me._texto_101.style[domTransition]='none';
			me._texto_101.style.visibility='inherit';
			me._texto_101.ggVisible=true;
			if (me.player.transitionsDisabled) {
				me._screen_tint.style[domTransition]='none';
			} else {
				me._screen_tint.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._screen_tint.style.opacity='1';
			me._screen_tint.style.visibility=me._screen_tint.ggVisible?'inherit':'hidden';
		}
		this._info_but_101.onmouseover=function () {
			me._info_but_101__img.src=basePath + 'images/info_but_101__o.svg';
		}
		this._info_but_101.onmouseout=function () {
			me._info_but_101__img.src=basePath + 'images/info_but_101.svg';
		}
		this._menu.appendChild(this._info_but_101);
		this._info_but_46=document.createElement('div');
		this._info_but_46.ggId='Info_But_46';
		this._info_but_46.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._info_but_46.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 155px;';
		hs+='top:  0px;';
		hs+='width: 64px;';
		hs+='height: 64px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._info_but_46.setAttribute('style',hs);
		this._info_but_46__img=document.createElement('img');
		this._info_but_46__img.setAttribute('src',basePath + 'images/info_but_46.svg');
		this._info_but_46__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 64px;height: 64px;');
		this._info_but_46.appendChild(this._info_but_46__img);
		this._info_but_46.onclick=function () {
			me.player.playSound("click_close","1");
			me._texto_101.style[domTransition]='none';
			me._texto_101.style.visibility='hidden';
			me._texto_101.ggVisible=false;
			me._texto_46.style[domTransition]='none';
			me._texto_46.style.visibility='inherit';
			me._texto_46.ggVisible=true;
			if (me.player.transitionsDisabled) {
				me._screen_tint.style[domTransition]='none';
			} else {
				me._screen_tint.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._screen_tint.style.opacity='1';
			me._screen_tint.style.visibility=me._screen_tint.ggVisible?'inherit':'hidden';
		}
		this._info_but_46.onmouseover=function () {
			me._info_but_46__img.src=basePath + 'images/info_but_46__o.svg';
		}
		this._info_but_46.onmouseout=function () {
			me._info_but_46__img.src=basePath + 'images/info_but_46.svg';
		}
		this._menu.appendChild(this._info_but_46);
		this._marcador_151=document.createElement('div');
		this._marcador_151.ggId='Marcador 15';
		this._marcador_151.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marcador_151.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 995px;';
		hs+='top:  572px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._marcador_151.setAttribute('style',hs);
		this._marcador_151.ggMarkerNodeId='0';
		nodeMarker.push(this._marcador_151);
		this._marcador_151.onclick=function () {
			me.player.openNext('0');
		}
		this._marcador_151.ggActivate=function () {
			me._radar_but_46.style[domTransition]='none';
			me._radar_but_46.style.visibility='hidden';
			me._radar_but_46.ggVisible=false;
			me._radar_but_101.style[domTransition]='none';
			me._radar_but_101.style.visibility='hidden';
			me._radar_but_101.ggVisible=false;
			me._info_but_46.style[domTransition]='none';
			me._info_but_46.style.visibility='hidden';
			me._info_but_46.ggVisible=false;
			me._info_but_101.style[domTransition]='none';
			me._info_but_101.style.visibility='hidden';
			me._info_but_101.ggVisible=false;
		}
		this._menu.appendChild(this._marcador_151);
		this._marcador_150=document.createElement('div');
		this._marcador_150.ggId='Marcador 15';
		this._marcador_150.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marcador_150.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 995px;';
		hs+='top:  572px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._marcador_150.setAttribute('style',hs);
		this._marcador_150.ggMarkerNodeId='46';
		nodeMarker.push(this._marcador_150);
		this._marcador_150.onclick=function () {
			me.player.openNext('46');
		}
		this._marcador_150.ggActivate=function () {
			me._radar_but_46.style[domTransition]='none';
			me._radar_but_46.style.visibility='inherit';
			me._radar_but_46.ggVisible=true;
			me._radar_but_101.style[domTransition]='none';
			me._radar_but_101.style.visibility='hidden';
			me._radar_but_101.ggVisible=false;
			me._info_but_46.style[domTransition]='none';
			me._info_but_46.style.visibility='inherit';
			me._info_but_46.ggVisible=true;
			me._info_but_101.style[domTransition]='none';
			me._info_but_101.style.visibility='hidden';
			me._info_but_101.ggVisible=false;
		}
		this._menu.appendChild(this._marcador_150);
		this._marcador_15=document.createElement('div');
		this._marcador_15.ggId='Marcador 15';
		this._marcador_15.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marcador_15.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 995px;';
		hs+='top:  572px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._marcador_15.setAttribute('style',hs);
		this._marcador_15.ggMarkerNodeId='101';
		nodeMarker.push(this._marcador_15);
		this._marcador_15.onclick=function () {
			me.player.openNext('101');
		}
		this._marcador_15.ggActivate=function () {
			me._radar_but_101.style[domTransition]='none';
			me._radar_but_101.style.visibility='inherit';
			me._radar_but_101.ggVisible=true;
			me._radar_but_46.style[domTransition]='none';
			me._radar_but_46.style.visibility='hidden';
			me._radar_but_46.ggVisible=false;
			me._info_but_101.style[domTransition]='none';
			me._info_but_101.style.visibility='inherit';
			me._info_but_101.ggVisible=true;
			me._info_but_46.style[domTransition]='none';
			me._info_but_46.style.visibility='hidden';
			me._info_but_46.ggVisible=false;
		}
		this._menu.appendChild(this._marcador_15);
		this.divSkin.appendChild(this._menu);
		this._marcador_vista=document.createElement('div');
		this._marcador_vista.ggId='Marcador vista';
		this._marcador_vista.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marcador_vista.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 1075px;';
		hs+='top:  582px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._marcador_vista.setAttribute('style',hs);
		this._marcador_vista.ggMarkerNodeId='0';
		nodeMarker.push(this._marcador_vista);
		this._marcador_vista.onclick=function () {
			me.player.openNext('0');
		}
		this.divSkin.appendChild(this._marcador_vista);
		this._marcador_101=document.createElement('div');
		this._marcador_101.ggId='Marcador 101';
		this._marcador_101.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marcador_101.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 1075px;';
		hs+='top:  582px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._marcador_101.setAttribute('style',hs);
		this._marcador_101.ggMarkerNodeId='101';
		nodeMarker.push(this._marcador_101);
		this._marcador_101.onclick=function () {
			me.player.openNext('101');
		}
		this.divSkin.appendChild(this._marcador_101);
		this._marcador_46=document.createElement('div');
		this._marcador_46.ggId='Marcador 46';
		this._marcador_46.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marcador_46.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 1075px;';
		hs+='top:  582px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._marcador_46.setAttribute('style',hs);
		this._marcador_46.ggMarkerNodeId='46';
		nodeMarker.push(this._marcador_46);
		this._marcador_46.onclick=function () {
			me.player.openNext('46');
		}
		this.divSkin.appendChild(this._marcador_46);
		this._popflag_01=document.createElement('div');
		this._popflag_01.ggId='popflag_01';
		this._popflag_01.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._popflag_01.ggVisible=true;
		this._popflag_01.ggUpdatePosition=function() {
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
		this._popflag_01.setAttribute('style',hs);
		this._popflag_01.onclick=function () {
			me._popflag_text.innerHTML="<b>Lugar ideal para una construcci\xf3n<\/b>";
			if (me._popflag_text.ggUpdateText) {
				me._popflag_text.ggUpdateText=function() {
					me._popflag_text.innerHTML="<b>Lugar ideal para una construcci\xf3n<\/b>";
				}
			}
			me.player.playSound("camera","1");
			if (me.player.transitionsDisabled) {
				me._pic_frame.style[domTransition]='none';
			} else {
				me._pic_frame.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._pic_frame.style.opacity='1';
			me._pic_frame.style.visibility=me._pic_frame.ggVisible?'inherit':'hidden';
		}
		this.divSkin.appendChild(this._popflag_01);
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
		this._fondo_tec=document.createElement('div');
		this._fondo_tec.ggId='fondo_tec';
		this._fondo_tec.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._fondo_tec.ggVisible=true;
		this._fondo_tec.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-78 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-50 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -78px;';
		hs+='top:  -50px;';
		hs+='width: 164px;';
		hs+='height: 108px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0.5;';
		hs+='visibility: inherit;';
		this._fondo_tec.setAttribute('style',hs);
		this._fondo_tec__img=document.createElement('img');
		this._fondo_tec__img.setAttribute('src',basePath + 'images/fondo_tec.svg');
		this._fondo_tec__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 164px;height: 108px;');
		this._fondo_tec.appendChild(this._fondo_tec__img);
		this._menu_teclado.appendChild(this._fondo_tec);
		this._left=document.createElement('div');
		this._left.ggId='left';
		this._left.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._left.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 3px;';
		hs+='top:  55px;';
		hs+='width: 48px;';
		hs+='height: 48px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._left.setAttribute('style',hs);
		this._left__img=document.createElement('img');
		this._left__img.setAttribute('src',basePath + 'images/left.svg');
		this._left__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 48px;height: 48px;');
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
		hs+='left: 107px;';
		hs+='top:  54px;';
		hs+='width: 48px;';
		hs+='height: 48px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._right.setAttribute('style',hs);
		this._right__img=document.createElement('img');
		this._right__img.setAttribute('src',basePath + 'images/right.svg');
		this._right__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 48px;height: 48px;');
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
		hs+='top:  2px;';
		hs+='width: 48px;';
		hs+='height: 48px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._up.setAttribute('style',hs);
		this._up__img=document.createElement('img');
		this._up__img.setAttribute('src',basePath + 'images/up.svg');
		this._up__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 48px;height: 48px;');
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
		hs+='width: 48px;';
		hs+='height: 48px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._down.setAttribute('style',hs);
		this._down__img=document.createElement('img');
		this._down__img.setAttribute('src',basePath + 'images/down.svg');
		this._down__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 48px;height: 48px;');
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
		this._pic_frame=document.createElement('div');
		this._pic_frame.ggId='pic_frame';
		this._pic_frame.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._pic_frame.ggVisible=true;
		this._pic_frame.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-151 + w/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -151px;';
		hs+='top:  14px;';
		hs+='width: 298px;';
		hs+='height: 58px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0;';
		hs+='visibility: hidden;';
		hs+='border: 2px solid #ffffff;';
		hs+='border-radius: 20px;';
		hs+=cssPrefix + 'border-radius: 20px;';
		hs+='background-image:url(' + basePath + 'images/alpha_background_000000_150.png);';
		this._pic_frame.setAttribute('style',hs);
		this._popflag_text=document.createElement('div');
		this._popflag_text.ggId='popflag_text';
		this._popflag_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._popflag_text.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 24px;';
		hs+='top:  9px;';
		hs+='width: 256px;';
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
		this._popflag_text.setAttribute('style',hs);
		this._popflag_text.innerHTML="";
		this._pic_frame.appendChild(this._popflag_text);
		this._close=document.createElement('div');
		this._close.ggId='close';
		this._close.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._close.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 276px;';
		hs+='top:  -9px;';
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
		}
		this._close.onmouseover=function () {
			me._close__img.src=basePath + 'images/close__o.svg';
		}
		this._close.onmouseout=function () {
			me._close__img.src=basePath + 'images/close.svg';
		}
		this._pic_frame.appendChild(this._close);
		this.divSkin.appendChild(this._pic_frame);
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
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='background-color: #ffffff;';
		this._screen_tint.setAttribute('style',hs);
		this.divSkin.appendChild(this._screen_tint);
		this._texto_101=document.createElement('div');
		this._texto_101.ggId='texto_101';
		this._texto_101.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._texto_101.ggVisible=false;
		this._texto_101.ggUpdatePosition=function() {
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
		this._texto_101.setAttribute('style',hs);
		this._rectangle_691=document.createElement('div');
		this._rectangle_691.ggId='Rectangle 69';
		this._rectangle_691.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_691.ggVisible=true;
		this._rectangle_691.ggUpdatePosition=function() {
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
		this._rectangle_691.setAttribute('style',hs);
		this._logo1=document.createElement('div');
		this._logo1.ggId='logo';
		this._logo1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._logo1.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 55px;';
		hs+='top:  33px;';
		hs+='width: 96px;';
		hs+='height: 52px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._logo1.setAttribute('style',hs);
		this._logo1__img=document.createElement('img');
		this._logo1__img.setAttribute('src',basePath + 'images/logo1.png');
		this._logo1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._logo1__img);
		this._logo1.appendChild(this._logo1__img);
		this._rectangle_691.appendChild(this._logo1);
		this._rectangle_743=document.createElement('div');
		this._rectangle_743.ggId='Rectangle 74';
		this._rectangle_743.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_743.ggVisible=true;
		this._rectangle_743.ggUpdatePosition=function() {
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
		hs+='height: 332px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 3px solid #000000;';
		hs+='border-radius: 15px;';
		hs+=cssPrefix + 'border-radius: 15px;';
		hs+='background-color: #646464;';
		this._rectangle_743.setAttribute('style',hs);
		this._image_1510=document.createElement('div');
		this._image_1510.ggId='Image 151';
		this._image_1510.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_1510.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: -194px;';
		hs+='top:  211px;';
		hs+='width: 150px;';
		hs+='height: 102px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._image_1510.setAttribute('style',hs);
		this._image_1510__img=document.createElement('img');
		this._image_1510__img.setAttribute('src',basePath + 'images/image_1510.png');
		this._image_1510__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._image_1510__img);
		this._image_1510.appendChild(this._image_1510__img);
		this._rectangle_743.appendChild(this._image_1510);
		this._text_776=document.createElement('div');
		this._text_776.ggId='Text 77';
		this._text_776.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_776.ggVisible=true;
		this._text_776.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-180 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-152 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -177px;';
		hs+='top:  -149px;';
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
		this._text_776.setAttribute('style',hs);
		this._text_776.innerHTML="<b\/>LOTE 101<b\/>";
		this._rectangle_743.appendChild(this._text_776);
		this._text_811=document.createElement('div');
		this._text_811.ggId='Text 81';
		this._text_811.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_811.ggVisible=true;
		this._text_811.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-180 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-268 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -177px;';
		hs+='top:  -265px;';
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
		this._text_811.setAttribute('style',hs);
		this._text_811.innerHTML="<b\/>7.097.41 Metros cuadrados<b\/>";
		this._rectangle_743.appendChild(this._text_811);
		this._text_775=document.createElement('div');
		this._text_775.ggId='Text 77';
		this._text_775.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_775.ggVisible=true;
		this._text_775.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-180 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-69 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -177px;';
		hs+='top:  -66px;';
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
		this._text_775.setAttribute('style',hs);
		this._text_775.innerHTML="<b\/>Municipio de Envigado<b\/>";
		this._rectangle_743.appendChild(this._text_775);
		this._text_821=document.createElement('div');
		this._text_821.ggId='Text 82';
		this._text_821.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_821.ggVisible=true;
		this._text_821.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-180 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-193 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -177px;';
		hs+='top:  -190px;';
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
		this._text_821.setAttribute('style',hs);
		this._text_821.innerHTML="<b\/>Valor Impuesto Predial:<b\/>\n";
		this._rectangle_743.appendChild(this._text_821);
		this._text_774=document.createElement('div');
		this._text_774.ggId='Text 77';
		this._text_774.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_774.ggVisible=true;
		this._text_774.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-180 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(1 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -177px;';
		hs+='top:  4px;';
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
		this._text_774.setAttribute('style',hs);
		this._text_774.ggUpdateText=function() {
			this.innerHTML="<b\/>$ 815.000 semestral.<b\/>\n";
		}
		this._text_774.ggUpdateText();
		this._rectangle_743.appendChild(this._text_774);
		this._text_833=document.createElement('div');
		this._text_833.ggId='Text 83';
		this._text_833.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_833.ggVisible=true;
		this._text_833.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-180 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-111 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -177px;';
		hs+='top:  -108px;';
		hs+='width: 350px;';
		hs+='height: 25px;';
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
		this._text_833.setAttribute('style',hs);
		this._text_833.innerHTML="<b\/>Cuota de Administraci\xf3n:<b\/>";
		this._rectangle_743.appendChild(this._text_833);
		this._text_832=document.createElement('div');
		this._text_832.ggId='Text 83';
		this._text_832.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_832.ggVisible=true;
		this._text_832.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-180 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-84 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -177px;';
		hs+='top:  -81px;';
		hs+='width: 350px;';
		hs+='height: 25px;';
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
		this._text_832.setAttribute('style',hs);
		this._text_832.ggUpdateText=function() {
			this.innerHTML="<b\/>$ 510.000 mensual.<b\/>";
		}
		this._text_832.ggUpdateText();
		this._rectangle_743.appendChild(this._text_832);
		this._rectangle_691.appendChild(this._rectangle_743);
		this._svg_1212=document.createElement('div');
		this._svg_1212.ggId='Svg 121';
		this._svg_1212.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._svg_1212.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 573px;';
		hs+='top:  -15px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._svg_1212.setAttribute('style',hs);
		this._svg_1212__img=document.createElement('img');
		this._svg_1212__img.setAttribute('src',basePath + 'images/svg_1212.svg');
		this._svg_1212__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;');
		this._svg_1212.appendChild(this._svg_1212__img);
		this._svg_1212.onclick=function () {
			me._texto_101.style[domTransition]='none';
			me._texto_101.style.visibility='hidden';
			me._texto_101.ggVisible=false;
			me.player.playSound("click_close","1");
			if (me.player.transitionsDisabled) {
				me._screen_tint.style[domTransition]='none';
			} else {
				me._screen_tint.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._screen_tint.style.opacity='0';
			me._screen_tint.style.visibility='hidden';
		}
		this._rectangle_691.appendChild(this._svg_1212);
		this._texto_101.appendChild(this._rectangle_691);
		this.divSkin.appendChild(this._texto_101);
		this._texto_46=document.createElement('div');
		this._texto_46.ggId='texto_46';
		this._texto_46.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._texto_46.ggVisible=false;
		this._texto_46.ggUpdatePosition=function() {
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
		this._texto_46.setAttribute('style',hs);
		this._rectangle_690=document.createElement('div');
		this._rectangle_690.ggId='Rectangle 69';
		this._rectangle_690.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_690.ggVisible=true;
		this._rectangle_690.ggUpdatePosition=function() {
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
		this._rectangle_690.setAttribute('style',hs);
		this._logo0=document.createElement('div');
		this._logo0.ggId='logo';
		this._logo0.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._logo0.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 55px;';
		hs+='top:  33px;';
		hs+='width: 96px;';
		hs+='height: 52px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._logo0.setAttribute('style',hs);
		this._logo0__img=document.createElement('img');
		this._logo0__img.setAttribute('src',basePath + 'images/logo0.png');
		this._logo0__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._logo0__img);
		this._logo0.appendChild(this._logo0__img);
		this._rectangle_690.appendChild(this._logo0);
		this._rectangle_742=document.createElement('div');
		this._rectangle_742.ggId='Rectangle 74';
		this._rectangle_742.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_742.ggVisible=true;
		this._rectangle_742.ggUpdatePosition=function() {
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
		hs+='height: 332px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 3px solid #000000;';
		hs+='border-radius: 15px;';
		hs+=cssPrefix + 'border-radius: 15px;';
		hs+='background-color: #646464;';
		this._rectangle_742.setAttribute('style',hs);
		this._image_151=document.createElement('div');
		this._image_151.ggId='Image 151';
		this._image_151.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_151.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: -194px;';
		hs+='top:  211px;';
		hs+='width: 150px;';
		hs+='height: 102px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._image_151.setAttribute('style',hs);
		this._image_151__img=document.createElement('img');
		this._image_151__img.setAttribute('src',basePath + 'images/image_151.png');
		this._image_151__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._image_151__img);
		this._image_151.appendChild(this._image_151__img);
		this._rectangle_742.appendChild(this._image_151);
		this._text_773=document.createElement('div');
		this._text_773.ggId='Text 77';
		this._text_773.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_773.ggVisible=true;
		this._text_773.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-180 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-152 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -177px;';
		hs+='top:  -149px;';
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
		this._text_773.setAttribute('style',hs);
		this._text_773.innerHTML="<b\/>LOTE 46<b\/>";
		this._rectangle_742.appendChild(this._text_773);
		this._text_810=document.createElement('div');
		this._text_810.ggId='Text 81';
		this._text_810.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_810.ggVisible=true;
		this._text_810.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-180 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-268 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -177px;';
		hs+='top:  -265px;';
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
		this._text_810.setAttribute('style',hs);
		this._text_810.innerHTML="<b\/>8.905.09  Metros cuadrados<b\/>";
		this._rectangle_742.appendChild(this._text_810);
		this._text_772=document.createElement('div');
		this._text_772.ggId='Text 77';
		this._text_772.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_772.ggVisible=true;
		this._text_772.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-180 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-69 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -177px;';
		hs+='top:  -66px;';
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
		this._text_772.setAttribute('style',hs);
		this._text_772.innerHTML="<b\/>Municipio de Envigado<b\/>";
		this._rectangle_742.appendChild(this._text_772);
		this._text_820=document.createElement('div');
		this._text_820.ggId='Text 82';
		this._text_820.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_820.ggVisible=true;
		this._text_820.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-180 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-193 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -177px;';
		hs+='top:  -190px;';
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
		this._text_820.setAttribute('style',hs);
		this._text_820.innerHTML="<b\/>Valor Impuesto Predial:<b\/>\n";
		this._rectangle_742.appendChild(this._text_820);
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
				this.style.top=(1 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -177px;';
		hs+='top:  4px;';
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
		this._text_771.ggUpdateText=function() {
			this.innerHTML="<b\/>$ 1.373.239 semestral.<b\/>\n";
		}
		this._text_771.ggUpdateText();
		this._rectangle_742.appendChild(this._text_771);
		this._text_831=document.createElement('div');
		this._text_831.ggId='Text 83';
		this._text_831.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_831.ggVisible=true;
		this._text_831.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-180 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-111 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -177px;';
		hs+='top:  -108px;';
		hs+='width: 350px;';
		hs+='height: 25px;';
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
		this._text_831.setAttribute('style',hs);
		this._text_831.innerHTML="<b\/>Cuota de Administraci\xf3n:<b\/>";
		this._rectangle_742.appendChild(this._text_831);
		this._text_830=document.createElement('div');
		this._text_830.ggId='Text 83';
		this._text_830.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_830.ggVisible=true;
		this._text_830.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-180 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-84 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -177px;';
		hs+='top:  -81px;';
		hs+='width: 350px;';
		hs+='height: 25px;';
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
		this._text_830.setAttribute('style',hs);
		this._text_830.ggUpdateText=function() {
			this.innerHTML="<b\/>$ 540.000 mensual.<b\/>";
		}
		this._text_830.ggUpdateText();
		this._rectangle_742.appendChild(this._text_830);
		this._rectangle_690.appendChild(this._rectangle_742);
		this._svg_1211=document.createElement('div');
		this._svg_1211.ggId='Svg 121';
		this._svg_1211.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._svg_1211.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 573px;';
		hs+='top:  -15px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._svg_1211.setAttribute('style',hs);
		this._svg_1211__img=document.createElement('img');
		this._svg_1211__img.setAttribute('src',basePath + 'images/svg_1211.svg');
		this._svg_1211__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;');
		this._svg_1211.appendChild(this._svg_1211__img);
		this._svg_1211.onclick=function () {
			me._texto_46.style[domTransition]='none';
			me._texto_46.style.visibility='hidden';
			me._texto_46.ggVisible=false;
			me.player.playSound("click_close","1");
			if (me.player.transitionsDisabled) {
				me._screen_tint.style[domTransition]='none';
			} else {
				me._screen_tint.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._screen_tint.style.opacity='0';
			me._screen_tint.style.visibility='hidden';
		}
		this._rectangle_690.appendChild(this._svg_1211);
		this._texto_46.appendChild(this._rectangle_690);
		this.divSkin.appendChild(this._texto_46);
		this._imagenes360=document.createElement('div');
		this._imagenes360.ggId='imagenes360';
		this._imagenes360.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._imagenes360.ggVisible=true;
		this._imagenes360.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-125 + w) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -125px;';
		hs+='top:  10px;';
		hs+='width: 105px;';
		hs+='height: 61px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='overflow: hidden;';
		this._imagenes360.setAttribute('style',hs);
		this._logo=document.createElement('div');
		this._logo.ggId='logo';
		this._logo.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._logo.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 2px;';
		hs+='top:  5px;';
		hs+='width: 96px;';
		hs+='height: 52px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._logo.setAttribute('style',hs);
		this._logo__img=document.createElement('img');
		this._logo__img.setAttribute('src',basePath + 'images/logo.png');
		this._logo__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._logo__img);
		this._logo.appendChild(this._logo__img);
		this._logo.onclick=function () {
			me.player.openUrl("http:\/\/www.imagenes360.net\/","");
		}
		this._imagenes360.appendChild(this._logo);
		this.divSkin.appendChild(this._imagenes360);
		this._home_plano=document.createElement('div');
		this._home_plano.ggId='Home_Plano';
		this._home_plano.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._home_plano.ggVisible=true;
		this._home_plano.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-436 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-304 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -436px;';
		hs+='top:  -304px;';
		hs+='width: 872px;';
		hs+='height: 600px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._home_plano.setAttribute('style',hs);
		this._image_1161=document.createElement('div');
		this._image_1161.ggId='Image 116';
		this._image_1161.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_1161.ggVisible=true;
		this._image_1161.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-436 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-300 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -436px;';
		hs+='top:  -300px;';
		hs+='width: 871px;';
		hs+='height: 600px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._image_1161.setAttribute('style',hs);
		this._image_1161__img=document.createElement('img');
		this._image_1161__img.setAttribute('src',basePath + 'images/image_1161.png');
		this._image_1161__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._image_1161__img);
		this._image_1161.appendChild(this._image_1161__img);
		this._rectangle_2351=document.createElement('div');
		this._rectangle_2351.ggId='Rectangle 235';
		this._rectangle_2351.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_2351.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: -2px;';
		hs+='top:  -2px;';
		hs+='width: 867px;';
		hs+='height: 595px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 5px solid #000000;';
		hs+='border-radius: 25px;';
		hs+=cssPrefix + 'border-radius: 25px;';
		hs+='background-image:url(' + basePath + 'images/alpha_background_ffffff_0.png);';
		this._rectangle_2351.setAttribute('style',hs);
		this._image_1161.appendChild(this._rectangle_2351);
		this._zona_but=document.createElement('div');
		this._zona_but.ggId='zona_but';
		this._zona_but.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._zona_but.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 742px;';
		hs+='top:  220px;';
		hs+='width: 64px;';
		hs+='height: 64px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._zona_but.setAttribute('style',hs);
		this._marker_12215=document.createElement('div');
		this._marker_12215.ggId='Marker 122';
		this._marker_12215.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_12215.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 71px;';
		hs+='top:  -181px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._marker_12215.setAttribute('style',hs);
		this._marker_12215.ggMarkerNodeId='0';
		nodeMarker.push(this._marker_12215);
		this._marker_12215.onclick=function () {
			me.player.openNext('0');
		}
		this._marker_12215.ggActivate=function () {
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
			me._activo_06.style[domTransition]='none';
			me._activo_06.style.visibility='hidden';
			me._activo_06.ggVisible=false;
			me._activo_07.style[domTransition]='none';
			me._activo_07.style.visibility='hidden';
			me._activo_07.ggVisible=false;
		}
		this._zona_but.appendChild(this._marker_12215);
		this._desactivo_zona=document.createElement('div');
		this._desactivo_zona.ggId='desactivo_zona';
		this._desactivo_zona.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._desactivo_zona.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 64px;';
		hs+='height: 64px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._desactivo_zona.setAttribute('style',hs);
		this._desactivo_zona__img=document.createElement('img');
		this._desactivo_zona__img.setAttribute('src',basePath + 'images/desactivo_zona.svg');
		this._desactivo_zona__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 64px;height: 64px;');
		this._desactivo_zona.appendChild(this._desactivo_zona__img);
		this._desactivo_zona.onclick=function () {
			flag=(me._cubo_dialogo_zona.style.visibility=='hidden');
			me._cubo_dialogo_zona.style[domTransition]='none';
			me._cubo_dialogo_zona.style.visibility=flag?'inherit':'hidden';
			me._cubo_dialogo_zona.ggVisible=flag;
			me.player.playSound("camera","1");
		}
		this._desactivo_zona.onmouseover=function () {
			me._desactivo_zona__img.src=basePath + 'images/desactivo_zona__o.svg';
		}
		this._desactivo_zona.onmouseout=function () {
			me._desactivo_zona__img.src=basePath + 'images/desactivo_zona.svg';
		}
		this._zona_but.appendChild(this._desactivo_zona);
		this._cubo_dialogo_zona=document.createElement('div');
		this._cubo_dialogo_zona.ggId='cubo_dialogo_zona';
		this._cubo_dialogo_zona.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._cubo_dialogo_zona.ggVisible=false;
		hs ='position:absolute;';
		hs+='left: 61px;';
		hs+='top:  9px;';
		hs+='width: 138px;';
		hs+='height: 23px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='border: 2px solid #ffffff;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='background-image:url(' + basePath + 'images/alpha_background_000000_155.png);';
		this._cubo_dialogo_zona.setAttribute('style',hs);
		this._tt_zona=document.createElement('div');
		this._tt_zona.ggId='tt_zona';
		this._tt_zona.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_zona.ggVisible=true;
		this._tt_zona.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-76 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-11 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -74px;';
		hs+='top:  -9px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_zona.setAttribute('style',hs);
		this._tt_zona.innerHTML="Zona comunal";
		this._tt_zona_white=document.createElement('div');
		this._tt_zona_white.ggId='tt_zona_white';
		this._tt_zona_white.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_zona_white.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: -1px;';
		hs+='top:  -1px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_zona_white.setAttribute('style',hs);
		this._tt_zona_white.innerHTML="Zona comunal";
		this._tt_zona.appendChild(this._tt_zona_white);
		this._cubo_dialogo_zona.appendChild(this._tt_zona);
		this._zona_but.appendChild(this._cubo_dialogo_zona);
		this._image_1161.appendChild(this._zona_but);
		this._club_but=document.createElement('div');
		this._club_but.ggId='club_but';
		this._club_but.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._club_but.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 781px;';
		hs+='top:  469px;';
		hs+='width: 64px;';
		hs+='height: 64px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._club_but.setAttribute('style',hs);
		this._marker_12214=document.createElement('div');
		this._marker_12214.ggId='Marker 122';
		this._marker_12214.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_12214.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 71px;';
		hs+='top:  -181px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._marker_12214.setAttribute('style',hs);
		this._marker_12214.ggMarkerNodeId='0';
		nodeMarker.push(this._marker_12214);
		this._marker_12214.onclick=function () {
			me.player.openNext('0');
		}
		this._marker_12214.ggActivate=function () {
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
			me._activo_06.style[domTransition]='none';
			me._activo_06.style.visibility='hidden';
			me._activo_06.ggVisible=false;
			me._activo_07.style[domTransition]='none';
			me._activo_07.style.visibility='hidden';
			me._activo_07.ggVisible=false;
		}
		this._club_but.appendChild(this._marker_12214);
		this._desactivo_club=document.createElement('div');
		this._desactivo_club.ggId='desactivo_club';
		this._desactivo_club.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._desactivo_club.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 64px;';
		hs+='height: 64px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._desactivo_club.setAttribute('style',hs);
		this._desactivo_club__img=document.createElement('img');
		this._desactivo_club__img.setAttribute('src',basePath + 'images/desactivo_club.svg');
		this._desactivo_club__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 64px;height: 64px;');
		this._desactivo_club.appendChild(this._desactivo_club__img);
		this._desactivo_club.onclick=function () {
			flag=(me._cubo_dialogo_club.style.visibility=='hidden');
			me._cubo_dialogo_club.style[domTransition]='none';
			me._cubo_dialogo_club.style.visibility=flag?'inherit':'hidden';
			me._cubo_dialogo_club.ggVisible=flag;
			me.player.playSound("camera","1");
		}
		this._desactivo_club.onmouseover=function () {
			me._desactivo_club__img.src=basePath + 'images/desactivo_club__o.svg';
		}
		this._desactivo_club.onmouseout=function () {
			me._desactivo_club__img.src=basePath + 'images/desactivo_club.svg';
		}
		this._club_but.appendChild(this._desactivo_club);
		this._cubo_dialogo_club=document.createElement('div');
		this._cubo_dialogo_club.ggId='cubo_dialogo_club';
		this._cubo_dialogo_club.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._cubo_dialogo_club.ggVisible=false;
		hs ='position:absolute;';
		hs+='left: -139px;';
		hs+='top:  11px;';
		hs+='width: 138px;';
		hs+='height: 23px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='border: 2px solid #ffffff;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='background-image:url(' + basePath + 'images/alpha_background_000000_155.png);';
		this._cubo_dialogo_club.setAttribute('style',hs);
		this._tt_club=document.createElement('div');
		this._tt_club.ggId='tt_club';
		this._tt_club.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_club.ggVisible=true;
		this._tt_club.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-76 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-11 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -74px;';
		hs+='top:  -9px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_club.setAttribute('style',hs);
		this._tt_club.innerHTML="Club House";
		this._tt_club_white=document.createElement('div');
		this._tt_club_white.ggId='tt_club_white';
		this._tt_club_white.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_club_white.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: -1px;';
		hs+='top:  -1px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_club_white.setAttribute('style',hs);
		this._tt_club_white.innerHTML="Club House";
		this._tt_club.appendChild(this._tt_club_white);
		this._cubo_dialogo_club.appendChild(this._tt_club);
		this._club_but.appendChild(this._cubo_dialogo_club);
		this._image_1161.appendChild(this._club_but);
		this._tenis_but=document.createElement('div');
		this._tenis_but.ggId='tenis_but';
		this._tenis_but.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tenis_but.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 683px;';
		hs+='top:  355px;';
		hs+='width: 64px;';
		hs+='height: 64px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._tenis_but.setAttribute('style',hs);
		this._marker_12213=document.createElement('div');
		this._marker_12213.ggId='Marker 122';
		this._marker_12213.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_12213.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 71px;';
		hs+='top:  -181px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._marker_12213.setAttribute('style',hs);
		this._marker_12213.ggMarkerNodeId='0';
		nodeMarker.push(this._marker_12213);
		this._marker_12213.onclick=function () {
			me.player.openNext('0');
		}
		this._marker_12213.ggActivate=function () {
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
			me._activo_06.style[domTransition]='none';
			me._activo_06.style.visibility='hidden';
			me._activo_06.ggVisible=false;
			me._activo_07.style[domTransition]='none';
			me._activo_07.style.visibility='hidden';
			me._activo_07.ggVisible=false;
		}
		this._tenis_but.appendChild(this._marker_12213);
		this._desactivo_tenis=document.createElement('div');
		this._desactivo_tenis.ggId='desactivo_tenis';
		this._desactivo_tenis.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._desactivo_tenis.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 64px;';
		hs+='height: 64px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._desactivo_tenis.setAttribute('style',hs);
		this._desactivo_tenis__img=document.createElement('img');
		this._desactivo_tenis__img.setAttribute('src',basePath + 'images/desactivo_tenis.svg');
		this._desactivo_tenis__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 64px;height: 64px;');
		this._desactivo_tenis.appendChild(this._desactivo_tenis__img);
		this._desactivo_tenis.onclick=function () {
			flag=(me._cubo_dialogo_tenis.style.visibility=='hidden');
			me._cubo_dialogo_tenis.style[domTransition]='none';
			me._cubo_dialogo_tenis.style.visibility=flag?'inherit':'hidden';
			me._cubo_dialogo_tenis.ggVisible=flag;
			me.player.playSound("camera","1");
		}
		this._desactivo_tenis.onmouseover=function () {
			me._desactivo_tenis__img.src=basePath + 'images/desactivo_tenis__o.svg';
		}
		this._desactivo_tenis.onmouseout=function () {
			me._desactivo_tenis__img.src=basePath + 'images/desactivo_tenis.svg';
		}
		this._tenis_but.appendChild(this._desactivo_tenis);
		this._cubo_dialogo_tenis=document.createElement('div');
		this._cubo_dialogo_tenis.ggId='cubo_dialogo_tenis';
		this._cubo_dialogo_tenis.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._cubo_dialogo_tenis.ggVisible=false;
		hs ='position:absolute;';
		hs+='left: -138px;';
		hs+='top:  12px;';
		hs+='width: 138px;';
		hs+='height: 23px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='border: 2px solid #ffffff;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='background-image:url(' + basePath + 'images/alpha_background_000000_155.png);';
		this._cubo_dialogo_tenis.setAttribute('style',hs);
		this._tt_tenis=document.createElement('div');
		this._tt_tenis.ggId='tt_tenis';
		this._tt_tenis.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_tenis.ggVisible=true;
		this._tt_tenis.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-76 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-11 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -74px;';
		hs+='top:  -9px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_tenis.setAttribute('style',hs);
		this._tt_tenis.innerHTML="Cancha Tenis";
		this._tt_tenis_white=document.createElement('div');
		this._tt_tenis_white.ggId='tt_tenis_white';
		this._tt_tenis_white.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_tenis_white.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: -1px;';
		hs+='top:  -1px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_tenis_white.setAttribute('style',hs);
		this._tt_tenis_white.innerHTML="Cancha Tenis";
		this._tt_tenis.appendChild(this._tt_tenis_white);
		this._cubo_dialogo_tenis.appendChild(this._tt_tenis);
		this._tenis_but.appendChild(this._cubo_dialogo_tenis);
		this._image_1161.appendChild(this._tenis_but);
		this._vista_but=document.createElement('div');
		this._vista_but.ggId='vista_but';
		this._vista_but.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._vista_but.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 2px;';
		hs+='top:  183px;';
		hs+='width: 64px;';
		hs+='height: 64px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._vista_but.setAttribute('style',hs);
		this._marker_12212=document.createElement('div');
		this._marker_12212.ggId='Marker 122';
		this._marker_12212.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_12212.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 71px;';
		hs+='top:  -181px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._marker_12212.setAttribute('style',hs);
		this._marker_12212.ggMarkerNodeId='0';
		nodeMarker.push(this._marker_12212);
		this._marker_12212.onclick=function () {
			me.player.openNext('0');
		}
		this._marker_12212.ggActivate=function () {
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
			me._activo_06.style[domTransition]='none';
			me._activo_06.style.visibility='hidden';
			me._activo_06.ggVisible=false;
			me._activo_07.style[domTransition]='none';
			me._activo_07.style.visibility='hidden';
			me._activo_07.ggVisible=false;
		}
		this._vista_but.appendChild(this._marker_12212);
		this._desactivo_010=document.createElement('div');
		this._desactivo_010.ggId='desactivo_01';
		this._desactivo_010.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._desactivo_010.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 64px;';
		hs+='height: 64px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._desactivo_010.setAttribute('style',hs);
		this._desactivo_010__img=document.createElement('img');
		this._desactivo_010__img.setAttribute('src',basePath + 'images/desactivo_010.svg');
		this._desactivo_010__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 64px;height: 64px;');
		this._desactivo_010.appendChild(this._desactivo_010__img);
		this._desactivo_010.onclick=function () {
			me.player.openNext("{node4}","");
			me.player.playSound("camera","1");
			me._home_plano.style[domTransition]='none';
			me._home_plano.style.visibility='hidden';
			me._home_plano.ggVisible=false;
			if (me.player.transitionsDisabled) {
				me._screen_tint.style[domTransition]='none';
			} else {
				me._screen_tint.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._screen_tint.style.opacity='0';
			me._screen_tint.style.visibility='hidden';
		}
		this._desactivo_010.onmouseover=function () {
			me._desactivo_010__img.src=basePath + 'images/desactivo_010__o.svg';
			me.elementMouseOver['desactivo_010']=true;
		}
		this._desactivo_010.onmouseout=function () {
			me._cubo_dialogo_mirador.style[domTransition]='none';
			me._cubo_dialogo_mirador.style.visibility='hidden';
			me._cubo_dialogo_mirador.ggVisible=false;
			me._desactivo_010__img.src=basePath + 'images/desactivo_010.svg';
			me.elementMouseOver['desactivo_010']=false;
		}
		this._desactivo_010.ontouchend=function () {
			me.elementMouseOver['desactivo_010']=false;
		}
		this._cubo_dialogo_mirador=document.createElement('div');
		this._cubo_dialogo_mirador.ggId='cubo_dialogo_mirador';
		this._cubo_dialogo_mirador.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._cubo_dialogo_mirador.ggVisible=false;
		hs ='position:absolute;';
		hs+='left: 60px;';
		hs+='top:  12px;';
		hs+='width: 138px;';
		hs+='height: 23px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='border: 2px solid #ffffff;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='background-image:url(' + basePath + 'images/alpha_background_000000_155.png);';
		this._cubo_dialogo_mirador.setAttribute('style',hs);
		this._tt_mirador=document.createElement('div');
		this._tt_mirador.ggId='tt_mirador';
		this._tt_mirador.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_mirador.ggVisible=true;
		this._tt_mirador.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-76 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-11 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -74px;';
		hs+='top:  -9px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_mirador.setAttribute('style',hs);
		this._tt_mirador.innerHTML="Mirador: 2.575 msnm";
		this._tt_mirador_white=document.createElement('div');
		this._tt_mirador_white.ggId='tt_mirador_white';
		this._tt_mirador_white.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_mirador_white.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: -1px;';
		hs+='top:  -1px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_mirador_white.setAttribute('style',hs);
		this._tt_mirador_white.innerHTML="Mirador: 2.575 msnm";
		this._tt_mirador.appendChild(this._tt_mirador_white);
		this._cubo_dialogo_mirador.appendChild(this._tt_mirador);
		this._desactivo_010.appendChild(this._cubo_dialogo_mirador);
		this._vista_but.appendChild(this._desactivo_010);
		this._image_1161.appendChild(this._vista_but);
		this.__101_but=document.createElement('div');
		this.__101_but.ggId='101_but';
		this.__101_but.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__101_but.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 689px;';
		hs+='top:  178px;';
		hs+='width: 64px;';
		hs+='height: 64px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this.__101_but.setAttribute('style',hs);
		this._marker_12211=document.createElement('div');
		this._marker_12211.ggId='Marker 122';
		this._marker_12211.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_12211.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 71px;';
		hs+='top:  -181px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._marker_12211.setAttribute('style',hs);
		this._marker_12211.ggMarkerNodeId='101';
		nodeMarker.push(this._marker_12211);
		this._marker_12211.onclick=function () {
			me.player.openNext('101');
		}
		this._marker_12211.ggActivate=function () {
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
			me._activo_07.style[domTransition]='none';
			me._activo_07.style.visibility='hidden';
			me._activo_07.ggVisible=false;
		}
		this.__101_but.appendChild(this._marker_12211);
		this._desactivo_020=document.createElement('div');
		this._desactivo_020.ggId='desactivo_02';
		this._desactivo_020.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._desactivo_020.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 64px;';
		hs+='height: 64px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._desactivo_020.setAttribute('style',hs);
		this._desactivo_020__img=document.createElement('img');
		this._desactivo_020__img.setAttribute('src',basePath + 'images/desactivo_020.svg');
		this._desactivo_020__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 64px;height: 64px;');
		this._desactivo_020.appendChild(this._desactivo_020__img);
		this._desactivo_020.onclick=function () {
			me._mapa_101.style[domTransition]='none';
			me._mapa_101.style.visibility='inherit';
			me._mapa_101.ggVisible=true;
			me.player.playSound("camera","1");
			me._home_plano.style[domTransition]='none';
			me._home_plano.style.visibility='hidden';
			me._home_plano.ggVisible=false;
			me._screen_tint.style[domTransition]='none';
			me._screen_tint.style.opacity='1';
			me._screen_tint.style.visibility=me._screen_tint.ggVisible?'inherit':'hidden';
			me.player.openNext("{node4}","");
		}
		this._desactivo_020.onmouseover=function () {
			me._desactivo_020__img.src=basePath + 'images/desactivo_020__o.svg';
			me.elementMouseOver['desactivo_020']=true;
		}
		this._desactivo_020.onmouseout=function () {
			me._cubo_dialogo_101.style[domTransition]='none';
			me._cubo_dialogo_101.style.visibility='hidden';
			me._cubo_dialogo_101.ggVisible=false;
			me._desactivo_020__img.src=basePath + 'images/desactivo_020.svg';
			me.elementMouseOver['desactivo_020']=false;
		}
		this._desactivo_020.ontouchend=function () {
			me.elementMouseOver['desactivo_020']=false;
		}
		this._cubo_dialogo_101=document.createElement('div');
		this._cubo_dialogo_101.ggId='cubo_dialogo_101';
		this._cubo_dialogo_101.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._cubo_dialogo_101.ggVisible=false;
		hs ='position:absolute;';
		hs+='left: -140px;';
		hs+='top:  10px;';
		hs+='width: 138px;';
		hs+='height: 23px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='border: 2px solid #ffffff;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='background-image:url(' + basePath + 'images/alpha_background_000000_155.png);';
		this._cubo_dialogo_101.setAttribute('style',hs);
		this._tt_101=document.createElement('div');
		this._tt_101.ggId='tt_101';
		this._tt_101.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_101.ggVisible=true;
		this._tt_101.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-76 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-11 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -74px;';
		hs+='top:  -9px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_101.setAttribute('style',hs);
		this._tt_101.innerHTML="Lote 101";
		this._tt_101_white=document.createElement('div');
		this._tt_101_white.ggId='tt_101_white';
		this._tt_101_white.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_101_white.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: -1px;';
		hs+='top:  -1px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_101_white.setAttribute('style',hs);
		this._tt_101_white.innerHTML="Lote 101";
		this._tt_101.appendChild(this._tt_101_white);
		this._cubo_dialogo_101.appendChild(this._tt_101);
		this._desactivo_020.appendChild(this._cubo_dialogo_101);
		this.__101_but.appendChild(this._desactivo_020);
		this._image_1161.appendChild(this.__101_but);
		this.__46_but=document.createElement('div');
		this.__46_but.ggId='46_but';
		this.__46_but.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__46_but.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 143px;';
		hs+='top:  94px;';
		hs+='width: 64px;';
		hs+='height: 64px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this.__46_but.setAttribute('style',hs);
		this._marker_12210=document.createElement('div');
		this._marker_12210.ggId='Marker 122';
		this._marker_12210.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_12210.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 71px;';
		hs+='top:  -181px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._marker_12210.setAttribute('style',hs);
		this._marker_12210.ggMarkerNodeId='46';
		nodeMarker.push(this._marker_12210);
		this._marker_12210.onclick=function () {
			me.player.openNext('46');
		}
		this._marker_12210.ggActivate=function () {
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
			me._activo_06.style[domTransition]='none';
			me._activo_06.style.visibility='hidden';
			me._activo_06.ggVisible=false;
			me._activo_07.style[domTransition]='none';
			me._activo_07.style.visibility='hidden';
			me._activo_07.ggVisible=false;
		}
		this.__46_but.appendChild(this._marker_12210);
		this._desactivo_030=document.createElement('div');
		this._desactivo_030.ggId='desactivo_03';
		this._desactivo_030.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._desactivo_030.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 64px;';
		hs+='height: 64px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._desactivo_030.setAttribute('style',hs);
		this._desactivo_030__img=document.createElement('img');
		this._desactivo_030__img.setAttribute('src',basePath + 'images/desactivo_030.svg');
		this._desactivo_030__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 64px;height: 64px;');
		this._desactivo_030.appendChild(this._desactivo_030__img);
		this._desactivo_030.onclick=function () {
			me._mapa_46.style[domTransition]='none';
			me._mapa_46.style.visibility='inherit';
			me._mapa_46.ggVisible=true;
			me.player.playSound("camera","1");
			me._home_plano.style[domTransition]='none';
			me._home_plano.style.visibility='hidden';
			me._home_plano.ggVisible=false;
			me._screen_tint.style[domTransition]='none';
			me._screen_tint.style.opacity='1';
			me._screen_tint.style.visibility=me._screen_tint.ggVisible?'inherit':'hidden';
			me.player.openNext("{node4}","");
		}
		this._desactivo_030.onmouseover=function () {
			me._desactivo_030__img.src=basePath + 'images/desactivo_030__o.svg';
			me.elementMouseOver['desactivo_030']=true;
		}
		this._desactivo_030.onmouseout=function () {
			me._cubo_dialogo_46.style[domTransition]='none';
			me._cubo_dialogo_46.style.visibility='hidden';
			me._cubo_dialogo_46.ggVisible=false;
			me._desactivo_030__img.src=basePath + 'images/desactivo_030.svg';
			me.elementMouseOver['desactivo_030']=false;
		}
		this._desactivo_030.ontouchend=function () {
			me.elementMouseOver['desactivo_030']=false;
		}
		this._cubo_dialogo_46=document.createElement('div');
		this._cubo_dialogo_46.ggId='cubo_dialogo_46';
		this._cubo_dialogo_46.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._cubo_dialogo_46.ggVisible=false;
		hs ='position:absolute;';
		hs+='left: 63px;';
		hs+='top:  10px;';
		hs+='width: 138px;';
		hs+='height: 23px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		hs+='border: 2px solid #ffffff;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='background-image:url(' + basePath + 'images/alpha_background_000000_155.png);';
		this._cubo_dialogo_46.setAttribute('style',hs);
		this._tt_46=document.createElement('div');
		this._tt_46.ggId='tt_46';
		this._tt_46.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_46.ggVisible=true;
		this._tt_46.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-76 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-11 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -74px;';
		hs+='top:  -9px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_46.setAttribute('style',hs);
		this._tt_46.innerHTML="Lote 46";
		this._tt_46_white=document.createElement('div');
		this._tt_46_white.ggId='tt_46_white';
		this._tt_46_white.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._tt_46_white.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: -1px;';
		hs+='top:  -1px;';
		hs+='width: 150px;';
		hs+='height: 18px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 0px solid #000000;';
		hs+='color: #ffffff;';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		this._tt_46_white.setAttribute('style',hs);
		this._tt_46_white.innerHTML="Lote 46";
		this._tt_46.appendChild(this._tt_46_white);
		this._cubo_dialogo_46.appendChild(this._tt_46);
		this._desactivo_030.appendChild(this._cubo_dialogo_46);
		this.__46_but.appendChild(this._desactivo_030);
		this._image_1161.appendChild(this.__46_but);
		this._home_plano.appendChild(this._image_1161);
		this.divSkin.appendChild(this._home_plano);
		this._mapa_46=document.createElement('div');
		this._mapa_46.ggId='mapa_46';
		this._mapa_46.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._mapa_46.ggVisible=false;
		this._mapa_46.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-440 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-304 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -440px;';
		hs+='top:  -304px;';
		hs+='width: 880px;';
		hs+='height: 600px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._mapa_46.setAttribute('style',hs);
		this._image_1160=document.createElement('div');
		this._image_1160.ggId='Image 116';
		this._image_1160.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_1160.ggVisible=true;
		this._image_1160.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-440 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-300 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -440px;';
		hs+='top:  -300px;';
		hs+='width: 879px;';
		hs+='height: 600px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._image_1160.setAttribute('style',hs);
		this._image_1160__img=document.createElement('img');
		this._image_1160__img.setAttribute('src',basePath + 'images/image_1160.png');
		this._image_1160__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._image_1160__img);
		this._image_1160.appendChild(this._image_1160__img);
		this._rectangle_2350=document.createElement('div');
		this._rectangle_2350.ggId='Rectangle 235';
		this._rectangle_2350.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_2350.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: -2px;';
		hs+='top:  -2px;';
		hs+='width: 875px;';
		hs+='height: 595px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 5px solid #000000;';
		hs+='border-radius: 25px;';
		hs+=cssPrefix + 'border-radius: 25px;';
		hs+='background-image:url(' + basePath + 'images/alpha_background_ffffff_0.png);';
		this._rectangle_2350.setAttribute('style',hs);
		this._image_1160.appendChild(this._rectangle_2350);
		this._svg_1210=document.createElement('div');
		this._svg_1210.ggId='Svg 121';
		this._svg_1210.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._svg_1210.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 836px;';
		hs+='top:  12px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._svg_1210.setAttribute('style',hs);
		this._svg_1210__img=document.createElement('img');
		this._svg_1210__img.setAttribute('src',basePath + 'images/svg_1210.svg');
		this._svg_1210__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;');
		this._svg_1210.appendChild(this._svg_1210__img);
		this._svg_1210.onclick=function () {
			me._mapa_46.style[domTransition]='none';
			me._mapa_46.style.visibility='hidden';
			me._mapa_46.ggVisible=false;
			me.player.playSound("click_close","1");
			if (me.player.transitionsDisabled) {
				me._screen_tint.style[domTransition]='none';
			} else {
				me._screen_tint.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._screen_tint.style.opacity='0';
			me._screen_tint.style.visibility='hidden';
		}
		this._image_1160.appendChild(this._svg_1210);
		this._act_01=document.createElement('div');
		this._act_01.ggId='act_01';
		this._act_01.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._act_01.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 824px;';
		hs+='top:  494px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._act_01.setAttribute('style',hs);
		this._marker_1229=document.createElement('div');
		this._marker_1229.ggId='Marker 122';
		this._marker_1229.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_1229.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 71px;';
		hs+='top:  -181px;';
		hs+='width: 5px;';
		hs+='height: 5px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._marker_1229.setAttribute('style',hs);
		this._marker_1229.ggMarkerNodeId='1';
		nodeMarker.push(this._marker_1229);
		this._marker_1229.onclick=function () {
			me.player.openNext('1');
		}
		this._marker_1229.ggActivate=function () {
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
			me._activo_06.style[domTransition]='none';
			me._activo_06.style.visibility='hidden';
			me._activo_06.ggVisible=false;
		}
		this._act_01.appendChild(this._marker_1229);
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
			me.player.openNext("{node5}","");
			me.player.playSound("camera","1");
			me._mapa_46.style[domTransition]='none';
			me._mapa_46.style.visibility='hidden';
			me._mapa_46.ggVisible=false;
			if (me.player.transitionsDisabled) {
				me._screen_tint.style[domTransition]='none';
			} else {
				me._screen_tint.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._screen_tint.style.opacity='0';
			me._screen_tint.style.visibility='hidden';
		}
		this._desactivo_01.onmouseover=function () {
			me._desactivo_01__img.src=basePath + 'images/desactivo_01__o.svg';
		}
		this._desactivo_01.onmouseout=function () {
			me._desactivo_01__img.src=basePath + 'images/desactivo_01.svg';
		}
		this._act_01.appendChild(this._desactivo_01);
		this._activo_01=document.createElement('div');
		this._activo_01.ggId='activo_01';
		this._activo_01.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._activo_01.ggVisible=false;
		hs ='position:absolute;';
		hs+='left: -17px;';
		hs+='top:  -16px;';
		hs+='width: 64px;';
		hs+='height: 64px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._activo_01.setAttribute('style',hs);
		this._activo_01__img=document.createElement('img');
		this._activo_01__img.setAttribute('src',basePath + 'images/activo_01.svg');
		this._activo_01__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 64px;height: 64px;');
		this._activo_01.appendChild(this._activo_01__img);
		this._act_01.appendChild(this._activo_01);
		this._image_1160.appendChild(this._act_01);
		this._act_02=document.createElement('div');
		this._act_02.ggId='act_02';
		this._act_02.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._act_02.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 381px;';
		hs+='top:  239px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._act_02.setAttribute('style',hs);
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
		this._marker_1228.ggMarkerNodeId='2';
		nodeMarker.push(this._marker_1228);
		this._marker_1228.onclick=function () {
			me.player.openNext('2');
		}
		this._marker_1228.ggActivate=function () {
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
			me._activo_06.style[domTransition]='none';
			me._activo_06.style.visibility='hidden';
			me._activo_06.ggVisible=false;
		}
		this._act_02.appendChild(this._marker_1228);
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
			me.player.openNext("{node6}","");
			me.player.playSound("camera","1");
			me._mapa_46.style[domTransition]='none';
			me._mapa_46.style.visibility='hidden';
			me._mapa_46.ggVisible=false;
			if (me.player.transitionsDisabled) {
				me._screen_tint.style[domTransition]='none';
			} else {
				me._screen_tint.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._screen_tint.style.opacity='0';
			me._screen_tint.style.visibility='hidden';
		}
		this._desactivo_02.onmouseover=function () {
			me._desactivo_02__img.src=basePath + 'images/desactivo_02__o.svg';
		}
		this._desactivo_02.onmouseout=function () {
			me._desactivo_02__img.src=basePath + 'images/desactivo_02.svg';
		}
		this._act_02.appendChild(this._desactivo_02);
		this._activo_02=document.createElement('div');
		this._activo_02.ggId='activo_02';
		this._activo_02.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._activo_02.ggVisible=false;
		hs ='position:absolute;';
		hs+='left: -17px;';
		hs+='top:  -16px;';
		hs+='width: 64px;';
		hs+='height: 64px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._activo_02.setAttribute('style',hs);
		this._activo_02__img=document.createElement('img');
		this._activo_02__img.setAttribute('src',basePath + 'images/activo_02.svg');
		this._activo_02__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 64px;height: 64px;');
		this._activo_02.appendChild(this._activo_02__img);
		this._act_02.appendChild(this._activo_02);
		this._image_1160.appendChild(this._act_02);
		this._act_03=document.createElement('div');
		this._act_03.ggId='act_03';
		this._act_03.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._act_03.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 193px;';
		hs+='top:  281px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._act_03.setAttribute('style',hs);
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
		this._marker_1227.ggMarkerNodeId='3';
		nodeMarker.push(this._marker_1227);
		this._marker_1227.onclick=function () {
			me.player.openNext('3');
		}
		this._marker_1227.ggActivate=function () {
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
			me._activo_06.style[domTransition]='none';
			me._activo_06.style.visibility='hidden';
			me._activo_06.ggVisible=false;
		}
		this._act_03.appendChild(this._marker_1227);
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
			me.player.openNext("{node7}","");
			me.player.playSound("camera","1");
			me._mapa_46.style[domTransition]='none';
			me._mapa_46.style.visibility='hidden';
			me._mapa_46.ggVisible=false;
			if (me.player.transitionsDisabled) {
				me._screen_tint.style[domTransition]='none';
			} else {
				me._screen_tint.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._screen_tint.style.opacity='0';
			me._screen_tint.style.visibility='hidden';
		}
		this._desactivo_03.onmouseover=function () {
			me._desactivo_03__img.src=basePath + 'images/desactivo_03__o.svg';
		}
		this._desactivo_03.onmouseout=function () {
			me._desactivo_03__img.src=basePath + 'images/desactivo_03.svg';
		}
		this._act_03.appendChild(this._desactivo_03);
		this._activo_03=document.createElement('div');
		this._activo_03.ggId='activo_03';
		this._activo_03.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._activo_03.ggVisible=false;
		hs ='position:absolute;';
		hs+='left: -16px;';
		hs+='top:  -16px;';
		hs+='width: 64px;';
		hs+='height: 64px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._activo_03.setAttribute('style',hs);
		this._activo_03__img=document.createElement('img');
		this._activo_03__img.setAttribute('src',basePath + 'images/activo_03.svg');
		this._activo_03__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 64px;height: 64px;');
		this._activo_03.appendChild(this._activo_03__img);
		this._act_03.appendChild(this._activo_03);
		this._image_1160.appendChild(this._act_03);
		this._act_04=document.createElement('div');
		this._act_04.ggId='act_04';
		this._act_04.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._act_04.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 271px;';
		hs+='top:  209px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._act_04.setAttribute('style',hs);
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
		this._marker_1226.ggMarkerNodeId='4';
		nodeMarker.push(this._marker_1226);
		this._marker_1226.onclick=function () {
			me.player.openNext('4');
		}
		this._marker_1226.ggActivate=function () {
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
			me._activo_06.style[domTransition]='none';
			me._activo_06.style.visibility='hidden';
			me._activo_06.ggVisible=false;
		}
		this._act_04.appendChild(this._marker_1226);
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
			me.player.openNext("{node8}","");
			me.player.playSound("camera","1");
			me._mapa_46.style[domTransition]='none';
			me._mapa_46.style.visibility='hidden';
			me._mapa_46.ggVisible=false;
			if (me.player.transitionsDisabled) {
				me._screen_tint.style[domTransition]='none';
			} else {
				me._screen_tint.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._screen_tint.style.opacity='0';
			me._screen_tint.style.visibility='hidden';
		}
		this._desactivo_04.onmouseover=function () {
			me._desactivo_04__img.src=basePath + 'images/desactivo_04__o.svg';
		}
		this._desactivo_04.onmouseout=function () {
			me._desactivo_04__img.src=basePath + 'images/desactivo_04.svg';
		}
		this._act_04.appendChild(this._desactivo_04);
		this._activo_04=document.createElement('div');
		this._activo_04.ggId='activo_04';
		this._activo_04.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._activo_04.ggVisible=false;
		hs ='position:absolute;';
		hs+='left: -16px;';
		hs+='top:  -17px;';
		hs+='width: 64px;';
		hs+='height: 64px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._activo_04.setAttribute('style',hs);
		this._activo_04__img=document.createElement('img');
		this._activo_04__img.setAttribute('src',basePath + 'images/activo_04.svg');
		this._activo_04__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 64px;height: 64px;');
		this._activo_04.appendChild(this._activo_04__img);
		this._act_04.appendChild(this._activo_04);
		this._image_1160.appendChild(this._act_04);
		this._act_05=document.createElement('div');
		this._act_05.ggId='act_05';
		this._act_05.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._act_05.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 53px;';
		hs+='top:  135px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._act_05.setAttribute('style',hs);
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
		this._marker_1225.ggMarkerNodeId='5';
		nodeMarker.push(this._marker_1225);
		this._marker_1225.onclick=function () {
			me.player.openNext('5');
		}
		this._marker_1225.ggActivate=function () {
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
			me._activo_06.style[domTransition]='none';
			me._activo_06.style.visibility='hidden';
			me._activo_06.ggVisible=false;
		}
		this._act_05.appendChild(this._marker_1225);
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
			me.player.openNext("{node9}","");
			me.player.playSound("camera","1");
			me._mapa_46.style[domTransition]='none';
			me._mapa_46.style.visibility='hidden';
			me._mapa_46.ggVisible=false;
			if (me.player.transitionsDisabled) {
				me._screen_tint.style[domTransition]='none';
			} else {
				me._screen_tint.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._screen_tint.style.opacity='0';
			me._screen_tint.style.visibility='hidden';
		}
		this._desactivo_05.onmouseover=function () {
			me._desactivo_05__img.src=basePath + 'images/desactivo_05__o.svg';
		}
		this._desactivo_05.onmouseout=function () {
			me._desactivo_05__img.src=basePath + 'images/desactivo_05.svg';
		}
		this._act_05.appendChild(this._desactivo_05);
		this._activo_05=document.createElement('div');
		this._activo_05.ggId='activo_05';
		this._activo_05.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._activo_05.ggVisible=false;
		hs ='position:absolute;';
		hs+='left: -17px;';
		hs+='top:  -16px;';
		hs+='width: 64px;';
		hs+='height: 64px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._activo_05.setAttribute('style',hs);
		this._activo_05__img=document.createElement('img');
		this._activo_05__img.setAttribute('src',basePath + 'images/activo_05.svg');
		this._activo_05__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 64px;height: 64px;');
		this._activo_05.appendChild(this._activo_05__img);
		this._act_05.appendChild(this._activo_05);
		this._image_1160.appendChild(this._act_05);
		this._act_06=document.createElement('div');
		this._act_06.ggId='act_06';
		this._act_06.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._act_06.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 712px;';
		hs+='top:  165px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._act_06.setAttribute('style',hs);
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
		this._marker_1224.ggMarkerNodeId='6';
		nodeMarker.push(this._marker_1224);
		this._marker_1224.onclick=function () {
			me.player.openNext('6');
		}
		this._marker_1224.ggActivate=function () {
			me._activo_06.style[domTransition]='none';
			me._activo_06.style.visibility='inherit';
			me._activo_06.ggVisible=true;
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
			me._activo_05.style[domTransition]='none';
			me._activo_05.style.visibility='hidden';
			me._activo_05.ggVisible=false;
		}
		this._act_06.appendChild(this._marker_1224);
		this._desactivo_06=document.createElement('div');
		this._desactivo_06.ggId='desactivo_06';
		this._desactivo_06.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._desactivo_06.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._desactivo_06.setAttribute('style',hs);
		this._desactivo_06__img=document.createElement('img');
		this._desactivo_06__img.setAttribute('src',basePath + 'images/desactivo_06.svg');
		this._desactivo_06__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;');
		this._desactivo_06.appendChild(this._desactivo_06__img);
		this._desactivo_06.onclick=function () {
			me.player.openNext("{node10}","");
			me.player.playSound("camera","1");
			me._mapa_46.style[domTransition]='none';
			me._mapa_46.style.visibility='hidden';
			me._mapa_46.ggVisible=false;
			if (me.player.transitionsDisabled) {
				me._screen_tint.style[domTransition]='none';
			} else {
				me._screen_tint.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._screen_tint.style.opacity='0';
			me._screen_tint.style.visibility='hidden';
		}
		this._desactivo_06.onmouseover=function () {
			me._desactivo_06__img.src=basePath + 'images/desactivo_06__o.svg';
		}
		this._desactivo_06.onmouseout=function () {
			me._desactivo_06__img.src=basePath + 'images/desactivo_06.svg';
		}
		this._act_06.appendChild(this._desactivo_06);
		this._activo_06=document.createElement('div');
		this._activo_06.ggId='activo_06';
		this._activo_06.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._activo_06.ggVisible=false;
		hs ='position:absolute;';
		hs+='left: -16px;';
		hs+='top:  -16px;';
		hs+='width: 64px;';
		hs+='height: 64px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._activo_06.setAttribute('style',hs);
		this._activo_06__img=document.createElement('img');
		this._activo_06__img.setAttribute('src',basePath + 'images/activo_06.svg');
		this._activo_06__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 64px;height: 64px;');
		this._activo_06.appendChild(this._activo_06__img);
		this._act_06.appendChild(this._activo_06);
		this._image_1160.appendChild(this._act_06);
		this._mapa_46.appendChild(this._image_1160);
		this.divSkin.appendChild(this._mapa_46);
		this._mapa_101=document.createElement('div');
		this._mapa_101.ggId='mapa_101';
		this._mapa_101.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._mapa_101.ggVisible=false;
		this._mapa_101.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-440 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-304 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -440px;';
		hs+='top:  -304px;';
		hs+='width: 880px;';
		hs+='height: 600px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._mapa_101.setAttribute('style',hs);
		this._image_116=document.createElement('div');
		this._image_116.ggId='Image 116';
		this._image_116.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_116.ggVisible=true;
		this._image_116.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-440 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-300 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -440px;';
		hs+='top:  -300px;';
		hs+='width: 879px;';
		hs+='height: 599px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._image_116.setAttribute('style',hs);
		this._image_116__img=document.createElement('img');
		this._image_116__img.setAttribute('src',basePath + 'images/image_116.png');
		this._image_116__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._image_116__img);
		this._image_116.appendChild(this._image_116__img);
		this._rectangle_235=document.createElement('div');
		this._rectangle_235.ggId='Rectangle 235';
		this._rectangle_235.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_235.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: -2px;';
		hs+='top:  -2px;';
		hs+='width: 875px;';
		hs+='height: 595px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 5px solid #000000;';
		hs+='border-radius: 25px;';
		hs+=cssPrefix + 'border-radius: 25px;';
		hs+='background-image:url(' + basePath + 'images/alpha_background_ffffff_0.png);';
		this._rectangle_235.setAttribute('style',hs);
		this._image_116.appendChild(this._rectangle_235);
		this._svg_121=document.createElement('div');
		this._svg_121.ggId='Svg 121';
		this._svg_121.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._svg_121.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 836px;';
		hs+='top:  12px;';
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
			me._mapa_101.style[domTransition]='none';
			me._mapa_101.style.visibility='hidden';
			me._mapa_101.ggVisible=false;
			me.player.playSound("click_close","1");
			if (me.player.transitionsDisabled) {
				me._screen_tint.style[domTransition]='none';
			} else {
				me._screen_tint.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._screen_tint.style.opacity='0';
			me._screen_tint.style.visibility='hidden';
		}
		this._image_116.appendChild(this._svg_121);
		this._act_07=document.createElement('div');
		this._act_07.ggId='act_07';
		this._act_07.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._act_07.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 153px;';
		hs+='top:  241px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._act_07.setAttribute('style',hs);
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
		this._marker_1223.ggMarkerNodeId='7';
		nodeMarker.push(this._marker_1223);
		this._marker_1223.onclick=function () {
			me.player.openNext('7');
		}
		this._marker_1223.ggActivate=function () {
			me._activo_07.style[domTransition]='none';
			me._activo_07.style.visibility='inherit';
			me._activo_07.ggVisible=true;
			me._activo_08.style[domTransition]='none';
			me._activo_08.style.visibility='hidden';
			me._activo_08.ggVisible=false;
			me._activo_09.style[domTransition]='none';
			me._activo_09.style.visibility='hidden';
			me._activo_09.ggVisible=false;
			me._activo_10.style[domTransition]='none';
			me._activo_10.style.visibility='hidden';
			me._activo_10.ggVisible=false;
			me._activo_11.style[domTransition]='none';
			me._activo_11.style.visibility='hidden';
			me._activo_11.ggVisible=false;
		}
		this._act_07.appendChild(this._marker_1223);
		this._desactivo_07=document.createElement('div');
		this._desactivo_07.ggId='desactivo_07';
		this._desactivo_07.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._desactivo_07.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._desactivo_07.setAttribute('style',hs);
		this._desactivo_07__img=document.createElement('img');
		this._desactivo_07__img.setAttribute('src',basePath + 'images/desactivo_07.svg');
		this._desactivo_07__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;');
		this._desactivo_07.appendChild(this._desactivo_07__img);
		this._desactivo_07.onclick=function () {
			me.player.openNext("{node11}","");
			me.player.playSound("camera","1");
			me._mapa_101.style[domTransition]='none';
			me._mapa_101.style.visibility='hidden';
			me._mapa_101.ggVisible=false;
			if (me.player.transitionsDisabled) {
				me._screen_tint.style[domTransition]='none';
			} else {
				me._screen_tint.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._screen_tint.style.opacity='0';
			me._screen_tint.style.visibility='hidden';
		}
		this._desactivo_07.onmouseover=function () {
			me._desactivo_07__img.src=basePath + 'images/desactivo_07__o.svg';
		}
		this._desactivo_07.onmouseout=function () {
			me._desactivo_07__img.src=basePath + 'images/desactivo_07.svg';
		}
		this._act_07.appendChild(this._desactivo_07);
		this._activo_07=document.createElement('div');
		this._activo_07.ggId='activo_07';
		this._activo_07.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._activo_07.ggVisible=false;
		hs ='position:absolute;';
		hs+='left: -16px;';
		hs+='top:  -16px;';
		hs+='width: 64px;';
		hs+='height: 64px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._activo_07.setAttribute('style',hs);
		this._activo_07__img=document.createElement('img');
		this._activo_07__img.setAttribute('src',basePath + 'images/activo_07.svg');
		this._activo_07__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 64px;height: 64px;');
		this._activo_07.appendChild(this._activo_07__img);
		this._act_07.appendChild(this._activo_07);
		this._image_116.appendChild(this._act_07);
		this._act_08=document.createElement('div');
		this._act_08.ggId='act_08';
		this._act_08.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._act_08.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 256px;';
		hs+='top:  223px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._act_08.setAttribute('style',hs);
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
		this._marker_1222.ggMarkerNodeId='8';
		nodeMarker.push(this._marker_1222);
		this._marker_1222.onclick=function () {
			me.player.openNext('8');
		}
		this._marker_1222.ggActivate=function () {
			me._activo_08.style[domTransition]='none';
			me._activo_08.style.visibility='inherit';
			me._activo_08.ggVisible=true;
			me._activo_07.style[domTransition]='none';
			me._activo_07.style.visibility='hidden';
			me._activo_07.ggVisible=false;
			me._activo_09.style[domTransition]='none';
			me._activo_09.style.visibility='hidden';
			me._activo_09.ggVisible=false;
			me._activo_10.style[domTransition]='none';
			me._activo_10.style.visibility='hidden';
			me._activo_10.ggVisible=false;
			me._activo_11.style[domTransition]='none';
			me._activo_11.style.visibility='hidden';
			me._activo_11.ggVisible=false;
		}
		this._act_08.appendChild(this._marker_1222);
		this._desactivo_08=document.createElement('div');
		this._desactivo_08.ggId='desactivo_08';
		this._desactivo_08.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._desactivo_08.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._desactivo_08.setAttribute('style',hs);
		this._desactivo_08__img=document.createElement('img');
		this._desactivo_08__img.setAttribute('src',basePath + 'images/desactivo_08.svg');
		this._desactivo_08__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;');
		this._desactivo_08.appendChild(this._desactivo_08__img);
		this._desactivo_08.onclick=function () {
			me.player.openNext("{node12}","");
			me.player.playSound("camera","1");
			me._mapa_101.style[domTransition]='none';
			me._mapa_101.style.visibility='hidden';
			me._mapa_101.ggVisible=false;
			if (me.player.transitionsDisabled) {
				me._screen_tint.style[domTransition]='none';
			} else {
				me._screen_tint.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._screen_tint.style.opacity='0';
			me._screen_tint.style.visibility='hidden';
		}
		this._desactivo_08.onmouseover=function () {
			me._desactivo_08__img.src=basePath + 'images/desactivo_08__o.svg';
		}
		this._desactivo_08.onmouseout=function () {
			me._desactivo_08__img.src=basePath + 'images/desactivo_08.svg';
		}
		this._act_08.appendChild(this._desactivo_08);
		this._activo_08=document.createElement('div');
		this._activo_08.ggId='activo_08';
		this._activo_08.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._activo_08.ggVisible=false;
		hs ='position:absolute;';
		hs+='left: -16px;';
		hs+='top:  -16px;';
		hs+='width: 64px;';
		hs+='height: 64px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._activo_08.setAttribute('style',hs);
		this._activo_08__img=document.createElement('img');
		this._activo_08__img.setAttribute('src',basePath + 'images/activo_08.svg');
		this._activo_08__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 64px;height: 64px;');
		this._activo_08.appendChild(this._activo_08__img);
		this._act_08.appendChild(this._activo_08);
		this._image_116.appendChild(this._act_08);
		this._act_09=document.createElement('div');
		this._act_09.ggId='act_09';
		this._act_09.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._act_09.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 431px;';
		hs+='top:  121px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._act_09.setAttribute('style',hs);
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
		this._marker_1221.ggMarkerNodeId='9';
		nodeMarker.push(this._marker_1221);
		this._marker_1221.onclick=function () {
			me.player.openNext('9');
		}
		this._marker_1221.ggActivate=function () {
			me._activo_09.style[domTransition]='none';
			me._activo_09.style.visibility='inherit';
			me._activo_09.ggVisible=true;
			me._activo_07.style[domTransition]='none';
			me._activo_07.style.visibility='hidden';
			me._activo_07.ggVisible=false;
			me._activo_08.style[domTransition]='none';
			me._activo_08.style.visibility='hidden';
			me._activo_08.ggVisible=false;
			me._activo_10.style[domTransition]='none';
			me._activo_10.style.visibility='hidden';
			me._activo_10.ggVisible=false;
			me._activo_11.style[domTransition]='none';
			me._activo_11.style.visibility='hidden';
			me._activo_11.ggVisible=false;
		}
		this._act_09.appendChild(this._marker_1221);
		this._desactivo_09=document.createElement('div');
		this._desactivo_09.ggId='desactivo_09';
		this._desactivo_09.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._desactivo_09.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._desactivo_09.setAttribute('style',hs);
		this._desactivo_09__img=document.createElement('img');
		this._desactivo_09__img.setAttribute('src',basePath + 'images/desactivo_09.svg');
		this._desactivo_09__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;');
		this._desactivo_09.appendChild(this._desactivo_09__img);
		this._desactivo_09.onclick=function () {
			me.player.openNext("{node1}","");
			me.player.playSound("camera","1");
			me._mapa_101.style[domTransition]='none';
			me._mapa_101.style.visibility='hidden';
			me._mapa_101.ggVisible=false;
			if (me.player.transitionsDisabled) {
				me._screen_tint.style[domTransition]='none';
			} else {
				me._screen_tint.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._screen_tint.style.opacity='0';
			me._screen_tint.style.visibility='hidden';
		}
		this._desactivo_09.onmouseover=function () {
			me._desactivo_09__img.src=basePath + 'images/desactivo_09__o.svg';
		}
		this._desactivo_09.onmouseout=function () {
			me._desactivo_09__img.src=basePath + 'images/desactivo_09.svg';
		}
		this._act_09.appendChild(this._desactivo_09);
		this._activo_09=document.createElement('div');
		this._activo_09.ggId='activo_09';
		this._activo_09.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._activo_09.ggVisible=false;
		hs ='position:absolute;';
		hs+='left: -16px;';
		hs+='top:  -16px;';
		hs+='width: 64px;';
		hs+='height: 64px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._activo_09.setAttribute('style',hs);
		this._activo_09__img=document.createElement('img');
		this._activo_09__img.setAttribute('src',basePath + 'images/activo_09.svg');
		this._activo_09__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 64px;height: 64px;');
		this._activo_09.appendChild(this._activo_09__img);
		this._act_09.appendChild(this._activo_09);
		this._image_116.appendChild(this._act_09);
		this._act_10=document.createElement('div');
		this._act_10.ggId='act_10';
		this._act_10.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._act_10.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 601px;';
		hs+='top:  101px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._act_10.setAttribute('style',hs);
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
		this._marker_1220.ggMarkerNodeId='10';
		nodeMarker.push(this._marker_1220);
		this._marker_1220.onclick=function () {
			me.player.openNext('10');
		}
		this._marker_1220.ggActivate=function () {
			me._activo_10.style[domTransition]='none';
			me._activo_10.style.visibility='inherit';
			me._activo_10.ggVisible=true;
			me._activo_07.style[domTransition]='none';
			me._activo_07.style.visibility='hidden';
			me._activo_07.ggVisible=false;
			me._activo_08.style[domTransition]='none';
			me._activo_08.style.visibility='hidden';
			me._activo_08.ggVisible=false;
			me._activo_09.style[domTransition]='none';
			me._activo_09.style.visibility='hidden';
			me._activo_09.ggVisible=false;
			me._activo_11.style[domTransition]='none';
			me._activo_11.style.visibility='hidden';
			me._activo_11.ggVisible=false;
		}
		this._act_10.appendChild(this._marker_1220);
		this._desactivo_10=document.createElement('div');
		this._desactivo_10.ggId='desactivo_10';
		this._desactivo_10.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._desactivo_10.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._desactivo_10.setAttribute('style',hs);
		this._desactivo_10__img=document.createElement('img');
		this._desactivo_10__img.setAttribute('src',basePath + 'images/desactivo_10.svg');
		this._desactivo_10__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;');
		this._desactivo_10.appendChild(this._desactivo_10__img);
		this._desactivo_10.onclick=function () {
			me.player.openNext("{node13}","");
			me.player.playSound("camera","1");
			me._mapa_101.style[domTransition]='none';
			me._mapa_101.style.visibility='hidden';
			me._mapa_101.ggVisible=false;
			if (me.player.transitionsDisabled) {
				me._screen_tint.style[domTransition]='none';
			} else {
				me._screen_tint.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._screen_tint.style.opacity='0';
			me._screen_tint.style.visibility='hidden';
		}
		this._desactivo_10.onmouseover=function () {
			me._desactivo_10__img.src=basePath + 'images/desactivo_10__o.svg';
		}
		this._desactivo_10.onmouseout=function () {
			me._desactivo_10__img.src=basePath + 'images/desactivo_10.svg';
		}
		this._act_10.appendChild(this._desactivo_10);
		this._activo_10=document.createElement('div');
		this._activo_10.ggId='activo_10';
		this._activo_10.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._activo_10.ggVisible=false;
		hs ='position:absolute;';
		hs+='left: -16px;';
		hs+='top:  -17px;';
		hs+='width: 64px;';
		hs+='height: 64px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._activo_10.setAttribute('style',hs);
		this._activo_10__img=document.createElement('img');
		this._activo_10__img.setAttribute('src',basePath + 'images/activo_10.svg');
		this._activo_10__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 64px;height: 64px;');
		this._activo_10.appendChild(this._activo_10__img);
		this._act_10.appendChild(this._activo_10);
		this._image_116.appendChild(this._act_10);
		this._act_11=document.createElement('div');
		this._act_11.ggId='act_11';
		this._act_11.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._act_11.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 651px;';
		hs+='top:  260px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._act_11.setAttribute('style',hs);
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
		this._marker_122.ggMarkerNodeId='11';
		nodeMarker.push(this._marker_122);
		this._marker_122.onclick=function () {
			me.player.openNext('11');
		}
		this._marker_122.ggActivate=function () {
			me._activo_11.style[domTransition]='none';
			me._activo_11.style.visibility='inherit';
			me._activo_11.ggVisible=true;
			me._activo_07.style[domTransition]='none';
			me._activo_07.style.visibility='hidden';
			me._activo_07.ggVisible=false;
			me._activo_08.style[domTransition]='none';
			me._activo_08.style.visibility='hidden';
			me._activo_08.ggVisible=false;
			me._activo_09.style[domTransition]='none';
			me._activo_09.style.visibility='hidden';
			me._activo_09.ggVisible=false;
			me._activo_10.style[domTransition]='none';
			me._activo_10.style.visibility='hidden';
			me._activo_10.ggVisible=false;
		}
		this._act_11.appendChild(this._marker_122);
		this._desactivo_11=document.createElement('div');
		this._desactivo_11.ggId='desactivo_11';
		this._desactivo_11.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._desactivo_11.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._desactivo_11.setAttribute('style',hs);
		this._desactivo_11__img=document.createElement('img');
		this._desactivo_11__img.setAttribute('src',basePath + 'images/desactivo_11.svg');
		this._desactivo_11__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;');
		this._desactivo_11.appendChild(this._desactivo_11__img);
		this._desactivo_11.onclick=function () {
			me.player.openNext("{node3}","");
			me.player.playSound("camera","1");
			me._mapa_101.style[domTransition]='none';
			me._mapa_101.style.visibility='hidden';
			me._mapa_101.ggVisible=false;
			if (me.player.transitionsDisabled) {
				me._screen_tint.style[domTransition]='none';
			} else {
				me._screen_tint.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._screen_tint.style.opacity='0';
			me._screen_tint.style.visibility='hidden';
		}
		this._desactivo_11.onmouseover=function () {
			me._desactivo_11__img.src=basePath + 'images/desactivo_11__o.svg';
		}
		this._desactivo_11.onmouseout=function () {
			me._desactivo_11__img.src=basePath + 'images/desactivo_11.svg';
		}
		this._act_11.appendChild(this._desactivo_11);
		this._activo_11=document.createElement('div');
		this._activo_11.ggId='activo_11';
		this._activo_11.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._activo_11.ggVisible=false;
		hs ='position:absolute;';
		hs+='left: -16px;';
		hs+='top:  -17px;';
		hs+='width: 64px;';
		hs+='height: 64px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._activo_11.setAttribute('style',hs);
		this._activo_11__img=document.createElement('img');
		this._activo_11__img.setAttribute('src',basePath + 'images/activo_11.svg');
		this._activo_11__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 64px;height: 64px;');
		this._activo_11.appendChild(this._activo_11__img);
		this._act_11.appendChild(this._activo_11);
		this._image_116.appendChild(this._act_11);
		this._mapa_101.appendChild(this._image_116);
		this.divSkin.appendChild(this._mapa_101);
		this._faq_radar=document.createElement('div');
		this._faq_radar.ggId='FAQ_radar';
		this._faq_radar.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._faq_radar.ggVisible=true;
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
		hs+='width: 64px;';
		hs+='height: 64px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._faq_radar.setAttribute('style',hs);
		this._faq_radar__img=document.createElement('img');
		this._faq_radar__img.setAttribute('src',basePath + 'images/faq_radar.svg');
		this._faq_radar__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 64px;height: 64px;');
		this._faq_radar.appendChild(this._faq_radar__img);
		this._faq_radar.onclick=function () {
			me._how.style[domTransition]='none';
			me._how.style.visibility='inherit';
			me._how.ggVisible=true;
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
		this._marcador_14.ggMarkerNodeId='mapa_x';
		nodeMarker.push(this._marcador_14);
		this._marcador_14.onclick=function () {
			me.player.openNext('mapa_x');
		}
		this._marcador_14.ggActivate=function () {
			me._faq_radar.style[domTransition]='none';
			me._faq_radar.style.visibility='inherit';
			me._faq_radar.ggVisible=true;
		}
		this._faq_radar.appendChild(this._marcador_14);
		this.divSkin.appendChild(this._faq_radar);
		this._how=document.createElement('div');
		this._how.ggId='HOW';
		this._how.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._how.ggVisible=false;
		this._how.ggUpdatePosition=function() {
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
		this._how.setAttribute('style',hs);
		this._how.onmouseover=function () {
			me.elementMouseOver['how']=true;
		}
		this._how.onmouseout=function () {
			me.elementMouseOver['how']=false;
		}
		this._how.ontouchend=function () {
			me.elementMouseOver['how']=false;
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
		this._svg_700=document.createElement('div');
		this._svg_700.ggId='Svg 70';
		this._svg_700.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._svg_700.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 22px;';
		hs+='top:  29px;';
		hs+='width: 64px;';
		hs+='height: 64px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._svg_700.setAttribute('style',hs);
		this._svg_700__img=document.createElement('img');
		this._svg_700__img.setAttribute('src',basePath + 'images/svg_700.svg');
		this._svg_700__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 64px;height: 64px;');
		this._svg_700.appendChild(this._svg_700__img);
		this._rectangle_69.appendChild(this._svg_700);
		this._svg_710=document.createElement('div');
		this._svg_710.ggId='Svg 71';
		this._svg_710.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._svg_710.ggVisible=true;
		this._svg_710.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				h=this.parentNode.offsetHeight;
				this.style.top=(-159 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 100px;';
		hs+='top:  -155px;';
		hs+='width: 82px;';
		hs+='height: 54px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._svg_710.setAttribute('style',hs);
		this._svg_710__img=document.createElement('img');
		this._svg_710__img.setAttribute('src',basePath + 'images/svg_710.svg');
		this._svg_710__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 82px;height: 54px;');
		this._svg_710.appendChild(this._svg_710__img);
		this._rectangle_69.appendChild(this._svg_710);
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
		this._text_770.innerHTML="<b\/>Con click sostenido mueve el mouse.<b\/>";
		this._rectangle_741.appendChild(this._text_770);
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
		this._text_82.setAttribute('style',hs);
		this._text_82.innerHTML="<b\/>Usa EL o TU teclado para mover la escena.<b\/>\n";
		this._rectangle_741.appendChild(this._text_82);
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
				this.style.top=(-61 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -177px;';
		hs+='top:  -58px;';
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
		this._rectangle_740.appendChild(this._text_81);
		this._rectangle_69.appendChild(this._rectangle_740);
		this._svg_70=document.createElement('div');
		this._svg_70.ggId='Svg 70';
		this._svg_70.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._svg_70.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 55px;';
		hs+='top:  135px;';
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
				this.style.top=(65 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 118px;';
		hs+='top:  69px;';
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
		hs+='left: 28px;';
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
		this._text_77.innerHTML="<b\/>Haz click en el bot\xf3n rojo para ver un espacio.<b\/>\n";
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
		this._how.appendChild(this._rectangle_69);
		this.divSkin.appendChild(this._how);
		this._marcador_151.ggMarkerNormal=null;
		this._marcador_151.ggMarkerActive=null;
		this._marcador_150.ggMarkerNormal=null;
		this._marcador_150.ggMarkerActive=null;
		this._marcador_15.ggMarkerNormal=null;
		this._marcador_15.ggMarkerActive=null;
		this._marcador_vista.ggMarkerNormal=null;
		this._marcador_vista.ggMarkerActive=null;
		this._marcador_101.ggMarkerNormal=null;
		this._marcador_101.ggMarkerActive=null;
		this._marcador_46.ggMarkerNormal=null;
		this._marcador_46.ggMarkerActive=null;
		this._marker_12215.ggMarkerNormal=null;
		this._marker_12215.ggMarkerActive=null;
		this._marker_12214.ggMarkerNormal=null;
		this._marker_12214.ggMarkerActive=null;
		this._marker_12213.ggMarkerNormal=null;
		this._marker_12213.ggMarkerActive=null;
		this._marker_12212.ggMarkerNormal=null;
		this._marker_12212.ggMarkerActive=null;
		this._marker_12211.ggMarkerNormal=null;
		this._marker_12211.ggMarkerActive=null;
		this._marker_12210.ggMarkerNormal=null;
		this._marker_12210.ggMarkerActive=null;
		this._marker_1229.ggMarkerNormal=null;
		this._marker_1229.ggMarkerActive=null;
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
			me._activo_06.style[domTransition]='none';
			me._activo_06.style.visibility='hidden';
			me._activo_06.ggVisible=false;
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
		if (id=='flag_01') {
			me._popflag_01.onclick();
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
		this._text_774.ggUpdateText();
		this._text_832.ggUpdateText();
		this._text_771.ggUpdateText();
		this._text_830.ggUpdateText();
		if (me.elementMouseOver['desactivo_010']) {
			me._cubo_dialogo_mirador.style[domTransition]='none';
			me._cubo_dialogo_mirador.style.visibility='inherit';
			me._cubo_dialogo_mirador.ggVisible=true;
		}
		if (me.elementMouseOver['desactivo_020']) {
			me._cubo_dialogo_101.style[domTransition]='none';
			me._cubo_dialogo_101.style.visibility='inherit';
			me._cubo_dialogo_101.ggVisible=true;
		}
		if (me.elementMouseOver['desactivo_030']) {
			me._cubo_dialogo_46.style[domTransition]='none';
			me._cubo_dialogo_46.style.visibility='inherit';
			me._cubo_dialogo_46.ggVisible=true;
		}
		if (me.elementMouseOver['how']) {
			me._how.style[domTransition]='none';
			me._how.style.visibility='hidden';
			me._how.ggVisible=false;
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
				flag=(me._pdtext.style.visibility=='hidden');
				me._pdtext.style[domTransition]='none';
				me._pdtext.style.visibility=flag?'inherit':'hidden';
				me._pdtext.ggVisible=flag;
				me._pdtext.style[domTransition]='none';
				me._pdtext.style.visibility='inherit';
				me._pdtext.ggVisible=true;
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function () {
				me.player.hotspot=me.hotspot;
				me.player.playSound("click_close","1");
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function () {
				me.player.hotspot=me.player.emptyHotspot;
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
		if (hotspot.skinid=='popflag') {
			this.__div=document.createElement('div');
			this.__div.ggId='popflag';
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