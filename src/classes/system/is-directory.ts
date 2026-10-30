import { BaseError } from "@little-nebulae/error";

export const NODE_IS_DIRECTORY_SYSTEM_ERROR_ENUM = {
  CODE: "NODE_IS_DIRECTORY_SYSTEM_ERROR",
  CAUSE: { ERRNO: -21 },
} as const;

export interface NodeIsDirectorySystemErrorCause extends NodeJS.ErrnoException {
  errno: typeof NODE_IS_DIRECTORY_SYSTEM_ERROR_ENUM.CAUSE.ERRNO;
}

export class NodeIsDirectorySystemError extends BaseError<
  typeof NODE_IS_DIRECTORY_SYSTEM_ERROR_ENUM.CODE,
  NodeIsDirectorySystemErrorCause
> {
  readonly name = "NodeIsDirectorySystemError";
  readonly code = NODE_IS_DIRECTORY_SYSTEM_ERROR_ENUM.CODE;

  constructor({
    message,
    cause,
  }: {
    message?: string;
    cause: NodeIsDirectorySystemErrorCause;
  }) {
    super({ message: message ?? cause.message, cause, meta: null });
  }
}

export function isNodeIsDirectorySystemErrorCause(
  exception: NodeJS.ErrnoException,
): exception is NodeIsDirectorySystemErrorCause {
  return exception.errno === NODE_IS_DIRECTORY_SYSTEM_ERROR_ENUM.CAUSE.ERRNO;
}
