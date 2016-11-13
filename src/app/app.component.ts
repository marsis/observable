import {Observable} from  "rxjs/Observable";
import { Component } from '@angular/core';
import "rxjs/add/observable/range";
import "rxjs/add/operator/map"

@Component({

  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = "Type Script";
  public sequence: Observable<number|string>;

  private exampleDiv: string = "Waiting for Observations";

  constructor() {
    this.getObserv();
    this.getText();
  }
private someText = '';
  private observable = Observable.create((obs) => {
    setTimeout(() => {
      obs.next('First!');
    }, 2000);
    setTimeout(() => {
      obs.next('Second!');
    }, 3000);
    setTimeout(() => {
      obs.next('Third!');
    }, 4000);
    setTimeout(() => {
      obs.complete();
    }, 5000);
  });

  private inputObserver = Observable.create((obs) => {
    let input = this.someText;
    let listener = () => obs.next(input);

    }
  )


  getObserv() {
    this.observable
     /* .map((val) => val += '!')*/
      //.filter((val) => val.length > 3)
      .subscribe((val) => {
          this.exampleDiv += ' ' + val;
        }, () => null,
        () => {
          this.exampleDiv += ' ' + 'Observations complete';
        });
  }
getText(){
  console.log(this.someText);
}

createDelayObserver(text){
  return Observable.create((obs) => {
    let timeout = setTimeout(() => obs)
  })
}

}




  /*


   import {Observable} from  "rxjs/Observable";
   import { Component } from '@angular/core';
   import "rxjs/add/observable/range";
   import "rxjs/add/operator/map"

   @Component({

   selector: 'app-root',
   templateUrl: 'app.component.html',
   styleUrls: ['app.component.css']
   })
   export class AppComponent {
   title = "Type Script";
   public sequence: Observable<number|string>;

   private exampleDiv: string = "Waiting for Observations";

   constructor(){
   this.getObserv();
   }

   private observable = Observable.create((obs) =>{
   setTimeout(() => {
   obs.next({data:'First!'});
   }, 2000);
   setTimeout(() => {
   obs.next({data:'Second!'});
   }, 3000);
   setTimeout(() => {
   obs.next({data:'Third!'});
   }, 4000);
   setTimeout(() => {
   obs.complete();
   }, 5000);
   });






  getObserv() {
    this.observable
      .map((val) => {
        console.log(val);
       return val.data;
  })
      .subscribe((val) => {
        this.exampleDiv += ' ' + val;
      }, () => null,
      () => {
        this.exampleDiv += ' ' + 'Observations complete';
      });
  }
}

*/
/*

 import { Component } from '@angular/core';
 import {Observable} from  "rxjs/Observable";
 import "rxjs/add/observable/range";
 import "rxjs/add/operator/map"

 @Component({

 selector: 'app-root',
 templateUrl: 'app.component.html',
 styleUrls: ['app.component.css']
 })
 export class AppComponent {
 title = "Type Script";
 public sequence: Observable<number|string>;

 private exampleDiv: string = "Waiting for Observations";

 constructor(){
 this.getObserv();
 }

 private observable = Observable.create((obs) =>{
 setTimeout(() => {
 obs.next('hello World!');
 }, 2000);
 setTimeout(() => {
 obs.error(new Error('Error!!!'));
 }, 3000);
 setTimeout(() => {
 obs.complete();
 }, 5000);
 });
 getObserv() {
 this.observable.subscribe((val) => {
 this.exampleDiv += ' ' + val;
 }, (err) => {
 this.exampleDiv += ' ' + err.stack;
 },
 () => {
 this.exampleDiv += ' ' + 'Observations complete';
 });
 }
 }

 */


/*


 import { Component } from '@angular/core';
 import {Observable} from  "rxjs/Observable";
 import "rxjs/add/observable/range";
 import "rxjs/add/operator/map"

 @Component({

 selector: 'app-root',
 templateUrl: 'app.component.html',
 styleUrls: ['app.component.css']
 })
 export class AppComponent {
 title = "Type Script";
 public sequence: Observable<number|string>;

 private exampleDiv: string = "Waiting for Observations";

 constructor(){
 this.getObserv();
 }

 private observable = Observable.create((obs) =>{
 setInterval(() => {
 obs.next('hello World!');
 }, 750);
 setTimeout(() => {
 obs.next('HA-HA');
 }, 2000);
 setTimeout(() => {
 obs.complete();
 }, 5000);
 });
 getObserv() {
 this.observable.subscribe((val) => {
 this.exampleDiv += ' ' + val;
 }, () => null,
 () => {
 this.exampleDiv += ' ' + 'Observations complete';
 });
 }
 }


 */
