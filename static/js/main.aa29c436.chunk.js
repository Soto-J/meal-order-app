(this["webpackJsonpmeal-order-app"]=this["webpackJsonpmeal-order-app"]||[]).push([[0],[,,,,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__1s1dR",total:"Cart_total__SLNEe",actions:"Cart_actions__5K_w3","button--close":"Cart_button--close__2DHxd","button--order":"Cart_button--order__2TMdS"}},function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__EmDFl",summary:"CartItem_summary__3B71v",price:"CartItem_price__3C90S",amount:"CartItem_amount__3kCtC",actions:"CartItem_actions__32rXu"}},,function(e,t,n){e.exports={button:"HeaderCartButton_button__3kqNt",icon:"HeaderCartButton_icon__2-jnV",badge:"HeaderCartButton_badge__yHoxj",bump:"HeaderCartButton_bump__M8-iU"}},,,function(e,t,n){e.exports={backdrop:"Modal_backdrop__2u0nl",modal:"Modal_modal__XnmZN","slide-down":"Modal_slide-down__1LDWD"}},function(e,t,n){e.exports={meal:"MealItem_meal__3_zCf",description:"MealItem_description__nXO4I",price:"MealItem_price__eeEyB"}},function(e,t,n){e.exports={header:"Header_header__yyKni","main-image":"Header_main-image__3l_e3"}},,,,,,function(e,t,n){e.exports={card:"Card_card__1bnmY"}},function(e,t,n){e.exports={input:"Input_input__1GiN2"}},function(e,t,n){e.exports={form:"MealItemForm_form__2Ihve"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__1OvX6","meals-appear":"AvailableMeals_meals-appear__vI5Qa"}},function(e,t,n){e.exports={summary:"MealsSummary_summary__2ITb1"}},,,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(16),c=n.n(a),r=(n(30),n(2)),i=n(1),s=n.n(i),o=n(3),l=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),u=n(10),d=n.n(u),m=n(8),j=n.n(m),b=n(0),O=function(e){return Object(b.jsx)("div",{className:d.a.backdrop,onClick:e.onHideCart})},x=function(e){return Object(b.jsx)("div",{className:d.a.modal,children:Object(b.jsx)("div",{className:d.a.content,children:e.children})})},p=document.getElementById("overlays"),h=function(e){return Object(b.jsxs)(i.Fragment,{children:[j.a.createPortal(Object(b.jsx)(O,{onHideCart:e.onHideCart}),p),j.a.createPortal(Object(b.jsx)(x,{children:e.children}),p)]})},f=n(4),_=n.n(f),v=n(5),C=n.n(v),y=function(e){var t="$".concat(e.price.toFixed(2));return Object(b.jsxs)("li",{className:C.a["cart-item"],children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h2",{children:e.name}),Object(b.jsxs)("div",{className:C.a.summary,children:[Object(b.jsx)("span",{className:C.a.price,children:t}),Object(b.jsxs)("span",{className:C.a.amount,children:["x ",e.quantity]})]})]}),Object(b.jsxs)("div",{className:C.a.actions,children:[Object(b.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(b.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},g=function(e){var t=Object(i.useContext)(l),n="$".concat(t.totalAmount.toFixed(2));console.log(t.items),console.log("length:",t.items.length);var a=t.items.length>0,c=function(e){t.removeItem(e)},r=function(e){t.addItem(Object(o.a)(Object(o.a)({},e),{},{quantity:1}))},s=Object(b.jsx)("ul",{className:_.a["cart-items"],children:t.items.map((function(e){return Object(b.jsx)(y,{name:e.name,quantity:e.quantity,price:e.price,onRemove:c.bind(null,e.id),onAdd:r.bind(null,e)},e.id)}))});return Object(b.jsxs)(h,{onHideCart:e.onHideCart,children:[s,Object(b.jsxs)("div",{className:_.a.total,children:[Object(b.jsx)("span",{children:"Total Amount"}),Object(b.jsx)("span",{children:n})]}),Object(b.jsxs)("div",{className:_.a.actions,children:[Object(b.jsx)("button",{onClick:e.onHideCart,className:_.a["button--close"],children:"Close"}),a&&Object(b.jsx)("button",{className:_.a["button--order"],children:"Order"})]})]})},N=n(12),I=n.n(N),A=n.p+"static/media/meals.2971f633.jpg",w=n(7),H=n.n(w),M=function(){return Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(b.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},k=function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),a=n[0],c=n[1],s=Object(i.useContext)(l),o=s.items.reduce((function(e,t){return e+t.quantity}),0),u="".concat(H.a.button," ").concat(a?H.a.bump:"");return Object(i.useEffect)((function(){if(0!==s.items.length){c(!0);var e=setTimeout((function(){c(!1)}),300);return function(){clearTimeout(e)}}}),[s.items]),Object(b.jsxs)("button",{className:u,onClick:e.onShowCart,children:[Object(b.jsx)("span",{className:H.a.icon,children:Object(b.jsx)(M,{})}),Object(b.jsx)("span",{children:"Your Cart"}),Object(b.jsx)("span",{className:H.a.badge,children:o})]})},q=function(e){return Object(b.jsxs)(i.Fragment,{children:[Object(b.jsxs)("header",{className:I.a.header,children:[Object(b.jsx)("h1",{children:"Meal Order"}),Object(b.jsx)(k,{onShowCart:e.onShowCart})]}),Object(b.jsx)("div",{className:I.a["main-image"],children:Object(b.jsx)("img",{src:A,alt:"A table of food."})})]})},S=n(14),D=n(17),E=n(18),F=n.n(E),B=function(e){return Object(b.jsx)("div",{className:F.a.card,children:e.children})},R=n(19),T=n.n(R),z=s.a.forwardRef((function(e,t){return Object(b.jsxs)("div",{className:T.a.input,children:[Object(b.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(b.jsx)("input",Object(o.a)({ref:t},e.input))]})})),P=n(20),V=n.n(P),X=function(e){var t=Object(i.useState)(!0),n=Object(r.a)(t,2),a=n[0],c=n[1],s=Object(i.useRef)();return Object(b.jsxs)("form",{className:V.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value.trim();n=+n,console.log(n),0>=n||n>5?c(!1):(c(!0),e.onAddToCart(n))},children:[Object(b.jsx)(z,{ref:s,label:"Amount",input:{id:"amount_"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(b.jsx)("button",{children:"+ Add"}),!a&&Object(b.jsx)("p",{children:"Please enter a valid amount"})]})},Y=n(11),$=n.n(Y),J=function(e){var t=Object(i.useContext)(l),n="$".concat(e.price.toFixed(2));return Object(b.jsxs)("li",{className:$.a.meal,children:[Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:e.name}),Object(b.jsx)("div",{className:$.a.description,children:e.description}),Object(b.jsx)("div",{className:$.a.price,children:n})]}),Object(b.jsx)("div",{children:Object(b.jsx)(X,{onAddToCart:function(n){t.addItem({id:e.id,name:e.name,quantity:n,price:e.price})}})})]})},K=n(21),L=n.n(K),G=function(){var e=Object(i.useState)([]),t=Object(r.a)(e,2),n=t[0],a=t[1];Object(i.useEffect)((function(){var e=function(){var e=Object(D.a)(Object(S.a)().mark((function e(){var t,c,r,i;return Object(S.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://react-http-669cf-default-rtdb.firebaseio.com/meals.json");case 3:return(t=e.sent).ok||console.log("Somthing went wrong!"),e.next=7,t.json();case 7:for(i in c=e.sent,r=[],c)r.push({id:i,name:c[i].name,description:c[i].description,price:c[i].price});return a(r),e.abrupt("return",n);case 14:e.prev=14,e.t0=e.catch(0),console.log(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var c=n.map((function(e){return Object(b.jsx)(J,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(b.jsx)("section",{className:L.a.meals,children:Object(b.jsx)(B,{children:Object(b.jsx)("ul",{children:c})})})},Q=n(22),U=n.n(Q),W=function(){return Object(b.jsxs)("section",{className:U.a.summary,children:[Object(b.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(b.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(b.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},Z=function(){return Object(b.jsxs)(i.Fragment,{children:[Object(b.jsx)(W,{}),Object(b.jsx)(G,{})]})},ee=n(13),te={items:[],totalAmount:0},ne=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.item.price*t.item.quantity,c=e.items.findIndex((function(e){return t.item.id===e.id})),r=e.items[c];if(r){var i=Object(o.a)(Object(o.a)({},r),{},{quantity:r.quantity+t.item.quantity});(n=Object(ee.a)(e.items))[c]=i}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE"===t.type){var s,l=e.items.findIndex((function(e){return e.id===t.id})),u=e.items[l],d=e.totalAmount-u.price;if(1===u.quantity)s=e.items.filter((function(e){return e.id!==t.id}));else{var m=Object(o.a)(Object(o.a)({},u),{},{quantity:u.quantity-1});(s=Object(ee.a)(e.items))[l]=m}return{items:s,totalAmount:d}}return te},ae=function(e){var t=Object(i.useReducer)(ne,te),n=Object(r.a)(t,2),a=n[0],c=n[1],s={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})}};return Object(b.jsx)(l.Provider,{value:s,children:e.children})};var ce=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(b.jsxs)(ae,{children:[n&&Object(b.jsx)(g,{onHideCart:function(){a(!1)}}),Object(b.jsx)(q,{onShowCart:function(){a(!0)}}),Object(b.jsx)("main",{children:Object(b.jsx)(Z,{})})]})};c.a.createRoot(document.getElementById("root")).render(Object(b.jsx)(ce,{}))}],[[32,1,2]]]);
//# sourceMappingURL=main.aa29c436.chunk.js.map