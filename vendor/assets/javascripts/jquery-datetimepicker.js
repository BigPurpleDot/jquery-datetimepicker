(function($) {
  $.fn.dateTimePicker = function(opts) {
    var thresholdDictionary = {
      'minute'  : 'Minutes before',
      'hour'    : 'Hours before',
      'day'     : 'Days before',
      'week'    : 'Weeks before'
    }

    var methods = {
      insertCalendar: function(element, dateTimePicker) {
        methods.bindMethods(element, dateTimePicker);
        element.data('activeDateTimePicker', true);
        // Add datepicker
        dateTimePicker.find('.reminder-date-add').datepicker({
          onSelect: function(dateText, _datepickerInstance) {
            options.onSelectDate.apply(element, [dateText, _datepickerInstance, this]); // 'this' refers to associated input field (see docs for jQuery-UI datepicker)
          },
          defaultDate: (typeof(options.defaultDate) == 'function') ? options.defaultDate.apply(element) : options.defaultDate
        });

        // convenience method for getting to datepicker element
        dateTimePicker.dtElement = dateTimePicker.find('.reminder-date-add');

        if (options.hideAlertUI) {
          dateTimePicker.find('.add-alert-container').hide();
          dateTimePicker.find('.alert-add').hide();
        } else {
          // Show UI if there are alerts set by default if (dateTimePicker.alerts.length > 0)
          // Set default alerts
          var defaultAlerts;
          if (typeof(options.defaultAlerts) == 'function') {
            defaultAlerts = options.defaultAlerts.apply(element) || [];
          }
          else if (typeof(options.defaultAlerts) == 'array') {
            defaultAlerts = options.defaultAlerts;
          }

          $.each(defaultAlerts, function(i, _alert) {
            dateTimePicker.setAlert(_alert.time, _alert.threshold, _alert.data);
          });

          // Show UI if there are alerts set by default
          if (dateTimePicker.alerts.length > 0) {
            dateTimePicker.find('.alert-trigger-container .slider').addClass('on');
            dateTimePicker.find('.alert-add').show();
          }
        }

        // Insert the calendar into the DOM
        if (typeof(options.insert) == 'function') {
          options.insert.apply(element, [dateTimePicker]);
        }
        else if (typeof(options.insert) == 'string') {
          $(options.insert).append(dateTimePicker);
        }
        else {
          element.append(dateTimePicker);
        }

        // Pick alert threshold (e.g. minutes, hours, days, weeks)
        dateTimePicker.find('.alert-before ul li').click(function() {
          dateTimePicker.find('.alert-before .selected').replaceWith(
            $(this).find('a').clone().addClass('selected')
          );
        });

        // Set default time
        if (typeof(options.defaultTime) == 'function') {
          dateTimePicker.setTime(options.defaultTime.apply(element));
        }else{
          dateTimePicker.setTime(options.defaultTime);
        }
      },
      bindMethods: function(element, dateTimePicker) {
        dateTimePicker.getDateTime = methods.getDateTime.bind(dateTimePicker);
        dateTimePicker.getDate = methods.getDate.bind(dateTimePicker);
        dateTimePicker.getTime = methods.getTime.bind(dateTimePicker);
        dateTimePicker.getAlerts = methods.getAlerts.bind(dateTimePicker);

        dateTimePicker.setTime = methods.setTime.bind(dateTimePicker);
        dateTimePicker.setAlert = methods.setAlert.bind(dateTimePicker);
        dateTimePicker.removeAlert = methods.removeAlert.bind(dateTimePicker);
        dateTimePicker.destroy = methods.destroy.bind(dateTimePicker);
        dateTimePicker.thresholdDictionary = thresholdDictionary;
        dateTimePicker.alerts = [];
        dateTimePicker.element = element;

        dateTimePicker.bind('clickoutside', function(e) {
          //*****************************************************
          // datepicker removes some elements from the dom, and
          // that triggers clickoutside. So we need to check for elements
          // that have been removed from the DOM.

          if ($(e.target).parents('.ui-datepicker-header').length > 0) return; // Cycling through months
          if ($(e.target).parents('.alert-record').length > 0) return;  // Removal of alerts
          //*****************************************************

          // Looks like we're clear to remove
          if (options.onClickOutside == 'cancel') {
            options.onCancel.apply(element, [dateTimePicker]);
          } else if (options.onClickOutside == 'OK') {
            options.onOK.apply(element, [dateTimePicker]);
          }
          dateTimePicker.destroy();
        });

        dateTimePicker.find('.clock-down-arrow,.clock-up-arrow').click(function () {
          methods.changeTime.apply($(this), [dateTimePicker]);
        });

        // Cancel button
        dateTimePicker.find('.cancel').click(function() {
          options.onCancel.apply(element, [dateTimePicker]);
          dateTimePicker.destroy();
        });

        // OK button
        dateTimePicker.find('.ok').click(function() {
          options.onOK.apply(element, [dateTimePicker]);
          dateTimePicker.destroy();
        });

        // Toggle alerts callback
        dateTimePicker.find('.alert-trigger-container').click(function(e){
          var slider = $(this).find('.slider');
          slider.toggleClass("on");

          if(slider.hasClass("on")) {
            dateTimePicker.find('.alert-add').show();
          } else {
            // Destroy all alerts if use decides to hide UI
            dateTimePicker.find('.alert-add').hide();

            // callback for onRemoveAlert
            $.each($(dateTimePicker.alerts), function(i, _alert) {
              dateTimePicker.removeAlert($(_alert['recordElement']));
            });
          }
        });

        // Create alert callback
        dateTimePicker.find('.btn-add-alert').click(function(){
          var alertTime = dateTimePicker.find('.add-reminder-time-input input').val();
          var alertThreshold = dateTimePicker.find('.alert-before .selected').data('threshold');
          dateTimePicker.setAlert(alertTime, alertThreshold);
        });
      },
      setAlert: function(alertTime, alertThreshold, _data) {
        var alertRecord = $("<div class='alert-record'><span class='alert-time'>" + alertTime + "</span> <span data-threshold-value='"+alertThreshold+"' class='alert-threshold'>" + (this.thresholdDictionary[alertThreshold] || alertThreshold) + "</span></div>");
        var cancelAlert = $("<span class='cancel'>X</span>");

        var dateTimePicker = this;
        cancelAlert.click(function() {
          dateTimePicker.removeAlert($(this).closest('.alert-record'));
        });

        alertRecord.append(cancelAlert);
        dateTimePicker.find('.scheduled-alerts').append(alertRecord);

        var alertObject = methods.buildAlertObject(alertRecord);
        dateTimePicker.alerts.push(alertObject);

        // Custom data members for alert (can be set using defaultAlerts option)
        if (_data) {
          $.each(_data, function(attr, value) {
            alertRecord.attr("data-"+attr, value);
            alertRecord.data(attr, value);
          });

          alertObject.data = _data;
        }

        options.onSetAlert.apply(alertRecord, [alertObject]);

        return alertObject;
      },
      removeAlert: function(alertDOMObject) {
        // Note: Have to use [0] to get DOM element out of jQuery object (http://stackoverflow.com/questions/6325671/jquery-inarray-locating-html-element)
        var arrayPosition = $.inArray(alertDOMObject[0], alertDOMObject.parent('.scheduled-alerts').children('.alert-record'));

        options.onRemoveAlert.apply(this.alerts[arrayPosition]['recordElement'], [this.alerts[arrayPosition]]);

        alertDOMObject.remove(); // remove it from DOM
        this.alerts.splice(arrayPosition, 1); // Remove it from alerts array
      },
      buildAlertObject: function(alertRecord) {
        var alertTime = parseInt($(alertRecord).find('.alert-time').html());
        var alertThreshold = $(alertRecord).find('.alert-threshold').data('threshold-value');
        return {time: alertTime, threshold: alertThreshold, recordElement: alertRecord};
      },
      destroy: function() {
        this.element.data('activeDateTimePicker', false);
        this.remove();
      },
      defaultTime: function() {
        var today=new Date();
        var hour = today.getHours() + 1 > 24 ? 0 : today.getHours() + 1
        return methods.toTimeObject(hour, 0);
      },
      toTimeObject: function(hour, minute, ampm) {
        var m1,m2;
        hour = parseInt(hour);
        minute = parseInt(minute);

        if (hour >= 12) {
          if (hour != 12) hour = hour - 12;
          if (!ampm) ampm = 'pm';
        }
        else if (hour <= 11) {
          if (hour == 0) hour = 1;
          if (!ampm) ampm = 'am';
        }

        if (minute > 10) {
          m1 = parseInt((""+minute)[0]);
          m2 = parseInt((""+minute)[1]);
        } else {
          m1 = 0;
          m2 = minute;
        }

        return { "hour" : hour,
                 "minuteOne" : m1,
                 "minuteTwo" : m2,
                 "ampm" : ampm };
      },
      setTime: function(timeObject) {
        if (!this.time) this.time = methods.defaultTime();
        $.extend(this.time, timeObject);

        this.find('.clock-hour-one .clock-value').html(this.time['hour']);
        this.find('.clock-minute-one .clock-value').html(this.time['minuteOne']);
        this.find('.clock-minute-two .clock-value').html(this.time['minuteTwo']);
        this.find('.clock-ampm .clock-value').html(this.time['ampm']);
      },
      changeTime: function(dateTimePicker) {
        var value = parseInt($(this).siblings('.clock-value').html());
        var min = parseInt($(this).closest('[data-min]').data('min') || '0');
        var max = parseInt($(this).closest('[data-max]').data('max') || '0');
        var _type = $(this).closest('[data-clock-value]').data('clock-value');
        var next;

        if (_type == 'ampm') {
          next = ($(this).siblings('.clock-value').html() == 'am' ? 'pm' : 'am');
        } else {
          if ($(this).hasClass('clock-up-arrow')) {
            next = ((value + 1) > max) ? min : value + 1;
          } else {
            next = ((value - 1) < min) ? max : value - 1;
          }
        }

        dateTimePicker.time[_type] = next;
        dateTimePicker.setTime();
      },
      getDateTime: function() {
        var date = this.dtElement.datepicker('getDate');
        var time = this.time;
        var minute = parseInt(time.minuteOne + "" + time.minuteTwo);
        var hour = parseInt(time.hour);

        if (hour < 12 && time.ampm == 'pm'){
          hour = hour + 12;
        }
        else if (hour == 12 && time.ampm == 'am') {
          hour = 0;
        }

        date.setHours(hour);
        date.setMinutes(minute);
        return date;
      },
      getDate: function() {
        var d = this.dtElement.datepicker('getDate');
        return (d.getMonth() + 1) + '/' + d.getDate() + '/' + d.getFullYear();
      },
      getTime: function() {
        return this.time;
      },
      getAlerts: function() {
        return this.alerts;
      }
    };

    var cal = '<div class="arrow_box-ca calendar-main-container"><div class="calender-container"> <div class="reminder-date-add"> </div> <ul class="reminder-time-set"> <li class="clock-hour-one" data-min="1" data-max="12" data-clock-value="hour"> <div class="clock-up-arrow"></div> <div class="clock-value">12</div> <div class="clock-down-arrow"></div> </li> <li class="clock-operator">:</li> <li class="clock-minute-one" data-max="5" data-clock-value="minuteOne"> <div class="clock-up-arrow"></div> <div class="clock-value">0</div> <div class="clock-down-arrow"></div> </li> <li class="clock-minute-two" data-max="9" data-clock-value="minuteTwo"> <div class="clock-up-arrow"></div> <div class="clock-value">0</div> <div class="clock-down-arrow"></div> </li> <li class="clock-ampm" data-clock-value="ampm"> <div class="clock-up-arrow"></div> <div class="clock-value">pm</div> <div class="clock-down-arrow"></div> </li> </ul> <div class="add-alert-container"> <div class="alerts-label">Alerts</div> <div class="alert-trigger-container"> <div class="alert-trigger"> <div class="slider off"></div> </div> <div class="trigger-labels"> <span class="pull-left">OFF</span> <span class="pull-right">ON</span> <br style="clear:both;"> </div> </div> <br style="clear:both;"> <div class="scheduled-alerts"></div> </div> <div class="alert-add"> <div class="a-label">Alerts</div> <div class="alert-settings"> <ul> <li class="add-reminder-time-input"><input type="text" value="5"></li> <li class="alert-before"> <a href="#" class="selected" data-format="M" title="Min" data-threshold="minute"><span class="alert-when">Minutes</span> <span class="before-label">before</span></a> <ul><li><a href="#" data-format="M" title="Minutes" data-threshold="minute"><span class="alert-when">Minutes</span> <span class="before-label">before</span></a></li><li><a href="#" title="Hours" data-format="H" data-threshold="hour"><span class="alert-when">Hours</span> <span class="alert-when">before</span></a></li> <li><a href="#" title="Days" data-format="D" data-threshold="day"><span class="alert-when">Days</span> <span class="before-label">before</span></a></li> <li><a href="#" title="Weeks" data-format="W" data-threshold="week"><span class="alert-when">Weeks</span> <span class="before-label">before</span></a></li> </ul> </li> <li class="btn-add-alert">+</li> <br style="clear:both;"> </ul> </div> </div> </div><div class="actions"><span class="cancel">Cancel</span><span class="ok">OK</span></div></div>';

    var options = $.extend({
      onClickOutside: 'OK', // 'OK' or 'cancel'
      onSelectDate: $.noop, // (optional) When user clicks on a date. Passes dateText, datepicker instance, and associate input field as arguments.
      onSetAlert: $.noop, // (optional) passes added alert as argument
      onRemoveAlert: $.noop, // (optional) passes removed alert and alert instance as argument
      onCancel: $.noop,
      onOK: $.noop,
      defaultDate: null,
      defaultTime: null, // (optional) {hour: 12, minuteOne: 0, minuteTwo: 5, ampm: 'pm'} OR function that returns object
      defaultAlerts: $.noop, // (optional) [{time: 5, threshold: 'Mins', data : {'alert-id' : 1}}, {time: 10, threshold: 'Days'}]
      insert: null, // (optional) css id or function where you want to add the widget
      hideAlertUI: null
    }, opts);

    return $(document).on('click', this.selector, function(e) {
      if (!$(this).data('activeDateTimePicker')) {
        methods.insertCalendar($(this), $(cal));
      }

      e.stopPropagation();
    });
  }
})(jQuery);