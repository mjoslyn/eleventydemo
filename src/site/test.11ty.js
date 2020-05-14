let htm = require('htm')
let vhtml = require('vhtml')

const html = htm.bind(vhtml)

let Header = ({ name }) =>
  html/*html*/ `
    <div>${name}</div>
  `
class Test {
  data() {
    return {
      title: 'THIS   A TITLE',
      layout: 'home',
    }
  }
  render() {
    return html/*html*/ `
      <h1 id="hello">
        Hello
        <div>
          <${Header} name="mr du" />
        </div>
      </h1>
    `
  }
}

module.exports = Test
