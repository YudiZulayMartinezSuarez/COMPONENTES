let pathName = new URL(import.meta.url).pathname;
let name = pathName.split("/").pop().replace(".js","");

export default class myTabla extends HTMLElement{
    static async componentes(){
        return await (await fetch(pathName.replace(".js",".html"))).text();
    }

    constructor(){
        super();
        this.attachShadow({mode:"open"});
        Promise.resolve(myTabla.componentes()).then(html=>{
            this.shadowRoot.innerHTML = html;
        })
        console.log("etiqueta rendirizada y configurada :)");
    }
}

customElements.define(name, myTabla);
