/**
 * html {font-size: 16px}
 * body, body * {
 *  font-size: 0.8525rem;
 *  font-family: Verdana, sans-serif;
 *  }
**/
function UserPick (s, a, v) {
  // s = the selector string;
  // a = the style attribute
  // v = style value
  this.sel=s;
  this.attr= a;
  this.val= v;
  }

var verdanaRules;
verdanaRules = [
  // html
  new UserPick("html", "font-size", "100%"),
  // body
  new UserPick("body","font-family","Verdana"),
  new UserPick("body","font-size","85.25%"),
  // body *
  new UserPick("body *","font-family","inherit"),
  new UserPick("body *", "font-size", "1em")
];




