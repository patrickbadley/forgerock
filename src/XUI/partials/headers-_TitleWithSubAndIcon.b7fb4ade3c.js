webpackJsonp([353],{710:function(a,e,n){var l=n(39);a.exports=(l["default"]||l).template({1:function(a,e,n,l,t){var s;return'    <span class="header-icon pull-left bg-primary"><i class="fa fa-'+a.escapeExpression((s=null!=(s=n.icon||(null!=e?e.icon:e))?s:n.helperMissing,"function"===typeof s?s.call(null!=e?e:a.nullContext||{},{name:"icon",hash:{},data:t}):s))+'"></i></span>\n'},3:function(a,e,n,l,t){return"            "+a.escapeExpression((n.partial||e&&e.partial||n.helperMissing).call(null!=e?e:a.nullContext||{},null!=e?e.actionPartial:e,e,{name:"partial",hash:{},data:t}))+"\n"},5:function(a,e,n,l,t){var s,i=a.escapeExpression,r=null!=e?e:a.nullContext||{};return'            <span class="page-header-detail '+i(a.lambda(null!=(s=null!=e?e.detail:e)?s["class"]:s,e))+'">'+(null!=(s=n["if"].call(r,null!=(s=null!=e?e.detail:e)?s.icon:s,{name:"if",hash:{},fn:a.program(6,t,0),inverse:a.noop,data:t}))?s:"")+" "+i((n.t||e&&e.t||n.helperMissing).call(r,null!=(s=null!=e?e.detail:e)?s.text:s,{name:"t",hash:{safeString:false},data:t}))+"</span>\n"},6:function(a,e,n,l,t){var s;return'<i class="fa '+a.escapeExpression(a.lambda(null!=(s=null!=e?e.detail:e)?s.icon:s,e))+'"></i> '},compiler:[7,">= 4.0.0"],main:function(a,e,n,l,t){var s,i=null!=e?e:a.nullContext||{},r=n.helperMissing,o=a.escapeExpression;return'\x3c!--\n  Copyright 2015-2017 ForgeRock AS. All Rights Reserved\n \n  Use of this code requires a commercial software license with ForgeRock AS.\n  or with one of its affiliates. All use shall be exclusively subject\n  to such license between the licensee and ForgeRock AS.\n--\x3e\n<header class="page-header page-header-no-border clearfix">\n\n'+(null!=(s=n["if"].call(i,null!=e?e.icon:e,{name:"if",hash:{},fn:a.program(1,t,0),inverse:a.noop,data:t}))?s:"")+'\n\n    <div class="deep-page-header-button-group button-group pull-right">\n        <div data-tab-search />\n'+(null!=(s=n.each.call(i,null!=e?e.headerActions:e,{name:"each",hash:{},fn:a.program(3,t,0),inverse:a.noop,data:t}))?s:"")+'    </div>\n\n    <div class="pull-left">\n        <h4 class="page-type">'+o((n.t||e&&e.t||r).call(i,null!=e?e.type:e,{name:"t",hash:{},data:t}))+"</h4>\n"+(null!=(s=n["if"].call(i,null!=e?e.detail:e,{name:"if",hash:{},fn:a.program(5,t,0),inverse:a.noop,data:t}))?s:"")+'        <h1 class="wordwrap">'+o((n.t||e&&e.t||r).call(i,null!=e?e.title:e,{name:"t",hash:{safeString:false},data:t}))+"</h1>\n    </div>\n\n</header>\n"},useData:true})}});
//# sourceMappingURL=headers-_TitleWithSubAndIcon.b7fb4ade3c.js.map