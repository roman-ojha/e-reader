declare namespace NodeJS {
  interface ProcessEnv {
    APP_PORT: number;
    ENV: string;
    DATABASE_URL: string;
  }
}
