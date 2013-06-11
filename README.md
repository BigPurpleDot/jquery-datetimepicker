# jquery-datetimepicker

## Installation

Add this line to your application's Gemfile:

    gem 'jquery-datetimepicker'

Add the following to your Javascript file:

    //= require jquery-ui
    //= require jquery-datetimepicker

Add the following line to your stylesheet file:

```scss
@import "jquery-datetimepicker.css";
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
	hideAlertUI: null // boolean to show and give the ability to add alerts
});
```

## Sample

Coming soon

## Contributors

Authors under Big Purple Dot
* Aldo Sarmiento
* Chris Kendrick
* Clifford Simon

## Contact

For any questions or concerns, please email cliff@bigpurpledot.com

## License

jquery-datetimepicker is under the MIT license (http://en.wikipedia.org/wiki/MIT_License).
