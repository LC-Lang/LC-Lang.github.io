import { sveltekit } from "@sveltejs/kit/vite";

/** @type {import('vite').UserConfig} */
const config = {
    plugins: [sveltekit()],
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@use "src/variables.scss" as *;',
            },
        },
    },
    server: {
        port: 3000,
        host: "0.0.0.0",
    }
};

export default config;
