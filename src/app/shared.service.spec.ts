import { TestBed } from '@angular/core/testing';

import { SharedService } from './shared.service';

describe('SharedService', () => {
  let service: SharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call the mySharedFunction func', () => {    
    spyOn(service, 'mySharedFunction').and.callThrough();
    service.mySharedFunction();
    expect(service.mySharedFunction).toHaveBeenCalled();
  });
});
