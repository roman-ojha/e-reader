type environment = "development" | "production";

const ENV: environment = process.env.ENV as environment;

const log = {
  success: (msg: any, env: environment) => {
    if (env === "development" && ENV === "development") {
      console.log(msg);
    }
  },
  error: (msg: any, env: environment) => {
    if (env === "development" && ENV === "development") {
      console.error(msg);
    }
  },
};

export default log;
