import { shallow } from 'enzyme';
import React from 'react';
import { GifGrid } from "../../components/GifGrid";
import { useFetchGifs } from '../../hooks/useFetchGifs';
jest.mock('../../hooks/useFetchGifs')

describe('Pruebas en <GifGrid />', () => {

    const category = 'Vegeta'

    test('debe mostrarse ok', () => {
         
        
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow (<GifGrid  category={category} /> );

        expect(wrapper).toMatchSnapshot();

    });


    test('debe mostrar items cuando cargan imganes de useFetchGifs', () => {
        
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'cualquier cosa'
        }]
        
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        
        const wrapper = shallow (<GifGrid  category={category} /> );

        expect(wrapper).toMatchSnapshot()
;       

    });

})