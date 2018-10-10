import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class ApiService {

  constructor(private httpClient: HttpClient) {}

  // https://programandoointentandolo.com/2017/07/estructuras-condicionales-java.html
  // Operador terniario
  public getLaunches$ = () : Observable<any> => {
    const launches = localStorage.getItem('launches');
    if (launches) {
      return of(JSON.parse(launches));
    } else {
      return this.httpClient.get('../../assets/launchlibrary.json')
        .pipe(
          map((res:any) => res.launches.map(launch => ({
            id: launch.id,
            name: launch.name,
            agencie: launch.rocket.agencies ? launch.rocket.agencies.length > 0 ? launch.rocket.agencies[0].id : 0: 0,
            status: launch.status,
            typeMission: launch.missions.length > 0 ? launch.missions[0].type : 0,
          }))
          ),
          tap(launches => localStorage.setItem('launches', JSON.stringify(launches)))
        );
    }
  }

  public getAgencies$ = () : Observable<any> => {
    return this.httpClient.get('../../assets/launchagencies.json')
      .pipe(map((res:any) => res.agencies.map(agencie => ({
        id: agencie.id, 
        name: agencie.name
      }))
    ));
  }

  public getTypesMissions$ = () : Observable<any> => {
    return this.httpClient.get('../../assets/launchmissions.json')
      .pipe(map((res:any) => res.types.map(typeMission => ({
        id: typeMission.id,
        name: typeMission.name
      }))
    ));
  }

  public getTypesStatus$ = () : Observable<any> => {
    return this.httpClient.get('../../assets/launchstatus.json')
      .pipe(map((res:any) => res.types.map(typeStatus => ({
        id: typeStatus.id,
        name: typeStatus.description
      }))
    ));
  }

}