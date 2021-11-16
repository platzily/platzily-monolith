const errorTypes = {
  USER_ID_NOT_VALID: 'USER_ID_NOT_VALID',
  LINK_ID_NOT_VALID: 'LINK_ID_NOT_VALID',
  METRIC_NOT_VALID: 'METRIC_NOT_VALID',
  CONTEXT_NOT_VALID: 'CONTEXT_NOT_VALID',
  WRITE_DATABASE_ERROR: 'WRITE_DATABASE_ERROR',
  READ_DATABASE_ERROR: 'READ_DATABASE_ERROR',
  FIELD_IS_REQUIRED: 'FIELD_IS_REQUIRED',
};

const regexPatterns = {
  REGEX_OBJECT_ID: /^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)/i,
};

module.exports = { errorTypes, regexPatterns };
