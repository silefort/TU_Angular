import { TestBed } from '@angular/core/testing';

import { CalculateServiceService } from './calculate-service.service';

describe('CalculateServiceService', () => {
  let service: CalculateServiceService;

  beforeEach(() => {
    // Declaration du test module
    TestBed.configureTestingModule({
      // Dépendances directes de notre module
      imports: [],
      // Composants utilisés dans le template
      declarations: [],
      // Services injectables utilisés
      providers: [],
    });
    service = TestBed.inject(CalculateServiceService);
  });



  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('doit retourner le prix TTC (12) en fonction de la TVA (20) et du prix hors taxes (10)', () => {
    expect(service.calculerPrixBiereAvecTVA(10, 20)).toEqual(12);
  });

  it('doit retourner le prix TTC (39) en fonction de la TVA (30) et du prix hors taxes (30)', () => {
    expect(service.calculerPrixBiereAvecTVA(30, 30)).toEqual(39);
  });
});
