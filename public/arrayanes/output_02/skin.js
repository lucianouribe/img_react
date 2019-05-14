// Garden Gnome Software - Skin
// Pano2VR 4.0/3102S
// Filename: Carlos_E_Smartphone.ggsk
// Generated Tue 21. Jul 12:32:16 2015

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
		this._popflag_01=document.createElement('div');
		this._popflag_01.ggId='popflag_01';
		this._popflag_01.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._popflag_01.ggVisible=true;
		this._popflag_01.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-320 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-240 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -320px;';
		hs+='top:  -240px;';
		hs+='width: 42px;';
		hs+='height: 36px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='overflow: hidden;';
		this._popflag_01.setAttribute('style',hs);
		this._popflag_01.onclick=function () {
			me._popflag_text.innerHTML="<b>Lugar ideal para construir<\/b>";
			if (me._popflag_text.ggUpdateText) {
				me._popflag_text.ggUpdateText=function() {
					me._popflag_text.innerHTML="<b>Lugar ideal para construir<\/b>";
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
		this._menu=document.createElement('div');
		this._menu.ggId='Menu';
		this._menu.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._menu.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 20px;';
		hs+='top:  25px;';
		hs+='width: 160px;';
		hs+='height: 40px;';
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
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._home_but.setAttribute('style',hs);
		this._home_but__img=document.createElement('img');
		this._home_but__img.setAttribute('src',basePath + 'images/home_but.svg');
		this._home_but__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;');
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
		hs+='left: 45px;';
		hs+='top:  0px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._radar_but_101.setAttribute('style',hs);
		this._radar_but_101__img=document.createElement('img');
		this._radar_but_101__img.setAttribute('src',basePath + 'images/radar_but_101.svg');
		this._radar_but_101__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;');
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
		hs+='left: 45px;';
		hs+='top:  0px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._radar_but_46.setAttribute('style',hs);
		this._radar_but_46__img=document.createElement('img');
		this._radar_but_46__img.setAttribute('src',basePath + 'images/radar_but_46.svg');
		this._radar_but_46__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;');
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
		hs+='left: 85px;';
		hs+='top:  0px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._info_but_101.setAttribute('style',hs);
		this._info_but_101__img=document.createElement('img');
		this._info_but_101__img.setAttribute('src',basePath + 'images/info_but_101.svg');
		this._info_but_101__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;');
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
		hs+='left: 85px;';
		hs+='top:  0px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._info_but_46.setAttribute('style',hs);
		this._info_but_46__img=document.createElement('img');
		this._info_but_46__img.setAttribute('src',basePath + 'images/info_but_46.svg');
		this._info_but_46__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;');
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
				this.style.left=(-140 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-110 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -140px;';
		hs+='top:  -110px;';
		hs+='width: 280px;';
		hs+='height: 220px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._texto_101.setAttribute('style',hs);
		this._texto_101.onmouseout=function () {
			me.elementMouseDown['texto_101']=false;
		}
		this._texto_101.onmousedown=function () {
			me.elementMouseDown['texto_101']=true;
		}
		this._texto_101.onmouseup=function () {
			me.elementMouseDown['texto_101']=false;
		}
		this._texto_101.ontouchend=function () {
			me.elementMouseDown['texto_101']=false;
		}
		this._rectangle_691=document.createElement('div');
		this._rectangle_691.ggId='Rectangle 69';
		this._rectangle_691.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_691.ggVisible=true;
		this._rectangle_691.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-142 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-112 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -142px;';
		hs+='top:  -112px;';
		hs+='width: 276px;';
		hs+='height: 216px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 4px solid #000000;';
		hs+='border-radius: 30px;';
		hs+=cssPrefix + 'border-radius: 30px;';
		hs+='background-image:url(' + basePath + 'images/alpha_background_ffffff_155.png);';
		this._rectangle_691.setAttribute('style',hs);
		this._rectangle_741=document.createElement('div');
		this._rectangle_741.ggId='Rectangle 74';
		this._rectangle_741.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_741.ggVisible=true;
		this._rectangle_741.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-142 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-222 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -138px;';
		hs+='top:  -218px;';
		hs+='width: 267px;';
		hs+='height: 207px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 3px solid #000000;';
		hs+='border-radius: 25px;';
		hs+=cssPrefix + 'border-radius: 25px;';
		hs+='background-color: #646464;';
		this._rectangle_741.setAttribute('style',hs);
		this._text_778=document.createElement('div');
		this._text_778.ggId='Text 77';
		this._text_778.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_778.ggVisible=true;
		this._text_778.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-129 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-97 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -126px;';
		hs+='top:  -94px;';
		hs+='width: 250px;';
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
		this._text_778.setAttribute('style',hs);
		this._text_778.innerHTML="<b\/>LOTE 101<b\/>";
		this._rectangle_741.appendChild(this._text_778);
		this._text_810=document.createElement('div');
		this._text_810.ggId='Text 81';
		this._text_810.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_810.ggVisible=true;
		this._text_810.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-129 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-177 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -126px;';
		hs+='top:  -174px;';
		hs+='width: 250px;';
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
		this._text_810.innerHTML="<b\/>7.097.41 Metros cuadrados<b\/>";
		this._rectangle_741.appendChild(this._text_810);
		this._text_777=document.createElement('div');
		this._text_777.ggId='Text 77';
		this._text_777.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_777.ggVisible=true;
		this._text_777.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-129 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-51 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -126px;';
		hs+='top:  -48px;';
		hs+='width: 250px;';
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
		this._text_777.setAttribute('style',hs);
		this._text_777.innerHTML="<b\/>Municipio de Envigado<b\/>";
		this._rectangle_741.appendChild(this._text_777);
		this._text_776=document.createElement('div');
		this._text_776.ggId='Text 77';
		this._text_776.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_776.ggVisible=true;
		this._text_776.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-129 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-19 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -126px;';
		hs+='top:  -16px;';
		hs+='width: 250px;';
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
		this._text_776.innerHTML="<b\/>Valor Impuesto Predial:<b\/>";
		this._rectangle_741.appendChild(this._text_776);
		this._text_775=document.createElement('div');
		this._text_775.ggId='Text 77';
		this._text_775.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_775.ggVisible=true;
		this._text_775.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-129 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(7 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -126px;';
		hs+='top:  10px;';
		hs+='width: 250px;';
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
		this._text_775.ggUpdateText=function() {
			this.innerHTML="<b\/>$ 815.000 semestral.<b\/>";
		}
		this._text_775.ggUpdateText();
		this._rectangle_741.appendChild(this._text_775);
		this._text_832=document.createElement('div');
		this._text_832.ggId='Text 83';
		this._text_832.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_832.ggVisible=true;
		this._text_832.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-129 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-62 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -126px;';
		hs+='top:  -59px;';
		hs+='width: 250px;';
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
		this._text_832.setAttribute('style',hs);
		this._text_832.innerHTML="<b\/>Cuota de Administraci\xf3n:<b\/>";
		this._rectangle_741.appendChild(this._text_832);
		this._text_831=document.createElement('div');
		this._text_831.ggId='Text 83';
		this._text_831.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_831.ggVisible=true;
		this._text_831.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-129 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-42 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -126px;';
		hs+='top:  -39px;';
		hs+='width: 250px;';
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
		this._text_831.setAttribute('style',hs);
		this._text_831.ggUpdateText=function() {
			this.innerHTML="<b\/>$ 510.000 mensual.<b\/>";
		}
		this._text_831.ggUpdateText();
		this._rectangle_741.appendChild(this._text_831);
		this._rectangle_691.appendChild(this._rectangle_741);
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
				this.style.left=(-140 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-110 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -140px;';
		hs+='top:  -110px;';
		hs+='width: 280px;';
		hs+='height: 220px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._texto_46.setAttribute('style',hs);
		this._texto_46.onmouseout=function () {
			me.elementMouseDown['texto_46']=false;
		}
		this._texto_46.onmousedown=function () {
			me.elementMouseDown['texto_46']=true;
		}
		this._texto_46.onmouseup=function () {
			me.elementMouseDown['texto_46']=false;
		}
		this._texto_46.ontouchend=function () {
			me.elementMouseDown['texto_46']=false;
		}
		this._rectangle_690=document.createElement('div');
		this._rectangle_690.ggId='Rectangle 69';
		this._rectangle_690.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_690.ggVisible=true;
		this._rectangle_690.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-142 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-112 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -142px;';
		hs+='top:  -112px;';
		hs+='width: 276px;';
		hs+='height: 216px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 4px solid #000000;';
		hs+='border-radius: 30px;';
		hs+=cssPrefix + 'border-radius: 30px;';
		hs+='background-image:url(' + basePath + 'images/alpha_background_ffffff_155.png);';
		this._rectangle_690.setAttribute('style',hs);
		this._rectangle_740=document.createElement('div');
		this._rectangle_740.ggId='Rectangle 74';
		this._rectangle_740.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_740.ggVisible=true;
		this._rectangle_740.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-142 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-222 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -138px;';
		hs+='top:  -218px;';
		hs+='width: 267px;';
		hs+='height: 207px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 3px solid #000000;';
		hs+='border-radius: 25px;';
		hs+=cssPrefix + 'border-radius: 25px;';
		hs+='background-color: #646464;';
		this._rectangle_740.setAttribute('style',hs);
		this._text_774=document.createElement('div');
		this._text_774.ggId='Text 77';
		this._text_774.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_774.ggVisible=true;
		this._text_774.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-129 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-97 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -126px;';
		hs+='top:  -94px;';
		hs+='width: 250px;';
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
		this._text_774.innerHTML="<b\/>LOTE 46<b\/>";
		this._rectangle_740.appendChild(this._text_774);
		this._text_81=document.createElement('div');
		this._text_81.ggId='Text 81';
		this._text_81.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_81.ggVisible=true;
		this._text_81.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-129 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-177 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -126px;';
		hs+='top:  -174px;';
		hs+='width: 250px;';
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
		this._text_81.innerHTML="<b\/>8.905.09  Metros cuadrados<b\/>";
		this._rectangle_740.appendChild(this._text_81);
		this._text_773=document.createElement('div');
		this._text_773.ggId='Text 77';
		this._text_773.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_773.ggVisible=true;
		this._text_773.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-129 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-51 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -126px;';
		hs+='top:  -48px;';
		hs+='width: 250px;';
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
		this._text_773.innerHTML="<b\/>Municipio de Envigado<b\/>";
		this._rectangle_740.appendChild(this._text_773);
		this._text_772=document.createElement('div');
		this._text_772.ggId='Text 77';
		this._text_772.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_772.ggVisible=true;
		this._text_772.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-129 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-19 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -126px;';
		hs+='top:  -16px;';
		hs+='width: 250px;';
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
		this._text_772.innerHTML="<b\/>Valor Impuesto Predial:<b\/>";
		this._rectangle_740.appendChild(this._text_772);
		this._text_771=document.createElement('div');
		this._text_771.ggId='Text 77';
		this._text_771.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_771.ggVisible=true;
		this._text_771.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-129 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(7 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -126px;';
		hs+='top:  10px;';
		hs+='width: 250px;';
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
			this.innerHTML="<b\/>$ 1.373.239 semestral.<b\/>";
		}
		this._text_771.ggUpdateText();
		this._rectangle_740.appendChild(this._text_771);
		this._text_830=document.createElement('div');
		this._text_830.ggId='Text 83';
		this._text_830.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_830.ggVisible=true;
		this._text_830.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-129 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-62 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -126px;';
		hs+='top:  -59px;';
		hs+='width: 250px;';
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
		this._text_830.setAttribute('style',hs);
		this._text_830.innerHTML="<b\/>Cuota de Administraci\xf3n:<b\/>";
		this._rectangle_740.appendChild(this._text_830);
		this._text_83=document.createElement('div');
		this._text_83.ggId='Text 83';
		this._text_83.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_83.ggVisible=true;
		this._text_83.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-129 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-42 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -126px;';
		hs+='top:  -39px;';
		hs+='width: 250px;';
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
		this._text_83.ggUpdateText=function() {
			this.innerHTML="<b\/>$ 540.000 mensual.<b\/>";
		}
		this._text_83.ggUpdateText();
		this._rectangle_740.appendChild(this._text_83);
		this._rectangle_690.appendChild(this._rectangle_740);
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
				this.style.left=(-90 + w) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -90px;';
		hs+='top:  15px;';
		hs+='width: 80px;';
		hs+='height: 60px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='overflow: hidden;';
		this._imagenes360.setAttribute('style',hs);
		this._logo=document.createElement('div');
		this._logo.ggId='logo';
		this._logo.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._logo.ggVisible=true;
		this._logo.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-80 + w) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -80px;';
		hs+='top:  0px;';
		hs+='width: 82px;';
		hs+='height: 61px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='cursor: pointer;';
		this._logo.setAttribute('style',hs);
		this._logo__img=document.createElement('img');
		this._logo__img.setAttribute('src',basePath + 'images/logo.png');
		this._logo__img.setAttribute('style','position: absolute;top: 0px;left: 0px;');
		me.player.checkLoaded.push(this._logo__img);
		this._logo.appendChild(this._logo__img);
		this._imagenes360.appendChild(this._logo);
		this.divSkin.appendChild(this._imagenes360);
		this._pic_frame=document.createElement('div');
		this._pic_frame.ggId='pic_frame';
		this._pic_frame.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._pic_frame.ggVisible=true;
		this._pic_frame.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-121 + w/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -121px;';
		hs+='top:  23px;';
		hs+='width: 238px;';
		hs+='height: 30px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='opacity: 0;';
		hs+='visibility: hidden;';
		hs+='border: 2px solid #ffffff;';
		hs+='border-radius: 20px;';
		hs+=cssPrefix + 'border-radius: 20px;';
		hs+='background-image:url(' + basePath + 'images/alpha_background_000000_190.png);';
		this._pic_frame.setAttribute('style',hs);
		this._popflag_text=document.createElement('div');
		this._popflag_text.ggId='popflag_text';
		this._popflag_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._popflag_text.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 8px;';
		hs+='top:  6px;';
		hs+='width: 217px;';
		hs+='height: 19px;';
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
		hs+='left: 219px;';
		hs+='top:  0px;';
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
		this._home_plano=document.createElement('div');
		this._home_plano.ggId='Home_Plano';
		this._home_plano.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._home_plano.ggVisible=true;
		this._home_plano.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-160 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-110 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -160px;';
		hs+='top:  -110px;';
		hs+='width: 320px;';
		hs+='height: 200px;';
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
				this.style.left=(-160 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-100 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -160px;';
		hs+='top:  -100px;';
		hs+='width: 319px;';
		hs+='height: 220px;';
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
		hs+='left: -1px;';
		hs+='top:  -1px;';
		hs+='width: 317px;';
		hs+='height: 217px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 3px solid #000000;';
		hs+='border-radius: 25px;';
		hs+=cssPrefix + 'border-radius: 25px;';
		hs+='background-image:url(' + basePath + 'images/alpha_background_ffffff_0.png);';
		this._rectangle_2351.setAttribute('style',hs);
		this._image_1161.appendChild(this._rectangle_2351);
		this._vista_but=document.createElement('div');
		this._vista_but.ggId='vista_but';
		this._vista_but.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._vista_but.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 2px;';
		hs+='top:  62px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
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
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._desactivo_010.setAttribute('style',hs);
		this._desactivo_010__img=document.createElement('img');
		this._desactivo_010__img.setAttribute('src',basePath + 'images/desactivo_010.svg');
		this._desactivo_010__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;');
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
		}
		this._desactivo_010.onmouseout=function () {
			me._desactivo_010__img.src=basePath + 'images/desactivo_010.svg';
		}
		this._vista_but.appendChild(this._desactivo_010);
		this._image_1161.appendChild(this._vista_but);
		this.__101_but=document.createElement('div');
		this.__101_but.ggId='101_but';
		this.__101_but.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__101_but.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 244px;';
		hs+='top:  57px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
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
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._desactivo_020.setAttribute('style',hs);
		this._desactivo_020__img=document.createElement('img');
		this._desactivo_020__img.setAttribute('src',basePath + 'images/desactivo_020.svg');
		this._desactivo_020__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;');
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
		}
		this._desactivo_020.onmouseout=function () {
			me._desactivo_020__img.src=basePath + 'images/desactivo_020.svg';
		}
		this.__101_but.appendChild(this._desactivo_020);
		this._image_1161.appendChild(this.__101_but);
		this.__46_but=document.createElement('div');
		this.__46_but.ggId='46_but';
		this.__46_but.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this.__46_but.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 44px;';
		hs+='top:  25px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
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
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._desactivo_030.setAttribute('style',hs);
		this._desactivo_030__img=document.createElement('img');
		this._desactivo_030__img.setAttribute('src',basePath + 'images/desactivo_030.svg');
		this._desactivo_030__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;');
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
		}
		this._desactivo_030.onmouseout=function () {
			me._desactivo_030__img.src=basePath + 'images/desactivo_030.svg';
		}
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
				this.style.left=(-160 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-110 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -160px;';
		hs+='top:  -110px;';
		hs+='width: 320px;';
		hs+='height: 220px;';
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
				this.style.left=(-160 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-110 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -160px;';
		hs+='top:  -110px;';
		hs+='width: 322px;';
		hs+='height: 220px;';
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
		hs+='left: -1px;';
		hs+='top:  -1px;';
		hs+='width: 317px;';
		hs+='height: 217px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 3px solid #000000;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='background-image:url(' + basePath + 'images/alpha_background_ffffff_0.png);';
		this._rectangle_2350.setAttribute('style',hs);
		this._image_1160.appendChild(this._rectangle_2350);
		this._svg_1210=document.createElement('div');
		this._svg_1210.ggId='Svg 121';
		this._svg_1210.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._svg_1210.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 300px;';
		hs+='top:  -10px;';
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
		hs+='left: 292px;';
		hs+='top:  159px;';
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
		this._act_01.appendChild(this._desactivo_01);
		this._activo_01=document.createElement('div');
		this._activo_01.ggId='activo_01';
		this._activo_01.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._activo_01.ggVisible=false;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._activo_01.setAttribute('style',hs);
		this._activo_01__img=document.createElement('img');
		this._activo_01__img.setAttribute('src',basePath + 'images/activo_01.svg');
		this._activo_01__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;');
		this._activo_01.appendChild(this._activo_01__img);
		this._act_01.appendChild(this._activo_01);
		this._image_1160.appendChild(this._act_01);
		this._act_02=document.createElement('div');
		this._act_02.ggId='act_02';
		this._act_02.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._act_02.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 138px;';
		hs+='top:  80px;';
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
		this._act_02.appendChild(this._desactivo_02);
		this._activo_02=document.createElement('div');
		this._activo_02.ggId='activo_02';
		this._activo_02.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._activo_02.ggVisible=false;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._activo_02.setAttribute('style',hs);
		this._activo_02__img=document.createElement('img');
		this._activo_02__img.setAttribute('src',basePath + 'images/activo_02.svg');
		this._activo_02__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;');
		this._activo_02.appendChild(this._activo_02__img);
		this._act_02.appendChild(this._activo_02);
		this._image_1160.appendChild(this._act_02);
		this._act_03=document.createElement('div');
		this._act_03.ggId='act_03';
		this._act_03.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._act_03.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 68px;';
		hs+='top:  104px;';
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
		this._act_03.appendChild(this._desactivo_03);
		this._activo_03=document.createElement('div');
		this._activo_03.ggId='activo_03';
		this._activo_03.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._activo_03.ggVisible=false;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._activo_03.setAttribute('style',hs);
		this._activo_03__img=document.createElement('img');
		this._activo_03__img.setAttribute('src',basePath + 'images/activo_03.svg');
		this._activo_03__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;');
		this._activo_03.appendChild(this._activo_03__img);
		this._act_03.appendChild(this._activo_03);
		this._image_1160.appendChild(this._act_03);
		this._act_04=document.createElement('div');
		this._act_04.ggId='act_04';
		this._act_04.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._act_04.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 98px;';
		hs+='top:  58px;';
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
		this._act_04.appendChild(this._desactivo_04);
		this._activo_04=document.createElement('div');
		this._activo_04.ggId='activo_04';
		this._activo_04.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._activo_04.ggVisible=false;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._activo_04.setAttribute('style',hs);
		this._activo_04__img=document.createElement('img');
		this._activo_04__img.setAttribute('src',basePath + 'images/activo_04.svg');
		this._activo_04__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;');
		this._activo_04.appendChild(this._activo_04__img);
		this._act_04.appendChild(this._activo_04);
		this._image_1160.appendChild(this._act_04);
		this._act_05=document.createElement('div');
		this._act_05.ggId='act_05';
		this._act_05.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._act_05.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 18px;';
		hs+='top:  57px;';
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
		this._act_05.appendChild(this._desactivo_05);
		this._activo_05=document.createElement('div');
		this._activo_05.ggId='activo_05';
		this._activo_05.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._activo_05.ggVisible=false;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._activo_05.setAttribute('style',hs);
		this._activo_05__img=document.createElement('img');
		this._activo_05__img.setAttribute('src',basePath + 'images/activo_05.svg');
		this._activo_05__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;');
		this._activo_05.appendChild(this._activo_05__img);
		this._act_05.appendChild(this._activo_05);
		this._image_1160.appendChild(this._act_05);
		this._act_06=document.createElement('div');
		this._act_06.ggId='act_06';
		this._act_06.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._act_06.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 269px;';
		hs+='top:  65px;';
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
		this._act_06.appendChild(this._desactivo_06);
		this._activo_06=document.createElement('div');
		this._activo_06.ggId='activo_06';
		this._activo_06.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._activo_06.ggVisible=false;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._activo_06.setAttribute('style',hs);
		this._activo_06__img=document.createElement('img');
		this._activo_06__img.setAttribute('src',basePath + 'images/activo_06.svg');
		this._activo_06__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;');
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
				this.style.left=(-160 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-110 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -160px;';
		hs+='top:  -110px;';
		hs+='width: 320px;';
		hs+='height: 220px;';
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
				this.style.left=(-160 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-110 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -160px;';
		hs+='top:  -110px;';
		hs+='width: 322px;';
		hs+='height: 220px;';
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
		hs+='left: -1px;';
		hs+='top:  -1px;';
		hs+='width: 317px;';
		hs+='height: 217px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 3px solid #000000;';
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
		hs+='left: 300px;';
		hs+='top:  -10px;';
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
		hs+='left: 44px;';
		hs+='top:  70px;';
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
		this._act_07.appendChild(this._desactivo_07);
		this._activo_07=document.createElement('div');
		this._activo_07.ggId='activo_07';
		this._activo_07.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._activo_07.ggVisible=false;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._activo_07.setAttribute('style',hs);
		this._activo_07__img=document.createElement('img');
		this._activo_07__img.setAttribute('src',basePath + 'images/activo_07.svg');
		this._activo_07__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;');
		this._activo_07.appendChild(this._activo_07__img);
		this._act_07.appendChild(this._activo_07);
		this._image_116.appendChild(this._act_07);
		this._act_08=document.createElement('div');
		this._act_08.ggId='act_08';
		this._act_08.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._act_08.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 94px;';
		hs+='top:  85px;';
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
		this._act_08.appendChild(this._desactivo_08);
		this._activo_08=document.createElement('div');
		this._activo_08.ggId='activo_08';
		this._activo_08.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._activo_08.ggVisible=false;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._activo_08.setAttribute('style',hs);
		this._activo_08__img=document.createElement('img');
		this._activo_08__img.setAttribute('src',basePath + 'images/activo_08.svg');
		this._activo_08__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;');
		this._activo_08.appendChild(this._activo_08__img);
		this._act_08.appendChild(this._activo_08);
		this._image_116.appendChild(this._act_08);
		this._act_09=document.createElement('div');
		this._act_09.ggId='act_09';
		this._act_09.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._act_09.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 139px;';
		hs+='top:  36px;';
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
		this._act_09.appendChild(this._desactivo_09);
		this._activo_09=document.createElement('div');
		this._activo_09.ggId='activo_09';
		this._activo_09.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._activo_09.ggVisible=false;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._activo_09.setAttribute('style',hs);
		this._activo_09__img=document.createElement('img');
		this._activo_09__img.setAttribute('src',basePath + 'images/activo_09.svg');
		this._activo_09__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;');
		this._activo_09.appendChild(this._activo_09__img);
		this._act_09.appendChild(this._activo_09);
		this._image_116.appendChild(this._act_09);
		this._act_10=document.createElement('div');
		this._act_10.ggId='act_10';
		this._act_10.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._act_10.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 207px;';
		hs+='top:  29px;';
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
		this._act_10.appendChild(this._desactivo_10);
		this._activo_10=document.createElement('div');
		this._activo_10.ggId='activo_10';
		this._activo_10.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._activo_10.ggVisible=false;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._activo_10.setAttribute('style',hs);
		this._activo_10__img=document.createElement('img');
		this._activo_10__img.setAttribute('src',basePath + 'images/activo_10.svg');
		this._activo_10__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;');
		this._activo_10.appendChild(this._activo_10__img);
		this._act_10.appendChild(this._activo_10);
		this._image_116.appendChild(this._act_10);
		this._act_11=document.createElement('div');
		this._act_11.ggId='act_11';
		this._act_11.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._act_11.ggVisible=true;
		hs ='position:absolute;';
		hs+='left: 227px;';
		hs+='top:  107px;';
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
		this._act_11.appendChild(this._desactivo_11);
		this._activo_11=document.createElement('div');
		this._activo_11.ggId='activo_11';
		this._activo_11.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._activo_11.ggVisible=false;
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._activo_11.setAttribute('style',hs);
		this._activo_11__img=document.createElement('img');
		this._activo_11__img.setAttribute('src',basePath + 'images/activo_11.svg');
		this._activo_11__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;');
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
				this.style.left=(-50 + w) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-50 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -50px;';
		hs+='top:  -50px;';
		hs+='width: 32px;';
		hs+='height: 32px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		this._faq_radar.setAttribute('style',hs);
		this._faq_radar__img=document.createElement('img');
		this._faq_radar__img.setAttribute('src',basePath + 'images/faq_radar.svg');
		this._faq_radar__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;');
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
				this.style.left=(-140 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-110 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -140px;';
		hs+='top:  -110px;';
		hs+='width: 280px;';
		hs+='height: 220px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: hidden;';
		this._how.setAttribute('style',hs);
		this._how.onmouseout=function () {
			me.elementMouseDown['how']=false;
		}
		this._how.onmousedown=function () {
			me.elementMouseDown['how']=true;
		}
		this._how.onmouseup=function () {
			me.elementMouseDown['how']=false;
		}
		this._how.ontouchend=function () {
			me.elementMouseDown['how']=false;
		}
		this._rectangle_69=document.createElement('div');
		this._rectangle_69.ggId='Rectangle 69';
		this._rectangle_69.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._rectangle_69.ggVisible=true;
		this._rectangle_69.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-142 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-112 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -142px;';
		hs+='top:  -112px;';
		hs+='width: 276px;';
		hs+='height: 216px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 4px solid #000000;';
		hs+='border-radius: 30px;';
		hs+=cssPrefix + 'border-radius: 30px;';
		hs+='background-image:url(' + basePath + 'images/alpha_background_ffffff_155.png);';
		this._rectangle_69.setAttribute('style',hs);
		this._svg_71=document.createElement('div');
		this._svg_71.ggId='Svg 71';
		this._svg_71.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._svg_71.ggVisible=true;
		this._svg_71.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-276 + w) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -272px;';
		hs+='top:  6px;';
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
		this._svg_720=document.createElement('div');
		this._svg_720.ggId='Svg 72';
		this._svg_720.ggParameter={ rx:0,ry:0,a:0,sx:1.5,sy:1.5 };
		this._svg_720.ggVisible=true;
		this._svg_720.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				h=this.parentNode.offsetHeight;
				this.style.top=(-191 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 118px;';
		hs+='top:  -187px;';
		hs+='width: 48px;';
		hs+='height: 48px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._svg_720.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._svg_720.setAttribute('style',hs);
		this._svg_720__img=document.createElement('img');
		this._svg_720__img.setAttribute('src',basePath + 'images/svg_720.svg');
		this._svg_720__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 48px;height: 48px;');
		this._svg_720.appendChild(this._svg_720__img);
		this._rectangle_69.appendChild(this._svg_720);
		this._svg_72=document.createElement('div');
		this._svg_72.ggId='Svg 72';
		this._svg_72.ggParameter={ rx:0,ry:0,a:0,sx:1.5,sy:1.5 };
		this._svg_72.ggVisible=true;
		this._svg_72.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				h=this.parentNode.offsetHeight;
				this.style.top=(-191 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: 193px;';
		hs+='top:  -187px;';
		hs+='width: 48px;';
		hs+='height: 48px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+=cssPrefix + 'transform: ' + parameterToTransform(this._svg_72.ggParameter) + ';';
		hs+='visibility: inherit;';
		this._svg_72.setAttribute('style',hs);
		this._svg_72__img=document.createElement('img');
		this._svg_72__img.setAttribute('src',basePath + 'images/svg_72.svg');
		this._svg_72__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 48px;height: 48px;');
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
				this.style.left=(-137 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-122 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -133px;';
		hs+='top:  -118px;';
		hs+='width: 257px;';
		hs+='height: 90px;';
		hs+=cssPrefix + 'transform-origin: 50% 50%;';
		hs+='visibility: inherit;';
		hs+='border: 3px solid #000000;';
		hs+='border-radius: 15px;';
		hs+=cssPrefix + 'border-radius: 15px;';
		hs+='background-color: #646464;';
		this._rectangle_74.setAttribute('style',hs);
		this._text_770=document.createElement('div');
		this._text_770.ggId='Text 77';
		this._text_770.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_770.ggVisible=true;
		this._text_770.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-135 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-38 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -132px;';
		hs+='top:  -35px;';
		hs+='width: 260px;';
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
		this._text_770.innerHTML="<b\/>Click en rojo para nuevo espacio.<b\/>";
		this._rectangle_74.appendChild(this._text_770);
		this._text_77=document.createElement('div');
		this._text_77.ggId='Text 77';
		this._text_77.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_77.ggVisible=true;
		this._text_77.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-135 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-15 + h/2) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -132px;';
		hs+='top:  -12px;';
		hs+='width: 260px;';
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
		this._text_77.innerHTML="<b\/>Click en naranja acceder a espacio.<b\/>";
		this._rectangle_74.appendChild(this._text_77);
		this._text_82=document.createElement('div');
		this._text_82.ggId='Text 82';
		this._text_82.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._text_82.ggVisible=true;
		this._text_82.ggUpdatePosition=function() {
			this.style[domTransition]='none';
			if (this.parentNode) {
				w=this.parentNode.offsetWidth;
				this.style.left=(-135 + w/2) + 'px';
				h=this.parentNode.offsetHeight;
				this.style.top=(-41 + h) + 'px';
			}
		}
		hs ='position:absolute;';
		hs+='left: -132px;';
		hs+='top:  -38px;';
		hs+='width: 260px;';
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
		this._text_82.innerHTML="<b\/>Verde es donde est\xe1s parado<b\/>\n";
		this._rectangle_74.appendChild(this._text_82);
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
		if (me.elementMouseDown['texto_101']) {
			me._texto_101.style[domTransition]='none';
			me._texto_101.style.visibility='hidden';
			me._texto_101.ggVisible=false;
			if (me.player.transitionsDisabled) {
				me._screen_tint.style[domTransition]='none';
			} else {
				me._screen_tint.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._screen_tint.style.opacity='0';
			me._screen_tint.style.visibility='hidden';
		}
		this._text_775.ggUpdateText();
		this._text_831.ggUpdateText();
		if (me.elementMouseDown['texto_46']) {
			me._texto_46.style[domTransition]='none';
			me._texto_46.style.visibility='hidden';
			me._texto_46.ggVisible=false;
			if (me.player.transitionsDisabled) {
				me._screen_tint.style[domTransition]='none';
			} else {
				me._screen_tint.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._screen_tint.style.opacity='0';
			me._screen_tint.style.visibility='hidden';
		}
		this._text_771.ggUpdateText();
		this._text_83.ggUpdateText();
		if (me.elementMouseDown['how']) {
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
			hs+='width: 32px;';
			hs+='height: 32px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._picture0.setAttribute('style',hs);
			this._picture0__img=document.createElement('img');
			this._picture0__img.setAttribute('src',basePath + 'images/picture0.svg');
			this._picture0__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;');
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
			hs+='width: 32px;';
			hs+='height: 32px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._picture.setAttribute('style',hs);
			this._picture__img=document.createElement('img');
			this._picture__img.setAttribute('src',basePath + 'images/picture.svg');
			this._picture__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;');
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
			hs+='width: 32px;';
			hs+='height: 32px;';
			hs+=cssPrefix + 'transform-origin: 50% 50%;';
			hs+='visibility: inherit;';
			hs+='cursor: pointer;';
			this._hsimage.setAttribute('style',hs);
			this._hsimage__img=document.createElement('img');
			this._hsimage__img.setAttribute('src',basePath + 'images/hsimage.svg');
			this._hsimage__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 32px;height: 32px;');
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