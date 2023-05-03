let pathName = new URL(import.meta.url).pathname;
let name = pathName.split("/").pop().replace(".js","");

export default class mySelecion extends HTMLElement{
    static async componentes(){
        return await (await fetch(pathName.replace(".js",".html"))).text();
    }

    constructor(){
        super();
        this.attachShadow({mode:"open"});
        Promise.resolve(mySelecion.componentes()).then(html=>{
            this.shadowRoot.innerHTML = html;
        })
        console.log("etiqueta rendirizada y configurada :)");
    }
}

