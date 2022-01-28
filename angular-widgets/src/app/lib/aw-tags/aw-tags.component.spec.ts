import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AwTagsComponent } from './aw-tags.component';

describe('AwTagsComponent', () => {
  let component: AwTagsComponent;
  let fixture: ComponentFixture<AwTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AwTagsComponent ],
      imports: [ BrowserAnimationsModule ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AwTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not have any tags', () => {
    expect(component.tags.length).toEqual(0);
  })

  it('Should add tag', () => {
    // Recup le champ input
    const input: DebugElement = fixture.debugElement.query(By.css('input'));

    // Vérife que l'input a été récup
    expect(input).toBeTruthy();

    // insere Tag 1 dans l'input et appuie sur ENTRER
    input.nativeElement.value = 'Tag 1';
    input.triggerEventHandler('keyup.enter', {target: input.nativeElement});

    fixture.detectChanges();

    // Espoion qui surveille l'utilisation de la methode add 
    spyOn(fixture.componentInstance , 'add');
    fixture.componentInstance.add(new Event('keyup.enter'));

    // Vérife si le tag a bien été ajouté 
    expect(component.tags.length).toEqual(1);

    // Vérifie que le valeur Tag 1 est bien dans le tableau
    expect(component.tags[0]).toEqual('Tag 1');

    // Verifie que la fonction add a bien été lancé 1 fois 
    expect(fixture.componentInstance.add).toHaveBeenCalled();
    expect(fixture.componentInstance.add).toHaveBeenCalledTimes(1);
  })
});
