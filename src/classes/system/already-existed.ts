import { BaseError } from "@little-nebulae/error";

export const NODE_ALREADY_EXISTED_SYSTEM_ERROR_ENUM = {
  CODE: "NODE_ALREADY_EXISTED_SYSTEM_ERROR",
  CAUSE: { ERRNO: -17 },
} as const;

export interface NodeAlreadyExistedSystemErrorCause
  extends NodeJS.ErrnoException {
  errno: typeof NODE_ALREADY_EXISTED_SYSTEM_ERROR_ENUM.CAUSE.ERRNO;
}

export class NodeAlreadyExistedSystemError extends BaseError<
  typeof NODE_ALREADY_EXISTED_SYSTEM_ERROR_ENUM.CODE,
  NodeAlreadyExistedSystemErrorCause
> {
  readonly name = "NodeAlreadyExistedSystemError";
  readonly code = NODE_ALREADY_EXISTED_SYSTEM_ERROR_ENUM.CODE;

  constructor({
    message,
    cause,
  }: {
    message?: string;
    cause: NodeAlreadyExistedSystemErrorCause;
  }) {
    super({ message: message ?? cause.message, cause, meta: null });
  }
}

export function isNodeAlreadyExistedSystemErrorCause(
  exception: NodeJS.ErrnoException,
): exception is NodeAlreadyExistedSystemErrorCause {
  return exception.errno === NODE_ALREADY_EXISTED_SYSTEM_ERROR_ENUM.CAUSE.ERRNO;
}
