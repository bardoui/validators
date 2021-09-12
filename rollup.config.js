import commonjs from "@rollup/plugin-commonjs";
import pkg from "./package.json";
import typescript from "rollup-plugin-typescript2";
import cleaner from "rollup-plugin-cleaner";

export default {
    input: "src/validators.ts",
    dest: "dist",
    output: [
        {
            file: pkg.module,
            format: "esm",
            sourcemap: true,
        },
        {
            file: pkg.main,
            format: "cjs",
            sourcemap: true,
        },
        {
            file: pkg.unpkg,
            format: "umd",
            name: "validators",
            sourcemap: true,
        },
    ],
    plugins: [
        cleaner({
            targets: ["./dist/"],
        }),
        typescript({
            tsconfig: "./tsconfig.json",
        }),
        commonjs(),
    ],
};
