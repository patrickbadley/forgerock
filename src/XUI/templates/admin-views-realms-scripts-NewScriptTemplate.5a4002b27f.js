webpackJsonp([220],{849:function(a,n,e){var l=e(39);a.exports=(l["default"]||l).template({1:function(a,n,e,l,t,o,s){var c,r,i=null!=n?n:a.nullContext||{},d=e.helperMissing,u="function",m=a.escapeExpression;return'                    <option value="'+m((r=null!=(r=e._id||(null!=n?n._id:n))?r:d,typeof r===u?r.call(i,{name:"_id",hash:{},data:t}):r))+'" '+(null!=(c=(e.equals||n&&n.equals||d).call(i,null!=s[2]?s[2].defaultContext:s[2],null!=n?n._id:n,{name:"equals",hash:{},fn:a.program(2,t,0,o,s),inverse:a.noop,data:t}))?c:"")+" >\n                        "+m((r=null!=(r=e.name||(null!=n?n.name:n))?r:d,typeof r===u?r.call(i,{name:"name",hash:{},data:t}):r))+"\n                    </option>\n"},2:function(a,n,e,l,t){return" selected "},compiler:[7,">= 4.0.0"],main:function(a,n,e,l,t,o,s){var c,r=null!=n?n:a.nullContext||{},i=e.helperMissing,d=a.escapeExpression;return(null!=(c=a.invokePartial(l["headers/_Title"],n,{name:"headers/_Title",hash:{title:"console.scripts.edit.title"},data:t,helpers:e,partials:l,decorators:a.decorators}))?c:"")+'\n<div class="panel panel-default panel-content">\n\n    <div class="panel-body form-horizontal">\n        \x3c!-- NAME --\x3e\n        <div class="form-group">\n            <label class="col-sm-2 control-label" for="name">'+d((e.t||n&&n.t||i).call(r,"console.common.name",{name:"t",hash:{},data:t}))+'</label>\n\n            <div class="col-sm-9">\n                <input type="text" id="name" name="scriptName" class="form-control" value="'+d(a.lambda(null!=(c=null!=n?n.entity:n)?c.name:c,n))+'"\n                       data-field="name" placeholder="'+d((e.t||n&&n.t||i).call(r,"common.form.validation.required",{name:"t",hash:{},data:t}))+'" autofocus required>\n            </div>\n        </div>\n        \x3c!-- CONTEXT --\x3e\n        <div class="form-group">\n            <label class="col-sm-2 control-label" for="context">'+d((e.t||n&&n.t||i).call(r,"console.scripts.edit.scriptType",{name:"t",hash:{},data:t}))+'</label>\n\n            <div class="col-sm-9">\n                <select class="form-control" data-field="context" id="context">\n'+(null!=(c=e.each.call(r,null!=n?n.contexts:n,{name:"each",hash:{},fn:a.program(1,t,0,o,s),inverse:a.noop,data:t}))?c:"")+'                </select>\n            </div>\n        </div>\n    </div>\n    <div class="panel-footer clearfix">\n        <div class="pull-right">\n            <a class="btn btn-default" href="'+d((e.routeTo||n&&n.routeTo||i).call(r,"realmsScripts",null!=n?n.realmPath:n,{name:"routeTo",hash:{},data:t}))+'">'+d((e.t||n&&n.t||i).call(r,"common.form.cancel",{name:"t",hash:{},data:t}))+'</a>\n            <button data-save class="btn btn-primary" type="button" disabled>\n                '+d((e.t||n&&n.t||i).call(r,"common.form.create",{name:"t",hash:{},data:t}))+"\n            </button>\n        </div>\n    </div>\n</div>\n"},usePartial:true,useData:true,useDepths:true})}});
//# sourceMappingURL=admin-views-realms-scripts-NewScriptTemplate.5a4002b27f.js.map