import { z } from "zod";

class CommonValidators {
  /**
   * one uppercase, one lowercase, one number and one special case character
   */
  private passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  /**
   *  only alphanumeric characters with underscore
   */
  private usernameRegex = /^[a-zA-Z0-9_]{2,}$/;
  password() {
    return z
      .string()
      .min(8, {
        message: "Password must be at least 8 characters.",
      })
      .regex(this.passwordRegex, {
        message:
          "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.",
      });
  }

  email() {
    return z.string().email({
      message: "Invalid email address.",
    });
  }

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
