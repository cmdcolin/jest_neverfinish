const fs = require('fs')
describe('test', () => {
	it('json file', () => {
		var x = JSON.parse(fs.readFileSync('generated.json'))
		var y = fs.readFileSync('test.txt')
		for(let i = 0; i < x.length; i++) {
			x[i].data = y
		}
		var z = JSON.parse(fs.readFileSync('generated.json'))
		expect(x).toEqual(z)
	})
})

