import { Injectable } from '@angular/core';
import { Subject, Observable, identity } from 'rxjs';
import { scan } from 'rxjs/operators';
import ICommand from '../interfaces/ICommand';
import RandomGenerator from '../helpers/RandomGenerator';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  input: Subject<ICommand>;
  output: Observable<ICommand[]>;

  constructor() {
    this.input = new Subject<ICommand>();
    this.output = this.input.pipe(
      scan((accumulator: ICommand[], command: ICommand) => {
        if (command.type === 'clear') {
          return accumulator.filter(m => m.id !== command.id);
        } else {
          return [...accumulator, command];
        }
      }, [])
    );
  }

  addSuccess(message: string) {
    const id: number = RandomGenerator.Id();
    this.input.next({
      type: 'success',
      id,
      text: message
    });
    setTimeout(() => {
      this.clearMessage(id)
    }, 5000)
  }

  addError(message: string) {
    const id: number = RandomGenerator.Id();
    this.input.next({
      type: 'error',
      id,
      text: message
    });
    setTimeout(() => {
      this.clearMessage(id)
    }, 5000)
  }

  clearMessage(id: number) {
    this.input.next({      
      type: 'clear',
      id: id
    });
  }
}
