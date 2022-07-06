(function(w,d){var canvas=d.createElement("canvas");canvas.width=1008;canvas.height=720;var nLoaded=0;var images=[];function beginLoad(){var loadArea=d.createElement("div");loadArea.style.visibility="hidden";d.body.appendChild(loadArea);var pic=JSON.parse(decode64(getParam("pic")));var basePath=pic.base?pic.base+"/":"";for(var i=0;i<pic.img.length;i++)
{var element=d.createElement("img");element.src=basePath+pic.img[i].url;element.onload=onImageLoaded;var mat=pic.img[i].mat;var oImage={element:element,a:mat[0]*2,b:mat[1]*2,c:mat[2]*2,d:mat[3]*2,e:mat[4]*2,f:mat[5]*2,}
images.push(oImage);loadArea.appendChild(element);};}
function onImageLoaded(){console.log("Loaded an image...");if(++nLoaded>=images.length){imageLoadCompleted();}}
function imageLoadCompleted(){var ctx=canvas.getContext("2d");ctx.fillStyle="rgb(255,255,255)";ctx.fillRect(0,0,canvas.width,canvas.height);for(var i=0;i<images.length;i++){var img=images[i];ctx.setTransform(img.a,img.b,img.c,img.d,img.e,img.f);ctx.drawImage(img.element,0,0);};var image=d.createElement("img");image.src=canvas.toDataURL('image/jpeg');image.id="final";image.style.width="6.77in";image.style.height="4.82in";d.getElementById("holder").appendChild(image);}
function getParam(name){var results=new RegExp('[\\?&]'+name+'=([^&#]*)').exec(window.location.search);if(results!=null){return decodeURIComponent(results[1].replace(/\+/g,' '));}
return null;}
var keyStr="ABCDEFGHIJKLMNOP"+
"QRSTUVWXYZabcdef"+
"ghijklmnopqrstuv"+
"wxyz0123456789+/"+
"=";function decode64(input){var output="";var chr1,chr2,chr3="";var enc1,enc2,enc3,enc4="";var i=0;input=input.replace(/[^A-Za-z0-9\+\/\=]/g,"");do{enc1=keyStr.indexOf(input.charAt(i++));enc2=keyStr.indexOf(input.charAt(i++));enc3=keyStr.indexOf(input.charAt(i++));enc4=keyStr.indexOf(input.charAt(i++));chr1=(enc1<<2)|(enc2>>4);chr2=((enc2&15)<<4)|(enc3>>2);chr3=((enc3&3)<<6)|enc4;output=output+String.fromCharCode(chr1);if(enc3!=64){output=output+String.fromCharCode(chr2);}
if(enc4!=64){output=output+String.fromCharCode(chr3);}
chr1=chr2=chr3="";enc1=enc2=enc3=enc4="";}while(i<input.length);return unescape(output);}
beginLoad();})(window,document);