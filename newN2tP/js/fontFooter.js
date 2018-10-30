(function () {
  /**
   * Action Functions
   *
   */
  var styObj = window.NttPStyObj;
  var utilObj = window.NttPUtilObj;
  var text=Array.from(document.querySelectorAll('#fontMenu .text'));
  console.log("text "+text);
  function toggleTips(caller) {
    console.log("toggleTips"+caller.id+" "+caller.value);
    var onoff = caller.value;
    var tips = document.getElementsByClassName("tooltiptext");
    var rtips = document.getElementsByClassName("tooltipright");
    var utips = document.getElementsByClassName("tooltipunder");
    var status = document.getElementById("fontTTStatus");
    var action = document.getElementById("fontTTAction");
    var i;
    switch(onoff) {
      case "off":
        console.log("case off")
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
        console.log("case on")
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

  /** Begin Tooltips
   *  */
//
  var eTTBtn=document.getElementById("fontTTBtn");
  eTTBtn.addEventListener("click", function ()
  {
    toggleTips(eTTBtn);
    event.preventDefault();
    event.stopPropagation();
    console.log("Tool Tips")
    return false;
  });

  /** Begin Reset
   * */
  var eResetBtn=document.getElementById("fontResetBtn");
  eResetBtn.addEventListener("click", function ()
  {
    console.log("reset Font Settings")
    event.preventDefault();
    event.stopPropagation();
    return false;
  });
  /**
   *
   * Done
   */
  var eDoneBtn=document.getElementById("fontDoneBtn");
  eDoneBtn.addEventListener("click", function ()
  {
   styObj.entRule(utilObj.basicText,'font-family',text[0].style.fontFamily);
    styObj.makeStylesheet();
    document.getElementById("fontMenu").style.display="none";
    console.log("Controle Done Button")
    return false
  });

})();
