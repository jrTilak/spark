import { z } from "zod";

class CommonValidators {
  /**
   *  only alphanumeric characters with underscore
   */
  private usernameRegex = /^[a-zA-Z0-9_]{2,}$/;

  username() {
    return z
      .string()
      .min(2, {
        message: "Username must be at least 2 characters.",
      })
      .regex(this.usernameRegex, {
        message: "Username must only contain alphanumeric characters with underscores.",
      });
  }
}

export const commonValidators = new CommonValidators();
