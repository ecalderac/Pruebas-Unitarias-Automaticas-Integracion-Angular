import { Jugador2 } from "./jugador2"

 


 describe('Jugador 2 Emit', () => {

    let jugador: Jugador2;

    beforeEach( () => jugador = new Jugador2() );
    
    it('Debe de emitir un evento cuando recibe daño', () => {

        let nuevoHP = 0;

        //se suscribe al evento para cuando este se emita se logre detectar y asignar el nuevo valor correspondiente
        jugador.hpCambia.subscribe( hp => {
            nuevoHP = hp;
        })

        jugador.recibeDanio(1000); //llamando a la funcion indicando que se hizo 1000 de daño al jugador

        expect(nuevoHP).toBe(0); //evaluando prueba si la vida llego a 0

    });

    it('Debe de emitir un evento cuando recibe daño y sobrevivir si es menos de 100', () => {

        let nuevoHP = 0;

        jugador.hpCambia.subscribe( hp => nuevoHP = hp); //misma funcion que la de arriba pero se deja solo en una linea

        jugador.recibeDanio(50); 

        expect(nuevoHP).toBe(50); 

    });

 });