import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';


describe('Incremendator Component', () => {

    let component: IncrementadorComponent;
    let fixture: ComponentFixture<IncrementadorComponent>;

    beforeEach( () => {
        TestBed.configureTestingModule({
            declarations: [ IncrementadorComponent ],
            imports: [ FormsModule ]
        });

        fixture = TestBed.createComponent(IncrementadorComponent);
        component = fixture.componentInstance;

    });

    it('Debe de mostrar la leyenda', () => {

        component.leyenda = 'Progreso de carga';

        fixture.detectChanges(); //disparar la deteccion de cambios

        const elem: HTMLElement = fixture.debugElement.query( By.css('h3') ).nativeElement;

        expect( elem.innerHTML ).toContain('Progreso de carga')

    });

    it('Debe de mostrar en el input el valor del progreso', () => {

        component.cambiarValor(5);
        fixture.detectChanges();

        //fixture.whenStable se utiliza por que aveces se demora el fixture.detectchanges por lo que no detecta los cambios altiro y arroja error
        fixture.whenStable().then( ()=> {

            const input = fixture.debugElement.query( By.css('input'));
            const elem = input.nativeElement;
    
            console.log(elem);
    
            expect( elem.value ).toBe('55');    

        })

    });

    it('Debe de incrementar/decrementar en 5, con un click en el boton', () => {

        const botones = fixture.debugElement.queryAll( By.css('.btn-primary') );

        //de los botones quiero la primera posicion = botones[0]
        botones[0].triggerEventHandler('click', null); //esta instruccion dispara el evento click en el boton
        expect( component.progreso).toBe(45); //esperando que el valor sea 45 ya que el primer boton resta y el valor por defecto es 50

        botones[1].triggerEventHandler('click', null); //ahora hizo otro click por ende debe de ser 50
        expect( component.progreso).toBe(50);

    });

    it('En el titulo del componente, debe de mostrar el progreso', () => {

        const botones = fixture.debugElement.queryAll( By.css('.btn-primary') );
        botones[0].triggerEventHandler('click', null); 

        fixture.detectChanges(); 
       
        const elem: HTMLElement = fixture.debugElement.query( By.css('h3') ).nativeElement;

        expect( elem.innerHTML ).toContain('45');

    });



});
