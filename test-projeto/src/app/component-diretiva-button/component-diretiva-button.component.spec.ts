import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentDiretivaButtonComponent } from './component-diretiva-button.component';

describe('ComponentDiretivaButtonComponent', () => {
  let component: ComponentDiretivaButtonComponent;
  let fixture: ComponentFixture<ComponentDiretivaButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentDiretivaButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentDiretivaButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
