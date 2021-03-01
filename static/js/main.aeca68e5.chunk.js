(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{12:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3CvRl",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__2bkPr"}},13:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2AxMb",Modal:"Modal_Modal__2WBTT"}},23:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__DncjJ"}},24:function(e,t,a){e.exports={Button:"Button_Button__3R1xi"}},26:function(e,t,a){e.exports={App:"App_App__16ZpL"}},31:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),c=a.n(o),s=(a(31),a(14)),l=a(4),i=a(5),u=a(7),m=a(6),h=a(8),g=a.n(h),d=a(1),p=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.handleChangeQuery=function(t){var a=t.currentTarget;e.setState({query:a.value})},e.handelSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.query),e.setState({query:""})},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.query;return Object(d.jsx)("header",{className:g.a.Searchbar,children:Object(d.jsxs)("form",{className:g.a.SearchForm,onSubmit:this.handelSubmit,children:[Object(d.jsx)("button",{type:"submit",className:g.a.SearchFormButton,children:Object(d.jsx)("span",{className:g.a.SearchFormButtonLabel,children:"Search"})}),Object(d.jsx)("input",{className:g.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",name:"query",value:e,onChange:this.handleChangeQuery})]})})}}]),a}(n.Component),f=a(11),b=a.n(f);b.a.defaults.baseURL="https://pixabay.com/api";var j=function(e){var t=e.search,a=void 0===t?"":t,n=e.page,r=void 0===n?1:n;return b.a.get("/?q=".concat(a,"&page=").concat(r,"&key=").concat("20188573-7bb6e1f85b49a99e39f48e5e2","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))},y=a(12),I=a.n(y),S=function(e){var t=e.webformatURL,a=e.largeImageURL,n=e.tags,r=void 0===n?"":n,o=e.onSetImgInfo,c=e.openModal;return console.log(t),Object(d.jsx)("li",{className:I.a.ImageGalleryItem,children:Object(d.jsx)("img",{src:t,alt:r,className:I.a.ImageGalleryItemImage,onClick:function(){o({largeImageURL:a,tags:r}),c()}})})},v=a(23),O=a.n(v),_=function(e){var t=e.images,a=e.onSetImgInfo,n=e.openModal;return Object(d.jsx)("ul",{className:O.a.ImageGallery,children:t.map((function(e){var t=e.webformatURL,r=e.largeImageURL,o=e.tags,c=e.id;return Object(d.jsx)(S,{webformatURL:t,largeImageURL:r,tags:o,onSetImgInfo:a,openModal:n},c)}))})},x=a(24),w=a.n(x),L=function(e){var t=e.onLoadMore;return Object(d.jsx)("button",{className:w.a.Button,type:"button",onClick:function(){return t()},children:"Load more"})},M=a(25),k=a.n(M),B=a(13),C=a.n(B),U=document.querySelector("#modal-root"),F=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(d.jsx)("div",{className:C.a.Overlay,onClick:this.handleBackdropClick,children:Object(d.jsx)("div",{className:C.a.Modal,children:this.props.children})}),U)}}]),a}(n.Component),R=a(26),G=a.n(R),N=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={search:"",isLoading:!1,page:1,images:[],showModal:!1,largeImageUrl:null,imgTags:null,error:null},e.handleSubmit=function(t){e.state.search!==t&&e.setState({search:t,page:1,images:[]})},e.fetchImages=function(){var t=e.state,a=t.search,n=t.page;e.setState({isLoading:!0}),j({search:a,page:n}).then((function(t){t.length<1?e.setState({error:!0}):(e.setState((function(e){return{images:[].concat(Object(s.a)(e.images),Object(s.a)(t)),page:e.page+1,error:!1}})),1!==n&&e.scrollToBottom())})).catch((function(t){return e.setState({error:t})})).finally((function(){return e.setState({isLoading:!1})}))},e.scrollToBottom=function(){window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e.setImgInfo=function(t){var a=t.largeImageURL,n=t.tags;e.setState({largeImageURL:a,tags:n})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e,t){t.search!==this.state.search&&this.fetchImages()}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.showModal,n=e.largeImageURL,r=e.imgTags,o=e.isLoading;return Object(d.jsxs)("div",{className:G.a.App,children:[Object(d.jsx)(p,{onSubmit:this.handleSubmit}),o&&Object(d.jsx)(k.a,{type:"ThreeDots",color:"#006eff",height:100,width:100}),Object(d.jsx)(_,{images:t,openModal:this.toggleModal,onSetImgInfo:this.setImgInfo}),t.length>0&&!o&&Object(d.jsx)(L,{onLoadMore:this.fetchImages}),a&&Object(d.jsx)(F,{onClose:this.toggleModal,children:Object(d.jsx)("img",{src:n,alt:r})})]})}}]),a}(n.Component);c.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(N,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__DjWH3",SearchForm:"Searchbar_SearchForm__1ac2l",SearchFormButton:"Searchbar_SearchFormButton__21S85",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__8f9cn",SearchFormInput:"Searchbar_SearchFormInput__VhsfU"}}},[[71,1,2]]]);
//# sourceMappingURL=main.aeca68e5.chunk.js.map