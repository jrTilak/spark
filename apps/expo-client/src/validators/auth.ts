import { z } from "zod";
import { commonValidators } from "./common";

class AuthValidators {
  signupWithEmailSchema = () => {
    return z.object({
      email: commonValidators.email(),
      password: commonValidators.password(),
      username: commonValidators.username(),
    });
  };

  signinWithEmailSchema = () => {
    return z.object({
      email: commonValidators.email(),
      password: commonValidators.password(),
    });
  };
}

const authValidators = new AuthValidators();
export default authValidators;
