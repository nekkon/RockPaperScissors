import { TestBed, inject } from '@angular/core/testing';
import {
  RouterTestingModule
} from '@angular/router/testing';
import { Game } from './game';
import { appRoutes } from "../app.routing";

describe('Game', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports:[
          RouterTestingModule.withRoutes(appRoutes)
        ],
        providers: [Game]
      });
    });

    it('should be created', inject([Game], (service: Game) => {
      expect(service).toBeTruthy();
    }));

    it('should draw', inject([Game], (service: Game) => {
      expect(service.compete(0,0)).toEqual('draw');
    }));

    it('should player win', inject([Game], (service: Game) => {
      expect(service.compete(0,2)).toEqual('player');
      expect(service.compete(1,0)).toEqual('player');
      expect(service.compete(2,1)).toEqual('player');
    }));

    it('should computer win', inject([Game], (service: Game) => {
      expect(service.compete(2,0)).toEqual('computer');
      expect(service.compete(0,1)).toEqual('computer');
      expect(service.compete(1,2)).toEqual('computer');
    }));
});
