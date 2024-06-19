/**
 * 注意：TalkingData的函数，原生代码在初始化页面时首先要调用到，所以，该js必须保证首先被加载。
 * 如果使用了 require-js，必须在加载require.js之前，同步加载TalkingData
 */

function setWebViewFlag() {}

function loadURL(url) {
  var iFrame;
  iFrame = document.createElement("iframe");
  iFrame.setAttribute("src", url);
  iFrame.setAttribute("style", "display:none;");
  iFrame.setAttribute("height", "0px");
  iFrame.setAttribute("width", "0px");
  iFrame.setAttribute("frameborder", "0");
  document.body.appendChild(iFrame);
  iFrame.parentNode.removeChild(iFrame);
  iFrame = null;
}

function exec(funName, args) {
  var commend = {
    functionName: funName,
    arguments: args,
  };
  var jsonStr = JSON.stringify(commend);
  var url = "talkingdata:" + jsonStr;
  if (window.MyWebView || window.HTMsgRouter) {
    if(commend.arguments.indexOf('develop_custom')==-1){
      console.log(url);
    }
    loadURL(url);
  } else {
    if(commend.arguments.indexOf('develop_custom')==-1){
      console.log(url);
    }
  }
}

function runTrack(cmdFun) {
  cmdFun && cmdFun();
}

function jsonTitle(title) {
  if (Object.prototype.toString.call(title) === "[object Object]") {
    var _title = title;
    try {
      _title = JSON.stringify(title);
    } catch (e) {
      console.error("JSON序列化btntitle时出错", e);
    }
    return _title;
  } else if (!title) {
    // 空字符串和其他nullable的情况，统一传空字符串
    return "";
  } else {
    console.error("错误的埋点格式，btntitle必须要是可以JSON序列化的对象");
    return title;
  }
}

function checkTitle(title) {
  if (!title) {
    // 空字符串和其他nullable的情况，统一传空字符串
    return "";
  } else {
    // try {
    //   JSON.parse(title);
    // } catch (e) {
    //   console.error("btntile不是合法的JSON字符串，需要改造");
    // }
    var url = 'http://127.0.0.1' + location.pathname + location.search
    if(typeof(title) == 'string'){
       try{
        var btn_title = JSON.parse(title)
        if(!btn_title.url){
          btn_title.url = url
        }
        return JSON.stringify(btn_title)
       }catch(e){
        return title +'|url=' +encodeURIComponent(url)
       }
    }else if(typeof(title) == 'object'){
      if(!title.url){
        title.url = url
      }
    }
    return title;
  }
}

var TalkingData = {
  onEvent: function (eventId) {
    runTrack(function () {
      exec("trackEvent", [eventId]);
    });
  },
  onEventWithLabel: function (eventId, eventLabel) {
    runTrack(function () {
      exec("trackEventWithLabel", [eventId, eventLabel]);
    });
  },
  onEventWithParameters: function (eventId, eventLabel, eventData) {
    runTrack(function () {
      exec("trackEventWithParameters", [eventId, eventLabel, eventData]);
    });
  },
  onPageBegin: function (pageName) {
    runTrack(function () {
      exec("trackPageBegin", [pageName]);
    });
  },
  onPageEnd: function (pageName) {
    runTrack(function () {
      exec("trackPageEnd", [pageName]);
    });
  },
  setLocation: function (latitude, longitude) {
    runTrack(function () {
      exec("setLocation", [latitude, longitude]);
    });
  },
  onHTSCEvent: function (eventid, pageid, pagetitle, btnid, btntitle) {
    runTrack(function () {
      exec("onHTSCEvent", [
        eventid,
        pageid,
        pagetitle,
        btnid,
        checkTitle(btntitle),
      ]);
    });
  },
  onHTSCEventJSON: function (eventid, pageid, pagetitle, btnid, btntitle) {
    runTrack(function () {
      exec("onHTSCEvent", [
        eventid,
        pageid,
        pagetitle,
        btnid,
        jsonTitle(btntitle),
      ]);
    });
  },
  onHTSCEventLegacy: function (
    eventid,
    eventsubid,
    pageid,
    pagetitle,
    btnid,
    btntitle,
    eventData
  ) {
    runTrack(function () {
      exec("onHTSCEventLegacy", [
        eventid,
        eventsubid,
        pageid,
        pagetitle,
        btnid,
        checkTitle(btntitle),
        eventData,
      ]);
    });
  },
  onHTSCEventLegacyJSON: function (
    eventid,
    eventsubid,
    pageid,
    pagetitle,
    btnid,
    btntitle,
    eventData
  ) {
    runTrack(function () {
      exec("onHTSCEventLegacy", [
        eventid,
        eventsubid,
        pageid,
        pagetitle,
        btnid,
        jsonTitle(btntitle),
        eventData,
      ]);
    });
  },
  onHTSCPageBegin: function (pageid, pagetitle) {
    runTrack(function () {
      exec("onHTSCPageBegin", [pageid, pagetitle]);
    });
  },
  onHTSCPageEnd: function (pageid) {
    runTrack(function () {
      exec("onHTSCPageEnd", [pageid]);
    });
  },

  onHTSCError: function (eventId, str0, str1) {
    runTrack(function () {
      exec("onHTSCError", [eventId, str0, str1]);
    });
  },
  onHTSCServiceError: function (
    eventId,
    khh,
    rzh,
    phoneNo,
    featureName,
    pageID,
    pageTitle,
    url,
    errorID,
    errorMsg,
    reserved,
    extraInfo
  ) {
    runTrack(function () {
      exec("onHTSCServiceError", [
        eventId,
        khh,
        rzh,
        phoneNo,
        featureName,
        pageID,
        pageTitle,
        url,
        errorID,
        errorMsg,
        reserved,
        extraInfo,
      ]);
    });
  },
  // 2017-1-9增加通用的埋点方法
  onHTSCGeneralAppProcessing: function (
    eventid,
    str0,
    str1,
    str2,
    str3,
    str4,
    str5,
    str6,
    str7,
    str8,
    str9,
    int0,
    ini1
  ) {
    runTrack(function () {
      exec("onHTSCGeneralAppProcessing", [
        eventid,
        str0,
        str1,
        str2,
        str3,
        str4,
        str5,
        str6,
        str7,
        str8,
        str9,
        int0,
        ini1,
      ]);
    });
  },
};

window.TalkingData = TalkingData;
