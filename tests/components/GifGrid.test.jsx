import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";

describe('Pruebas en el componente GifGrid', () => {
   const category = 'Friends'; 

    test('Debe de mostrar el loading inicialmente', () => {

render( <GifGrid category = { category } /> );

expect( screen.getByText( 'Cargando imágenes...' ) );
expect( screen.getByText( category ) );


     })
});
