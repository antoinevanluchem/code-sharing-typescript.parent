import chalk from 'chalk'

import { HelperType } from '@child/helperType.js'
import { sayHello } from '@packages/child'

const parent = chalk.italic.bold.underline("parent")
console.log(`Hello from the ${parent}!`)

sayHello()

const something: HelperType = {foo: 10, bar: "ten"}
console.log(something)