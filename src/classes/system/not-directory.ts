import { BaseError } from "@little-nebulae/error";

export const NODE_NOT_DIRECTORY_SYSTEM_ERROR_ENUM = {
  CODE: "NODE_NOT_DIRECTORY_SYSTEM_ERROR",
  CAUSE: { ERRNO: -20 },
} as const;

export interface NodeNotDirectorySystemErrorCause
  extends NodeJS.ErrnoException {
  errno: typeof NODE_NOT_DIRECTORY_SYSTEM_ERROR_ENUM.CAUSE.ERRNO;
}

export class NodeNotDirectorySystemError extends BaseError<
  typeof NODE_NOT_DIRECTORY_SYSTEM_ERROR_ENUM.CODE,
  NodeNotDirectorySystemErrorCause
> {
  readonly name = "NodeNotDirectorySystemError";
  readonly code = NODE_NOT_DIRECTORY_SYSTEM_ERROR_ENUM.CODE;

  constructor({
    message,
    cause,
  }: {
    message?: string;
    cause: NodeNotDirectorySystemErrorCause;
  }) {
    super({ message: message ?? cause.message, cause, meta: null });
  }
}

export function isNodeNotDirectorySystemErrorCause(
  exception: NodeJS.ErrnoException,
): exception is NodeNotDirectorySystemErrorCause {
  return exception.errno === NODE_NOT_DIRECTORY_SYSTEM_ERROR_ENUM.CAUSE.ERRNO;
}
