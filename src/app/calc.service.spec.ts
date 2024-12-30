import { TestBed } from '@angular/core/testing';

import { CalcService } from './calc.service';
import { SharedService } from './shared.service';

describe('CalcService', () => {
  let calcService: CalcService;
  let sharedService: SharedService;

  beforeEach(() => {
    const sharedServiceSpy = jasmine.createSpyObj('SharedService', ['mySharedFunction']);
    TestBed.configureTestingModule({
      providers: [        
        { provide: SharedService, useValue: sharedServiceSpy }
      ]
    });
    sharedService = TestBed.inject(SharedService);
    calcService = TestBed.inject(CalcService);
  });

  it('should be created', () => {
    expect(calcService).toBeTruthy();
  });

  it('should multiply two numbers', () => {    
    expect(calcService.multiply(2, 3)).toEqual(6);
  });
});
