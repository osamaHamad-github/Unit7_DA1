document.getElementById('submit').addEventListener('click', genRan)

function genRan () {
  // generating a random number
  const random = Math.floor(Math.random() * 6) + 1

  // storing user guess in userRandom
  let userRandom = document.getElementById('user-guess').value
  userRandom = parseInt(userRandom)

  // checking if the guess was correct
  if (random === userRandom) {
    // changing the paragraph to the message below
    document.getElementById('message').innerText = 'well done! you guessed correctly!'
  } else {
    // telling user the correct answer
    document.getElementById('message').innerText = `try again! the correct answer was ${random}`
  }
}
