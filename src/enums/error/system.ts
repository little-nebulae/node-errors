import { ERRNO_ENUM } from "@/enums/errno";

export const NODE_SYSTEM_ERROR_ENUM = {
  NO_ENTRY: {
    code: "NODE_NO_ENTRY_SYSTEM_ERROR",
    errno: ERRNO_ENUM.ENOENT,
  },
  ALREADY_EXISTED: {
    code: "NODE_ALREADY_EXISTED_SYSTEM_ERROR",
    errno: ERRNO_ENUM.EEXIST,
  },
  NOT_DIRECTORY: {
    code: "NODE_NOT_DIRECTORY_SYSTEM_ERROR",
    errno: ERRNO_ENUM.ENOTDIR,
  },
} as const;
