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

     test('debe de llamar el SetCtegories y limpiar la caja de texto', () => {
        
        const value = 'hola mundo'
        
        //1 Simular el input change
        wrapper.find('input').simulate('change', { target: { value}});

        //2. Simular el submit del form
        wrapper.find('form').simulate('submit', { preventDefault(){} })

        //3. llamar el setCategories
        expect (setCategories).toHaveBeenCalled();
        // expect (setCategories).toHaveBeenCalledTimes(1);
        // expect (setCategories).toHaveBeenCalledWith(expect.any(Function)); llamado de alguna fun


        //4. el valor del input debe estar ''
        expect( wrapper.find('input').prop('value') ).toBe('');
 
      })
    
})
