webpackJsonp([264],{838:function(e,a,l){var n=l(39);e.exports=(n["default"]||n).template({compiler:[7,">= 4.0.0"],main:function(e,a,l,n,t){var o,s=null!=a?a:e.nullContext||{},i=l.helperMissing,c=e.escapeExpression;return(null!=(o=e.invokePartial(n["headers/_Title"],a,{name:"headers/_Title",hash:{title:"console.authorization.policies.edit.createNew"},data:t,helpers:l,partials:n,decorators:e.decorators}))?o:"")+'\n<div class="panel panel-default fr-panel-with-border">\n\n    <div class="panel-body">\n        <div class="block clearfix form-horizontal">\n            <div class="form-group">\n                <label class="col-sm-2 control-label" for="policyName">'+c((l.t||a&&a.t||i).call(s,"console.common.name",{name:"t",hash:{},data:t}))+'</label>\n\n                <div class="col-sm-9">\n                    <input class="form-control" id="policyName" name="entityName" type="text"\n                           value="'+c(e.lambda(null!=(o=null!=a?a.entity:a)?o.name:o,a))+'" data-field="name" autofocus required\n                           placeholder="'+c((l.t||a&&a.t||i).call(s,"common.form.validation.required",{name:"t",hash:{},data:t}))+'"/>\n                </div>\n            </div>\n\n            <div class="form-group">\n                <label class="col-sm-2 control-label" for="resTypesSelection">\n                    '+c((l.t||a&&a.t||i).call(s,"console.authorization.common.resourceType",{name:"t",hash:{},data:t}))+'\n                </label>\n\n                <div class="col-sm-9">\n                    <select class="selectize" id="resTypesSelection">\n                        <option disabled selected value="">'+c((l.t||a&&a.t||i).call(s,"console.authorization.policies.edit.selectResourceType",{name:"t",hash:{},data:t}))+'</option>\n                    </select>\n\n                    <span class="input-helper-text">\n                        '+c((l.t||a&&a.t||i).call(s,"console.authorization.policies.edit.selectResourceTypeHelper",{name:"t",hash:{},data:t}))+'\n                    </span>\n                </div>\n            </div>\n\n            <div id="editResources" class="clearfix"></div>\n        </div>\n    </div>\n\n    <div class="panel-footer clearfix">\n        <div class="pull-right">\n            <a class="btn btn-default" href="'+c((l.routeTo||a&&a.routeTo||i).call(s,"realmsPolicySetEdit",null!=a?a.realmPath:a,null!=a?a.policySetName:a,{name:"routeTo",hash:{},data:t}))+'">\n                '+c((l.t||a&&a.t||i).call(s,"common.form.cancel",{name:"t",hash:{},data:t}))+'\n            </a>\n            <input data-save type="button" name="submitForm" value="'+c((l.t||a&&a.t||i).call(s,"common.form.create",{name:"t",hash:{},data:t}))+'" class="btn btn-primary">\n        </div>\n    </div>\n</div>\n'},usePartial:true,useData:true})}});
//# sourceMappingURL=admin-views-realms-authorization-policies-NewPolicyTemplate.4434e31113.js.map