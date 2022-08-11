import { render, screen , fireEvent} from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas sobre el componente AddCategory', () => {
    
test('debe cambiar el valor del input de texto', () => { 

//Declaramos el sujeto de pruebas:

render( <AddCategory handleAddCategory={ () =>{}}/> )

//Se extrae el input del sujeto de pruebas con getByRole.

 const input = screen.getByRole('textbox');

 //Disparamos el evento sobre el input:

 fireEvent.input( input, { target: { value: 'friends'} } );

 //Observamos si se cumple lo que esperamos:
 
 expect( input.value ).toBe('friends');

 })

});
