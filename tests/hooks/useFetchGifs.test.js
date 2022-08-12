import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Pruebas sobre el hook useFetchGifs', () => {
    
    test('debe regresar el estado inicial', () => { 

        const { result } = renderHook( () => useFetchGifs( 'Friends' )); //renderHook devuelve tres cosas: rerender, result y unmount
        const { images, isLoading } = result.current;

        expect( images.length).toBe(0);
        expect( isLoading ).toBeTruthy();
     })

     test('debe regresar un array de imagenes y el isLoading en false', async() => { 
         const { result } = renderHook(() => useFetchGifs('Friends'));
         //LE VAMOS A DECIR CON ESTO QUE ESPERE A QUE EL RESULTADO SEA MAYOR DE 0:
         await waitFor(
             () => expect( result.current.images.length ).toBeGreaterThan(0),
         )
         const { images, isLoading } = result.current;

         expect( images.length ).toBeGreaterThan(0);
         expect( isLoading ).toBeFalsy();
     })
});

