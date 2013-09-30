# jquery-datetimepicker

## Installation

Add this line to your application's Gemfile:

    gem 'jquery-datetimepicker'

Add the following to your Javascript file:

    //= require jquery-datetimepicker

Add the following line to your stylesheet file:

```scss
*= require jquery-datetimepicker
```

## Usage

For an all-in-one date and time picker. Also allows you to toggle on/off alerts.

## API Summary

You can just call dateTimePicker() on any selector, and when clicking on the selector it will bring up the datetimepicker.

```javascript
$('.some-class-name').dateTimePicker();
```

There are many options you can include when calling dateTimePicker. Shown below are all the options and the defaults they are set to

```javascript
$('.some-class-name').dateTimePicker({
	onClickOutside: 'OK', // 'OK' or 'cancel'. Which button you want clicking outside to simulate
	onSelectDate: $.noop, // When user clicks on a date. Passes dateText, datepicker instance, and associate input field as arguments.
	onSetAlert: $.noop, // passes added alert as argument
	onRemoveAlert: $.noop, // passes removed alert and alert instance as argument
	onCancel: $.noop,
	onOK: $.noop,
	defaultDate: null,
	defaultTime: null, // time format to pass in: {hour: 12, minuteOne: 0, minuteTwo: 5, ampm: 'pm'}
	defaultAlerts: $.noop, // alerts format to pass in: [{time: 5, threshold: 'Mins', data : {'alert-id' : 1}}, {time: 10, threshold: 'Days'}]. Threshold can be of the following ['Mins', 'Hours', 'Days', 'Weeks']
	insert: null, // css id or function where you want to add the widget
	hideAlertUI: null, // boolean to show and give the ability to add alerts
  hideTimeUI: null, // boolean to hide the time picker
  hideCalendarUI: null, // boolean to hide the date picker
  horizontalView: null, // (optional) True if you want date and time to have a horizontal view. currently does not work with alerts. will default hideAlertUI to true
  pointer: { // location and offset (in pixels) from the the middle of whichever selected side
    side: 'top', //top, bottom, left, right
    offset: 0
  }
});
```

## Sample

http://evening-coast-9059.herokuapp.com/

## Contributors

Authors under Big Purple Dot
* Clifford Simon
* Aldo Sarmiento
* Chris Kendrick

## Contact

For any questions or concerns, please email cliff@bigpurpledot.com

## License

jquery-datetimepicker is under the MIT license (http://en.wikipedia.org/wiki/MIT_License).
