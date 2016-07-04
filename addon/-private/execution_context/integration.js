import Ember from 'ember';

const { $, run } = Ember;

export default function IntegrationExecutionContext(pageObjectNode, testContext) {
  this.pageObjectNode = pageObjectNode;
  this.testContext = testContext;
}

IntegrationExecutionContext.prototype = {
  run(cb) {
    run(() => {
      cb(this);
    });
  },

  click(selector, container) {
    this.$(selector, container).click();
  },

  fillIn(selector, container, text) {
    let element = this.$(selector, container);

    element.val(text);
    element.trigger('input');
    element.change();
  },

  $(selector, container) {
    if (container) {
      return $(selector, container);
    } else {
      return this.testContext.$(selector);
    }
  }
};