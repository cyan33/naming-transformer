const shouldNotCapitalizedWords = [
  'in', 'on', 'at', 'from', 'to', 'as', 'by', 'under', 'up',
  'and', 'a', 'an', 'but', 'or', 'for', 'nor', 'the',
  'is', 'are'
]

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.substr(1)
}

function capitalizeTitle(word, index) {
  if (shouldNotCapitalizedWords.includes(word.toLowerCase()) && index !== 0) {
    return word.toLowerCase()
  }
  return capitalize(word)
}

function snakeToCamel(name) {
  return name.split('_').reduce((accu, curr) => {
    return accu + capitalize(curr)
  })
}

function camelToSnake(name) {
  return name.split(/(?=[A-Z])/).map(v => v.toLowerCase()).join('_')
}


function camelToTitle(name) {
  return name.split(/(?=[A-Z])/).map(capitalizeTitle).join(' ')
}

function snakeToTitle(name) {
  return name.split('_').map(capitalizeTitle).join(' ')
}

module.exports = {
  snakeToCamel,
  camelToSnake,
  camelToTitle,
  snakeToTitle
}
