import { HttpClientModule } from "@angular/common/http";
import { TestBed, ComponentFixture } from "@angular/core/testing";
import { MedicoComponent } from "./medico.component";
import { MedicoService } from "./medico.service";

//TestBed es como el @ngmodule del app.module.ts se pueden ocupar casi las mismas propiedades
//ComponentFixture puede acceder al DOM, html y todo eso


describe('Medico Component', () => {

    let component: MedicoComponent;
    let fixture: ComponentFixture<MedicoComponent>;

    beforeEach( () => {
        //es casi similar al @ngmodule del app.module.ts
        TestBed.configureTestingModule({
            declarations: [ MedicoComponent ],
            providers: [MedicoService],
            imports: [HttpClientModule]
        })

        fixture = TestBed.createComponent( MedicoComponent );
        component = fixture.componentInstance;

    })

    it('Debe de crearse el componente', () => {

        expect(component).toBeTruthy();

    });


    it('Debe de retornar el nombre del medico', () => {

        const nombre = 'Juan';
        const res = component.saludarMedico(nombre);

        expect(res).toContain(nombre);

    });

});