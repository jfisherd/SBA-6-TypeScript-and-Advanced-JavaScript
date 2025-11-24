export class NetworkError extends Error {
    constructor(message: string) {
        super(message)
        this.message = message
    }
}

export class DataError extends Error {
    constructor(message: string) {
        super(message)
        this.message = message
    }
}



