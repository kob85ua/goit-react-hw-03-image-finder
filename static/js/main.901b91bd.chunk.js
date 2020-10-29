(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{31:function(n,e,t){n.exports=t(78)},36:function(n,e,t){},37:function(n,e,t){},78:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(24),i=t.n(o),c=(t(36),t(12)),l=t(5),u=t(6),p=t(8),s=t(7),d=(t(37),t(2)),h=t(3);function f(){var n=Object(d.a)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 4px;\n  padding-right: 4px;\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]);return f=function(){return n},n}function m(){var n=Object(d.a)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  white-space: nowrap;\n  clip-path: inset(50%);\n  border: 0;\n"]);return m=function(){return n},n}function g(){var n=Object(d.a)(['\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-image: url("https://image.flaticon.com/icons/svg/149/149852.svg");\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n  &:hover {\n    opacity: 1;\n  }\n']);return g=function(){return n},n}function b(){var n=Object(d.a)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]);return b=function(){return n},n}function x(){var n=Object(d.a)(["\n  top: 0;\n  left: 0;\n  position: sticky;\n  z-index: 1100;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 64px;\n  padding-right: 24px;\n  padding-left: 24px;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  color: #fff;\n  background-color: #3f51b5;\n  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),\n    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);\n"]);return x=function(){return n},n}var v=h.a.header(x()),w=h.a.form(b()),y=h.a.button(g()),j=h.a.span(m()),O=h.a.input(f()),k=function(n){Object(p.a)(t,n);var e=Object(s.a)(t);function t(){var n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=e.call.apply(e,[this].concat(r))).state={inputValue:""},n.handleChange=function(e){n.setState({inputValue:e.target.value})},n.handleSubmit=function(e){e.preventDefault(),n.props.onSubmit(n.state.inputValue),n.setState({inputValue:""})},n}return Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(v,null,r.a.createElement(w,{onSubmit:this.handleSubmit},r.a.createElement(y,{type:"submit"},r.a.createElement(j,null,"Search")),r.a.createElement(O,{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:this.state.inputValue,onChange:this.handleChange})))}}]),t}(a.Component);function E(){var n=Object(d.a)(["\n  width: 100%;\n  height: 260px;\n  object-fit: cover;\n  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  &:hover {\n    transform: scale(1.03);\n    cursor: zoom-in;\n  }\n"]);return E=function(){return n},n}function S(){var n=Object(d.a)(["\n  border-radius: 2px;\n  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),\n    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);\n"]);return S=function(){return n},n}function M(){var n=Object(d.a)(["\n  display: grid;\n  max-width: calc(100vw - 48px);\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  grid-gap: 16px;\n  margin-top: 0;\n  margin-bottom: 0;\n  padding: 0;\n  list-style: none;\n  margin-left: auto;\n  margin-right: auto;\n"]);return M=function(){return n},n}var L=h.a.ul(M()),U=h.a.li(S()),C=h.a.img(E()),I=function(n){var e=n.id,t=n.webformatURL,a=n.tags,o=n.onModalOpen;return r.a.createElement(U,{key:e},r.a.createElement(C,{src:t,alt:a,onClick:o}))},z=function(n){var e=n.images,t=n.onModalOpen;return r.a.createElement(L,null,e.map((function(n){var e=n.id,a=n.webformatURL,o=n.tags;return r.a.createElement(I,{id:e,webformatURL:a,tags:o,onModalOpen:t})})))};function D(){var n=Object(d.a)(["\n  padding: 8px 16px;\n  border-radius: 2px;\n  background-color: #3f51b5;\n  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  text-align: center;\n  display: inline-block;\n  color: #fff;\n  border: 0;\n  text-decoration: none;\n  cursor: pointer;\n  font-family: inherit;\n  font-size: 18px;\n  line-height: 24px;\n  font-style: normal;\n  font-weight: 500;\n  min-width: 180px;\n  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),\n    0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);\n  width: 20%;\n  margin-left: auto;\n  margin-right: auto;\n  &:hover,\n  :focus {\n    background-color: #303f9f;\n  }\n"]);return D=function(){return n},n}var Q=h.a.button(D()),A=function(n){var e=n.onLoadMore;return r.a.createElement(Q,{onClick:e},"Load more")},W=t(28),R=t.n(W);t(60);function V(){var n=Object(d.a)(["\n  width: 20%;\n\n  align-self: center;\n  justify-self: center;\n"]);return V=function(){return n},n}var F=h.a.div(V()),T=function(n){Object(p.a)(t,n);var e=Object(s.a)(t);function t(){return Object(l.a)(this,t),e.apply(this,arguments)}return Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(F,null,r.a.createElement(R.a,{type:"ThreeDots",color:"#3f51b5",height:150,width:150,timeout:3e3}))}}]),t}(a.Component);function B(){var n=Object(d.a)(["\n  max-width: calc(100vw - 48px);\n  max-height: calc(100vh - 48px);\n"]);return B=function(){return n},n}function K(){var n=Object(d.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n"]);return K=function(){return n},n}var J=h.a.div(K()),_=h.a.div(B()),q=function(n){Object(p.a)(t,n);var e=Object(s.a)(t);function t(){var n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=e.call.apply(e,[this].concat(r))).handleKeyDown=function(e){"Escape"===e.code&&n.props.onClose()},n}return Object(u.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return r.a.createElement(J,null,r.a.createElement(_,null,this.props.children))}}]),t}(a.Component),H=t(11),N=t.n(H),G=t(29),P=t(30),X=t.n(P),Y={fetchImagesWithQuery:function(){var n=Object(G.a)(N.a.mark((function n(e,t,a){var r;return N.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,X.a.get("https://pixabay.com/api/?q=".concat(e,"&page=").concat(t,"&key=").concat(a,"&image_type=photo&orientation=horizontal&per_page=12"));case 2:return r=n.sent,n.abrupt("return",r.data.hits);case 4:case"end":return n.stop()}}),n)})));return function(e,t,a){return n.apply(this,arguments)}}()},Z=function(n){Object(p.a)(t,n);var e=Object(s.a)(t);function t(){var n;Object(l.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=e.call.apply(e,[this].concat(r))).state={images:[],isLoading:!1,error:null,searchQuery:"",page:1,showModal:!1,modalImgUrl:""},n.scrollToWindow=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},n.urlForModal=function(){return n.state.modalImgUrl},n.openModalAndSetUrl=function(e){console.log(e),void 0!==e&&n.setState((function(n){return{modalImgUrl:n.images.find((function(n){return n.webformatURL===e.src})).largeImageURL,showModal:!0}}))},n.closeModal=function(){n.setState({showModal:!1,modalImgUrl:""})},n.fetchImages=function(){var e=n.state,t=e.searchQuery,a=e.page;n.setState({isLoading:!0}),Y.fetchImagesWithQuery(t,a,"17820819-7325a21fc26dbd04468dfd17d").then((function(e){return n.setState((function(n){return{images:[].concat(Object(c.a)(n.images),Object(c.a)(e)),page:n.page+1}}))})).catch((function(e){return n.setState({error:e})})).finally((function(){return n.setState({isLoading:!1})}))},n.handleSearchBarSubmit=function(e){n.setState({searchQuery:e,page:1,images:[]})},n}return Object(u.a)(t,[{key:"componentDidUpdate",value:function(n,e){e.searchQuery!==this.state.searchQuery&&this.fetchImages(),e.page!==this.state.page&&2!==this.state.page&&this.scrollToWindow(),e.modalImgUrl!==this.state.modalImgUrl&&this.urlForModal()}},{key:"render",value:function(){var n=this,e=this.state,t=e.isLoading,a=e.images,o=e.error,i=e.showModal,c=this.urlForModal();return r.a.createElement("div",{className:"App"},r.a.createElement(k,{onSubmit:this.handleSearchBarSubmit}," "),a.length>0&&r.a.createElement(z,{images:a,onModalOpen:function(e){return n.openModalAndSetUrl(e.target)}}),i&&r.a.createElement(q,{onClose:this.closeModal,onClick:this.closeModal},r.a.createElement("img",{src:c,alt:"Modal"})),a.length>0&&!t&&r.a.createElement(A,{onLoadMore:this.fetchImages},"Load more"),o&&r.a.createElement("p",null,"Whoops, something went wrong: ",o.message),t&&r.a.createElement(T,null))}}]),t}(a.Component);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Z,null)),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.901b91bd.chunk.js.map