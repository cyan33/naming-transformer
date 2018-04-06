# naming-transformer

## Usage

```
npm i --save naming-transformer
```

```js
import {
  camelToSnake,
  snakeToCamel,
  camelToTitle,
  snakeToTitle
} from 'naming-transformer'

snakeToCamel('some_variable_name') // someVariableName
camelToSnake('someVariableName') // some_variable_name
camelToTitle('thisIsAnEntirelyLowercaseString') // This is an Entirely Lowercase String
snakeToTitle('this_is_an_entirely_lowercase_string') // This is an Entirely Lowercase String
```

> Title naming convention in this package refers to [this post](http://grammar.yourdictionary.com/capitalization/rules-for-capitalization-in-titles.html)

## Liscence

MIT @Chang 
