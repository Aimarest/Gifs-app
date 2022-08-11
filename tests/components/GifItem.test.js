import { GifItem } from "../../src/components/GifItem";
import {  render } from '@testing-library/react';

describe('Pruebas sobre componente GifItem', () => {
    const title = 'joey';
    const url = 'https://media0.giphy.com/media/W3a0zO282fuBpsqqyD/giphy.gif?cid=9dbd306dzzcjjlswlve9yss3bztxhwdhsuk059upzh91e2y1&rid=giphy.gif&ct=g'
    test('Debe hacer match con el snapshot', () => {

        const { container } = render(

            <GifItem title={ title } url={ url }/>
        )
        expect(container).toMatchSnapshot();
    })
});
