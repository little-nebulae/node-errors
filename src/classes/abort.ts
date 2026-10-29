import { BaseError } from "@little-nebulae/error";

import type { NodeAbortErrorCause } from "@/causes/abort";

import { NODE_ERROR_ENUM } from "@/enums/error";

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
