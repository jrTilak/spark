import React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Text } from "@/components/ui/text";
import { Toast } from "react-native-toast-notifications";
import authValidators from "@/validators/auth";
import { EmailInput } from "@/components/ui/input/email-input";
import { PasswordInput } from "@/components/ui/input/password-input";
import { View } from "react-native";
import { Link } from "expo-router";
import { P } from "@/components/ui/p";
import AuthLayout from "@/components/layout/auth-layout";
import { InputWithIcon } from "@/components/ui/input/input-with-icon";
import { UserIcon } from "lucide-react-native";

const FormSchema = authValidators.signupWithEmailSchema();
type FormType = z.infer<typeof FormSchema>;

const Signup = () => {
  const form = useForm<FormType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  function onSubmit(data: FormType) {
    console.log(data);
    Toast.show("Success!");
  }

  return (
    <AuthLayout label="Create an Account">
      <View className="mt-9 h-[200px]">
        <Form {...form}>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <InputWithIcon placeholder="your_username" icon={UserIcon} {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="mt-5">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <EmailInput placeholder="user@email.com" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="mt-5">
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <PasswordInput placeholder="*********" {...field} />
                </FormControl>
              </FormItem>
            )}
          />

          <Button
            className="mt-9"
            onPress={form.handleSubmit((data) => {
              onSubmit(data);
            })}
          >
            <Text>Submit</Text>
          </Button>

          <View className="self-center flex-row flex items-center justify-center">
            <P> Already have an account?</P>
            <Button variant={"link"}>
              <Link href="/auth/sign-in" >
                <P>
                  Sign In
                </P>
              </Link>
            </Button>
          </View>
        </Form>
      </View>
    </AuthLayout>
  );
};

export default Signup;
