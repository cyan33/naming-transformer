const assert = require('assert')
const { 
  camelToSnake,
  snakeToCamel,
  snakeToTitle,
  camelToTitle
} = require('./index')

try {
  assert.equal(snakeToCamel('some_variable_name'), 'someVariableName')
  assert.equal(camelToSnake('someVariableName'), 'some_variable_name')
  assert.equal(snakeToTitle('this_is_an_entirely_lowercase_string'), 'This is an Entirely Lowercase String')
  assert.equal(camelToTitle('thisIsAnEntirelyLowercaseString'), 'This is an Entirely Lowercase String')
  console.log('tests all passed')
} catch(e) {
  console.log('test failed')
  console.log(e)
}

