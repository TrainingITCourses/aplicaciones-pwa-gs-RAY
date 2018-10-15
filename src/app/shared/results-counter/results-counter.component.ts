import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { LaunchesState } from './../../reducers/launch/launch.reducer';
import { Store } from '@ngrx/store';
import { VersionState } from '../../reducers/version/version.reducer';

@Component({
  selector: 'app-results-counter',
  templateUrl: './results-counter.component.html',
  styleUrls: ['./results-counter.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultsCounterComponent implements OnInit {

  constructor(private storeLaunches: Store<LaunchesState>,
              private storeVersion: Store<VersionState>) { }

  public launches$;
  public version$;

  ngOnInit() {
    this.launches$ = this.storeLaunches.select('launch');
    this.version$ = this.storeVersion.select('version');
  }

}
