import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs')
describe('Pruebas en el componente GifGrid', () => {
   const category = 'Friends'; 

    test('Debe de mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images:[],
            isLoading: true,
        })

        render(<GifGrid category={category} />);

        expect(screen.getByText('Cargando imágenes...'));
        expect(screen.getByText(category));


     })


     test('Debe mostrar los gifs después de que se realice el fetch', () => { 


        const gifs = [
            {
                id:'ABD',
                title:'Doraemon',
                url:'http://localhost/doraemon.jpg'
            },

            {
                id:'kasdñj',
                title:'Doraemon',
                url:'http://localhost/doraemon.jpg'
            }
        ]
        
         useFetchGifs.mockReturnValue({
             images: gifs,
             isLoading: false,
         })

        render( <GifGrid category = { category } /> );
      expect( screen.getAllByRole('img').length).toBe(2);
      
      })
});
