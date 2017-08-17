import { browser, $ } from 'protractor';

fdescribe('R+V imprint', () => {

  beforeAll(() => browser.ignoreSynchronization = true);

  it('should display the correct board members', () => {

    browser.get('https://www.ruv.de/impressum');
    const content = $('.standard-content');

    expect(content.getText()).toContain('Dr. Edgar Martin');
    expect(content.getText()).toContain('Frank-Henning Florian');
    expect(content.getText()).toContain('Heinz-Jürgen Kallerhoff');
    expect(content.getText()).toContain('Julia Merkel');
    expect(content.getText()).toContain('Marc René Michallet');
    expect(content.getText()).toContain('Peter Weiler');
  });

  afterAll(() => browser.ignoreSynchronization = false);
});
