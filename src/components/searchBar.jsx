import React, {useState} from "react";

function SearchBar() {
    const [palabra, setPalabra] = useState(null);
    // async function buscarTags(){
    //     const response = await fetch ('https://proyectoframeworksbackend-production.up.railway.app/publications/search/:labels',
    // }

    return(
        <div className="bg-Azul text-white flex flex-row p-1 rounded-lg">
            <input placeholder="Busqueda" className=" bg-Azul p-1 pl-4 placeholder-white  text-white text-sm " onChange={(e)=>setPalabra(e)} ></input>
            <button className="p-2" >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
            </button>
        </div>
    );
}
export {SearchBar};