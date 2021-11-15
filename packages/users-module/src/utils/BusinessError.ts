export class BusinessError extends Error {

    moduleName: string;

    constructor(message, moduleName) {
      super(message);
  
      this.moduleName = moduleName;
      this.name = this.constructor.name;
  
      Error.captureStackTrace(this, this.constructor);
    }
};

  