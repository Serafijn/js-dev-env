import {expect} from 'chai'
import { JSDOM } from 'jsdom'
import fs from 'fs'

// Sample test
describe('index.html', () => {
  it('should say hello', () => {
    const index = fs.readFileSync('./src/index.html', 'utf-8')
    const dom = new JSDOM(index)
    const h1 = dom.window.document.getElementsByTagName('h1')[0]
    expect(h1.innerHTML).to.equal('Hello')
    dom.window.close()
  })
})
