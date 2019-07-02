import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DataService {

	private goals = new BehaviorSubject<any>(['Behavior Goal 1', 'Behavior Goal 2', 'Behavior Goal 3', 1]);
	goal = this.goals.asObservable();

  constructor() { 
  }

  changeGoal(goal: any) {
	this.goals.next(goal);
  }
}
