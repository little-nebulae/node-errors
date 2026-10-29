import { BaseError } from "@little-nebulae/error";

export const NODE_NO_ENTRY_SYSTEM_ERROR_ENUM = {
  CODE: "NODE_NO_ENTRY_SYSTEM_ERROR",
  CAUSE: { ERRNO: -2 },
} as const;

export interface NodeNoEntrySystemErrorCause extends NodeJS.ErrnoException {
  errno: typeof NODE_NO_ENTRY_SYSTEM_ERROR_ENUM.CAUSE.ERRNO;
}

export class NodeNoEntrySystemError extends BaseError<
  typeof NODE_NO_ENTRY_SYSTEM_ERROR_ENUM.CODE,
  NodeNoEntrySystemErrorCause
> {
  readonly name = "NodeNoEntrySystemError";
  readonly code = NODE_NO_ENTRY_SYSTEM_ERROR_ENUM.CODE;

  constructor({
    message,
    cause,
  }: {
    message?: string;
    cause: NodeNoEntrySystemErrorCause;
  }) {
    super({ message: message ?? cause.message, cause, meta: null });
  }
}
