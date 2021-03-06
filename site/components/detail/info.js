var hx = require('hxdx').hx
var binder = require('./binder')

module.exports = function (item) { 
  var style = {
    container: {
      width: '74.2%',
      height: '26%',
      marginLeft: '2%',
      display: 'inline-block',
      verticalAlign: 'top',
      borderRadius: '8px',
      border: 'solid 5px rgb(225, 226, 227)',
      padding: '2%'
    }
  }

  return hx`
  <div style=${style.container}>
    ${binder(item)}
  </div>`
}
