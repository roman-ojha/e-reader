type environment = "development" | "production";

const ENV: environment = process.env.ENV as environment;

const log = {
  success: (msg: string, env: environment) => {
    if (env === "development" && ENV === "development") {
      console.log(msg);
    }
  },
  error: (msg: string, env: environment) => {
    if (env === "development" && ENV === "development") {
      console.error(msg);
    }
  },
};

export default log;
