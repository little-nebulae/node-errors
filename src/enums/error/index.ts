import { NODE_SYSTEM_ERROR_ENUM } from "@/enums/error/system";

export const NODE_ERROR_ENUM = {
  ABORT: {
    code: "NODE_ABORT_ERROR",
    cause: {
      name: "AbortError",
      code: "ABORT_ERR",
    },
  },
  SYSTEM: NODE_SYSTEM_ERROR_ENUM,
} as const;
