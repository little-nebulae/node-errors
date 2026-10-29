import { BaseError } from "@little-nebulae/error";

import { NODE_ERROR_ENUM } from "@/enums/error";

export interface NodeAbortErrorCause extends Error {
  name: typeof NODE_ERROR_ENUM.ABORT.cause.name;
  code: typeof NODE_ERROR_ENUM.ABORT.cause.code;
}

export class NodeAbortError extends BaseError<
  typeof NODE_ERROR_ENUM.ABORT.code,
  NodeAbortErrorCause
> {
  readonly name = "NodeAbortError";
  readonly code = NODE_ERROR_ENUM.ABORT.code;

  constructor({
    message,
    cause,
  }: {
    message?: string;
    cause: NodeAbortErrorCause;
  }) {
    super({ message: message ?? cause.message, cause, meta: null });
  }
}

export function isNodeAbortErrorCause(
  error: Error,
): error is NodeAbortErrorCause {
  return "code" in error && error.code === NODE_ERROR_ENUM.ABORT.cause.code;
}
