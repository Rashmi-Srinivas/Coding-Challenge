
const HtmlScreenshotReporter = require('../node_modules/protractor-jasmine2-screenshot-reporter');
const jasmineReporters = require('../node_modules/jasmine-reporters');

const screenshotReporter = new HtmlScreenshotReporter({
  cleanDestination: true,
  dest: 'screenshots',
 pathBuilder(currentSpec) {
    return currentSpec.description.replace(/\s+|[^a-zA-Z0-9]/g, '_').toLowerCase();
  },
});

exports.config = {
  directConnect:true,
  specs: ['london.e2e.js'],
  
 capabilities: {
   browserName: 'chrome',
   chromeOptions: {
     args: ['--no-sandbox'],
  },
},

params: {
  basic_url: 'https://www.london-theater-tickets.com/',
  },

  framework: 'jasmine2',
  useAllAngular2AppRoots: true,
  showColors: true,
  jasmineNodeOpts: {
    defaultTimeoutInterval: 2500000,
    // silent option: no protractor dots
    print: () => {},
  },
  beforeLaunch() {
    return new Promise((resolve) => {
      screenshotReporter.beforeLaunch(resolve);
    });
  },
  onPrepare: () => {
    browser.driver.manage().window().maximize();
    jasmine.getEnv().addReporter(new jasmineReporters.TapReporter());
    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
      savePath: 'results',
      filePrefix: 'e2e-',
      consolidateAll: false,
    }));
    jasmine.getEnv().addReporter(screenshotReporter);
    browser.ignoreSynchronization = true;
  },
  afterLaunch(exitCode) {
    return new Promise((resolve) => {
      screenshotReporter.afterLaunch(resolve.bind(this, exitCode));
    });
  },
};

