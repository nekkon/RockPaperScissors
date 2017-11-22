import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { ResultComponent } from './result.component';
import { RouterTestingModule } from "@angular/router/testing";
import { Game } from "../../providers/game";

describe('ResultComponent', () => {
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        RouterTestingModule.withRoutes([{path:'',component:ResultComponent}])
      ],
      declarations: [ ResultComponent ],
      providers: [Game]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render result ui', async(() => {
    const fixture = TestBed.createComponent(ResultComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#menu')).toBeTruthy();
  }));
  it('should render result player', inject([Game], (service: Game) => {
    service.result = 'player';
    const fixture = TestBed.createComponent(ResultComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#player').textContent).toContain('YOU WON!!!');
  }));
  it('should render result computer', inject([Game], (service: Game) => {
    service.result = 'computer';
    const fixture = TestBed.createComponent(ResultComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#computer').textContent).toContain('YOU LOST!! TRY AGAIN');
  }));
  it('should render result draw', inject([Game], (service: Game) => {
    service.result = 'draw';
    const fixture = TestBed.createComponent(ResultComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#draw').textContent).toContain('DRAW! TRY AGAIN!!!');
  }));
});
