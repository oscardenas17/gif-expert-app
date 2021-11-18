import React from 'react';
import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory"

describe('Prueba en <AddCategory />', () => {
    
    const setCategories = () => {};
        
    const wrapper =  shallow( <AddCategory setCategories={setCategories}/>);

    test('Se muestra correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();
    })


    test('Cambios en cada de texto', () => {
        
       const input = wrapper.find('input');
        const value = 'hola mundo'
       input.simulate('change', { target: { value:value}});

       expect(wrapper.find('p').text().trim()).toBe(value);
    })
    
})
