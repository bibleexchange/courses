'use strict';

/*
to do:
- create function to turn filename into a pretty title for lessons
*/

import chalk from 'chalk'
import fs from 'fs-extra'
import readDirectories from './readDirectories.js'

const rd = new readDirectories();
rd.init().save()

console.log(chalk.green('Database saved successfully.\n'))