const timeToWaitExpectedConditions = 15000;
const timeToWait = 5000;
const EC = protractor.ExpectedConditions;

module.exports = class Wait {

  static waitElementPresence(element) {
    browser.wait(EC.presenceOf(element), timeToWaitExpectedConditions);
  }

  static waitElementVisibility(element, scroll = false) {
    if (scroll) {
      browser.executeScript('arguments[0].scrollIntoView();', element.getWebElement());
      this.wait();
    }
    browser.wait(EC.visibilityOf(element), timeToWaitExpectedConditions);
  }

  static waitElementInvisibility(element) {
    browser.wait(EC.invisibilityOf(element), timeToWaitExpectedConditions);
  }

  static wait() {
    browser.sleep(timeToWait);
  }

};
