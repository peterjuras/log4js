/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import Logger from './logger';

const Log4js = {
  // Date of logger initialized.
  applicationStartDate: new Date(),
  // Hashtable of loggers.
  loggers: {},
  // Get a logger instance. Instance is cached on categoryName level.
  getLogger: categoryNameParam => {
    // Use default logger if categoryName is not specified or invalid
    let categoryName;
    if (typeof categoryNameParam !== 'string') {
      categoryName = '[default]';
    } else {
      categoryName = categoryNameParam;
    }

    if (!Log4js.loggers[categoryName]) {
      // Create the logger for this name if it doesn't exist already
      Log4js.loggers[categoryName] = new Logger(categoryName);
    }

    return Log4js.loggers[categoryName];
  },
};

// Is called when an error occurs outside of the current execution block
function windowError(msg, url, line) {
  const message = `Error in (${url || window.location}) on line ${line}` +
    ` with message (${msg})`;
  Log4js.getLogger('window').fatal(message);
}

// Listen to window errors
try {
  window.addEventListener('error', windowError);
} catch (exception) {
  // An error inside the logger has occured, the only way to safely
  // display this error is through the console.
  console.error('Could not listen add event listener to window.onerror'); // eslint-disable-line
}

export default Log4js;
