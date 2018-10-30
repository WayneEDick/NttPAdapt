(function(){
  var appsMenuItems = Array.from(document.querySelectorAll('#appmenu > li'));
  var subMenuItems = Array.from(document.querySelectorAll('#appmenu > li li'));
  var keys = {
    tab:    9,
    enter:  13,
    esc:    27,
    space:  32,
    left:   37,
    up:     38,
    right:  39,
    down:   40
  };
  var currentIndex=0, subIndex=0;
  var prevdef = false;
  var fontMenu=document.getElementById('fontMenu');
  //var styObj= window.NttPStyObj;
  //var utilObj= window.NttPUtilObj;

  var gotoIndex = function(idx) {
    console.log("in gotoIndex");
    if (idx === appsMenuItems.length) {
      idx = 0;
    } else if (idx < 0) {
      idx = appsMenuItems.length - 1;
    }
    console.log(idx+" From gotoIndex");
    appsMenuItems[idx].focus();
    currentIndex = idx;
  };
  var gotoSubIndex = function (menu, idx) {
    var items = menu.querySelectorAll('li');
    if (idx === items.length) {
      idx = 0;
    } else if (idx < 0) {
      idx = items.length - 1;
    }
    items[idx].focus();
    subIndex = idx;
  };

  Array.prototype.forEach.call(appsMenuItems, function(el, i){
    if (0 === i) {
      el.setAttribute('tabindex', '0');
      el.addEventListener("focus", function() {
        currentIndex = 0;
      });
    } else {
      el.setAttribute('tabindex', '-1');
    }
    el.addEventListener("focus", function() {
      subIndex = 0;
      Array.prototype.forEach.call(appsMenuItems, function(el){
        el.setAttribute('aria-expanded', "false");
      });
    });
    el.addEventListener("click",  function(event){
      if (this.getAttribute('aria-expanded') === 'false' || this.getAttribute('aria-expanded') ==  null) {
        this.setAttribute('aria-expanded', "true");
      }
      else {
        this.setAttribute('aria-expanded', "false");
      }
      event.preventDefault();
      event.stopPropagation();
      return false;
    });
    el.addEventListener("keydown", function(event) {
      currentIndex = appsMenuItems.indexOf(el);
      switch (event.keyCode) {
        case keys.right:
          console.log("right "+currentIndex);
          gotoIndex(currentIndex + 1);
          prevdef = true;
          break;
        case keys.left:
          console.log("left "+currentIndex);
          gotoIndex(currentIndex - 1);
          prevdef = true;
          break;
        case keys.tab:
          if (event.shiftKey) {
            if (currentIndex > 0) {
              gotoIndex(currentIndex - 1);
            }
            else {
              document.getElementById('fontMenu').focus();
            }
            console.log("shift-tab "+currentIndex);
          } else {
            if (currentIndex < appsMenuItems.length-1){
              gotoIndex(currentIndex + 1);
            }
            else {
              document.getElementById("fontTTBtn").focus();}
            console.log("tab "+currentIndex);
          }
          prevdef = true;
          break;
        case keys.enter:
        case keys.down:
          this.click();
          subIndex = 0;
          gotoSubIndex(this.querySelector('ul'), 0);
          prevdef = true;
          break;
        case keys.up:
          this.click();
          var submenu = this.querySelector('ul');
          subIndex = submenu.querySelectorAll('li').length - 1;
          gotoSubIndex(submenu, subIndex);
          prevdef = true;
          break;
        case keys.esc:
          gotoIndex(currentIndex);
          prevdef = true;
      }
      if (prevdef) {
        event.preventDefault();
      }
    });
  });

  Array.prototype.forEach.call(subMenuItems, function(el){
    el.setAttribute('tabindex', '-1');
    el.addEventListener("keydown", function(event) {
      currentIndex= appsMenuItems.indexOf(this.parentElement.parentElement);
      switch (event.keyCode) {
        case keys.tab:
          if (event.shiftKey) {
            gotoIndex(currentIndex - 1);
          } else {
            gotoIndex(currentIndex + 1);
          }
          prevdef = true;
          break;
        case keys.right:
          console.log("right "+currentIndex);
          gotoIndex(currentIndex + 1);
          prevdef = true;
          break;
        case keys.left:
          console.log("left "+currentIndex);
          gotoIndex(currentIndex - 1);
          prevdef = true;
          break;
        case keys.esc:
          console.log("esc "+currentIndex);
          gotoIndex(currentIndex);
          prevdef = true;
          break;
        case keys.down:
          //this.click();
          gotoSubIndex(el.parentElement, subIndex + 1);
          prevdef = true;
          break;
        case keys.up:
          gotoSubIndex(this.parentElement, subIndex - 1);
          prevdef = true;
          break;
        case keys.enter:
        case keys.space:
          this.click();
          prevdef = true;
          break;
      }
      if (prevdef) {
        event.preventDefault();
        event.stopPropagation();
      }
      return false;
    });
    el.addEventListener("click", function(event) {
      var fam=this.style.fontFamily;
      console.log(fam+' got here '+this.innerHTML);
      var text= Array.from(document.querySelectorAll("#colors, .text"));
      text.forEach(function(el,i)
        {
        el.style.fontFamily=fam;
      });
      event.preventDefault();
      event.stopPropagation();
      return false;
    });
  });
  fontMenu.addEventListener('click',function (){

      gotoIndex(currentIndex);
  })

})();

