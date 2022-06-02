import { usuarioIngresado } from "./booleanos";





describe('Pruebas de Booleanos', () => {

    it('Debe de retornar True', () => {

        const res = usuarioIngresado();
        //expect(res).toBe(true) //Cualquiera de las dos opciones son validas
        expect(res).toBeTruthy() //Se ocupa para comparar booleanos

    });

});