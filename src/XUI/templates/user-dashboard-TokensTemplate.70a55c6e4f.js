webpackJsonp([166],{898:function(a,e,n){var t=n(39);a.exports=(t["default"]||t).template({1:function(a,e,n,t,l){var o,s=null!=e?e:a.nullContext||{},i=n.helperMissing,d=a.escapeExpression;return'<div id="oAuthTokens" class="panel panel-default">\n\n    <div class="panel-heading" role="tab" id="tokensCollapseHeading">\n        <h4 class="panel-title collapse-title">\n            <a data-toggle="collapse" href="#tokensCollapse" aria-expanded="true" aria-controls="tokensCollapseHeading" class="">'+d((n.t||e&&e.t||i).call(s,"templates.oauth.tokenList",{name:"t",hash:{},data:l}))+'</a>\n        </h4>\n    </div>\n\n    <div id="tokensCollapse" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="tokensCollapse" aria-expanded="true">\n        <div class="panel-body">\n            <div class="table-container">\n                <table id="oAuthTokensTable" class="table">\n                    <thead>\n                    <th id="oAuthTokensAppName"     class="col-md-4"  scope="col">'+d((n.t||e&&e.t||i).call(s,"openam.oAuth2.tokens.appName",{name:"t",hash:{},data:l}))+'</th>\n                    <th id="oAuthTokensScope"       class="col-md-3"  scope="col">'+d((n.t||e&&e.t||i).call(s,"openam.oAuth2.tokens.scopes",{name:"t",hash:{},data:l}))+'</th>\n                    <th id="oAuthTokensExpiryDate"  class="col-md-3"  scope="col">'+d((n.t||e&&e.t||i).call(s,"openam.oAuth2.tokens.expires",{name:"t",hash:{},data:l}))+'</th>\n                    <th id="oAuthTokensDeleteBtn"   class="col-md-2"  abbr="" scope="col"></th>\n                    </thead>\n\n                    <tbody>\n'+(null!=(o=n.each.call(s,null!=e?e.applications:e,{name:"each",hash:{},fn:a.program(2,l,0),inverse:a.noop,data:l}))?o:"")+"                    </tbody>\n                </table>\n            </div>\n        </div>\n    </div>\n</div>\n"},2:function(a,e,n,t,l){var o,s=null!=e?e:a.nullContext||{},i=n.helperMissing,d=a.escapeExpression,p=a.lambda;return'                    <tr id="oAuthToken_'+d((o=null!=(o=n.index||l&&l.index)?o:i,"function"===typeof o?o.call(s,{name:"index",hash:{},data:l}):o))+'">\n                        <td>'+d(p(null!=e?e.name:e,e))+"</td>\n                        <td>"+d(p(null!=e?e.scopes:e,e))+"</td>\n                        <td>"+d(p(null!=e?e.expiryDateTime:e,e))+'</td>\n                        <td>\n                            <div class="pull-right">\n                                <a  href="#" id="'+d(p(null!=e?e.id:e,e))+'" role="button"\n                                    class="deleteToken" data-toggle="tooltip"\n                                    title="'+d((n.t||e&&e.t||i).call(s,"openam.oAuth2.tokens.deleteToken",{name:"t",hash:{},data:l}))+'">\n                                    <i class="fa fa-times" aria-hidden="true"></i>\n                                    <span class="sr-only">'+d((n.t||e&&e.t||i).call(s,"openam.oAuth2.tokens.deleteToken",{name:"t",hash:{},data:l}))+"</span>\n                                </a>\n                            </div>\n                        </td>\n                    </tr>\n"},compiler:[7,">= 4.0.0"],main:function(a,e,n,t,l){var o;return null!=(o=n["if"].call(null!=e?e:a.nullContext||{},null!=e?e.applications:e,{name:"if",hash:{},fn:a.program(1,l,0),inverse:a.noop,data:l}))?o:""},useData:true})}});
//# sourceMappingURL=user-dashboard-TokensTemplate.70a55c6e4f.js.map