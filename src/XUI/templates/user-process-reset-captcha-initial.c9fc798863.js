webpackJsonp([156],{908:function(e,n,a){var s=a(39);e.exports=(s["default"]||s).template({compiler:[7,">= 4.0.0"],main:function(e,n,a,s,t){var p;return'<script src=\'https://www.google.com/recaptcha/api.js\'><\/script>\n<script>\nfunction handleCaptchaCallback(response) {\n    var $ = require("jquery");\n    $("#captchaResponse :input[name=response]").val(response);\n    $("#captchaResponse").trigger("submit");\n}\n<\/script>\n\n<style>\n.g-recaptcha>div>div {\n    display: inline-block;\n}\n</style>\n\n<div class="g-recaptcha"\n    data-sitekey="'+e.escapeExpression(e.lambda(null!=(p=null!=(p=null!=(p=null!=n?n.requirements:n)?p.properties:p)?p.response:p)?p.recaptchaSiteKey:p,n))+'"\n    data-callback="handleCaptchaCallback"></div>\n\n<form class="form" id="captchaResponse">\n    <input type="hidden" name="response">\n</form>\n'},useData:true})}});
//# sourceMappingURL=user-process-reset-captcha-initial.c9fc798863.js.map