
import { render, screen, fireEvent } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Pruebas sobre el componente GifExpertApp', () => {
    

    test('Debe hacer match con el snapshot', () => { 

       const { container } = render( <GifExpertApp />)
     
        expect( container ).toMatchSnapshot();
    })

    test('Debe tener un titulo que ponga GifExpertApp', () => { 
        render( <GifExpertApp />)
       expect( screen.getByText('GifExpertApp') ); 

     })

     test('En la app no debe dejar añadir  categorías repetidas', () => { 
         
        const inputValue = 'FRIENDS';

         render(<GifExpertApp />)

         const input = screen.getByRole('textbox');
         const form = screen.getByRole('form');

         fireEvent.input(input, { target: { value: inputValue } });
         
         fireEvent.submit(form);

         expect(screen.getAllByText(inputValue).length).toBe(1);

     })

     test('Cuando escribo una categoría en el formulario debe aparecer una categoría llamada así', () => { 
        const inputValue = 'KOALA';
        render(<GifExpertApp />)
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: inputValue }});
        fireEvent.submit(form);

        expect(screen.getByText(inputValue)).toBeTruthy();
      })
});
