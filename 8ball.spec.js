/**
 * @module 8ball.spec.js
 *
 * Contains the units for our Magic 8-ball program.
 */

// import the code to be tested
const { eightball } = require('./8ball')

describe('A Magic 8-ball program', () => {
  it('can blow smoke', () => {
    expect(true).toBe(true)
  })

  it('has an 8-ball that can provide 20 answers', () => {
    expect(eightball.answers.length).toBe(20)
  })

  it('can choose an answer at random', () => {
    const answer = eightball.getAnswer()
    expect(eightball.answers.includes(answer)).toBe(true)
  })
})
