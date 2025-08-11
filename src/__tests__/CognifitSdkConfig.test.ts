import { CognifitSdkConfig } from '../lib/cognifit.sdk.config';

test('Testing CognifitSdkConfig', () => {
  const cognifitSdkConfig = new CognifitSdkConfig();
  expect(cognifitSdkConfig.getAccessToken()).toBe('');

  const accessToken = 'EXAMPLE_ACCESS_TOKEN';
  cognifitSdkConfig.setAccessToken(accessToken);
  expect(cognifitSdkConfig.getAccessToken()).toBe(accessToken);

  const container = 'EXAMPLE_CONTAINER';
  const clientId = 'EXAMPLE_CLIENT_ID';
  const accessTokenTwo = 'EXAMPLE_ACCESS_TOKEN_TWO';
  let sandbox = true;
  const cognifitSdkConfigTwo = new CognifitSdkConfig(container, clientId, accessTokenTwo, sandbox);
  expect(cognifitSdkConfigTwo.getAccessToken()).not.toBe(accessToken);
  expect(cognifitSdkConfigTwo.getAccessToken()).toBe(accessTokenTwo);
  expect(cognifitSdkConfigTwo.sandbox).toBe(true);

  sandbox = false;
  const cognifitSdkConfigThree = new CognifitSdkConfig(container, clientId, accessTokenTwo, sandbox);
  expect(cognifitSdkConfigThree.getAccessToken()).not.toBe(accessToken);
  expect(cognifitSdkConfigThree.getAccessToken()).toBe(accessTokenTwo);
  expect(cognifitSdkConfigThree.sandbox).toBe(false);
});

test('Testing CognifitSdkConfig extraConfiguration', () => {
  const cognifitSdkConfig = new CognifitSdkConfig();
  expect(cognifitSdkConfig.getAccessToken()).toBe('');

  const accessToken = 'EXAMPLE_ACCESS_TOKEN';
  cognifitSdkConfig.setAccessToken(accessToken);
  expect(cognifitSdkConfig.getAccessToken()).toBe(accessToken);
  expect(cognifitSdkConfig.projectRegion).toBe('US');
  expect(cognifitSdkConfig.getApiBaseUrl()).toBe('https://api.cognifit.com');

  const container = 'EXAMPLE_CONTAINER';
  const clientId = 'EXAMPLE_CLIENT_ID';
  const accessTokenTwo = 'EXAMPLE_ACCESS_TOKEN_TWO';
  const extraConfiguration = {
    sandbox: true,
  };
  const cognifitSdkConfigTwo = new CognifitSdkConfig(container, clientId, accessTokenTwo, extraConfiguration);
  expect(cognifitSdkConfigTwo.getAccessToken()).not.toBe(accessToken);
  expect(cognifitSdkConfigTwo.getAccessToken()).toBe(accessTokenTwo);
  expect(cognifitSdkConfigTwo.sandbox).toBe(true);
  expect(cognifitSdkConfigTwo.listenEvents).toBe(false);

  const extraConfigurationTwo = {
    sandbox: true,
    listenEvents: true,
  };
  const cognifitSdkConfigThree = new CognifitSdkConfig(container, clientId, accessTokenTwo, extraConfigurationTwo);
  expect(cognifitSdkConfigThree.getAccessToken()).not.toBe(accessToken);
  expect(cognifitSdkConfigThree.getAccessToken()).toBe(accessTokenTwo);
  expect(cognifitSdkConfigThree.sandbox).toBe(true);
  expect(cognifitSdkConfigThree.listenEvents).toBe(true);
});

test('Testing CognifitSdkConfig extraConfiguration in China', () => {
  const cognifitSdkConfig = new CognifitSdkConfig('', '', '', {projectRegion: 'CHINA'});
  expect(cognifitSdkConfig.getAccessToken()).toBe('');

  const accessToken = 'EXAMPLE_ACCESS_TOKEN';
  cognifitSdkConfig.setAccessToken(accessToken);
  expect(cognifitSdkConfig.getAccessToken()).toBe(accessToken);
  expect(cognifitSdkConfig.projectRegion).toBe('CHINA');
  expect(cognifitSdkConfig.getApiBaseUrl()).toBe('https://api.braintraining.cn');

  const container = 'EXAMPLE_CONTAINER';
  const clientId = 'EXAMPLE_CLIENT_ID';
  const accessTokenTwo = 'EXAMPLE_ACCESS_TOKEN_TWO';
  const extraConfiguration = {
    sandbox: true,
  };
  const cognifitSdkConfigTwo = new CognifitSdkConfig(container, clientId, accessTokenTwo, extraConfiguration);
  expect(cognifitSdkConfigTwo.getAccessToken()).not.toBe(accessToken);
  expect(cognifitSdkConfigTwo.getAccessToken()).toBe(accessTokenTwo);
  expect(cognifitSdkConfigTwo.sandbox).toBe(true);
  expect(cognifitSdkConfigTwo.listenEvents).toBe(false);

  const extraConfigurationTwo = {
    sandbox: true,
    listenEvents: true,
  };
  const cognifitSdkConfigThree = new CognifitSdkConfig(container, clientId, accessTokenTwo, extraConfigurationTwo);
  expect(cognifitSdkConfigThree.getAccessToken()).not.toBe(accessToken);
  expect(cognifitSdkConfigThree.getAccessToken()).toBe(accessTokenTwo);
  expect(cognifitSdkConfigThree.sandbox).toBe(true);
  expect(cognifitSdkConfigThree.listenEvents).toBe(true);
});
