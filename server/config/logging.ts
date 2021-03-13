import colors from "colors";

const getTimeStamp = () => {
  return new Date().toISOString().slice(0,19);
};

const info = (
  namespace: string,
  message: string,
  object?: { [x: string]: unknown }
): void => {
  if (object) {
    console.info(
      colors.green.bold(
        `[${getTimeStamp()}] [INFO] [${namespace}] ${message}, object`
      )
    );
  } else {
    console.info(
      colors.green.bold(`[${getTimeStamp()}] [INFO] [${namespace}] ${message}`)
    );
  }
};

const warn = (
  namespace: string,
  message: string,
  object?: { [x: string]: unknown }
): void => {
  if (object) {
    console.warn(
      colors.yellow.bold(
        `[${getTimeStamp()}] [WARN] [${namespace}] ${message}, object`
      )
    );
  } else {
    console.warn(
      colors.yellow.bold(`[${getTimeStamp()}] [WARN] [${namespace}] ${message}`)
    );
  }
};

const error = (
  namespace: string,
  message: string,
  object?: { [x: string]: unknown }
): void => {
  if (object) {
    console.error(
      colors.inverse.red.bold(
        `[${getTimeStamp()}] [ERROR] [${namespace}] ${message}, object`
      )
    );
  } else {
    console.error(
      colors.inverse.red.bold(
        `[${getTimeStamp()}] [ERROR] [${namespace}] ${message}`
      )
    );
  }
};

const debug = (
  namespace: string,
  message: string,
  object?: { [x: string]: unknown }
): void => {
  if (object) {
    console.debug(
      colors.bgRed.bold(
        `[${getTimeStamp()}] [DEBUG] [${namespace}] ${message}, object`
      )
    );
  } else {
    console.debug(
      colors.bgRed.bold(`[${getTimeStamp()}] [DEBUG] [${namespace}] ${message}`)
    );
  }
};

export default {
  info,
  warn,
  error,
  debug,
};
