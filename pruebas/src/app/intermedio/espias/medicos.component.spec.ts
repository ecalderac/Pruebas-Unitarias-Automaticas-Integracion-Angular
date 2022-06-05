import { EMPTY, Observable, throwError } from 'rxjs';
import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { from, of } from 'rxjs';


describe('MedicosComponent', () => {

    let componente: MedicosComponent;

    const spy = jasmine.createSpyObj('HttpClient', { get: of({}) });
    const servicio = new MedicosService(spy);

    beforeEach( () => {
        componente = new MedicosComponent(servicio)
    });
 

    it('Init: Debe de cargar los medicos', () => {

        const medicos = ['medico1', 'medico2', 'medico3'];

        spyOn( servicio, 'getMedicos').and.callFake( () => {
            return from( [ medicos ]);
        });

        componente.ngOnInit();
 
        expect( componente.medicos.length ).toBeGreaterThan(0);
   
    });


    //Comporbandoi que se esta llamando un servicio
    it('Debe de llamar al servidor para agregar un medico', () => {

        const espia = spyOn(servicio, 'agregarMedico').and.callFake(medico => {
            return EMPTY;
        })

        componente.agregarMedico();

        expect(espia).toHaveBeenCalled(); //Esta consultando si se esta llamanda al espia, para comporbar si se esta llamando ono el servicio a evaluar
        //para comporbar se puede comentar lo que esta dentro de funcion en ts de agregar medico

    });

    //comporbando si esta funcionando el agregar un nuevo medico al arreglo
    it('Debe de agregar un nuevo medico al arreglo de medicos', () => { 

        const medico = { id: 1, nombre: 'Juan' };

        spyOn( servicio, 'agregarMedico').and.returnValue( from( [ medico ]));

        componente.agregarMedico();

        expect( componente.medicos.indexOf(medico)).toBeGreaterThanOrEqual(0);

    });


    it('Si falla la adicion, la propiedad mensajeError, debe ser igual al error del servicio', () => { 

        const miError = 'No se pudo agregar al medico';

        spyOn( servicio, 'agregarMedico').and.returnValue(throwError(miError));

        componente.agregarMedico();

        expect( componente.mensajeError ).toBe(miError);

    });


    it('Debe de llamar al servidor para borrar un medico', () => { 

        spyOn( window, 'confirm' ).and.returnValue(true);

        const espia = spyOn(servicio, 'borrarMedico').and.returnValue(EMPTY);

        componente.borrarMedico('1');

        expect( espia ).toHaveBeenCalledWith('1');

    });


    it('NO Debe de llamar al servidor para borrar un medico', () => { 

        spyOn( window, 'confirm' ).and.returnValue(false);

        const espia = spyOn(servicio, 'borrarMedico').and.returnValue(EMPTY);

        componente.borrarMedico('1');

        expect( espia ).not.toHaveBeenCalledWith('1');

    });

});
