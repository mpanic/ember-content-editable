import Ember from 'ember';

export default Ember.Controller.extend({
  name: "<b>yo<i>lo</i></b> yup",

  filter(currentValue, event) {
    var k = event.which;
    if (k <= 48 || k >= 58) {
      event.preventDefault();
    }
  },

  processor(s) {
    if (s.indexOf('X') > -1) {
      return s.substring(0, s.indexOf('X'));
    } else {
      return s;
    }
  }
});
