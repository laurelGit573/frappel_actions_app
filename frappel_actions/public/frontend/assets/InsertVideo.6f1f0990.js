import{_ as D,B as h,D as k,y as v,b as u,k as C,n as x,l as y,d as t,w as l,F as B,r,o as c,h as w,i as n,t as U,j as F,x as p}from"./vendor.adf9dd71.js";const I={name:"InsertImage",props:["editor"],expose:["openDialog"],data(){return{addVideoDialog:{url:"",file:null,show:!1}}},components:{Button:h,Dialog:k,FileUploader:v},methods:{openDialog(){this.addVideoDialog.show=!0},onVideoSelect(d){let o=d.target.files[0];!o||(this.addVideoDialog.file=o)},addVideo(d){this.editor.chain().focus().insertContent(`<video src="${d}"></video>`).run(),this.reset()},reset(){this.addVideoDialog=this.$options.data().addVideoDialog}}},N={class:"flex items-center space-x-2"},S=n(" Remove "),A=["src"],b=n(" Insert Video "),j=n("Cancel");function L(d,o,P,R,e,a){const s=r("Button"),V=r("FileUploader"),g=r("Dialog");return c(),u(B,null,[C(d.$slots,"default",x(y({onClick:a.openDialog}))),t(g,{options:{title:"Add Video"},modelValue:e.addVideoDialog.show,"onUpdate:modelValue":o[2]||(o[2]=i=>e.addVideoDialog.show=i),onAfterLeave:a.reset},{"body-content":l(()=>[t(V,{"file-types":"video/*",onSuccess:o[0]||(o[0]=i=>e.addVideoDialog.url=i.file_url)},{default:l(({file:i,progress:f,uploading:_,openFileSelector:m})=>[w("div",N,[t(s,{onClick:m},{default:l(()=>[n(U(_?`Uploading ${f}%`:e.addVideoDialog.url?"Change Video":"Upload Video"),1)]),_:2},1032,["onClick"]),e.addVideoDialog.url?(c(),F(s,{key:0,onClick:()=>{e.addVideoDialog.url=null,e.addVideoDialog.file=null}},{default:l(()=>[S]),_:2},1032,["onClick"])):p("",!0)])]),_:1}),e.addVideoDialog.url?(c(),u("video",{key:0,src:e.addVideoDialog.url,class:"mt-2 w-full rounded-lg",type:"video/mp4",controls:""},null,8,A)):p("",!0)]),actions:l(()=>[t(s,{appearance:"primary",onClick:o[1]||(o[1]=i=>a.addVideo(e.addVideoDialog.url))},{default:l(()=>[b]),_:1}),t(s,{onClick:a.reset},{default:l(()=>[j]),_:1},8,["onClick"])]),_:1},8,["modelValue","onAfterLeave"])],64)}var E=D(I,[["render",L]]);export{E as default};