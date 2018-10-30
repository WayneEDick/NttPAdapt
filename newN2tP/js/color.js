(function (){
  // Style Data Structures
  var utilObj= window.NttPUtilObj;
  var styObj= window.NttPStyObj;

/////////////// LUMINANCE ////////////

function luminance(r, g, b) {
  var a = [r,g,b].map(function(v) {
    v /= 255;
    return (v <= 0.03928) ?
      v / 12.92 :
      Math.pow( ((v+0.055)/1.055), 2.4 );
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}


function calcLumRatio() {

  var fgR = document.getElementById('nmbrFgR').value;
  var fgG = document.getElementById('nmbrFgG').value;
  var fgB = document.getElementById('nmbrFgB').value;
  var bgR = document.getElementById('nmbrBgR').value;
  var bgG = document.getElementById('nmbrBgG').value;
  var bgB = document.getElementById('nmbrBgB').value;

  var lum1 = luminance(fgR, fgG, fgB);
  var lum2 = luminance(bgR, bgG, bgB);

  var lumRatio;
  if (lum1 > lum2) { lumRatio = (lum1 + 0.05) / (lum2 + 0.05); }
  else { lumRatio = (lum2 + 0.05) / (lum1 + 0.05); }
  var lrVal = lumRatio.toPrecision(3);
  var lrBox = document.getElementById('lumRatio');
  var elvBox = document.getElementById('elvLumRatio');
  lrBox.value = lrVal;
  elvBox.value = lrVal;

  var lrTip = document.getElementById('lumRatioTip');
  var elvLrTip = document.getElementById('elvLumRatioTip');

  if (lrVal >= 7) {
    lrBox.style.backgroundColor = "#B8FFB8";
    elvBox.style.backgroundColor = "#B8FFB8";
    lrTip.innerHTML = "Good for all text";
    elvLrTip.innerHTML = "Contrast: good for all text";
  }
  else if (lrVal >= 4.5) {
    lrBox.style.backgroundColor = "#FFFF33";
    elvBox.style.backgroundColor = "#FFFF33";
    lrTip.innerHTML = "Okay for big text, minimum for small";
    elvLrTip.innerHTML = "Contrast: okay for big text, minimum for small";
  }
  else if (lrVal >= 3) {
    lrBox.style.backgroundColor = "#FFC885";
    elvBox.style.backgroundColor = "#FFC885";
    lrTip.innerHTML = "Minimum for big text";
    elvLrTip.innerHTML = "Contrast: minimum for big text";
  }
  else {
    lrBox.style.backgroundColor = "#FF3D3D";
    elvBox.style.backgroundColor = "#FF3D3D";
    lrTip.innerHTML = "Bad for any text";
    elvLrTip.innerHTML = "Contrast: bad for any text";
  }
}

//////////////  HEX //////////////

function duplicateChars (hexIn) {
  var h1 = hexIn.charAt(0);
  var h2 = hexIn.charAt(1);
  var h3 = hexIn.charAt(2);
  var hexOut;
  hexOut = h1 + h1 + h2 + h2 + h3 + h3;
  return hexOut;
}

function updateHex(flag) {
  var hexBox;
  var hexOut, elvColorBox, colorBox, colorBoxVal;
  switch (flag)
  {
    case "bg":
      hexBox= document.getElementById("valBgHex");
      break;
    case "fg":
      hexBox= document.getElementById("valFgHex");
      break;
    default: console.log("bad flag "+flag) ;
  }
  var hexIn = hexBox.value;
  if (hexIn.length === 3) {
    hexOut = duplicateChars(hexIn.toUpperCase());
  }
  else {
    hexOut = hexIn.toUpperCase();
  }

  if (/^([A-Fa-f0-9]{6})$/.test(hexOut)) {
    hexBox.style.backgroundColor = '#FFFFFF';
    colorBoxVal = "#" + hexOut;
    //debug
    // window.alert("hex value: " + colorBoxVal);
    colorBox = document.getElementById('colors');
    elvColorBox = document.getElementById('elvColors');
    switch (flag) {
      case "bg":
        colorBox.style.backgroundColor = colorBoxVal;
        elvColorBox.style.backgroundColor = colorBoxVal;
        break;
      case "fg":
        colorBox.style.color = colorBoxVal;
        elvColorBox.style.color = colorBoxVal;
        break;
    }
    hexBox.value = hexOut;
    hexToHsl(hexOut, flag);
  }
  else {
    hexBox.style.backgroundColor = '#FF6666';
  }
}

function hexToHsl (hex, flag) {

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  var r = parseInt(result[1], 16);
  var g = parseInt(result[2], 16);
  var b = parseInt(result[3], 16);

  // debug
  // window.alert("rgb: " + r + " " + g + " " + b);
  switch (flag) {
    case "bg":
      document.getElementById('nmbrBgR').value = r;
      document.getElementById('nmbrBgG').value = g;
      document.getElementById('nmbrBgB').value = b;
      break;
    case "fg":
      document.getElementById('nmbrFgR').value = r;
      document.getElementById('nmbrFgG').value = g;
      document.getElementById('nmbrFgB').value = b;
  }
  calcLumRatio();

  r /= 255; g /= 255; b /= 255;
  var max = Math.max(r, g, b), min = Math.min(r, g, b);
  var h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  h = Math.round(h * 360);
  s = Math.round(s * 100);
  l = Math.round(l * 100);

  switch (flag) {
    case "bg":
      document.getElementById('nmbrBgH').value = h;
      document.getElementById('nmbrBgS').value = s;
      document.getElementById('nmbrBgL').value = l;
      document.getElementById('valBgH').value = h;
      document.getElementById('valBgS').value = s;
      document.getElementById('valBgL').value = l;
      break;
    case "fg":
      document.getElementById('nmbrFgH').value = h;
      document.getElementById('nmbrFgS').value = s;
      document.getElementById('nmbrFgL').value = l;
      document.getElementById('valFgH').value = h;
      document.getElementById('valFgS').value = s;
      document.getElementById('valFgL').value = l;
      break;
  }
}

/////////////// RGB /////////////

/*
function componentToHex(c) {
		var hex = c.toString(16);
		return hex.length === 1 ? "0" + hex : hex;
}
*/
function rgbToHex(R,G,B) {return toHex(R)+toHex(G)+toHex(B)}
function toHex(n) {
  n = parseInt(n,10);
  if (isNaN(n)) return "00";
  n = Math.max(0,Math.min(n,255));
  return "0123456789ABCDEF".charAt((n-n%16)/16)
    + "0123456789ABCDEF".charAt(n%16);
}
/*
function hexToR(h) {
		if(h.length === 6 || h.length === 7){
			return parseInt((cutHex(h)).substring(0,2),16)
		}
		else if(h.length === 3 || h.length === 4){
			var actualHex = (cutHex(h)).substring(0,1) + (cutHex(h)).substring(0,1);
			return parseInt(actualHex,16)
		}
	}
	function hexToG(h) {
		if(h.length === 6 || h.length === 7){
			return parseInt((cutHex(h)).substring(2,4),16)
		}
		else if(h.length === 3 || h.length === 4){
			var actualHex = (cutHex(h)).substring(1,2) + (cutHex(h)).substring(1,2);
			return parseInt(actualHex,16)
		}
		//return parseInt((cutHex(h)).substring(2,4),16)
	}
	function hexToB(h) {
		if(h.length === 6 || h.length === 7){
			return parseInt((cutHex(h)).substring(4,6),16)
		}
		else if(h.length === 3 || h.length === 4){
			var actualHex = (cutHex(h)).substring(2,3) + (cutHex(h)).substring(2,3);
			return parseInt(actualHex,16)
		}
		//return parseInt((cutHex(h)).substring(4,6),16)
	}
	function cutHex(h) {
		if(h.length === 7){
			return (h.charAt(0)=="#") ? h.substring(1,7):h
		}
		else if(h.length === 4){
			return (h.charAt(0)=="#") ? h.substring(1,4):h
		}
		else{
			return h;
		}

	}
	*/


/////////////////// HSL ///////////////////


function validHSorL(newHSorL, newVal) {

  if (newVal === '') {
    return false;
  }
  if (newVal < 0) {
    return false;
  }
  if ((newHSorL === 'nmbrBgH') || (newHSorL === 'nmbrFgH')
    || (newHSorL === 'valBgH') || (newHSorL === 'valFgH')) {
    if (newVal > 360) {
      return false;
    }
  }
  else if (newVal > 100) {
    return false;
  }

  return true;
}

function bgUpdate(caller) {
  var newHSorL = caller.id;
  var newVal = caller.value;

  if (validHSorL(newHSorL, newVal)) {
    switch (newHSorL) {
      case 'valBgH':
        document.getElementById('nmbrBgH').value = newVal;
        break;
      case 'valBgS':
        document.getElementById('nmbrBgS').value = newVal;
        break;
      case 'valBgL':
        document.getElementById('nmbrBgL').value = newVal;
        break;
      case 'nmbrBgH':
        document.getElementById('valBgH').value = newVal;
        break;
      case 'nmbrBgS':
        document.getElementById('valBgS').value = newVal;
        break;
      case 'nmbrBgL':
        document.getElementById('valBgL').value = newVal;
        break;
    }
    caller.style.backgroundColor = 'transparent';
    updateBgColor();
  }
  else {
    caller.style.backgroundColor = '#FF6666';
  }
}

function updateBgColor() {
  var h = document.getElementById('nmbrBgH').value;
  var s = document.getElementById('nmbrBgS').value;
  var l = document.getElementById('nmbrBgL').value;

  var hBox = document.getElementById('nmbrBgH');
  var sBox = document.getElementById('nmbrBgS');
  hBox.style.color = 'black';
  hBox.style.backgroundColor = 'white';
  sBox.style.color = 'black';
  sBox.style.backgroundColor = 'white';

  var hLbl = document.getElementById('lblBgH');
  var sLbl = document.getElementById('lblBgS');
  hLbl.style.color = 'black';
  sLbl.style.color = 'black';

  var ttVal = document.getElementById('ttBtn').value;
  var ttBgH = document.getElementById('ttBgH');
  var ttBgS = document.getElementById('ttBgS');

  if (ttVal === "off") {
    /* meaning that tips are currently ON,
		 * but these two should still be off except as shown below */
    ttBgH.classList.add("noshow");
    ttBgS.classList.add("noshow");
  }

  if ((l === 0) || (l === 100)) {
    hBox.style.color = '#666';
    hBox.style.backgroundColor = '#AAA';
    sBox.style.color = '#666';
    sBox.style.backgroundColor = '#AAA';
    hLbl.style.color = "#AAA";
    sLbl.style.color = "#AAA";
    if (ttVal === "off") {
      ttBgS.classList.remove("noshow");
    }
  }
  if (s === 0) {
    hBox.style.color = '#666';
    hBox.style.backgroundColor = '#AAA';
    hLbl.style.color = "#AAA";
    if (ttVal === "off") {
      ttBgH.classList.remove("noshow");
    }
  }

  var bg = "hsl(" + h + "," + s + "%," + l + "%)";
  document.getElementById('colors').style.backgroundColor = bg;
  document.getElementById('elvColors').style.backgroundColor = bg;
  hslToRgb (h, s, l, 1);
  calcLumRatio();

}

function fgUpdate(caller) {
  var newHSorL = caller.id;
  var newVal = caller.value;

  if (validHSorL(newHSorL, newVal)) {
    switch (newHSorL) {
      case 'valFgH':
        document.getElementById('nmbrFgH').value = newVal;
        break;
      case 'valFgS':
        document.getElementById('nmbrFgS').value = newVal;
        break;
      case 'valFgL':
        document.getElementById('nmbrFgL').value = newVal;
        break;
      case 'nmbrFgH':
        document.getElementById('valFgH').value = newVal;
        break;
      case 'nmbrFgS':
        document.getElementById('valFgS').value = newVal;
        break;
      case 'nmbrFgL':
        document.getElementById('valFgL').value = newVal;
        break;
    }
    caller.style.backgroundColor = 'transparent';
    updateFgColor()
  }
  else {
    caller.style.backgroundColor = '#FF6666';
  }
}

function updateFgColor() {
  var h = document.getElementById('nmbrFgH').value;
  var s = document.getElementById('nmbrFgS').value;
  var l = document.getElementById('nmbrFgL').value;

  var hBox = document.getElementById('nmbrFgH');
  var sBox = document.getElementById('nmbrFgS');
  hBox.style.color = 'black';
  hBox.style.backgroundColor = 'white';
  sBox.style.color = 'black';
  sBox.style.backgroundColor = 'white';

  var hLbl = document.getElementById('lblFgH');
  var sLbl = document.getElementById('lblFgS');
  hLbl.style.color = 'black';
  sLbl.style.color = 'black';

  var ttVal = document.getElementById('ttBtn').value;
  var ttFgH = document.getElementById('ttFgH');
  var ttFgS = document.getElementById('ttFgS');

  if (ttVal === "off") {
    /* meaning that tips are currently ON,
		 * but these two should still be off except as shown below */
    ttFgH.classList.add("noshow");
    ttFgS.classList.add("noshow");
  }

  if ((l === 0) || (l === 100)) {
    hBox.style.color = '#666';
    hBox.style.backgroundColor = '#AAA';
    sBox.style.color = '#666';
    sBox.style.backgroundColor = '#AAA';
    hLbl.style.color = "#AAA";
    sLbl.style.color = "#AAA";
    if (ttVal === "off") {
      ttFgS.classList.remove("noshow");
    }
  }
  if (s === 0) {
    hBox.style.color = '#666';
    hBox.style.backgroundColor = '#AAA';
    hLbl.style.color = "#AAA";
    if (ttVal === "off") {
      ttFgH.classList.remove("noshow");
    }
  }

  var fg = "hsl(" + h + "," + s + "%," + l + "%)";
  document.getElementById('colors').style.color = fg;
  document.getElementById('elvColors').style.color = fg;
  hslToRgb(h, s, l, 0);
  calcLumRatio();

}

function hslToRgb(h, s, l, flag) {
  // flag: 1 = bg, 0 = fg
  var m1, m2, hue;
  var r, g, b;
  s /=100;
  l /= 100;
  if (s === 0)
    r = g = b = (l * 255);
  else {
    if (l <= 0.5)
      m2 = l * (s + 1);
    else
      m2 = l + s - l * s;
    m1 = l * 2 - m2;
    hue = h / 360;
    r = hueToRgb(m1, m2, hue + 1/3);
    g = hueToRgb(m1, m2, hue);
    b = hueToRgb(m1, m2, hue - 1/3);
  }
  var red = Math.round(r);
  var green = Math.round(g);
  var blue = Math.round(b);

  if (flag > 0) {
    document.getElementById('nmbrBgR').value = red;
    document.getElementById('nmbrBgG').value = green;
    document.getElementById('nmbrBgB').value = blue;
    document.getElementById('valBgHex').value = rgbToHex(red, green, blue);
    updateSatSliderBg(red, green, blue, flag);
  }
  else {
    document.getElementById('nmbrFgR').value = red;
    document.getElementById('nmbrFgG').value = green;
    document.getElementById('nmbrFgB').value = blue;
    document.getElementById('valFgHex').value = rgbToHex(red, green, blue);
    updateSatSliderBg(red, green, blue, flag);
  }
}

function hueToRgb(m1, m2, hue) {
  var hv;
  var rv;
  if (hue < 0)
    hue += 1;
  else if (hue > 1)
    hue -= 1;

  if (6 * hue < 1)
    hv = m1 + (m2 - m1) * hue * 6;
  else if (2 * hue < 1)
    hv = m2;
  else if (3 * hue < 2)
    hv = m1 + (m2 - m1) * (2/3 - hue) * 6;
  else
    hv = m1;
  rv = 255*hv;
  return rv;
}

function updateSatSliderBg (r, g, b, flag) {
  var satSliderBg = "linear-gradient(to right, rgba(" + r + "," + g + "," + b + ",0), rgba(" + r + "," + g + "," + b + ",1))";
  if (flag > 0) {
    document.getElementById('valBgSSpan').style.background = satSliderBg;
  }
  else {
    document.getElementById('valFgSSpan').style.background = satSliderBg;
  }

}

/******************* MISCELLANEOUS *******************/


function hilite(caller) {
  //var targetId = caller.name + "Span";
  // document.getElementById(targetId).style.border = '2px solid #996014';
  caller.parentElement.style.border = '2px solid #996014';
}
function hiliteOff(caller) {
  //var targetId = caller.name + "Span";
  //document.getElementById(targetId).style.border = '2px solid #eee';

  caller.parentElement.style.border = '2px solid #eee';
}

function swapBgFg() {

  var tempBgHval = document.getElementById('valBgH').value;
  var tempBgSval = document.getElementById('valBgS').value;
  var tempBgLval = document.getElementById('valBgL').value;
  var tempBgHnmbr = document.getElementById('nmbrBgH').value;
  var tempBgSnmbr = document.getElementById('nmbrBgS').value;
  var tempBgLnmbr = document.getElementById('nmbrBgL').value;


  // debug
  //  window.alert("BgHSL: " + tempBgHval + " " + tempBgSval + " " + tempBgLval);

  document.getElementById('valBgH').value = document.getElementById('valFgH').value;
  document.getElementById('valBgS').value = document.getElementById('valFgS').value;
  document.getElementById('valBgL').value = document.getElementById('valFgL').value;
  document.getElementById('nmbrBgH').value = document.getElementById('nmbrFgH').value;
  document.getElementById('nmbrBgS').value = document.getElementById('nmbrFgS').value;
  document.getElementById('nmbrBgL').value = document.getElementById('nmbrFgL').value;

  document.getElementById('valFgH').value = tempBgHval;
  document.getElementById('valFgS').value = tempBgSval;
  document.getElementById('valFgL').value = tempBgLval;
  document.getElementById('nmbrFgH').value = tempBgHnmbr;
  document.getElementById('nmbrFgS').value = tempBgSnmbr;
  document.getElementById('nmbrFgL').value = tempBgLnmbr;

  updateBgColor();
  updateFgColor();

}

function resetForm() {

  document.getElementById('colorForm').reset();
  updateBgColor();
  updateFgColor();
  initColors();
}

function swapBgTxt(caller) {
  console.log(caller.id);
  var which = caller.id;
  var bgControls = document.getElementById('bgControls');
  var txtControls = document.getElementById('txtControls');
  var txtBorderBig = document.getElementById('txtBig');
  var txtBorderSmall = document.getElementById('txtSmall');
  var elvBorderBig = document.getElementById('elvTxtBig');
  var elvBorderSmall = document.getElementById('elvTxtSmall');
  var colorBorder = document.getElementById('colors');
  var elvColorBorder = document.getElementById('elvColors');
  switch(which) {
    case 'chgToBg':
      txtControls.style.display = 'none';
      bgControls.style.display = 'block';
      txtBorderBig.style.border = '1px solid transparent';
      txtBorderSmall.style.border = '1px solid transparent';
      elvBorderBig.style.border = '1px solid transparent';
      elvBorderSmall.style.border = '1px solid transparent';
      colorBorder.style.border = '1px solid #888';
      elvColorBorder.style.border = '1px solid #888';
      break;
    case 'chgToTxt':
      bgControls.style.display = 'none';
      txtControls.style.display = 'block';
      txtBorderBig.style.border = '1px solid #888';
      txtBorderSmall.style.border = '1px solid #888';
      elvBorderBig.style.border = '1px solid #888';
      elvBorderSmall.style.border = '1px solid #888';
      colorBorder.style.border = '1px solid transparent';
      elvColorBorder.style.border = '1px solid transparent';
      break;
  }
}

function toggleTips(caller) {
  var onoff = caller.value;
  var tips = document.getElementsByClassName("tooltiptext");
  var status = document.getElementById("ttStatus");
  var action = document.getElementById("ttAction");
  var i;
  switch(onoff) {
    case "off":
      caller.value = "on";
      for (i=0; i<tips.length; i++) {
        tips[i].classList.add("noshow");
      }
      status.innerHTML = "OFF";
      status.style.color = "red";
      action.innerHTML = "&nbsp;ON&nbsp;";
      break;
    case "on": {
      caller.value = "off";
      for (i=0; i<tips.length; i++) {
        tips[i].classList.remove("noshow");
      }
      status.innerHTML = "ON&nbsp;&nbsp;";
      status.style.color = "green";
      action.innerHTML = "OFF";

      /* disable Bg slider tips unless needed for light/sat values */
      var bgLVal = document.getElementById("valBgL").value;
      if ((bgLVal > 0) && (bgLVal < 100)) {
        document.getElementById('ttBgS').classList.add("noshow");
      }
      var bgSVal = document.getElementById("valBgS").value;
      if (bgSVal > 0) {
        document.getElementById('ttBgH').classList.add("noshow");
      }
      /* same for Fg */
      var fgLVal = document.getElementById("valFgL").value;
      if ((fgLVal > 0) && (fgLVal < 100)) {
        document.getElementById('ttFgS').classList.add("noshow");
      }
      var fgSVal = document.getElementById("valFgS").value;
      if (fgSVal > 0) {
        document.getElementById('ttFgH').classList.add("noshow");
      }

      break;
    }
  }
  return false;
}

function initColors() {
  document.getElementById('valFgHex').value = "260C9D";
  document.getElementById('valBgHex').value = "E7F8FD";
  /* eventually, this will be called with the values instead of setting them here */
  updateHex('bg');
  updateHex('fg');
  updateBgColor();
  updateFgColor();
}

// Add listeners and initialize colors


/* Hilight the Background Luminosity value on focus */
var trigger01= document.getElementById("valBgL");
trigger01.addEventListener("focus", function (){console.log(trigger01.id); 
  hilite(trigger01);
});
/* Hilight the Background Luminosity value on Mouseover */
var trigger02= document.getElementById("valBgL");
trigger02.addEventListener("mouseover", function (){console.log(trigger02.id); 
  hilite(trigger02);
});
/* Highlight the background saturation on focus*/
var trigger03= document.getElementById("valBgS");
trigger03.addEventListener("focus", function (){console.log(trigger03.id); 
  hilite(trigger03);
});

/* Highlight the background saturation on mousover*/
var trigger04= document.getElementById("valBgS");
trigger04.addEventListener("mouseover", function (){console.log(trigger04.id); 
  hilite(trigger04);
});
/* Highlight the background hue on focus*/
var trigger05= document.getElementById("valBgH");
trigger05.addEventListener("focus", function (){console.log(trigger05.id); 
  hilite(trigger05);
});
/* Highlight the background hue on mousover */
var trigger06= document.getElementById("valBgH");
trigger06.addEventListener("mouseover", function (){console.log(trigger06.id); 
  hilite(trigger06);
});
/* Hilite forground luminosity on focus*/
var trigger07= document.getElementById("valFgL");
trigger07.addEventListener("focus", function (){console.log(trigger07.id); hilite(trigger07)});
/* Hilite forground luminosity on mouseover */
var trigger08= document.getElementById("valFgL");
trigger08.addEventListener("mouseover", function (){console.log(trigger08.id); hilite(trigger08)});
/* Hillite off background luminosity on blur */
var trigger09= document.getElementById("valBgL");
trigger09.addEventListener("blur", function (){console.log(trigger09.id); hiliteOff(trigger09)});
/* hiliteOff background sat on blur */
var trigger10= document.getElementById("valBgS");
trigger10.addEventListener("blur", function (){console.log(trigger10.id); hiliteOff(trigger10)});
/* hiliteOff background sat on mouseout */
var trigger11= document.getElementById("valBgS");
trigger11.addEventListener("mouseout", function (){console.log(trigger11.id); hiliteOff(trigger11)});

/* hiliteOff background hue on blur */
var trigger12= document.getElementById("valBgH");
trigger12.addEventListener("blur", function (){console.log(trigger12.id); hiliteOff(trigger12)});
/* hiliteOff background sat on mouseout */

var trigger13= document.getElementById("valBgH");
trigger13.addEventListener("mouseout", function (){console.log(trigger13.id); hiliteOff(trigger13)});
/* hilite Off forground luminosity on blur */
var trigger14= document.getElementById("valFgL");
trigger14.addEventListener("blur", function (){console.log(trigger14.id); hiliteOff(trigger14)});
/* hilite off forground luminosity on mouseout */
var trigger15= document.getElementById("valFgL");
trigger15.addEventListener("mouseout", function (){console.log(trigger15.id); hiliteOff(trigger15)});

/* hilite off forground saturation on blur */
var trigger16= document.getElementById("valFgS");
trigger16.addEventListener("blur", function (){console.log(trigger16.id); hiliteOff(trigger16)});
/* hilite off on mouseout*/
var trigger17= document.getElementById("valFgS");
trigger17.addEventListener("mouseout", function (){console.log(trigger17.id); hiliteOff(trigger17)});

/* hilite off fg hue on blur */
var trigger18= document.getElementById("valFgH");
trigger18.addEventListener("blur", function (){console.log(trigger18.id); hiliteOff(trigger18)});
// hilite off fg hue on mouseout */
var trigger19= document.getElementById("valFgH");
trigger19.addEventListener("mouseout", function (){console.log(trigger19.id); hiliteOff(trigger19)});
/* Forground Update of number lum  on change*/
var trigger20= document.getElementById("nmbrFgL");
trigger20.addEventListener("change", function (){console.log(trigger20.id); fgUpdate(trigger20)});
/* on change fg sat numbers */
var trigger21= document.getElementById("nmbrFgS");
trigger21.addEventListener("change", function (){console.log(trigger21.id); fgUpdate(trigger21)});
/* on change update fg numbers for hue */
var trigger22= document.getElementById("nmbrFgH");
trigger22.addEventListener("change", function (){console.log(trigger22.id); fgUpdate(trigger22)});
/* on input update forground val for luminosity */
var trigger23= document.getElementById("valFgL");
trigger23.addEventListener("input", function (){console.log(trigger23.id); fgUpdate(trigger23)});
/* on input update the value for fg sat */
var trigger24= document.getElementById("valFgS");
trigger24.addEventListener("input", function (){console.log(trigger24.id); fgUpdate(trigger24)});
/* on input update value for fg hue */
var trigger25= document.getElementById("valFgH");
trigger25.addEventListener("input", function (){console.log(trigger25.id); fgUpdate(trigger25)});
/* on change update numbers for bg lum */
var trigger26= document.getElementById("nmbrBgL");
trigger26.addEventListener("change", function (){console.log(trigger26.id); bgUpdate(trigger26)});
/* on change update bg numbers for sat */
var trigger27= document.getElementById("nmbrBgS");
trigger27.addEventListener("change", function (){console.log(trigger27.id); bgUpdate(trigger27)});
/* on change update numbers for bg hue */
var trigger28= document.getElementById("nmbrBgH");
trigger28.addEventListener("change", function (){console.log(trigger28.id); bgUpdate(trigger28)});
/* on input update bg value for lum */
var trigger29= document.getElementById("valBgL");
trigger29.addEventListener("input", function (){console.log(trigger29.id); bgUpdate(trigger29)});
/* on input update bg sat value */
var trigger30= document.getElementById("valBgS");
trigger30.addEventListener("input", function (){console.log(trigger30.id); bgUpdate(trigger30)});
/* on input update value for bg hue */
var trigger31= document.getElementById("valBgH");
trigger31.addEventListener("input", function (){console.log(trigger31.id); bgUpdate(trigger31)});
/* on click set hex color for bg */
var trigger32= document.getElementById("setBgHex");
trigger32.addEventListener("click", function (){console.log(trigger32.id); updateHex('bg')});
/* on click set hex color for fg */
var trigger33= document.getElementById("setFgHex");
trigger33.addEventListener("click", function (){console.log(trigger33.id); updateHex('fg')});
/*                    
 on click of tool top btn activate tooltip */
var trigger34= document.getElementById("ttBtn");
trigger34.addEventListener("click", function (){console.log(trigger34.id); toggleTips(trigger34)});
/* on click of change to text swap bg to text modification */
var trigger34a= document.getElementById("chgToTxt");
trigger34a.addEventListener("click", function (){console.log(trigger34a.id); swapBgTxt(trigger34a)});
/* on click of change to bg swap text to bg modification */
var trigger34b= document.getElementById("chgToBg");
trigger34b.addEventListener("click", function (){console.log(trigger34b.id); swapBgTxt(trigger34b)});
/* on click swap Bg and Fg chosen colors
*/
var trigger35= document.getElementById("BgFgSwap");
trigger35.addEventListener("click", function (){console.log(trigger35.id); swapBgFg()});
/* on click swap Fg and Bg chosen colors
*/
var trigger36= document.getElementById("FgBgSwap");
trigger36.addEventListener("click", function (){console.log(trigger36.id); swapBgFg()});
/* init colors on click of reset */
var trigger37= document.getElementById("reset");
trigger37.addEventListener("click", function (){console.log(trigger37.id); resetForm()});
var trigger38= document.getElementById("doneBtn");
trigger38.addEventListener("click", function () {
  var colorBox = document.getElementById('colors');
  var colorArt= document.getElementById('colorPicker');
  styObj.entRule(utilObj.basicText,'color',colorBox.style.color);
  styObj.entRule(utilObj.basicText,'background-color',colorBox.style.backgroundColor);
  styObj.makeStylesheet();
  colorArt.style.display="none";

});

// Initialize colors on load
initColors();

})();
