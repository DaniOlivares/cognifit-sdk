import { CognifitSdkError } from './lib/cognifit.sdk.error';
import { CognifitSdkValidator } from './lib/cognifit.sdk.validator';
import { CognifitSdkConfig } from './lib/cognifit.sdk.config';

class CognifitSdk {
  cognifitSdkConfig: CognifitSdkConfig;
  cognifitSdkError: CognifitSdkError;
  cognifitSdkValidator: CognifitSdkValidator;
  initialized: boolean;

  constructor() {
    this.cognifitSdkConfig = new CognifitSdkConfig();
    this.cognifitSdkError = new CognifitSdkError();
    this.cognifitSdkValidator = new CognifitSdkValidator();
    this.initialized = false;
  }

  public init(config: CognifitSdkConfig) {
    this.cognifitSdkConfig = config;
    if (!this.cognifitSdkValidator.validateConfig(this.cognifitSdkConfig, this.cognifitSdkError)) {
      this.initialized = false;
    } else {
      this.initialized = true;
    }
    return this.initialized;
  }

  public start(type: string, key: string) {
    if (!this.cognifitSdkValidator.isInitialized(this.initialized, this.cognifitSdkError)) {
      return false;
    }
    if (!this.cognifitSdkValidator.validateConfig(this.cognifitSdkConfig, this.cognifitSdkError)) {
      return false;
    }
    if (!this.cognifitSdkValidator.validate(type, key, this.cognifitSdkError)) {
      return false;
    }
    this.printIframe(type, key);
    return true;
  }

  private printIframe(type: string, key: string): void {
    document.body.innerHTML +=
      '<iframe id="cognifitAccess" style="' +
      this.getIframeStyle() +
      '" title="CogniFit Access" width="100%" height="100%" src="' +
      this.cognifitSdkConfig.getIframeUrl(type, key) +
      '" onload="cognifitSdkIframeInterface.onload(this)"></iframe><script>cognifitSdkIframeInterface = {}; cognifitSdkIframeInterface.onload = function(thisIframe){try{console.log(thisIframe.contentWindow.location.href);}catch(e){console.log("ARRRRRRG");}}; </script>';
  }

  private getIframeStyle(): string {
    return 'position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; overflow: hidden;';
  }
}

export const cognifitSdk = new CognifitSdk();
