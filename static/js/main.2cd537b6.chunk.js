(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1577:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(66),l=a.n(c),i=(a(77),a(79),a(1587)),o=a(1583),u=a(1588),m=a(1589),s=a(1586),E=a(1526),p=a(1527),d=a(42),y=a(8),f=a(17),b=a(25),g=a.n(b),h=a(3),C=function(e,t){switch(t.type){case"ADD_TO_CARD":return Object(h.a)({},e,{cart:[].concat(Object(f.a)(e.cart),[Object(h.a)({},t.payload,{quantity:1})])});case"REMOVE_FROM_CARD":return Object(h.a)({},e,{cart:e.cart.filter(function(e){return e.id!==t.payload.id})});case"CHANGE_CART_QUANTITY":return Object(h.a)({},e,{cart:e.cart.filter(function(e){return e.id===t.payload.id?e.quantity=t.payload.quantity:e.quantity})});default:return e}},R=function(e,t){switch(t.type){case"FILTER_BY_PRICE":return Object(h.a)({},e,{sort:t.payload});case"FILTER_BY_STOCK":return Object(h.a)({},e,{byStock:!e.byStock});case"FILTER_BY_DELIVERY":return Object(h.a)({},e,{byDelivery:!e.byDelivery});case"FILTER_BY_RATING":return Object(h.a)({},e,{byRating:t.payload});case"FILTER_BY_SEARCH":return Object(h.a)({},e,{bySearch:t.payload});case"CLEAR_FILTER":return{byStock:!1,byDelivery:!1,byRating:0,bySearch:""};default:return e}},k=Object(n.createContext)();g.a.seed(99);var _=function(){return Object(n.useContext)(k)},v=function(e){var t=e.children,a=Object(f.a)(Array(20)).map(function(){return{id:g.a.datatype.uuid(),name:g.a.commerce.productName(),price:g.a.commerce.price(),image:g.a.random.image(),inStock:g.a.random.arrayElement([0,5,6,8,2]),fastDelivery:g.a.datatype.boolean(),ratings:g.a.random.arrayElement([1,2,3,4,5])}}),c=Object(n.useReducer)(C,{products:a,cart:[]}),l=Object(y.a)(c,2),i=l[0],o=l[1],u=Object(n.useReducer)(R,{byStock:!1,byDelivery:!1,byRating:0,bySearch:""}),m=Object(y.a)(u,2),s=m[0],E=m[1];return r.a.createElement(k.Provider,{value:{state:i,dispatch:o,filterState:s,filterDispatch:E}},t)},O=a(29),T=function(){var e=_(),t=e.state.cart,a=e.dispatch,n=e.filterDispatch;return r.a.createElement(i.a,{bg:"dark",variant:"dark",style:{height:"80px"}},r.a.createElement(o.a,null,r.a.createElement(i.a.Brand,null,r.a.createElement(d.b,{to:"/cart-it",className:"brand"},"Cart it")),r.a.createElement(i.a.Text,{className:"search"},r.a.createElement(u.a.Control,{placeholder:"search a product ... ",className:"m-auto search-box",onChange:function(e){return n({type:"FILTER_BY_SEARCH",payload:e.target.value})}})),r.a.createElement(m.a,null,r.a.createElement(s.a,{alignright:"true"},r.a.createElement(s.a.Toggle,{variant:"success"},r.a.createElement(p.a,{color:"white",fontSize:"30px"}),t.length),r.a.createElement(s.a.Menu,{style:{minWidth:"370px",left:"-288px"}},t.length>0?r.a.createElement(r.a.Fragment,null,t.map(function(e){return r.a.createElement("span",{className:"cartItem",key:e.id},r.a.createElement("img",{className:"cartItemImg",src:e.image,alt:e.name}),r.a.createElement("div",{className:"cartItemDetail"},r.a.createElement("span",null,e.name),r.a.createElement("span",null,"$ ",e.price.split(".")[0])),r.a.createElement(E.a,{type:"button",variant:"light",onClick:function(){return a({type:"REMOVE_FROM_CARD",payload:e})}},r.a.createElement(O.a,{fontSize:"20px",style:{cursor:"pointer"}})))}),r.a.createElement(d.b,{to:"/cart-page"},r.a.createElement(E.a,{style:{width:"95%",margin:"0 10px"}},"Go to Cart"))):r.a.createElement("span",{style:{padding:10}},"Cart is Empty"))))))},S=a(7),I=function(e){var t=e.rating,a=e.onClick,n=e.style;return r.a.createElement(r.a.Fragment,null,Object(f.a)(Array(5)).map(function(e,c){return r.a.createElement("span",{key:c,onClick:function(){return a(c)},style:n},t>c?r.a.createElement(O.b,{fontSize:"15px"}):r.a.createElement(O.c,{fontSize:"15px"}))}))},D=function(){var e=_(),t=e.filterState,a=t.byStock,n=t.byRating,c=t.byDelivery,l=t.sort,i=e.filterDispatch;return r.a.createElement("article",{className:"filters"},r.a.createElement("h2",{className:"title"},"Filter Products"),r.a.createElement("span",null,r.a.createElement(u.a.Check,{inline:!0,label:"Ascending",name:"group1",type:"radio",id:"inline-1",onChange:function(){return i({type:"FILTER_BY_PRICE",payload:"lowToHigh"})},checked:"lowToHigh"===l})),r.a.createElement("span",null,r.a.createElement(u.a.Check,{inline:!0,label:"Descending",name:"group1",type:"radio",id:"inline-2",onChange:function(){return i({type:"FILTER_BY_PRICE",payload:"highToLow"})},checked:"highToLow"===l})),r.a.createElement("span",null,r.a.createElement(u.a.Check,{inline:!0,label:"Include Out of Stock",name:"group1",type:"checkbox",id:"inline-3",onChange:function(){return i({type:"FILTER_BY_STOCK"})},checked:!!a})),r.a.createElement("span",null,r.a.createElement(u.a.Check,{inline:!0,label:"Fast Delivery Only",name:"group1",type:"checkbox",id:"inline-4",onChange:function(){return i({type:"FILTER_BY_DELIVERY"})},checked:!!c})),r.a.createElement("span",null,r.a.createElement("label",{style:{paddingRight:10}},"Rating: "),r.a.createElement(I,{rating:n,style:{cursor:"pointer"},onClick:function(e){return i({type:"FILTER_BY_RATING",payload:e+1})}})),r.a.createElement(E.a,{variant:"light",onClick:function(){return i({type:"CLEAR_FILTER"})}},"Clear Filter"))},A=a(1590),F=function(e){var t=e.product,a=_(),n=a.state.cart,c=a.dispatch;return r.a.createElement("article",{className:"products"},r.a.createElement(A.a,null,r.a.createElement(A.a.Img,{variant:"top",src:t.image,alt:t.name}),r.a.createElement(A.a.Body,null,r.a.createElement(A.a.Title,null,t.name),r.a.createElement(A.a.Subtitle,null,r.a.createElement("span",null,"$ ",t.price.split(".")[0]),t.fastDelivery?r.a.createElement("div",null,"Fast Delivery"):r.a.createElement("div",null,"4 days Delivery"),r.a.createElement(I,{rating:t.ratings})),n.some(function(e){return e.id===t.id})?r.a.createElement(E.a,{variant:"danger",onClick:function(){return c({type:"REMOVE_FROM_CARD",payload:t})}},"Remove from Cart"):r.a.createElement(E.a,{disabled:!t.inStock,onClick:function(){return c({type:"ADD_TO_CARD",payload:t})}},t.inStock?"Add to Cart":"out of stock"))))},N=function(){var e=_(),t=e.state.products,a=e.filterState,n=a.sort,c=a.bySearch,l=a.byRating,i=a.byDelivery,o=a.byStock;return r.a.createElement("section",{className:"home"},r.a.createElement(D,null),r.a.createElement("article",{className:"productContainer"},function(){var e=t;return n&&(e=e.sort(function(e,t){return"lowToHigh"===n?e.price-t.price:t.price-e.price})),o||(e=e.filter(function(e){return e.inStock})),i&&(e=e.filter(function(e){return e.fastDelivery})),l&&(e=e.filter(function(e){return e.ratings>=l})),c&&(e=e.filter(function(e){return e.name.toLowerCase().includes(c)})),e}().map(function(e){return r.a.createElement(F,{product:e,key:e.id})})))},j=a(1591),L=a(1584),x=a(1523),w=a(1585),Y=function(){var e=_(),t=e.state.cart,a=e.dispatch,c=Object(n.useState)(),l=Object(y.a)(c,2),i=l[0],o=l[1];return Object(n.useEffect)(function(){o(t.reduce(function(e,t){return e+Number(t.price)*t.quantity},0))},[t]),r.a.createElement("section",{className:"home"},r.a.createElement("article",{className:"productContainer"},r.a.createElement(j.a,null,t.map(function(e){return r.a.createElement(j.a.Item,{key:e.id},r.a.createElement(L.a,null,r.a.createElement(x.a,{md:2},r.a.createElement(w.a,{src:e.image,alt:e.name,fluid:!0,rounded:!0})),r.a.createElement(x.a,{md:2},r.a.createElement("span",null,e.name)),r.a.createElement(x.a,{md:2},r.a.createElement("span",null,"$ ",e.price)),r.a.createElement(x.a,{md:2},r.a.createElement(I,{rating:e.ratings})),r.a.createElement(x.a,{md:2},r.a.createElement(u.a.Control,{as:"select",value:e.quantity,onChange:function(t){return a({type:"CHANGE_CART_QUANTITY",payload:{id:e.id,quantity:t.target.value}})}},Object(f.a)(Array(e.inStock).keys()).map(function(e){return r.a.createElement("option",{key:e+1},e+1)}))),r.a.createElement(x.a,{md:2},r.a.createElement(E.a,{type:"button",variant:"light",onClick:function(){return a({type:"REMOVE_FROM_CARD",payload:e})}},r.a.createElement(O.a,{style:{fontSize:"20px"}})))))}))),r.a.createElement("article",{className:"filters summary"},r.a.createElement("h2",{className:"title"},"Subtotal: (",t.length,") Items"),r.a.createElement("span",{style:{fontWeight:"700",fontSize:"20px"}},"Total $ ",i),r.a.createElement(E.a,{type:"button",disabled:0===t.length},"proceed to Checkout")))};var B=function(){return r.a.createElement(d.a,null,r.a.createElement(T,null),r.a.createElement(S.c,null,r.a.createElement(S.a,{path:"/cart-it",exact:!0,element:r.a.createElement(N,null)}),r.a.createElement(S.a,{path:"/cart-page",exact:!0,element:r.a.createElement(Y,null)})))};l.a.createRoot(document.getElementById("root")).render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null,r.a.createElement(B,null))))},69:function(e,t,a){e.exports=a(1577)},77:function(e,t,a){}},[[69,2,1]]]);
//# sourceMappingURL=main.2cd537b6.chunk.js.map