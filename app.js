var cc = 'null'
var Pike Place Market = {
  min_customers: 14,
  max_customers: 35,
  average_cups_per_customer: 1.2,
  average_to_go_pounds_per_customer: 0.34
  for (i = 0; i < array.length; i++)
  customers_per_hour: function() {
    return Math.round(Math.random() * (this.max_customers - this.min_customers) + this.min_customers)
  }
  cups_per_hour: function() {
    return Math.round(this.customers_per_hour * this.average_cups_per_customer)
  }
  to_go_pounds_per_hour: function() {
    return Math.round(this.customers_per_hour * this.average_to_go_pounds_per_customer)
  }
  pounds_from_cups: function() {
    return this.cups_per_hour / 16
  }
  total_pounds_per_hour: function() {
    return this.pounds_from_cups + this.to_go_pounds_per_hour
  }

  var hours = {
    sixam = '6:00am '
    sevenam
    eightam
    nineam
    tenam
    elevenam
    twelvepm
    onepm
    twopm
    threepm
    fourpm
    fivepm
    sixpm
    sevenpm
    eightpm
  }
