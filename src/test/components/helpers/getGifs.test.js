import { getGifs } from "../../../helpers/getGifs"





describe('Pruebas en getGifs Fetch', () => {
    
    test('Debe de traer 10 elementos',  async() => {
        
        const gifs = await getGifs('Vegeta');
        expect( gifs.length ).toBe(10);
    })

    test('no envia categoria',  async() => {
        
        const gifs = await getGifs('');
        // console.log(gifs) - = []
        expect( gifs.length ).toBe(0);
    })
    
})



