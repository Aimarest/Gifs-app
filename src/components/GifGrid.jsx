
import { useEffect, useState } from "react";
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem }from "./gifItem";


export const GifGrid = ({ category }) => {

    const { images, isLoading } = useFetchGifs( category )


    return (
        <>
            <h3>{ category }</h3>

            {
                isLoading && ( <h2>Cargando imágenes...</h2> )  //Es una forma de hacer un if o un operador ternario corto.
            }
            <ul className="card-grid">
                {
                    images.map( ( image ) => (
                    <GifItem 
                    key={ image.id } 
                    {... image} //ESTO SE UTILIZA PARA ESPARCIR LAS PROPIEDADES DE IMAGE EN EL COMPONENTE AL QUE LO ESTAMOS PASANDO.
                    /> 
                    ))
                }
            </ul>
        </>
    );
}

