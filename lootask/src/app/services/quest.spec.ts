import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { QuestService } from './quest'; 

describe('QuestService', () => {
  let service: QuestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient()] 
    });
    service = TestBed.inject(QuestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});