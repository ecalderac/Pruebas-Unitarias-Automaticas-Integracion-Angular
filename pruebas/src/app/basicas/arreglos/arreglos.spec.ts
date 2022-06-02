import { obtenerRobots } from "./arreglos";


//Como saltar pruebas en archivo spec, solo se debe de agregar una x adelante del describe o del it: xdescribe, xit.

describe('Pruebas de arreglos', () => {

    it('Debe de retornar al menos 3 robots', () => {

        const res = obtenerRobots();

        expect(res.length).toBeGreaterThanOrEqual(3); //Condicion para que sea mayor o igual

    });


    it('Debe de existir MegaMan y Ultron', () => {

        const res = obtenerRobots();

        expect(res).toContain('Megaman'); //Condicion para que sea mayor o igual
        expect(res).toContain('Ultron');

    });

});
