import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SearchCriteriaComponent } from './shared/search-criteria/search-criteria.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchValuesComponent } from './shared/search-values/search-values.component';
import { LaunchesComponent } from './launches/launches.component';
import { ResultsCounterComponent } from './shared/results-counter/results-counter.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { LaunchEffects } from './reducers/launch/launch.effects';
import { AgencieEffects } from './reducers/agencie/agencie.effects';
import { TypeMissionEffects } from './reducers/type-mission/type-mission.effects';
import { TypeStatusEffects } from './reducers/type-status/type-status.effects';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchCriteriaComponent,
    SearchValuesComponent,
    LaunchesComponent,
    ResultsCounterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([LaunchEffects, AgencieEffects, TypeMissionEffects, TypeStatusEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
