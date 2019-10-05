const colors = require('colors');
const CFG = require("./date.json");
require(`./${CFG.REQINDEX}`);
require("moment");
const fs = require('fs');
const errorOutput = fs.createWriteStream('./log/errorlog.log');
const loger = new console.Console(errorOutput)

if (CFG.STAMP_ON == 1) {
    require('console-stamp')(console, {
        pattern: 'dd/mm/yyyy HH:MM:ss',
        stderr: errorOutput,
        metadata: function () {
            return ('[' + process.memoryUsage().rss + ']');
        },
        colors: {
            stamp: CFG.STAMP,
            label: CFG.STAMP,
            metadata: CFG.STAMP
        },
        datePrefix: CFG.datePrefix,
        dateSuffix: CFG.dateSuffix,
        labelPrefix: CFG.labelPrefix,
        labelSuffix: CFG.labelSuffix
    });
}
colors.setTheme({
    silly: [CFG.COLORS_SILLY_STAMP, CFG.COLORS_SILLY_STAMP],
    input: [CFG.COLORS_INPUT_STAMP, CFG.COLORS_INPUT_STAMP],
    verbose: [CFG.COLORS_VERBOSE_STAMP, CFG.COLORS_VERBOSE_STAMP],
    prompt: [CFG.COLORS_PROMPT_STAMP, CFG.COLORS_PROMPT_STAMP],
    data: [CFG.COLORS_DATE_STAMP, CFG.COLORS_DATE_STAMP],
    help: [CFG.COLORS_HELP_STAMP, CFG.COLORS_HELP_STAMP],
    info: [CFG.COLORS_INFO_STAMP, CFG.COLORS_INFO_STAMP],
    table: [CFG.COLORS_TABLE_STAMP, CFG.COLORS_TABLE_STAMP],
    warn: [CFG.COLORS_WARN_STAMP, CFG.COLORS_WARN_STAMP],
    debug: [CFG.COLORS_DEBUG_STAMP, CFG.COLORS_DEBUG_STAMP],
    log: [CFG.COLORS_LOG_STAMP, CFG.COLORS_LOG_STAMP],
    error: [CFG.COLORS_ERROR_STAMP, CFG.COLORS_ERROR_STAMP]
});

var log = {
    silly: function (silly) {
        console.log(colors.silly(silly));
    },
    input: function (input) {
        console.log(colors.input(input));
    },
    verbose: function (verbose) {
        console.log(colors.verbose(verbose));
    },
    prompt: function (prompt) {
        console.log(colors.prompt(prompt));
    },
    data: function (data) {
        console.log(colors.data(data));
    },
    help: function (help) {
        console.log(colors.help(help));
    },
    info: function (info) {
        console.log(colors.help(info));
    },
    table: function (table) {
        console.log(colors.table(table));
    },
    warn: function (warn) {
        console.log(colors.warn(warn));
    },
    debug: function (debug) {
        console.log(colors.debug(debug));
    },
    log: function (log) {
        console.log(colors.log(log));
    },
    error: function (error) {
        loger.error(colors.error(error));
        console.error(colors.error(error));
    }
};

module.exports = log;