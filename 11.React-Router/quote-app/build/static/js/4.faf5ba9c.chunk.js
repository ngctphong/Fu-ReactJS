(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[4],{42:function(e,t,c){e.exports={form:"NewCommentForm_form__2Te8b",loading:"NewCommentForm_loading__2veC2",control:"NewCommentForm_control__3NVeP",actions:"NewCommentForm_actions__2fwWP"}},43:function(e,t,c){e.exports={item:"CommentItem_item__24mbD"}},44:function(e,t,c){e.exports={comments:"CommentsList_comments__valp0"}},45:function(e,t,c){e.exports={comments:"Comments_comments__iZX-v"}},46:function(e,t,c){e.exports={quote:"HighlightedQuote_quote__nE9T6"}},51:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(2),o=c(8),a=c(35),m=c(15),r=c(33),j=c(34),i=c(42),d=c.n(i),l=c(1),u=function(e){var t=Object(n.useRef)(),c=Object(r.a)(j.a),s=c.sendRequest,o=c.status,a=c.error,i=e.onAddedComment;Object(n.useEffect)((function(){"completed"!==o||a||i()}),[o,a,i]);var u=function(c){c.preventDefault();var n=t.current.value;s({commentData:{text:n},quoteId:e.quoteId})};return Object(l.jsxs)("form",{className:d.a.form,onSubmit:u,children:["pending"===o&&Object(l.jsx)("div",{className:"centered",children:Object(l.jsx)(m.a,{})}),Object(l.jsxs)("div",{className:d.a.control,onSubmit:u,children:[Object(l.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(l.jsx)("textarea",{id:"comment",rows:"5",ref:t})]}),Object(l.jsx)("div",{className:d.a.actions,children:Object(l.jsx)("button",{className:"btn",children:"Add Comment"})})]})},b=c(43),x=c.n(b),O=function(e){return Object(l.jsx)("li",{className:x.a.item,children:Object(l.jsx)("p",{children:e.text})})},h=c(44),f=c.n(h),p=function(e){return Object(l.jsx)("ul",{className:f.a.comments,children:e.comments.map((function(e){return Object(l.jsx)(O,{text:e.text},e.id)}))})},_=c(45),N=c.n(_),v=function(){var e=Object(n.useState)(!1),t=Object(a.a)(e,2),c=t[0],o=t[1],i=Object(s.j)(),d=Object(r.a)(j.c),b=d.sendRequest,x=d.status,O=d.data,h=i.quoteId;Object(n.useEffect)((function(){b(h)}),[h,b]);var f,_=Object(n.useCallback)((function(){b(h)}),[b,h]);return"pending"===x&&(f=Object(l.jsx)("div",{className:"centered",children:Object(l.jsx)(m.a,{})})),"completed"===x&&O&&O.length>0&&(f=Object(l.jsx)(p,{comments:O})),"completed"!==x||O&&0!==O.length||(f=Object(l.jsx)("p",{className:"centered",children:"No comments were added yet!"})),Object(l.jsxs)("section",{className:N.a.comments,children:[Object(l.jsx)("h2",{children:"User Comments"}),!c&&Object(l.jsx)("button",{className:"btn",onClick:function(){o(!0)},children:"Add a Comment"}),c&&Object(l.jsx)(u,{quoteId:h,onAddedComment:_}),f]})},C=c(46),g=c.n(C),q=function(e){return Object(l.jsxs)("figure",{className:g.a.quote,children:[Object(l.jsx)("p",{children:e.text}),Object(l.jsx)("figcaption",{children:e.author})]})};t.default=function(){var e=Object(s.k)(),t=Object(s.j)().quoteId,c=Object(r.a)(j.e,!0),a=c.sendRequest,i=c.status,d=c.data,u=c.error;return Object(n.useEffect)((function(){a(t)}),[a,t]),"pending"===i?Object(l.jsx)("div",{className:"centered",children:Object(l.jsx)(m.a,{})}):u?Object(l.jsx)("p",{className:"centered",children:u}):d.text?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(q,{text:d.text,author:d.author}),Object(l.jsx)(s.c,{path:e.path,exact:!0,children:Object(l.jsx)("div",{className:"centered",children:Object(l.jsx)(o.b,{className:"btn--flat",to:"".concat(e.url,"/comments"),children:"Load comments"})})}),Object(l.jsx)(s.c,{path:"".concat(e.path,"/comments"),children:Object(l.jsx)(v,{})})]}):Object(l.jsx)("p",{children:"No quote found!"})}}}]);
//# sourceMappingURL=4.faf5ba9c.chunk.js.map