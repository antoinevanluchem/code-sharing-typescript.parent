import chalk from 'chalk'

import { sayHello } from '@packages/child'

const parent = chalk.italic.bold.underline("parent")
console.log(`Hello from the ${parent}!`)

sayHello()