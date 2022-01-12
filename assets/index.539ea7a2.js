import{s as t,j as h,_ as y,S as c,U as u,W as v,R as k,a as j}from"./vendor.46bfa173.js";const C=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))f(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const p of i.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&f(p)}).observe(document,{childList:!0,subtree:!0});function w(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function f(o){if(o.ep)return;o.ep=!0;const i=w(o);fetch(o.href,i)}};C();const F=t.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    margin-bottom: 4rem;
    position: relative;
    
    &:before { 
        content:"";
        position: absolute;
        right: 0;
        left:0;
        top: -30px;
        height: 30px;
        background: linear-gradient(to bottom, rgba(0,0,0,0), #00070E);
    }
`,g=t.h2`
    margin-top: 2rem;
    font-size: 2rem;
    text-transform: uppercase;
    color: var(--color-primary);
    padding: 10px 15px;
   
`,R=t.main`
    /* display: grid;
    grid-template-columns: repeat(auto-fill, minmax(650px, 1fr));
    gap: 10px; */
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1400px;
    margin-top: 2rem;
`,I=t.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    max-width: 600px;
    margin: 1rem auto auto;
    border-radius: 10px;
    justify-content: flex-start;
    text-align: center;
    padding: 15px 25px;
    border: 1px solid rgba(255, 255, 255, .3);
    background: linear-gradient(to top, rgba(255, 255, 255, .01), rgba(255, 255, 255, .03));
    box-shadow:  15px 15px 30px #000408,
             -15px -15px 30px #000a14;

`,z=t(g)`
    margin-top: 0;
    font-weight: 500;
    font-size: 1.5rem;
`,x=t.span`
    color: var(--color-bone);
    text-align: justify;
    font-weight: 400;
    letter-spacing: 1px;

`,l=t(x)`
    color: var(--color-primary);
`,e=h.exports.jsx,r=h.exports.jsxs,L=h.exports.Fragment,E=()=>e(F,{id:"about",children:e(R,{children:e(y,{options:{max:25},children:e(c,{animateIn:"wobble",initiallyVisible:!0,delay:500,children:r(I,{children:[e(z,{children:"\xBFQuien soy?"}),r(x,{children:["Soy un desarrollador frontend apasionado por las tecnolog\xEDas ",e(l,{children:"multiplataformas"}),", con conocimientos fuertes en React,  ",e(l,{children:"React Native"}),", JavaScript y TypeScript, actualmente me encuentro ",e(l,{children:"trabajando"})," en proyectos que requieren React en la ",e(l,{children:"web"}),', sin dejar de estudiar en mis tiempos libre React "avanzado" y ',e(l,{children:"Flutter"}),". Tengo como objetivo ",e(l,{children:"dominar"})," estas tecnolog\xEDas."]})]})})})})}),S=t.nav`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100px;
    width: 100vw;
    padding: 10px 20px;
`,O=u`
    from {
        transform: translateY(-200px)
    } to {
        transform: translateY(0);
    }
`,A=t.div`
    height: 100%;
    width: 100%;
    max-width: 1400px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    animation: ${O} .8s linear;
`,B=t.ul`
    width: 100%;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
`,s=t.li`
    margin-left: 30px;
    font-size: .85rem;
    font-weight: bold;
    text-transform: uppercase;
    color: var(--color-bone);
    border-radius: 11px;
    background: #0b1f36;
    box-shadow:  3px 3px 0px #0a1b2f,
                -3px -3px 0px #0c233d;
    cursor: pointer;
    transition: all 0.3s;
    user-select: none;
    &:hover {
        box-shadow:  5px 5px 0px #0a1b2f,
                -5px -5px 0px #0c233d;
    }

    &:active {
        box-shadow:  inset 5px 5px 0px #0a1b2f;

    }
    &:first-of-type {
        margin-left: 0;
    }
`,m=t.a`
    text-decoration: none;
    color: var(--color-bone);
    display: block;
    padding: 10px 15px;
`,M=()=>e(S,{children:e(A,{children:r(B,{children:[e(s,{children:e(m,{href:"#about",children:" Sobre mi"})}),e(s,{children:e(m,{href:"#projects",children:"Proyectos"})}),e(s,{children:e(m,{href:"#contact",children:"Contacta me"})})]})})}),P=t.header`
    min-width: 100vw;
    height: 100vh;
    background: rgb(0,7,14);
    background: linear-gradient(45deg, rgba(0,7,14,1) 0%, rgba(1,14,28,1) 49%, rgba(0,7,14,1) 100%);
   
`,G=t.div`
    width: 100%;
    max-width: 1400px;
    height: 500px;
    max-height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
`,b=t.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
`,N=t.img`
    margin: auto;
    width: 280px;
    border-radius: 10px;
    object-fit: contain;
    filter: drop-shadow( 8px 8px 2px var(--color-primary));
    transition: all .3s cubic-bezier(0.165, 0.84, 0.44, 1);
    cursor: pointer;
    &:hover {
        transform: scale(1.1);
        filter: drop-shadow( 18px 18px 2px var(--color-primary));
    }
    &:active {
        transform: scale(1.05);
        filter: drop-shadow( 12px 12px 2px var(--color-primary));
    }
`,U=u`
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(100%);
    }
`,V=t(b)`
    flex-direction: column;
    align-items: flex-start;
    user-select: none;
    cursor: context-menu;
    span {
        color: var(--color-bone);
        font-size: 2rem;
    }
    h2 {
        font-weight: bold;
        color: var(--color-title);
        text-transform: uppercase;
        font-size: 3rem;
    }
    p {
        font-size: 2rem;
        color: var(--color-primary);
        position: relative;
        overflow: hidden;
        width: 300px;
        border-radius: 10px;
        background: linear-gradient(145deg, #010f1d, #010d18);
        box-shadow:  17px 17px 33px #010c16,
                    -17px -17px 33px #011020;
        padding: 5px;
    }
    p::before {
        content: "";
        width: 100%;
        height: 100%;
        background-color: var(--color-bg);
        position: absolute;
        border-left: 1px solid var(--color-primary);
        top: 1px;
        animation: ${U} 2s infinite alternate steps(22);
    }
`,q=t(s)`
    margin-top: 10px;
    list-style: none;
    text-transform: uppercase;
    padding: 10px 15px;
`;var _="/assets/profile.cc705d54.jpeg";const D="https://drive.google.com/file/d/1E1GesphULM0ZdythqmEGrb0uKiwq32uj/view?usp=drivesdk",H="https://github.com/Vdymir",d={fb:"https://www.facebook.com/vladimir.castaneda.731",ig:"https://www.instagram.com/vdymir/",wpp:"https://wa.me/qr/MAIHEENXQDURM1",lnk:"https:/www.linkedin.com/in/eduardo-casta\xF1ed4"},T=()=>{const n=a=>window.open(a);return r(P,{children:[e(M,{}),r(G,{children:[e(b,{children:e(c,{animateIn:"bounceInLeft",animateOut:"bounceOutRight",delay:500,children:e(N,{src:_,alt:"Profile",onClick:()=>n(H)})})}),r(V,{children:[r(c,{animateIn:"flipInY",animateOut:"flipOutY",delay:700,children:[e("span",{children:"Hi! I'm \u{1F44B}\u{1F3FC}"}),e("h2",{children:"Vladimir Casta\xF1eda"}),e("p",{children:"Frontend Developer"})]}),e(c,{animateIn:"bounceInRight",animateOut:"bounceOutLeft",delay:800,children:e(q,{onClick:()=>n(D),children:"ver cv"})})]})]})]})},Y=t.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
    background: rgb(0,7,14);
    background: linear-gradient(45deg, rgba(0,7,14,1) 0%, rgba(1,14,28,1) 49%, rgba(0,7,14,1) 100%);
    position: relative;

    &:before { 
        content:"";
        position: absolute;
        right: 0;
        left:0;
        height: 30px;
        background: linear-gradient(to top, rgba(0,0,0,0), #00070E);
    }
`,W=t.div`
    width: 100%;
    max-width: 1400px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    align-items: center;
    justify-items: center;
    gap: 20px;
    padding: 0 4rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
`,X=t.div`
    width: 370px;
    height: 250px;
    background-color: #26282B;
    border-radius: 10px;
    box-shadow: 5px 10px 15px rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 5px 15px;
    transition: all 0.2s linear;

    &:hover {
        transform: scale(1.05);
    }
`,J=t.header`
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h3 {
        color: var(--color-primary);
        font-size: 1.4rem;
    }

    img {
        width: 50px;
        cursor: pointer;
        transition: all 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);

        &:hover {
            transform: scale(1.2);
        }
    }
`,K=t.div`
    flex: 1;

    p {
        font-size: 1rem;
        color: var(--color-bone);
        text-align: justify;
        font-weight: 600;    
    }
`,Q=t.footer`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    p {
        color: var(--color-primary);
        text-transform: uppercase;
        font-weight: bold;
    } 
    span {
        color: var(--color-bone);
        font-weight: 500;
        margin-left: 5px;
        text-transform: capitalize;
        background-color: rgba(0,0,0,.5);
        padding: 5px 10px;
        border-radius: 20px;
    }
`;var $="/assets/folder.c104f22d.png";const Z=[{id:1,title:"Facebook-ui",link:"https://github.com/Vdymir/facebook-ui",description:"Clon de la section de facebook construido en un rato libre con el fin de practicar un poco m\xE1s react-native...",tools:["react-native"]},{id:2,title:"Clone Google",link:"https://github.com/Vdymir/functional-google-clone-react-redux-",description:"Clon del buscador de google con el funcionamiento real de la busqueda por medio de la api de google...",tools:["react.js","redux","api-rest"]},{id:3,title:"Poke app",link:"https://github.com/Vdymir/pokeApp-react_native",description:"Aplicaion de pokemon la cual consume la api de pokemon, contiene tabs para la navegacion, infinite scroll, buscador...",tools:["react-native","typescript","axios"]},{id:4,title:"Crud React + FireBase",link:"https://github.com/Vdymir/Crud-react-redux-firebase",description:"Crud utilizando firebase como base de datos y react para el frontend...",tools:["react.js","firebase","redux"]}],ee=()=>r(Y,{id:"projects",children:[e(g,{children:"Proyectos"}),e(W,{children:Z.map(n=>r(X,{children:[r(J,{children:[e("h3",{children:n.title}),e("img",{src:$,alt:"Img: https://www.flaticon.com/",onClick:()=>window.open(n.link)})]}),e(K,{children:e("p",{children:n.description})}),r(Q,{children:[e("p",{children:"Tools:"}),e("div",{children:n.tools.map(a=>e("span",{children:a},a))})]})]},n.id))})]}),te=t.footer`
    width: 100%;
    height: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h3 {
        text-transform: uppercase;
        font-size: .95rem;
        letter-spacing: 1px;
        color: var(--color-bone);
    }

    ul {
        display: flex;
        list-style: none;
        margin-top: 1rem;
        
        li {
            margin-left: 1rem;

            &:first-of-type {
            margin-left: 0;

            }
            img {
                width: 40px;
                filter: grayscale(.1);
                cursor: pointer;
                transition: transform .3s;

                &:hover {
                    transform: scale(1.1);
                }
            }
        }
    }
`;var oe="/assets/facebook.2f54914b.png",re="/assets/instagram.bd9d1254.png",ie="/assets/linkedin.7dcbc614.png",ne="/assets/whatsapp.e4e23ecf.png";const ae=()=>r(te,{id:"contact",children:[e("h3",{children:"Puedes contactarme por medio de estas redes sociales"}),r("ul",{children:[e("li",{children:e("img",{src:oe,alt:"IMG: https://www.flaticon.com/",onClick:()=>window.open(d.fb)})}),e("li",{children:e("img",{src:re,alt:"IMG: https://www.flaticon.com/",onClick:()=>window.open(d.ig)})}),e("li",{children:e("img",{src:ie,alt:"IMG: https://www.flaticon.com/",onClick:()=>window.open(d.lnk)})}),e("li",{children:e("img",{src:ne,alt:"IMG: https://www.flaticon.com/",onClick:()=>window.open(d.wpp)})})]})]});function le(){return r(L,{children:[e(T,{}),e(E,{}),e(ee,{}),e(ae,{})]})}const ce=v`
    /** Reset Css by:  Josh Comeau **/
    
    :root {
        --color-bg: #020e1b;
        --color-primary: #3F72AF;
        --color-bone: #b0b9c4;
        --color-title: #F9F7F7;
    }
        
    *, *::before, *::after {
        box-sizing: border-box;
    }
  
    * {
        margin: 0;
    }
    
    html, body {
        height: 100%;
        font-family: 'Roboto', sans-serif;
        overflow-x: hidden;
        background: rgb(0,7,14);
        scroll-behavior: smooth;
    }
  
    body {
        line-height: 1.5;
        -webkit-font-smoothing: antialiased;
    }
 
    img, picture, video, canvas, svg {
        display: block;
        max-width: 100%;
    }
    
    input, button, textarea, select {
        font: inherit;
    }
   
    p, h1, h2, h3, h4, h5, h6 {
        overflow-wrap: break-word;
    }

    h1, h2, h3, h4, h5, h6 {
        color: var(--color-title);
    }
    
    p { 
        color: var(--color-bone);
    }

    /** SCROLL BAR **/
    *::-webkit-scrollbar {
        width: 8px;
        height: 8px;
    }
    *::-webkit-scrollbar-button:increment,
    *::-webkit-scrollbar-button {
        display: none;
    }
    
    *::-webkit-scrollbar-track {
        background: #444444;
    }
    
    *::-webkit-scrollbar-thumb {
        background: rgb(182, 182, 182);
        border-radius: 4px;
    }
    
    *::-webkit-scrollbar-thumb:hover {
        background: #999999;
        box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
    }
    
    *::-webkit-scrollbar-thumb:active {
        background-color: #858585;
    }
`;k.render(r(j.StrictMode,{children:[e(ce,{}),e(le,{})]}),document.getElementById("root"));
