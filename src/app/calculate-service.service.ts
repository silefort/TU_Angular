import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculateServiceService {

  constructor() { }

  public calculerPrixBiereAvecTVA(prixHT: number, tva: number) {
    // if (prixHT == 10)
    //   return 12;
    // else
    //   return 39
    return prixHT + (prixHT * tva) / 100;
  }
}
