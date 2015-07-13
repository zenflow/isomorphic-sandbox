var test = require('tape');
var fs = require('fs');
var lib = require('../lib');

test('fake', function(t){
    t.plan(1);
    t.equal(lib.assets['../assets/sample.html'], fs.readFileSync(__dirname + '/../assets/sample.html', 'utf8'));
});