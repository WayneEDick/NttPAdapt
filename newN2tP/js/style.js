/**
 * Created with JetBrains WebStorm.
 * Author: WayneEDick
 * Date: 11/30/12
 * Time: 7:04 PM
 * To change this template use File | Settings | File Templates.
 */
(function (u){
  console.log("in style.js");
  function Style () {
    this.sel = ["selector table"];
    this.prop = ["property table"];
    this.val = ["value table"];
    this.styTab = [["style assignment"]];
    this.ind = {sel: u.notFound, prop: u.notFound, val: u.notFound};
    this.structureSel = undefined;
    this.subStructureSel = undefined;
    this.changeSel = ['a:hover']; // the selector whose style properties are to be changed
    this.changeProp = ['background-color']; // the property of the selector that is to be changed
    this.changeVal = "";
    return this;
  }
// Style Prototype
  Style.prototype.constructor = Style;

  Style.prototype.lkUpVal = function (val, fld) {
    this.ind[fld] = this[fld].indexOf(val);
    return this
  };
  Style.prototype.entLex = function(val,fld) {
    if (this.lkUpVal(val.trim(),fld).ind[fld] === u.notFound){
      this[fld].push(val.trim());
      this.ind[fld]=this[fld].length-1;
      if (fld==="sel") this.styTab[this.sel.length-1]= []
    }
    return this
  };
  Style.prototype.entRule = function (s, p, v) {
    var si, pi, vi;
    si = this.entLex(s, "sel").ind["sel"];
    pi = this.entLex(p, "prop").ind["prop"];
    vi = this.entLex(v, "val").ind["val"];
    this.styTab[si][pi] = vi;
    return this
  };


  Style.prototype.makeStylesheet = function () {
    console.log("styTab2Elmt TestCode");
    var si, pi, sty, stySht;
    var eSample=document.getElementById('ctlSample');
    sty = u.empStr;
    stySht= u.empStr;
    for (si=1; si<this.sel.length; si++) {
      sty = this.sel[si];
      sty+= u.lSetBr+ u.nln;
      for (pi=1; pi<this.styTab[si].length; pi++) {
        if(this.styTab[si][pi] !== undefined) {
          sty += this.prop[pi] + u.col +
            this.val[this.styTab[si][pi]] + u.sem + u.nln;
          eSample.style[this.prop[pi]]=this.val[this.styTab[si][pi]];
        }
      }
      sty += u.rSetBr +u.nln;
      stySht+= sty;
    }
    window.NttPStySht= stySht;
    console.log(stySht);
    return this
  };
  Style.prototype.apndRules = function (s, p, v) {
    console.log(u.cm+ "apndRules TestCode" + s.join(), p, v);
    var styR, i, top;
    styR= u.empStr;
    for (i=0; i< s.length; i++){
      this.entRule(s[i], p, v);
      // TODO: Wayne, it's working with arrays now, so keep it.
      // String needed to be in single quote
    }
    return this;
    // removed call to styTab2Elmt() as it was unnecessary here.
  };
  Style.prototype.getStylePropValue = function (sel, prop) {
    var selectorIndex = this.entLex(sel, 'sel').ind['sel'];
    var propertyIndex = this.entLex(prop, 'prop').ind['prop'];
    var valueIndex = this.styTab[selectorIndex][propertyIndex];
    if (typeof  valueIndex === 'undefined') {
      selectorIndex = this.entLex('.samp', 'sel').ind['sel'];  // if selector has no defined property
      valueIndex = this.styTab[selectorIndex][propertyIndex];   // look it up at the top-level
    }
    return this.val[valueIndex]; // could be undefined
  };
  window.NttPStyObj = new Style();
})(NttPUtilObj);
