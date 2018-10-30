(function (){
  // Review Style
  var eBegin=document.getElementById('ctlBegin');
  var eReview=document.getElementById('ctlReview');
  var eMain = document.getElementById('ctlMain');
  var eSample = document.getElementById('ctlSample');
  var eFontBtn=document.getElementById('ctlFontBtn');
  var eSizeBtn=document.getElementById('ctlSizeBtn');
  var eColorBtn=document.getElementById('ctlColorBtn');
  var eDoneBtn = document.getElementById('ctlDoneBtn');
  var eCode = document.getElementById('ctlCode');
  var eFont = document.getElementById('fontMenu');
  var eSize = document.getElementById('sizesAll');
  var eColor= document.getElementById('colorPicker');
  eBegin.addEventListener("click", function (){
    // Change Control Display
    eMain.style.display="none";
    eSample.style.display="block";
    // Hide the Font, Spacing, Color Pickers
    eFont.style.display='none';
    eSize.style.display='none';
    eColor.style.display='none';
  });
  eReview.addEventListener("click", function(){
    eMain.style.display="none";
    eSample.style.display="block";
    // Hide the Font, Spacing, Color Pickers
    eFont.style.display='none';
    eSize.style.display='none';
    eColor.style.display='none';
    window.NttPStyObj.makeStylesheet();
    eCode.style.value= window.NttPStySht;
  });
  eDoneBtn.addEventListener('click', function(){
    eMain.style.display="grid";
    eSample.style.display="none";
    eFont.style.display="none";
    eSize.style.display="none";
    eColor.style.display="none";
    window.NttPStyObj.makeStylesheet();
    eCode.style.value= window.NttPStySht;
  });
  eFontBtn.addEventListener('click', function () {
    eFont.style.display= 'block';
    eSize.style.display= 'none';
    eColor.style.display= 'none';
    eFont.focus();
  });
  eSizeBtn.addEventListener('click', function () {
    eFont.style.display= 'none';
    eSize.style.display= 'block';
    eColor.style.display= 'none';
    eSize.focus();
  });
  eColorBtn.addEventListener('click', function () {
    eFont.style.display= 'none';
    eSize.style.display= 'none';
    eColor.style.display= 'Block';
    eColor.focus();
  })



})();
