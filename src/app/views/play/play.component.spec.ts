import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayComponent } from './play.component';
import { RouterTestingModule } from "@angular/router/testing";
import { Game } from "../../providers/game";

describe('PlayComponent', () => {
  let component: PlayComponent;
  let fixture: ComponentFixture<PlayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        RouterTestingModule.withRoutes([{path:'',component:PlayComponent}])
      ],
      declarations: [ PlayComponent ],
      providers: [Game]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should render game ui', async(() => {
    const fixture = TestBed.createComponent(PlayComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#rock')).toBeTruthy();
    expect(compiled.querySelector('#paper')).toBeTruthy();
    expect(compiled.querySelector('#scissors')).toBeTruthy();
  }));
});
