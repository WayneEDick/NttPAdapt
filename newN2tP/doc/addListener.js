var trigger=[], i=0;
/** Begin the font size <input> #valFont
*/
trigger[i]=document.getElementById("valFont");
trigger[i].addEventListener("focus", function (){
  hilite(trigger[i]);
  console.log(trigger[i].id+" i="+i+"hilite(trigger[i]")});
i++;
trigger[i]=document.getElementById("valFont");
trigger[i].addEventListener("blur", function ()
{
  hilite(trigger[i]);
  console.log(trigger[i].id+" i="+i+"hilite(trigger[i]);")});
i++;
trigger[i]=document.getElementById("valFont");
trigger[i].addEventListener("mouseover", function ()
{
  hilite(trigger[i]);
  console.log(trigger[i].id+" i="+i+"hilite(trigger[i])")});
i++;
trigger[i]=document.getElementById("valFont");
trigger[i].addEventListener("onmouseout", function ()
{
  hiliteOff(trigger[i]);
  console.log(trigger[i].id+" i="+i+"hiliteOff(trigger[i])")});
i++;
trigger[i]=document.getElementById("valFont");
trigger[i].addEventListener("mouseout", function ()
{
  hilite(trigger[i]);
  console.log(trigger[i].id+" i="+i+"hiliteOff(trigger[i])")});
i++;
trigger[i]=document.getElementById("valFont");
trigger[i].addEventListener("change", function ()
{
  updateSize(trigger[i]);
  console.log(trigger[i].id+" i="+i+"updateSize(trigger[i])")});
i++;
trigger[i]=document.getElementById("valFont");
trigger[i].addEventListener("input", function ()
{
  document.getElementById("valFontOut").value =
    document.getElementById("valFont").value;
  console.log(trigger[i].id+" i="+i+"valFontOut.value=ValFont.value")});
i++;
/**Begin the letter spacing <input> #valLtrSp
 */
trigger[i]=document.getElementById("valLtrSp");
trigger[i].addEventListener("focus", function (){
  hilite(trigger[i]);
  console.log(trigger[i].id+" i="+i+"hilite(trigger[i]")});
i++;
trigger[i]=document.getElementById("valLtrSp");
trigger[i].addEventListener("blur", function ()
{
  hilite(trigger[i]);
  console.log(trigger[i].id+" i="+i+"hilite(trigger[i]);")});
i++;
trigger[i]=document.getElementById("valLtrSp");
trigger[i].addEventListener("mouseover", function ()
{
  hilite(trigger[i]);
  console.log(trigger[i].id+" i="+i+"hilite(trigger[i])")});
i++;
trigger[i]=document.getElementById("valLtrSp");
trigger[i].addEventListener("onmouseout", function ()
{
  hiliteOff(trigger[i]);
  console.log(trigger[i].id+" i="+i+"hiliteOff(trigger[i])")});
i++;
trigger[i]=document.getElementById("valLtrSp");
trigger[i].addEventListener("mouseout", function ()
{
  hilite(trigger[i]);
  console.log(trigger[i].id+" i="+i+"hiliteOff(trigger[i])")});
i++;
trigger[i]=document.getElementById("valLtrSp");
trigger[i].addEventListener("change", function ()
{
  updateSize(trigger[i]);
  console.log(trigger[i].id+" i="+i+"updateSize(trigger[i])")});
i++;
trigger[i]=document.getElementById("valLtrSp");
trigger[i].addEventListener("input", function ()
{
  document.getElementById("valLtrSpOut").value =
    document.getElementById("valLtrSp").value;
  console.log(trigger[i].id+" i="+i+"valLtrSpOut.value=ValFont.value")});
i++;
/**Begin the line spacing <input> #valLine
 */
trigger[i]=document.getElementById("valLine");
trigger[i].addEventListener("focus", function (){
  hilite(trigger[i]);
  console.log(trigger[i].id+" i="+i+"hilite(trigger[i]")});
i++;
trigger[i]=document.getElementById("valLine");
trigger[i].addEventListener("blur", function ()
{
  hilite(trigger[i]);
  console.log(trigger[i].id+" i="+i+"hilite(trigger[i]);")});
i++;
trigger[i]=document.getElementById("valLine");
trigger[i].addEventListener("mouseover", function ()
{
  hilite(trigger[i]);
  console.log(trigger[i].id+" i="+i+"hilite(trigger[i])")});
i++;
trigger[i]=document.getElementById("valLine");
trigger[i].addEventListener("onmouseout", function ()
{
  hiliteOff(trigger[i]);
  console.log(trigger[i].id+" i="+i+"hiliteOff(trigger[i])")});
i++;
trigger[i]=document.getElementById("valLine");
trigger[i].addEventListener("mouseout", function ()
{
  hilite(trigger[i]);
  console.log(trigger[i].id+" i="+i+"hiliteOff(trigger[i])")});
i++;
trigger[i]=document.getElementById("valLine");
trigger[i].addEventListener("change", function ()
{
  updateSize(trigger[i]);
  console.log(trigger[i].id+" i="+i+"updateSize(trigger[i])")});
i++;
trigger[i]=document.getElementById("valLine");
trigger[i].addEventListener("input", function ()
{
  document.getElementById("valLineOut").value =
    document.getElementById("valLine").value;
  console.log(trigger[i].id+" i="+i+"valLineOut.value=ValFont.value")});
i++;
/**Begin the word spacing <input> #valWord
 */
trigger[i]=document.getElementById("valWord");
trigger[i].addEventListener("focus", function (){
  hilite(trigger[i]);
  console.log(trigger[i].id+" i="+i+"hilite(trigger[i]")});
i++;
trigger[i]=document.getElementById("valWord");
trigger[i].addEventListener("blur", function ()
{
  hilite(trigger[i]);
  console.log(trigger[i].id+" i="+i+"hilite(trigger[i]);")});
i++;
trigger[i]=document.getElementById("valWord");
trigger[i].addEventListener("mouseover", function ()
{
  hilite(trigger[i]);
  console.log(trigger[i].id+" i="+i+"hilite(trigger[i])")});
i++;
trigger[i]=document.getElementById("valWord");
trigger[i].addEventListener("onmouseout", function ()
{
  hiliteOff(trigger[i]);
  console.log(trigger[i].id+" i="+i+"hiliteOff(trigger[i])")});
i++;
trigger[i]=document.getElementById("valWord");
trigger[i].addEventListener("mouseout", function ()
{
  hilite(trigger[i]);
  console.log(trigger[i].id+" i="+i+"hiliteOff(trigger[i])")});
i++;
trigger[i]=document.getElementById("valWord");
trigger[i].addEventListener("change", function ()
{
  updateSize(trigger[i]);
  console.log(trigger[i].id+" i="+i+"updateSize(trigger[i])")});
i++;
trigger[i]=document.getElementById("valWord");
trigger[i].addEventListener("input", function ()
{
  document.getElementById("valWordOut").value =
    document.getElementById("valWord").value;
  console.log(trigger[i].id+" i="+i+"valWordOut.value=ValFont.value")});
i++;

/** Begin Tooltips
 *  */
trigger[i]=document.getElementById("ttBtn");
trigger[i].addEventListener("click", function ()
{
  toggleTips(trigger[i]);
  console.log(trigger[i].id+" i="+i+"toggleTips(trigger[i])")});
i++;
/** Begin Reset
 * */
trigger[i]=document.getElementById("reset");
trigger[i].addEventListener("click", function ()
{
  resetSizes();
  console.log(trigger[i].id+" i="+i+"resetSizes()")});


