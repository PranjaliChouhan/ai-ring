/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_STRIPE_PUBLISHABLE_KEY: string;
  readonly VITE_STRIPE_BACKEND_URL: string;
  readonly VITE_APP_NAME?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
