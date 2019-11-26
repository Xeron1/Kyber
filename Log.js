const chalk = require('chalk'),
    fs = require('fs'),
    DATE = {
        FORMAT_DATE: "dd/mm/yyyy HH:MM:ss",
        datePrefix: "[",
        dateSuffix: "]",
        labelPrefix: "[",
        labelSuffix: "]"
    };
require(__dirname + '/index.js');
var util = require('util'),
    os = require('os'),
    dateFormat = require('dateformat'),
    now = new Date(),
    log_file_stdout = fs.createWriteStream(__dirname + '/log/stdout.log', { flags: 'w' }),
    log_file_stderr = fs.createWriteStream(__dirname + '/log/stderr.log', { flags: 'w' }),
    log_stdout = process.stdout,
    mem = Math.round(process.memoryUsage().rss / 1024 / 1024),
    cpu = os.loadavg(),
    log = {
        silly: function (silly) {
            log_stdout.write(chalk.cyan(dateFormat(now, `${DATE.datePrefix}` + DATE.FORMAT_DATE)
                + `${DATE.dateSuffix} ${DATE.labelPrefix} CPU: ${Math.ceil(cpu[1] * 100) / 10 + " %"} Mem: ${mem} MB ${DATE.labelPrefix}SILLY${DATE.labelSuffix}`) + ` ` + util.format(chalk.red(silly + `\n`)));
            log_file_stdout.write(dateFormat(now, `${DATE.datePrefix}` + DATE.FORMAT_DATE) + `${DATE.dateSuffix} ${DATE.labelPrefix} CPU: ${Math.ceil(cpu[1] * 100) / 10 + " %"} Mem: ${mem} MB ${DATE.labelPrefix}SILLY${DATE.labelSuffix} `
                + util.format(silly + `\n`));
        },
        input: function (input) {
            log_stdout.write(chalk.cyan(dateFormat(now, `${DATE.datePrefix}` + DATE.FORMAT_DATE)
                + `${DATE.dateSuffix} ${DATE.labelPrefix} CPU: ${Math.ceil(cpu[1] * 100) / 10 + " %"} Mem: ${mem} MB ${DATE.labelPrefix}INPUT${DATE.labelSuffix}`) + ` ` + util.format(chalk.red(input + `\n`)));
            log_file_stdout.write(dateFormat(now, `${DATE.datePrefix}` + DATE.FORMAT_DATE) + `${DATE.dateSuffix} ${DATE.labelPrefix} CPU: ${Math.ceil(cpu[1] * 100) / 10 + " %"} Mem: ${mem} MB ${DATE.labelPrefix}INPUT${DATE.labelSuffix} `
                + util.format(input + `\n`));
        },
        verbose: function (verbose) {
            log_stdout.write(chalk.cyan(dateFormat(now, `${DATE.datePrefix}` + DATE.FORMAT_DATE)
                + `${DATE.dateSuffix} ${DATE.labelPrefix} CPU: ${Math.ceil(cpu[1] * 100) / 10 + " %"} Mem: ${mem} MB ${DATE.labelPrefix}VERBOSE${DATE.labelSuffix}`) + ` ` + util.format(chalk.red(verbose + `\n`)));
            log_file_stdout.write(dateFormat(now, `${DATE.datePrefix}` + DATE.FORMAT_DATE) + `${DATE.dateSuffix} ${DATE.labelPrefix} CPU: ${Math.ceil(cpu[1] * 100) / 10 + " %"} Mem: ${mem} MB ${DATE.labelPrefix}VERBOSES${DATE.labelSuffix} `
                + util.format(verbose + `\n`));
        },
        data: function (data) {
            log_stdout.write(chalk.cyan(dateFormat(now, `${DATE.datePrefix}` + DATE.FORMAT_DATE)
                + `${DATE.dateSuffix} ${DATE.labelPrefix} CPU: ${Math.ceil(cpu[1] * 100) / 10 + " %"} Mem: ${mem} MB ${DATE.labelPrefix}DATE${DATE.labelSuffix}`) + ` ` + util.format(chalk.red(data + `\n`)));
            log_file_stdout.write(dateFormat(now, `${DATE.datePrefix}` + DATE.FORMAT_DATE) + `${DATE.dateSuffix} ${DATE.labelPrefix} CPU: ${Math.ceil(cpu[1] * 100) / 10 + " %"} Mem: ${mem} MB ${DATE.labelPrefix}DATE${DATE.labelSuffix} `
                + util.format(data + `\n`));
        },
        help: function (help) {
            log_stdout.write(chalk.cyan(dateFormat(now, `${DATE.datePrefix}` + DATE.FORMAT_DATE)
                + `${DATE.dateSuffix} ${DATE.labelPrefix} CPU: ${Math.ceil(cpu[1] * 100) / 10 + " %"} Mem: ${mem} MB ${DATE.labelPrefix}HELP${DATE.labelSuffix}`) + ` ` + util.format(chalk.red(help + `\n`)));
            log_file_stdout.write(dateFormat(now, `${DATE.datePrefix}` + DATE.FORMAT_DATE) + `${DATE.dateSuffix} ${DATE.labelPrefix} CPU: ${Math.ceil(cpu[1] * 100) / 10 + " %"} Mem: ${mem} MB ${DATE.labelPrefix}HELP${DATE.labelSuffix} `
                + util.format(help + `\n`));
        },
        info: function (info) {
            log_stdout.write(chalk.cyan(dateFormat(now, `${DATE.datePrefix}` + DATE.FORMAT_DATE)
                + `${DATE.dateSuffix} ${DATE.labelPrefix} CPU: ${Math.ceil(cpu[1] * 100) / 10 + " %"} Mem: ${mem} MB ${DATE.labelPrefix}INFO${DATE.labelSuffix}`) + ` ` + util.format(chalk.red(info + `\n`)));
            log_file_stdout.write(dateFormat(now, `${DATE.datePrefix}` + DATE.FORMAT_DATE) + `${DATE.dateSuffix} ${DATE.labelPrefix} CPU: ${Math.ceil(cpu[1] * 100) / 10 + " %"} Mem: ${mem} MB ${DATE.labelPrefix}INFO${DATE.labelSuffix} `
                + util.format(info + `\n`));
        },
        debug: function (debug) {
            log_stdout.write(chalk.cyan(dateFormat(now, `${DATE.datePrefix}` + DATE.FORMAT_DATE)
                + `${DATE.dateSuffix} ${DATE.labelPrefix} CPU: ${Math.ceil(cpu[1] * 100) / 10 + " %"} Mem: ${mem} MB ${DATE.labelPrefix}DEBUG${DATE.labelSuffix}`) + ` ` + util.format(chalk.red(debug + `\n`)));
            log_file_stdout.write(dateFormat(now, `${DATE.datePrefix}` + DATE.FORMAT_DATE) + `${DATE.dateSuffix} ${DATE.labelPrefix} CPU: ${Math.ceil(cpu[1] * 100) / 10 + " %"} Mem: ${mem} MB ${DATE.labelPrefix}DEBUG${DATE.labelSuffix} `
                + util.format(debug + `\n`));
        },
        prompt: function (prompt) {
            log_stdout.write(chalk.cyan(dateFormat(now, `${DATE.datePrefix}` + DATE.FORMAT_DATE)
                + `${DATE.dateSuffix} ${DATE.labelPrefix} CPU: ${Math.ceil(cpu[1] * 100) / 10 + " %"} Mem: ${mem} MB ${DATE.labelPrefix}PROMPT${DATE.labelSuffix}`) + ` ` + util.format(chalk.red(prompt + `\n`)));
            log_file_stdout.write(dateFormat(now, `${DATE.datePrefix}` + DATE.FORMAT_DATE) + `${DATE.dateSuffix} ${DATE.labelPrefix} CPU: ${Math.ceil(cpu[1] * 100) / 10 + " %"} Mem: ${mem} MB ${DATE.labelPrefix}PROMPT${DATE.labelSuffix} 
            ` + util.format(prompt + `\n`));
        },
        table: function (table) {
            log_stdout.write(chalk.cyan(dateFormat(now, `${DATE.datePrefix}` + DATE.FORMAT_DATE)
                + `${DATE.dateSuffix} ${DATE.labelPrefix} CPU: ${Math.ceil(cpu[1] * 100) / 10 + " %"} Mem: ${mem} MB ${DATE.labelPrefix}TABLE${DATE.labelSuffix}`) + ` ` + util.format(chalk.green(table + `\n`)));
            log_file_stdout.write(dateFormat(now, `${DATE.datePrefix}` + DATE.FORMAT_DATE) + `${DATE.dateSuffix} ${DATE.labelPrefix} CPU: ${Math.ceil(cpu[1] * 100) / 10 + " %"} Mem: ${mem} MB ${DATE.labelPrefix}TABLE${DATE.labelSuffix} `
                + util.format(table + `\n`));
        },
        warn: function (warn) {
            log_stdout.write(chalk.cyan(dateFormat(now, `${DATE.datePrefix}` + DATE.FORMAT_DATE)
                + `${DATE.dateSuffix} ${DATE.labelPrefix} CPU: ${Math.ceil(cpu[1] * 100) / 10 + " %"} Mem: ${mem} MB ${DATE.labelPrefix}WARN${DATE.labelSuffix}`) + ` ` + util.format(chalk.bgYellow(warn + `\n`)));
            log_file_stdout.write(dateFormat(now, `${DATE.datePrefix}` + DATE.FORMAT_DATE) + `${DATE.dateSuffix} ${DATE.labelPrefix} CPU: ${Math.ceil(cpu[1] * 100) / 10 + " %"} Mem: ${mem} MB ${DATE.labelPrefix}WARN${DATE.labelSuffix} `
                + util.format(warn + `\n`));
        },
        log: function (log) {
            log_stdout.write(chalk.cyan(dateFormat(now, `${DATE.datePrefix}` + DATE.FORMAT_DATE)
                + `${DATE.dateSuffix} ${DATE.labelPrefix} CPU: ${Math.ceil(cpu[1] * 100) / 10 + " %"} Mem: ${mem} MB ${DATE.labelPrefix}LOG${DATE.labelSuffix}`) + ` ` + util.format(chalk.cyan(log + `\n`)));
            log_file_stdout.write(dateFormat(now, `${DATE.datePrefix}` + DATE.FORMAT_DATE) + `${DATE.dateSuffix} ${DATE.labelPrefix} CPU: ${Math.ceil(cpu[1] * 100) / 10 + " %"} Mem: ${mem} MB ${DATE.labelPrefix}LOG${DATE.labelSuffix} `
                + util.format(log + `\n`));
        },
        error: function (error) {
            log_stdout.write(chalk.cyan(dateFormat(now, `${DATE.datePrefix}` + DATE.FORMAT_DATE)
                + `${DATE.dateSuffix} ${DATE.labelPrefix} CPU: ${Math.ceil(cpu[1] * 100) / 10 + " %"} Mem: ${mem} MB ${DATE.labelPrefix}ERROR${DATE.labelSuffix}`) + ` ` + util.format(chalk.red(error + `\n`)));
            log_file_stderr.write(dateFormat(now, `${DATE.datePrefix}` + DATE.FORMAT_DATE) + `${DATE.dateSuffix} ${DATE.labelPrefix} CPU: ${Math.ceil(cpu[1] * 100) / 10 + " %"} Mem: ${mem} MB ${DATE.labelPrefix}ERROR${DATE.labelSuffix} `
                + util.format(error + `\n`));
        }
    };
module.exports = log;