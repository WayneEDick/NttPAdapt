/**
 * Created with JetBrains WebStorm.
 * User: WayneEDick
 * Date: 12/9/12
 * Time: 1:24 PM
 */
(function (){
  console.log("in util.js");
  function UtilConst () {
    // Constants and Global Data
    this.empStr = "";
    this.quote = '"';
    this.apos = "'";
    this.lp = "(";
    this.rp = ")";
    this.lbr = "[";
    this.rbr = "]";
    this.lSetBr = "{";
    this.rSetBr = "}";
    this.sp = " ";
    this.cm = ",";
    this.col = ":";
    this.sem = ";";
    this.id = "#";
    this.dot = ".";
    this.nln = "\n";
    this.notFound = -1;
    this.children = " > *";
    this.sbTr = " *";
    this.help = "html/help/";
    this.basicText= "html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, font, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td";
    console.log('basic text selectors ='+this.basicText+"\n period "+this.dot+'\n right set brace '+this.rSetBr+'\n left set brace '+this.lSetBr+'\n right bracket '+this.rbr+ '\n left bracket'+this.lbr+ '\n right paret'+this.rp+ '\n left paren'+this.lp+ '\n Apostrophe'+this.apos+"\n quote"+this.quote)
  }
  window.NttPUtilObj = new UtilConst();
} )();
