import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from "enzyme"
import { AddCategory } from "../../components/AddCategory"

describe('Prueba en <AddCategory />', () => {
    
    const setCategories = jest.fn(); // 
    let wrapper =  shallow( <AddCategory setCategories={setCategories}/>);

    beforeEach( () =>{
        jest.clearAllMocks();
        wrapper =  shallow( <AddCategory setCategories={setCategories}/>);
    });


    test('Se muestra correctamente', () => {
        
        expect(wrapper).toMatchSnapshot();
    })


    test('Cambios en cada de texto', () => {
        
       const input = wrapper.find('input');
        const value = 'hola mundo'
       input.simulate('change', { target: { value:value}});

       expect(wrapper.find('p').text().trim()).toBe(value);
    })



    test('No debe de postear la info con submit', () => {
       wrapper.find('form').simulate('submit', { preventDefault(){}  } );


       expect(setCategories).not.toHaveBeenCalled();

     })
    
})
