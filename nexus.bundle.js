(()=>{var Xh=0,sc=1,qh=2;var Bi=1,Yh=2,Ps=3,_i=0,Bt=1,ln=2,cn=0,Is=1,St=2,rc=3,ac=4,Zh=5;var zi=100,Jh=101,$h=102,Kh=103,Qh=104,jh=200,eu=201,tu=202,nu=203,oc=204,lc=205,iu=206,su=207,ru=208,au=209,ou=210,lu=211,cu=212,hu=213,uu=214,Na=0,Ua=1,Fa=2,ds=3,Oa=4,Ba=5,za=6,Ha=7,cc=0,du=1,fu=2,Fn=0,Ir=1,Dr=2,Lr=3,Hi=4,Nr=5,Ur=6,Fr=7;var hc=300,ki=301,Ds=302,fo=303,po=304,ka=1e3,In=1001,Ga=1002,ut=1003,pu=1004;var Or=1005;var Kt=1006,mo=1007;var jn=1008;var nn=1009,uc=1010,dc=1011,Ls=1012,go=1013,wn=1014,vn=1015,vt=1016,_o=1017,xo=1018,Gi=1020,fc=35902,pc=35899,mc=1021,gc=1022,An=1023,Zn=1026,ei=1027,vo=1028,yo=1029,xi=1030,Mo=1031;var So=1033,Br=33776,zr=33777,Hr=33778,kr=33779,bo=35840,To=35841,Eo=35842,wo=35843,Ao=36196,Co=37492,Ro=37496,Po=37488,Io=37489,Gr=37490,Do=37491,Lo=37808,No=37809,Uo=37810,Fo=37811,Oo=37812,Bo=37813,zo=37814,Ho=37815,ko=37816,Go=37817,Vo=37818,Wo=37819,Xo=37820,qo=37821,Yo=36492,Zo=36494,Jo=36495,$o=36283,Ko=36284,Vr=36285,Qo=36286;var Qs=2300,Va=2301,Da=2302,Zl=2303,Jl=2400,$l=2401,Kl=2402;var mu=3200,_c=3201;var jo=0,gu=1,ti="",Xt="srgb",js="srgb-linear",er="linear",Qe="srgb";var La=7680;var _u=519,xu=512,vu=513,yu=514,xc=515,Mu=516,Su=517,vc=518,yc=519,Mc=35044,Sc=35048;var bc="300 es",gn=2e3,fs=2001;function Pd(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Id(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function tr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function bu(){let i=tr("canvas");return i.style.display="block",i}var lh={},ps=null;function nr(...i){let e="THREE."+i.shift();ps?ps("log",e,...i):console.log(e,...i)}function Tu(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ie(...i){i=Tu(i);let e="THREE."+i.shift();if(ps)ps("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Le(...i){i=Tu(i);let e="THREE."+i.shift();if(ps)ps("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Pi(...i){let e=i.join(" ");e in lh||(lh[e]=!0,Ie(...i))}function Eu(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var wu={[Na]:Na,[Fa]:za,[Oa]:Oa,[ds]:Ba,[Ua]:Ua,[za]:Fa,[Ha]:Ha,[Ba]:ds},Dn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Tl=Math.PI/180,Wa=180/Math.PI;function Vi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Vt[i&255]+Vt[i>>8&255]+Vt[i>>16&255]+Vt[i>>24&255]+"-"+Vt[e&255]+Vt[e>>8&255]+"-"+Vt[e>>16&15|64]+Vt[e>>24&255]+"-"+Vt[t&63|128]+Vt[t>>8&255]+"-"+Vt[t>>16&255]+Vt[t>>24&255]+Vt[n&255]+Vt[n>>8&255]+Vt[n>>16&255]+Vt[n>>24&255]).toLowerCase()}function Ye(i,e,t){return Math.max(e,Math.min(t,i))}function Dd(i,e){return(i%e+e)%e}function El(i,e,t){return(1-t)*i+t*e}function Au(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function el(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Cu(i,e){if(e.constructor===Float32Array)return i;let t=el(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Ru(i,e){if(e.constructor===Float32Array)return i;let t=el(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var Cc=class Cc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Cc.prototype.isVector2=!0;var ye=Cc,Ln=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],f=n[s+3],u=r[a+0],p=r[a+1],_=r[a+2],M=r[a+3];if(f!==M||c!==u||l!==p||h!==_){let m=c*u+l*p+h*_+f*M;m<0&&(u=-u,p=-p,_=-_,M=-M,m=-m);let d=1-o;if(m<.9995){let y=Math.acos(m),T=Math.sin(y);d=Math.sin(d*y)/T,o=Math.sin(o*y)/T,c=c*d+u*o,l=l*d+p*o,h=h*d+_*o,f=f*d+M*o}else{c=c*d+u*o,l=l*d+p*o,h=h*d+_*o,f=f*d+M*o;let y=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=y,l*=y,h*=y,f*=y}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],f=r[a],u=r[a+1],p=r[a+2],_=r[a+3];return e[t]=o*_+h*f+c*p-l*u,e[t+1]=c*_+h*u+l*f-o*p,e[t+2]=l*_+h*p+o*u-c*f,e[t+3]=h*_-o*f-c*u-l*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),f=o(r/2),u=c(n/2),p=c(s/2),_=c(r/2);switch(a){case"XYZ":this._x=u*h*f+l*p*_,this._y=l*p*f-u*h*_,this._z=l*h*_+u*p*f,this._w=l*h*f-u*p*_;break;case"YXZ":this._x=u*h*f+l*p*_,this._y=l*p*f-u*h*_,this._z=l*h*_-u*p*f,this._w=l*h*f+u*p*_;break;case"ZXY":this._x=u*h*f-l*p*_,this._y=l*p*f+u*h*_,this._z=l*h*_+u*p*f,this._w=l*h*f-u*p*_;break;case"ZYX":this._x=u*h*f-l*p*_,this._y=l*p*f+u*h*_,this._z=l*h*_-u*p*f,this._w=l*h*f+u*p*_;break;case"YZX":this._x=u*h*f+l*p*_,this._y=l*p*f+u*h*_,this._z=l*h*_-u*p*f,this._w=l*h*f-u*p*_;break;case"XZY":this._x=u*h*f-l*p*_,this._y=l*p*f-u*h*_,this._z=l*h*_+u*p*f,this._w=l*h*f+u*p*_;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],f=t[10],u=n+o+f;if(u>0){let p=.5/Math.sqrt(u+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(a-s)*p}else if(n>o&&n>f){let p=2*Math.sqrt(1+n-o-f);this._w=(h-c)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+l)/p}else if(o>f){let p=2*Math.sqrt(1+o-n-f);this._w=(r-l)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+f-n-o);this._w=(a-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ye(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Rc=class Rc{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ch.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ch.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+c*l+a*f-o*h,this.y=n+c*h+o*l-r*f,this.z=s+c*f+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return wl.copy(this).projectOnVector(e),this.sub(wl)}reflect(e){return this.sub(wl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ye(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Rc.prototype.isVector3=!0;var D=Rc,wl=new D,ch=new Ln,Pc=class Pc{constructor(e,t,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],f=n[7],u=n[2],p=n[5],_=n[8],M=s[0],m=s[3],d=s[6],y=s[1],T=s[4],S=s[7],A=s[2],w=s[5],g=s[8];return r[0]=a*M+o*y+c*A,r[3]=a*m+o*T+c*w,r[6]=a*d+o*S+c*g,r[1]=l*M+h*y+f*A,r[4]=l*m+h*T+f*w,r[7]=l*d+h*S+f*g,r[2]=u*M+p*y+_*A,r[5]=u*m+p*T+_*w,r[8]=u*d+p*S+_*g,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],f=h*a-o*l,u=o*c-h*r,p=l*r-a*c,_=t*f+n*u+s*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/_;return e[0]=f*M,e[1]=(s*l-h*n)*M,e[2]=(o*n-s*a)*M,e[3]=u*M,e[4]=(h*t-s*c)*M,e[5]=(s*r-o*t)*M,e[6]=p*M,e[7]=(n*c-l*t)*M,e[8]=(a*t-n*r)*M,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Pi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Al.makeScale(e,t)),this}rotate(e){return Pi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Al.makeRotation(-e)),this}translate(e,t){return Pi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Al.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Pc.prototype.isMatrix3=!0;var Ne=Pc,Al=new Ne,hh=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),uh=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ld(){let i={enabled:!0,workingColorSpace:js,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Qe&&(s.r=Yn(s.r),s.g=Yn(s.g),s.b=Yn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Qe&&(s.r=us(s.r),s.g=us(s.g),s.b=us(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ti?er:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[js]:{primaries:e,whitePoint:n,transfer:er,toXYZ:hh,fromXYZ:uh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Xt},outputColorSpaceConfig:{drawingBufferColorSpace:Xt}},[Xt]:{primaries:e,whitePoint:n,transfer:Qe,toXYZ:hh,fromXYZ:uh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Xt}}}),i}var Ge=Ld();function Yn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function us(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Yi,Xa=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Yi===void 0&&(Yi=tr("canvas")),Yi.width=e.width,Yi.height=e.height;let s=Yi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Yi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=tr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Yn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Yn(t[n]/255)*255):t[n]=Yn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Nd=0,ms=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Nd++}),this.uuid=Vi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Cl(s[a].image)):r.push(Cl(s[a]))}else r=Cl(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Cl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Xa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}var Ud=0,Rl=new D,Qt=class i extends Dn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=In,s=In,r=Kt,a=jn,o=An,c=nn,l=i.DEFAULT_ANISOTROPY,h=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=Vi(),this.name="",this.source=new ms(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ye(0,0),this.repeat=new ye(1,1),this.center=new ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Rl).x}get height(){return this.source.getSize(Rl).y}get depth(){return this.source.getSize(Rl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ie(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ie(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==hc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ka:e.x=e.x-Math.floor(e.x);break;case In:e.x=e.x<0?0:1;break;case Ga:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ka:e.y=e.y-Math.floor(e.y);break;case In:e.y=e.y<0?0:1;break;case Ga:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=hc;Qt.DEFAULT_ANISOTROPY=1;var Ic=class Ic{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],f=c[8],u=c[1],p=c[5],_=c[9],M=c[2],m=c[6],d=c[10];if(Math.abs(h-u)<.01&&Math.abs(f-M)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+M)<.1&&Math.abs(_+m)<.1&&Math.abs(l+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(l+1)/2,S=(p+1)/2,A=(d+1)/2,w=(h+u)/4,g=(f+M)/4,b=(_+m)/4;return T>S&&T>A?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=w/n,r=g/n):S>A?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=w/s,r=b/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=g/r,s=b/r),this.set(n,s,r,t),this}let y=Math.sqrt((m-_)*(m-_)+(f-M)*(f-M)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(m-_)/y,this.y=(f-M)/y,this.z=(u-h)/y,this.w=Math.acos((l+p+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ye(this.x,e.x,t.x),this.y=Ye(this.y,e.y,t.y),this.z=Ye(this.z,e.z,t.z),this.w=Ye(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ye(this.x,e,t),this.y=Ye(this.y,e,t),this.z=Ye(this.z,e,t),this.w=Ye(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ye(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ic.prototype.isVector4=!0;var dt=Ic,qa=class extends Dn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new dt(0,0,e,t),this.scissorTest=!1,this.viewport=new dt(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Qt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Kt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new ms(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ft=class extends qa{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ir=class extends Qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ut,this.minFilter=ut,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ya=class extends Qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=ut,this.minFilter=ut,this.wrapR=In,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var uo=class uo{constructor(e,t,n,s,r,a,o,c,l,h,f,u,p,_,M,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,f,u,p,_,M,m)}set(e,t,n,s,r,a,o,c,l,h,f,u,p,_,M,m){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=c,d[2]=l,d[6]=h,d[10]=f,d[14]=u,d[3]=p,d[7]=_,d[11]=M,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new uo().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Zi.setFromMatrixColumn(e,0).length(),r=1/Zi.setFromMatrixColumn(e,1).length(),a=1/Zi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let u=a*h,p=a*f,_=o*h,M=o*f;t[0]=c*h,t[4]=-c*f,t[8]=l,t[1]=p+_*l,t[5]=u-M*l,t[9]=-o*c,t[2]=M-u*l,t[6]=_+p*l,t[10]=a*c}else if(e.order==="YXZ"){let u=c*h,p=c*f,_=l*h,M=l*f;t[0]=u+M*o,t[4]=_*o-p,t[8]=a*l,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=p*o-_,t[6]=M+u*o,t[10]=a*c}else if(e.order==="ZXY"){let u=c*h,p=c*f,_=l*h,M=l*f;t[0]=u-M*o,t[4]=-a*f,t[8]=_+p*o,t[1]=p+_*o,t[5]=a*h,t[9]=M-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let u=a*h,p=a*f,_=o*h,M=o*f;t[0]=c*h,t[4]=_*l-p,t[8]=u*l+M,t[1]=c*f,t[5]=M*l+u,t[9]=p*l-_,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let u=a*c,p=a*l,_=o*c,M=o*l;t[0]=c*h,t[4]=M-u*f,t[8]=_*f+p,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=p*f+_,t[10]=u-M*f}else if(e.order==="XZY"){let u=a*c,p=a*l,_=o*c,M=o*l;t[0]=c*h,t[4]=-f,t[8]=l*h,t[1]=u*f+M,t[5]=a*h,t[9]=p*f-_,t[2]=_*f-p,t[6]=o*h,t[10]=M*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Fd,e,Od)}lookAt(e,t,n){let s=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),li.crossVectors(n,rn),li.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),li.crossVectors(n,rn)),li.normalize(),sa.crossVectors(rn,li),s[0]=li.x,s[4]=sa.x,s[8]=rn.x,s[1]=li.y,s[5]=sa.y,s[9]=rn.y,s[2]=li.z,s[6]=sa.z,s[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],f=n[5],u=n[9],p=n[13],_=n[2],M=n[6],m=n[10],d=n[14],y=n[3],T=n[7],S=n[11],A=n[15],w=s[0],g=s[4],b=s[8],F=s[12],P=s[1],U=s[5],H=s[9],Y=s[13],L=s[2],X=s[6],K=s[10],G=s[14],ne=s[3],W=s[7],j=s[11],ee=s[15];return r[0]=a*w+o*P+c*L+l*ne,r[4]=a*g+o*U+c*X+l*W,r[8]=a*b+o*H+c*K+l*j,r[12]=a*F+o*Y+c*G+l*ee,r[1]=h*w+f*P+u*L+p*ne,r[5]=h*g+f*U+u*X+p*W,r[9]=h*b+f*H+u*K+p*j,r[13]=h*F+f*Y+u*G+p*ee,r[2]=_*w+M*P+m*L+d*ne,r[6]=_*g+M*U+m*X+d*W,r[10]=_*b+M*H+m*K+d*j,r[14]=_*F+M*Y+m*G+d*ee,r[3]=y*w+T*P+S*L+A*ne,r[7]=y*g+T*U+S*X+A*W,r[11]=y*b+T*H+S*K+A*j,r[15]=y*F+T*Y+S*G+A*ee,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],f=e[6],u=e[10],p=e[14],_=e[3],M=e[7],m=e[11],d=e[15],y=c*p-l*u,T=o*p-l*f,S=o*u-c*f,A=a*p-l*h,w=a*u-c*h,g=a*f-o*h;return t*(M*y-m*T+d*S)-n*(_*y-m*A+d*w)+s*(_*T-M*A+d*g)-r*(_*S-M*w+m*g)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],f=e[9],u=e[10],p=e[11],_=e[12],M=e[13],m=e[14],d=e[15],y=t*o-n*a,T=t*c-s*a,S=t*l-r*a,A=n*c-s*o,w=n*l-r*o,g=s*l-r*c,b=h*M-f*_,F=h*m-u*_,P=h*d-p*_,U=f*m-u*M,H=f*d-p*M,Y=u*d-p*m,L=y*Y-T*H+S*U+A*P-w*F+g*b;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let X=1/L;return e[0]=(o*Y-c*H+l*U)*X,e[1]=(s*H-n*Y-r*U)*X,e[2]=(M*g-m*w+d*A)*X,e[3]=(u*w-f*g-p*A)*X,e[4]=(c*P-a*Y-l*F)*X,e[5]=(t*Y-s*P+r*F)*X,e[6]=(m*S-_*g-d*T)*X,e[7]=(h*g-u*S+p*T)*X,e[8]=(a*H-o*P+l*b)*X,e[9]=(n*P-t*H-r*b)*X,e[10]=(_*w-M*S+d*y)*X,e[11]=(f*S-h*w-p*y)*X,e[12]=(o*F-a*U-c*b)*X,e[13]=(t*U-n*F+s*b)*X,e[14]=(M*T-_*A-m*y)*X,e[15]=(h*A-f*T+u*y)*X,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,f=o+o,u=r*l,p=r*h,_=r*f,M=a*h,m=a*f,d=o*f,y=c*l,T=c*h,S=c*f,A=n.x,w=n.y,g=n.z;return s[0]=(1-(M+d))*A,s[1]=(p+S)*A,s[2]=(_-T)*A,s[3]=0,s[4]=(p-S)*w,s[5]=(1-(u+d))*w,s[6]=(m+y)*w,s[7]=0,s[8]=(_+T)*g,s[9]=(m-y)*g,s[10]=(1-(u+M))*g,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Zi.set(s[0],s[1],s[2]).length(),o=Zi.set(s[4],s[5],s[6]).length(),c=Zi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Sn.copy(this);let l=1/a,h=1/o,f=1/c;return Sn.elements[0]*=l,Sn.elements[1]*=l,Sn.elements[2]*=l,Sn.elements[4]*=h,Sn.elements[5]*=h,Sn.elements[6]*=h,Sn.elements[8]*=f,Sn.elements[9]*=f,Sn.elements[10]*=f,t.setFromRotationMatrix(Sn),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=gn,c=!1){let l=this.elements,h=2*r/(t-e),f=2*r/(n-s),u=(t+e)/(t-e),p=(n+s)/(n-s),_,M;if(c)_=r/(a-r),M=a*r/(a-r);else if(o===gn)_=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===fs)_=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=f,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=_,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=gn,c=!1){let l=this.elements,h=2/(t-e),f=2/(n-s),u=-(t+e)/(t-e),p=-(n+s)/(n-s),_,M;if(c)_=1/(a-r),M=a/(a-r);else if(o===gn)_=-2/(a-r),M=-(a+r)/(a-r);else if(o===fs)_=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=f,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=_,l[14]=M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};uo.prototype.isMatrix4=!0;var et=uo,Zi=new D,Sn=new et,Fd=new D(0,0,0),Od=new D(1,1,1),li=new D,sa=new D,rn=new D,dh=new et,fh=new Ln,Jn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],f=s[2],u=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Ye(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ye(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ye(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ye(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Ye(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-Ye(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return dh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(dh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return fh.setFromEuler(this),this.setFromQuaternion(fh,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Jn.DEFAULT_ORDER="XYZ";var gs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Bd=0,ph=new D,Ji=new Ln,kn=new et,ra=new D,Gs=new D,zd=new D,Hd=new Ln,mh=new D(1,0,0),gh=new D(0,1,0),_h=new D(0,0,1),xh={type:"added"},kd={type:"removed"},$i={type:"childadded",child:null},Pl={type:"childremoved",child:null},xt=class i extends Dn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=Vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new D,t=new Jn,n=new Ln,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new et},normalMatrix:{value:new Ne}}),this.matrix=new et,this.matrixWorld=new et,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.multiply(Ji),this}rotateOnWorldAxis(e,t){return Ji.setFromAxisAngle(e,t),this.quaternion.premultiply(Ji),this}rotateX(e){return this.rotateOnAxis(mh,e)}rotateY(e){return this.rotateOnAxis(gh,e)}rotateZ(e){return this.rotateOnAxis(_h,e)}translateOnAxis(e,t){return ph.copy(e).applyQuaternion(this.quaternion),this.position.add(ph.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(mh,e)}translateY(e){return this.translateOnAxis(gh,e)}translateZ(e){return this.translateOnAxis(_h,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(kn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ra.copy(e):ra.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Gs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?kn.lookAt(Gs,ra,this.up):kn.lookAt(ra,Gs,this.up),this.quaternion.setFromRotationMatrix(kn),s&&(kn.extractRotation(s.matrixWorld),Ji.setFromRotationMatrix(kn),this.quaternion.premultiply(Ji.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Le("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(xh),$i.child=e,this.dispatchEvent($i),$i.child=null):Le("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(kd),Pl.child=e,this.dispatchEvent(Pl),Pl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),kn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),kn.multiply(e.parent.matrixWorld)),e.applyMatrix4(kn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(xh),$i.child=e,this.dispatchEvent($i),$i.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,e,zd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Gs,Hd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let f=c[l];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),f=a(e.shapes),u=a(e.skeletons),p=a(e.animations),_=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),p.length>0&&(n.animations=p),_.length>0&&(n.nodes=_)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};xt.DEFAULT_UP=new D(0,1,0);xt.DEFAULT_MATRIX_AUTO_UPDATE=!0;xt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var _n=class extends xt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Gd={type:"move"},_s=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _n,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _n,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _n,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let M of e.hand.values()){let m=t.getJointPose(M,n),d=this._getHandJoint(l,M);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.quaternion,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}let h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=h.position.distanceTo(f.position),p=.02,_=.005;l.inputState.pinching&&u>p+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=p-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Gd)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new _n;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Pu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ci={h:0,s:0,l:0},aa={h:0,s:0,l:0};function Il(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ve=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ge.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Ge.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ge.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Ge.workingColorSpace){if(e=Dd(e,1),t=Ye(t,0,1),n=Ye(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Il(a,r,e+1/3),this.g=Il(a,r,e),this.b=Il(a,r,e-1/3)}return Ge.colorSpaceToWorking(this,s),this}setStyle(e,t=Xt){function n(r){r!==void 0&&parseFloat(r)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ie("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Xt){let n=Pu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Yn(e.r),this.g=Yn(e.g),this.b=Yn(e.b),this}copyLinearToSRGB(e){return this.r=us(e.r),this.g=us(e.g),this.b=us(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return Ge.workingToColorSpace(Wt.copy(this),e),Math.round(Ye(Wt.r*255,0,255))*65536+Math.round(Ye(Wt.g*255,0,255))*256+Math.round(Ye(Wt.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ge.workingColorSpace){Ge.workingToColorSpace(Wt.copy(this),t);let n=Wt.r,s=Wt.g,r=Wt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let f=a-o;switch(l=h<=.5?f/(a+o):f/(2-a-o),a){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ge.workingColorSpace){return Ge.workingToColorSpace(Wt.copy(this),t),e.r=Wt.r,e.g=Wt.g,e.b=Wt.b,e}getStyle(e=Xt){Ge.workingToColorSpace(Wt.copy(this),e);let t=Wt.r,n=Wt.g,s=Wt.b;return e!==Xt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ci),this.setHSL(ci.h+e,ci.s+t,ci.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ci),e.getHSL(aa);let n=El(ci.h,aa.h,t),s=El(ci.s,aa.s,t),r=El(ci.l,aa.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Wt=new ve;ve.NAMES=Pu;var sr=class i{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ve(e),this.density=t}clone(){return new i(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var rr=class extends xt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jn,this.environmentIntensity=1,this.environmentRotation=new Jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},bn=new D,Gn=new D,Dl=new D,Vn=new D,Ki=new D,Qi=new D,vh=new D,Ll=new D,Nl=new D,Ul=new D,Fl=new dt,Ol=new dt,Bl=new dt,qn=class i{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),bn.subVectors(e,t),s.cross(bn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){bn.subVectors(s,t),Gn.subVectors(n,t),Dl.subVectors(e,t);let a=bn.dot(bn),o=bn.dot(Gn),c=bn.dot(Dl),l=Gn.dot(Gn),h=Gn.dot(Dl),f=a*l-o*o;if(f===0)return r.set(0,0,0),null;let u=1/f,p=(l*c-o*h)*u,_=(a*h-o*c)*u;return r.set(1-p-_,_,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Vn)===null?!1:Vn.x>=0&&Vn.y>=0&&Vn.x+Vn.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Vn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Vn.x),c.addScaledVector(a,Vn.y),c.addScaledVector(o,Vn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Fl.setScalar(0),Ol.setScalar(0),Bl.setScalar(0),Fl.fromBufferAttribute(e,t),Ol.fromBufferAttribute(e,n),Bl.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Fl,r.x),a.addScaledVector(Ol,r.y),a.addScaledVector(Bl,r.z),a}static isFrontFacing(e,t,n,s){return bn.subVectors(n,t),Gn.subVectors(e,t),bn.cross(Gn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bn.subVectors(this.c,this.b),Gn.subVectors(this.a,this.b),bn.cross(Gn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Ki.subVectors(s,n),Qi.subVectors(r,n),Ll.subVectors(e,n);let c=Ki.dot(Ll),l=Qi.dot(Ll);if(c<=0&&l<=0)return t.copy(n);Nl.subVectors(e,s);let h=Ki.dot(Nl),f=Qi.dot(Nl);if(h>=0&&f<=h)return t.copy(s);let u=c*f-h*l;if(u<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),t.copy(n).addScaledVector(Ki,a);Ul.subVectors(e,r);let p=Ki.dot(Ul),_=Qi.dot(Ul);if(_>=0&&p<=_)return t.copy(r);let M=p*l-c*_;if(M<=0&&l>=0&&_<=0)return o=l/(l-_),t.copy(n).addScaledVector(Qi,o);let m=h*_-p*f;if(m<=0&&f-h>=0&&p-_>=0)return vh.subVectors(r,s),o=(f-h)/(f-h+(p-_)),t.copy(s).addScaledVector(vh,o);let d=1/(m+M+u);return a=M*d,o=u*d,t.copy(n).addScaledVector(Ki,a).addScaledVector(Qi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Nn=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Tn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Tn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Tn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Tn):Tn.fromBufferAttribute(r,a),Tn.applyMatrix4(e.matrixWorld),this.expandByPoint(Tn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),oa.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),oa.copy(n.boundingBox)),oa.applyMatrix4(e.matrixWorld),this.union(oa)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Tn),Tn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Vs),la.subVectors(this.max,Vs),ji.subVectors(e.a,Vs),es.subVectors(e.b,Vs),ts.subVectors(e.c,Vs),hi.subVectors(es,ji),ui.subVectors(ts,es),wi.subVectors(ji,ts);let t=[0,-hi.z,hi.y,0,-ui.z,ui.y,0,-wi.z,wi.y,hi.z,0,-hi.x,ui.z,0,-ui.x,wi.z,0,-wi.x,-hi.y,hi.x,0,-ui.y,ui.x,0,-wi.y,wi.x,0];return!zl(t,ji,es,ts,la)||(t=[1,0,0,0,1,0,0,0,1],!zl(t,ji,es,ts,la))?!1:(ca.crossVectors(hi,ui),t=[ca.x,ca.y,ca.z],zl(t,ji,es,ts,la))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Tn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Tn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Wn=[new D,new D,new D,new D,new D,new D,new D,new D],Tn=new D,oa=new Nn,ji=new D,es=new D,ts=new D,hi=new D,ui=new D,wi=new D,Vs=new D,la=new D,ca=new D,Ai=new D;function zl(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ai.fromArray(i,r);let o=s.x*Math.abs(Ai.x)+s.y*Math.abs(Ai.y)+s.z*Math.abs(Ai.z),c=e.dot(Ai),l=t.dot(Ai),h=n.dot(Ai);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Et=new D,ha=new ye,Vd=0,Mt=class extends Dn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Vd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Mc,this.updateRanges=[],this.gpuType=vn,this.version=0,this._normalizationScale=e!==void 0?el(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ha.fromBufferAttribute(this,t),ha.applyMatrix3(e),this.setXY(t,ha.x,ha.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Cu(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Ru(e,this.array)}};var ar=class extends Mt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var or=class extends Mt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ze=class extends Mt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Wd=new Nn,Ws=new D,Hl=new D,Un=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Wd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ws.subVectors(e,this.center);let t=Ws.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ws,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Hl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ws.copy(e.center).add(Hl)),this.expandByPoint(Ws.copy(e.center).sub(Hl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Xd=0,mn=new et,kl=new xt,ns=new D,an=new Nn,Xs=new Nn,Nt=new D,pt=class i extends Dn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xd++}),this.uuid=Vi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Pd(e)?or:ar)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ne().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return mn.makeRotationFromQuaternion(e),this.applyMatrix4(mn),this}rotateX(e){return mn.makeRotationX(e),this.applyMatrix4(mn),this}rotateY(e){return mn.makeRotationY(e),this.applyMatrix4(mn),this}rotateZ(e){return mn.makeRotationZ(e),this.applyMatrix4(mn),this}translate(e,t,n){return mn.makeTranslation(e,t,n),this.applyMatrix4(mn),this}scale(e,t,n){return mn.makeScale(e,t,n),this.applyMatrix4(mn),this}lookAt(e){return kl.lookAt(e),kl.updateMatrix(),this.applyMatrix4(kl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ze(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Le("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];an.setFromBufferAttribute(r),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Le('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Un);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Le("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(an.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Xs.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(an.min,Xs.min),an.expandByPoint(Nt),Nt.addVectors(an.max,Xs.max),an.expandByPoint(Nt)):(an.expandByPoint(Xs.min),an.expandByPoint(Xs.max))}an.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Nt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Nt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Nt.fromBufferAttribute(o,l),c&&(ns.fromBufferAttribute(e,l),Nt.add(ns)),s=Math.max(s,n.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Le('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Le("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Mt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[],l=new Uint8Array(n.count);for(let F=0;F<n.count;F++)o[F]=new D,c[F]=new D;let h=new D,f=new D,u=new D,p=new ye,_=new ye,M=new ye,m=new D,d=new D;function y(F,P,U){l[F]=l[P]=l[U]=1,h.fromBufferAttribute(n,F),f.fromBufferAttribute(n,P),u.fromBufferAttribute(n,U),p.fromBufferAttribute(r,F),_.fromBufferAttribute(r,P),M.fromBufferAttribute(r,U),f.sub(h),u.sub(h),_.sub(p),M.sub(p);let H=1/(_.x*M.y-M.x*_.y);isFinite(H)&&(m.copy(f).multiplyScalar(M.y).addScaledVector(u,-_.y).multiplyScalar(H),d.copy(u).multiplyScalar(_.x).addScaledVector(f,-M.x).multiplyScalar(H),o[F].add(m),o[P].add(m),o[U].add(m),c[F].add(d),c[P].add(d),c[U].add(d))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let F=0,P=T.length;F<P;++F){let U=T[F],H=U.start,Y=U.count;for(let L=H,X=H+Y;L<X;L+=3)y(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let S=new D,A=new D,w=new D,g=new D;function b(F){w.fromBufferAttribute(s,F),g.copy(w);let P=o[F];S.copy(P),S.sub(w.multiplyScalar(w.dot(P))).normalize(),A.crossVectors(g,P);let H=A.dot(c[F])<0?-1:1;a.setXYZW(F,S.x,S.y,S.z,H)}for(let F=0,P=n.count;F<P;++F)l[F]&&b(F);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Mt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,p=n.count;u<p;u++)n.setXYZ(u,0,0,0);let s=new D,r=new D,a=new D,o=new D,c=new D,l=new D,h=new D,f=new D;if(e)for(let u=0,p=e.count;u<p;u+=3){let _=e.getX(u+0),M=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(t,_),r.fromBufferAttribute(t,M),a.fromBufferAttribute(t,m),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,M),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,p=t.count;u<p;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,f=o.normalized,u=new l.constructor(c.length*h),p=0,_=0;for(let M=0,m=c.length;M<m;M++){o.isInterleavedBufferAttribute?p=c[M]*o.data.stride+o.offset:p=c[M]*h;for(let d=0;d<h;d++)u[_++]=l[p++]}return new Mt(u,h,f)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,f=l.length;h<f;h++){let u=l[h],p=e(u,n);c.push(p)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let f=0,u=l.length;f<u;f++){let p=l[f];h.push(p.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],f=r[l];for(let u=0,p=f.length;u<p;u++)h.push(f[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Za=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Mc,this.updateRanges=[],this.version=0,this.uuid=Vi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=yh(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=yh(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function yh(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=Vi()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var $t=new D,lr=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?el(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){nr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Mt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){nr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Cu(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Ru(e,this.data.array)}},Gl=new D,qd=new D,Yd=new Ne,En=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Gl.subVectors(n,t).cross(qd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Gl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Yd.getNormalMatrix(e),s=this.coplanarPoint(Gl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Zd=0,xn=class extends Dn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=Vi(),this.name="",this.type="Material",this.blending=Is,this.side=_i,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=oc,this.blendDst=lc,this.blendEquation=zi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ve(0,0,0),this.blendAlpha=0,this.depthFunc=ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_u,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=La,this.stencilZFail=La,this.stencilZPass=La,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ie(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ie(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ve().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new En().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ye().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ye().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},xs=class extends xn{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},is,qs=new D,ss=new D,rs=new D,as=new ye,Ys=new ye,Iu=new et,ua=new D,Zs=new D,da=new D,Mh=new ye,Vl=new ye,Sh=new ye,cr=class extends xt{constructor(e=new xs){if(super(),this.isSprite=!0,this.type="Sprite",is===void 0){is=new pt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Za(t,5);is.setIndex([0,1,2,0,2,3]),is.setAttribute("position",new lr(n,3,0,!1)),is.setAttribute("uv",new lr(n,2,3,!1))}this.geometry=is,this.material=e,this.center=new ye(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Le('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ss.setFromMatrixScale(this.matrixWorld),Iu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),rs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ss.multiplyScalar(-rs.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;fa(ua.set(-.5,-.5,0),rs,a,ss,s,r),fa(Zs.set(.5,-.5,0),rs,a,ss,s,r),fa(da.set(.5,.5,0),rs,a,ss,s,r),Mh.set(0,0),Vl.set(1,0),Sh.set(1,1);let o=e.ray.intersectTriangle(ua,Zs,da,!1,qs);if(o===null&&(fa(Zs.set(-.5,.5,0),rs,a,ss,s,r),Vl.set(0,1),o=e.ray.intersectTriangle(ua,da,Zs,!1,qs),o===null))return;let c=e.ray.origin.distanceTo(qs);c<e.near||c>e.far||t.push({distance:c,point:qs.clone(),uv:qn.getInterpolation(qs,ua,Zs,da,Mh,Vl,Sh,new ye),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function fa(i,e,t,n,s,r){as.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Ys.x=r*as.x-s*as.y,Ys.y=s*as.x+r*as.y):Ys.copy(as),i.copy(e),i.x+=Ys.x,i.y+=Ys.y,i.applyMatrix4(Iu)}var Xn=new D,Wl=new D,pa=new D,ma=new D,Ii=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Xn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Xn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Xn.copy(this.origin).addScaledVector(this.direction,t),Xn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Wl.copy(e).add(t).multiplyScalar(.5),pa.copy(t).sub(e).normalize(),ma.copy(this.origin).sub(Wl);let r=e.distanceTo(t)*.5,a=-this.direction.dot(pa),o=ma.dot(this.direction),c=-ma.dot(pa),l=ma.lengthSq(),h=Math.abs(1-a*a),f,u,p,_;if(h>0)if(f=a*c-o,u=a*o-c,_=r*h,f>=0)if(u>=-_)if(u<=_){let M=1/h;f*=M,u*=M,p=f*(f+a*u+2*o)+u*(a*f+u+2*c)+l}else u=r,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*c)+l;else u=-r,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*c)+l;else u<=-_?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-c),r),p=-f*f+u*(u+2*c)+l):u<=_?(f=0,u=Math.min(Math.max(-r,-c),r),p=u*(u+2*c)+l):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-c),r),p=-f*f+u*(u+2*c)+l);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),p=-f*f+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Wl).addScaledVector(pa,u),p}intersectSphere(e,t){if(e.radius<0)return null;Xn.subVectors(e.center,this.origin);let n=Xn.dot(this.direction),s=Xn.dot(Xn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-u.z)*f,c=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,c=(e.min.z-u.z)*f),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Xn)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,f=e.x-a.x,u=e.y-a.y,p=e.z-a.z,_=t.x-a.x,M=t.y-a.y,m=t.z-a.z,d=n.x-a.x,y=n.y-a.y,T=n.z-a.z,S=Math.abs(c),A=Math.abs(l),w=Math.abs(h),g,b,F,P,U,H,Y,L,X,K,G,ne;if(S>=A&&S>=w?(F=c,H=f,X=_,ne=d,c>=0?(g=l,b=h,P=u,U=p,Y=M,L=m,K=y,G=T):(g=h,b=l,P=p,U=u,Y=m,L=M,K=T,G=y)):A>=w?(F=l,H=u,X=M,ne=y,l>=0?(g=h,b=c,P=p,U=f,Y=m,L=_,K=T,G=d):(g=c,b=h,P=f,U=p,Y=_,L=m,K=d,G=T)):(F=h,H=p,X=m,ne=T,h>=0?(g=c,b=l,P=f,U=u,Y=_,L=M,K=d,G=y):(g=l,b=c,P=u,U=f,Y=M,L=_,K=y,G=d)),F===0)return null;let W=g/F,j=b/F,ee=1/F,Ee=P-W*H,Fe=U-j*H,J=Y-W*X,ge=L-j*X,Se=K-W*ne,Re=G-j*ne,_e=Se*ge-Re*J,Be=Ee*Re-Fe*Se,bt=J*Fe-ge*Ee;if(s){if(_e<0||Be<0||bt<0)return null}else if((_e<0||Be<0||bt<0)&&(_e>0||Be>0||bt>0))return null;let De=_e+Be+bt;if(De===0)return null;let nt=ee*(_e*H+Be*X+bt*ne);return(De>0?nt<0:nt>0)?null:this.at(nt/De,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ot=class extends xn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ve(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=cc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},bh=new et,Ci=new Ii,ga=new Un,Th=new D,_a=new D,xa=new D,va=new D,Xl=new D,ya=new D,Eh=new D,Ma=new D,Ke=class extends xt{constructor(e=new pt,t=new Ot){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){ya.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],f=r[c];h!==0&&(Xl.fromBufferAttribute(f,e),a?ya.addScaledVector(Xl,h):ya.addScaledVector(Xl.sub(t),h))}t.add(ya)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ga.copy(n.boundingSphere),ga.applyMatrix4(r),Ci.copy(e.ray).recast(e.near),!(ga.containsPoint(Ci.origin)===!1&&(Ci.intersectSphere(ga,Th)===null||Ci.origin.distanceToSquared(Th)>(e.far-e.near)**2))&&(bh.copy(r).invert(),Ci.copy(e.ray).applyMatrix4(bh),!(n.boundingBox!==null&&Ci.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ci)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,M=u.length;_<M;_++){let m=u[_],d=a[m.materialIndex],y=Math.max(m.start,p.start),T=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let S=y,A=T;S<A;S+=3){let w=o.getX(S),g=o.getX(S+1),b=o.getX(S+2);s=Sa(this,d,e,n,l,h,f,w,g,b),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let _=Math.max(0,p.start),M=Math.min(o.count,p.start+p.count);for(let m=_,d=M;m<d;m+=3){let y=o.getX(m),T=o.getX(m+1),S=o.getX(m+2);s=Sa(this,a,e,n,l,h,f,y,T,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let _=0,M=u.length;_<M;_++){let m=u[_],d=a[m.materialIndex],y=Math.max(m.start,p.start),T=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let S=y,A=T;S<A;S+=3){let w=S,g=S+1,b=S+2;s=Sa(this,d,e,n,l,h,f,w,g,b),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let _=Math.max(0,p.start),M=Math.min(c.count,p.start+p.count);for(let m=_,d=M;m<d;m+=3){let y=m,T=m+1,S=m+2;s=Sa(this,a,e,n,l,h,f,y,T,S),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function Jd(i,e,t,n,s,r,a,o){let c;if(e.side===Bt?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===_i,o),c===null)return null;Ma.copy(o),Ma.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Ma);return l<t.near||l>t.far?null:{distance:l,point:Ma.clone(),object:i}}function Sa(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,_a),i.getVertexPosition(c,xa),i.getVertexPosition(l,va);let h=Jd(i,e,t,n,_a,xa,va,Eh);if(h){let f=new D;qn.getBarycoord(Eh,_a,xa,va,f),s&&(h.uv=qn.getInterpolatedAttribute(s,o,c,l,f,new ye)),r&&(h.uv1=qn.getInterpolatedAttribute(r,o,c,l,f,new ye)),a&&(h.normal=qn.getInterpolatedAttribute(a,o,c,l,f,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new D,materialIndex:0};qn.getNormal(_a,xa,va,u.normal),h.face=u,h.barycoord=f}return h}var hr=class extends Qt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=ut,h=ut,f,u){super(null,a,o,c,l,h,s,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ur=class extends Mt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},os=new et,wh=new et,ba=[],Ah=new Nn,$d=new et,Js=new Ke,$s=new Un,dr=class extends Ke{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ur(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,$d)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Nn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,os),Ah.copy(e.boundingBox).applyMatrix4(os),this.boundingBox.union(Ah)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Un),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,os),$s.copy(e.boundingSphere).applyMatrix4(os),this.boundingSphere.union($s)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(Js.geometry=this.geometry,Js.material=this.material,Js.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$s.copy(this.boundingSphere),$s.applyMatrix4(n),e.ray.intersectsSphere($s)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,os),wh.multiplyMatrices(n,os),Js.matrixWorld=wh,Js.raycast(e,ba);for(let a=0,o=ba.length;a<o;a++){let c=ba[a];c.instanceId=r,c.object=this,t.push(c)}ba.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ur(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new hr(new Float32Array(s*this.count),s,this.count,vo,vn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ri=new Un,Kd=new ye(.5,.5),Ta=new D,fi=class{constructor(e=new En,t=new En,n=new En,s=new En,r=new En,a=new En){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=gn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],f=r[5],u=r[6],p=r[7],_=r[8],M=r[9],m=r[10],d=r[11],y=r[12],T=r[13],S=r[14],A=r[15];if(s[0].setComponents(l-a,p-h,d-_,A-y).normalize(),s[1].setComponents(l+a,p+h,d+_,A+y).normalize(),s[2].setComponents(l+o,p+f,d+M,A+T).normalize(),s[3].setComponents(l-o,p-f,d-M,A-T).normalize(),n)s[4].setComponents(c,u,m,S).normalize(),s[5].setComponents(l-c,p-u,d-m,A-S).normalize();else if(s[4].setComponents(l-c,p-u,d-m,A-S).normalize(),t===gn)s[5].setComponents(l+c,p+u,d+m,A+S).normalize();else if(t===fs)s[5].setComponents(c,u,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ri.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ri.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ri)}intersectsSprite(e){Ri.center.set(0,0,0);let t=Kd.distanceTo(e.center);return Ri.radius=.7071067811865476+t,Ri.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ri)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Ta.x=s.normal.x>0?e.max.x:e.min.x,Ta.y=s.normal.y>0?e.max.y:e.min.y,Ta.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ta)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Ch=new et,Ja=class i{constructor(){this.coordinateSystem=gn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Ch.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new fi),n[s].setFromProjectionMatrix(Ch,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new fi),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var Di=class extends xn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ve(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},$a=new D,Ka=new D,Rh=new et,Ks=new Ii,Ea=new Un,ql=new D,Ph=new D,vs=class extends xt{constructor(e=new pt,t=new Di){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)$a.fromBufferAttribute(t,s-1),Ka.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=$a.distanceTo(Ka);e.setAttribute("lineDistance",new Ze(n,1))}else Ie("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ea.copy(n.boundingSphere),Ea.applyMatrix4(s),Ea.radius+=r,e.ray.intersectsSphere(Ea)===!1)return;Rh.copy(s).invert(),Ks.copy(e.ray).applyMatrix4(Rh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let p=Math.max(0,a.start),_=Math.min(h.count,a.start+a.count);for(let M=p,m=_-1;M<m;M+=l){let d=h.getX(M),y=h.getX(M+1),T=wa(this,e,Ks,c,d,y,M);T&&t.push(T)}if(this.isLineLoop){let M=h.getX(_-1),m=h.getX(p),d=wa(this,e,Ks,c,M,m,_-1);d&&t.push(d)}}else{let p=Math.max(0,a.start),_=Math.min(u.count,a.start+a.count);for(let M=p,m=_-1;M<m;M+=l){let d=wa(this,e,Ks,c,M,M+1,M);d&&t.push(d)}if(this.isLineLoop){let M=wa(this,e,Ks,c,_-1,p,_-1);M&&t.push(M)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function wa(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if($a.fromBufferAttribute(o,s),Ka.fromBufferAttribute(o,r),t.distanceSqToSegment($a,Ka,ql,Ph)>n)return;ql.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(ql);if(!(l<e.near||l>e.far))return{distance:l,point:Ph.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Ih=new D,Dh=new D,fr=class extends vs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)Ih.fromBufferAttribute(t,s),Dh.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Ih.distanceTo(Dh);e.setAttribute("lineDistance",new Ze(n,1))}else Ie("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Qa=class extends xn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ve(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Lh=new et,Ql=new Ii,Aa=new Un,Ca=new D,ys=class extends xt{constructor(e=new pt,t=new Qa){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Aa.copy(n.boundingSphere),Aa.applyMatrix4(s),Aa.radius+=r,e.ray.intersectsSphere(Aa)===!1)return;Lh.copy(s).invert(),Ql.copy(e.ray).applyMatrix4(Lh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,f=n.attributes.position;if(l!==null){let u=Math.max(0,a.start),p=Math.min(l.count,a.start+a.count);for(let _=u,M=p;_<M;_++){let m=l.getX(_);Ca.fromBufferAttribute(f,m),Nh(Ca,m,c,s,e,t,this)}}else{let u=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let _=u,M=p;_<M;_++)Ca.fromBufferAttribute(f,_),Nh(Ca,_,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Nh(i,e,t,n,s,r,a){let o=Ql.distanceSqToPoint(i);if(o<t){let c=new D;Ql.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var pr=class extends Qt{constructor(e=[],t=ki,n,s,r,a,o,c,l,h){super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},mr=class extends Qt{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var $n=class extends Qt{constructor(e,t,n=wn,s,r,a,o=ut,c=ut,l,h=Zn,f=1){if(h!==Zn&&h!==ei)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:f};super(u,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ms(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},gr=class extends $n{constructor(e,t=wn,n=ki,s,r,a=ut,o=ut,c,l=Zn){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},_r=class extends Qt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Ms=class i extends pt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],f=[],u=0,p=0;_("z","y","x",-1,-1,n,t,e,a,r,0),_("z","y","x",1,-1,n,t,-e,a,r,1),_("x","z","y",1,1,e,n,t,s,a,2),_("x","z","y",1,-1,e,n,-t,s,a,3),_("x","y","z",1,-1,e,t,n,s,r,4),_("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new Ze(l,3)),this.setAttribute("normal",new Ze(h,3)),this.setAttribute("uv",new Ze(f,2));function _(M,m,d,y,T,S,A,w,g,b,F){let P=S/g,U=A/b,H=S/2,Y=A/2,L=w/2,X=g+1,K=b+1,G=0,ne=0,W=new D;for(let j=0;j<K;j++){let ee=j*U-Y;for(let Ee=0;Ee<X;Ee++){let Fe=Ee*P-H;W[M]=Fe*y,W[m]=ee*T,W[d]=L,l.push(W.x,W.y,W.z),W[M]=0,W[m]=0,W[d]=w>0?1:-1,h.push(W.x,W.y,W.z),f.push(Ee/g),f.push(1-j/b),G+=1}}for(let j=0;j<b;j++)for(let ee=0;ee<g;ee++){let Ee=u+ee+X*j,Fe=u+ee+X*(j+1),J=u+(ee+1)+X*(j+1),ge=u+(ee+1)+X*j;c.push(Ee,Fe,ge),c.push(Fe,J,ge),ne+=6}o.addGroup(p,ne,F),p+=ne,u+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var xr=class i extends pt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new D,h=new ye;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let f=0,u=3;f<=t;f++,u+=3){let p=n+f/t*s;l.x=e*Math.cos(p),l.y=e*Math.sin(p),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,c.push(h.x,h.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new Ze(a,3)),this.setAttribute("normal",new Ze(o,3)),this.setAttribute("uv",new Ze(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}};var Ss=class i extends pt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new Ze(r,3)),this.setAttribute("normal",new Ze(r.slice(),3)),this.setAttribute("uv",new Ze(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(y){let T=new D,S=new D,A=new D;for(let w=0;w<t.length;w+=3)p(t[w+0],T),p(t[w+1],S),p(t[w+2],A),c(T,S,A,y)}function c(y,T,S,A){let w=A+1,g=[];for(let b=0;b<=w;b++){g[b]=[];let F=y.clone().lerp(S,b/w),P=T.clone().lerp(S,b/w),U=w-b;for(let H=0;H<=U;H++)H===0&&b===w?g[b][H]=F:g[b][H]=F.clone().lerp(P,H/U)}for(let b=0;b<w;b++)for(let F=0;F<2*(w-b)-1;F++){let P=Math.floor(F/2);F%2===0?(u(g[b][P+1]),u(g[b+1][P]),u(g[b][P])):(u(g[b][P+1]),u(g[b+1][P+1]),u(g[b+1][P]))}}function l(y){let T=new D;for(let S=0;S<r.length;S+=3)T.x=r[S+0],T.y=r[S+1],T.z=r[S+2],T.normalize().multiplyScalar(y),r[S+0]=T.x,r[S+1]=T.y,r[S+2]=T.z}function h(){let y=new D;for(let T=0;T<r.length;T+=3){y.x=r[T+0],y.y=r[T+1],y.z=r[T+2];let S=m(y)/2/Math.PI+.5,A=d(y)/Math.PI+.5;a.push(S,1-A)}_(),f()}function f(){for(let y=0;y<a.length;y+=6){let T=a[y+0],S=a[y+2],A=a[y+4],w=Math.max(T,S,A),g=Math.min(T,S,A);w>.9&&g<.1&&(T<.2&&(a[y+0]+=1),S<.2&&(a[y+2]+=1),A<.2&&(a[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function p(y,T){let S=y*3;T.x=e[S+0],T.y=e[S+1],T.z=e[S+2]}function _(){let y=new D,T=new D,S=new D,A=new D,w=new ye,g=new ye,b=new ye;for(let F=0,P=0;F<r.length;F+=9,P+=6){y.set(r[F+0],r[F+1],r[F+2]),T.set(r[F+3],r[F+4],r[F+5]),S.set(r[F+6],r[F+7],r[F+8]),w.set(a[P+0],a[P+1]),g.set(a[P+2],a[P+3]),b.set(a[P+4],a[P+5]),A.copy(y).add(T).add(S).divideScalar(3);let U=m(A);M(w,P+0,y,U),M(g,P+2,T,U),M(b,P+4,S,U)}}function M(y,T,S,A){A<0&&y.x===1&&(a[T]=y.x-1),S.x===0&&S.z===0&&(a[T]=A/2/Math.PI+.5)}function m(y){return Math.atan2(y.z,-y.x)}function d(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var Li=class i extends Ss{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var vr=class i extends Ss{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Ni=class i extends pt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,f=e/o,u=t/c,p=[],_=[],M=[],m=[];for(let d=0;d<h;d++){let y=d*u-a;for(let T=0;T<l;T++){let S=T*f-r;_.push(S,-y,0),M.push(0,0,1),m.push(T/o),m.push(1-d/c)}}for(let d=0;d<c;d++)for(let y=0;y<o;y++){let T=y+l*d,S=y+l*(d+1),A=y+1+l*(d+1),w=y+1+l*d;p.push(T,S,w),p.push(S,A,w)}this.setIndex(p),this.setAttribute("position",new Ze(_,3)),this.setAttribute("normal",new Ze(M,3)),this.setAttribute("uv",new Ze(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},yr=class i extends pt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],c=[],l=[],h=[],f=e,u=(t-e)/s,p=new D,_=new ye;for(let M=0;M<=s;M++){for(let m=0;m<=n;m++){let d=r+m/n*a;p.x=f*Math.cos(d),p.y=f*Math.sin(d),c.push(p.x,p.y,p.z),l.push(0,0,1),_.x=(p.x/t+1)/2,_.y=(p.y/t+1)/2,h.push(_.x,_.y)}f+=u}for(let M=0;M<s;M++){let m=M*(n+1);for(let d=0;d<n;d++){let y=d+m,T=y,S=y+n+1,A=y+n+2,w=y+1;o.push(T,S,w),o.push(S,A,w)}}this.setIndex(o),this.setAttribute("position",new Ze(c,3)),this.setAttribute("normal",new Ze(l,3)),this.setAttribute("uv",new Ze(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Kn=class i extends pt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],f=new D,u=new D,p=[],_=[],M=[],m=[];for(let d=0;d<=n;d++){let y=[],T=d/n,S=a+T*o,A=e*Math.cos(S),w=Math.sqrt(e*e-A*A),g=0;d===0&&a===0?g=.5/t:d===n&&c===Math.PI&&(g=-.5/t);for(let b=0;b<=t;b++){let F=b/t,P=s+F*r;f.x=-w*Math.cos(P),f.y=A,f.z=w*Math.sin(P),_.push(f.x,f.y,f.z),u.copy(f).normalize(),M.push(u.x,u.y,u.z),m.push(F+g,1-T),y.push(l++)}h.push(y)}for(let d=0;d<n;d++)for(let y=0;y<t;y++){let T=h[d][y+1],S=h[d][y],A=h[d+1][y],w=h[d+1][y+1];(d!==0||a>0)&&p.push(T,S,w),(d!==n-1||c<Math.PI)&&p.push(S,A,w)}this.setIndex(p),this.setAttribute("position",new Ze(_,3)),this.setAttribute("normal",new Ze(M,3)),this.setAttribute("uv",new Ze(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}},Mr=class i extends Ss{constructor(e=1,t=0){let n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],s=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,s,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Qn=class i extends pt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],h=[],f=[],u=new D,p=new D,_=new D;for(let M=0;M<=n;M++){let m=a+M/n*o;for(let d=0;d<=s;d++){let y=d/s*r;p.x=(e+t*Math.cos(m))*Math.cos(y),p.y=(e+t*Math.cos(m))*Math.sin(y),p.z=t*Math.sin(m),l.push(p.x,p.y,p.z),u.x=e*Math.cos(y),u.y=e*Math.sin(y),_.subVectors(p,u).normalize(),h.push(_.x,_.y,_.z),f.push(d/s),f.push(M/n)}}for(let M=1;M<=n;M++)for(let m=1;m<=s;m++){let d=(s+1)*M+m-1,y=(s+1)*(M-1)+m-1,T=(s+1)*(M-1)+m,S=(s+1)*M+m;c.push(d,y,S),c.push(y,T,S)}this.setIndex(c),this.setAttribute("position",new Ze(l,3)),this.setAttribute("normal",new Ze(h,3)),this.setAttribute("uv",new Ze(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}},bs=class i extends pt{constructor(e=1,t=.4,n=64,s=8,r=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:s,p:r,q:a},n=Math.floor(n),s=Math.floor(s);let o=[],c=[],l=[],h=[],f=new D,u=new D,p=new D,_=new D,M=new D,m=new D,d=new D;for(let T=0;T<=n;++T){let S=T/n*r*Math.PI*2;y(S,r,a,e,p),y(S+.01,r,a,e,_),m.subVectors(_,p),d.addVectors(_,p),M.crossVectors(m,d),d.crossVectors(M,m),M.normalize(),d.normalize();for(let A=0;A<=s;++A){let w=A/s*Math.PI*2,g=-t*Math.cos(w),b=t*Math.sin(w);f.x=p.x+(g*d.x+b*M.x),f.y=p.y+(g*d.y+b*M.y),f.z=p.z+(g*d.z+b*M.z),c.push(f.x,f.y,f.z),u.subVectors(f,p).normalize(),l.push(u.x,u.y,u.z),h.push(T/n),h.push(A/s)}}for(let T=1;T<=n;T++)for(let S=1;S<=s;S++){let A=(s+1)*(T-1)+(S-1),w=(s+1)*T+(S-1),g=(s+1)*T+S,b=(s+1)*(T-1)+S;o.push(A,w,b),o.push(w,g,b)}this.setIndex(o),this.setAttribute("position",new Ze(c,3)),this.setAttribute("normal",new Ze(l,3)),this.setAttribute("uv",new Ze(h,2));function y(T,S,A,w,g){let b=Math.cos(T),F=Math.sin(T),P=A/S*T,U=Math.cos(P);g.x=w*(2+U)*.5*b,g.y=w*(2+U)*F*.5,g.z=w*Math.sin(P)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}};var Sr=class extends pt{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){let t=[],n=new Set,s=new D,r=new D;if(e.index!==null){let a=e.attributes.position,o=e.index,c=e.groups;c.length===0&&(c=[{start:0,count:o.count,materialIndex:0}]);for(let l=0,h=c.length;l<h;++l){let f=c[l],u=f.start,p=f.count;for(let _=u,M=u+p;_<M;_+=3)for(let m=0;m<3;m++){let d=o.getX(_+m),y=o.getX(_+(m+1)%3);s.fromBufferAttribute(a,d),r.fromBufferAttribute(a,y),Uh(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}}else{let a=e.attributes.position;for(let o=0,c=a.count/3;o<c;o++)for(let l=0;l<3;l++){let h=3*o+l,f=3*o+(l+1)%3;s.fromBufferAttribute(a,h),r.fromBufferAttribute(a,f),Uh(s,r,n)===!0&&(t.push(s.x,s.y,s.z),t.push(r.x,r.y,r.z))}}this.setAttribute("position",new Ze(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}};function Uh(i,e,t){let n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,s=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(s)===!0?!1:(t.add(n),t.add(s),!0)}var br=class extends xn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ve(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};function Wi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Fh(s))s.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Fh(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Yt(i){let e={};for(let t=0;t<i.length;t++){let n=Wi(i[t]);for(let s in n)e[s]=n[s]}return e}function Fh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Qd(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Tc(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ge.workingColorSpace}var sn={clone:Wi,merge:Yt},jd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ef=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,tt=class extends xn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jd,this.fragmentShader=ef,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Wi(e.uniforms),this.uniformsGroups=Qd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new ve().setHex(s.value);break;case"v2":this.uniforms[n].value=new ye().fromArray(s.value);break;case"v3":this.uniforms[n].value=new D().fromArray(s.value);break;case"v4":this.uniforms[n].value=new dt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ne().fromArray(s.value);break;case"m4":this.uniforms[n].value=new et().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ts=class extends tt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Es=class extends xn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ve(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ve(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jo,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Ui=class extends Es{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ye(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ye(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new ve(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ve(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ve(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Pi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Pi('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ws=class extends xn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ja=class extends xn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ls(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Ra(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var pi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},eo=class extends pi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Jl,endingEnd:Jl}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case $l:r=e,o=2*t-n;break;case Kl:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case $l:a=e,c=2*n-t;break;case Kl:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,p=this._weightNext,_=(n-t)/(s-t),M=_*_,m=M*_,d=-u*m+2*u*M-u*_,y=(1+u)*m+(-1.5-2*u)*M+(-.5+u)*_+1,T=(-1-p)*m+(1.5+p)*M+.5*_,S=p*m-p*M;for(let A=0;A!==o;++A)r[A]=d*a[h+A]+y*a[l+A]+T*a[c+A]+S*a[f+A];return r}},to=class extends pi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),f=1-h;for(let u=0;u!==o;++u)r[u]=a[l+u]*f+a[c+u]*h;return r}},no=class extends pi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},io=class extends pi{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let _=(n-t)/(s-t),M=1-_;for(let m=0;m!==o;++m)r[m]=a[l+m]*M+a[c+m]*_;return r}let u=o*2,p=e-1;for(let _=0;_!==o;++_){let M=a[l+_],m=a[c+_],d=p*u+_*2,y=f[d],T=f[d+1],S=e*u+_*2,A=h[S],w=h[S+1],g=nf(n,t,y,A,s);r[_]=Du(g,M,T,w,m)}return r}};function Du(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function tf(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function nf(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Du(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let c=tf(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var on=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ls(t,this.TimeBufferType),this.values=ls(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ls(e.times,Array),values:ls(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Ra(e.settings)&&(n.settings={inTangents:ls(e.settings.inTangents,Array),outTangents:ls(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new no(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new to(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new eo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new io(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Qs:t=this.InterpolantFactoryMethodDiscrete;break;case Va:t=this.InterpolantFactoryMethodLinear;break;case Da:t=this.InterpolantFactoryMethodSmooth;break;case Zl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ie("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Qs;case this.InterpolantFactoryMethodLinear:return Va;case this.InterpolantFactoryMethodSmooth:return Da;case this.InterpolantFactoryMethodBezier:return Zl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;Ra(this.settings)&&(Oh(this.settings.inTangents,e),Oh(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Ra(this.settings)&&(Bh(this.settings.inTangents,e),Bh(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Le("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Le("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Le("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Le("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&Id(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){Le("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Da,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let f=o*n,u=f-n,p=f+n;for(let _=0;_!==n;++_){let M=t[f+_];if(M!==t[u+_]||M!==t[p+_]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let f=o*n,u=a*n;for(let p=0;p!==n;++p)t[u+p]=t[f+p]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Ra(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Oh(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function Bh(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}on.prototype.ValueTypeName="";on.prototype.TimeBufferType=Float32Array;on.prototype.ValueBufferType=Float32Array;on.prototype.DefaultInterpolation=Va;var mi=class extends on{constructor(e,t,n){super(e,t,n)}};mi.prototype.ValueTypeName="bool";mi.prototype.ValueBufferType=Array;mi.prototype.DefaultInterpolation=Qs;mi.prototype.InterpolantFactoryMethodLinear=void 0;mi.prototype.InterpolantFactoryMethodSmooth=void 0;var so=class extends on{constructor(e,t,n,s){super(e,t,n,s)}};so.prototype.ValueTypeName="color";var ro=class extends on{constructor(e,t,n,s){super(e,t,n,s)}};ro.prototype.ValueTypeName="number";var ao=class extends pi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)Ln.slerpFlat(r,0,a,l-o,a,l,c);return r}},Tr=class extends on{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new ao(this.times,this.values,this.getValueSize(),e)}};Tr.prototype.ValueTypeName="quaternion";Tr.prototype.InterpolantFactoryMethodSmooth=void 0;var gi=class extends on{constructor(e,t,n){super(e,t,n)}};gi.prototype.ValueTypeName="string";gi.prototype.ValueBufferType=Array;gi.prototype.DefaultInterpolation=Qs;gi.prototype.InterpolantFactoryMethodLinear=void 0;gi.prototype.InterpolantFactoryMethodSmooth=void 0;var oo=class extends on{constructor(e,t,n,s){super(e,t,n,s)}};oo.prototype.ValueTypeName="vector";var lo=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){let f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=l.length;f<u;f+=2){let p=l[f],_=l[f+1];if(p.global&&(p.lastIndex=0),p.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Lu=new lo,co=class{constructor(e){this.manager=e!==void 0?e:Lu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};co.DEFAULT_MATERIAL_NAME="__DEFAULT";var Fi=class extends xt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ve(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Er=class extends Fi{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ve(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Yl=new et,zh=new D,Hh=new D,wr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ye(512,512),this.mapType=nn,this.map=null,this.mapPass=null,this.matrix=new et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fi,this._frameExtents=new ye(1,1),this._viewportCount=1,this._viewports=[new dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;zh.setFromMatrixPosition(e.matrixWorld),t.position.copy(zh),Hh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Hh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Yl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Yl,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===fs||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Yl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Pa=new D,Ia=new Ln,Pn=new D,Ar=class extends xt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new et,this.projectionMatrix=new et,this.projectionMatrixInverse=new et,this.coordinateSystem=gn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Pa,Ia,Pn),Pn.x===1&&Pn.y===1&&Pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pa,Ia,Pn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Pa,Ia,Pn),Pn.x===1&&Pn.y===1&&Pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Pa,Ia,Pn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},di=new D,kh=new ye,Gh=new ye,qt=class extends Ar{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Wa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Tl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wa*2*Math.atan(Math.tan(Tl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){di.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(di.x,di.y).multiplyScalar(-e/di.z),di.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(di.x,di.y).multiplyScalar(-e/di.z)}getViewSize(e,t){return this.getViewBounds(e,kh,Gh),t.subVectors(Gh,kh)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Tl*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var jl=class extends wr{constructor(){super(new qt(90,1,.5,500)),this.isPointLightShadow=!0}},As=class extends Fi{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new jl}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Oi=class extends Ar{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ec=class extends wr{constructor(){super(new Oi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Cs=class extends Fi{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xt.DEFAULT_UP),this.updateMatrix(),this.target=new xt,this.shadow=new ec}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Cr=class extends Fi{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var cs=-90,hs=1,Rs=class extends xt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new qt(cs,hs,e,t);s.layers=this.layers,this.add(s);let r=new qt(cs,hs,e,t);r.layers=this.layers,this.add(r);let a=new qt(cs,hs,e,t);a.layers=this.layers,this.add(a);let o=new qt(cs,hs,e,t);o.layers=this.layers,this.add(o);let c=new qt(cs,hs,e,t);c.layers=this.layers,this.add(c);let l=new qt(cs,hs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===gn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===fs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let M=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=M,e.setRenderTarget(n,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,u,p),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},ho=class extends qt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Rr=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=sf.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function sf(){this._document.hidden===!1&&this.reset()}var Ec="\\[\\]\\.:\\/",rf=new RegExp("["+Ec+"]","g"),wc="[^"+Ec+"]",af="[^"+Ec.replace("\\.","")+"]",of=/((?:WC+[\/:])*)/.source.replace("WC",wc),lf=/(WCOD+)?/.source.replace("WCOD",af),cf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wc),hf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wc),uf=new RegExp("^"+of+lf+cf+hf+"$"),df=["material","materials","bones","map"],tc=class{constructor(e,t,n){let s=n||ot.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ot=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(rf,"")}static parseTrackName(e){let t=uf.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);df.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ie("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Le("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Le("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Le("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Le("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Le("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Le("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;Le("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Le("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ot.Composite=tc;ot.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ot.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ot.prototype.GetterByBindingType=[ot.prototype._getValue_direct,ot.prototype._getValue_array,ot.prototype._getValue_arrayElement,ot.prototype._getValue_toArray];ot.prototype.SetterByBindingTypeAndVersioning=[[ot.prototype._setValue_direct,ot.prototype._setValue_direct_setNeedsUpdate,ot.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_array,ot.prototype._setValue_array_setNeedsUpdate,ot.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_arrayElement,ot.prototype._setValue_arrayElement_setNeedsUpdate,ot.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ot.prototype._setValue_fromArray,ot.prototype._setValue_fromArray_setNeedsUpdate,ot.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var k_=new Float32Array(1);var Vh=new et,Pr=class{constructor(e,t,n=0,s=1/0){this.ray=new Ii(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new gs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Le("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Vh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Vh),this}intersectObject(e,t=!0,n=[]){return nc(e,this,n,t),n.sort(Wh),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)nc(e[s],this,n,t);return n.sort(Wh),n}};function Wh(i,e){return i.distance-e.distance}function nc(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)nc(r[a],e,t,!0)}}var Dc=class Dc{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Dc.prototype.isMatrix2=!0;var ic=Dc;function Ac(i,e,t,n){let s=ff(n);switch(t){case mc:return i*e;case vo:return i*e/s.components*s.byteLength;case yo:return i*e/s.components*s.byteLength;case xi:return i*e*2/s.components*s.byteLength;case Mo:return i*e*2/s.components*s.byteLength;case gc:return i*e*3/s.components*s.byteLength;case An:return i*e*4/s.components*s.byteLength;case So:return i*e*4/s.components*s.byteLength;case Br:case zr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Hr:case kr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case To:case wo:return Math.max(i,16)*Math.max(e,8)/4;case bo:case Eo:return Math.max(i,8)*Math.max(e,8)/2;case Ao:case Co:case Po:case Io:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ro:case Gr:case Do:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Lo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case No:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Uo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Fo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Oo:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Bo:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case zo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ho:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ko:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Go:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Vo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Wo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Xo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case qo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Yo:case Zo:case Jo:return Math.ceil(i/4)*Math.ceil(e/4)*16;case $o:case Ko:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Vr:case Qo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ff(i){switch(i){case nn:case uc:return{byteLength:1,components:1};case Ls:case dc:case vt:return{byteLength:2,components:1};case _o:case xo:return{byteLength:2,components:4};case wn:case go:case vn:return{byteLength:4,components:1};case fc:case pc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function td(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function mf(i){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,f=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),o.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){let h=c.array,f=c.updateRanges;if(i.bindBuffer(l,o),f.length===0)i.bufferSubData(l,0,h);else{f.sort((p,_)=>p.start-_.start);let u=0;for(let p=1;p<f.length;p++){let _=f[u],M=f[p];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++u,f[u]=M)}f.length=u+1;for(let p=0,_=f.length;p<_;p++){let M=f[p];i.bufferSubData(l,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var gf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,_f=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,xf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,vf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Mf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Sf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,bf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Tf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Ef=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,wf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Af=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Rf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Pf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,If=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Df=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Nf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Uf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Ff=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Of=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Bf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,zf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Hf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,kf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Vf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Wf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Xf="gl_FragColor = linearToOutputTexel( gl_FragColor );",qf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Yf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Zf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Jf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$f=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Kf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Qf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ep=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,np=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,ip=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,sp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,rp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ap=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,op=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,lp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,hp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,up=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,fp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,pp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,mp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,gp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_p=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,xp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,vp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Mp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Sp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,bp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Tp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ep=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ap=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Cp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Rp=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Pp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ip=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Dp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Np=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Up=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Op=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Bp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,zp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,kp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Wp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Xp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,qp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Yp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$p=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Qp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,jp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,em=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,tm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,nm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,im=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,rm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,am=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,om=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,lm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,cm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,hm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,um=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,pm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,mm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,gm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_m=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xm=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ym=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Sm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,bm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Tm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Em=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Am=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Cm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Pm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Im=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Nm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Um=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Fm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Om=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Bm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Hm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,km=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Gm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Wm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Xm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ym=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Zm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ke={alphahash_fragment:gf,alphahash_pars_fragment:_f,alphamap_fragment:xf,alphamap_pars_fragment:vf,alphatest_fragment:yf,alphatest_pars_fragment:Mf,aomap_fragment:Sf,aomap_pars_fragment:bf,batching_pars_vertex:Tf,batching_vertex:Ef,begin_vertex:wf,beginnormal_vertex:Af,bsdfs:Cf,iridescence_fragment:Rf,bumpmap_pars_fragment:Pf,clipping_planes_fragment:If,clipping_planes_pars_fragment:Df,clipping_planes_pars_vertex:Lf,clipping_planes_vertex:Nf,color_fragment:Uf,color_pars_fragment:Ff,color_pars_vertex:Of,color_vertex:Bf,common:zf,defaultnormal_vertex:Hf,displacementmap_pars_vertex:kf,displacementmap_vertex:Gf,emissivemap_fragment:Vf,emissivemap_pars_fragment:Wf,colorspace_fragment:Xf,colorspace_pars_fragment:qf,envmap_fragment:Yf,envmap_common_pars_fragment:Zf,envmap_pars_fragment:Jf,envmap_pars_vertex:$f,envmap_physical_pars_fragment:op,envmap_vertex:Kf,fog_vertex:Qf,fog_pars_vertex:jf,fog_fragment:ep,fog_pars_fragment:tp,gradientmap_pars_fragment:np,lightmap_pars_fragment:ip,lights_lambert_fragment:sp,lights_lambert_pars_fragment:rp,lights_pars_begin:ap,lights_toon_fragment:lp,lights_toon_pars_fragment:cp,lights_phong_fragment:hp,lights_phong_pars_fragment:up,lights_physical_fragment:dp,lights_physical_pars_fragment:fp,lights_fragment_begin:pp,lights_fragment_maps:mp,lights_fragment_end:gp,lightprobes_pars_fragment:_p,logdepthbuf_fragment:xp,logdepthbuf_pars_fragment:vp,logdepthbuf_pars_vertex:yp,logdepthbuf_vertex:Mp,map_fragment:Sp,map_pars_fragment:bp,map_particle_fragment:Tp,map_particle_pars_fragment:Ep,metalnessmap_fragment:wp,metalnessmap_pars_fragment:Ap,morphinstance_vertex:Cp,morphcolor_vertex:Rp,morphnormal_vertex:Pp,morphtarget_pars_vertex:Ip,morphtarget_vertex:Dp,normal_fragment_begin:Lp,normal_fragment_maps:Np,normal_pars_fragment:Up,normal_pars_vertex:Fp,normal_vertex:Op,normalmap_pars_fragment:Bp,clearcoat_normal_fragment_begin:zp,clearcoat_normal_fragment_maps:Hp,clearcoat_pars_fragment:kp,iridescence_pars_fragment:Gp,opaque_fragment:Vp,packing:Wp,premultiplied_alpha_fragment:Xp,project_vertex:qp,dithering_fragment:Yp,dithering_pars_fragment:Zp,roughnessmap_fragment:Jp,roughnessmap_pars_fragment:$p,shadowmap_pars_fragment:Kp,shadowmap_pars_vertex:Qp,shadowmap_vertex:jp,shadowmask_pars_fragment:em,skinbase_vertex:tm,skinning_pars_vertex:nm,skinning_vertex:im,skinnormal_vertex:sm,specularmap_fragment:rm,specularmap_pars_fragment:am,tonemapping_fragment:om,tonemapping_pars_fragment:lm,transmission_fragment:cm,transmission_pars_fragment:hm,uv_pars_fragment:um,uv_pars_vertex:dm,uv_vertex:fm,worldpos_vertex:pm,background_vert:mm,background_frag:gm,backgroundCube_vert:_m,backgroundCube_frag:xm,cube_vert:vm,cube_frag:ym,depth_vert:Mm,depth_frag:Sm,distance_vert:bm,distance_frag:Tm,equirect_vert:Em,equirect_frag:wm,linedashed_vert:Am,linedashed_frag:Cm,meshbasic_vert:Rm,meshbasic_frag:Pm,meshlambert_vert:Im,meshlambert_frag:Dm,meshmatcap_vert:Lm,meshmatcap_frag:Nm,meshnormal_vert:Um,meshnormal_frag:Fm,meshphong_vert:Om,meshphong_frag:Bm,meshphysical_vert:zm,meshphysical_frag:Hm,meshtoon_vert:km,meshtoon_frag:Gm,points_vert:Vm,points_frag:Wm,shadow_vert:Xm,shadow_frag:qm,sprite_vert:Ym,sprite_frag:Zm},me={common:{diffuse:{value:new ve(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ve(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ve(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new ve(16777215)},opacity:{value:1},center:{value:new ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},Bn={basic:{uniforms:Yt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Yt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new ve(0)},envMapIntensity:{value:1}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Yt([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new ve(0)},specular:{value:new ve(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Yt([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new ve(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Yt([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new ve(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Yt([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Yt([me.points,me.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Yt([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Yt([me.common,me.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Yt([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Yt([me.sprite,me.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distance:{uniforms:Yt([me.common,me.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distance_vert,fragmentShader:ke.distance_frag},shadow:{uniforms:Yt([me.lights,me.fog,{color:{value:new ve(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};Bn.physical={uniforms:Yt([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Ne},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new ve(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new ve(0)},specularColor:{value:new ve(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};var tl={r:0,b:0,g:0},Jm=new et,nd=new Ne;nd.set(-1,0,0,0,1,0,0,0,1);function $m(i,e,t,n,s,r){let a=new ve(0),o=s===!0?0:1,c,l,h=null,f=0,u=null;function p(y){let T=y.isScene===!0?y.background:null;if(T&&T.isTexture){let S=y.backgroundBlurriness>0;T=e.get(T,S)}return T}function _(y){let T=!1,S=p(y);S===null?m(a,o):S&&S.isColor&&(m(S,1),T=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?t.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(y,T){let S=p(T);S&&S.isCubeTexture?(l===void 0&&(l=new Ke(new Ms(1,1,1),new tt({name:"BackgroundCubeMaterial",uniforms:Wi(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:Bt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(A,w,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=S,l.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Jm.makeRotationFromEuler(T.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(nd),l.material.toneMapped=Ge.getTransfer(S.colorSpace)!==Qe,(h!==S||f!==S.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=S,f=S.version,u=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Ke(new Ni(2,2),new tt({name:"BackgroundMaterial",uniforms:Wi(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:_i,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.toneMapped=Ge.getTransfer(S.colorSpace)!==Qe,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=S,f=S.version,u=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,T){y.getRGB(tl,Tc(i)),t.buffers.color.setClear(tl.r,tl.g,tl.b,T,r)}function d(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(y,T=1){a.set(y),o=T,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(y){o=y,m(a,o)},render:_,addToRenderList:M,dispose:d}}function Km(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(U,H,Y,L,X){let K=!1,G=f(U,L,Y,H);r!==G&&(r=G,l(r.object)),K=p(U,L,Y,X),K&&_(U,L,Y,X),X!==null&&e.update(X,i.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,S(U,H,Y,L),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function c(){return i.createVertexArray()}function l(U){return i.bindVertexArray(U)}function h(U){return i.deleteVertexArray(U)}function f(U,H,Y,L){let X=L.wireframe===!0,K=n[H.id];K===void 0&&(K={},n[H.id]=K);let G=U.isInstancedMesh===!0?U.id:0,ne=K[G];ne===void 0&&(ne={},K[G]=ne);let W=ne[Y.id];W===void 0&&(W={},ne[Y.id]=W);let j=W[X];return j===void 0&&(j=u(c()),W[X]=j),j}function u(U){let H=[],Y=[],L=[];for(let X=0;X<t;X++)H[X]=0,Y[X]=0,L[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:Y,attributeDivisors:L,object:U,attributes:{},index:null}}function p(U,H,Y,L){let X=r.attributes,K=H.attributes,G=0,ne=Y.getAttributes();for(let W in ne)if(ne[W].location>=0){let ee=X[W],Ee=K[W];if(Ee===void 0&&(W==="instanceMatrix"&&U.instanceMatrix&&(Ee=U.instanceMatrix),W==="instanceColor"&&U.instanceColor&&(Ee=U.instanceColor)),ee===void 0||ee.attribute!==Ee||Ee&&ee.data!==Ee.data)return!0;G++}return r.attributesNum!==G||r.index!==L}function _(U,H,Y,L){let X={},K=H.attributes,G=0,ne=Y.getAttributes();for(let W in ne)if(ne[W].location>=0){let ee=K[W];ee===void 0&&(W==="instanceMatrix"&&U.instanceMatrix&&(ee=U.instanceMatrix),W==="instanceColor"&&U.instanceColor&&(ee=U.instanceColor));let Ee={};Ee.attribute=ee,ee&&ee.data&&(Ee.data=ee.data),X[W]=Ee,G++}r.attributes=X,r.attributesNum=G,r.index=L}function M(){let U=r.newAttributes;for(let H=0,Y=U.length;H<Y;H++)U[H]=0}function m(U){d(U,0)}function d(U,H){let Y=r.newAttributes,L=r.enabledAttributes,X=r.attributeDivisors;Y[U]=1,L[U]===0&&(i.enableVertexAttribArray(U),L[U]=1),X[U]!==H&&(i.vertexAttribDivisor(U,H),X[U]=H)}function y(){let U=r.newAttributes,H=r.enabledAttributes;for(let Y=0,L=H.length;Y<L;Y++)H[Y]!==U[Y]&&(i.disableVertexAttribArray(Y),H[Y]=0)}function T(U,H,Y,L,X,K,G){G===!0?i.vertexAttribIPointer(U,H,Y,X,K):i.vertexAttribPointer(U,H,Y,L,X,K)}function S(U,H,Y,L){M();let X=L.attributes,K=Y.getAttributes(),G=H.defaultAttributeValues;for(let ne in K){let W=K[ne];if(W.location>=0){let j=X[ne];if(j===void 0&&(ne==="instanceMatrix"&&U.instanceMatrix&&(j=U.instanceMatrix),ne==="instanceColor"&&U.instanceColor&&(j=U.instanceColor)),j!==void 0){let ee=j.normalized,Ee=j.itemSize,Fe=e.get(j);if(Fe===void 0)continue;let J=Fe.buffer,ge=Fe.type,Se=Fe.bytesPerElement,Re=ge===i.INT||ge===i.UNSIGNED_INT||j.gpuType===go;if(j.isInterleavedBufferAttribute){let _e=j.data,Be=_e.isInterleavedBuffer===!0?_e.stride:_e.itemSize,bt=j.offset;if(_e.isInstancedInterleavedBuffer||_e.isInstancedBufferAttribute){for(let De=0;De<W.locationSize;De++)d(W.location+De,_e.meshPerAttribute);U.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let De=0;De<W.locationSize;De++)m(W.location+De);i.bindBuffer(i.ARRAY_BUFFER,J);for(let De=0;De<W.locationSize;De++)T(W.location+De,Ee/W.locationSize,ge,ee,Be*Se,(bt+Ee/W.locationSize*De)*Se,Re)}else{if(j.isInstancedBufferAttribute){for(let _e=0;_e<W.locationSize;_e++)d(W.location+_e,j.meshPerAttribute);U.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let _e=0;_e<W.locationSize;_e++)m(W.location+_e);i.bindBuffer(i.ARRAY_BUFFER,J);for(let _e=0;_e<W.locationSize;_e++)T(W.location+_e,Ee/W.locationSize,ge,ee,Ee*Se,Ee/W.locationSize*_e*Se,Re)}}else if(G!==void 0){let ee=G[ne];if(ee!==void 0)switch(ee.length){case 2:i.vertexAttrib2fv(W.location,ee);break;case 3:i.vertexAttrib3fv(W.location,ee);break;case 4:i.vertexAttrib4fv(W.location,ee);break;default:i.vertexAttrib1fv(W.location,ee)}}}}y()}function A(){F();for(let U in n){let H=n[U];for(let Y in H){let L=H[Y];for(let X in L){let K=L[X];for(let G in K)h(K[G].object),delete K[G];delete L[X]}}delete n[U]}}function w(U){if(n[U.id]===void 0)return;let H=n[U.id];for(let Y in H){let L=H[Y];for(let X in L){let K=L[X];for(let G in K)h(K[G].object),delete K[G];delete L[X]}}delete n[U.id]}function g(U){for(let H in n){let Y=n[H];for(let L in Y){let X=Y[L];if(X[U.id]===void 0)continue;let K=X[U.id];for(let G in K)h(K[G].object),delete K[G];delete X[U.id]}}}function b(U){for(let H in n){let Y=n[H],L=U.isInstancedMesh===!0?U.id:0,X=Y[L];if(X!==void 0){for(let K in X){let G=X[K];for(let ne in G)h(G[ne].object),delete G[ne];delete X[K]}delete Y[L],Object.keys(Y).length===0&&delete n[H]}}}function F(){P(),a=!0,r!==s&&(r=s,l(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:F,resetDefaultState:P,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfObject:b,releaseStatesOfProgram:g,initAttributes:M,enableAttribute:m,disableUnusedAttributes:y}}function Qm(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let p=0;p<h;p++)u+=l[p];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function jm(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let g=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(g){return!(g!==An&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(g){let b=g===vt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(g!==nn&&g!==vn&&!b&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(g){if(g==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(Ie("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&Ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&Ie("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:y,maxVaryings:T,maxFragmentUniforms:S,maxSamples:A,samples:w}}function eg(i){let e=this,t=null,n=0,s=!1,r=!1,a=new En,o=new Ne,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let p=f.length!==0||u||n!==0||s;return s=u,n=f.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,p){let _=f.clippingPlanes,M=f.clipIntersection,m=f.clipShadows,d=i.get(f);if(!s||_===null||_.length===0||r&&!m)r?h(null):l();else{let y=r?0:n,T=y*4,S=d.clippingState||null;c.value=S,S=h(_,u,T,p);for(let A=0;A!==T;++A)S[A]=t[A];d.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,u,p,_){let M=f!==null?f.length:0,m=null;if(M!==0){if(m=c.value,_!==!0||m===null){let d=p+M*4,y=u.matrixWorldInverse;o.getNormalMatrix(y),(m===null||m.length<d)&&(m=new Float32Array(d));for(let T=0,S=p;T!==M;++T,S+=4)a.copy(f[T]).applyMatrix4(y,o),a.normal.toArray(m,S),m[S+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,m}}var qr=class extends ft{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new pr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ms(5,5,5),r=new tt({name:"CubemapFromEquirect",uniforms:Wi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Bt,blending:cn});r.uniforms.tEquirect.value=t;let a=new Ke(s,r),o=t.minFilter;return t.minFilter===jn&&(t.minFilter=Kt),new Rs(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Nu=256,tg=3,ng=20,id=256,sd=16,ig=3,sg=new D,rg=new ve,il=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Rs(1,10,null),this._boxMesh=new Ke(new Ms(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=sg}=r,c=this._renderer;this._setSize(a);let l=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let f=c.autoClear,u=c.autoClearColor,p=c.autoClearDepth,_=c.autoClearStencil,M=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,M===null&&(e.background=c.getClearColor(rg));let m=new Rs(n,s,h);return m.position.copy(o),m.update(c,e),c.autoClear=f,c.autoClearColor=u,c.autoClearDepth=p,c.autoClearStencil=_,e.background=M,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ou(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Nu,Au(e))}_fromTexture(e,t){e.mapping===ki||e.mapping===Ds?this._setSize(e.image.length===0?Nu:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Uu(e,!1,!1),n=Math.log2(e)-tg;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Uu(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===ki||e.mapping===Ds?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ou()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Fu()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=ag(),this._integrationMaterial=og());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/sd);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-ig)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let c=o>0?Math.log2(t)+.5*Math.log2(6/(id*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=lg());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function Uu(i,e,t){return new qr(i,{minFilter:jn,generateMipmaps:e,type:vt,colorSpace:js,depthBuffer:t})}function Yr(i,e,t){return new tt({name:i,uniforms:e,vertexShader:ke.cube_vert,fragmentShader:t,side:Bt,blending:cn,depthTest:!1,depthWrite:!1})}function ag(){return Yr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${id}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function og(){return Yr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:sd}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function lg(){return Yr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${ng}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Fu(){return Yr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Ou(){return Yr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function cg(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,p=!1){return u==null?null:p?a(u):r(u)}function r(u){if(u&&u.isTexture){let p=u.mapping;if(p===fo||p===po)if(e.has(u)){let _=e.get(u).texture;return o(_,u.mapping)}else{let _=u.image;if(_&&_.height>0){let M=new qr(_.height);return M.fromEquirectangularTexture(i,u),e.set(u,M),u.addEventListener("dispose",l),o(M.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let p=u.mapping,_=p===fo||p===po,M=p===ki||p===Ds;if(_||M){let m=t.get(u),d=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==d)return n===null&&(n=new il(i)),m=_?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),m.texture;if(m!==void 0)return m.texture;{let y=u.image;return _&&y&&y.height>0||M&&y&&c(y)?(n===null&&(n=new il(i)),m=_?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,t.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,p){return p===fo?u.mapping=ki:p===po&&(u.mapping=Ds),u}function c(u){let p=0,_=6;for(let M=0;M<_;M++)u[M]!==void 0&&p++;return p===_}function l(u){let p=u.target;p.removeEventListener("dispose",l);let _=e.get(p);_!==void 0&&(e.delete(p),_.dispose())}function h(u){let p=u.target;p.removeEventListener("dispose",h);let _=t.get(p);_!==void 0&&(t.delete(p),_.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function hg(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Pi("WebGLRenderer: "+n+" extension not supported."),s}}}function ug(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(_=>delete s[_]);function o(_){c(_.target)}function c(_){_.index!==null&&e.remove(_.index);for(let m in _.attributes)e.remove(_.attributes[m]);_.removeEventListener("dispose",o),delete s[_.id],a.unregister(_);let M=r.get(_);M&&(e.remove(M),r.delete(_)),n.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function l(_,M){return s[M.id]!==void 0||(M.addEventListener("dispose",o),s[M.id]=new WeakRef(M),a.register(M,M.id,M),t.memory.geometries++),M}function h(_){let M=_.attributes;for(let m in M)e.update(M[m],i.ARRAY_BUFFER)}function f(_){let M=_.index,m=_.attributes.position,d=0;if(m===void 0)return;let y=M!==null?M.array.length:m.array.length/3-1,T=m.count>=65535?or:ar,S=new T(Math.ceil(y/3)*6,1),A=S.array;if(M!==null){let g=M.array;d=M.version;for(let b=0,F=0;b<y;b+=3){let P=g[b+0],U=g[b+1],H=g[b+2];A[F++]=P,A[F++]=U,A[F++]=U,A[F++]=H,A[F++]=H,A[F++]=P}}else{d=m.version;for(let g=0,b=0;g<y;g+=3){let F=g+0,P=g+1,U=g+2;A[b++]=F,A[b++]=P,A[b++]=P,A[b++]=U,A[b++]=U,A[b++]=F}}S.version=d;let w=r.get(_);w&&e.remove(w),r.set(_,S)}function u(_){let M=r.get(_);if(M){let m=_.index;m!==null&&M.version<m.version&&f(_)}else f(_);return r.get(_)}function p(){for(let _ in s){let M=s[_].deref();M!==void 0&&c(M)}}return{get:l,update:h,getWireframeAttribute:u,dispose:p}}function dg(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,u){i.drawElements(n,u,r,f*a),t.update(u,n,1)}function l(f,u,p){p!==0&&(i.drawElementsInstanced(n,u,r,f*a,p),t.update(u,n,p))}function h(f,u,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,p);let M=0;for(let m=0;m<p;m++)M+=u[m];t.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function fg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Le("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function pg(i,e,t){let n=new WeakMap,s=new dt;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==f){let F=function(){g.dispose(),n.delete(o),o.removeEventListener("dispose",F)};u!==void 0&&u.texture.dispose();let p=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],y=o.morphAttributes.color||[],T=0;p===!0&&(T=1),_===!0&&(T=2),M===!0&&(T=3);let S=o.attributes.position.count*T,A=1;S>e.maxTextureSize&&(A=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let w=new Float32Array(S*A*4*f),g=new ir(w,S,A,f);g.type=vn,g.needsUpdate=!0;let b=T*4;for(let P=0;P<f;P++){let U=m[P],H=d[P],Y=y[P],L=S*A*4*P;for(let X=0;X<U.count;X++){let K=X*b;p===!0&&(s.fromBufferAttribute(U,X),w[L+K+0]=s.x,w[L+K+1]=s.y,w[L+K+2]=s.z,w[L+K+3]=0),_===!0&&(s.fromBufferAttribute(H,X),w[L+K+4]=s.x,w[L+K+5]=s.y,w[L+K+6]=s.z,w[L+K+7]=0),M===!0&&(s.fromBufferAttribute(Y,X),w[L+K+8]=s.x,w[L+K+9]=s.y,w[L+K+10]=s.z,w[L+K+11]=Y.itemSize===4?s.w:1)}}u={count:f,texture:g,size:new ye(S,A)},n.set(o,u),o.addEventListener("dispose",F)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let M=0;M<l.length;M++)p+=l[M];let _=o.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",_),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function mg(i,e,t,n,s){let r=new WeakMap;function a(l){let h=s.render.frame,f=l.geometry,u=e.get(l,f);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let p=l.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return u}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var gg={[Ir]:"LINEAR_TONE_MAPPING",[Dr]:"REINHARD_TONE_MAPPING",[Lr]:"CINEON_TONE_MAPPING",[Hi]:"ACES_FILMIC_TONE_MAPPING",[Ur]:"AGX_TONE_MAPPING",[Fr]:"NEUTRAL_TONE_MAPPING",[Nr]:"CUSTOM_TONE_MAPPING"};function _g(i,e,t,n,s,r){let a=new ft(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=null,h=new pt;h.setAttribute("position",new Ze([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ze([0,2,0,0,2,0],2));let f=new Ts({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Ke(h,f),p=new Oi(-1,1,1,-1,0,1),_=null,M=null,m=!1,d,y=null,T=[],S=!1;this.setSize=function(A,w){a.setSize(A,w),o!==null&&o.setSize(A,w),c!==null&&c.setSize(A,w);for(let g=0;g<T.length;g++){let b=T[g];b.setSize&&b.setSize(A,w)}},this.setEffects=function(A){T=A,S=T.length>0&&T[0].isRenderPass===!0;let w=a.width,g=a.height;T.length>0&&o===null&&(o=new ft(w,g,{type:vt,depthBuffer:!1,stencilBuffer:!1}),c=new ft(w,g,{type:vt,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&T.some(F=>F.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&l===null&&(l=new $n(w,g),r===!0&&(l.format=ei,l.type=Gi)),a.dispose(),a.depthTexture=b?l:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let F=0;F<T.length;F++){let P=T[F];P.setSize&&P.setSize(w,g),b&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(l)}},this.begin=function(A,w){if(m||A.toneMapping===Fn&&T.length===0)return!1;if(y=w,w!==null){let g=w.width,b=w.height;(a.width!==g||a.height!==b)&&this.setSize(g,b)}return S===!1&&A.setRenderTarget(a),d=A.toneMapping,A.toneMapping=Fn,!0},this.hasRenderPass=function(){return S},this.end=function(A,w){A.toneMapping=d,m=!0;let g=a,b=o;for(let F=0;F<T.length;F++){let P=T[F];P.enabled!==!1&&(P.render(A,b,g,w),P.needsSwap!==!1&&(g=b,b=b===o?c:o))}if(_!==A.outputColorSpace||M!==A.toneMapping){_=A.outputColorSpace,M=A.toneMapping,f.defines={},Ge.getTransfer(_)===Qe&&(f.defines.SRGB_TRANSFER="");let F=gg[M];F&&(f.defines[F]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=g.texture,A.setRenderTarget(y),A.render(u,p),y=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),f.dispose()}}var rd=new Qt,ad=new $n(1,1),od=new gr(1),ld=new ir,cd=new Ya,hd=new pr,Bu=[],zu=[],Hu=new Float32Array(16),ku=new Float32Array(9),Gu=new Float32Array(4);function Us(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Bu[s];if(r===void 0&&(r=new Float32Array(s),Bu[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Ct(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Rt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function rl(i,e){let t=zu[e];t===void 0&&(t=new Int32Array(e),zu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function xg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function vg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2fv(this.addr,e),Rt(t,e)}}function yg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Ct(t,e))return;i.uniform3fv(this.addr,e),Rt(t,e)}}function Mg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4fv(this.addr,e),Rt(t,e)}}function Sg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Rt(t,e)}else{if(Ct(t,n))return;Gu.set(n),i.uniformMatrix2fv(this.addr,!1,Gu),Rt(t,n)}}function bg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Rt(t,e)}else{if(Ct(t,n))return;ku.set(n),i.uniformMatrix3fv(this.addr,!1,ku),Rt(t,n)}}function Tg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Ct(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Rt(t,e)}else{if(Ct(t,n))return;Hu.set(n),i.uniformMatrix4fv(this.addr,!1,Hu),Rt(t,n)}}function Eg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function wg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2iv(this.addr,e),Rt(t,e)}}function Ag(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;i.uniform3iv(this.addr,e),Rt(t,e)}}function Cg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4iv(this.addr,e),Rt(t,e)}}function Rg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Pg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Ct(t,e))return;i.uniform2uiv(this.addr,e),Rt(t,e)}}function Ig(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Ct(t,e))return;i.uniform3uiv(this.addr,e),Rt(t,e)}}function Dg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Ct(t,e))return;i.uniform4uiv(this.addr,e),Rt(t,e)}}function al(i){return i.version===0&&(i.compareFunction=yc,i.needsUpdate=!0),i}function Lg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=al(ad):r=rd,t.setTexture2D(e||r,s)}function Ng(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||cd,s)}function Ug(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=al(od):r=hd,t.setTextureCube(e||r,s)}function Fg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||ld,s)}function Og(i){switch(i){case 5126:return xg;case 35664:return vg;case 35665:return yg;case 35666:return Mg;case 35674:return Sg;case 35675:return bg;case 35676:return Tg;case 5124:case 35670:return Eg;case 35667:case 35671:return wg;case 35668:case 35672:return Ag;case 35669:case 35673:return Cg;case 5125:return Rg;case 36294:return Pg;case 36295:return Ig;case 36296:return Dg;case 35678:case 36198:case 36298:case 36306:case 35682:return Lg;case 35679:case 36299:case 36307:return Ng;case 35680:case 36300:case 36308:case 36293:return Ug;case 36289:case 36303:case 36311:case 36292:return Fg}}function Bg(i,e){i.uniform1fv(this.addr,e)}function zg(i,e){let t=Us(e,this.size,2);i.uniform2fv(this.addr,t)}function Hg(i,e){let t=Us(e,this.size,3);i.uniform3fv(this.addr,t)}function kg(i,e){let t=Us(e,this.size,4);i.uniform4fv(this.addr,t)}function Gg(i,e){let t=Us(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Vg(i,e){let t=Us(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Wg(i,e){let t=Us(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Xg(i,e){i.uniform1iv(this.addr,e)}function qg(i,e){i.uniform2iv(this.addr,e)}function Yg(i,e){i.uniform3iv(this.addr,e)}function Zg(i,e){i.uniform4iv(this.addr,e)}function Jg(i,e){i.uniform1uiv(this.addr,e)}function $g(i,e){i.uniform2uiv(this.addr,e)}function Kg(i,e){i.uniform3uiv(this.addr,e)}function Qg(i,e){i.uniform4uiv(this.addr,e)}function jg(i,e,t){let n=this.cache,s=e.length,r=rl(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Rt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=al(ad):a=rd;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function e0(i,e,t){let n=this.cache,s=e.length,r=rl(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Rt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||cd,r[a])}function t0(i,e,t){let n=this.cache,s=e.length,r=rl(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Rt(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=al(od):a=hd;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function n0(i,e,t){let n=this.cache,s=e.length,r=rl(t,s);Ct(n,r)||(i.uniform1iv(this.addr,r),Rt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||ld,r[a])}function i0(i){switch(i){case 5126:return Bg;case 35664:return zg;case 35665:return Hg;case 35666:return kg;case 35674:return Gg;case 35675:return Vg;case 35676:return Wg;case 5124:case 35670:return Xg;case 35667:case 35671:return qg;case 35668:case 35672:return Yg;case 35669:case 35673:return Zg;case 5125:return Jg;case 36294:return $g;case 36295:return Kg;case 36296:return Qg;case 35678:case 36198:case 36298:case 36306:case 35682:return jg;case 35679:case 36299:case 36307:return e0;case 35680:case 36300:case 36308:case 36293:return t0;case 36289:case 36303:case 36311:case 36292:return n0}}var Uc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Og(t.type)}},Fc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=i0(t.type)}},Oc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Lc=/(\w+)(\])?(\[|\.)?/g;function Vu(i,e){i.seq.push(e),i.map[e.id]=e}function s0(i,e,t){let n=i.name,s=n.length;for(Lc.lastIndex=0;;){let r=Lc.exec(n),a=Lc.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){Vu(t,l===void 0?new Uc(o,i,e):new Fc(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new Oc(o),Vu(t,f)),t=f}}}var Ns=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);s0(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Wu(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var r0=37297,a0=0;function o0(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Xu=new Ne;function l0(i){Ge._getMatrix(Xu,Ge.workingColorSpace,i);let e=`mat3( ${Xu.elements.map(t=>t.toFixed(4))} )`;switch(Ge.getTransfer(i)){case er:return[e,"LinearTransferOETF"];case Qe:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function qu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+o0(i.getShaderSource(e),o)}else return r}function c0(i,e){let t=l0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var h0={[Ir]:"Linear",[Dr]:"Reinhard",[Lr]:"Cineon",[Hi]:"ACESFilmic",[Ur]:"AgX",[Fr]:"Neutral",[Nr]:"Custom"};function u0(i,e){let t=h0[e];return t===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var nl=new D;function d0(){Ge.getLuminanceCoefficients(nl);let i=nl.x.toFixed(4),e=nl.y.toFixed(4),t=nl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function f0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Xr).join(`
`)}function p0(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function m0(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Xr(i){return i!==""}function Yu(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Zu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var g0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bc(i){return i.replace(g0,_0)}function _0(i,e){let t=ke[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Bc(t)}var x0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ju(i){return i.replace(x0,v0)}function v0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function $u(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var y0={[Bi]:"SHADOWMAP_TYPE_PCF",[Ps]:"SHADOWMAP_TYPE_VSM"};function M0(i){return y0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var S0={[Ds]:"ENVMAP_MODE_REFRACTION"};function b0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":S0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var T0={[cc]:"ENVMAP_BLENDING_MULTIPLY",[du]:"ENVMAP_BLENDING_MIX",[fu]:"ENVMAP_BLENDING_ADD"};function E0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":T0[i.combine]||"ENVMAP_BLENDING_NONE"}function w0(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=M0(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=b0(t),f=E0(t),u=f0(t),p=p0(r),_=s.createProgram(),M,m,d=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(M=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Xr).join(`
`),M.length>0&&(M+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Xr).join(`
`),m.length>0&&(m+=`
`)):(M=[$u(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Xr).join(`
`),m=[$u(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Fn?"#define TONE_MAPPING":"",t.toneMapping!==Fn?ke.tonemapping_pars_fragment:"",t.toneMapping!==Fn?u0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.colorspace_pars_fragment,c0("linearToOutputTexel",t.outputColorSpace),d0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Xr).join(`
`)),a=Bc(a),a=Yu(a,t),a=Zu(a,t),o=Bc(o),o=Yu(o,t),o=Zu(o,t),a=Ju(a),o=Ju(o),t.isRawShaderMaterial!==!0&&(d=`#version 300 es
`,M=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,m=["#define varying in",t.glslVersion===bc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let y=d+M+a,T=d+m+o,S=Wu(s,s.VERTEX_SHADER,y),A=Wu(s,s.FRAGMENT_SHADER,T);s.attachShader(_,S),s.attachShader(_,A),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(P){if(i.debug.checkShaderErrors){let U=s.getProgramInfoLog(_)||"",H=s.getShaderInfoLog(S)||"",Y=s.getShaderInfoLog(A)||"",L=U.trim(),X=H.trim(),K=Y.trim(),G=!0,ne=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,S,A);else{let W=qu(s,S,"vertex"),j=qu(s,A,"fragment");Le("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+L+`
`+W+`
`+j)}else L!==""?Ie("WebGLProgram: Program Info Log:",L):(X===""||K==="")&&(ne=!1);ne&&(P.diagnostics={runnable:G,programLog:L,vertexShader:{log:X,prefix:M},fragmentShader:{log:K,prefix:m}})}s.deleteShader(S),s.deleteShader(A),g=new Ns(s,_),b=m0(s,_)}let g;this.getUniforms=function(){return g===void 0&&w(this),g};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let F=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return F===!1&&(F=s.getProgramParameter(_,r0)),F},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=a0++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=S,this.fragmentShader=A,this}var A0=0,zc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Hc(e),t.set(e,n)),n}},Hc=class{constructor(e){this.id=A0++,this.code=e,this.usedTimes=0}};function C0(i){return i===xi||i===Gr||i===Vr}function R0(i,e,t,n,s,r){let a=new gs,o=new zc,c=new Set,l=[],h=new Map,f=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(g){return c.add(g),g===0?"uv":`uv${g}`}function _(g,b,F,P,U,H){let Y=P.fog,L=U.geometry,X=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?P.environment:null,K=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,G=e.get(g.envMap||X,K),ne=u[g.type],W=n.precision;g.precision!==null&&(W=n.getMaxPrecision(g.precision),W!==g.precision&&Ie("WebGLProgram.getParameters:",g.precision,"not supported, using",W,"instead."));let j=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,ee=j!==void 0?j.length:0,Ee=0;L.morphAttributes.position!==void 0&&(Ee=1),L.morphAttributes.normal!==void 0&&(Ee=2),L.morphAttributes.color!==void 0&&(Ee=3);let Fe,J,ge,Se;if(ne){let pe=Bn[ne];Fe=pe.vertexShader,J=pe.fragmentShader}else{Fe=g.vertexShader,J=g.fragmentShader;let pe=o.getVertexShaderStage(g),it=o.getFragmentShaderStage(g);o.update(g,pe,it),ge=pe.id,Se=it.id}let Re=i.getRenderTarget(),_e=i.state.buffers.depth.getReversed(),Be=U.isInstancedMesh===!0,bt=U.isBatchedMesh===!0,De=!!g.map,nt=!!g.matcap,st=!!G,We=st&&G.isPMREMTexture===!0,Ut=!!g.aoMap,wt=!!g.lightMap,tn=!!g.bumpMap&&g.wireframe===!1,mt=!!g.normalMap,Rn=!!g.displacementMap,It=!!g.emissiveMap,un=!!g.metalnessMap,dn=!!g.roughnessMap,fn=g.anisotropy>0,N=g.clearcoat>0,pn=g.diffuseRoughness>0,ct=g.dispersion>0,ht=g.retroreflectivity>0,de=g.iridescence>0,At=g.sheen>0,Pe=g.transmission>0,Ue=fn&&!!g.anisotropyMap,E=N&&!!g.clearcoatMap,x=N&&!!g.clearcoatNormalMap,B=N&&!!g.clearcoatRoughnessMap,te=pn&&!!g.diffuseRoughnessMap,Q=de&&!!g.iridescenceMap,re=de&&!!g.iridescenceThicknessMap,he=At&&!!g.sheenColorMap,q=At&&!!g.sheenRoughnessMap,Z=!!g.specularMap,oe=!!g.specularColorMap,R=!!g.specularIntensityMap,$=Pe&&!!g.transmissionMap,V=Pe&&!!g.thicknessMap,le=!!g.gradientMap,se=!!g.alphaMap,ae=g.alphaTest>0,Ae=!!g.alphaHash,He=!!g.extensions,ie=Fn;g.toneMapped&&(Re===null||Re.isXRRenderTarget===!0)&&(ie=i.toneMapping);let Ce=We?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,ze={shaderID:ne,shaderType:g.type,shaderName:g.name,vertexShader:Fe,fragmentShader:J,defines:g.defines,customVertexShaderID:ge,customFragmentShaderID:Se,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:W,batching:bt,batchingColor:bt&&U._colorsTexture!==null,instancing:Be,instancingColor:Be&&U.instanceColor!==null,instancingMorph:Be&&U.morphTexture!==null,outputColorSpace:Re===null?i.outputColorSpace:Re.isXRRenderTarget===!0?Re.texture.colorSpace:Ge.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:De,matcap:nt,envMap:st,envMapMode:st&&G.mapping,envMapPMREM:We,envMapMaxLod:We?Ce.length-1:null,envMapSize:We?Ce[0].width:null,aoMap:Ut,lightMap:wt,bumpMap:tn,normalMap:mt,displacementMap:Rn,emissiveMap:It,normalMapObjectSpace:mt&&g.normalMapType===gu,normalMapTangentSpace:mt&&g.normalMapType===jo,packedNormalMap:mt&&g.normalMapType===jo&&C0(g.normalMap.format),metalnessMap:un,roughnessMap:dn,anisotropy:fn,anisotropyMap:Ue,clearcoat:N,clearcoatMap:E,clearcoatNormalMap:x,clearcoatRoughnessMap:B,diffuseRoughness:pn,diffuseRoughnessMap:te,dispersion:ct,retroreflection:ht,iridescence:de,iridescenceMap:Q,iridescenceThicknessMap:re,sheen:At,sheenColorMap:he,sheenRoughnessMap:q,specularMap:Z,specularColorMap:oe,specularIntensityMap:R,transmission:Pe,transmissionMap:$,thicknessMap:V,gradientMap:le,opaque:g.transparent===!1&&g.blending===Is&&g.alphaToCoverage===!1,alphaMap:se,alphaTest:ae,alphaHash:Ae,combine:g.combine,mapUv:De&&p(g.map.channel),aoMapUv:Ut&&p(g.aoMap.channel),lightMapUv:wt&&p(g.lightMap.channel),bumpMapUv:tn&&p(g.bumpMap.channel),normalMapUv:mt&&p(g.normalMap.channel),displacementMapUv:Rn&&p(g.displacementMap.channel),emissiveMapUv:It&&p(g.emissiveMap.channel),metalnessMapUv:un&&p(g.metalnessMap.channel),roughnessMapUv:dn&&p(g.roughnessMap.channel),anisotropyMapUv:Ue&&p(g.anisotropyMap.channel),clearcoatMapUv:E&&p(g.clearcoatMap.channel),clearcoatNormalMapUv:x&&p(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&p(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:te&&p(g.diffuseRoughnessMap.channel),iridescenceMapUv:Q&&p(g.iridescenceMap.channel),iridescenceThicknessMapUv:re&&p(g.iridescenceThicknessMap.channel),sheenColorMapUv:he&&p(g.sheenColorMap.channel),sheenRoughnessMapUv:q&&p(g.sheenRoughnessMap.channel),specularMapUv:Z&&p(g.specularMap.channel),specularColorMapUv:oe&&p(g.specularColorMap.channel),specularIntensityMapUv:R&&p(g.specularIntensityMap.channel),transmissionMapUv:$&&p(g.transmissionMap.channel),thicknessMapUv:V&&p(g.thicknessMap.channel),alphaMapUv:se&&p(g.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(mt||fn),vertexNormals:!!L.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!L.attributes.uv&&(De||se),fog:!!Y,useFog:g.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||L.attributes.normal===void 0&&mt===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:_e,skinning:U.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:Ee,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:H.filter(pe=>pe.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:ie,decodeVideoTexture:De&&g.map.isVideoTexture===!0&&Ge.getTransfer(g.map.colorSpace)===Qe,decodeVideoTextureEmissive:It&&g.emissiveMap.isVideoTexture===!0&&Ge.getTransfer(g.emissiveMap.colorSpace)===Qe,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===ln,flipSided:g.side===Bt,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:He&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&g.extensions.multiDraw===!0||bt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return ze.vertexUv1s=c.has(1),ze.vertexUv2s=c.has(2),ze.vertexUv3s=c.has(3),c.clear(),ze}function M(g){let b=[];if(g.shaderID?b.push(g.shaderID):(b.push(g.customVertexShaderID),b.push(g.customFragmentShaderID)),g.defines!==void 0)for(let F in g.defines)b.push(F),b.push(g.defines[F]);return g.isRawShaderMaterial===!1&&(m(b,g),d(b,g),b.push(i.outputColorSpace)),b.push(g.customProgramCacheKey),b.join()}function m(g,b){g.push(b.precision),g.push(b.outputColorSpace),g.push(b.envMapMode),g.push(b.envMapPMREM),g.push(b.envMapMaxLod),g.push(b.envMapSize),g.push(b.mapUv),g.push(b.alphaMapUv),g.push(b.lightMapUv),g.push(b.aoMapUv),g.push(b.bumpMapUv),g.push(b.normalMapUv),g.push(b.displacementMapUv),g.push(b.emissiveMapUv),g.push(b.metalnessMapUv),g.push(b.roughnessMapUv),g.push(b.anisotropyMapUv),g.push(b.clearcoatMapUv),g.push(b.clearcoatNormalMapUv),g.push(b.clearcoatRoughnessMapUv),g.push(b.diffuseRoughnessMapUv),g.push(b.iridescenceMapUv),g.push(b.iridescenceThicknessMapUv),g.push(b.sheenColorMapUv),g.push(b.sheenRoughnessMapUv),g.push(b.specularMapUv),g.push(b.specularColorMapUv),g.push(b.specularIntensityMapUv),g.push(b.transmissionMapUv),g.push(b.thicknessMapUv),g.push(b.combine),g.push(b.fogExp2),g.push(b.sizeAttenuation),g.push(b.morphTargetsCount),g.push(b.numSunLights),g.push(b.numDirLights),g.push(b.numPointLights),g.push(b.numSpotLights),g.push(b.numSpotLightMaps),g.push(b.numHemiLights),g.push(b.numRectAreaLights),g.push(b.numSunLightShadows),g.push(b.numDirLightShadows),g.push(b.numPointLightShadows),g.push(b.numSpotLightShadows),g.push(b.numSpotLightShadowsWithMaps),g.push(b.numLightProbes),g.push(b.numLightProbeGrids),g.push(b.shadowMapType),g.push(b.toneMapping),g.push(b.numClippingPlanes),g.push(b.numClipIntersection),g.push(b.depthPacking)}function d(g,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function y(g){let b=u[g.type],F;if(b){let P=Bn[b];F=sn.clone(P.uniforms)}else F=g.uniforms;return F}function T(g,b){let F=h.get(b);return F!==void 0?++F.usedTimes:(F=new w0(i,b,g,s),l.push(F),h.set(b,F)),F}function S(g){if(--g.usedTimes===0){let b=l.indexOf(g);l[b]=l[l.length-1],l.pop(),h.delete(g.cacheKey),g.destroy()}}function A(g){o.remove(g)}function w(){o.dispose()}return{getParameters:_,getProgramCacheKey:M,getUniforms:y,acquireProgram:T,releaseProgram:S,releaseShaderCache:A,programs:l,dispose:w}}function P0(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function I0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Ku(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Qu(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let p=0;return u.isInstancedMesh&&(p+=2),u.isSkinnedMesh&&(p+=1),p}function o(u,p,_,M,m,d){let y=i[e];return y===void 0?(y={id:u.id,object:u,geometry:p,material:_,materialVariant:a(u),groupOrder:M,renderOrder:u.renderOrder,z:m,group:d},i[e]=y):(y.id=u.id,y.object=u,y.geometry=p,y.material=_,y.materialVariant=a(u),y.groupOrder=M,y.renderOrder=u.renderOrder,y.z=m,y.group=d),e++,y}function c(u,p,_,M,m,d,y){y.reversedDepth===!0&&(m=-m);let T=o(u,p,_,M,m,d);_.transmission>0?n.push(T):_.transparent===!0?s.push(T):t.push(T)}function l(u,p,_,M,m,d){let y=o(u,p,_,M,m,d);_.transmission>0?n.unshift(y):_.transparent===!0?s.unshift(y):t.unshift(y)}function h(u,p){t.length>1&&t.sort(u||I0),n.length>1&&n.sort(p||Ku),s.length>1&&s.sort(p||Ku)}function f(){for(let u=e,p=i.length;u<p;u++){let _=i[u];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:f,sort:h}}function D0(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Qu,i.set(n,[a])):s>=r.length?(a=new Qu,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function L0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new D,color:new ve};break;case"SpotLight":t={position:new D,direction:new D,color:new ve,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new ve,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new ve,groundColor:new ve};break;case"RectAreaLight":t={color:new ve,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function N0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var U0=0;function F0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function O0(i){let e=new L0,t=N0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new D);let s=new D,r=new et,a=new et;function o(l){let h=0,f=0,u=0;for(let H=0;H<9;H++)n.probe[H].set(0,0,0);let p=0,_=0,M=0,m=0,d=0,y=0,T=0,S=0,A=0,w=0,g=0,b=0,F=0,P=0;l.sort(F0);for(let H=0,Y=l.length;H<Y;H++){let L=l[H],X=L.color,K=L.intensity,G=L.distance,ne=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===xi?ne=L.shadow.map.texture:ne=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=X.r*K,f+=X.g*K,u+=X.b*K;else if(L.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(L.sh.coefficients[W],K);P++}else if(L.isSunLight){let W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let j=L.shadow,ee=t.get(L);ee.shadowIntensity=j.intensity,ee.shadowBias=j.bias,ee.shadowNormalBias=j.normalBias,ee.shadowRadius=j.radius,ee.shadowMapSize.copy(j.mapSize).multiply(j.getFrameExtents()),n.sunShadow[_]=ee,n.sunShadowMap[_]=ne;let Ee=j.getViewportCount();for(let Fe=0;Fe<Ee;Fe++)n.sunShadowMatrix[M+Fe]=j.getMatrix(Fe),n.sunShadowCascade[M+Fe]=j._cascadeData[Fe];M+=Ee,_++}n.sun[p]=W,p++}else if(L.isDirectionalLight){let W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let j=L.shadow,ee=t.get(L);ee.shadowIntensity=j.intensity,ee.shadowBias=j.bias,ee.shadowNormalBias=j.normalBias,ee.shadowRadius=j.radius,ee.shadowMapSize=j.mapSize,n.directionalShadow[m]=ee,n.directionalShadowMap[m]=ne,n.directionalShadowMatrix[m]=L.shadow.matrix,A++}n.directional[m]=W,m++}else if(L.isSpotLight){let W=e.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(X).multiplyScalar(K),W.distance=G,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,n.spot[y]=W;let j=L.shadow;if(L.map&&(n.spotLightMap[b]=L.map,b++,j.updateMatrices(L),L.castShadow&&F++),n.spotLightMatrix[y]=j.matrix,L.castShadow){let ee=t.get(L);ee.shadowIntensity=j.intensity,ee.shadowBias=j.bias,ee.shadowNormalBias=j.normalBias,ee.shadowRadius=j.radius,ee.shadowMapSize=j.mapSize,n.spotShadow[y]=ee,n.spotShadowMap[y]=ne,g++}y++}else if(L.isRectAreaLight){let W=e.get(L);W.color.copy(X).multiplyScalar(K),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),n.rectArea[T]=W,T++}else if(L.isPointLight){let W=e.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),W.distance=L.distance,W.decay=L.decay,L.castShadow){let j=L.shadow,ee=t.get(L);ee.shadowIntensity=j.intensity,ee.shadowBias=j.bias,ee.shadowNormalBias=j.normalBias,ee.shadowRadius=j.radius,ee.shadowMapSize=j.mapSize,ee.shadowCameraNear=j.camera.near,ee.shadowCameraFar=j.camera.far,n.pointShadow[d]=ee,n.pointShadowMap[d]=ne,n.pointShadowMatrix[d]=L.shadow.matrix,w++}n.point[d]=W,d++}else if(L.isHemisphereLight){let W=e.get(L);W.skyColor.copy(L.color).multiplyScalar(K),W.groundColor.copy(L.groundColor).multiplyScalar(K),n.hemi[S]=W,S++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=me.LTC_FLOAT_1,n.rectAreaLTC2=me.LTC_FLOAT_2):(n.rectAreaLTC1=me.LTC_HALF_1,n.rectAreaLTC2=me.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let U=n.hash;(U.sunLength!==p||U.directionalLength!==m||U.pointLength!==d||U.spotLength!==y||U.rectAreaLength!==T||U.hemiLength!==S||U.numSunShadows!==_||U.numDirectionalShadows!==A||U.numPointShadows!==w||U.numSpotShadows!==g||U.numSpotMaps!==b||U.numLightProbes!==P)&&(n.sun.length=p,n.directional.length=m,n.spot.length=y,n.rectArea.length=T,n.point.length=d,n.hemi.length=S,n.sunShadow.length=_,n.sunShadowMap.length=_,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=g,n.spotShadowMap.length=g,n.spotLightMatrix.length=g+b-F,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=F,n.numLightProbes=P,U.sunLength=p,U.directionalLength=m,U.pointLength=d,U.spotLength=y,U.rectAreaLength=T,U.hemiLength=S,U.numSunShadows=_,U.numDirectionalShadows=A,U.numPointShadows=w,U.numSpotShadows=g,U.numSpotMaps=b,U.numLightProbes=P,n.version=U0++)}function c(l,h){let f=0,u=0,p=0,_=0,M=0,m=0,d=h.matrixWorldInverse;for(let y=0,T=l.length;y<T;y++){let S=l[y];if(S.isSunLight){let A=n.sun[f];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(d),f++}else if(S.isDirectionalLight){let A=n.directional[u];A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(d),u++}else if(S.isSpotLight){let A=n.spot[_];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(d),A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(d),_++}else if(S.isRectAreaLight){let A=n.rectArea[M];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(d),a.identity(),r.copy(S.matrixWorld),r.premultiply(d),a.extractRotation(r),A.halfWidth.set(S.width*.5,0,0),A.halfHeight.set(0,S.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),M++}else if(S.isPointLight){let A=n.point[p];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(d),p++}else if(S.isHemisphereLight){let A=n.hemi[m];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(d),m++}}}return{setup:o,setupView:c,state:n}}function ju(i){let e=new O0(i),t=[],n=[],s=[];function r(f){h.camera=f,t.length=0,n.length=0,s.length=0}function a(f){f.isLightProbeGrid?s.push(f):t.push(f)}function o(f){n.push(f)}function c(){e.setup(t),s.sort((f,u)=>f.priority-u.priority||f.id-u.id)}function l(f){e.setupView(t,f)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function B0(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new ju(i),e.set(s,[o])):r>=a.length?(o=new ju(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var z0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,H0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,k0=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],G0=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],ed=new et,Wr=new D,Nc=new D;function V0(i,e,t){let n=new fi,s=new ye,r=new ye,a=new dt,o=new ws,c=new ja,l={},h=t.maxTextureSize,f={[_i]:Bt,[Bt]:_i,[ln]:ln},u=new tt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ye},radius:{value:4}},vertexShader:z0,fragmentShader:H0}),p=u.clone();p.defines.HORIZONTAL_PASS=1;let _=new pt;_.setAttribute("position",new Mt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new Ke(_,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bi;let d=this.type;this.render=function(w,g,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===Yh&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Bi);let F=i.getRenderTarget(),P=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),H=i.state;H.setBlending(cn),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let Y=d!==this.type;Y&&g.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(X=>X.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,X=w.length;L<X;L++){let K=w[L],G=K.shadow;if(G===void 0){Ie("WebGLShadowMap:",K,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let ne=G.getFrameExtents();s.multiply(ne),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ne.x),s.x=r.x*ne.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ne.y),s.y=r.y*ne.y,G.mapSize.y=r.y));let W=i.state.buffers.depth.getReversed();if(G.camera._reversedDepth=W,G.map===null||Y===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Ps){if(K.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new ft(s.x,s.y,{format:xi,type:vt,minFilter:Kt,magFilter:Kt,generateMipmaps:!1}),G.map.texture.name=K.name+".shadowMap",G.map.depthTexture=new $n(s.x,s.y,vn),G.map.depthTexture.name=K.name+".shadowMapDepth",G.map.depthTexture.format=Zn,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=ut,G.map.depthTexture.magFilter=ut}else K.isPointLight?(G.map=new qr(s.x),G.map.depthTexture=new gr(s.x,wn)):(G.map=new ft(s.x,s.y),G.map.depthTexture=new $n(s.x,s.y,wn)),G.map.depthTexture.name=K.name+".shadowMap",G.map.depthTexture.format=Zn,this.type===Bi?(G.map.depthTexture.compareFunction=W?vc:xc,G.map.depthTexture.minFilter=Kt,G.map.depthTexture.magFilter=Kt):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=ut,G.map.depthTexture.magFilter=ut);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==s.x||G.map.height!==s.y)&&G.map.setSize(s.x,s.y);let j=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();K.isPointLight!==!0&&G.updateMatrices(K,b);let ee=(G.camera.layers.mask&4294967294)!==0?G.camera.layers:b.layers;for(let Ee=0;Ee<j;Ee++){let Fe=G.getCamera(Ee);if(K.isPointLight){let J=G.camera,ge=G.matrix,Se=K.distance||J.far;Se!==J.far&&(J.far=Se,J.updateProjectionMatrix()),Wr.setFromMatrixPosition(K.matrixWorld),J.position.copy(Wr),Nc.copy(J.position),Nc.add(k0[Ee]),J.up.copy(G0[Ee]),J.lookAt(Nc),J.updateMatrixWorld(),ge.makeTranslation(-Wr.x,-Wr.y,-Wr.z),ed.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),G._frustum.setFromProjectionMatrix(ed,J.coordinateSystem,J.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)i.setRenderTarget(G.map,Ee),i.clear();else{Ee===0&&(i.setRenderTarget(G.map),i.clear());let J=G.getViewport(Ee);a.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),H.viewport(a)}n=G.getFrustum(Ee),S(g,b,Fe,K,ee,this.type)}G.isPointLightShadow!==!0&&this.type===Ps&&y(G,b),G.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(F,P,U)};function y(w,g){let b=e.update(M);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,p.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,p.needsUpdate=!0),w.mapPass===null?w.mapPass=new ft(s.x,s.y,{format:xi,type:vt}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(g,null,b,u,M,null),p.uniforms.shadow_pass.value=w.mapPass.texture,p.uniforms.resolution.value.set(w.map.width,w.map.height),p.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(g,null,b,p,M,null)}function T(w,g,b,F){let P=null,U=b.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(U!==void 0)P=U;else if(P=b.isPointLight===!0?c:o,i.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){let H=P.uuid,Y=g.uuid,L=l[H];L===void 0&&(L={},l[H]=L);let X=L[Y];X===void 0&&(X=P.clone(),L[Y]=X,g.addEventListener("dispose",A)),P=X}if(P.visible=g.visible,P.wireframe=g.wireframe,F===Ps?P.side=g.shadowSide!==null?g.shadowSide:g.side:P.side=g.shadowSide!==null?g.shadowSide:f[g.side],P.alphaMap=g.alphaMap,P.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,P.map=g.map,P.clipShadows=g.clipShadows,P.clippingPlanes=g.clippingPlanes,P.clipIntersection=g.clipIntersection,P.displacementMap=g.displacementMap,P.displacementScale=g.displacementScale,P.displacementBias=g.displacementBias,P.wireframeLinewidth=g.wireframeLinewidth,P.linewidth=g.linewidth,b.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let H=i.properties.get(P);H.light=b}return P}function S(w,g,b,F,P,U){if(w.visible===!1)return;if(w.layers.test(P)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&U===Ps)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,w.matrixWorld);let L=e.update(w),X=w.material;if(Array.isArray(X)){let K=L.groups;for(let G=0,ne=K.length;G<ne;G++){let W=K[G],j=X[W.materialIndex];if(j&&j.visible){let ee=T(w,j,F,U);w.onBeforeShadow(i,w,g,b,L,ee,W),i.renderBufferDirect(b,null,L,ee,w,W),w.onAfterShadow(i,w,g,b,L,ee,W)}}}else if(X.visible){let K=T(w,X,F,U);w.onBeforeShadow(i,w,g,b,L,K,null),i.renderBufferDirect(b,null,L,K,w,null),w.onAfterShadow(i,w,g,b,L,K,null)}}let Y=w.children;for(let L=0,X=Y.length;L<X;L++)S(Y[L],g,b,F,P,U)}function A(w){w.target.removeEventListener("dispose",A);for(let b in l){let F=l[b],P=w.target.uuid;P in F&&(F[P].dispose(),delete F[P])}}}function W0(i,e){function t(){let R=!1,$=new dt,V=null,le=new dt(0,0,0,0);return{setMask:function(se){V!==se&&!R&&(i.colorMask(se,se,se,se),V=se)},setLocked:function(se){R=se},setClear:function(se,ae,Ae,He,ie){ie===!0&&(se*=He,ae*=He,Ae*=He),$.set(se,ae,Ae,He),le.equals($)===!1&&(i.clearColor(se,ae,Ae,He),le.copy($))},reset:function(){R=!1,V=null,le.set(-1,0,0,0)}}}function n(){let R=!1,$=!1,V=null,le=null,se=null;return{setReversed:function(ae){if($!==ae){let Ae=e.get("EXT_clip_control");ae?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),$=ae;let He=se;se=null,this.setClear(He)}},getReversed:function(){return $},setTest:function(ae){ae?_e(i.DEPTH_TEST):Be(i.DEPTH_TEST)},setMask:function(ae){V!==ae&&!R&&(i.depthMask(ae),V=ae)},setFunc:function(ae){if($&&(ae=wu[ae]),le!==ae){switch(ae){case Na:i.depthFunc(i.NEVER);break;case Ua:i.depthFunc(i.ALWAYS);break;case Fa:i.depthFunc(i.LESS);break;case ds:i.depthFunc(i.LEQUAL);break;case Oa:i.depthFunc(i.EQUAL);break;case Ba:i.depthFunc(i.GEQUAL);break;case za:i.depthFunc(i.GREATER);break;case Ha:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}le=ae}},setLocked:function(ae){R=ae},setClear:function(ae){se!==ae&&(se=ae,$&&(ae=1-ae),i.clearDepth(ae))},reset:function(){R=!1,V=null,le=null,se=null,$=!1}}}function s(){let R=!1,$=null,V=null,le=null,se=null,ae=null,Ae=null,He=null,ie=null;return{setTest:function(Ce){R||(Ce?_e(i.STENCIL_TEST):Be(i.STENCIL_TEST))},setMask:function(Ce){$!==Ce&&!R&&(i.stencilMask(Ce),$=Ce)},setFunc:function(Ce,ze,pe){(V!==Ce||le!==ze||se!==pe)&&(i.stencilFunc(Ce,ze,pe),V=Ce,le=ze,se=pe)},setOp:function(Ce,ze,pe){(ae!==Ce||Ae!==ze||He!==pe)&&(i.stencilOp(Ce,ze,pe),ae=Ce,Ae=ze,He=pe)},setLocked:function(Ce){R=Ce},setClear:function(Ce){ie!==Ce&&(i.clearStencil(Ce),ie=Ce)},reset:function(){R=!1,$=null,V=null,le=null,se=null,ae=null,Ae=null,He=null,ie=null}}}let r=new t,a=new n,o=new s,c={},l=new WeakMap,h={},f={},u={},p=new WeakMap,_=[],M=null,m=!1,d=null,y=null,T=null,S=null,A=null,w=null,g=null,b=new ve(0,0,0),F=0,P=!1,U=null,H=null,Y=null,L=null,X=null,K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,ne=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(W)[1]),G=ne>=1):W.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),G=ne>=2);let j=null,ee={},Ee=i.getParameter(i.SCISSOR_BOX),Fe=i.getParameter(i.VIEWPORT),J=new dt().fromArray(Ee),ge=new dt().fromArray(Fe);function Se(R,$,V,le){let se=new Uint8Array(4),ae=i.createTexture();i.bindTexture(R,ae),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ae=0;Ae<V;Ae++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D($,0,i.RGBA,1,1,le,0,i.RGBA,i.UNSIGNED_BYTE,se):i.texImage2D($+Ae,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,se);return ae}let Re={};Re[i.TEXTURE_2D]=Se(i.TEXTURE_2D,i.TEXTURE_2D,1),Re[i.TEXTURE_CUBE_MAP]=Se(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Re[i.TEXTURE_2D_ARRAY]=Se(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Re[i.TEXTURE_3D]=Se(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),_e(i.DEPTH_TEST),a.setFunc(ds),tn(!1),mt(sc),_e(i.CULL_FACE),Ut(cn);function _e(R){h[R]!==!0&&(i.enable(R),h[R]=!0)}function Be(R){h[R]!==!1&&(i.disable(R),h[R]=!1)}function bt(R,$){return u[R]!==$?(i.bindFramebuffer(R,$),u[R]=$,R===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=$),R===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=$),!0):!1}function De(R,$){let V=_,le=!1;if(R){V=p.get($),V===void 0&&(V=[],p.set($,V));let se=R.textures;if(V.length!==se.length||V[0]!==i.COLOR_ATTACHMENT0){for(let ae=0,Ae=se.length;ae<Ae;ae++)V[ae]=i.COLOR_ATTACHMENT0+ae;V.length=se.length,le=!0}}else V[0]!==i.BACK&&(V[0]=i.BACK,le=!0);le&&i.drawBuffers(V)}function nt(R){return M!==R?(i.useProgram(R),M=R,!0):!1}let st={[zi]:i.FUNC_ADD,[Jh]:i.FUNC_SUBTRACT,[$h]:i.FUNC_REVERSE_SUBTRACT};st[Kh]=i.MIN,st[Qh]=i.MAX;let We={[jh]:i.ZERO,[eu]:i.ONE,[tu]:i.SRC_COLOR,[oc]:i.SRC_ALPHA,[ou]:i.SRC_ALPHA_SATURATE,[ru]:i.DST_COLOR,[iu]:i.DST_ALPHA,[nu]:i.ONE_MINUS_SRC_COLOR,[lc]:i.ONE_MINUS_SRC_ALPHA,[au]:i.ONE_MINUS_DST_COLOR,[su]:i.ONE_MINUS_DST_ALPHA,[lu]:i.CONSTANT_COLOR,[cu]:i.ONE_MINUS_CONSTANT_COLOR,[hu]:i.CONSTANT_ALPHA,[uu]:i.ONE_MINUS_CONSTANT_ALPHA};function Ut(R,$,V,le,se,ae,Ae,He,ie,Ce){if(R===cn){m===!0&&(Be(i.BLEND),m=!1);return}if(m===!1&&(_e(i.BLEND),m=!0),R!==Zh){if(R!==d||Ce!==P){if((y!==zi||A!==zi)&&(i.blendEquation(i.FUNC_ADD),y=zi,A=zi),Ce)switch(R){case Is:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case St:i.blendFunc(i.ONE,i.ONE);break;case rc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ac:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Le("WebGLState: Invalid blending: ",R);break}else switch(R){case Is:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case St:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case rc:Le("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ac:Le("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Le("WebGLState: Invalid blending: ",R);break}T=null,S=null,w=null,g=null,b.set(0,0,0),F=0,d=R,P=Ce}return}se=se||$,ae=ae||V,Ae=Ae||le,($!==y||se!==A)&&(i.blendEquationSeparate(st[$],st[se]),y=$,A=se),(V!==T||le!==S||ae!==w||Ae!==g)&&(i.blendFuncSeparate(We[V],We[le],We[ae],We[Ae]),T=V,S=le,w=ae,g=Ae),(He.equals(b)===!1||ie!==F)&&(i.blendColor(He.r,He.g,He.b,ie),b.copy(He),F=ie),d=R,P=!1}function wt(R,$){R.side===ln?Be(i.CULL_FACE):_e(i.CULL_FACE);let V=R.side===Bt;$&&(V=!V),tn(V),R.blending===Is&&R.transparent===!1?Ut(cn):Ut(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),r.setMask(R.colorWrite);let le=R.stencilWrite;o.setTest(le),le&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),It(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?_e(i.SAMPLE_ALPHA_TO_COVERAGE):Be(i.SAMPLE_ALPHA_TO_COVERAGE)}function tn(R){U!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),U=R)}function mt(R){R!==Xh?(_e(i.CULL_FACE),R!==H&&(R===sc?i.cullFace(i.BACK):R===qh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Be(i.CULL_FACE),H=R}function Rn(R){R!==Y&&(G&&i.lineWidth(R),Y=R)}function It(R,$,V){R?(_e(i.POLYGON_OFFSET_FILL),(L!==$||X!==V)&&(L=$,X=V,a.getReversed()&&($=-$,V=-V),i.polygonOffset($,V))):Be(i.POLYGON_OFFSET_FILL)}function un(R){R?_e(i.SCISSOR_TEST):Be(i.SCISSOR_TEST)}function dn(R){R===void 0&&(R=i.TEXTURE0+K-1),j!==R&&(i.activeTexture(R),j=R)}function fn(R,$,V){V===void 0&&(j===null?V=i.TEXTURE0+K-1:V=j);let le=ee[V];le===void 0&&(le={type:void 0,texture:void 0},ee[V]=le),(le.type!==R||le.texture!==$)&&(j!==V&&(i.activeTexture(V),j=V),i.bindTexture(R,$||Re[R]),le.type=R,le.texture=$)}function N(){let R=ee[j];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function pn(){try{i.compressedTexImage2D(...arguments)}catch(R){Le("WebGLState:",R)}}function ct(){try{i.compressedTexImage3D(...arguments)}catch(R){Le("WebGLState:",R)}}function ht(){try{i.texSubImage2D(...arguments)}catch(R){Le("WebGLState:",R)}}function de(){try{i.texSubImage3D(...arguments)}catch(R){Le("WebGLState:",R)}}function At(){try{i.compressedTexSubImage2D(...arguments)}catch(R){Le("WebGLState:",R)}}function Pe(){try{i.compressedTexSubImage3D(...arguments)}catch(R){Le("WebGLState:",R)}}function Ue(){try{i.texStorage2D(...arguments)}catch(R){Le("WebGLState:",R)}}function E(){try{i.texStorage3D(...arguments)}catch(R){Le("WebGLState:",R)}}function x(){try{i.texImage2D(...arguments)}catch(R){Le("WebGLState:",R)}}function B(){try{i.texImage3D(...arguments)}catch(R){Le("WebGLState:",R)}}function te(R){return f[R]!==void 0?f[R]:i.getParameter(R)}function Q(R,$){f[R]!==$&&(i.pixelStorei(R,$),f[R]=$)}function re(R){J.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),J.copy(R))}function he(R){ge.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),ge.copy(R))}function q(R,$){let V=l.get($);V===void 0&&(V=new WeakMap,l.set($,V));let le=V.get(R);le===void 0&&(le=i.getUniformBlockIndex($,R.name),i.uniformBlockBinding($,le,le),V.set(R,le))}function Z(R,$,V){let se=l.get($).get(R);c[se]!==V&&(i.bindBufferBase(i.UNIFORM_BUFFER,se,V),c[se]=V)}function oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},j=null,ee={},u={},c={},p=new WeakMap,_=[],M=null,m=!1,d=null,y=null,T=null,S=null,A=null,w=null,g=null,b=new ve(0,0,0),F=0,P=!1,U=null,H=null,Y=null,L=null,X=null,J.set(0,0,i.canvas.width,i.canvas.height),ge.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:_e,disable:Be,bindFramebuffer:bt,drawBuffers:De,useProgram:nt,setBlending:Ut,setMaterial:wt,setFlipSided:tn,setCullFace:mt,setLineWidth:Rn,setPolygonOffset:It,setScissorTest:un,activeTexture:dn,bindTexture:fn,unbindTexture:N,compressedTexImage2D:pn,compressedTexImage3D:ct,texImage2D:x,texImage3D:B,pixelStorei:Q,getParameter:te,updateUBOMapping:q,uniformBlockBinding:Z,texStorage2D:Ue,texStorage3D:E,texSubImage2D:ht,texSubImage3D:de,compressedTexSubImage2D:At,compressedTexSubImage3D:Pe,scissor:re,viewport:he,reset:oe}}function X0(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ye,h=new WeakMap,f=new Set,u,p=new WeakMap,_=new Set,M=new FinalizationRegistry(E=>_.delete(E)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function d(E,x){return m?new OffscreenCanvas(E,x):tr("canvas")}function y(E,x,B){let te=1,Q=Ue(E);if((Q.width>B||Q.height>B)&&(te=B/Math.max(Q.width,Q.height)),te<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let re=Math.floor(te*Q.width),he=Math.floor(te*Q.height);u===void 0&&(u=d(re,he));let q=x?d(re,he):u;return q.width=re,q.height=he,q.getContext("2d").drawImage(E,0,0,re,he),Ie("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+re+"x"+he+")."),q}else return"data"in E&&Ie("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),E;return E}function T(E){return E.generateMipmaps}function S(E){i.generateMipmap(E)}function A(E){return E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?i.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(E,x,B,te,Q,re=!1){if(E!==null){if(i[E]!==void 0)return i[E];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let he;te&&(he=e.get("EXT_texture_norm16"),he||Ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let q=x;if(x===i.RED&&(B===i.FLOAT&&(q=i.R32F),B===i.HALF_FLOAT&&(q=i.R16F),B===i.UNSIGNED_BYTE&&(q=i.R8),B===i.UNSIGNED_SHORT&&he&&(q=he.R16_EXT),B===i.SHORT&&he&&(q=he.R16_SNORM_EXT)),x===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(q=i.R8UI),B===i.UNSIGNED_SHORT&&(q=i.R16UI),B===i.UNSIGNED_INT&&(q=i.R32UI),B===i.BYTE&&(q=i.R8I),B===i.SHORT&&(q=i.R16I),B===i.INT&&(q=i.R32I)),x===i.RG&&(B===i.FLOAT&&(q=i.RG32F),B===i.HALF_FLOAT&&(q=i.RG16F),B===i.UNSIGNED_BYTE&&(q=i.RG8),B===i.UNSIGNED_SHORT&&he&&(q=he.RG16_EXT),B===i.SHORT&&he&&(q=he.RG16_SNORM_EXT)),x===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(q=i.RG8UI),B===i.UNSIGNED_SHORT&&(q=i.RG16UI),B===i.UNSIGNED_INT&&(q=i.RG32UI),B===i.BYTE&&(q=i.RG8I),B===i.SHORT&&(q=i.RG16I),B===i.INT&&(q=i.RG32I)),x===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(q=i.RGB8UI),B===i.UNSIGNED_SHORT&&(q=i.RGB16UI),B===i.UNSIGNED_INT&&(q=i.RGB32UI),B===i.BYTE&&(q=i.RGB8I),B===i.SHORT&&(q=i.RGB16I),B===i.INT&&(q=i.RGB32I)),x===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(q=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(q=i.RGBA16UI),B===i.UNSIGNED_INT&&(q=i.RGBA32UI),B===i.BYTE&&(q=i.RGBA8I),B===i.SHORT&&(q=i.RGBA16I),B===i.INT&&(q=i.RGBA32I)),x===i.RGB&&(B===i.UNSIGNED_SHORT&&he&&(q=he.RGB16_EXT),B===i.SHORT&&he&&(q=he.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&(q=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(q=i.R11F_G11F_B10F)),x===i.RGBA){let Z=re?er:Ge.getTransfer(Q);B===i.FLOAT&&(q=i.RGBA32F),B===i.HALF_FLOAT&&(q=i.RGBA16F),B===i.UNSIGNED_BYTE&&(q=Z===Qe?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&he&&(q=he.RGBA16_EXT),B===i.SHORT&&he&&(q=he.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&(q=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(q=i.RGB5_A1)}return(q===i.R16F||q===i.R32F||q===i.RG16F||q===i.RG32F||q===i.RGBA16F||q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),q}function g(E,x){let B;return E?x===null||x===wn||x===Gi?B=i.DEPTH24_STENCIL8:x===vn?B=i.DEPTH32F_STENCIL8:x===Ls&&(B=i.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===wn||x===Gi?B=i.DEPTH_COMPONENT24:x===vn?B=i.DEPTH_COMPONENT32F:x===Ls&&(B=i.DEPTH_COMPONENT16),B}function b(E,x){return T(E)===!0||E.isFramebufferTexture&&E.minFilter!==ut&&E.minFilter!==Kt?Math.log2(Math.max(x.width,x.height))+1:E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?x.mipmaps.length:1}function F(E){let x=new WeakRef(E);n.get(E).__ref=x,_.add(x),M.register(E,x,x)}function P(E){let x=n.get(E).__ref;x!==void 0&&(_.delete(x),M.unregister(x))}function U(E){Y(E.target)}function H(E){L(E.target)}function Y(E){E.removeEventListener("dispose",U),P(E),K(E),E.isVideoTexture&&h.delete(E),E.isHTMLTexture&&f.delete(E)}function L(E){E.removeEventListener("dispose",H),P(E),ne(E)}function X(){for(let E of _){let x=E.deref();x!==void 0&&(x.isRenderTarget===!0?L(x):Y(x))}_.clear(),f.clear()}function K(E){let x=n.get(E);if(x.__webglInit===void 0)return;let B=E.source,te=p.get(B);if(te){let Q=te[x.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&G(E),Object.keys(te).length===0&&p.delete(B)}n.remove(E)}function G(E){let x=n.get(E);i.deleteTexture(x.__webglTexture);let B=E.source,te=p.get(B);delete te[x.__cacheKey],a.memory.textures--}function ne(E){let x=n.get(E);x.__depthDisposeCallback&&x.__depthDisposeCallback();let B=E.depthTexture;if(B&&B.renderTarget===E&&Y(B),E.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(x.__webglFramebuffer[Q]))for(let re=0;re<x.__webglFramebuffer[Q].length;re++)i.deleteFramebuffer(x.__webglFramebuffer[Q][re]);else i.deleteFramebuffer(x.__webglFramebuffer[Q]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[Q])}else{if(Array.isArray(x.__webglFramebuffer))for(let Q=0;Q<x.__webglFramebuffer.length;Q++)i.deleteFramebuffer(x.__webglFramebuffer[Q]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Q=0;Q<x.__webglColorRenderbuffer.length;Q++)x.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[Q]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let te=E.textures;for(let Q=0,re=te.length;Q<re;Q++){let he=n.get(te[Q]);he.__webglTexture&&(i.deleteTexture(he.__webglTexture),a.memory.textures--),n.remove(te[Q])}n.remove(E)}let W=0;function j(){W=0}function ee(){return W}function Ee(E){W=E}function Fe(){let E=W;return E>=s.maxTextures&&Ie("WebGLTextures: Trying to use "+(E+1)+" texture units while this GPU supports only "+s.maxTextures),W+=1,E}function J(E){let x=[];return x.push(E.wrapS),x.push(E.wrapT),x.push(E.wrapR||0),x.push(E.magFilter),x.push(E.minFilter),x.push(E.anisotropy),x.push(E.internalFormat),x.push(E.format),x.push(E.type),x.push(E.generateMipmaps),x.push(E.mipmapsAutoUpdate),x.push(E.premultiplyAlpha),x.push(E.flipY),x.push(E.unpackAlignment),x.push(E.colorSpace),x.join()}function ge(E,x){let B=n.get(E);if(E.isVideoTexture&&At(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&B.__version!==E.version){let te=E.image;if(te===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{wt(B,E,x);return}}else E.isExternalTexture&&(B.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+x)}function Se(E,x){let B=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){wt(B,E,x);return}else E.isExternalTexture&&(B.__webglTexture=E.sourceTexture?E.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+x)}function Re(E,x){let B=n.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&B.__version!==E.version){wt(B,E,x);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+x)}function _e(E,x){let B=n.get(E);if(E.version>0&&B.__version!==E.version){tn(B,E,x);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+x)}let Be={[ka]:i.REPEAT,[In]:i.CLAMP_TO_EDGE,[Ga]:i.MIRRORED_REPEAT},bt={[ut]:i.NEAREST,[pu]:i.NEAREST_MIPMAP_NEAREST,[Or]:i.NEAREST_MIPMAP_LINEAR,[Kt]:i.LINEAR,[mo]:i.LINEAR_MIPMAP_NEAREST,[jn]:i.LINEAR_MIPMAP_LINEAR},De={[xu]:i.NEVER,[yc]:i.ALWAYS,[vu]:i.LESS,[xc]:i.LEQUAL,[yu]:i.EQUAL,[vc]:i.GEQUAL,[Mu]:i.GREATER,[Su]:i.NOTEQUAL};function nt(E,x){if(x.type===vn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Kt||x.magFilter===mo||x.magFilter===Or||x.magFilter===jn||x.minFilter===Kt||x.minFilter===mo||x.minFilter===Or||x.minFilter===jn)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,Be[x.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,Be[x.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,Be[x.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,bt[x.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,bt[x.minFilter]),x.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,De[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===ut||x.minFilter!==Or&&x.minFilter!==jn||x.type===vn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function st(E,x){let B=!1;E.__webglInit===void 0&&(E.__webglInit=!0,x.addEventListener("dispose",U),F(x));let te=x.source,Q=p.get(te);Q===void 0&&(Q={},p.set(te,Q));let re=J(x);if(re!==E.__cacheKey){Q[re]===void 0&&(Q[re]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),Q[re].usedTimes++;let he=Q[E.__cacheKey];he!==void 0&&(Q[E.__cacheKey].usedTimes--,he.usedTimes===0&&G(x)),E.__cacheKey=re,E.__webglTexture=Q[re].texture}return B}function We(E,x,B){return Math.floor(Math.floor(E/B)/x)}function Ut(E,x,B,te){let re=E.updateRanges;if(re.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,x.width,x.height,B,te,x.data);else{re.sort((R,$)=>R.start-$.start);let he=0;for(let R=1;R<re.length;R++){let $=re[he],V=re[R],le=$.start+$.count,se=We(V.start,x.width,4),ae=We($.start,x.width,4);V.start<=le+1&&se===ae&&We(V.start+V.count-1,x.width,4)===se?$.count=Math.max($.count,V.start+V.count-$.start):(++he,re[he]=V)}re.length=he+1;let q=t.getParameter(i.UNPACK_ROW_LENGTH),Z=t.getParameter(i.UNPACK_SKIP_PIXELS),oe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,x.width);for(let R=0,$=re.length;R<$;R++){let V=re[R],le=Math.floor(V.start/4),se=Math.ceil(V.count/4),ae=le%x.width,Ae=Math.floor(le/x.width),He=se,ie=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ae),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ae),t.texSubImage2D(i.TEXTURE_2D,0,ae,Ae,He,ie,B,te,x.data)}E.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,q),t.pixelStorei(i.UNPACK_SKIP_PIXELS,Z),t.pixelStorei(i.UNPACK_SKIP_ROWS,oe)}}function wt(E,x,B){let te=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(te=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(te=i.TEXTURE_3D);let Q=st(E,x),re=x.source;t.bindTexture(te,E.__webglTexture,i.TEXTURE0+B);let he=n.get(re);if(re.version!==he.__version||Q===!0){if(t.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let ie=Ge.getPrimaries(Ge.workingColorSpace),Ce=x.colorSpace===ti?null:Ge.getPrimaries(x.colorSpace),ze=x.colorSpace===ti||ie===Ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze)}t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment);let Z=y(x.image,!1,s.maxTextureSize);Z=Pe(x,Z);let oe=r.convert(x.format,x.colorSpace),R=r.convert(x.type),$=w(x.internalFormat,oe,R,x.normalized,x.colorSpace,x.isVideoTexture);nt(te,x);let V,le=x.mipmaps,se=x.isVideoTexture!==!0,ae=he.__version===void 0||Q===!0,Ae=re.dataReady,He=b(x,Z);if(x.isDepthTexture)$=g(x.format===ei,x.type),ae&&(se?t.texStorage2D(i.TEXTURE_2D,1,$,Z.width,Z.height):t.texImage2D(i.TEXTURE_2D,0,$,Z.width,Z.height,0,oe,R,null));else if(x.isDataTexture)if(le.length>0){se&&ae&&t.texStorage2D(i.TEXTURE_2D,He,$,le[0].width,le[0].height);for(let ie=0,Ce=le.length;ie<Ce;ie++)V=le[ie],se?Ae&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,V.width,V.height,oe,R,V.data):t.texImage2D(i.TEXTURE_2D,ie,$,V.width,V.height,0,oe,R,V.data);x.generateMipmaps=!1}else se?(ae&&t.texStorage2D(i.TEXTURE_2D,He,$,Z.width,Z.height),Ae&&Ut(x,Z,oe,R)):t.texImage2D(i.TEXTURE_2D,0,$,Z.width,Z.height,0,oe,R,Z.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){se&&ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,He,$,le[0].width,le[0].height,Z.depth);for(let ie=0,Ce=le.length;ie<Ce;ie++)if(V=le[ie],x.format!==An)if(oe!==null)if(se){if(Ae)if(x.layerUpdates.size>0){let ze=Ac(V.width,V.height,x.format,x.type);for(let pe of x.layerUpdates){let it=V.data.subarray(pe*ze/V.data.BYTES_PER_ELEMENT,(pe+1)*ze/V.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,pe,V.width,V.height,1,oe,it)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,V.width,V.height,Z.depth,oe,V.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ie,$,V.width,V.height,Z.depth,0,V.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else se?Ae&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,V.width,V.height,Z.depth,oe,R,V.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ie,$,V.width,V.height,Z.depth,0,oe,R,V.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{se&&ae&&t.texStorage2D(i.TEXTURE_2D,He,$,le[0].width,le[0].height);for(let ie=0,Ce=le.length;ie<Ce;ie++)V=le[ie],x.format!==An?oe!==null?se?Ae&&t.compressedTexSubImage2D(i.TEXTURE_2D,ie,0,0,V.width,V.height,oe,V.data):t.compressedTexImage2D(i.TEXTURE_2D,ie,$,V.width,V.height,0,V.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?Ae&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,V.width,V.height,oe,R,V.data):t.texImage2D(i.TEXTURE_2D,ie,$,V.width,V.height,0,oe,R,V.data)}else if(x.isDataArrayTexture)if(se){if(ae&&t.texStorage3D(i.TEXTURE_2D_ARRAY,He,$,Z.width,Z.height,Z.depth),Ae)if(x.layerUpdates.size>0){let ie=Ac(Z.width,Z.height,x.format,x.type);for(let Ce of x.layerUpdates){let ze=Z.data.subarray(Ce*ie/Z.data.BYTES_PER_ELEMENT,(Ce+1)*ie/Z.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ce,Z.width,Z.height,1,oe,R,ze)}x.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,oe,R,Z.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,$,Z.width,Z.height,Z.depth,0,oe,R,Z.data);else if(x.isData3DTexture)se?(ae&&t.texStorage3D(i.TEXTURE_3D,He,$,Z.width,Z.height,Z.depth),Ae&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,oe,R,Z.data)):t.texImage3D(i.TEXTURE_3D,0,$,Z.width,Z.height,Z.depth,0,oe,R,Z.data);else if(x.isFramebufferTexture){if(ae)if(se)t.texStorage2D(i.TEXTURE_2D,He,$,Z.width,Z.height);else{let ie=Z.width,Ce=Z.height;for(let ze=0;ze<He;ze++)t.texImage2D(i.TEXTURE_2D,ze,$,ie,Ce,0,oe,R,null),ie>>=1,Ce>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in i){let ie=i.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),Z.parentNode!==ie){ie.appendChild(Z),f.add(x),ie.onpaint=Ce=>{let ze=Ce.changedElements;for(let pe of f)ze.includes(pe.image)&&(pe.needsUpdate=!0)},ie.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,Z);else{let ze=i.RGBA,pe=i.RGBA,it=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ze,pe,it,Z)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(le.length>0){if(se&&ae){let ie=Ue(le[0]);t.texStorage2D(i.TEXTURE_2D,He,$,ie.width,ie.height)}for(let ie=0,Ce=le.length;ie<Ce;ie++)V=le[ie],se?Ae&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,oe,R,V):t.texImage2D(i.TEXTURE_2D,ie,$,oe,R,V);x.generateMipmaps=!1}else if(se){if(ae){let ie=Ue(Z);t.texStorage2D(i.TEXTURE_2D,He,$,ie.width,ie.height)}Ae&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe,R,Z)}else t.texImage2D(i.TEXTURE_2D,0,$,oe,R,Z);T(x)&&x.mipmapsAutoUpdate===!0&&S(te),he.__version=re.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function tn(E,x,B){if(x.image.length!==6)return;let te=st(E,x),Q=x.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+B);let re=n.get(Q);if(Q.version!==re.__version||te===!0){t.activeTexture(i.TEXTURE0+B);let he=Ge.getPrimaries(Ge.workingColorSpace),q=x.colorSpace===ti?null:Ge.getPrimaries(x.colorSpace),Z=x.colorSpace===ti||he===q?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);let oe=x.isCompressedTexture||x.image[0].isCompressedTexture,R=x.image[0]&&x.image[0].isDataTexture,$=[];for(let pe=0;pe<6;pe++)!oe&&!R?$[pe]=y(x.image[pe],!0,s.maxCubemapSize):$[pe]=R?x.image[pe].image:x.image[pe],$[pe]=Pe(x,$[pe]);let V=$[0],le=r.convert(x.format,x.colorSpace),se=r.convert(x.type),ae=w(x.internalFormat,le,se,x.normalized,x.colorSpace),Ae=x.isVideoTexture!==!0,He=re.__version===void 0||te===!0,ie=Q.dataReady,Ce=b(x,V);nt(i.TEXTURE_CUBE_MAP,x);let ze;if(x.isDepthTexture){if(ae=g(x.format===ei,x.type),He)if(Ae)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,ae,V.width,V.height);else for(let pe=0;pe<6;pe++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ae,V.width,V.height,0,le,se,null)}else if(oe){Ae&&He&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ce,ae,V.width,V.height);for(let pe=0;pe<6;pe++){ze=$[pe].mipmaps;for(let it=0;it<ze.length;it++){let Dt=ze[it];x.format!==An?le!==null?Ae?ie&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,it,0,0,Dt.width,Dt.height,le,Dt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,it,ae,Dt.width,Dt.height,0,Dt.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ae?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,it,0,0,Dt.width,Dt.height,le,se,Dt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,it,ae,Dt.width,Dt.height,0,le,se,Dt.data)}}}else{if(ze=x.mipmaps,Ae&&He){ze.length>0&&Ce++;let pe=Ue($[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ce,ae,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(R){Ae?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,$[pe].width,$[pe].height,le,se,$[pe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ae,$[pe].width,$[pe].height,0,le,se,$[pe].data);for(let it=0;it<ze.length;it++){let ai=ze[it].image[pe].image;Ae?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,it+1,0,0,ai.width,ai.height,le,se,ai.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,it+1,ae,ai.width,ai.height,0,le,se,ai.data)}}else{Ae?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,le,se,$[pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ae,le,se,$[pe]);for(let it=0;it<ze.length;it++){let Dt=ze[it];Ae?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,it+1,0,0,le,se,Dt.image[pe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,it+1,ae,le,se,Dt.image[pe])}}}T(x)&&x.mipmapsAutoUpdate===!0&&S(i.TEXTURE_CUBE_MAP),re.__version=Q.version,x.onUpdate&&x.onUpdate(x)}E.__version=x.version}function mt(E,x,B,te,Q,re){let he=r.convert(B.format,B.colorSpace),q=r.convert(B.type),Z=w(B.internalFormat,he,q,B.normalized,B.colorSpace),oe=n.get(x),R=n.get(B);if(R.__renderTarget=x,!oe.__hasExternalTextures){let $=Math.max(1,x.width>>re),V=Math.max(1,x.height>>re);Q===i.TEXTURE_3D||Q===i.TEXTURE_2D_ARRAY?t.texImage3D(Q,re,Z,$,V,x.depth,0,he,q,null):t.texImage2D(Q,re,Z,$,V,0,he,q,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),de(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,Q,R.__webglTexture,0,ht(x)):(Q===i.TEXTURE_2D||Q>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,te,Q,R.__webglTexture,re),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Rn(E,x,B){if(i.bindRenderbuffer(i.RENDERBUFFER,E),x.depthBuffer){let te=x.depthTexture,Q=te&&te.isDepthTexture?te.type:null,re=g(x.stencilBuffer,Q),he=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;de(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht(x),re,x.width,x.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht(x),re,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,re,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,E)}else{let te=x.textures;for(let Q=0;Q<te.length;Q++){let re=te[Q],he=r.convert(re.format,re.colorSpace),q=r.convert(re.type),Z=w(re.internalFormat,he,q,re.normalized,re.colorSpace);de(x)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht(x),Z,x.width,x.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht(x),Z,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,Z,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function It(E,x,B){let te=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=n.get(x.depthTexture);Q.__renderTarget=x;let re=te?x.depthTexture.image[0]:x.depthTexture.image;(!Q.__webglTexture||re.width!==x.width||re.height!==x.height)&&(re.width=x.width,re.height=x.height,x.depthTexture.needsUpdate=!0),te?_e(x.depthTexture,0):ge(x.depthTexture,0);let he=Q.__webglTexture,q=ht(x),Z=te?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,oe=x.depthTexture.format===ei?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(x.depthTexture.format===Zn)de(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,Z,he,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,oe,Z,he,0);else if(x.depthTexture.format===ei)de(x)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,Z,he,0,q):i.framebufferTexture2D(i.FRAMEBUFFER,oe,Z,he,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function un(E){let x=n.get(E),B=E.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==E.depthTexture){let te=E.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),te){let Q=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,te.removeEventListener("dispose",Q)};te.addEventListener("dispose",Q),x.__depthDisposeCallback=Q}x.__boundDepthTexture=te}if(E.depthTexture&&!x.__autoAllocateDepthBuffer)if(B)for(let te=0;te<6;te++)It(x.__webglFramebuffer[te],E,te);else E.texture.mipmaps.length>0?It(x.__webglFramebuffer[0],E,0):It(x.__webglFramebuffer,E,0);else if(B){x.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[te]),x.__webglDepthbuffer[te]===void 0)x.__webglDepthbuffer[te]=i.createRenderbuffer(),Rn(x.__webglDepthbuffer[te],E,!1);else{let Q=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=x.__webglDepthbuffer[te];i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,re)}}else if(E.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),Rn(x.__webglDepthbuffer,E,!1);else{let Q=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,re),i.framebufferRenderbuffer(i.FRAMEBUFFER,Q,i.RENDERBUFFER,re)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function dn(E,x,B){let te=n.get(E);x!==void 0&&mt(te.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&un(E)}function fn(E){let x=E.texture,B=n.get(E),te=n.get(x);E.addEventListener("dispose",H),F(E);let Q=E.textures,re=E.isWebGLCubeRenderTarget===!0,he=Q.length>1;if(he||(te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture()),te.__version=x.version,a.memory.textures++),re){B.__webglFramebuffer=[];for(let q=0;q<6;q++)if(x.mipmaps.length>0){B.__webglFramebuffer[q]=[];for(let Z=0;Z<x.mipmaps.length;Z++)B.__webglFramebuffer[q][Z]=i.createFramebuffer()}else B.__webglFramebuffer[q]=i.createFramebuffer()}else{if(x.mipmaps.length>0){B.__webglFramebuffer=[];for(let q=0;q<x.mipmaps.length;q++)B.__webglFramebuffer[q]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(he)for(let q=0,Z=Q.length;q<Z;q++){let oe=n.get(Q[q]);oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&de(E)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let q=0;q<Q.length;q++){let Z=Q[q];B.__webglColorRenderbuffer[q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[q]);let oe=r.convert(Z.format,Z.colorSpace),R=r.convert(Z.type),$=w(Z.internalFormat,oe,R,Z.normalized,Z.colorSpace,E.isXRRenderTarget===!0),V=ht(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,V,$,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+q,i.RENDERBUFFER,B.__webglColorRenderbuffer[q])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Rn(B.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(re){t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),nt(i.TEXTURE_CUBE_MAP,x);for(let q=0;q<6;q++)if(x.mipmaps.length>0)for(let Z=0;Z<x.mipmaps.length;Z++)mt(B.__webglFramebuffer[q][Z],E,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+q,Z);else mt(B.__webglFramebuffer[q],E,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+q,0);T(x)?S(i.TEXTURE_CUBE_MAP):x.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),t.unbindTexture()}else if(he){for(let q=0,Z=Q.length;q<Z;q++){let oe=Q[q],R=n.get(oe),$=i.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&($=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture($,R.__webglTexture),nt($,oe),mt(B.__webglFramebuffer,E,oe,i.COLOR_ATTACHMENT0+q,$,0),T(oe)&&S($)}t.unbindTexture()}else{let q=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(q=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(q,te.__webglTexture),nt(q,x),x.mipmaps.length>0)for(let Z=0;Z<x.mipmaps.length;Z++)mt(B.__webglFramebuffer[Z],E,x,i.COLOR_ATTACHMENT0,q,Z);else mt(B.__webglFramebuffer,E,x,i.COLOR_ATTACHMENT0,q,0);T(x)?S(q):x.mipmaps.length>0&&i.texParameteri(q,i.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),t.unbindTexture()}E.depthBuffer&&un(E)}function N(E){let x=E.textures;for(let B=0,te=x.length;B<te;B++){let Q=x[B];if(T(Q)&&Q.mipmapsAutoUpdate===!0){let re=A(E),he=n.get(Q).__webglTexture;t.bindTexture(re,he),S(re),t.unbindTexture()}}}let pn=[];function ct(E){if(E.samples>0){if(de(E)===!1){let x=E.textures,B=E.width,te=E.height,Q=i.COLOR_BUFFER_BIT,re=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=n.get(E),q=x.length>1;if(q)for(let oe=0;oe<x.length;oe++)t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer),E.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let oe=0;oe<x.length;oe++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(Q|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(Q|=i.STENCIL_BUFFER_BIT)),q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,he.__webglColorRenderbuffer[oe]);let R=n.get(x[oe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,R,0)}i.blitFramebuffer(0,0,B,te,0,0,B,te,Q,i.NEAREST),c===!0&&(pn.length=0,pn.push(i.COLOR_ATTACHMENT0+oe),E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&pn.push(re),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,pn))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),q)for(let oe=0;oe<x.length;oe++){t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,he.__webglColorRenderbuffer[oe]);let R=n.get(x[oe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,R,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.storeMultisampledDepthBuffer===!1&&c){let x=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function ht(E){return Math.min(s.maxSamples,E.samples)}function de(E){let x=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function At(E){let x=a.render.frame;h.get(E)!==x&&(h.set(E,x),E.update())}function Pe(E,x){let B=E.colorSpace,te=E.format,Q=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||B!==js&&B!==ti&&(Ge.getTransfer(B)===Qe?(te!==An||Q!==nn)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Le("WebGLTextures: Unsupported texture color space:",B)),x}function Ue(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(l.width=E.naturalWidth||E.width,l.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(l.width=E.displayWidth,l.height=E.displayHeight):(l.width=E.width,l.height=E.height),l}this.allocateTextureUnit=Fe,this.resetTextureUnits=j,this.getTextureUnits=ee,this.setTextureUnits=Ee,this.setTexture2D=ge,this.setTexture2DArray=Se,this.setTexture3D=Re,this.setTextureCube=_e,this.rebindTextures=dn,this.setupRenderTarget=fn,this.updateRenderTargetMipmap=N,this.updateMultisampleRenderTarget=ct,this.setupDepthRenderbuffer=un,this.setupFrameBufferTexture=mt,this.useMultisampledRTT=de,this.dispose=X}function q0(i,e){function t(n,s=ti){let r,a=Ge.getTransfer(s);if(n===nn)return i.UNSIGNED_BYTE;if(n===_o)return i.UNSIGNED_SHORT_4_4_4_4;if(n===xo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===fc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===pc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===uc)return i.BYTE;if(n===dc)return i.SHORT;if(n===Ls)return i.UNSIGNED_SHORT;if(n===go)return i.INT;if(n===wn)return i.UNSIGNED_INT;if(n===vn)return i.FLOAT;if(n===vt)return i.HALF_FLOAT;if(n===mc)return i.ALPHA;if(n===gc)return i.RGB;if(n===An)return i.RGBA;if(n===Zn)return i.DEPTH_COMPONENT;if(n===ei)return i.DEPTH_STENCIL;if(n===vo)return i.RED;if(n===yo)return i.RED_INTEGER;if(n===xi)return i.RG;if(n===Mo)return i.RG_INTEGER;if(n===So)return i.RGBA_INTEGER;if(n===Br||n===zr||n===Hr||n===kr)if(a===Qe)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Br)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Br)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===zr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Hr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===kr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===bo||n===To||n===Eo||n===wo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===bo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===To)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Eo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===wo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ao||n===Co||n===Ro||n===Po||n===Io||n===Gr||n===Do)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ao||n===Co)return a===Qe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ro)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Po)return r.COMPRESSED_R11_EAC;if(n===Io)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Gr)return r.COMPRESSED_RG11_EAC;if(n===Do)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Lo||n===No||n===Uo||n===Fo||n===Oo||n===Bo||n===zo||n===Ho||n===ko||n===Go||n===Vo||n===Wo||n===Xo||n===qo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Lo)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===No)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Uo)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Fo)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Oo)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Bo)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===zo)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ho)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ko)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Go)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Vo)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Wo)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Xo)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===qo)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Yo||n===Zo||n===Jo)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Yo)return a===Qe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Zo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Jo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$o||n===Ko||n===Vr||n===Qo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===$o)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ko)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Vr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Qo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Gi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Y0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Z0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,kc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new _r(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new tt({vertexShader:Y0,fragmentShader:Z0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ke(new Ni(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Gc=class extends Dn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,f=null,u=null,p=null,_=null,M=typeof XRWebGLBinding<"u",m=new kc,d={},y=t.getContextAttributes(),T=null,S=null,A=[],w=[],g=new ye,b=null,F=null,P=new qt;P.viewport=new dt;let U=new qt;U.viewport=new dt;let H=[P,U],Y=new ho,L=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ge=A[J];return ge===void 0&&(ge=new _s,A[J]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(J){let ge=A[J];return ge===void 0&&(ge=new _s,A[J]=ge),ge.getGripSpace()},this.getHand=function(J){let ge=A[J];return ge===void 0&&(ge=new _s,A[J]=ge),ge.getHandSpace()};function K(J){let ge=w.indexOf(J.inputSource);if(ge===-1)return;let Se=A[ge];Se!==void 0&&(Se.update(J.inputSource,J.frame,l||a),Se.dispatchEvent({type:J.type,data:J.inputSource}))}function G(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",ne);for(let J=0;J<A.length;J++){let ge=w[J];ge!==null&&(w[J]=null,A[J].disconnect(ge))}L=null,X=null,m.reset();for(let J in d)delete d[J];if(e.setRenderTarget(T),p=null,u=null,f=null,s=null,S=null,Fe.stop(),n.isPresenting=!1,e.setPixelRatio(b),e.setSize(g.width,g.height,!1),F!==null){let J=F.camera;J.fov=F.fov,J.zoom=F.zoom,J.updateProjectionMatrix(),F=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return u!==null?u:p},this.getBinding=function(){return f===null&&M&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return _},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",G),s.addEventListener("inputsourceschange",ne),y.xrCompatible!==!0&&await t.makeXRCompatible(),b=e.getPixelRatio(),e.getSize(g),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Re=null,_e=null;y.depth&&(_e=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=y.stencil?ei:Zn,Re=y.stencil?Gi:wn);let Be={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Be),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),S=new ft(u.textureWidth,u.textureHeight,{format:An,type:nn,depthTexture:new $n(u.textureWidth,u.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Se={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,Se),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new ft(p.framebufferWidth,p.framebufferHeight,{format:An,type:nn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Fe.setContext(s),Fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ne(J){for(let ge=0;ge<J.removed.length;ge++){let Se=J.removed[ge],Re=w.indexOf(Se);Re>=0&&(w[Re]=null,A[Re].disconnect(Se))}for(let ge=0;ge<J.added.length;ge++){let Se=J.added[ge],Re=w.indexOf(Se);if(Re===-1){for(let Be=0;Be<A.length;Be++)if(Be>=w.length){w.push(Se),Re=Be;break}else if(w[Be]===null){w[Be]=Se,Re=Be;break}if(Re===-1)break}let _e=A[Re];_e&&_e.connect(Se)}}function W(J,ge){ge===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ge.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let ge=J.near,Se=J.far;m.texture!==null&&(m.depthNear>0&&(ge=m.depthNear),m.depthFar>0&&(Se=m.depthFar)),Y.near=U.near=P.near=ge,Y.far=U.far=P.far=Se,(L!==Y.near||X!==Y.far)&&(s.updateRenderState({depthNear:Y.near,depthFar:Y.far}),L=Y.near,X=Y.far),Y.layers.mask=J.layers.mask|6,P.layers.mask=Y.layers.mask&-5,U.layers.mask=Y.layers.mask&-3;let Re=J.parent,_e=Y.cameras;W(Y,Re);for(let Be=0;Be<_e.length;Be++)W(_e[Be],Re);Y.projectionMatrix.copy(P.projectionMatrix),Y.projectionMatrixInverse.copy(P.projectionMatrixInverse),F===null&&J.isPerspectiveCamera&&(F={camera:J,fov:J.fov,zoom:J.zoom}),j(J,Y,Re)};function j(J,ge,Se){Se===null?J.matrix.copy(ge.matrixWorld):(J.matrix.copy(Se.matrixWorld),J.matrix.invert(),J.matrix.multiply(ge.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ge.projectionMatrix),J.projectionMatrixInverse.copy(ge.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Wa*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return Y},this.getFoveation=function(){if(!(u===null&&p===null))return c},this.setFoveation=function(J){c=J,u!==null&&(u.fixedFoveation=J),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(Y)},this.getCameraTexture=function(J){return d[J]};let ee=null;function Ee(J,ge){if(h=ge.getViewerPose(l||a),_=ge,h!==null){let Se=h.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let Re=!1;Se.length!==Y.cameras.length&&(Y.cameras.length=0,Re=!0);for(let De=0;De<Se.length;De++){let nt=Se[De],st=null;if(p!==null)st=p.getViewport(nt);else{let Ut=f.getViewSubImage(u,nt);st=Ut.viewport,De===0&&(e.setRenderTargetTextures(S,Ut.colorTexture,Ut.depthStencilTexture),e.setRenderTarget(S))}let We=H[De];We===void 0&&(We=new qt,We.layers.enable(De),We.viewport=new dt,H[De]=We),We.matrix.fromArray(nt.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(nt.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(st.x,st.y,st.width,st.height),De===0&&(Y.matrix.copy(We.matrix),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale)),Re===!0&&Y.cameras.push(We)}let _e=s.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){f=n.getBinding();let De=f.getDepthInformation(Se[0]);De&&De.isValid&&De.texture&&m.init(De,s.renderState)}if(_e&&_e.includes("camera-access")&&M){e.state.unbindTexture(),f=n.getBinding();for(let De=0;De<Se.length;De++){let nt=Se[De].camera;if(nt){let st=d[nt];st||(st=new _r,d[nt]=st);let We=f.getCameraImage(nt);st.sourceTexture=We}}}}for(let Se=0;Se<A.length;Se++){let Re=w[Se],_e=A[Se];Re!==null&&_e!==void 0&&_e.update(Re,ge,l||a)}ee&&ee(J,ge),ge.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ge}),_=null}let Fe=new td;Fe.setAnimationLoop(Ee),this.setAnimationLoop=function(J){ee=J},this.dispose=function(){}}},J0=new et,ud=new Ne;ud.set(-1,0,0,0,1,0,0,0,1);function $0(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Tc(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,y,T,S){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(m,d):d.isMeshLambertMaterial?(r(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(m,d),f(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(m,d),u(m,d),d.isMeshPhysicalMaterial&&p(m,d,S)):d.isMeshMatcapMaterial?(r(m,d),_(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),M(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?c(m,d,y,T):d.isSpriteMaterial?l(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Bt&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Bt&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);let y=e.get(d),T=y.envMap,S=y.envMapRotation;T&&(m.envMap.value=T,m.envMapRotation.value.setFromMatrix4(J0.makeRotationFromEuler(S)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(ud),m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function c(m,d,y,T){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*y,m.scale.value=T*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function l(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function u(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,y){m.ior.value=d.ior,d.diffuseRoughness>0&&(m.diffuseRoughness.value=d.diffuseRoughness,d.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=d.diffuseRoughnessMap,t(d.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Bt&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.retroreflectivity>0&&(m.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=d.iridescenceThicknessMaximum,d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=y.texture,m.transmissionSamplerSize.value.set(y.width,y.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,d){d.matcap&&(m.matcap.value=d.matcap)}function M(m,d){let y=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(y.matrixWorld),m.nearDistance.value=y.shadow.camera.near,m.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function K0(i,e,t,n){let s={},r={};function a(y,T){let S=T.program;n.uniformBlockBinding(y,S,s[y.id])}function o(y,T){let S=s[y.id];S===void 0&&(_(y),S=c(y),s[y.id]=S,y.addEventListener("dispose",m));let A=T.program;n.updateUBOMapping(y,A);let w=e.render.frame;r[y.id]!==w&&(l(y),r[y.id]=w)}function c(y){let T=i.createBuffer(),S=y.__size,A=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,S,A),i.bindBuffer(i.UNIFORM_BUFFER,null),T}function l(y){let T=s[y.id],S=y.uniforms,A=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let w=0,g=S.length;w<g;w++){let b=S[w];if(Array.isArray(b))for(let F=0,P=b.length;F<P;F++)h(b[F],w,F,A);else h(b,w,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(y,T,S,A){if(u(y,T,S,A)===!0){let w=y.__offset,g=y.value;if(Array.isArray(g)){let b=0;for(let F=0;F<g.length;F++){let P=g[F],U=M(P,!0);f(P,y.__data,b),b+=U.storage/Float32Array.BYTES_PER_ELEMENT}}else f(g,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,w,y.__data)}}function f(y,T,S){typeof y=="number"||typeof y=="boolean"?T[S]=y:y.isMatrix3?(T[S]=y.elements[0],T[S+1]=y.elements[1],T[S+2]=y.elements[2],T[S+3]=0,T[S+4]=y.elements[3],T[S+5]=y.elements[4],T[S+6]=y.elements[5],T[S+7]=0,T[S+8]=y.elements[6],T[S+9]=y.elements[7],T[S+10]=y.elements[8],T[S+11]=0):ArrayBuffer.isView(y)?T.set(y.subarray(0,T.length-S),S):y.toArray(T,S)}function u(y,T,S,A){let w=y.value,g=T+"_"+S;if(Array.isArray(w)){A[g]===void 0&&(A[g]=[]);let b=A[g],F=!1;for(let P=0;P<w.length;P++)p(w[P],b,P)===!0&&(F=!0);return F}return p(w,A,g)}function p(y,T,S){if(T[S]===void 0)return typeof y=="number"||typeof y=="boolean"?T[S]=y:ArrayBuffer.isView(y)?T[S]=y.slice():T[S]=y.clone(),!0;{let A=T[S];if(typeof y=="number"||typeof y=="boolean"){if(A!==y)return T[S]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(A.equals(y)===!1)return A.copy(y),!0}}return!1}function _(y){let T=y.uniforms,S=0,A=16;for(let g=0,b=T.length;g<b;g++){let F=Array.isArray(T[g])?T[g]:[T[g]];for(let P=0,U=F.length;P<U;P++){let H=F[P],Y=Array.isArray(H.value)?H.value:[H.value],L=Array.isArray(T[g])||Array.isArray(H.value),X=S;for(let G=0,ne=Y.length;G<ne;G++){let W=Y[G],j=M(W,L),ee=S%A,Ee=ee%j.boundary,Fe=ee+Ee;S+=Ee,Fe!==0&&A-Fe<j.storage&&(S+=A-Fe),G===0&&(X=S),S+=j.storage}let K=H.type==="int"?Int32Array:H.type==="uint"?Uint32Array:Float32Array;H.__data=new K((S-X)/Float32Array.BYTES_PER_ELEMENT),H.__offset=X}}let w=S%A;return w>0&&(S+=A-w),y.__size=S,y.__cache={},this}function M(y,T){let S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=16,S.storage=48):y.isMatrix4?(S.boundary=16,S.storage=64):y.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(S.boundary=16,S.storage=y.byteLength):Ie("WebGLRenderer: Unsupported uniform value type.",y),T===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function m(y){let T=y.target;T.removeEventListener("dispose",m),i.deleteBuffer(s[T.id]),delete s[T.id],delete r[T.id]}function d(){for(let y in s)i.deleteBuffer(s[y]);s={},r={}}return{bind:a,update:o,dispose:d}}var Q0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),On=null;function j0(){return On===null&&(On=new hr(Q0,16,16,xi,vt),On.name="DFG_LUT",On.minFilter=Kt,On.magFilter=Kt,On.wrapS=In,On.wrapT=In,On.generateMipmaps=!1,On.needsUpdate=!0),On}var sl=class{constructor(e={}){let{canvas:t=bu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:p=nn}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=a;let M=p,m=new Set([So,Mo,yo]),d=new Set([nn,wn,Ls,Gi,_o,xo]),y=new Uint32Array(4),T=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]},A=null,w=null,g=[],b=[],F=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Fn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,U=!1,H=null,Y=null,L=null,X=null;this._outputColorSpace=Xt;let K=0,G=0,ne=null,W=-1,j=null,ee=new dt,Ee=new dt,Fe=null,J=new ve(0),ge=0,Se=t.width,Re=t.height,_e=1,Be=null,bt=null,De=new dt(0,0,Se,Re),nt=new dt(0,0,Se,Re),st=!1,We=new fi,Ut=new Ja,wt=!1,tn=!1,mt=new et,Rn=new D,It=new dt,un={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},dn=!1;function fn(){return ne===null?_e:1}let N=n;function pn(v,I){return t.getContext(v,I)}let ct,ht,de,At,Pe,Ue,E,x,B,te,Q,re,he,q,Z,oe,R,$,V,le,se,ae,Ae;try{let v={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ce,!1),t.addEventListener("webglcontextrestored",ze,!1),t.addEventListener("webglcontextcreationerror",pe,!1),N===null){let I="webgl2";if(N=pn(I,v),N===null)throw pn(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}He()}catch(v){throw t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",ze,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),Le("WebGLRenderer: "+v.message),v}function He(){ct=new hg(N),ct.init(),se=new q0(N,ct),ht=new jm(N,ct,e,se),de=new W0(N,ct),ht.reversedDepthBuffer&&u&&de.buffers.depth.setReversed(!0),Y=N.createFramebuffer(),L=N.createFramebuffer(),X=N.createFramebuffer(),At=new fg(N),Pe=new P0,Ue=new X0(N,ct,de,Pe,ht,se,At),E=new cg(P),x=new mf(N),ae=new Km(N,x),B=new ug(N,x,At,ae),te=new mg(N,B,x,ae,At),$=new pg(N,ht,Ue),Z=new eg(Pe),Q=new R0(P,E,ct,ht,ae,Z),re=new $0(P,Pe),he=new D0,q=new B0(ct),R=new $m(P,E,de,te,_,c),oe=new V0(P,te,ht),Ae=new K0(N,At,ht,de),V=new Qm(N,ct,At),le=new dg(N,ct,At),At.programs=Q.programs,P.capabilities=ht,P.extensions=ct,P.properties=Pe,P.renderLists=he,P.shadowMap=oe,P.state=de,P.info=At}M!==nn&&(F=new _g(M,t.width,t.height,o,s,r));let ie=new Gc(P,N);this.xr=ie,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){let v=ct.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=ct.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return _e},this.setPixelRatio=function(v){v!==void 0&&(_e=v,this.setSize(Se,Re,!1))},this.getSize=function(v){return v.set(Se,Re)},this.setSize=function(v,I,k=!0){if(ie.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}Se=v,Re=I,t.width=Math.floor(v*_e),t.height=Math.floor(I*_e),k===!0&&(t.style.width=v+"px",t.style.height=I+"px"),F!==null&&F.setSize(t.width,t.height),this.setViewport(0,0,v,I)},this.getDrawingBufferSize=function(v){return v.set(Se*_e,Re*_e).floor()},this.setDrawingBufferSize=function(v,I,k){Se=v,Re=I,_e=k,t.width=Math.floor(v*k),t.height=Math.floor(I*k),this.setViewport(0,0,v,I)},this.setEffects=function(v){if(M===nn){Le("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(v){for(let I=0;I<v.length;I++)if(v[I].isOutputPass===!0){Ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(v||[])},this.getCurrentViewport=function(v){return v.copy(ee)},this.getViewport=function(v){return v.copy(De)},this.setViewport=function(v,I,k,O){v.isVector4?De.set(v.x,v.y,v.z,v.w):De.set(v,I,k,O),de.viewport(ee.copy(De).multiplyScalar(fn()).round())},this.getScissor=function(v){return v.copy(nt)},this.setScissor=function(v,I,k,O){v.isVector4?nt.set(v.x,v.y,v.z,v.w):nt.set(v,I,k,O),de.scissor(Ee.copy(nt).multiplyScalar(fn()).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(v){de.setScissorTest(st=v)},this.setOpaqueSort=function(v){Be=v},this.setTransparentSort=function(v){bt=v},this.getClearColor=function(v){return v.copy(R.getClearColor())},this.setClearColor=function(){R.setClearColor(...arguments)},this.getClearAlpha=function(){return R.getClearAlpha()},this.setClearAlpha=function(){R.setClearAlpha(...arguments)},this.clear=function(v=!0,I=!0,k=!0){let O=0;if(v){let z=!1;if(ne!==null){let ue=ne.texture.format;z=m.has(ue)}if(z){let ue=ne.texture.type,Me=d.has(ue),ce=R.getClearColor(),xe=R.getClearAlpha(),we=ce.r,Oe=ce.g,Xe=ce.b;Me?(y[0]=we,y[1]=Oe,y[2]=Xe,y[3]=xe,N.clearBufferuiv(N.COLOR,0,y)):(T[0]=we,T[1]=Oe,T[2]=Xe,T[3]=xe,N.clearBufferiv(N.COLOR,0,T))}else O|=N.COLOR_BUFFER_BIT}I&&(O|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),k&&(O|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&N.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(v){v.setRenderer(this),H=v},this.dispose=function(){t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",ze,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),R.dispose(),he.dispose(),q.dispose(),Ue.dispose(),Pe.dispose(),E.dispose(),te.dispose(),B.dispose(),ae.dispose(),Ae.dispose(),Q.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Qc),ie.removeEventListener("sessionend",jc),bi.stop()};function Ce(v){v.preventDefault(),nr("WebGLRenderer: Context Lost."),U=!0}function ze(){nr("WebGLRenderer: Context Restored."),U=!1;let v=At.autoReset,I=oe.enabled,k=oe.autoUpdate,O=oe.needsUpdate,z=oe.type;He(),At.autoReset=v,oe.enabled=I,oe.autoUpdate=k,oe.needsUpdate=O,oe.type=z}function pe(v){Le("WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function it(v){let I=v.target;I.removeEventListener("dispose",it),Dt(I)}function Dt(v){ai(v),Pe.remove(v)}function ai(v){let I=Pe.get(v).programs;I!==void 0&&(I.forEach(function(k){Q.releaseProgram(k)}),v.isShaderMaterial&&Q.releaseShaderCache(v))}this.renderBufferDirect=function(v,I,k,O,z,ue){I===null&&(I=un);let Me=z.isMesh&&z.matrixWorld.determinantAffine()<0,ce=Ad(v,I,k,O,z);de.setMaterial(O,Me);let xe=k.index,we=1;if(O.wireframe===!0){if(xe=B.getWireframeAttribute(k),xe===void 0)return;we=2}let Oe=k.drawRange,Xe=k.attributes.position,be=Oe.start*we,qe=(Oe.start+Oe.count)*we;ue!==null&&(be=Math.max(be,ue.start*we),qe=Math.min(qe,(ue.start+ue.count)*we)),xe!==null?(be=Math.max(be,0),qe=Math.min(qe,xe.count)):Xe!=null&&(be=Math.max(be,0),qe=Math.min(qe,Xe.count));let Tt=qe-be;if(Tt<0||Tt===1/0)return;ae.setup(z,O,ce,k,xe);let at,rt=V;if(xe!==null&&(at=x.get(xe),rt=le,rt.setIndex(at)),z.isMesh)O.wireframe===!0?(de.setLineWidth(O.wireframeLinewidth*fn()),rt.setMode(N.LINES)):rt.setMode(N.TRIANGLES);else if(z.isLine){let kt=O.linewidth;kt===void 0&&(kt=1),de.setLineWidth(kt*fn()),z.isLineSegments?rt.setMode(N.LINES):z.isLineLoop?rt.setMode(N.LINE_LOOP):rt.setMode(N.LINE_STRIP)}else z.isPoints?rt.setMode(N.POINTS):z.isSprite&&rt.setMode(N.TRIANGLES);if(z.isBatchedMesh)if(ct.get("WEBGL_multi_draw"))rt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let kt=z._multiDrawStarts,Te=z._multiDrawCounts,Jt=z._multiDrawCount,je=xe?x.get(xe).bytesPerElement:1,Ti=Pe.get(O).currentProgram.getUniforms();for(let Gt=0;Gt<Jt;Gt++)Ti.setValue(N,"_gl_DrawID",Gt),rt.render(kt[Gt]/je,Te[Gt])}else if(z.isInstancedMesh)rt.renderInstances(be,Tt,z.count);else if(k.isInstancedBufferGeometry){let kt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Te=Math.min(k.instanceCount,kt);rt.renderInstances(be,Tt,Te)}else rt.render(be,Tt)};function Kc(v,I,k,O){H!==null&&v.isNodeMaterial&&H.setObject(O,v),wt===!0&&Z.setState(v,k,!1),v.transparent===!0&&v.side===ln&&v.forceSinglePass===!1?(v.side=Bt,v.needsUpdate=!0,ks(v,I,O),v.side=_i,v.needsUpdate=!0,ks(v,I,O),v.side=ln):ks(v,I,O)}this.compile=function(v,I,k=null){k===null&&(k=v),H!==null&&H.renderStart(v,I,k),w=q.get(k),w.init(I),b.push(w),k.traverseVisible(function(z){z.isLight&&z.layers.test(I.layers)&&(w.pushLight(z),z.castShadow&&w.pushShadow(z))}),v!==k&&v.traverseVisible(function(z){z.isLight&&z.layers.test(I.layers)&&(w.pushLight(z),z.castShadow&&w.pushShadow(z))}),w.setupLights(),H!==null&&H.updateLights(w.state.lightsArray),tn=this.localClippingEnabled,wt=Z.init(this.clippingPlanes,tn),wt===!0&&Z.setGlobalState(this.clippingPlanes,I),H!==null&&oe.render(w.state.shadowsArray,k,I);let O=new Set;return v.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let ue=z.material;if(ue)if(Array.isArray(ue))for(let Me=0;Me<ue.length;Me++){let ce=ue[Me];Kc(ce,k,I,z),O.add(ce)}else Kc(ue,k,I,z),O.add(ue)}),w=b.pop(),H!==null&&H.renderEnd(),O},this.compileAsync=function(v,I,k=null){let O=this.compile(v,I,k);return new Promise(z=>{function ue(){if(O.forEach(function(Me){let xe=Pe.get(Me).currentProgram;(xe===void 0||xe.isReady())&&O.delete(Me)}),O.size===0){z(v);return}setTimeout(ue,10)}ct.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Sl=null;function Ed(v){Sl&&Sl(v)}function Qc(){bi.stop()}function jc(){bi.start()}let bi=new td;bi.setAnimationLoop(Ed),typeof self<"u"&&bi.setContext(self),this.setAnimationLoop=function(v){Sl=v,ie.setAnimationLoop(v),v===null?bi.stop():bi.start()},ie.addEventListener("sessionstart",Qc),ie.addEventListener("sessionend",jc),this.render=function(v,I){if(I!==void 0&&I.isCamera!==!0){Le("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(U===!0)return;H!==null&&H.renderStart(v,I);let k=ie.enabled===!0&&ie.isPresenting===!0,O=F!==null&&(ne===null||k)&&F.begin(P,ne);if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(I),I=ie.getCamera()),v.isScene===!0&&v.onBeforeRender(P,v,I,ne),w=q.get(v,b.length),w.init(I),w.state.textureUnits=Ue.getTextureUnits(),b.push(w),mt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),I.isArrayCamera?Ut.setFromArrayCamera(I):We.setFromProjectionMatrix(mt,gn,I.reversedDepth),tn=this.localClippingEnabled,wt=Z.init(this.clippingPlanes,tn),A=he.get(v,g.length),A.init(),g.push(A),this.info.render.frame++,ie.enabled===!0&&ie.isPresenting===!0){let Me=P.xr.getDepthSensingMesh();Me!==null&&bl(Me,I,-1/0,P.sortObjects)}bl(v,I,0,P.sortObjects),A.finish(),H!==null&&H.updateLights(w.state.lightsArray),P.sortObjects===!0&&A.sort(Be,bt),dn=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,dn&&R.addToRenderList(A,v),this.info.autoReset===!0&&this.info.reset(),wt===!0&&Z.beginShadows();let z=w.state.shadowsArray;if(oe.render(z,v,I),wt===!0&&Z.endShadows(),(O&&F.hasRenderPass())===!1){let Me=A.opaque,ce=A.transmissive;if(w.setupLights(),I.isArrayCamera){let xe=I.cameras;if(ce.length>0)for(let we=0,Oe=xe.length;we<Oe;we++){let Xe=xe[we];th(Me,ce,v,Xe)}dn&&R.render(v);for(let we=0,Oe=xe.length;we<Oe;we++){let Xe=xe[we];eh(A,v,Xe,Xe.viewport)}}else ce.length>0&&th(Me,ce,v,I),dn&&R.render(v),eh(A,v,I)}ne!==null&&G===0&&(Ue.updateMultisampleRenderTarget(ne),Ue.updateRenderTargetMipmap(ne)),O&&F.end(P),v.isScene===!0&&v.onAfterRender(P,v,I),ae.resetDefaultState(),W=-1,j=null,b.pop(),b.length>0?(w=b[b.length-1],Ue.setTextureUnits(w.state.textureUnits),wt===!0&&Z.setGlobalState(P.clippingPlanes,w.state.camera)):w=null,g.pop(),g.length>0?A=g[g.length-1]:A=null,H!==null&&H.renderEnd()};function bl(v,I,k,O){if(v.visible===!1)return;if(v.layers.test(I.layers)){if(v.isGroup)k=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(I);else if(v.isLight)w.pushLight(v),v.castShadow&&w.pushShadow(v);else if(v.isSprite){let Me=I.isArrayCamera?Ut:We;if(!v.frustumCulled||v.intersectsFrustum(Me)){O&&It.setFromMatrixPosition(v.matrixWorld).applyMatrix4(mt);let ce=te.update(v),xe=v.material;xe.visible&&A.push(v,ce,xe,k,It.z,null,I)}}else if(v.isMesh||v.isLine||v.isPoints){let Me=I.isArrayCamera?Ut:We;if(!v.frustumCulled||v.intersectsFrustum(Me)){let ce=te.update(v),xe=v.material;if(O&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),It.copy(v.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),It.copy(ce.boundingSphere.center)),It.applyMatrix4(v.matrixWorld).applyMatrix4(mt)),Array.isArray(xe)){let we=ce.groups;for(let Oe=0,Xe=we.length;Oe<Xe;Oe++){let be=we[Oe],qe=xe[be.materialIndex];qe&&qe.visible&&A.push(v,ce,qe,k,It.z,be,I)}}else xe.visible&&A.push(v,ce,xe,k,It.z,null,I)}}}let ue=v.children;for(let Me=0,ce=ue.length;Me<ce;Me++)bl(ue[Me],I,k,O)}function eh(v,I,k,O){let{opaque:z,transmissive:ue,transparent:Me}=v;w.setupLightsView(k),wt===!0&&Z.setGlobalState(P.clippingPlanes,k),O&&de.viewport(ee.copy(O)),z.length>0&&na(z,I,k),ue.length>0&&na(ue,I,k),Me.length>0&&na(Me,I,k),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function th(v,I,k,O){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[O.id]===void 0){let be=ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[O.id]=new ft(1,1,{generateMipmaps:!0,type:be?vt:nn,minFilter:jn,samples:Math.max(4,ht.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ge.workingColorSpace})}let ue=w.state.transmissionRenderTarget[O.id],Me=O.viewport||ee;ue.setSize(Me.z*P.transmissionResolutionScale,Me.w*P.transmissionResolutionScale);let ce=P.getRenderTarget(),xe=P.getActiveCubeFace(),we=P.getActiveMipmapLevel();P.setRenderTarget(ue),P.getClearColor(J),ge=P.getClearAlpha(),ge<1&&P.setClearColor(16777215,.5),P.clear(),dn&&R.render(k);let Oe=P.toneMapping;P.toneMapping=Fn;let Xe=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),w.setupLightsView(O),wt===!0&&Z.setGlobalState(P.clippingPlanes,O),na(v,k,O),Ue.updateMultisampleRenderTarget(ue),Ue.updateRenderTargetMipmap(ue),ct.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let qe=0,Tt=I.length;qe<Tt;qe++){let at=I[qe],{object:rt,geometry:kt,material:Te,group:Jt}=at;if(Te.side===ln&&rt.layers.test(O.layers)){let je=Te.side;Te.side=Bt,Te.needsUpdate=!0,nh(rt,k,O,kt,Te,Jt),Te.side=je,Te.needsUpdate=!0,be=!0}}be===!0&&(Ue.updateMultisampleRenderTarget(ue),Ue.updateRenderTargetMipmap(ue))}P.setRenderTarget(ce,xe,we),P.setClearColor(J,ge),Xe!==void 0&&(O.viewport=Xe),P.toneMapping=Oe}function na(v,I,k){let O=I.isScene===!0?I.overrideMaterial:null;for(let z=0,ue=v.length;z<ue;z++){let Me=v[z],{object:ce,geometry:xe,group:we}=Me,Oe=Me.material;Oe.allowOverride===!0&&O!==null&&(Oe=O),ce.layers.test(k.layers)&&nh(ce,I,k,xe,Oe,we)}}function nh(v,I,k,O,z,ue){H!==null&&z.isNodeMaterial&&H.setObject(v,z),v.onBeforeRender(P,I,k,O,z,ue),v.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),z.onBeforeRender(P,I,k,O,v,ue),z.transparent===!0&&z.side===ln&&z.forceSinglePass===!1?(z.side=Bt,z.needsUpdate=!0,P.renderBufferDirect(k,I,O,z,v,ue),z.side=_i,z.needsUpdate=!0,P.renderBufferDirect(k,I,O,z,v,ue),z.side=ln):P.renderBufferDirect(k,I,O,z,v,ue),v.onAfterRender(P,I,k,O,z,ue)}function ih(v){let I=0;for(let k of v)k.texture!==null&&I++;return I}function ks(v,I,k){I.isScene!==!0&&(I=un);let O=Pe.get(v),z=w.state.lights,ue=w.state.shadowsArray,Me=z.state.version,ce=Q.getParameters(v,z.state,ue,I,k,w.state.lightProbeGridArray),xe=Q.getProgramCacheKey(ce),we=O.programs;O.environment=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?I.environment:null,O.fog=I.fog;let Oe=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap;O.envMap=E.get(v.envMap||O.environment,Oe),O.envMapRotation=O.environment!==null&&v.envMap===null?I.environmentRotation:v.envMapRotation,we===void 0&&(v.addEventListener("dispose",it),we=new Map,O.programs=we,O.programVariants=new Map);let Xe=we.get(xe);if(Xe!==void 0){if(O.currentProgram===Xe&&O.lightsStateVersion===Me)return rh(v,ce),Xe}else ce.uniforms=Q.getUniforms(v),H!==null&&v.isNodeMaterial&&H.build(v,k,ce),v.onBeforeCompile(ce,P),Xe=Q.acquireProgram(ce,xe),we.set(xe,Xe),O.uniforms=ce.uniforms;let be=O.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(be.clippingPlanes=Z.uniform),rh(v,ce),O.needsLights=Rd(v),O.lightsStateVersion=Me,O.needsLights&&(be.ambientLightColor.value=z.state.ambient,be.lightProbe.value=z.state.probe,be.sunLights.value=z.state.sun,be.sunLightShadows.value=z.state.sunShadow,be.directionalLights.value=z.state.directional,be.directionalLightShadows.value=z.state.directionalShadow,be.spotLights.value=z.state.spot,be.spotLightShadows.value=z.state.spotShadow,be.rectAreaLights.value=z.state.rectArea,be.ltc_1.value=z.state.rectAreaLTC1,be.ltc_2.value=z.state.rectAreaLTC2,be.pointLights.value=z.state.point,be.pointLightShadows.value=z.state.pointShadow,be.hemisphereLights.value=z.state.hemi,be.sunShadowMatrix.value=z.state.sunShadowMatrix,be.sunShadowCascade.value=z.state.sunShadowCascade,be.directionalShadowMatrix.value=z.state.directionalShadowMatrix,be.spotLightMatrix.value=z.state.spotLightMatrix,be.spotLightMap.value=z.state.spotLightMap,be.pointShadowMatrix.value=z.state.pointShadowMatrix),O.numLightProbeGrids=ih(w.state.lightProbeGridArray),O.currentProgram=Xe,O.uniformsList=null,Xe}function wd(v,I,k,O,z){let ue=Pe.get(v),Me=ue.currentProgram.id+","+O+","+z,ce=ue.programVariants.get(Me);return ce===void 0?(ce=ks(v,I,k),ue.programVariants.set(Me,ce)):(ue.currentProgram=ce,ue.uniformsList=null,ue.outputColorSpace=O,ue.toneMapping=z),ce}function sh(v){if(v.uniformsList===null){let I=v.currentProgram.getUniforms();v.uniformsList=Ns.seqWithValue(I.seq,v.uniforms)}return v.uniformsList}function rh(v,I){let k=Pe.get(v);k.outputColorSpace=I.outputColorSpace,k.batching=I.batching,k.batchingColor=I.batchingColor,k.instancing=I.instancing,k.instancingColor=I.instancingColor,k.instancingMorph=I.instancingMorph,k.skinning=I.skinning,k.morphTargets=I.morphTargets,k.morphNormals=I.morphNormals,k.morphColors=I.morphColors,k.morphTargetsCount=I.morphTargetsCount,k.numClippingPlanes=I.numClippingPlanes,k.numIntersection=I.numClipIntersection,k.vertexAlphas=I.vertexAlphas,k.vertexTangents=I.vertexTangents,k.toneMapping=I.toneMapping}function Ad(v,I,k,O,z){I.isScene!==!0&&(I=un),Ue.resetTextureUnits();let ue=I.fog,Me=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?I.environment:null,ce=ne===null?P.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Ge.workingColorSpace,xe=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,we=E.get(O.envMap||Me,xe),Oe=O.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Xe=!!k.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),be=!!k.morphAttributes.position,qe=!!k.morphAttributes.normal,Tt=!!k.morphAttributes.color,at=Fn;O.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(at=P.toneMapping);let rt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,kt=rt!==void 0?rt.length:0,Te=Pe.get(O),Jt=w.state.lights;if(wt===!0&&(tn===!0||v!==j)){let gt=v===j&&O.id===W;Z.setState(O,v,gt)}let je=!1,Ti=!1;O.version===Te.__version?Te.needsLights&&Te.lightsStateVersion!==Jt.state.version||z.isBatchedMesh&&Te.batching===!1||!z.isBatchedMesh&&Te.batching===!0||z.isBatchedMesh&&Te.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&Te.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&Te.instancing===!1||!z.isInstancedMesh&&Te.instancing===!0||z.isSkinnedMesh&&Te.skinning===!1||!z.isSkinnedMesh&&Te.skinning===!0||z.isInstancedMesh&&Te.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Te.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Te.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Te.instancingMorph===!1&&z.morphTexture!==null||Te.envMap!==we||O.fog===!0&&Te.fog!==ue||Te.numClippingPlanes!==void 0&&(Te.numClippingPlanes!==Z.numPlanes||Te.numIntersection!==Z.numIntersection)||Te.vertexAlphas!==Oe||Te.vertexTangents!==Xe||Te.morphTargets!==be||Te.morphNormals!==qe||Te.morphColors!==Tt||Te.morphTargetsCount!==kt||Te.numLightProbeGrids!==ih(w.state.lightProbeGridArray)?je=!0:(Te.outputColorSpace!==ce||Te.toneMapping!==at)&&(Ti=!0):(je=!0,Te.__version=O.version);let Gt=Te.currentProgram;(je===!0||Ti===!0)&&(Gt=Ti===!0?wd(O,I,z,ce,at):ks(O,I,z),H&&O.isNodeMaterial&&H.onUpdateProgram(O,Gt,Te));let ia=!1,oi=!1,Ei=!1,$e=Gt.getUniforms(),Ft=Te.uniforms;if(de.useProgram(Gt.program)&&(ia=!0,oi=!0,Ei=!0),O.id!==W&&(W=O.id,oi=!0),ia||j!==v){de.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),$e.setValue(N,"projectionMatrix",v.projectionMatrix),$e.setValue(N,"viewMatrix",v.matrixWorldInverse);let Lt=$e.map.cameraPosition;Lt!==void 0&&Lt.setValue(N,Rn.setFromMatrixPosition(v.matrixWorld)),ht.logarithmicDepthBuffer&&$e.setValue(N,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&$e.setValue(N,"isOrthographic",v.isOrthographicCamera===!0),j!==v&&(j=v,oi=!0,Ei=!0)}if(Te.needsLights&&(Jt.state.sunShadowMap.length>0&&$e.setValue(N,"sunShadowMap",Jt.state.sunShadowMap,Ue),Jt.state.directionalShadowMap.length>0&&$e.setValue(N,"directionalShadowMap",Jt.state.directionalShadowMap,Ue),Jt.state.spotShadowMap.length>0&&$e.setValue(N,"spotShadowMap",Jt.state.spotShadowMap,Ue),Jt.state.pointShadowMap.length>0&&$e.setValue(N,"pointShadowMap",Jt.state.pointShadowMap,Ue)),z.isSkinnedMesh){$e.setOptional(N,z,"bindMatrix"),$e.setOptional(N,z,"bindMatrixInverse");let gt=z.skeleton;gt&&(gt.boneTexture===null&&gt.computeBoneTexture(),$e.setValue(N,"boneTexture",gt.boneTexture,Ue))}z.isBatchedMesh&&($e.setOptional(N,z,"batchingTexture"),$e.setValue(N,"batchingTexture",z._matricesTexture,Ue),$e.setOptional(N,z,"batchingIdTexture"),$e.setValue(N,"batchingIdTexture",z._indirectTexture,Ue),$e.setOptional(N,z,"batchingColorTexture"),z._colorsTexture!==null&&$e.setValue(N,"batchingColorTexture",z._colorsTexture,Ue));let Mn=k.morphAttributes;if((Mn.position!==void 0||Mn.normal!==void 0||Mn.color!==void 0)&&$.update(z,k,Gt),(oi||Te.receiveShadow!==z.receiveShadow)&&(Te.receiveShadow=z.receiveShadow,$e.setValue(N,"receiveShadow",z.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&I.environment!==null&&(Ft.envMapIntensity.value=I.environmentIntensity),Ft.dfgLUT!==void 0&&(Ft.dfgLUT.value=j0()),oi){if($e.setValue(N,"toneMappingExposure",P.toneMappingExposure),Te.needsLights&&Cd(Ft,Ei),ue&&O.fog===!0&&re.refreshFogUniforms(Ft,ue),re.refreshMaterialUniforms(Ft,O,_e,Re,w.state.transmissionRenderTarget[v.id]),Te.needsLights&&Te.numLightProbeGrids>0){let gt=S,Lt=0;for(let Hn of w.state.lightProbeGridArray)Hn.texture!==null&&(gt.textures[Lt]=Hn.texture,gt.min[Lt]=Hn.boundingBox.min,gt.max[Lt]=Hn.boundingBox.max,gt.resolution[Lt]=Hn.resolution,Lt++);for(let Hn in gt)gt[Hn].length=Lt;Ft.probesSH.value=gt.textures,Ft.probesMin.value=gt.min,Ft.probesMax.value=gt.max,Ft.probesResolution.value=gt.resolution}Ns.upload(N,sh(Te),Ft,Ue)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Ns.upload(N,sh(Te),Ft,Ue),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&$e.setValue(N,"center",z.center),$e.setValue(N,"modelViewMatrix",z.modelViewMatrix),$e.setValue(N,"normalMatrix",z.normalMatrix),$e.setValue(N,"modelMatrix",z.matrixWorld),O.uniformsGroups!==void 0){let gt=O.uniformsGroups;for(let Lt=0,Hn=gt.length;Lt<Hn;Lt++){let oh=gt[Lt];Ae.update(oh,Gt),Ae.bind(oh,Gt)}}return Gt}function Cd(v,I){v.ambientLightColor.needsUpdate=I,v.lightProbe.needsUpdate=I,v.sunLights.needsUpdate=I,v.sunLightShadows.needsUpdate=I,v.directionalLights.needsUpdate=I,v.directionalLightShadows.needsUpdate=I,v.pointLights.needsUpdate=I,v.pointLightShadows.needsUpdate=I,v.spotLights.needsUpdate=I,v.spotLightShadows.needsUpdate=I,v.rectAreaLights.needsUpdate=I,v.hemisphereLights.needsUpdate=I}function Rd(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return K},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(v,I,k){let O=Pe.get(v);O.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),Pe.get(v.texture).__webglTexture=I,Pe.get(v.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:k,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,I){let k=Pe.get(v);k.__webglFramebuffer=I,k.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(v,I=0,k=0){ne=v,K=I,G=k;let O=null,z=!1,ue=!1;if(v){let ce=Pe.get(v);if(ce.__useDefaultFramebuffer!==void 0){de.bindFramebuffer(N.FRAMEBUFFER,ce.__webglFramebuffer),ee.copy(v.viewport),Ee.copy(v.scissor),Fe=v.scissorTest,de.viewport(ee),de.scissor(Ee),de.setScissorTest(Fe),W=-1;return}else if(ce.__webglFramebuffer===void 0)Ue.setupRenderTarget(v);else if(ce.__hasExternalTextures)Ue.rebindTextures(v,Pe.get(v.texture).__webglTexture,Pe.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let Oe=v.depthTexture;if(ce.__boundDepthTexture!==Oe){if(Oe!==null&&Pe.has(Oe)&&(v.width!==Oe.image.width||v.height!==Oe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ue.setupDepthRenderbuffer(v)}}let xe=v.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(ue=!0);let we=Pe.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(we[I])?O=we[I][k]:O=we[I],z=!0):v.samples>0&&Ue.useMultisampledRTT(v)===!1?O=Pe.get(v).__webglMultisampledFramebuffer:Array.isArray(we)?O=we[k]:O=we,ee.copy(v.viewport),Ee.copy(v.scissor),Fe=v.scissorTest}else ee.copy(De).multiplyScalar(_e).floor(),Ee.copy(nt).multiplyScalar(_e).floor(),Fe=st;if(k!==0&&(O=Y),de.bindFramebuffer(N.FRAMEBUFFER,O)&&de.drawBuffers(v,O),de.viewport(ee),de.scissor(Ee),de.setScissorTest(Fe),z){let ce=Pe.get(v.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+I,ce.__webglTexture,k)}else if(ue){let ce=I;for(let xe=0;xe<v.textures.length;xe++){let we=Pe.get(v.textures[xe]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+xe,we.__webglTexture,k,ce)}}else if(v!==null&&k!==0){let ce=Pe.get(v.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ce.__webglTexture,k)}W=-1};function ah(v){let I=Pe.get(v);return(I.__readFormat!==v.format||I.__readType!==v.type)&&(I.__readFormat=v.format,I.__readType=v.type,I.__formatReadable=ht.textureFormatReadable(v.format),I.__typeReadable=ht.textureTypeReadable(v.type)),I}this.readRenderTargetPixels=function(v,I,k,O,z,ue,Me,ce=0){if(!(v&&v.isWebGLRenderTarget)){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Pe.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Me!==void 0&&(xe=xe[Me],Array.isArray(xe)&&(xe=xe[0])),xe){de.bindFramebuffer(N.FRAMEBUFFER,xe);try{let we=v.textures[ce],Oe=we.format,Xe=we.type;v.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ce);let be=ah(we);if(be.__formatReadable===!1){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(be.__typeReadable===!1){Le("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=v.width-O&&k>=0&&k<=v.height-z&&N.readPixels(I,k,O,z,se.convert(Oe),se.convert(Xe),ue)}finally{let we=ne!==null?Pe.get(ne).__webglFramebuffer:null;de.bindFramebuffer(N.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(v,I,k,O,z,ue,Me,ce=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=Pe.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Me!==void 0&&(xe=xe[Me],Array.isArray(xe)&&(xe=xe[0])),xe)if(I>=0&&I<=v.width-O&&k>=0&&k<=v.height-z){de.bindFramebuffer(N.FRAMEBUFFER,xe);let we=v.textures[ce],Oe=we.format,Xe=we.type;v.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ce);let be=ah(we);if(be.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(be.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let qe=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,qe),N.bufferData(N.PIXEL_PACK_BUFFER,ue.byteLength,N.STREAM_READ),N.readPixels(I,k,O,z,se.convert(Oe),se.convert(Xe),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);let Tt=ne!==null?Pe.get(ne).__webglFramebuffer:null;de.bindFramebuffer(N.FRAMEBUFFER,Tt);let at=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Eu(N,at,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,qe),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ue),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(qe),N.deleteSync(at),ue}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,I=null,k=0){let O=Math.pow(2,-k),z=Math.floor(v.image.width*O),ue=Math.floor(v.image.height*O),Me=I!==null?I.x:0,ce=I!==null?I.y:0;Ue.setTexture2D(v,0),N.copyTexSubImage2D(N.TEXTURE_2D,k,0,0,Me,ce,z,ue),de.unbindTexture()},this.copyTextureToTexture=function(v,I,k=null,O=null,z=0,ue=0){let Me,ce,xe,we,Oe,Xe,be,qe,Tt,at=v.isCompressedTexture?v.mipmaps[ue]:v.image;if(k!==null)Me=k.max.x-k.min.x,ce=k.max.y-k.min.y,xe=k.isBox3?k.max.z-k.min.z:1,we=k.min.x,Oe=k.min.y,Xe=k.isBox3?k.min.z:0;else{let $e=Math.pow(2,-z);Me=Math.floor(at.width*$e),ce=Math.floor(at.height*$e),v.isDataArrayTexture?xe=at.depth:v.isData3DTexture?xe=Math.floor(at.depth*$e):xe=1,we=0,Oe=0,Xe=0}O!==null?(be=O.x,qe=O.y,Tt=O.z):(be=0,qe=0,Tt=0);let rt=se.convert(I.format),kt=se.convert(I.type),Te;I.isData3DTexture?(Ue.setTexture3D(I,0),Te=N.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(Ue.setTexture2DArray(I,0),Te=N.TEXTURE_2D_ARRAY):(Ue.setTexture2D(I,0),Te=N.TEXTURE_2D),de.activeTexture(N.TEXTURE0),de.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,I.flipY),de.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),de.pixelStorei(N.UNPACK_ALIGNMENT,I.unpackAlignment);let Jt=de.getParameter(N.UNPACK_ROW_LENGTH),je=de.getParameter(N.UNPACK_IMAGE_HEIGHT),Ti=de.getParameter(N.UNPACK_SKIP_PIXELS),Gt=de.getParameter(N.UNPACK_SKIP_ROWS),ia=de.getParameter(N.UNPACK_SKIP_IMAGES);de.pixelStorei(N.UNPACK_ROW_LENGTH,at.width),de.pixelStorei(N.UNPACK_IMAGE_HEIGHT,at.height),de.pixelStorei(N.UNPACK_SKIP_PIXELS,we),de.pixelStorei(N.UNPACK_SKIP_ROWS,Oe),de.pixelStorei(N.UNPACK_SKIP_IMAGES,Xe);let oi=v.isDataArrayTexture||v.isData3DTexture,Ei=I.isDataArrayTexture||I.isData3DTexture;if(v.isDepthTexture){let $e=Pe.get(v),Ft=Pe.get(I),Mn=Pe.get($e.__renderTarget),gt=Pe.get(Ft.__renderTarget);de.bindFramebuffer(N.READ_FRAMEBUFFER,Mn.__webglFramebuffer),de.bindFramebuffer(N.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let Lt=0;Lt<xe;Lt++)oi&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Pe.get(v).__webglTexture,z,Xe+Lt),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Pe.get(I).__webglTexture,ue,Tt+Lt)),N.blitFramebuffer(we,Oe,we+Me,Oe+ce,be,qe,be+Me,qe+ce,N.DEPTH_BUFFER_BIT,N.NEAREST);de.bindFramebuffer(N.READ_FRAMEBUFFER,null),de.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(z!==0||v.isRenderTargetTexture||Pe.has(v)){let $e=Pe.get(v),Ft=Pe.get(I);de.bindFramebuffer(N.READ_FRAMEBUFFER,L),de.bindFramebuffer(N.DRAW_FRAMEBUFFER,X);for(let Mn=0;Mn<xe;Mn++)oi?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,$e.__webglTexture,z,Xe+Mn):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,$e.__webglTexture,z),Ei?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ft.__webglTexture,ue,Tt+Mn):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ft.__webglTexture,ue),z!==0?N.blitFramebuffer(we,Oe,we+Me,Oe+ce,be,qe,be+Me,qe+ce,N.COLOR_BUFFER_BIT,N.NEAREST):Ei?N.copyTexSubImage3D(Te,ue,be,qe,Tt+Mn,we,Oe,Me,ce):N.copyTexSubImage2D(Te,ue,be,qe,we,Oe,Me,ce);de.bindFramebuffer(N.READ_FRAMEBUFFER,null),de.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else Ei?v.isDataTexture||v.isData3DTexture?N.texSubImage3D(Te,ue,be,qe,Tt,Me,ce,xe,rt,kt,at.data):I.isCompressedArrayTexture?N.compressedTexSubImage3D(Te,ue,be,qe,Tt,Me,ce,xe,rt,at.data):N.texSubImage3D(Te,ue,be,qe,Tt,Me,ce,xe,rt,kt,at):v.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,ue,be,qe,Me,ce,rt,kt,at.data):v.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,ue,be,qe,at.width,at.height,rt,at.data):N.texSubImage2D(N.TEXTURE_2D,ue,be,qe,Me,ce,rt,kt,at);de.pixelStorei(N.UNPACK_ROW_LENGTH,Jt),de.pixelStorei(N.UNPACK_IMAGE_HEIGHT,je),de.pixelStorei(N.UNPACK_SKIP_PIXELS,Ti),de.pixelStorei(N.UNPACK_SKIP_ROWS,Gt),de.pixelStorei(N.UNPACK_SKIP_IMAGES,ia),ue===0&&I.generateMipmaps===!0&&I.mipmapsAutoUpdate===!0&&N.generateMipmap(Te),de.unbindTexture()},this.initRenderTarget=function(v){Pe.get(v).__webglFramebuffer===void 0&&Ue.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Ue.setTextureCube(v,0):v.isData3DTexture?Ue.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Ue.setTexture2DArray(v,0):Ue.setTexture2D(v,0),de.unbindTexture()},this.resetState=function(){K=0,G=0,ne=null,de.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Ge._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ge._getUnpackColorSpace()}};var zn={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var zt=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},t_=new Oi(-1,1,1,-1,0,1),Vc=class extends pt{constructor(){super(),this.setAttribute("position",new Ze([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ze([0,2,0,0,2,0],2))}},n_=new Vc,hn=class{constructor(e){this._mesh=new Ke(n_,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,t_)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Fs=class extends zt{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof tt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=sn.clone(e.uniforms),this.material=new tt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new hn(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Zr=class extends zt{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},ol=class extends zt{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var ll=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ye);this._width=n.width,this._height=n.height,t=new ft(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:vt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Fs(zn),this.copyPass.material.blending=cn,this.timer=new Rr}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Zr!==void 0&&(a instanceof Zr?n=!0:a instanceof ol&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ye);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var cl=class extends zt{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ve}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var Jr={name:"BokehShader",defines:{DEPTH_PACKING:1,PERSPECTIVE_CAMERA:1},uniforms:{tColor:{value:null},tDepth:{value:null},focus:{value:1},aspect:{value:1},aperture:{value:.025},maxblur:{value:.01},nearClip:{value:1},farClip:{value:1e3}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#include <common>

		varying vec2 vUv;

		uniform sampler2D tColor;
		uniform sampler2D tDepth;

		uniform float maxblur; // max blur amount
		uniform float aperture; // aperture - bigger values for shallower depth of field

		uniform float nearClip;
		uniform float farClip;

		uniform float focus;
		uniform float aspect;

		#include <packing>

		float getDepth( const in vec2 screenPosition ) {
			#if DEPTH_PACKING == 1
			return unpackRGBAToDepth( texture2D( tDepth, screenPosition ) );
			#else
			return texture2D( tDepth, screenPosition ).x;
			#endif
		}

		float getViewZ( const in float depth ) {
			#if PERSPECTIVE_CAMERA == 1
			return perspectiveDepthToViewZ( depth, nearClip, farClip );
			#else
			return orthographicDepthToViewZ( depth, nearClip, farClip );
			#endif
		}


		void main() {

			vec2 aspectcorrect = vec2( 1.0, aspect );

			float viewZ = getViewZ( getDepth( vUv ) );

			float factor = ( focus + viewZ ); // viewZ is <= 0, so this is a difference equation

			vec2 dofblur = vec2 ( clamp( factor * aperture, -maxblur, maxblur ) );

			vec2 dofblur9 = dofblur * 0.9;
			vec2 dofblur7 = dofblur * 0.7;
			vec2 dofblur4 = dofblur * 0.4;

			vec4 col = vec4( 0.0 );

			col += texture2D( tColor, vUv.xy );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15, -0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.15,  0.37 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.37,  0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.37, -0.15 ) * aspectcorrect ) * dofblur9 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.15, -0.37 ) * aspectcorrect ) * dofblur9 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.40,  0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur7 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur7 );

			col += texture2D( tColor, vUv.xy + ( vec2(  0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,  -0.4  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29,  0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.4,   0.0  ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2( -0.29, -0.29 ) * aspectcorrect ) * dofblur4 );
			col += texture2D( tColor, vUv.xy + ( vec2(  0.0,   0.4  ) * aspectcorrect ) * dofblur4 );

			gl_FragColor = col / 41.0;
			gl_FragColor.a = 1.0;

		}`};var hl=class extends zt{constructor(e,t,n){super(),this.scene=e,this.camera=t;let s=n.focus!==void 0?n.focus:1,r=n.aperture!==void 0?n.aperture:.025,a=n.maxblur!==void 0?n.maxblur:1;this._renderTargetDepth=new ft(1,1,{minFilter:ut,magFilter:ut,type:vt}),this._renderTargetDepth.texture.name="BokehPass.depth",this._materialDepth=new ws,this._materialDepth.depthPacking=_c,this._materialDepth.blending=cn;let o=sn.clone(Jr.uniforms);o.tDepth.value=this._renderTargetDepth.texture,o.focus.value=s,o.aspect.value=t.aspect,o.aperture.value=r,o.maxblur.value=a,o.nearClip.value=t.near,o.farClip.value=t.far,this.materialBokeh=new tt({defines:Object.assign({},Jr.defines),uniforms:o,vertexShader:Jr.vertexShader,fragmentShader:Jr.fragmentShader}),this.uniforms=o,this._fsQuad=new hn(this.materialBokeh),this._oldClearColor=new ve}render(e,t,n){this.scene.overrideMaterial=this._materialDepth,e.getClearColor(this._oldClearColor);let s=e.getClearAlpha(),r=e.autoClear;e.autoClear=!1,e.setClearColor(16777215),e.setClearAlpha(1),e.setRenderTarget(this._renderTargetDepth),e.clear(),e.render(this.scene,this.camera),this.uniforms.tColor.value=n.texture,this.uniforms.nearClip.value=this.camera.near,this.uniforms.farClip.value=this.camera.far,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),e.clear(),this._fsQuad.render(e)),this.scene.overrideMaterial=null,e.setClearColor(this._oldClearColor),e.setClearAlpha(s),e.autoClear=r}setSize(e,t){this.materialBokeh.uniforms.aspect.value=e/t,this._renderTargetDepth.setSize(e,t)}dispose(){this._renderTargetDepth.dispose(),this._materialDepth.dispose(),this.materialBokeh.dispose(),this._fsQuad.dispose()}};var dd={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ve(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Os=class i extends zt{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new ye(e.x,e.y):new ye(256,256),this.clearColor=new ve(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new ft(r,a,{type:vt,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let f=new ft(r,a,{type:vt,depthBuffer:!1});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);let u=new ft(r,a,{type:vt,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),a=Math.round(a/2)}let o=dd;this.highPassUniforms=sn.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new tt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let c=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ye(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=sn.clone(zn.uniforms),this.blendMaterial=new tt({uniforms:this.copyUniforms,vertexShader:zn.vertexShader,fragmentShader:zn.fragmentShader,premultipliedAlpha:!0,blending:St,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ve,this._oldClearAlpha=1,this._basic=new Ot,this._fsQuad=new hn(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ye(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<e;a+=2){let o=t[a],c=a+1<e?t[a+1]:0,l=o+c;s.push((a*o+(a+1)*c)/l),r.push(l)}return new tt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new ye(.5,.5)},direction:{value:new ye(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new tt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Os.BlurDirectionX=new ye(1,0);Os.BlurDirectionY=new ye(0,1);var ul={name:"AfterimageShader",uniforms:{damp:{value:.96},tOld:{value:null},tNew:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float damp;

		uniform sampler2D tOld;
		uniform sampler2D tNew;

		varying vec2 vUv;

		vec4 when_gt( vec4 x, float y ) {

			return max( sign( x - y ), 0.0 );

		}

		void main() {

			vec4 texelOld = texture2D( tOld, vUv );
			vec4 texelNew = texture2D( tNew, vUv );

			texelOld *= damp * when_gt( texelOld, 0.1 );

			gl_FragColor = max(texelNew, texelOld);

		}`};var dl=class extends zt{constructor(e=.96){super(),this.uniforms=sn.clone(ul.uniforms),this.damp=e,this.compFsMaterial=new tt({uniforms:this.uniforms,vertexShader:ul.vertexShader,fragmentShader:ul.fragmentShader}),this.copyFsMaterial=new tt({uniforms:sn.clone(zn.uniforms),vertexShader:zn.vertexShader,fragmentShader:zn.fragmentShader,blending:cn,depthTest:!1,depthWrite:!1}),this._textureComp=new ft(window.innerWidth,window.innerHeight,{magFilter:ut,type:vt,depthBuffer:!1}),this._textureOld=new ft(window.innerWidth,window.innerHeight,{magFilter:ut,type:vt,depthBuffer:!1}),this._compFsQuad=new hn(this.compFsMaterial),this._copyFsQuad=new hn(this.copyFsMaterial)}get damp(){return this.uniforms.damp.value}set damp(e){this.uniforms.damp.value=e}render(e,t,n){this.uniforms.tOld.value=this._textureOld.texture,this.uniforms.tNew.value=n.texture,e.setRenderTarget(this._textureComp),this._compFsQuad.render(e),this._copyFsQuad.material.uniforms.tDiffuse.value=this._textureComp.texture,this.renderToScreen?(e.setRenderTarget(null),this._copyFsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this._copyFsQuad.render(e));let s=this._textureOld;this._textureOld=this._textureComp,this._textureComp=s}setSize(e,t){this._textureComp.setSize(e,t),this._textureOld.setSize(e,t)}dispose(){this._textureComp.dispose(),this._textureOld.dispose(),this.compFsMaterial.dispose(),this.copyFsMaterial.dispose(),this._compFsQuad.dispose(),this._copyFsQuad.dispose()}};var $r={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var fl=class extends zt{constructor(){super(),this.isOutputPass=!0,this.uniforms=sn.clone($r.uniforms),this.material=new Ts({name:$r.name,uniforms:this.uniforms,vertexShader:$r.vertexShader,fragmentShader:$r.fragmentShader}),this._fsQuad=new hn(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Ge.getTransfer(this._outputColorSpace)===Qe&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ir?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Dr?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Lr?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Hi?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ur?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Fr?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Nr&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Hs=window.matchMedia("(prefers-reduced-motion: reduce)").matches,i_=window.matchMedia("(pointer: coarse)").matches,en=window.matchMedia("(max-width: 760px)").matches,ta=Math.PI*2,Cn=(i,e,t)=>Math.min(t,Math.max(e,i)),Xc=(i,e,t)=>i+(e-i)*t,yt=(i,e,t,n)=>Xc(i,e,1-Math.exp(-t*n)),_d=i=>1-Math.pow(1-i,3),lt=(i,e=document)=>e.querySelector(i);var s_=[{id:"art",numeral:"I",title:"\u85DD\u8853\u97F3\u6A02",en:"THE ART MUSIC GALAXY",href:"classic.html",accent:"#e8c79e",accent2:"#b9a7ff",desc:"\u4E03\u500B\u6642\u4EE3\uFF0C\u4E03\u5EA7\u7368\u7ACB\u7684\u623F\u9593\u3002\u5F9E\u845B\u5229\u679C\u8056\u8A60\u5230\u7576\u4EE3\u6975\u7C21\uFF0C\u4E00\u5EA7\u7DE9\u6162\u65CB\u8F49\u7684\u87BA\u65CB\u661F\u7CFB\u3002",kind:"knot",desktop:[-2.5,1,.15],mobile:[-1.64,1.04,.05]},{id:"pop",numeral:"II",title:"\u6D41\u884C\u5B87\u5B99",en:"THE POP COSMOS",href:"universe-2.html",accent:"#ff9fd6",accent2:"#ffd18a",desc:"\u4E03\u7A2E\u6D41\u884C\u985E\u578B\uFF0C\u4EE5\u5F15\u529B\u805A\u96C6\u6210\u74B0\u3002\u6BCF\u9846\u884C\u661F\u662F\u4E00\u5EA7\u8F49\u52D5\u7684\u9ED1\u81A0\u8072\u97F3\u8259\u3002",kind:"orb",desktop:[2.52,.3,-.12],mobile:[1.64,.32,-.08]},{id:"media",numeral:"III",title:"\u5A92\u4ECB\u5B87\u5B99",en:"MEDIA COSMOS",href:"universe-3.html",accent:"#7fe3d2",accent2:"#a6c8ff",desc:"\u4E03\u7A2E\u97F3\u6A02\u5A92\u4ECB\uFF0C\u9023\u6210\u4E00\u5EA7\u8A0A\u865F\u7DB2\u7D61\u3002\u6BCF\u4E00\u7A2E\u8F09\u9AD4\uFF0C\u90FD\u662F\u4E00\u5EA7\u5A92\u9AD4\u6A94\u6848\u5BA4\u3002",kind:"lattice",desktop:[-.36,-2.22,.3],mobile:[-.16,-2.12,.18]}],r_={numeral:"00",title:"\u4EA4\u6703\u6838\u5FC3",en:"THE CORE",desc:"\u6240\u6709\u5B87\u5B99\u7684\u8072\u97F3\u5728\u6B64\u4EA4\u6703\u3002\u62D6\u66F3\u6838\u5FC3\u65CB\u8F49\uFF0CShift + \u62D6\u66F3\u62C9\u4F38\uFF0C\u96D9\u64CA\u62C6\u89E3\u3002"},ml=`
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
float snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;
  i = mod289(i);
  vec4 p = permute(permute(permute(
    i.z + vec4(0.0, i1.z, i2.z, 1.0))
    + i.y + vec4(0.0, i1.y, i2.y, 1.0))
    + i.x + vec4(0.0, i1.x, i2.x, 1.0));
  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);
  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a1.xy, h.y);
  vec3 p2 = vec3(a0.zw, h.z);
  vec3 p3 = vec3(a1.zw, h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m * m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
}
float fbm3(vec3 p) {
  float f = 0.0;
  float a = 0.5;
  for (int i = 0; i < 3; i++) {
    f += a * snoise(p);
    p = p * 2.03 + vec3(17.1, 9.2, 7.7);
    a *= 0.5;
  }
  return f;
}
`,fe={canvas:lt("#nexusCanvas"),intro:lt("#intro"),introTitle:lt("#introTitle"),loadPercent:lt("#loadPercent"),loadBar:lt("#loadBar"),loadStatus:lt("#loadStatus"),enterBtn:lt("#enterBtn"),skipBtn:lt("#skipBtn"),soundBtn:lt("#soundBtn"),guideBtn:lt("#guideBtn"),guide:lt("#guide"),resetBtn:lt("#resetBtn"),nodeLabels:lt("#nodeLabels"),readout:lt("#readout"),readoutNumeral:lt("#readoutNumeral"),readoutEn:lt("#readoutEn"),readoutTitle:lt("#readoutTitle"),readoutDesc:lt("#readoutDesc"),enterUniverse:lt("#enterUniverse"),cursor:lt("#cursor"),cursorLabel:lt("#cursorLabel"),fps:lt("#fps"),renderInfo:lt("#renderInfo"),warpFlash:lt("#warpFlash"),announcer:lt("#statusAnnouncer")},ni=new Map,Qr=0,C={ready:!1,entered:!1,warping:!1,pinching:!1,pointer:new ye,pointerSmooth:new ye,pointerVelocity:0,prevPointer:{x:0,y:0},pointerMoved:!1,dragging:!1,dragMode:null,dragStart:{x:0,y:0},dragLast:{x:0,y:0},dragMoved:0,pendingNode:null,hoverNode:null,hoverCore:!1,targetYaw:0,yaw:0,targetPitch:.12,pitch:.12,targetDistance:en?14.2:11.4,distance:18.5,lastInteraction:0,coreSpin:new ye,coreRotation:new ye,stretch:0,stretchTarget:0,explode:0,shake:0,audio:0,enteredAt:0,elapsed:0,activeNode:null,startedAt:performance.now(),qualityReduced:!1,cursor:{x:innerWidth/2,y:innerHeight/2,tx:innerWidth/2,ty:innerHeight/2,magnet:null},fps:60,frameCount:0,fpsTime:0,qualityLevel:0},ri=[],xd=[],Pt,Ht,_t,jt,Si,Je,pl,Wc,gl,yn,si,jr,vl,Xi,fd,Zt,vd,pd=performance.now(),Ve={dpr:Math.min(window.devicePixelRatio||1,en?1.3:1.6),bokeh:!en&&!Hs,afterimage:!en&&!Hs,stars:en?1100:2400,dust:en?400:900,shards:en?36:72,shadows:!en},vi={uTime:{value:0},uExplode:{value:0},uHover:{value:0},uAudio:{value:0},uStretch:{value:0},uColorA:{value:new ve(528920)},uColorB:{value:new ve(3915182)},uColorC:{value:new ve(12622429)}},_l={uTime:{value:0},uPointer:{value:new ye},uAudio:{value:0}},yi={uTime:{value:0},uDpr:{value:Ve.dpr},uPixelRatio:{value:Ve.dpr}},zs={tDiffuse:{value:null},uTime:{value:0},uResolution:{value:new ye(innerWidth,innerHeight)},uPointer:{value:new ye},uVelocity:{value:0},uWarp:{value:0}};function a_(i=256){let e=document.createElement("canvas");e.width=i,e.height=i;let t=e.getContext("2d"),n=t.createRadialGradient(i/2,i/2,0,i/2,i/2,i/2);n.addColorStop(0,"rgba(255,255,255,1)"),n.addColorStop(.08,"rgba(255,255,255,0.92)"),n.addColorStop(.24,"rgba(255,255,255,0.27)"),n.addColorStop(.55,"rgba(255,255,255,0.055)"),n.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=n,t.fillRect(0,0,i,i);let s=new mr(e);return s.colorSpace=Xt,s}function ii(i,e,t){let n=new xs({map:vd,color:i,transparent:!0,opacity:e,blending:St,depthWrite:!1}),s=new cr(n);return s.scale.set(t,t,1),s}function Bs(i,e){let t=Cn(Math.round(i),0,100);fe.loadBar&&(fe.loadBar.style.width=`${t}%`),fe.loadPercent&&(fe.loadPercent.textContent=String(t).padStart(2,"0")),e&&fe.loadStatus&&(fe.loadStatus.textContent=e)}function yl(i){fe.announcer&&(fe.announcer.textContent="",window.setTimeout(()=>{fe.announcer.textContent=i},30))}function Kr(){return new Promise(i=>requestAnimationFrame(()=>i()))}function o_(){Pt=new sl({canvas:fe.canvas,antialias:!1,alpha:!1,powerPreference:"high-performance",stencil:!1}),Pt.setPixelRatio(Ve.dpr),Pt.setSize(window.innerWidth,window.innerHeight),Pt.outputColorSpace=Xt,Pt.toneMapping=Hi,Pt.toneMappingExposure=.9,Pt.shadowMap.enabled=Ve.shadows,Pt.shadowMap.type=Bi,Pt.info.autoReset=!1,Ht=new rr,Ht.fog=new sr(198154,.014),_t=new qt(en?46:38,window.innerWidth/window.innerHeight,.1,160),_t.position.set(0,4.2,18.5),_t.lookAt(0,0,0),Si=new _n,Ht.add(Si);let i=new Cr(2240570,.5);Ht.add(i);let e=new Er(8642519,1182493,.58);Ht.add(e);let t=new Cs(16771014,1.45);t.position.set(4.5,7.5,6),t.castShadow=Ve.shadows,Ve.shadows&&(t.shadow.mapSize.set(1024,1024),t.shadow.camera.left=-8,t.shadow.camera.right=8,t.shadow.camera.top=8,t.shadow.camera.bottom=-8,t.shadow.camera.near=.5,t.shadow.camera.far=30,t.shadow.bias=-7e-4,t.shadow.radius=3),Ht.add(t);let n=new Cs(9218815,.9);n.position.set(-6,-2,-5),Ht.add(n);let s=new As(9434851,3.4,13,2);s.position.set(0,.15,.8),Ht.add(s),vd=a_()}function l_(){let i=new tt({uniforms:_l,side:Bt,depthWrite:!1,fog:!1,vertexShader:`
      varying vec3 vDir;
      void main() {
        vDir = normalize(position);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      ${ml}
      uniform float uTime;
      uniform vec2 uPointer;
      varying vec3 vDir;
      void main() {
        vec3 d = normalize(vDir);
        vec3 drift = vec3(uPointer.x * 0.055, uTime * 0.0035, uPointer.y * 0.055);
        float n = fbm3(d * 2.0 + drift);
        float g = fbm3(d * 4.4 + vec3(19.0, -uTime * 0.006, 7.0));
        float h = fbm3(d * 1.35 + vec3(3.0, 8.0, -4.0));
        vec3 base = vec3(0.006, 0.011, 0.018);
        vec3 teal = vec3(0.012, 0.064, 0.073);
        vec3 violet = vec3(0.041, 0.024, 0.075);
        vec3 gold = vec3(0.10, 0.056, 0.021);
        vec3 col = base;
        col = mix(col, teal, smoothstep(-0.2, 0.82, n) * 0.72);
        col = mix(col, violet, smoothstep(0.0, 0.88, g) * 0.34);
        col = mix(col, gold, smoothstep(0.36, 0.92, h) * 0.2);
        col += teal * pow(max(0.0, d.y * 0.5 + 0.5), 4.0) * 0.045;
        float edge = smoothstep(1.02, 0.1, length(d.xy));
        col *= 0.72 + edge * 0.28;
        gl_FragColor = vec4(col, 1.0);
      }
    `}),e=new Ke(new Kn(62,32,18),i);e.frustumCulled=!1,e.renderOrder=-10,Ht.add(e);let t=ii(8381394,.035,24);t.position.set(-3.5,1.2,-17),Ht.add(t);let n=ii(16752598,.022,28);n.position.set(5.5,-2.5,-22),Ht.add(n)}function c_(){let i=Ve.stars,e=new Float32Array(i*3),t=new Float32Array(i*3),n=new Float32Array(i),s=new Float32Array(i),r=[new ve(14219506),new ve(16772555),new ve(11979263),new ve(15259903),new ve(16777215)];for(let h=0;h<i;h+=1){let f=13+Math.random()*39,u=Math.random()*ta,p=Math.random()*2-1,_=Math.acos(p),M=f*Math.sin(_)*Math.cos(u),m=f*Math.cos(_),d=f*Math.sin(_)*Math.sin(u);e[h*3]=M,e[h*3+1]=m,e[h*3+2]=d;let y=r[Math.floor(Math.random()*r.length)];t[h*3]=y.r,t[h*3+1]=y.g,t[h*3+2]=y.b,n[h]=.35+Math.pow(Math.random(),2)*1.5,s[h]=Math.random()*100}let a=new pt;a.setAttribute("position",new Mt(e,3)),a.setAttribute("aColor",new Mt(t,3)),a.setAttribute("aSize",new Mt(n,1)),a.setAttribute("aPhase",new Mt(s,1));let o=new tt({uniforms:yi,transparent:!0,depthWrite:!1,blending:St,vertexShader:`
      attribute float aSize;
      attribute float aPhase;
      attribute vec3 aColor;
      varying vec3 vColor;
      varying float vPhase;
      uniform float uTime;
      uniform float uDpr;
      void main() {
        vColor = aColor;
        vPhase = aPhase;
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = aSize * uDpr * (58.0 / max(1.0, -mv.z));
        gl_Position = projectionMatrix * mv;
      }
    `,fragmentShader:`
      varying vec3 vColor;
      varying float vPhase;
      uniform float uTime;
      void main() {
        vec2 c = gl_PointCoord - 0.5;
        float d = length(c);
        float a = smoothstep(0.5, 0.02, d);
        float twinkle = 0.62 + 0.38 * sin(uTime * 1.25 + vPhase);
        gl_FragColor = vec4(vColor, a * twinkle * 0.8);
      }
    `}),c=new ys(a,o);c.frustumCulled=!1,c.renderOrder=-3,Ht.add(c);let l=new _n;return l.add(c),l.userData.speed=.0032,l}function h_(){let i=Ve.dust,e=new Float32Array(i*3),t=new Float32Array(i),n=new Float32Array(i),s=new Float32Array(i*3),r=[new ve(8381394),new ve(15255454),new ve(12167167),new ve(16752598)];for(let l=0;l<i;l+=1){let h=1.8+Math.pow(Math.random(),.6)*8.5,f=Math.random()*ta,u=Math.acos(Math.random()*2-1);e[l*3]=h*Math.sin(u)*Math.cos(f),e[l*3+1]=h*Math.cos(u)*.8,e[l*3+2]=h*Math.sin(u)*Math.sin(f),t[l]=Math.random(),n[l]=.3+Math.random()*1.4;let p=r[Math.floor(Math.random()*r.length)];s[l*3]=p.r,s[l*3+1]=p.g,s[l*3+2]=p.b}let a=new pt;a.setAttribute("position",new Mt(e,3)),a.setAttribute("aSeed",new Mt(t,1)),a.setAttribute("aSize",new Mt(n,1)),a.setAttribute("aColor",new Mt(s,3));let o=new tt({uniforms:{uTime:{value:0},uDpr:{value:Ve.dpr},uAudio:{value:0}},transparent:!0,depthWrite:!1,blending:St,vertexShader:`
      attribute float aSeed;
      attribute float aSize;
      attribute vec3 aColor;
      uniform float uTime;
      uniform float uDpr;
      uniform float uAudio;
      varying vec3 vColor;
      varying float vAlpha;
      void main() {
        vColor = aColor;
        float angle = uTime * (0.012 + aSeed * 0.03) + aSeed * 6.28318;
        vec3 p = position;
        float s = sin(angle);
        float c = cos(angle);
        p.xz = mat2(c, -s, s, c) * p.xz;
        p.y += sin(uTime * 0.22 + aSeed * 9.0) * 0.15;
        p *= 1.0 + uAudio * 0.05;
        vec4 mv = modelViewMatrix * vec4(p, 1.0);
        gl_PointSize = aSize * uDpr * (38.0 / max(1.0, -mv.z));
        gl_Position = projectionMatrix * mv;
        vAlpha = 0.35 + 0.35 * sin(uTime * 0.5 + aSeed * 12.0);
      }
    `,fragmentShader:`
      varying vec3 vColor;
      varying float vAlpha;
      void main() {
        vec2 c = gl_PointCoord - 0.5;
        float d = length(c);
        float a = smoothstep(0.5, 0.04, d);
        gl_FragColor = vec4(vColor, a * vAlpha * 0.3);
      }
    `}),c=new ys(a,o);return c.frustumCulled=!1,c.renderOrder=-1,Ht.add(c),{points:c,material:o}}function u_(){Je=new _n,Je.position.set(0,0,0),Si.add(Je);let i=new Kn(1.15,96,64),e=new tt({uniforms:vi,vertexShader:`
      uniform float uTime;
      uniform float uExplode;
      uniform float uHover;
      uniform float uAudio;
      uniform float uStretch;
      varying vec3 vNormal;
      varying vec3 vView;
      varying vec3 vWorld;
      varying float vNoise;
      ${ml}
      void main() {
        vec3 n = normalize(position);
        float n1 = snoise(n * 2.1 + vec3(0.0, uTime * 0.18, 0.0));
        float n2 = snoise(n * 5.0 - vec3(uTime * 0.13, 0.0, uTime * 0.05));
        float ridge = 1.0 - abs(snoise(n * 3.4 + vec3(uTime * 0.08)));
        float displacement = n1 * 0.074 + n2 * 0.018 + ridge * 0.034;
        displacement += uExplode * (0.34 + ridge * 0.48);
        displacement += uHover * 0.045;
        displacement += uAudio * 0.04;
        vNoise = n1 * 0.6 + ridge * 0.4;
        vec3 pos = position + normal * displacement;
        pos.y *= 1.0 + uStretch * 0.62;
        pos.xz *= 1.0 - uStretch * 0.18;
        vNormal = normalize(normalMatrix * normal);
        vec4 mv = modelViewMatrix * vec4(pos, 1.0);
        vView = -mv.xyz;
        vWorld = (modelMatrix * vec4(pos, 1.0)).xyz;
        gl_Position = projectionMatrix * mv;
      }
    `,fragmentShader:`
      uniform float uTime;
      uniform float uExplode;
      uniform float uHover;
      uniform float uAudio;
      uniform vec3 uColorA;
      uniform vec3 uColorB;
      uniform vec3 uColorC;
      varying vec3 vNormal;
      varying vec3 vView;
      varying vec3 vWorld;
      varying float vNoise;
      ${ml}
      void main() {
        vec3 N = normalize(vNormal);
        vec3 V = normalize(vView);
        float fresnel = pow(1.0 - max(dot(N, V), 0.0), 2.35);
        vec3 L1 = normalize(vec3(-0.6, 0.8, 0.7));
        vec3 L2 = normalize(vec3(0.7, -0.35, 0.4));
        float diff = max(dot(N, L1), 0.0) * 0.8 + max(dot(N, L2), 0.0) * 0.25;
        float spec = pow(max(dot(reflect(-L1, N), V), 0.0), 54.0);
        float noise = snoise(vWorld * 2.6 + vec3(0.0, uTime * 0.22, 0.0));
        vec3 base = mix(uColorA, uColorB, smoothstep(-0.45, 0.75, noise + fresnel * 0.35));
        base = mix(base, uColorC, fresnel * 0.36 + uExplode * 0.18);
        float veins = pow(max(0.0, sin(vWorld.y * 7.5 + noise * 6.0 + uTime * 0.45)), 7.0);
        vec3 color = base * (0.24 + diff * 0.58);
        color += spec * 0.38 + fresnel * uColorC * 0.28 + veins * 0.06;
        color += uHover * 0.05 * uColorB + uAudio * 0.05 * uColorB;
        gl_FragColor = vec4(color, 1.0);
      }
    `});pl=new Ke(i,e),pl.castShadow=Ve.shadows,pl.receiveShadow=!1,Je.add(pl);let t=new tt({uniforms:{...vi,uTime:vi.uTime,uExplode:vi.uExplode,uHover:vi.uHover,uAudio:vi.uAudio,uStretch:vi.uStretch},transparent:!0,depthWrite:!1,blending:St,wireframe:!0,vertexShader:`
      uniform float uTime;
      uniform float uExplode;
      uniform float uHover;
      uniform float uAudio;
      uniform float uStretch;
      ${ml}
      void main() {
        vec3 n = normalize(position);
        float n1 = snoise(n * 2.0 + vec3(0.0, uTime * 0.18, 0.0));
        float ridge = 1.0 - abs(snoise(n * 3.8 + vec3(uTime * 0.1)));
        float d = n1 * 0.065 + ridge * 0.032 + uExplode * 0.45 + uHover * 0.04;
        vec3 pos = position + normal * d;
        pos.y *= 1.0 + uStretch * 0.62;
        pos.xz *= 1.0 - uStretch * 0.18;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
      }
    `,fragmentShader:`
      uniform float uHover;
      void main() {
        gl_FragColor = vec4(0.45, 0.9, 0.84, 0.055 + uHover * 0.05);
      }
    `});Wc=new Ke(new Li(1.48,2),t),Wc.renderOrder=2,Je.add(Wc);let n=ii(8381394,.16,4.6);n.position.z=-.4,Je.add(n);let s=ii(15255454,.065,6.2);s.position.z=-1.2,Je.add(s);let r=ii(16187385,.2,.95);r.position.z=.04,Je.add(r);let a=ii(8381394,.018,2.4);a.scale.set(1.5,8.5,1),a.position.set(0,.3,-1.1),Je.add(a);let o=new Ot({color:8381394,transparent:!0,opacity:.21,blending:St,depthWrite:!1}),c=new Ke(new Qn(1.72,.0045,6,220),o);c.rotation.x=Math.PI/2.5,c.rotation.y=-.2,Je.add(c);let l=new Ke(new Qn(2.02,.0035,6,220),new Ot({color:15255454,transparent:!0,opacity:.15,blending:St,depthWrite:!1}));l.rotation.x=-Math.PI/3.2,l.rotation.z=.45,Je.add(l);let h=new Ke(new Qn(2.34,.003,6,220),new Ot({color:12167167,transparent:!0,opacity:.11,blending:St,depthWrite:!1}));h.rotation.x=Math.PI/2.1,h.rotation.y=.8,Je.add(h),Je.userData.rings=[c,l,h];let f=new Mr(.048,0),u=new Es({color:9169116,emissive:1587769,emissiveIntensity:1.2,metalness:.72,roughness:.24}),p=new dr(f,u,Ve.shards);p.instanceMatrix.setUsage(Sc),p.frustumCulled=!1;let _=[],M=new xt;for(let d=0;d<Ve.shards;d+=1){let y=1.4+Math.random()*1.1,T=Math.random()*ta,S=(Math.random()-.5)*2.4;_.push({base:new D(Math.cos(T)*y,S,Math.sin(T)*y),phase:Math.random()*ta,speed:.2+Math.random()*.7,scale:.28+Math.random()*.7}),M.position.copy(_[d].base),M.scale.setScalar(_[d].scale),M.updateMatrix(),p.setMatrixAt(d,M.matrix)}p.instanceMatrix.needsUpdate=!0,Je.add(p),Je.userData.shards=_,Je.userData.shardMesh=p;let m=new Ot({color:12124148,transparent:!0,opacity:0,blending:St,side:ln,depthWrite:!1});yn=new Ke(new yr(1.2,1.27,128),m),yn.rotation.x=Math.PI/2,yn.renderOrder=5,Je.add(yn),gl=new Ke(new Kn(1.82,18,14),new Ot({visible:!1,depthWrite:!1})),gl.userData.kind="core",Je.add(gl)}function d_(i){let e=new _n,t=new ve(i.accent),n=new ve(i.accent2),s;if(i.kind==="knot"){s=new Ui({color:11965019,metalness:.9,roughness:.2,clearcoat:1,clearcoatRoughness:.18,iridescence:.7,iridescenceIOR:1.5,emissive:2824970,emissiveIntensity:.75});let l=new Ke(new bs(.43,.115,160,20,2,3),s);l.rotation.x=.45,l.castShadow=Ve.shadows,e.add(l);let h=new Ke(new bs(.52,.14,100,10,2,3),new Ot({color:t,transparent:!0,opacity:.075,wireframe:!0,blending:St,depthWrite:!1}));h.rotation.x=.45,e.add(h),e.userData.main=l,e.userData.wire=h}else if(i.kind==="orb"){s=new Ui({color:13656993,metalness:.74,roughness:.16,clearcoat:1,clearcoatRoughness:.12,iridescence:1,iridescenceIOR:1.8,emissive:3477541,emissiveIntensity:.92});let l=new Ke(new Kn(.55,64,44),s);l.castShadow=Ve.shadows,e.add(l);let h=new Ke(new Qn(.81,.007,8,180),new Ot({color:t,transparent:!0,opacity:.46,blending:St,depthWrite:!1}));h.rotation.x=1.16,h.rotation.y=.18,e.add(h);let f=new Ke(new Qn(.99,.0035,6,180),new Ot({color:n,transparent:!0,opacity:.25,blending:St,depthWrite:!1}));f.rotation.x=-.42,f.rotation.z=.5,e.add(f),e.userData.main=l,e.userData.wire=h,e.userData.ring2=f}else{s=new Ui({color:4099467,metalness:.72,roughness:.26,clearcoat:.8,clearcoatRoughness:.18,iridescence:.4,emissive:864301,emissiveIntensity:.9});let l=new Ke(new Li(.54,1),s);l.castShadow=Ve.shadows,e.add(l);let h=new fr(new Sr(new Li(.82,1)),new Di({color:t,transparent:!0,opacity:.34,blending:St,depthWrite:!1}));e.add(h);let f=new Ke(new vr(.29,0),new Ot({color:n,transparent:!0,opacity:.38,blending:St,depthWrite:!1}));e.add(f),e.userData.main=l,e.userData.wire=h,e.userData.inner=f}let r=ii(i.accent,.25,3.5);r.position.z=-.5,e.add(r);let a=ii(i.accent2,.13,2.3);a.position.z=-.3,e.add(a);let o=new Ke(new Kn(.92,18,14),new Ot({visible:!1,depthWrite:!1}));o.userData.kind="node",o.userData.nodeId=i.id,e.add(o);let c=new As(t,1.15,6.2,2);return c.position.set(0,.15,.6),e.add(c),e.userData.node=i,e.userData.hit=o,e.userData.glow=r,e.userData.ringGlow=a,e.userData.light=c,e.userData.phase=Math.random()*ta,e.userData.hover=0,e.userData.baseScale=1,e.scale.setScalar(.86),e.position.set(0,0,0),e}function f_(){for(let i of s_){let e=d_(i);Si.add(e),ri.push({data:i,group:e,label:null,line:null,pulse:null})}}function p_(){for(let i of ri){let e=new ve(i.data.accent),t=new pt().setFromPoints([new D,new D]),n=new Di({color:e,transparent:!0,opacity:.17,blending:St,depthWrite:!1}),s=new vs(t,n);s.frustumCulled=!1,Si.add(s);let r=ii(i.data.accent,.75,.32);r.material.depthTest=!1,Si.add(r),i.line=s,i.pulse=r}}function m_(){let i=(t,n)=>new tt({transparent:!0,depthWrite:!1,blending:St,side:ln,uniforms:{uColor:{value:new ve(t)},uOpacity:{value:n},uTime:{value:0}},vertexShader:`
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform vec3 uColor;
      uniform float uOpacity;
      uniform float uTime;
      varying vec2 vUv;
      void main() {
        float edge = smoothstep(0.5, 0.08, abs(vUv.x - 0.5));
        float fade = smoothstep(0.0, 0.16, vUv.y) * smoothstep(1.0, 0.7, vUv.y);
        float grain = 0.72 + 0.28 * sin(vUv.y * 42.0 + uTime * 0.4 + vUv.x * 11.0);
        gl_FragColor = vec4(uColor, edge * fade * grain * uOpacity);
      }
    `}),e=[{color:8381394,opacity:.055,width:2.8,height:11.5,x:0,y:.4,z:-1.3,rot:.08},{color:15255454,opacity:.028,width:1.5,height:8.5,x:-.5,y:.5,z:-1.5,rot:-.42},{color:12167167,opacity:.022,width:1.2,height:9,x:.8,y:.1,z:-1.6,rot:.34}];for(let t of e){let n=i(t.color,t.opacity),s=new Ke(new Ni(t.width,t.height),n);s.position.set(t.x,t.y,t.z),s.rotation.z=t.rot,s.renderOrder=0,Je.add(s),Je.userData.shafts||(Je.userData.shafts=[]),Je.userData.shafts.push(n)}}function g_(){if(en)return;let i=new Ke(new xr(3,64),new br({color:0,opacity:.34,depthWrite:!1}));i.rotation.x=-Math.PI/2,i.position.y=-2.5,i.receiveShadow=Ve.shadows,Ht.add(i)}var __={uniforms:zs,vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform vec2 uResolution;
    uniform vec2 uPointer;
    uniform float uTime;
    uniform float uVelocity;
    uniform float uWarp;
    varying vec2 vUv;
    float hash(vec2 p) {
      return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
    }
    void main() {
      vec2 uv = vUv;
      vec2 p = uv - 0.5;
      float r2 = dot(p, p);
      float radial = (0.012 + uWarp * 0.05) * r2;
      uv = 0.5 + p * (1.0 + radial);
      vec2 dir = normalize(uPointer + vec2(0.0001, 0.0001));
      float ca = (0.00055 + uWarp * 0.004 + uVelocity * 0.0008) * r2;
      float r = texture2D(tDiffuse, uv + dir * ca).r;
      float g = texture2D(tDiffuse, uv).g;
      float b = texture2D(tDiffuse, uv - dir * ca).b;
      vec3 col = vec3(r, g, b);
      col = pow(col, vec3(0.96, 0.98, 1.015));
      float vig = smoothstep(0.92, 0.16, length(p));
      col *= mix(0.5, 1.0, vig);
      float n = hash(uv * uResolution + uTime * 37.0);
      col += (n - 0.5) * 0.03;
      col *= 1.0 - 0.02 * sin(uv.y * uResolution.y * 3.14159);
      gl_FragColor = vec4(col, 1.0);
    }
  `};function x_(){jt=new ll(Pt),jt.setPixelRatio(Ve.dpr),jt.setSize(window.innerWidth,window.innerHeight);let i=new cl(Ht,_t);jt.addPass(i),Ve.bokeh&&(si=new hl(Ht,_t,{focus:C.distance,aperture:55e-6,maxblur:.0025}),jt.addPass(si)),vl=new Os(new ye(window.innerWidth,window.innerHeight),.34,.55,.34),jt.addPass(vl),Ve.afterimage&&(jr=new dl(.56),jr.uniforms.damp.value=.56,jt.addPass(jr)),Xi=new Fs(__),Xi.uniforms.uResolution.value.set(window.innerWidth,window.innerHeight),jt.addPass(Xi),fd=new fl,jt.addPass(fd)}function v_(){for(let i of ri){let e=document.createElement("button");e.type="button",e.className="node-label",e.dataset.node=i.data.id,e.dataset.magnetic="",e.dataset.cursorLabel=`ENTER \xB7 ${i.data.title}`,e.style.setProperty("--node-accent",i.data.accent),e.setAttribute("aria-label",`\u9032\u5165\u5B87\u5B99 ${i.data.numeral}\uFF0C${i.data.title}`),e.innerHTML=`
      <span class="node-label__num">UNIVERSE ${i.data.numeral}</span>
      <span class="node-label__title">${i.data.title}</span>
      <span class="node-label__en">${i.data.en}</span>
      <span class="node-label__arrow" aria-hidden="true">\u2197</span>
    `,e.addEventListener("pointerenter",()=>Mi(i,!0)),e.addEventListener("pointerleave",()=>{C.activeNode===i&&Mi(null)}),e.addEventListener("focus",()=>Mi(i,!0)),e.addEventListener("blur",()=>{C.activeNode===i&&Mi(null)}),e.addEventListener("click",t=>{t.preventDefault(),Ml(i)}),fe.nodeLabels.appendChild(e),i.label=e,xd.push(e)}}function Mi(i,e=!1){if(!C.warping){if(C.activeNode===i){e&&xl(i);return}C.activeNode&&(C.activeNode.group.userData.hoverTarget=0,C.activeNode.label?.classList.remove("is-active")),C.activeNode=i,i?(i.group.userData.hoverTarget=1,i.label?.classList.add("is-active"),xl(i),fe.cursor.classList.add("is-hovering"),fe.cursorLabel.textContent=`ENTER \xB7 ${i.data.title}`):(xl(null),fe.cursor.classList.remove("is-hovering"),fe.cursorLabel.textContent="")}}function xl(i){let e=i?i.data:r_;fe.readoutNumeral.textContent=e.numeral,fe.readoutEn.textContent=e.en,fe.readoutTitle.textContent=e.title,fe.readoutDesc.textContent=e.desc,i?(fe.readout.style.setProperty("--readout-accent",i.data.accent),fe.readout.style.borderLeftColor=i.data.accent,fe.enterUniverse.href=i.data.href,fe.enterUniverse.classList.remove("is-hidden"),fe.enterUniverse.querySelector("span").textContent="ENTER UNIVERSE"):(fe.readout.style.borderLeftColor="rgba(231, 237, 238, 0.16)",fe.enterUniverse.href="classic.html",fe.enterUniverse.classList.add("is-hidden"))}var md=new Pr,y_=new ye;function Yc(i){C.pointer.x=i.clientX/window.innerWidth*2-1,C.pointer.y=-(i.clientY/window.innerHeight)*2+1,y_.copy(C.pointer)}function Zc(){md.setFromCamera(C.pointer,_t);let i=[gl,...ri.map(e=>e.group.userData.hit)];return md.intersectObjects(i,!1)}function M_(){if(!C.entered||C.warping||C.dragging)return;let i=Zc();if(!i.length){C.hoverCore=!1,Mi(null);return}let e=i[0].object;if(e.userData.kind==="node"){let t=ri.find(n=>n.data.id===e.userData.nodeId);C.hoverCore=!1,Mi(t||null)}else e.userData.kind==="core"&&(C.hoverCore=!0,Mi(null),fe.cursor.classList.add("is-hovering"),fe.cursorLabel.textContent="CORE \xB7 DRAG / DOUBLE CLICK")}function S_(i){if(ni.has(i.pointerId)&&(ni.set(i.pointerId,{x:i.clientX,y:i.clientY}),ni.size>=2)){let s=[...ni.values()],r=Math.hypot(s[0].x-s[1].x,s[0].y-s[1].y);Qr>0&&(C.targetDistance=Cn(C.targetDistance*(Qr/r),en?8.2:4.8,31)),Qr=r,C.pinching=!0,C.dragging=!1,C.lastInteraction=C.elapsed;return}let e=i.clientX-C.prevPointer.x,t=i.clientY-C.prevPointer.y;if(C.prevPointer.x=i.clientX,C.prevPointer.y=i.clientY,C.pointerVelocity=Cn(Math.hypot(e,t)/18,0,1.8),Yc(i),C.cursor.tx=i.clientX,C.cursor.ty=i.clientY,fe.cursor.classList.remove("is-idle"),C.pinching)return;C.dragging?(C.pointerMoved=!0,C.dragMoved+=Math.hypot(e,t),C.dragMode==="orbit"?(C.targetYaw-=e*.0034,C.targetPitch=Cn(C.targetPitch+t*.0026,-.65,.62)):C.dragMode==="core"&&(C.coreSpin.y+=e*.006,C.coreSpin.x+=t*.0045,i.shiftKey&&(C.stretchTarget=Cn(C.stretchTarget-t*.004,-.42,.52))),C.lastInteraction=C.elapsed):C.entered&&M_();let n=i.target.closest("[data-magnetic]");if(n!==C.cursor.magnet&&(C.cursor.magnet&&(C.cursor.magnet.style.setProperty("--mag-x","0px"),C.cursor.magnet.style.setProperty("--mag-y","0px")),C.cursor.magnet=n),n){let s=n.getBoundingClientRect(),r=s.left+s.width/2,a=s.top+s.height/2;n.style.setProperty("--mag-x",`${(i.clientX-r)*.16}px`),n.style.setProperty("--mag-y",`${(i.clientY-a)*.16}px`),fe.cursor.classList.add("is-hovering"),n.dataset.cursorLabel&&(fe.cursorLabel.textContent=n.dataset.cursorLabel)}else C.hoverCore||(fe.cursor.classList.remove("is-hovering"),fe.cursorLabel.textContent="")}function b_(i){if(!C.entered||C.warping||i.button!==void 0&&i.button!==0)return;if(ni.set(i.pointerId,{x:i.clientX,y:i.clientY}),i.pointerType==="touch"&&ni.size>=2){let t=[...ni.values()];Qr=Math.hypot(t[0].x-t[1].x,t[0].y-t[1].y),C.pinching=!0,C.dragging=!1;return}if(i.target!==fe.canvas)return;Yc(i),C.prevPointer.x=i.clientX,C.prevPointer.y=i.clientY;let e=Zc();if(C.dragging=!0,C.dragMoved=0,C.pointerMoved=!1,C.dragLast.x=i.clientX,C.dragLast.y=i.clientY,C.pendingNode=null,fe.canvas.setPointerCapture?.(i.pointerId),e.length){let t=e[0].object;if(t.userData.kind==="node"){let n=ri.find(s=>s.data.id===t.userData.nodeId);C.pendingNode=n,C.dragMode="orbit"}else t.userData.kind==="core"?(C.dragMode=(i.shiftKey,"core"),fe.canvas.classList.add("is-core-drag")):C.dragMode="orbit"}else C.dragMode="orbit";fe.cursor.classList.add("is-down"),C.lastInteraction=C.elapsed}function gd(i){if(ni.delete(i.pointerId),ni.size<2&&(C.pinching=!1,Qr=0),!C.dragging)return;let e=C.dragMode==="core",t=C.pendingNode,n=C.dragMoved;if(C.dragging=!1,C.dragMode=null,C.pendingNode=null,fe.canvas.classList.remove("is-core-drag"),fe.cursor.classList.remove("is-down"),C.lastInteraction=C.elapsed,!C.pointerMoved||n<7){if(t){Ml(t);return}e&&w_()}i.pointerId!==void 0&&fe.canvas.releasePointerCapture?.(i.pointerId)}function T_(i){if(!C.entered||C.warping)return;i.preventDefault();let e=Math.exp(i.deltaY*.0011);C.targetDistance=Cn(C.targetDistance*e,en?8.2:4.8,31),C.lastInteraction=C.elapsed}function E_(i){if(C.ready){if(i.key==="Escape"){P_();return}if(i.key==="?"||i.key==="/"&&i.shiftKey){$c();return}if(i.key==="1"||i.key==="2"||i.key==="3"){let e=ri[Number(i.key)-1];e&&Ml(e);return}if(i.key.toLowerCase()==="r"){yd();return}if(i.key.toLowerCase()==="e"){Jc();return}if(i.key.toLowerCase()==="m"){Sd();return}i.key==="ArrowLeft"?(C.targetYaw+=.12,C.lastInteraction=C.elapsed):i.key==="ArrowRight"?(C.targetYaw-=.12,C.lastInteraction=C.elapsed):i.key==="ArrowUp"?(C.targetPitch=Cn(C.targetPitch-.08,-.65,.62),C.lastInteraction=C.elapsed):i.key==="ArrowDown"&&(C.targetPitch=Cn(C.targetPitch+.08,-.65,.62),C.lastInteraction=C.elapsed)}}function yd(){C.targetYaw=0,C.targetPitch=.12,C.targetDistance=en?14.2:11.4,C.coreSpin.set(0,0),C.stretchTarget=0,C.lastInteraction=C.elapsed,C.activeNode&&Mi(null),Zt&&Zt.on&&Zt.pulse(.2),yl("\u8996\u89D2\u5DF2\u91CD\u7F6E")}function w_(){Jc(.42)}function Jc(i=1){C.warping||(C.explode=Math.max(C.explode,i),C.shake=.65*i,yn&&(yn.material.opacity=.55*i,yn.scale.setScalar(1)),Zt&&Zt.on&&Zt.pulse(.8*i),yl("\u6838\u5FC3\u62C6\u89E3\u4E2D"))}function Ml(i){if(!i||C.warping||!C.ready)return;C.warping=!0,C.activeNode=i,document.body.classList.add("is-warping"),fe.warpFlash&&(fe.warpFlash.classList.remove("is-active"),fe.warpFlash.offsetWidth,fe.warpFlash.classList.add("is-active")),yl(`\u6B63\u5728\u524D\u5F80\u5B87\u5B99 ${i.data.numeral}\uFF0C${i.data.title}`),Zt&&Zt.on&&Zt.fadeOut(.9);let e=Hs?260:1450,t=performance.now(),n=_t.position.clone(),s=i.group.getWorldPosition(new D),r=s.clone().add(_t.position.clone().sub(s).normalize().multiplyScalar(1.45)).add(new D(0,.08,.25));function a(o){let c=Cn((o-t)/e,0,1),l=_d(c);Hs||(_t.position.lerpVectors(n,r,l),_t.lookAt(s),_t.fov=Xc(_t.fov,54,l),_t.updateProjectionMatrix(),zs.uWarp.value=l,i.group.scale.setScalar(Xc(1,1.7,l))),c<1?requestAnimationFrame(a):window.location.href=i.data.href}requestAnimationFrame(a)}function A_(i){if(!document.body.classList.contains("has-cursor"))return;let e=C.cursor,t=e.tx,n=e.ty;if(e.magnet){let a=e.magnet.getBoundingClientRect(),o=a.left+a.width/2,c=a.top+a.height/2;t+=(o-t)*.18,n+=(c-n)*.18}e.x=yt(e.x,t,24,i),e.y=yt(e.y,n,24,i),fe.cursor.style.transform=`translate3d(${e.x}px, ${e.y}px, 0)`;let s=fe.cursor.querySelectorAll(".cursor-trail");[.16,.09,.045].forEach((a,o)=>{s[o].style.transform=`translate3d(${e.x*(1-a)+e.tx*a}px, ${e.y*(1-a)+e.ty*a}px, 0) translate(-50%, -50%)`})}function C_(){window.addEventListener("pointermove",S_,{passive:!0}),window.addEventListener("pointerdown",b_,{passive:!0}),window.addEventListener("pointerup",gd,{passive:!0}),window.addEventListener("pointercancel",gd,{passive:!0}),window.addEventListener("wheel",T_,{passive:!1}),window.addEventListener("dblclick",i=>{if(i.target!==fe.canvas)return;Yc(i);let e=Zc();e.length&&e[0].object.userData.kind==="core"&&Jc(1)})}function R_(){i_||document.body.classList.add("has-cursor")}fe.enterUniverse.addEventListener("click",i=>{i.preventDefault(),C.activeNode?Ml(C.activeNode):window.location.href=fe.enterUniverse.href});fe.enterBtn.addEventListener("click",Md);fe.skipBtn.addEventListener("click",Md);function Md(){!C.ready||C.entered||(C.entered=!0,C.enteredAt=C.elapsed,document.body.classList.add("is-entered"),fe.intro.classList.add("is-leaving"),fe.intro.setAttribute("aria-hidden","true"),window.setTimeout(()=>{fe.intro.style.display="none"},1200),C.targetDistance=en?14.2:11.4,C.targetPitch=.12,C.lastInteraction=C.elapsed,fe.cursor.classList.add("is-idle"),fe.cursor.classList.remove("is-hovering"),fe.cursorLabel.textContent="",Zt&&Zt.pulse(.25),yl("\u5DF2\u9032\u5165 Spatial Nexus\u3002\u4F7F\u7528\u62D6\u66F3\u74B0\u7E5E\uFF0C\u9EDE\u64CA\u5B87\u5B99\u7BC0\u9EDE\u524D\u5F80\u3002"),window.setTimeout(()=>{let i=xd[0];i&&i.focus({preventScroll:!0})},1600))}function $c(i){if(!fe.guide||!fe.guideBtn)return;let e=i!==void 0?i:!fe.guide.classList.contains("is-open");fe.guide.classList.toggle("is-open",e),fe.guide.setAttribute("aria-hidden",String(!e)),fe.guideBtn.setAttribute("aria-expanded",String(e))}function P_(){fe.guide?.classList.contains("is-open")&&$c(!1)}fe.guideBtn.addEventListener("click",()=>$c());function Sd(){I_()&&(Zt||(Zt=new qc),Zt.toggle().then(i=>{fe.soundBtn.setAttribute("aria-pressed",String(i)),fe.soundBtn.querySelector("span:last-child").textContent=i?"SOUND ON":"SOUND OFF"}))}fe.soundBtn.addEventListener("click",Sd);fe.resetBtn.addEventListener("click",yd);function I_(){return!!(window.AudioContext||window.webkitAudioContext)}var qc=class{constructor(){this.ctx=null,this.master=null,this.analyser=null,this.data=null,this.on=!1,this.oscillators=[]}async init(){if(this.ctx)return;let e=window.AudioContext||window.webkitAudioContext;this.ctx=new e,this.master=this.ctx.createGain(),this.master.gain.value=1e-4,this.master.connect(this.ctx.destination);let t=this.ctx.createBiquadFilter();t.type="lowpass",t.frequency.value=460,t.Q.value=.8,t.connect(this.master),this.analyser=this.ctx.createAnalyser(),this.analyser.fftSize=64,this.data=new Uint8Array(this.analyser.frequencyBinCount),this.master.connect(this.analyser),[55,82.5,110,164.8].forEach((f,u)=>{let p=this.ctx.createOscillator(),_=this.ctx.createGain();p.type=u===3?"sine":"triangle",p.frequency.value=f,p.detune.value=(u-1.5)*4.2,_.gain.value=u===3?.018:.045/(u+1),p.connect(_),_.connect(t),p.start(),this.oscillators.push(p);let M=this.ctx.createOscillator(),m=this.ctx.createGain();M.frequency.value=.025+u*.017,m.gain.value=2.5+u,M.connect(m),m.connect(p.detune),M.start()});let s=this.ctx.createOscillator(),r=this.ctx.createGain();s.frequency.value=.04,r.gain.value=170,s.connect(r),r.connect(t.frequency),s.start();let a=this.ctx.createBuffer(1,this.ctx.sampleRate*2,this.ctx.sampleRate),o=a.getChannelData(0);for(let f=0;f<o.length;f+=1)o[f]=Math.random()*2-1;let c=this.ctx.createBufferSource();c.buffer=a,c.loop=!0;let l=this.ctx.createBiquadFilter();l.type="bandpass",l.frequency.value=900,l.Q.value=.6;let h=this.ctx.createGain();h.gain.value=.014,c.connect(l),l.connect(h),h.connect(this.master),c.start(),this.ctx.state==="suspended"&&await this.ctx.resume()}async toggle(){await this.init(),this.on=!this.on;let e=this.ctx.currentTime;return this.master.gain.cancelScheduledValues(e),this.master.gain.setTargetAtTime(this.on?.09:1e-4,e,.5),this.ctx.state==="suspended"&&await this.ctx.resume(),this.on}pulse(e=.5){if(!this.ctx||!this.on)return;let t=this.ctx.currentTime,n=this.ctx.createOscillator(),s=this.ctx.createGain();n.frequency.setValueAtTime(68,t),n.frequency.exponentialRampToValueAtTime(42,t+.7),s.gain.setValueAtTime(1e-4,t),s.gain.exponentialRampToValueAtTime(.055*e,t+.02),s.gain.exponentialRampToValueAtTime(1e-4,t+.9),n.connect(s),s.connect(this.master),n.start(t),n.stop(t+1)}fadeOut(e=.8){if(!this.ctx)return;let t=this.ctx.currentTime;this.master.gain.cancelScheduledValues(t),this.master.gain.setTargetAtTime(1e-4,t,e/3),this.on=!1}read(){if(!this.analyser||!this.on)return 0;this.analyser.getByteFrequencyData(this.data);let e=0;for(let t=0;t<this.data.length;t+=1)e+=this.data[t];return Cn(e/(this.data.length*255),0,1)}};function D_(){if(!Pt||!_t)return;let i=window.innerWidth,e=window.innerHeight,t=en;_t.aspect=i/e,_t.fov=i<=760?46:38,_t.updateProjectionMatrix(),Pt.setPixelRatio(Ve.dpr),Pt.setSize(i,e),jt&&(jt.setPixelRatio(Ve.dpr),jt.setSize(i,e)),Xi&&Xi.uniforms.uResolution.value.set(i,e),yi.uDpr&&(yi.uDpr.value=Ve.dpr),yi.uPixelRatio&&(yi.uPixelRatio.value=Ve.dpr),qi&&(qi.material.uniforms.uDpr.value=Ve.dpr,qi.material.uniforms.uAudio.value=C.audio),si&&(si.uniforms.aspect.value=i/e),bd(i)}function bd(i){for(let e of ri){let t=i<=760?e.data.mobile:e.data.desktop;e.group.userData.basePosition||(e.group.userData.basePosition=new D),e.group.userData.basePosition.set(t[0],t[1],t[2])}Je&&Je.scale.setScalar(i<=760?.86:1),Si&&Si.scale.setScalar(i<=760?.92:1)}var ea,qi;function L_(i){let e=C.entered?Cn((C.elapsed-C.enteredAt)/2.4,0,1):0,t=_d(e),n=C.entered?C.targetDistance:18.5;C.distance=yt(C.distance,n,C.entered?2.4:1.1,i),C.yaw=yt(C.yaw,C.targetYaw,2.8,i),C.pitch=yt(C.pitch,C.targetPitch,2.8,i),C.entered&&!C.dragging&&!C.warping&&C.elapsed-C.lastInteraction>4.5&&!Hs&&(C.targetYaw+=i*.018);let s=C.pointerSmooth;s.x=yt(s.x,C.pointer.x,2.1,i),s.y=yt(s.y,C.pointer.y,2.1,i);let r=.3*(.35+t*.65),a=C.yaw+Math.sin(C.elapsed*.08)*.018*t,o=C.pitch+Math.cos(C.elapsed*.07)*.014*t,c=C.distance+Math.sin(C.elapsed*.11)*.09*t,l=Math.sin(a)*Math.cos(o)*c+s.x*r,h=Math.sin(o)*c+1.25*(1-t)+s.y*r*.45,f=Math.cos(a)*Math.cos(o)*c,u=C.shake*.07;_t.position.set(l+Math.sin(C.elapsed*41)*u,h+Math.cos(C.elapsed*37)*u,f+Math.sin(C.elapsed*29)*u*.5);let p=new D(s.x*.16,s.y*.09,0);_t.lookAt(p),C.shake=yt(C.shake,0,4.5,i)}function N_(i){let e=vi;e.uTime.value=C.elapsed,e.uExplode.value=yt(e.uExplode.value,C.explode,6,i),e.uHover.value=yt(e.uHover.value,C.hoverCore?1:0,5,i),e.uAudio.value=yt(e.uAudio.value,C.audio,4,i),C.stretch=yt(C.stretch,C.stretchTarget,5.5,i),e.uStretch.value=C.stretch,!C.dragging&&!Hs?(C.coreSpin.x*=.94,C.coreSpin.y*=.94,C.coreRotation.x+=C.coreSpin.x*i,C.coreRotation.y+=C.coreSpin.y*i,Je.rotation.x=C.coreRotation.x,Je.rotation.y=C.coreRotation.y+C.elapsed*.035,Je.rotation.z=Math.sin(C.elapsed*.13)*.05):(C.coreRotation.x+=C.coreSpin.x*i,C.coreRotation.y+=C.coreSpin.y*i,Je.rotation.x=C.coreRotation.x,Je.rotation.y=C.coreRotation.y),Je.userData.rings&&Je.userData.rings.forEach((s,r)=>{s.rotation.z+=i*(.08+r*.045),s.rotation.y+=i*(r===1?-.06:.03)}),Je.userData.shafts&&Je.userData.shafts.forEach(s=>{s.uniforms.uTime.value=C.elapsed});let t=Je.userData.shardMesh,n=Je.userData.shards;if(t&&n){let s=new xt,r=e.uExplode.value;for(let a=0;a<n.length;a+=1){let o=n[a],c=1+r*2.1+Math.sin(C.elapsed*o.speed+o.phase)*.04;s.position.copy(o.base).multiplyScalar(c),s.rotation.set(C.elapsed*o.speed*.6+o.phase,C.elapsed*o.speed*.4,o.phase),s.scale.setScalar(o.scale*(1+r*.8)),s.updateMatrix(),t.setMatrixAt(a,s.matrix)}t.instanceMatrix.needsUpdate=!0}C.explode=yt(C.explode,0,1.65,i),yn&&(yn.material.opacity=yt(yn.material.opacity,0,3.5,i),yn.scale.setScalar(1+(1-yn.material.opacity)*.04))}function U_(i){for(let e of ri){let t=e.group,n=e.data,s=t.userData.basePosition||new D(n.desktop[0],n.desktop[1],n.desktop[2]),r=Math.sin(C.elapsed*.55+t.userData.phase)*.07;t.position.set(s.x,s.y+r,s.z),t.rotation.y+=i*(n.kind==="orb"?.12:.08),t.rotation.x=Math.sin(C.elapsed*.18+t.userData.phase)*.07;let a=C.activeNode===e?1.16:.9;t.scale.x=yt(t.scale.x,a,4.5,i),t.scale.y=yt(t.scale.y,a,4.5,i),t.scale.z=yt(t.scale.z,a,4.5,i);let o=C.activeNode===e?1:0;if(t.userData.hover=yt(t.userData.hover,o,5,i),t.userData.glow.material.opacity=.2+t.userData.hover*.26,t.userData.ringGlow.material.opacity=.1+t.userData.hover*.2,t.userData.light.intensity=1.4+t.userData.hover*2.6,t.userData.main&&(t.userData.main.position.y=Math.sin(C.elapsed*.7+t.userData.phase)*.02),t.userData.wire&&(n.kind==="lattice"?t.userData.wire.rotation.y-=i*.18:n.kind==="orb"?t.userData.wire.rotation.z+=i*.12:t.userData.wire.rotation.y+=i*.1),t.userData.inner&&(t.userData.inner.rotation.x+=i*.5,t.userData.inner.rotation.y-=i*.4),t.userData.ring2&&(t.userData.ring2.rotation.z-=i*.16),e.line){let l=e.line.geometry.attributes.position.array;l[0]=0,l[1]=0,l[2]=0,l[3]=t.position.x,l[4]=t.position.y,l[5]=t.position.z,e.line.geometry.attributes.position.needsUpdate=!0}if(e.pulse){let l=((C.elapsed*.1+t.userData.phase)%1+1)%1;e.pulse.position.lerpVectors(new D,t.position,l),e.pulse.material.opacity=.6*Math.sin(Math.PI*l);let h=.25+Math.sin(Math.PI*l)*.3;e.pulse.scale.set(h,h,1)}let c=e.label;if(c){let h=t.getWorldPosition(new D).clone().project(_t),f=C.entered&&!C.warping&&h.z<1&&h.z>-1&&h.x>-1.35&&h.x<1.35&&h.y>-1.3&&h.y<1.3;if(c.classList.toggle("is-behind",!f),f){let u=(h.x*.5+.5)*window.innerWidth,p=(-h.y*.5+.5)*window.innerHeight,_=window.innerWidth<=760?42:e.data.id==="media"?58:68;c.style.left=`${u.toFixed(1)}px`,c.style.top=`${(p-_).toFixed(1)}px`,c.classList.add("is-visible")}}}}function F_(i){yi.uTime.value=C.elapsed,ea&&(ea.children[0].rotation.y+=i*.0035,ea.children[0].rotation.x+=i*.001),qi&&(qi.material.uniforms.uTime.value=C.elapsed,qi.material.uniforms.uAudio.value=C.audio),_l.uTime.value=C.elapsed,_l.uPointer.value.copy(C.pointerSmooth),_l.uAudio.value=C.audio}function O_(i){if(zs.uTime.value=C.elapsed,zs.uPointer.value.copy(C.pointerSmooth),zs.uVelocity.value=yt(zs.uVelocity.value,C.pointerVelocity,4,i),C.pointerVelocity=yt(C.pointerVelocity,0,2.6,i),si){let t=(C.activeNode?C.activeNode.group.getWorldPosition(new D):new D(0,0,0)).distanceTo(_t.position);si.uniforms.focus.value=yt(si.uniforms.focus.value,t,2.6,i)}}function B_(){let i=performance.now();C.frameCount+=1,i-C.fpsTime>500&&(C.fps=Math.round(C.frameCount*1e3/(i-C.fpsTime)),fe.fps.textContent=String(C.fps),C.frameCount=0,C.fpsTime=i,performance.now()-C.startedAt>5e3&&C.fps<34&&!C.qualityReduced&&(C.qualityReduced=!0,si&&(si.enabled=!1),jr&&(jr.enabled=!1),vl&&(vl.strength=.25),Ve.dpr=Math.max(1,Ve.dpr-.2),Pt.setPixelRatio(Ve.dpr),jt&&jt.setPixelRatio(Ve.dpr),Xi&&Xi.uniforms.uResolution.value.set(window.innerWidth,window.innerHeight),fe.renderInfo.textContent="WEBGL 2 \xB7 ECO")),A_(1/60)}function Td(){if(requestAnimationFrame(Td),document.hidden)return;let i=performance.now(),e=Math.min((i-pd)/1e3,.05);pd=i,C.elapsed+=e,C.audio=yt(C.audio,Zt?Zt.read():0,5,e),C.warping||L_(e),N_(e),U_(e),F_(e),O_(e),B_(),jt.render(),Pt.info.reset()}async function z_(){Bs(4,"CALIBRATING SPATIAL FIELD"),await Kr();try{o_()}catch(i){H_(i);return}try{let i=Pt.getContext(),e=i.getExtension("WEBGL_debug_renderer_info"),t=e?i.getParameter(e.UNMASKED_RENDERER_WEBGL):"";/swiftshader|llvmpipe|software/i.test(String(t))&&(Ve.bokeh=!1,Ve.afterimage=!1,Ve.dpr=1,Ve.stars=900,Ve.dust=340,Ve.shards=32,Ve.shadows=!1,Pt.shadowMap.enabled=!1,Pt.setPixelRatio(1),C.softwareRenderer=!0)}catch{}yi.uDpr.value=Ve.dpr,yi.uPixelRatio.value=Ve.dpr,Bs(16,"CONSTRUCTING BACKGROUND GEOMETRY"),await Kr(),l_(),ea=c_(),Ht.add(ea),qi=h_(),Bs(34,"MAPPING SIGNAL LATTICE"),await Kr(),u_(),m_(),f_(),p_(),g_(),Bs(62,"ALIGNING THREE UNIVERSES"),await Kr(),v_(),xl(null),x_(),Bs(84,"TUNING OPTICAL PIPELINE"),await Kr(),bd(window.innerWidth),_t.position.set(0,4.2,18.5),_t.lookAt(0,0,0),window.addEventListener("resize",D_),window.addEventListener("keydown",E_),C_(),R_(),fe.renderInfo.textContent=Pt.capabilities.isWebGL2?"WEBGL 2":"WEBGL 1",Bs(100,"SPATIAL FIELD STABLE"),C.ready=!0,fe.enterBtn.disabled=!1,fe.enterBtn.focus({preventScroll:!0}),Td()}function H_(i){console.error(i),fe.intro&&(fe.intro.style.display="none"),document.body.insertAdjacentHTML("beforeend",'<div class="nexus-fallback"><div><p>SPATIAL FIELD OFFLINE</p><p style="margin-top:14px;font-size:12px;opacity:.7">\u6B64\u700F\u89BD\u5668\u7121\u6CD5\u5EFA\u7ACB WebGL 2 \u5834\u666F\u3002<br>\u4F60\u4ECD\u7136\u53EF\u4EE5\u9032\u5165\u7D93\u5178\u4E8C\u7DAD\u661F\u5716\u3002</p><p style="margin-top:18px"><a href="classic.html">\u9032\u5165\u5B87\u5B99 I \xB7 \u85DD\u8853\u97F3\u6A02 \u2197</a></p></div></div>')}z_();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
