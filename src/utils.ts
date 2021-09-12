import { setLocale } from "yup";

/**
 * Keyed Error Response
 */
export interface KeyedError {
    [field: string]: {
        [error: string]: string;
    };
}

/**
 * Error Map
 *
 * Field: Errors[]
 * Field: Messages[]
 */
export interface ErrorMap {
    [field: string]: string[];
}

/**
 * Extract error keys from keyed error
 *
 * @param errors error response
 * @returns error key list
 */
export function extractErrorKeys(errors: KeyedError): ErrorMap {
    let res: ErrorMap = {};
    for (const field in errors) {
        if (Object.prototype.hasOwnProperty.call(errors[field], field)) {
            let errs: string[] = [];
            for (const err in errors[field]) {
                if (Object.prototype.hasOwnProperty.call(errors[field], err)) {
                    errs.push(err);
                }
            }
            res[field] = errs;
        }
    }
    return res;
}

/**
 * Extract error messages from keyed error
 *
 * @param errors error response
 * @returns error key list
 */
export function extractErrorMessages(errors: KeyedError): ErrorMap {
    let res: ErrorMap = {};
    for (const field in errors) {
        if (Object.prototype.hasOwnProperty.call(errors[field], field)) {
            let messages: string[] = [];
            for (const err in errors[field]) {
                if (Object.prototype.hasOwnProperty.call(errors[field], err)) {
                    messages.push(errors[field][err]);
                }
            }
            res[field] = messages;
        }
    }
    return res;
}

/**
 * make yup message keyed mode
 *
 * when call this function yup return error key as error message instead of message
 */
export function makeYupKeyedErrors() {
    setLocale({
        mixed: {
            required: "required",
            notRequired: "notRequired",
            defined: "defined",
            oneOf: "oneOf",
            notOneOf: "notOneOf",
        },
        string: {
            required: "required",
            length: "length",
            min: "min",
            max: "max",
            matches: "matches",
            email: "email",
            url: "url",
            uuid: "uuid",
            ensure: "ensure",
            trim: "trim",
            lowercase: "lowercase",
            uppercase: "uppercase",
        },
        number: {
            min: "min",
            max: "max",
            lessThan: "lessThan",
            moreThan: "moreThan",
            positive: "positive",
            negative: "negative",
            integer: "integer",
            truncate: "truncate",
            round: "round",
        },
        date: {
            min: "min",
            max: "max",
        },
        array: {
            length: "length",
            min: "min",
            max: "max",
            ensure: "ensure",
            compact: "compact",
        },
        object: {
            from: "from",
            noUnknown: "noUnknown",
        },
    });
}

// s convert nullable string to string
export function s(v: any): string {
    return v ? `${v}` : "";
}
