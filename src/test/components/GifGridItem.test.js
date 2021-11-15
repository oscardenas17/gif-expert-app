import React from 'react';
import { shallow } from "enzyme"
import { GifGridItem } from "../../components/GifGridItem"

describe('Pruebas en <GifGridItem />', () => {
    
    const title = 'Un titulo';
    const url = 'https//locahost/imagen.jpg';
    const wrapper = shallow (<GifGridItem  title={title} url = {url}/>)

    test('Debe mostar el componente correctamente', () => {
        
        const wrapper = shallow (<GifGridItem  title={title} url = {url}/>)
        expect(wrapper).toMatchSnapshot();

    })

    test('Debe tener un párrafo con el title', () => {
        
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(title);
    })

    test('La imagen tiene un title y una url', () => {
        
        const img = wrapper.find('img');
        // console.log(img.prop('src'));
        expect( img.prop('src') ).toBe(url);
        expect( img.prop('alt') ).toBe(title);
    })


    test('contiene clase animate_', () => {
        
        const div = wrapper.find('div');
        // console.log(img.prop('src'));
        const className = div.prop('className')

        expect( className.includes('animate_fadeIn') ).toBe( true);
      
    })



})
