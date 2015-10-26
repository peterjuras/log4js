// Level Enumeration. Do not use directly. Use static objects instead.

class Level {
  constructor(level, levelStr) {
    this.level = level;
    this.levelStr = levelStr;
  }

  static OFF_INT = Number.MAX_VALUE;
  static FATAL_INT = 50000;
  static ERROR_INT = 40000;
  static WARN_INT = 30000;
  static INFO_INT = 20000;
  static DEBUG_INT = 10000;
  static TRACE_INT = 5000;
  static ALL_INT = Number.MIN_VALUE;

  // Converts given String to corresponding Level
  toLevel(sArg, defaultLevel) {
    if (!sArg) {
      return defaultLevel;
    }

    if (typeof sArg === 'string') {
      const str = sArg.toUpperCase();
      switch (str) {
      case 'ALL':
        return Level.ALL;
      case 'DEBUG':
        return Level.DEBUG;
      case 'INFO':
        return Level.INFO;
      case 'WARN':
        return Level.WARN;
      case 'ERROR':
        return Level.ERROR;
      case 'FATAL':
        return Level.FATAL;
      case 'OFF':
        return Level.OFF;
      case 'TRACE':
        return Level.TRACE;
      default:
        return defaultLevel;
      }
    } else if (typeof sArg === 'number') {
      switch (sArg) {
      case Level.ALL_INT:
        return Level.ALL;
      case Level.DEBUG_INT:
        return Level.DEBUG;
      case Level.INFO_INT:
        return Level.INFO;
      case Level.WARN_INT:
        return Level.WARN;
      case Level.ERROR_INT:
        return Level.ERROR;
      case Level.FATAL_INT:
        return Level.FATAL;
      case Level.OFF_INT:
        return Level.OFF;
      case Level.TRACE_INT:
        return Level.TRACE;
      default:
        return defaultLevel;
      }
    } else {
      return defaultLevel;
    }}

  toString = () => {
    return this.levelStr;
  }

  valueOf = () => {
    return this.level;
  }
}

Level.OFF = new Level(Level.OFF_INT, 'OFF');
Level.FATAL = new Level(Level.FATAL_INT, 'FATAL');
Level.ERROR = new Level(Level.ERROR_INT, 'ERROR');
Level.WARN = new Level(Level.WARN_INT, 'WARN');
Level.INFO = new Level(Level.INFO_INT, 'INFO');
Level.DEBUG = new Level(Level.DEBUG_INT, 'DEBUG');
Level.TRACE = new Level(Level.TRACE_INT, 'TRACE');
Level.ALL = new Level(Level.ALL_INT, 'ALL');

export default Level;
