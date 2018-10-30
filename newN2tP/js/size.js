(function (){
  var utilObj= window.NttPUtilObj;
  var styObj= window.NttPStyObj;
function hilite(caller) {
  //var targetId = caller.name + "Span";
  caller.parentElement.style.border = '2px solid #996014';

  //var ttId = caller.name + "Out";
  caller.nextElementSibling.style.visibility = "visible";

}
function hiliteOff(caller) {
  console.log("hiliteoff in");
  caller.parentElement.style.border = '2px solid #eee';
  console.log("hiliteoff middle");

  //var ttId = caller.name + "Out";
  caller.nextElementSibling.style.visibility = "hidden";
  console.log("hiliteoff out");
}
function updateSize(caller) {
  var whatSize = caller.id;
  var newVal = caller.value;
  var newSize = newVal + "em";
  var target = document.getElementById('textBox');

    switch (whatSize) {
      case "valFont":
        target.style.fontSize = newSize;
        // document.getElementById('valFontTT').innerHTML = newSize;
        break;
      case "valLtrSp":
        target.style.letterSpacing = newSize;
        // document.getElementById('valLtrSpTT').innerHTML = newSize;
        break;
      case "valLine":
        target.style.lineHeight = newSize;
        // document.getElementById('valLineTT').innerHTML = newSize;
        break;
      case "valWord":
        target.style.wordSpacing = newSize;
        // document.getElementById('valWordTT').innerHTML = newSize;
        break;
  }
  return false;
}

function resetSizes() {
  document.getElementById('sizesForm').reset();
  var target = document.getElementById('textBox');
  target.style.fontSize = '1em';
  // document.getElementById('valFontTT').innerHTML = '1em';
  target.style.letterSpacing = '0';
  // document.getElementById('valLtrSpTT').innerHTML = '0em';
  target.style.lineHeight = '1em';
  // document.getElementById('valLineTT').innerHTML = '1em';
  target.style.wordSpacing = '0';
  // document.getElementById('valWordTT').innerHTML = '0em';
}

function toggleTips(caller) {
  console.log("toggleTips"+caller.id+" "+caller.value);
    var onoff = caller.value;
    var tips = document.getElementsByClassName("tooltiptext");
    var rtips = document.getElementsByClassName("tooltipright");
    var utips = document.getElementsByClassName("tooltipunder");
    var status = document.getElementById("sizeTtStatus");
    var action = document.getElementById("sizeTtAction");
    var i;
    switch(onoff) {
        case "off":
            console.log("case off");
            caller.value = "on";
            for (i=0; i<tips.length; i++) {
                tips[i].classList.add("noshow");
            }
            for (i=0; i<rtips.length; i++) {
                rtips[i].classList.add("noshow");
            }
            for (i=0; i<utips.length; i++) {
                utips[i].classList.add("noshow");
            }
            status.innerHTML = "OFF";
            status.style.color = "red";
            action.innerHTML = "&nbsp;ON&nbsp;";
            break;
        case "on":
            console.log("case on");
            caller.value = "off";
            for (i=0; i<tips.length; i++) {
                tips[i].classList.remove("noshow");
            }
            for (i=0; i<rtips.length; i++) {
                rtips[i].classList.remove("noshow");
            }
            for (i=0; i<utips.length; i++) {
                utips[i].classList.remove("noshow");
            }
            status.innerHTML = "ON&nbsp;&nbsp;";
            status.style.color = "green";
            action.innerHTML = "OFF";

        }
    }

    /**
 *  Add Event Listeners
 * */

/** Begin the font size <input> #valFont
 */
// Font Value Focus
var eValFont=document.getElementById("valFont");
eValFont.addEventListener("focus", function (){
  hilite(eValFont);
  console.log(eValFont.id+" hilite(Font Value")});
// Font Value Blur
eValFont.addEventListener("blur", function ()
{
  hiliteOff(eValFont);
  console.log(eValFont.id+" hilite(eValFont);")});
// Mouse Over
eValFont.addEventListener("mouseover", function ()
{
  hilite(eValFont);
  console.log(eValFont.id+" hilite(eValFont)")});
// trigger04
var trigger04=document.getElementById("valFont");
trigger04.addEventListener("mouseout", function ()
{
  hiliteOff(trigger04);
  console.log(trigger04.id+" hiliteOff(trigger04)")});
// trigger05 error
// trigger06
var trigger06=document.getElementById("valFont");
trigger06.addEventListener("change", function ()
{
  updateSize(trigger06);
  console.log(trigger06.id+" updateSize(trigger06)")});
// trigger07
var trigger07=document.getElementById("valFont");
trigger07.addEventListener("input", function ()
{
  document.getElementById("valFontOut").value =
    document.getElementById("valFont").value;
  console.log(trigger07.id+" valFontOut.value=ValFont.value")});

/**Begin the letter spacing <input> #valLtrSp
 */
// trigger08
var trigger08= document.getElementById("valLtrSp");
trigger08.addEventListener("focus", function (){
  hilite(trigger08);
  console.log(trigger08.id+" hilite(trigger08")});
// trigger09
var trigger09=document.getElementById("valLtrSp");
trigger09.addEventListener("blur", function ()
{
  hiliteOff(trigger09);
  console.log(trigger09.id+" hilite(trigger09);")});
// trigger10
var trigger10=document.getElementById("valLtrSp");
trigger10.addEventListener("mouseover", function ()
{
  hilite(trigger10);
  console.log(trigger10.id+" hilite(trigger10)")});
// trigger11
var trigger11=document.getElementById("valLtrSp");
trigger11.addEventListener("mouseout", function ()
{
  hiliteOff(trigger11);
  console.log(trigger11.id+" hiliteOff(trigger11)")});
// trigger12
// trigger13
var trigger13=document.getElementById("valLtrSp");
trigger13.addEventListener("change", function ()
{
  updateSize(trigger13);
  console.log(trigger13.id+" updateSize(trigger13)")});
// trigger14
var trigger14=document.getElementById("valLtrSp");
trigger14.addEventListener("input", function ()
{
  document.getElementById("valLtrSpOut").value =
    document.getElementById("valLtrSp").value;
  console.log(trigger14.id+" valLtrSpOut.value=ValFont.value")});
/**Begin the line spacing <input> #valLine
 */
// trigger15
var trigger15=document.getElementById("valLine");
trigger15.addEventListener("focus", function (){
  hilite(trigger15);
  console.log(trigger15.id+" hilite(trigger15")});
// trigger16
var trigger16=document.getElementById("valLine");
trigger16.addEventListener("blur", function ()
{
  hiliteOff(trigger16);
  console.log(trigger16.id+" hilite(trigger16);")});
// trigger17
var trigger17=document.getElementById("valLine");
trigger17.addEventListener("mouseover", function ()
{
  hilite(trigger17);
  console.log(trigger17.id+" hilite(trigger17)")});
// trigger18
var trigger18=document.getElementById("valLine");
trigger18.addEventListener("mouseout", function ()
{
  hiliteOff(trigger18);
  console.log(trigger18.id+" hiliteOff(trigger18)")});
// trigger19
// trigger20
var trigger20=document.getElementById("valLine");
trigger20.addEventListener("change", function ()
{
  updateSize(trigger20);
  console.log(trigger20.id+" updateSize(trigger20)")});
// trigger21
var trigger21=document.getElementById("valLine");
trigger21.addEventListener("input", function ()
{
  document.getElementById("valLineOut").value =
    document.getElementById("valLine").value;
  console.log(trigger21.id+" valLineOut.value=ValFont.value")});
// trigger22
/**Begin the word spacing <input> #valWord
 */
// trigger22
var trigger22=document.getElementById("valWord");
trigger22.addEventListener("focus", function (){
  hilite(trigger22);
  console.log(trigger22.id+" hilite(trigger22")});
// trigger23
var trigger23=document.getElementById("valWord");
trigger23.addEventListener("blur", function ()
{
  hiliteOff(trigger23);
  console.log(trigger23.id+" hilite(trigger23);")});
// trigger24
var trigger24=document.getElementById("valWord");
trigger24.addEventListener("mouseover", function ()
{
  hilite(trigger24);
  console.log(trigger24.id+" hilite(trigger24)")});
// target25
var trigger25=document.getElementById("valWord");
trigger25.addEventListener("mouseout", function ()
{
  hiliteOff(trigger25);
  console.log(trigger25.id+" hiliteOff(trigger25)")});
// trigger26
// trigger27
var trigger27=document.getElementById("valWord");
trigger27.addEventListener("change", function ()
{
  updateSize(trigger27);
  console.log(trigger27.id+" updateSize(trigger27)")});
// trigger28
var trigger28=document.getElementById("valWord");
trigger28.addEventListener("input", function ()
{
  document.getElementById("valWordOut").value =
    document.getElementById("valWord").value;
  console.log(trigger28.id+" valWordOut.value=ValFont.value")});

/** Begin Tooltips
 *  */
//trigger 29
var trigger29=document.getElementById("sizeTtBtn");
trigger29.addEventListener("click", function ()
{
  toggleTips(trigger29);
  console.log(trigger29.id+" toggleTips(trigger29)")});

/** Begin Reset
 * */
// trigger30
var trigger30=document.getElementById("sizeReset");
trigger30.addEventListener("click", function ()
{
  resetSizes();
  console.log(trigger30.id+" resetSizes()")});
  /**
   *
   * Done
   */
// trigger31
var trigger31=document.getElementById('sizeDoneBtn');
trigger31.addEventListener("click", function ()
  {
    var textBox= document.getElementById("textBox");
    styObj.entRule(utilObj.basicText,'letter-spacing',textBox.style.letterSpacing);
    styObj.entRule(utilObj.basicText,'word-spacing',textBox.style.wordSpacing);
    styObj.entRule(utilObj.basicText,'line-height',textBox.style.lineHeight);
    styObj.makeStylesheet();
    styObj.entRule(utilObj.basicText,'font-size',textBox.style.fontSize);
    styObj.makeStylesheet();
    document.getElementById("sizesAll").style.display="none";
    console.log(trigger31.id+" Done")});
})();
