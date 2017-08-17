import { browser, $ } from 'protractor';

fdescribe('R+V imprint', () => {

  beforeAll(() => browser.ignoreSynchronization = true);

  it('should display the correct board members', () => {

    browser.driver.manage().window().setSize(800, 600);
    browser.get('https://www.ruv.de/impressum');
    const content = $('.standard-content');
    const text = content.getText();

    expect(text).toContain('Dr. Edgar Martin');
    expect(text).toContain('Frank-Henning Florian');
    expect(text).toContain('Heinz-Jürgen Kallerhoff');
    expect(text).toContain('Julia Merkel');
    expect(text).toContain('Marc René Michallet');
    expect(text).toContain('Peter Weiler');
  });

  afterAll(() => browser.ignoreSynchronization = false);
});
