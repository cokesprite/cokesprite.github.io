window.xlog.init({
  from: window.__inst_config__.projectName || '',
  types: ['xhr', 'windowError', 'unhandledrejection', 'sourceError'],
  ignoreJsErrorList: [
    'Script error.',
    "Uncaught TypeError: Cannot read property 'value' of null",
    "Uncaught TypeError: Cannot read properties of null (reading 'value')",
    "ReferenceError: Can't find variable: GoBackOnLoad",
    'Uncaught ReferenceError: GoBackOnLoad is not defined',
    "ReferenceError: Can't find variable: GoBackground",
    'Uncaught ReferenceError: GoBackground is not defined',
    "ReferenceError: Can't find variable: disable_timer",
    'Uncaught ReferenceError: disable_timer is not defined',
    "ReferenceError: Can't find variable: enable_timer",
    'Uncaught ReferenceError: enable_timer is not defined',
    "ReferenceError: Can't find variable: hot",
    'Uncaught ReferenceError: hot is not defined',
    "ReferenceError: Can't find variable: getSubTitle",
    'Uncaught ReferenceError: getSubTitle is not defined',
    "ReferenceError: Can't find variable: setWebViewFlag",
    'Uncaught ReferenceError: setWebViewFlag is not defined',
    "ReferenceError: Can't find variable: setLargeVersion",
    'Uncaught ReferenceError: setLargeVersion is not defined',
    "ReferenceError: Can't find variable: webjsOnVisible",
    'Uncaught ReferenceError: webjsOnVisible is not defined',
    "ReferenceError: Can't find variable: webjsOnHide",
    'Uncaught ReferenceError: webjsOnHide is not defined',
    "ReferenceError: Can't find variable: WebViewJavascriptBridge",
    'Uncaught ReferenceError: WebViewJavascriptBridge is not defined',
  ],
  submitType: 'zlcft',
  commonLogsHandler: function (logs) {
    logs.event.forEach(function (evt) {
      evt.btn_title.xlog_from = logs.from;
      evt.btn_title.xlog_uuid = logs.uuid;
      evt.btn_title.xlog_trace_id = logs.traceId;
      evt.btn_title.xlog_basic = logs.basic;
      if (window.TalkingData) {
        window.TalkingData.onHTSCEventJSON(
          evt.id,
          evt.page_id,
          'app_web_custom_report',
          evt.btn_id,
          evt.btn_title
        );
      }
    });
  },
});
