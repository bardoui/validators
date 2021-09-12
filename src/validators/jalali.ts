import { s } from "@/utils";
import { from } from "jalali-moment";
import { addMethod, string } from "yup";
import { Maybe } from "yup/lib/types";

/**
 * Register jalali date validator to yup
 *
 * @param defaultMessage default error message
 */
export function registerJalaliDateValidator(defaultMessage = "jalali") {
    addMethod(string, "jalali", (format: string, message = defaultMessage) =>
        string().test({
            message,
            name: "jalali",
            params: { format },
            exclusive: true,
            test: (v: Maybe<string>) => {
                if (!v) return true;
                try {
                    if (from(s(v), "fa", format).isValid()) return true;
                } catch (exp) {}
                return false;
            },
        })
    );
}

declare module "yup" {
    interface StringSchema {
        jalali(format: string, message?: string): StringSchema;
    }
}
