webpackJsonp([1,0],[function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var o=n(3),i=a(o),s=n(5),r=a(s),l=n(41),c=(a(l),n(40)),u=a(c),d=n(28),m=(a(d),n(27)),_=(a(m),n(47)),p=a(_),f=n(39),v=(a(f),n(21)),E=a(v),h=n(48),b=a(h),g=n(23),O=a(g);window.$=r.default,i.default.use(u.default),i.default.use(p.default),new i.default({el:"#app",store:O.default,template:"<app/>",framework7:{root:"#app",material:!0,routes:E.default,pushState:!0},components:{app:b.default}})},,,,function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.LOAD_GOOGLE_SDK="LOAD_GOOGLE_SDK",t.LOAD_GOOGLE_SDK_SUCCESS="LOAD_GOOGLE_SDK_SUCCESS",t.LOAD_GOOGLE_SDK_FAILURE="LOAD_GOOGLE_SDK_FAILURE",t.GOOGLE_LOGIN="GOOGLE_LOGIN",t.GOOGLE_LOGIN_SUCCESS="GOOGLE_LOGIN_SUCCESS",t.GOOGLE_LOGIN_FAILURE="GOOGLE_LOGIN_FAILURE",t.LOAD_GOOGLE_PROFILE="LOAD_GOOGLE_PROFILE",t.LOAD_GOOGLE_PROFILE_SUCCESS="LOAD_GOOGLE_PROFILE_SUCCESS",t.LOAD_GOOGLE_PROFILE_FAILURE="LOAD_GOOGLE_PROFILE_FAILURE",t.LOAD_GOOGLE_FRIENDS="LOAD_GOOGLE_FRIENDS",t.LOAD_GOOGLE_FRIENDS_SUCCESS="LOAD_GOOGLE_FRIENDS_SUCCESS",t.LOAD_GOOGLE_FRIENDS_FAILURE="LOAD_GOOGLE_FRIENDS_FAILURE",t.LOAD_GOOGLE_CONTACT_PHOTO="LOAD_GOOGLE_CONTACT_PHOTO",t.LOAD_GOOGLE_CONTACT_PHOTO_SUCCESS="LOAD_GOOGLE_CONTACT_PHOTO_SUCCESS",t.LOAD_GOOGLE_CONTACT_PHOTO_FAILURE="LOAD_GOOGLE_CONTACT_PHOTO_FAILURE",t.LOAD_TREE_DATA="LOAD_TREE_DATA",t.LOAD_TREE_DATA_SUCCESS="LOAD_TREE_DATA_SUCCESS",t.LOAD_TREE_DATA_FAILURE="LOAD_TREE_DATA_FAILURE",t.LOAD_TREE_ROOT_PROFILE="LOAD_TREE_ROOT_PROFILE",t.SAVE_TREE_DATA_ON_CHANGE="SAVE_TREE_DATA_ON_CHANGE",t.DELETE_TREE="DELETE_TREE",t.SET_TREE="SET_TREE",t.SET_SELECTED_MEMBER="SET_SELECTED_MEMBER",t.SET_SELECTED_NEW_MEMBER="SET_SELECTED_NEW_MEMBER",t.EXTEND_SELECTED_NEW_MEMBER="EXTEND_SELECTED_NEW_MEMBER",t.SET_SELECTED_MEMBERS_PARENT="SET_SELECTED_MEMBERS_PARENT",t.ADD_CHILDREN="ADD_CHILDREN",t.ADD_SPOUSE="ADD_SPOUSE",t.ADD_BROTHER="ADD_BROTHER",t.ADD_PARENT="ADD_PARENT",t.DELETE_MEMBER="DELETE_MEMBER",t.UPDATE_MEMBER_PROPERTY="UPDATE_MEMBER_PROPERTY",t.UPDATE_EXISTING_MEMBER="UPDATE_EXISTING_MEMBER"},,function(e,t,n){e.exports=n.p+"static/img/man.56996fc.png"},function(e,t,n){e.exports=n.p+"static/img/woman.277374e.png"},function(e,t,n){n(32);var a=n(1)(n(17),n(62),null,null);e.exports=a.exports},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(8),i=a(o),s=n(55),r=a(s),l=n(56),c=a(l),u=n(57),d=a(u);t.default={components:{home:i.default,popoverMember:r.default,popupAddMember:c.default,popupMemberDetails:d.default}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={token:null,endpoint:"https://www.google.com/m8/feeds",scope:"https://www.google.com/m8/feeds https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/plus.me",scriptUrl:"//apis.google.com/js/client.js",client_id:"503829874595-v48nmlefgvstk57d5h9p64upnmgor7sc.apps.googleusercontent.com",init:function(e,t){var n=document.createElement("script");n.type="text/javascript",n.onload=function(){setTimeout(function(){e()},1e3)},document.getElementsByTagName("head")[0].appendChild(n),n.src="//apis.google.com/js/client.js"},login:function(e,t){var n=this,a={client_id:this.client_id,scope:this.scope};gapi.auth.authorize(a,function(){n.token=gapi.auth.getToken(),e(n.token)})},getContacts:function(e,t){var n=this,a=this.endpoint+"/contacts/default/full?alt=json&max-results=10000000";$.ajax({url:a,dataType:"jsonp",data:n.token}).done(e).fail(t)},getProfile:function(e,t){var n=this,a="https://www.googleapis.com/plus/v1/people/me";$.ajax({url:a,dataType:"jsonp",data:{access_token:n.token.access_token}}).done(e).fail(t)}}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(50),i=a(o),s=n(54),r=a(s);t.default={components:{navbar:i.default,tree:r.default}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(2);t.default={data:function(){return{treeName:this.$store.state.tree.selectedTreeName}},computed:(0,a.mapGetters)({profile:"getProfile",trees:"getTrees"}),watch:{treeName:function(){this.$store.dispatch("setTree",this.treeName)}},methods:{logout:function(){window.location.reload()}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"member",props:{member:Object,model:Object},data:function(){return{open:!0}},computed:{isFolder:function(){return this.model.children&&this.model.children.length},token:function(){return this.$store.state.google.token},age:function(){var e=this.member.dob,t=new Date(e),n=new Date,a=n-t;return Math.floor(a/31536e6)}},watch:{open:function(){this.$emit("open-action",this.open)},member:{handler:function(){console.log("Member details changed")},deep:!0}},methods:{openMemberPopover:function(e){this.$store.dispatch("setSelectedMembersParent",this.$parent.$parent.model||null),this.$store.dispatch("setSelectedMember",{member:e,model:this.model})},toggle:function(){this.isFolder&&(this.open=!this.open)},deleteMember:function(){this.$store.dispatch("setSelectedMembersParent",this.$parent.$parent.model||null),this.$store.dispatch("setSelectedMember",{member:this.member,model:this.model});var e=this.$store.state.member.selectedParent;e||this.model.partners.length>1?this.$store.dispatch("deleteMember",this.member):this.$store.dispatch("deleteTree",this.member)},editMember:function(){this.$store.dispatch("setSelectedMembersParent",this.$parent.$parent.model||null),this.$store.dispatch("setSelectedMember",{member:this.member,model:this.model}),this.$store.dispatch("setSelectedNewMember",this.member)},addMember:function(){this.$store.dispatch("setSelectedMembersParent",this.$parent.$parent.model||null),this.$store.dispatch("setSelectedMember",{member:this.member,model:this.model})}}}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(51),i=a(o);t.default={name:"members",props:{model:Object},components:{member:i.default},data:function(){return{open:!0}},computed:{isFolder:function(){return this.model.children&&this.model.children.length}},methods:{onOpenAction:function(e){this.open=e},toggle:function(){this.isFolder&&(this.open=!this.open)}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(2);t.default={computed:(0,a.mapGetters)({treeData:"getTreeData"})}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(53),i=a(o),s=n(52),r=a(s),l=n(2);t.default={components:{toolbar:i.default,members:r.default},data:function(){return{zoom:1,view:"large"}},computed:(0,l.mapState)({profile:function(e){return e.google.profile},treeData:function(e){return e.tree.treeData},trees:function(e){return e.tree.trees}}),watch:{trees:{handler:function(){var e=this;e.$store.dispatch("saveTreeDataInStorage",e.profile)},deep:!0}},mounted:function(){this.onResetClick(),this.$store.dispatch("loadTreeData",this.profile)},methods:{onResetClick:function(){var e=$(this.$el);e.scrollLeft(2500-e.width()/2),e.scrollTop(0)},onZoomInClick:function(){this.zoom>=1.5||(this.zoom=this.zoom+.2)},onZoomOutClick:function(){this.zoom<.5||(this.zoom=this.zoom-.2)},toggleView:function(){this.view="large"==this.view?"small":"large"},add:function(){var e=prompt("Give a name to your tree");if(e){var t=confirm("Are you in the tree ?");t&&this.$store.dispatch("loadTreeRootProfile",{profile:this.profile,treeName:e})}}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(2);t.default={computed:(0,a.mapGetters)({googleStatus:"getGoogleStatus",contacts:"getContacts",profile:"getProfile"}),watch:{googleStatus:function(){"login:connected"==this.googleStatus&&(this.loadProfile(),this.loadContacts())},contacts:function(){this.contacts.length>0&&this.profile&&this.openDashboard()},profile:function(){this.contacts.length>0&&this.profile&&this.openDashboard()}},mounted:function(){this.$store.dispatch("loadSDK")},methods:{loginGoogle:function(){this.$store.dispatch("login")},loadProfile:function(){this.$store.dispatch("loadProfile")},loadContacts:function(){this.$store.dispatch("loadContacts")},openDashboard:function(){this.$f7.views.main.router.loadPage("dashboard")}}}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(22);a(o),n(2);t.default={data:function(){return{}},computed:{member:function(){return this.$store.state.member.selectedMember},token:function(){return this.$store.state.google.token}},methods:{deleteMember:function(){this.$store.dispatch("deleteMember",this.member)},editMember:function(){this.$store.dispatch("setSelectedNewMember",this.member)}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n(2);t.default={data:function(){return{query:""}},computed:{member:function(){return this.$store.state.member.selectedMember},filteredContacts:function(){var e=this;if(this.$store.state.google.contacts)return this.$store.state.google.contacts.filter(function(t){return t.name.toLowerCase().match(e.query.toLowerCase())})}},methods:{addMember:function(e){this.$store.dispatch("addChild",e)},selectContact:function(e){this.$f7.closeModal(),this.$f7.popup(".popup-member-details"),this.$store.dispatch("setSelectedNewMember",e)},addMemberManually:function(){this.$store.dispatch("setSelectedNewMember",{})},onPopupOpen:function(){var e=this;this.query="",setTimeout(function(){e.$refs.contactsScroller.scrollTop=0},1e3)}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n(2);t.default={data:function(){return{relation:null}},computed:(0,a.mapGetters)({selectedNewMember:"getSelectedNewMember",selectedMember:"getSelectedMember"}),methods:{updateProperty:function(e,t){this.$store.dispatch("updateMemberProperty",{prop:e,value:t})},addRelative:function(e){if(e.preventDefault(),this.$store.dispatch("extendSelectedNewMember"),this.selectedNewMember.id)this.updateMember();else switch(this.relation){case"children":this.$store.dispatch("addChild",this.selectedNewMember);break;case"spouse":this.$store.dispatch("addSpouse",this.selectedNewMember);break;case"brother":this.$store.dispatch("addBrother",this.selectedNewMember);break;case"parent":this.$store.dispatch("addParent",this.selectedNewMember)}this.$f7.closeModal()},updateMember:function(){this.$store.dispatch("updateSelectedMember",this.selectedNewMember)},openAddMemberPopup:function(){this.$f7.closeModal(),this.$f7.popup(".popup-add-member")}}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=[{path:"/home/",component:n(8)},{path:"/dashboard/",component:n(49)}],window.location.hash="!/#home"},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(5),i=(a(o),{}),s=i.hasOwnProperty;t.default={subscribe:function(e,t){s.call(i,e)||(i[e]=[]);var n=i[e].push(t)-1;return{remove:function(){delete i[e][n]}}},publish:function(e,t){s.call(i,e)&&i[e].forEach(function(e){e(void 0!=t?t:{})})}}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(3),i=a(o),s=n(2),r=a(s),l=n(26),c=a(l),u=n(25),d=a(u),m=n(24),_=a(m);i.default.use(r.default);var p=!1;t.default=new r.default.Store({modules:{tree:c.default,member:d.default,google:_.default},strict:p})},function(e,t,n){"use strict";function a(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0});var s,r=n(10),l=o(r),c=n(4),u=a(c),d={googleStatus:"",contacts:[],profile:null,token:null},m={getContacts:function(e){return e.contacts},getGoogleStatus:function(e){return e.googleStatus},getProfile:function(e){return e.profile},getAccessToken:function(e){return e.token}},_={loadSDK:function(e){var t=e.commit;e.state;t(u.LOAD_GOOGLE_SDK),l.default.init(function(){return t(u.LOAD_GOOGLE_SDK_SUCCESS)},function(){return t(u.LOAD_GOOGLE_SDK_FAILURE)})},login:function(e){var t=e.commit;e.state;t(u.GOOGLE_LOGIN),l.default.login(function(e){return t(u.GOOGLE_LOGIN_SUCCESS,e)},function(e){return t(u.GOOGLE_LOGIN_FAILURE,e)})},loadContacts:function(e){var t=e.commit;e.state;t(u.LOAD_GOOGLE_FRIENDS),l.default.getContacts(function(e){return t(u.LOAD_GOOGLE_FRIENDS_SUCCESS,e)},function(){return t(u.LOAD_GOOGLE_FRIENDS_FAILURE)})},loadContactPhoto:function(e,t){var n=e.commit;e.state;n(u.LOAD_GOOGLE_CONTACT_PHOTO),l.default.getContactPhoto(t,function(){return n(u.LOAD_GOOGLE_CONTACT_PHOTO_SUCCESS)},function(){return n(u.LOAD_GOOGLE_CONTACT_PHOTO_FAILURE)})},loadProfile:function(e){var t=e.commit;e.state;t(u.LOAD_GOOGLE_PROFILE),l.default.getProfile(function(e){return t(u.LOAD_GOOGLE_PROFILE_SUCCESS,e)},function(){return t(u.LOAD_GOOGLE_PROFILE_FAILURE)})}},p=(s={},i(s,u.LOAD_GOOGLE_SDK,function(e){e.googleStatus="sdk:loading"}),i(s,u.LOAD_GOOGLE_SDK_SUCCESS,function(e){e.googleStatus="sdk:loaded"}),i(s,u.LOAD_GOOGLE_SDK_FAILURE,function(e){e.googleStatus="sdk:failed"}),i(s,u.GOOGLE_LOGIN,function(e){e.googleStatus="login:loading"}),i(s,u.GOOGLE_LOGIN_SUCCESS,function(e,t){e.token=t.access_token,e.googleStatus="login:"+(t.access_token?"connected":"failed")}),i(s,u.GOOGLE_LOGIN_FAILURE,function(e){e.googleStatus="login:failure"}),i(s,u.LOAD_GOOGLE_FRIENDS,function(e){e.contacts=[]}),i(s,u.LOAD_GOOGLE_FRIENDS_SUCCESS,function(e,t){var n=[];t.feed.entry.forEach(function(e){var t=null;e.link.forEach(function(e){"image/*"==e.type&&(t=e.href)}),n.push({name:e.title?e.title.$t:"",email:e.gd$email?e.gd$email[0].address:"",phoneNumber:e.gd$phoneNumber?e.gd$phoneNumber[0].$t:"",image:t})}),e.contacts=n}),i(s,u.LOAD_GOOGLE_FRIENDS_FAILURE,function(){d.contacts=[]}),i(s,u.LOAD_GOOGLE_PROFILE,function(e){e.profile=null}),i(s,u.LOAD_GOOGLE_PROFILE_SUCCESS,function(e,t){e.profile={name:t.displayName?t.displayName:"",email:t.emails[0].value?t.emails[0].value:"",gender:"",image:t.image.url?t.image.url:"",phoneNumber:"",dob:"",spouseId:"",googleId:t.id,id:t.id,root:!0}}),i(s,u.LOAD_GOOGLE_PROFILE_FAILURE,function(){d.profile=null}),i(s,u.LOAD_GOOGLE_CONTACT_PHOTO,function(e){}),i(s,u.LOAD_GOOGLE_CONTACT_PHOTO_SUCCESS,function(e){}),i(s,u.LOAD_GOOGLE_CONTACT_PHOTO_FAILURE,function(){}),s);t.default={state:d,getters:m,actions:_,mutations:p}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0});var s,r=n(4),l=o(r),c=n(3),u=a(c),d={selectedMember:null,selectedNode:null,selectedNewMember:null,selectedParent:null},m={getSelectedMember:function(e){return e.selectedMember},getSelectedNode:function(e){return e.selectedNode},getSelectedNewMember:function(e){return e.selectedNewMember},getSelectedParent:function(e){return e.selectedParent}},_={setSelectedMember:function(e,t){var n=e.commit;e.state;n(l.SET_SELECTED_MEMBER,t)},setSelectedMembersParent:function(e,t){var n=e.commit;e.state;n(l.SET_SELECTED_MEMBERS_PARENT,t)},setSelectedNewMember:function(e,t){var n=e.commit;e.state;n(l.SET_SELECTED_NEW_MEMBER,t)},extendSelectedNewMember:function(e){var t=e.commit;e.state;t(l.EXTEND_SELECTED_NEW_MEMBER)},addChild:function(e,t){var n=e.commit;e.state;n(l.ADD_CHILDREN,t)},addSpouse:function(e,t){var n=e.commit;e.state;n(l.ADD_SPOUSE,t)},addBrother:function(e,t){var n=e.commit;e.state;n(l.ADD_BROTHER,t)},deleteMember:function(e,t){var n=e.commit;e.state;n(l.DELETE_MEMBER,t)},updateMemberProperty:function(e,t){var n=e.commit;e.state;n(l.UPDATE_MEMBER_PROPERTY,t)},updateSelectedMember:function(e,t){var n=e.commit;e.state;n(l.UPDATE_EXISTING_MEMBER,t)}},p=(s={},i(s,l.SET_SELECTED_MEMBER,function(e,t){e.selectedMember=t.member,e.selectedNode=t.model}),i(s,l.SET_SELECTED_MEMBERS_PARENT,function(e,t){e.selectedParent=t}),i(s,l.SET_SELECTED_NEW_MEMBER,function(e,t){e.selectedNewMember=t}),i(s,l.EXTEND_SELECTED_NEW_MEMBER,function(e){u.default.set(e.selectedNewMember,"name",e.selectedNewMember.name||""),u.default.set(e.selectedNewMember,"email",e.selectedNewMember.email||""),u.default.set(e.selectedNewMember,"gender",e.selectedNewMember.gender||""),u.default.set(e.selectedNewMember,"image",e.selectedNewMember.image||""),u.default.set(e.selectedNewMember,"dob",e.selectedNewMember.dob||""),u.default.set(e.selectedNewMember,"phoneNumber",e.selectedNewMember.phoneNumber||""),u.default.set(e.selectedNewMember,"spouseId",e.selectedNewMember.spouseId||""),u.default.set(e.selectedNewMember,"googleId",e.selectedNewMember.googleId||""),u.default.set(e.selectedNewMember,"id",e.selectedNewMember.id||"")}),i(s,l.ADD_CHILDREN,function(e,t){var n={};n.partners=[],n.children=[],n.id=(new Date).getTime(),t.id=(new Date).getTime(),n.partners.push(t),e.selectedNode.children||u.default.set(e.selectedNode,"children",[]),e.selectedNode.children.push(n)}),i(s,l.ADD_SPOUSE,function(e,t){t.id=(new Date).getTime(),e.selectedNode.partners.push(t)}),i(s,l.ADD_BROTHER,function(e,t){var n={};n.partners=[],n.children=[],n.id=(new Date).getTime(),t.id=(new Date).getTime(),n.partners.push(t),e.selectedNode.children||u.default.set(e.selectedNode,"children",[]),e.selectedParent.children.push(n)}),i(s,l.UPDATE_MEMBER_PROPERTY,function(e,t){u.default.set(e.selectedNewMember,t.prop,t.value)}),i(s,l.UPDATE_EXISTING_MEMBER,function(e,t){u.default.set(e,"selectedMember",t)}),i(s,l.DELETE_MEMBER,function(e,t){e.selectedParent?e.selectedParent.children.forEach(function(n,a){n.id==e.selectedNode.id&&(n.partners.length>1?n.partners.forEach(function(e,a){e.id==t.id&&n.partners.splice(a,1)}):e.selectedParent.children.splice(a,1))}):e.selectedNode.partners.length>1&&e.selectedNode.partners.forEach(function(n,a){n.id==t.id&&e.selectedNode.partners.splice(a,1)})}),s);t.default={state:d,getters:m,actions:_,mutations:p}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}Object.defineProperty(t,"__esModule",{value:!0});var s,r=n(4),l=o(r),c=n(3),u=a(c),d={treeData:null,selectedTreeName:null,trees:null},m={getTreeData:function(e){return e.treeData},getSelectedTreeName:function(e){return e.selectedTreeName},getTrees:function(e){return e.trees}},_={loadTreeData:function(e,t){var n=e.commit;e.state;n(l.LOAD_TREE_DATA),firebase.database().ref("/treeData/"+t.googleId).once("value").then(function(e){if(e.val()){var a=e.val();n(l.LOAD_TREE_DATA_SUCCESS,a)}else n(l.LOAD_TREE_DATA_FAILURE,t)})},loadTreeRootProfile:function(e,t){var n=e.commit,a=(e.state,t.profile),o=t.treeName;n(l.LOAD_TREE_ROOT_PROFILE,{profile:a,treeName:o})},saveTreeDataInStorage:function(e,t){var n=e.commit;e.state;n(l.SAVE_TREE_DATA_ON_CHANGE,t)},addParent:function(e,t){var n=e.commit;e.state;n(l.ADD_PARENT,t)},deleteTree:function(e,t){var n=e.commit;e.state;n(l.DELETE_TREE,t)},setTree:function(e,t){var n=e.commit;e.state;n(l.SET_TREE,t)}},p=(s={},i(s,l.LOAD_TREE_DATA,function(e,t){e.treeData=null,e.trees=null}),i(s,l.LOAD_TREE_DATA_SUCCESS,function(e,t){e.trees=t;var n=Object.keys(t)[0];e.selectedTreeName||(e.selectedTreeName=n),t[n].children||(t[n].children=[]),e.treeData=t[n]}),i(s,l.LOAD_TREE_DATA_FAILURE,function(e,t){}),i(s,l.LOAD_TREE_ROOT_PROFILE,function(e,t){var n=t.profile,a=t.treeName;e.selectedTreeName=a,n.id=n.googleId||(new Date).getTime(),e.treeData={partners:[n],children:[],id:(new Date).getTime()},e.trees?u.default.set(e.trees,e.selectedTreeName,e.treeData):(u.default.set(e,"trees",{}),u.default.set(e.trees,e.selectedTreeName,e.treeData))}),i(s,l.SAVE_TREE_DATA_ON_CHANGE,function(e,t){e.trees&&t.id&&setTimeout(function(){firebase.database().ref("/treeData/"+t.id).set(e.trees)})}),i(s,l.ADD_PARENT,function(e,t){e.treeData={id:(new Date).getTime(),children:[e.treeData],partners:[]},t.id=(new Date).getTime(),e.treeData.partners.push(t)}),i(s,l.DELETE_TREE,function(e,t){e.treeData=null,firebase.database().ref("/treeData/"+t.id+"/"+e.selectedTreeName).set(null)}),i(s,l.SET_TREE,function(e,t){e.selectedTreeName=t,e.treeData=e.trees[t]}),s);t.default={state:d,getters:m,actions:_,mutations:p}},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},,,function(e,t,n){e.exports=n.p+"static/img/boy.8296ff1.png"},function(e,t,n){e.exports=n.p+"static/img/girl.3eb7b44.png"},function(e,t,n){e.exports=n.p+"static/img/old-man.ae75e99.png"},function(e,t,n){e.exports=n.p+"static/img/old-woman.19a14ef.png"},function(e,t,n){e.exports=n.p+"static/img/tree.95e8296.png"},,function(e,t,n){var a=n(1)(n(9),n(60),null,null);e.exports=a.exports},function(e,t,n){n(31);var a=n(1)(n(11),n(61),null,null);e.exports=a.exports},function(e,t,n){n(34);var a=n(1)(n(12),n(64),null,null);e.exports=a.exports},function(e,t,n){n(37);var a=n(1)(n(13),n(67),null,null);e.exports=a.exports},function(e,t,n){n(33);var a=n(1)(n(14),n(63),null,null);e.exports=a.exports},function(e,t,n){n(35);var a=n(1)(n(15),n(65),null,null);e.exports=a.exports},function(e,t,n){n(38);var a=n(1)(n(16),n(68),null,null);e.exports=a.exports},function(e,t,n){n(36);var a=n(1)(n(18),n(66),null,null);e.exports=a.exports},function(e,t,n){n(29);var a=n(1)(n(19),n(58),null,null);e.exports=a.exports},function(e,t,n){n(30);var a=n(1)(n(20),n(59),null,null);e.exports=a.exports},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("f7-popup",{staticClass:"popup-add-member popup-member modal-in",on:{"popup:open":function(t){e.onPopupOpen()}}},[n("f7-navbar",[n("f7-nav-center",{attrs:{sliding:""}},[e._v("Select A Google Contact")]),e._v(" "),n("f7-nav-right",[n("f7-button",{staticClass:"button button-round utton-fill open-popup",attrs:{"data-popup":".popup-member-details"},on:{click:function(t){e.addMemberManually()}}},[e._v("\n        Not on Google ?"),n("i",{staticClass:"icon material-icons"},[e._v("keyboard_arrow_right")])]),e._v(" "),n("f7-button",{staticClass:"button close-popup"},[e._v("\n        Cancel\n      ")])],1)],1),e._v(" "),n("div",{staticClass:"popover-content"},[n("div",{staticClass:"list-block"},[n("ul",[n("li",[n("div",{staticClass:"fb-friend fb-friend-input"},[n("div",[n("div",{staticClass:"item-input"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.query,expression:"query"}],attrs:{type:"text",name:"name",placeholder:"Search Contact"},domProps:{value:e.query},on:{input:function(t){t.target.composing||(e.query=t.target.value)}}})])])])]),e._v(" "),n("li",{ref:"contactsScroller",staticClass:"friends-scroller"},e._l(e.filteredContacts,function(t){return n("a",{staticClass:"fb-friend",attrs:{href:"#"},on:{click:function(n){e.selectContact(t)}}},[n("div",[n("div",{staticClass:"fb-friend-name"},[e._v(e._s(t.name))]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.email,expression:"contact.email"}],staticClass:"fb-friend-email"},[e._v("\n                Email: "+e._s(t.email)+"\n              ")]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.phoneNumber,expression:"contact.phoneNumber"}],staticClass:"fb-friend-contact"},[e._v("\n                Mobile: "+e._s(t.phoneNumber)+"\n              ")])]),e._v(" "),n("i",{staticClass:"material-icons icons"},[e._v("keyboard_arrow_right")])])}))])])])],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.selectedNewMember?n("f7-popup",{staticClass:"popup-member-details popup-member modal-in"},[n("form",{attrs:{name:"memberDetailsForm"},on:{submit:function(t){e.addRelative(t)}}},[n("f7-navbar",[n("f7-nav-left",{directives:[{name:"show",rawName:"v-show",value:!e.selectedNewMember.id,expression:"!selectedNewMember.id"}]},[n("f7-link",{nativeOn:{click:function(t){e.openAddMemberPopup()}}},[n("i",{staticClass:"material-icons icon"},[e._v("keyboard_arrow_left")])])],1),e._v(" "),n("f7-nav-center",{attrs:{sliding:""}},[e._v("Contact Details")]),e._v(" "),n("f7-nav-right",[n("input",{staticClass:"button",attrs:{type:"submit",value:"Save"}}),e._v(" "),n("f7-button",{staticClass:"button close-popup"},[e._v("\n          Cancel\n        ")])],1)],1),e._v(" "),n("div",{staticClass:"popover-content"},[n("div",{staticClass:"list-block"},[n("ul",[n("li",[n("div",{staticClass:"item-content"},[n("div",{staticClass:"item-media"},[n("i",{staticClass:"material-icons icon"},[e._v("face")])]),e._v(" "),n("div",{staticClass:"item-inner"},[n("div",{staticClass:"item-title label"},[e._v("Name")]),e._v(" "),n("div",{staticClass:"item-input"},[n("input",{attrs:{type:"text",placeholder:"Your name",required:""},domProps:{value:e.selectedNewMember.name},on:{keyup:function(t){e.updateProperty("name",t.target.value)}}})])])])]),e._v(" "),n("li",[n("div",{staticClass:"item-content"},[n("div",{staticClass:"item-media"},[n("i",{staticClass:"material-icons icon"},[e._v("email")])]),e._v(" "),n("div",{staticClass:"item-inner"},[n("div",{staticClass:"item-title label"},[e._v("E-mail")]),e._v(" "),n("div",{staticClass:"item-input"},[n("input",{attrs:{type:"email",placeholder:"E-mail"},domProps:{value:e.selectedNewMember.email},on:{keyup:function(t){e.updateProperty("email",t.target.value)}}})])])])]),e._v(" "),n("li",[n("div",{staticClass:"item-content"},[n("div",{staticClass:"item-media"},[n("i",{staticClass:"material-icons icon"},[e._v("phone")])]),e._v(" "),n("div",{staticClass:"item-inner"},[n("div",{staticClass:"item-title label"},[e._v("Phone")]),e._v(" "),n("div",{staticClass:"item-input"},[n("input",{attrs:{type:"tel",placeholder:"Phone"},domProps:{value:e.selectedNewMember.phoneNumber},on:{keyup:function(t){e.updateProperty("phoneNumber",t.target.value)}}})])])])]),e._v(" "),n("li",[n("div",{staticClass:"item-content"},[n("div",{staticClass:"item-media"},[n("i",{staticClass:"material-icons icon"},[e._v("info")])]),e._v(" "),n("div",{staticClass:"item-inner"},[n("div",{staticClass:"item-title label"},[e._v("Gender")]),e._v(" "),n("div",{staticClass:"item-input"},[n("select",{attrs:{required:""},on:{change:function(t){e.updateProperty("gender",t.target.value)}}},[n("option"),e._v(" "),n("option",{attrs:{value:"m"}},[e._v("Male")]),e._v(" "),n("option",{attrs:{value:"f"}},[e._v("Female")])])])])])]),e._v(" "),n("li",[n("div",{staticClass:"item-content"},[n("div",{staticClass:"item-media"},[n("i",{staticClass:"material-icons icon"},[e._v("date_range")])]),e._v(" "),n("div",{staticClass:"item-inner"},[n("div",{staticClass:"item-title label"},[e._v("Birth date")]),e._v(" "),n("div",{staticClass:"item-input"},[n("input",{attrs:{type:"date",placeholder:"Birth day"},on:{change:function(t){e.updateProperty("dob",t.target.value)}}})])])])]),e._v(" "),e.selectedNewMember.id?e._e():n("li",[n("div",{staticClass:"item-content"},[n("div",{staticClass:"item-media"},[n("i",{staticClass:"material-icons icon"},[e._v("link")])]),e._v(" "),n("div",{staticClass:"item-inner"},[n("div",{staticClass:"item-title label"},[e._v("Relation")]),e._v(" "),n("div",{staticClass:"item-input"},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.relation,expression:"relation"}],attrs:{required:""},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.relation=t.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"children"}},[e._v("Children")]),e._v(" "),n("option",{attrs:{value:"spouse"}},[e._v("Spouse")]),e._v(" "),n("option",{attrs:{value:"brother"}},[e._v("Brother")]),e._v(" "),n("option",{attrs:{value:"parent"}},[e._v("Add Parent")])])])])])])])])])],1)]):e._e()},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("f7-views",[n("f7-view",{attrs:{id:"main-view","navbar-through":"","dynamic-navbar":!0,main:""}},[n("f7-pages",[n("home"),e._v(" "),n("popover-member"),e._v(" "),n("popup-add-member"),e._v(" "),n("popup-member-details")],1)],1)],1)],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("f7-page",{staticClass:"dashboard",attrs:{name:"dashboard"}},[n("navbar"),e._v(" "),n("tree")],1)},staticRenderFns:[]}},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("f7-page",{staticClass:"home",attrs:{name:"home"}},[a("div",{staticClass:"home-section"},[a("img",{staticClass:"app-logo",attrs:{src:n(46)}}),e._v(" "),a("h1",[e._v("Welcome to Family Tree App")]),e._v(" "),a("span",{directives:[{name:"show",rawName:"v-show",value:"sdk:loading"==e.googleStatus,expression:"googleStatus == 'sdk:loading'"}],staticClass:"preloader color-blue"}),e._v(" "),"login:not_authorized"==e.googleStatus?a("span",{staticClass:"login-status"},[e._v("Sorry, you are not authorized to login with Facebook")]):e._e(),e._v(" "),"login:connected"!=e.googleStatus||0!=e.contacts.length&&e.profile?e._e():a("span",{staticClass:"login-status"},[e._v("Loading Profile and Friends Details...")]),e._v(" "),"login:connected"==e.googleStatus&&e.contacts.length>0&&e.profile?a("span",{staticClass:"login-status"},[e._v("Loading Dashboard...")]):e._e(),e._v(" "),a("f7-button",{directives:[{name:"show",rawName:"v-show",value:"sdk:loaded"==e.googleStatus,expression:"googleStatus == 'sdk:loaded'"}],staticClass:"button button-round button-fill",on:{click:e.loginGoogle}},[e._v("Continue with Google\n    ")]),e._v(" "),a("f7-button",{directives:[{name:"show",rawName:"v-show",value:"login:not_authorized"==e.googleStatus,expression:"googleStatus == 'login:not_authorized'"}],staticClass:"button button-round button-fill",on:{click:e.loginGoogle}},[e._v("\n      Try Again\n    ")])],1)])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",[e._l(e.model.partners,function(t){return n("div",{key:t.id,staticClass:"node",class:{partners:e.model.partners.length>1,open:e.open,root:!e.$parent.model}},[n("member",{attrs:{model:e.model,member:t},on:{"open-action":e.onOpenAction}}),e._v(" "),n("a",{staticClass:"toggle",class:{"toggle-center":e.model.partners.length>1},attrs:{href:"#"},on:{click:function(t){e.toggle()}}},[e.isFolder&&!e.open?n("f7-icon",{attrs:{material:"arrow_drop_down"}}):e._e(),e._v(" "),e.isFolder&&e.open?n("f7-icon",{attrs:{material:"arrow_drop_up"}}):e._e()],1)],1)}),e._v(" "),e.isFolder?n("ul",{directives:[{name:"show",rawName:"v-show",value:e.open,expression:"open"}]},e._l(e.model.children,function(e,t){return n("members",{key:t,staticClass:"item",attrs:{model:e}})})):e._e()],2)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("f7-navbar",[n("f7-nav-center",{attrs:{sliding:""}},[e._v("Family Tree")]),e._v(" "),n("f7-nav-right",[n("select",{directives:[{name:"model",rawName:"v-model",value:e.treeName,
expression:"treeName"}],on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.treeName=t.target.multiple?n:n[0]}}},e._l(e.trees,function(t,a){return n("option",[e._v(e._s(a))])})),e._v(" "),n("f7-link",[e._v("\n      "+e._s(e.profile.name)+"\n    ")]),e._v(" "),n("f7-link",[n("i",{staticClass:"icon material-icons",on:{click:function(t){e.logout()}}},[e._v("exit_to_app")])])],1)],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("f7-subnavbar",{staticClass:"toolbar"},[n("f7-link",{nativeOn:{click:function(t){e.$emit("add")}}},[n("f7-icon",{attrs:{material:"add"}})],1),e._v(" "),n("f7-link",{nativeOn:{click:function(t){e.$emit("reset")}}},[n("f7-icon",{attrs:{material:"filter_center_focus"}})],1),e._v(" "),n("f7-link",{nativeOn:{click:function(t){e.$emit("zoomOut")}}},[n("f7-icon",{attrs:{material:"zoom_out"}})],1),e._v(" "),n("f7-link",{nativeOn:{click:function(t){e.$emit("zoomIn")}}},[n("f7-icon",{attrs:{material:"zoom_in"}})],1),e._v(" "),n("f7-link",{nativeOn:{click:function(t){e.$emit("toggleListView")}}},[n("f7-icon",{attrs:{material:"list"}})],1),e._v(" "),n("f7-link",{nativeOn:{click:function(t){e.$emit("deleteTree")}}},[n("f7-icon",{attrs:{material:"delete"}})],1)],1)},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return null!=e.member?n("f7-popover",{staticClass:"popover-member"},[n("div",{staticClass:"header"},[e.member.image?n("div",{staticClass:"image",style:{backgroundImage:"url('"+e.member.image+"?access_token="+e.token+"')"}}):e._e(),e._v(" "),n("div",{staticClass:"title"},[e._v(e._s(e.member.name))])]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.member.gender,expression:"member.gender"}],staticClass:"gender"},[e._v("Gender : "+e._s(e.member.gender))]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.member.dob,expression:"member.dob"}],staticClass:"birth"},[e._v("Birth Date : "+e._s(e.member.dob))]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.member.phoneNumber,expression:"member.phoneNumber"}],staticClass:"mobile"},[e._v("Mobile : "+e._s(e.member.phoneNumber))]),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.member.email,expression:"member.email"}],staticClass:"email"},[e._v("Email : "+e._s(e.member.email))]),e._v(" "),n("div",{staticClass:"buttons"},[n("a",{staticClass:"button button-raised button-fill color-pink open-popup close-popover",attrs:{href:"#","data-popup":".popup-member-details"},on:{click:function(t){e.editMember()}}},[n("i",{staticClass:"icon material-icons"},[e._v("mode_edit")]),e._v(" Edit\n    ")]),e._v(" "),n("a",{staticClass:"button button-raised button-fill color-pink open-popup close-popover",attrs:{href:"#","data-popup":".popup-add-member"}},[n("i",{staticClass:"icon material-icons"},[e._v("add")]),e._v(" Add Relative\n    ")]),e._v(" "),n("a",{staticClass:"button button-raised button-fill color-pink button-icon close-popover",attrs:{href:"#"},on:{click:function(t){e.deleteMember()}}},[n("i",{staticClass:"icon material-icons"},[e._v("delete")])])])]):e._e()},staticRenderFns:[]}},function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("f7-card",{staticClass:"flip-container"},[a("div",{staticClass:"flipper"},[a("div",{staticClass:"front"},[a("div",{staticClass:"image-container"},[e.member.root?e._e():a("div",{staticClass:"image",style:{backgroundImage:"url('"+e.member.image+"?access_token="+e.token+"')"}}),e._v(" "),e.member.root?a("div",{staticClass:"image",style:{backgroundImage:"url('"+e.member.image+"&sz=100')"}}):e._e(),e._v(" "),"f"==e.member.gender||e.age?e._e():a("img",{staticClass:"image placeholder",attrs:{src:n(6)}}),e._v(" "),"f"!=e.member.gender&&e.age<=12?a("img",{staticClass:"image placeholder",attrs:{src:n(42)}}):e._e(),e._v(" "),"f"!=e.member.gender&&e.age>12&&e.age<=50?a("img",{staticClass:"image placeholder",attrs:{src:n(6)}}):e._e(),e._v(" "),"f"!=e.member.gender&&e.age>50?a("img",{staticClass:"image placeholder",attrs:{src:n(44)}}):e._e(),e._v(" "),"f"!=e.member.gender||e.age?e._e():a("img",{staticClass:"image placeholder",attrs:{src:n(7)}}),e._v(" "),"f"==e.member.gender&&e.age<=12?a("img",{staticClass:"image placeholder",attrs:{src:n(43)}}):e._e(),e._v(" "),"f"==e.member.gender&&e.age>12&&e.age<=50?a("img",{staticClass:"image placeholder",attrs:{src:n(7)}}):e._e(),e._v(" "),"f"==e.member.gender&&e.age>50?a("img",{staticClass:"image placeholder",attrs:{src:n(45)}}):e._e()]),e._v(" "),a("f7-card-header",{staticClass:"popover-member",attrs:{"no-border":""}},[a("div",{staticClass:"title"},[e._v(e._s(e.member.name))]),e._v(" "),e.age<=1?a("div",{staticClass:"age"},[e._v(e._s(e.age)+" Year")]):e._e(),e._v(" "),e.age>1?a("div",{staticClass:"age"},[e._v(e._s(e.age)+" Years")]):e._e()])],1),e._v(" "),a("div",{staticClass:"back"},[a("div",{staticClass:"buttons"},[a("a",{staticClass:"button button-raised button-fill color-pink open-popover",attrs:{href:"#","data-popup":".popover-member"},on:{click:function(t){e.openMemberPopover(e.member)}}},[a("i",{staticClass:"icon material-icons"},[e._v("remove_red_eye")])]),e._v(" "),a("a",{staticClass:"button button-raised button-fill color-pink open-popup",attrs:{href:"#","data-popup":".popup-member-details"},on:{click:function(t){e.editMember()}}},[a("i",{staticClass:"icon material-icons"},[e._v("mode_edit")])]),e._v(" "),a("a",{staticClass:"button button-raised button-fill color-pink open-popup",attrs:{href:"#","data-popup":".popup-add-member"},on:{click:function(t){e.addMember()}}},[a("i",{staticClass:"icon material-icons"},[e._v("add")])]),e._v(" "),a("a",{staticClass:"button button-raised button-fill color-pink",attrs:{href:"#"},on:{click:function(t){e.deleteMember()}}},[a("i",{staticClass:"icon material-icons"},[e._v("delete")])])])])])])},staticRenderFns:[]}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tree"},[n("toolbar",{on:{reset:e.onResetClick,zoomIn:e.onZoomInClick,zoomOut:e.onZoomOutClick,toggleView:e.toggleView,add:e.add}}),e._v(" "),n("ul",{class:e.view,style:{transform:"scale("+e.zoom+")"}},[e.treeData?n("members",{attrs:{model:e.treeData}}):e._e()],1)],1)},staticRenderFns:[]}}]);
//# sourceMappingURL=app.fc137b1b85e30de0f2e4.js.map