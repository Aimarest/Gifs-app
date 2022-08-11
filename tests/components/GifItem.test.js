import { GifItem } from "../../src/components/GifItem";
import {  render, screen } from '@testing-library/react';

describe('Pruebas sobre componente GifItem', () => {
    const title = 'joey';
    const url = 'https://media0.giphy.com/media/W3a0zO282fuBpsqqyD/giphy.gif?cid=9dbd306dzzcjjlswlve9yss3bztxhwdhsuk059upzh91e2y1&rid=giphy.gif&ct=g'

    test('Debe hacer match con el snapshot', () => {

        const { container } = render(

            <GifItem title={title} url={url} />
        )
        expect(container).toMatchSnapshot();
    })

    test('debe mostrar la imagen con el URL y el ALT indicado', () => {

        render(

            <GifItem title={title} url={url} />
        );
        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(alt);


    })

    test('Debe de mostrar el título en el componente', () => {
        render(

            <GifItem title={title} url={url} />
        );
        expect(screen.getByRole('heading').innerHTML).toBe(title)
        
        // PODRÍA SER ASÍ TAMBIÉN: 
        // expect( screen.getByText(title)).toBeTruthy();
    })
});
