import { render, screen , fireEvent} from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Pruebas sobre el componente AddCategory', () => {
    
test('debe cambiar el valor del input de texto', () => { 

//Declaramos el sujeto de pruebas:

render( <AddCategory handleAddCategory={ function () { }} /> )

//Se extrae el input del sujeto de pruebas con getByRole.

 const input = screen.getByRole('textbox');

 //Disparamos el evento sobre el input:

 fireEvent.input( input, { target: { value: 'friends'} } );

 //Observamos si se cumple lo que esperamos:

 expect( input.value ).toBe('friends');

 })


 test('Debe de llamar handleAddCategory si el input tiene un valor', () => { 
   
     const inputValue = 'friends';
     const handleAddCategory = jest.fn();

     render( <AddCategory handleAddCategory={ handleAddCategory } />)

     const input = screen.getByRole('textbox');
     const form = screen.getByRole('form');

     fireEvent.input( input, { target: { value:inputValue}});
     fireEvent.submit( form );
     expect( input.value ).toBe('');
     
     expect( handleAddCategory ).toHaveBeenCalledTimes(1);
     expect( handleAddCategory ).toHaveBeenCalledWith( inputValue );

  })

  test('No debe de llamar handleAddCategory si el input está vacío', () => { 

      const handleAddCategory = jest.fn();

      render(<AddCategory handleAddCategory={handleAddCategory} />)

      const input = screen.getByRole('textbox');
      const form = screen.getByRole('form');

      fireEvent.submit( form );

      expect( input.value ).toBe('');
      expect( handleAddCategory ).not.toHaveBeenCalled();
   })
});
