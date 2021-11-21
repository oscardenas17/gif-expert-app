import React from 'react';
import '@testing-library/jest-dom'
import { shallow } from 'enzyme';
import { GifExpertApp } from "../GifExpertApp";

describe('Pruebas en <GifExpertApp />', () => {
    
    test('Snapshot ok', () => {

        const wrapper = shallow (<GifExpertApp /> );

        expect(wrapper).toMatchSnapshot();
    })


    test('debe de mostrar una lista da categorias', () => {

        const categories = ['DBZ','ONE']
        const wrapper = shallow (<GifExpertApp  defaultCategories={categories}/> );

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('Gifgrid').length).toBe(categories);
    })
    
})
