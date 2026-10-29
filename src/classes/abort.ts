import { BaseError } from "@little-nebulae/error";

export const NODE_ABORT_ERROR_ENUM = {
  CODE: "NODE_ABORT_ERROR",
  CAUSE: { NAME: "AbortError", CODE: "ABORT_ERR" },
} as const;

export interface NodeAbortErrorCause extends Error {
  name: typeof NODE_ABORT_ERROR_ENUM.CAUSE.NAME;
  code: typeof NODE_ABORT_ERROR_ENUM.CAUSE.CODE;
}

export class NodeAbortError extends BaseError<
  typeof NODE_ABORT_ERROR_ENUM.CODE,
  NodeAbortErrorCause
> {
  readonly name = "NodeAbortError";
  readonly code = NODE_ABORT_ERROR_ENUM.CODE;

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
  return "code" in error && error.code === NODE_ABORT_ERROR_ENUM.CODE;
}
