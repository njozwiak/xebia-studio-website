this.TEMPLATES=this.TEMPLATES||{},this.TEMPLATES.equipier=Handlebars.template(function(a,s,e,l,t){this.compilerInfo=[4,">= 1.0.0"],e=this.merge(e,a.helpers),t=t||{};var h,n,i="",o="function",r=this.escapeExpression;return i+='<div class="equipier person">\n    <img src="',(n=e.urlPhoto)?h=n.call(s,{hash:{},data:t}):(n=s&&s.urlPhoto,h=typeof n===o?n.call(s,{hash:{},data:t}):n),i+=r(h)+'" alt="',(n=e.name)?h=n.call(s,{hash:{},data:t}):(n=s&&s.name,h=typeof n===o?n.call(s,{hash:{},data:t}):n),i+=r(h)+'" />\n    <span class="name">',(n=e.name)?h=n.call(s,{hash:{},data:t}):(n=s&&s.name,h=typeof n===o?n.call(s,{hash:{},data:t}):n),i+=r(h)+'</span>\n    <span class="role">',(n=e.role)?h=n.call(s,{hash:{},data:t}):(n=s&&s.role,h=typeof n===o?n.call(s,{hash:{},data:t}):n),i+=r(h)+"</span>\n</div>"});