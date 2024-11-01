Debouncing 

Debouncing to Reduce API Calls:

Both Google and Flipkart employ debouncing to prevent excessive API calls. Debouncing means that if the user types quickly, the API call is delayed until the typing stops for a few milliseconds (usually 300 ms to 500 ms). This prevents an overload of API requests for every keystroke, ensuring performance is optimized while providing relevant suggestions.


typing slow = 200ms
typing fast = 30ms

Perfomance 
  - iphone pro max = 1letter * 1000 = 14000
  - with debouncing = 3 API calls * 1000 = 3000


  Debouncing with 200ms
   - if difference between 2 key strokes is lessthan 200ms - DECLINE API call
   - greater than 200ms make an API calls

   how did i put in debouncing 
   