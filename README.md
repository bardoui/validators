# Validator

Extra validators for yup.

## Installation

### CDN

This package published as `validators` module in umd.

```html
<script src="https://unpkg.com/@bardoui/validators"></script>
```

### NPM

```bash
npm i @bardoui/validators
```

```ts
import {
  registerAll,
  registerCreditCardValidator,
  registerUsernameValidator,
} from "@bardoui/validators";
// Register all validators
registerAll();
// Register custom validator only
registerCreditCardValidator();
registerUsernameValidator();
```

## Utility Functions

Validate package contains following helper functions:

### extractErrorKeys

This function get key value response and returns error keys only.

```ts
// Signature:
export function extractErrorKeys(errors: KeyedError): ErrorMap;

// Example
// Error Response => {"username": {"max": "username max is 20 char", "unique": "username must unique"}, "password": {"min" :"password must have 10 char at least"}}
// result => {"username": ["max","unique"], "password": ["min"]}
```

### extractErrorMessages

This function get key value response and returns error messages only.

```ts
// Signature:
export function extractErrorMessages(errors: KeyedError): ErrorMap;

// Example
// Error Response => {"username": {"max": "username max is 20 char", "unique": "username must unique"}, "password": {"min" :"password must have 10 char at least"}}
// result => {"username": ["username max is 20 char","username must unique"], "password": ["password must have 10 char at least"]}
```

### makeYupKeyedErrors

This function override yup default translator and return error key as error message.

```ts
// Signature:
export function makeYupKeyedErrors();

// Example
// instead of 'this field is required' message return 'required'
```

## Usage

Validator contains following validators:

**Note** by default all validators return validator key as error message (in lowercase). you can pass error message on create time or use time to override this behavior.

### credit

Validate credit card number. this validator accept tow mode, long (20 digit) and short (16 digit) card number. Allowed formats:

- **20 digit**: `xxxx-xxxx-xxxx-xxxx-xxxx` or `xxxx-xxxx-xxxx-xxxx-xxxx`
- **16 digit**: `xxxx-xxxx-xxxx-xxxx` or `xxxx-xxxx-xxxx-xxxx`

`x` represent one digit.

```ts
// 20 digit
yup.string().credit(true);
// 16 digit
yup.string().credit(false, "invalid credit card number");
```

### idNumber

Validate id number string (0 to 10 digit string).

```ts
yup.string().idNumber();
```

### identifier

Validate number greater than 1.

```ts
yup.number().identifier();
```

### ip

Validate IPv4 string.

```ts
yup.string().ip();
```

### ipPort

Validate IPv4 string with port.

```ts
yup.string().ipPort();
```

### jalali

Validate jalali date string by format.

```ts
yup.string().jalali("YYYY/MM/DD");
```

### mobile

Validate persian mobile number. accept (09xx) xxx-xxx and 09xxxxxxxx formats.

```ts
yup.string().mobile();
```

### nationalCode

Validate persian national code. accept xxx-xxxxxx-x and xxxxxxxxxx formats.

```ts
yup.string().nationalCode();
```

### postalCode

Validate persian postal code. accept xxxxx-xxxxx and xxxxxxxxxx formats.

```ts
yup.string().postalCode();
```

### tel

Validate persian tel. accept (0xx) xxxx-xxxx and 0xxxxxxxxxx formats for prefixed mode and xxxx-xxxx and xxxxxxxx for non-prefixed mode.

```ts
// Prefixed mode (11 digit)
yup.string().tel(true);
// Non-prefixed mode (8 digit)
yup.string().tel(false);
```

### unsigned

Validate unsigned number (0 or greater).

```ts
yup.number().unsigned();
```

### username

Validate username. username can contains numbers, alpha, dash, dot and underscore characters.

```ts
yup.string().username();
```

### uuid

Validate uuid string.

```ts
yup.string().uuid();
```
