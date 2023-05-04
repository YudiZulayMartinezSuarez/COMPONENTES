let pathName = new URL(import.meta.url).pathname;
let name = pathName.split("/").pop().replace(".js","");

export default class mySelecion extends HTMLElement{
    static async componentes(){
        return await (await fetch(pathName.replace(".js",".html"))).text();
    }

    constructor(){
        super();
        this.attachShadow({mode: "open"});
        
    }
    handleEvent(e){
        (e.type === "click") ? this.sendMessage(e): undefined;
    }

    sendMessage(e){
        e.preventDefault();   
        alert("Boton section")    
    }

    connectedCallback(){
        Promise.resolve(mySelecion.componentes())
        .then(html =>{
            this.shadowRoot.innerHTML = html;
            this.mySelecion = this.shadowRoot.querySelector("#boton");
            this.mySelecion.addEventListener("click", this.handleEvent.bind(this))  
        });
        console.log("Etiqueta Section");        
        console.log("Etiqueta section"); 
    }
}
customElements.define(name,mySelecion );
    


