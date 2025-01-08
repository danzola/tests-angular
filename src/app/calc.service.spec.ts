import { TestBed } from '@angular/core/testing';
import { CalcService } from './calc.service';
import { SharedService } from './shared.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MOCK_DATA } from './mock-data';

describe('CalcService', () => {
  let calcService: CalcService;
  let sharedService: SharedService;
  let testingController: HttpTestingController;

  beforeEach(() => {
    const sharedServiceSpy = jasmine.createSpyObj('SharedService', ['mySharedFunction']);
    TestBed.configureTestingModule({
      providers: [        
        { provide: SharedService, useValue: sharedServiceSpy }
      ],
      imports: [HttpClientTestingModule]
    });
    sharedService = TestBed.inject(SharedService);
    calcService = TestBed.inject(CalcService);
    testingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(calcService).toBeTruthy();
  });

  it('should multiply two numbers', () => {    
    expect(calcService.multiply(2, 3)).toEqual(6);
  });

  it('should get all data from server', () => {
    calcService.getAllPosts().subscribe((data) => {
      expect(data).toBeTruthy();
      expect(data.length).toBe(2);
      const post = data.find(p => p.id === 2);
      expect(post).toBeDefined();
        if (post) {
          expect(post.title).toBe('qui est esse');
      }
    });

    const mockReq =  testingController.expectOne('https://jsonplaceholder.typicode.com/posts');
    expect(mockReq.request.method).toBe('GET');
    mockReq.flush(MOCK_DATA);   
  });

  afterEach(() => {
    testingController.verify();
  });

});
