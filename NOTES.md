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

