export interface IApplicationError {
    name: string
    statusCode: number
    message: string
}

export class ApplicationError implements Error, IApplicationError {
    public name: string = 'ApplicationError'
    public statusCode: number = 500
    // eslint-disable-next-line no-useless-constructor
    constructor(public message: string, public code: number) {}
    toString() {
        return `${this.name} ${this.message} (${this.code})`
    }
}

export class BadRequest extends ApplicationError {
    public name: string = 'BadRequest'
    public statusCode: number = 400
}
export class InternalServerError extends ApplicationError {
    public name: string = 'InternalServerError'
    public statusCode: number = 500
}
