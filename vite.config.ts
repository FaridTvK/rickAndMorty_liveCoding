import { defineConfig } from "vite";

export default defineConfig({
    base: "",
    root: 'src',
    build: {
        rollupOptions:
        {
            input:
            {
                main: 'src/mein.html'
            }
        }
    }
});