const recastai = require('recastai')

const client = new recastai.request('ef04d664f0477ad4852e69dfdad1b47b', 'fr')

client.converseText('hello')
  .then(function(res) {
    if (res.action) { console.log('Action: ', res.action.slug) }
    const reply = res.reply()
    console.log('Reply: ', reply)
  })