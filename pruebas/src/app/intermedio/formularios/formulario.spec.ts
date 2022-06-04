import { FormBuilder } from "@angular/forms";
import { FormularioRegister } from "./formulario"



describe('Formularios', ()=> {

    let componente: FormularioRegister;

    beforeEach( () => {
        componente = new FormularioRegister( new FormBuilder() );
    });

    it('Debe de crear un formulario con dos campos email y password', () => {

        expect( componente.form.contains('email')).toBeTruthy();
        expect( componente.form.contains('password')).toBeTruthy();

    })

    it('El email debe de ser obligatorio', () => {

        const control = componente.form.get('email');
        control.setValue('');
        expect( control.valid).toBeFalsy();

    })

    it('El email debe de ser un correo valido', () => {

        const control = componente.form.get('email');
        control.setValue('ecaldera@gmail.com');
        expect( control.valid).toBeTruthy();

    })

})

/**
 * 
solucion de error en problema de control que arroja:

object is posible null

Abrir y agregar a tsconfig.json"strictNullChecks": falseangularCompilerOptions

{
  ...
  "angularCompilerOptions": {
    "strictNullChecks": false,
    ...
  }
}
 */