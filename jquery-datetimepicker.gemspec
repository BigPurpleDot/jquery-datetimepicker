require File.expand_path('../lib/jquery-datetimepicker/version', __FILE__)

Gem::Specification.new do |s|
  s.name        = 'jquery-datetimepicker'
  s.date        = '2013-06-03'
  s.summary     = "Date and Time Picker into one!"
  s.description = "Simple pop up widget for picking a date and time. Also can set reminders and alerts"
  s.authors     = ["Aldo Sarmiento", "Chris Kendrick", "Clifford Simon"]
  s.email       = 'cliff@bigpurpledot.com'
  s.homepage    = 'https://github.com/BigPurpleDot/jquery-datetimepicker'

  s.files       = `git ls-files`.split("\n")
  s.version     = JqueryDatetimepicker::VERSION
  s.require_paths = ["lib"]
end