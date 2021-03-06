export class CognifitSdkError {
  readonly NOT_ERROR = 0;
  readonly ERROR_CONTAINER = 1;
  readonly ERROR_ACCESS_TOKEN = 2;
  readonly ERROR_TYPE = 3;
  readonly ERROR_KEY = 4;
  readonly ERROR_CLIENT_HASH = 5;
  readonly ERROR_CLIENT_ID = 6;
  readonly ERROR_INITIALIZED = 7;
  readonly ERROR_RESOURCE_NOT_LOADED = 8;

  error: number;

  constructor() {
    this.error = 0;
  }

  public setError(error: number) {
    this.error = error;
  }

  public getError() {
    return this.error;
  }

  public getMessage() {
    if (this.error) {
      switch (this.error) {
        case this.ERROR_CONTAINER:
          return 'No container found';
        case this.ERROR_ACCESS_TOKEN:
          return 'Invalid access token';
        case this.ERROR_TYPE:
          return 'Incorrect session type';
        case this.ERROR_KEY:
          return 'Incorrect session key';
        case this.ERROR_CLIENT_HASH:
          return 'Incorrect client hash';
        case this.ERROR_CLIENT_ID:
          return 'Incorrect client id';
        case this.ERROR_INITIALIZED:
          return 'CognifitSdk not initialized';
        case this.ERROR_RESOURCE_NOT_LOADED:
          return 'Resource not loaded';
      }
    }
    return '';
  }
}
