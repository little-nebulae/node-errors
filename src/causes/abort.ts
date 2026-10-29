import { NODE_ERROR_ENUM } from "@/enums/error";

export interface NodeAbortErrorCause extends Error {
  name: typeof NODE_ERROR_ENUM.ABORT.cause.name;
  code: typeof NODE_ERROR_ENUM.ABORT.cause.code;
}

export function isNodeAbortErrorCause(
  error: Error,
): error is NodeAbortErrorCause {
  return "code" in error && error.code === NODE_ERROR_ENUM.ABORT.cause.code;
}
