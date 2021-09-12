import { s } from "@/utils";
import { addMethod, string } from "yup";
import { Maybe } from "yup/lib/types";

/**
 * Register uuid validator to yup
 *
 * @param defaultMessage default error message
 */
export function registerUUIDValidator(defaultMessage = "uuid") {
    addMethod(string, "uuid", (message = defaultMessage) =>
        string().test({
            message,
            name: "uuid",
            exclusive: true,
            test: (v: Maybe<string>) =>
                !v ||
                /^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-4[a-fA-F0-9]{3}-[8|9|aA|bB][a-fA-F0-9]{3}-[a-fA-F0-9]{12}+$/.test(
                    s(v)
                ),
        })
    );
}

declare module "yup" {
    interface StringSchema {
        uuid(message?: string): StringSchema;
    }
}
