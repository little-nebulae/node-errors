export function isNodeErrnoException(
  error: Error,
): error is NodeJS.ErrnoException {
  return "errno" in error;
}
