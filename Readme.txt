In this project, I created three components, one service, one model, and a file for containing constants.

The three components are header, code-list and add-code. The header is used for easy navigation and it contains two navigation menu item: View Codes and Add Code. By default, the View Codes already displays. Whenever the user typed in the wrong url, View Codes also displays.

By default, the View Codes component displays all budget codes in descreasing order of fiscal year. The reason for using descreasing order is that people are usually more interested in the things that are in the future. This window also contains functionality for the users to search and sort. Search functionality includes searching by fiscal year, budget code or budget title. Search by fiscal year is by full-match, while the other two allow matching part of an entire budget code or title. Matching with text (budget code or title) is case-insensitive. Sort functionality includes sort the three fields by either descending or ascending orders.

The Add Code component allows the users to add a new budget code by filling out a form with three entries: Fiscal Year, Budget Code and Budget Title. All three fields are required and have validation capabilities. For Fiscal Year, I set the allowed years to be between 1970 and 2099 since this is more reasonable year range. Too earlier or too advanced in a date may not be relevant for this function. For budget code, I allowed it to be between 5 to 10 characters. This is decision is made by studying the codes obtained from the get request, and then giving a little margin (i.e. making the range a little wider). Budget title's range is between 3 and 50 characters since too short a title cannot be very meaningful and too long a title may not be called a title.

In Add Code window, if the users try to add an existing budget code, it will show an error message alert, and if the adding operation is successful it will show corresponding alert.

The Code service is used to handle "get" and "post" API request, and it is also the single source of truth for View Codes page's data source. It also has an observable error information for POST errors that Add Code can subscribe to in order to get error message for displaying.

The budget-code model as its name implies is for defining budget code. It does not have budgetCodeId since this field will be generated automatically in the backend. This model is used as the data type in code.service.ts and code-list.component.ts.

The constants.ts file is used to contain constants such as the urls used in GET and POST, as well as the search and sort options.
