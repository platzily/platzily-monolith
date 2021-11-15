const USER_TABLE:string = 'users';
const REGEX_EMAIL_PATTERN:RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const errorTypes = {
    EMAIL_NOT_VALID: 'EMAIL_NOT_VALID',
    FIELD_IS_REQUIRED: 'FIELD_IS_REQUIRED',
    READ_DATABASE_ERROR: 'READ_DATABASE_ERROR',
};

export {
    USER_TABLE,
    REGEX_EMAIL_PATTERN,
    errorTypes
} 