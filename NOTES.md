# Landing page modeled after those sites of yesteryear like 'yahoo!'
- Token news feed with pagination. Five days of weather based upon user location. And toast.
    - So weather, news, and notifications using APIs: news.ycombinator.com & newsapi.org.
    - Goals: Modules. How to structure a larger project. And RxJS.

- Application structure: We'll be using Angular modules. One module per each major feature:
    - Tech News
    - Weather
    - Notifications
    - World News
    1. We'll be forced to organize our code.
    2. Modules can have a large impact on how quickly the application starts up.

- Generating modules:
    - The weather feature. All code should be contained. One module, one component, and one service.
    ```javascript
        ng generate module weather
        ng generate component weather/Forecast
        ng generate service weather/Forecast
    ```

- Module properties:
    1. Declarations. Use the CLI to get the declarations array updated automatically.
    2. Imports.
    3. Exports.
    4. Providers. Angular services prior to v6.
    5. (Bootstrap: Only present within the App.module.)

- https://openweathermap.org/api
    - Five day/three hour forecast. Via geographic cordinates.
    - Shift + Enter to write out multi-line statements within a browser console.

- mergeMap/switchMap operator(s):
    1. https://out.stegrider.now.sh/
        - RxJS visualizer. Great tool!

    - Hijack the provided value(s) and controlliing all of the different operators. 
    - We then return an observable. Thus, hijacked. 
    - "Forget the original observable, use this one instead."

    ```javascript
        const { Observable, timer } = Rx;
        const { mergeMap, tap } = RxOperators;

        new Observable((observer) => {
        observer.next(10);
        observer.next(20);
        }).pipe(
            mergeMap((value) => timer(value * 100)),
            tap((value) => console.log(value))
        );
    ```
    - Whenever mergeMap listens to all observables.
    - Whenever switchMap creates a new observable, *all* old observable(s) are deleted.

    2. Why switchMap? e.g.: Well, think of <typeahead />:
        - When we do not care at all about prior requests and simply want to throw them out.

- Pipes:
    - Functions that are leverged directly from a template. Used specifically to format data.
    - Many are built-in to the Angular framework.
    - Additionally, pipes are easy to create. They are referenced in 'export' section of the module.

- Add Bootstrap to an Angular project:
    ```javascript
        npm install bootstrap
    ```
    - Import into styles.css
    ```html
        @import 'bootstrap/dist/css/bootstrap.css';
    ```

- How to wire up services in a Angular module world:
    - Add the service to a module's providers array. (Obsolete.)
    - Use the @injectable decorator.

- Introducing 'Subjects.'
    - An obseravable and an observer mashed together.
    - Hot by default. It will emit values even without a subscriber.
    - The subject is multicast by default. Operators in pipe run once, regardless on number of observers.
    - NOTE: Think the share() operator.
    - Unicast: Operators in pipe run once for *each* observer.
    - NOTE: Calling pipe returns a new observable that is cold and unicast.

- Other RxJS 'Objects:'
    - Async Subject: Will not emit values unitl marked as 'complete.' And only the last value is emitted.
    - Behavior Subject: Also takes an initial 'seed' value. New subscribers instanly receive the most recent value.
    - Replay Subject: New subscribers also instantly obtain all previously emitted values.

- Notification Service:
    - Append messages. There is persistence involved.
    - We do not want to create a new subject. We want one subject.
    1. The scan operator. It works like reduce, of sorts.