import * as yup from "yup"
import { registerCreditCardValidator } from "./dist/validators.esm"
registerCreditCardValidator()

yup.string().required().credit(false)