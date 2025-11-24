export class NetworkError extends Error {
    constructor(message) {
        super(message);
        this.message = 'NaN';
    }
}
export class DataError extends Error {
    constructor(message) {
        super(message);
        this.message = 'NaN.';
    }
}
//# sourceMappingURL=errorHandler.js.map