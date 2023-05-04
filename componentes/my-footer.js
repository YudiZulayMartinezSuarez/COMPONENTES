let pathName = new URL(import.meta.url).pathname;
let name = pathName.split("/").pop().replace(".js","");

export default class myFooter extends HTMLElement{
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
        Promise.resolve(myFooter.componentes())
        .then(html =>{
            this.shadowRoot.innerHTML = html;
            this.myFooter = this.shadowRoot.querySelector("#boton");
            this.myFooter.addEventListener("click", this.handleEvent.bind(this))  
        });
        console.log("Etiqueta Section");        
        console.log("Etiqueta section"); 
    }
}


customElements.define(name, myFooter );