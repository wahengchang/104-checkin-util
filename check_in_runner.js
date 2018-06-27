const {email, password} = require('./config/user.json')
Feature('search');

Scenario('Login', function* (I) {
  I.amOnPage('/user/signin?m=appcenter');

  within('#signinForm', () => {
    I.fillField('#email', email);
    I.fillField('#pwd', password);
    I.click('#submit');
  });

  I.wait(2)
  I.saveScreenshot('Login-1.png');

  I.amOnPage('/hrm/psc/home.action');
  I.waitForElement('#punchCardBtn');
  I.click('#punchCardBtn');
  I.wait(1)
  I.saveScreenshot('Checkin-1.png');
});

