import test from 'ava';
import fn from './';

test('average colour', t => {
	t.is(fn(['#ffffff', '#000000']), '#808080');
	t.end();
});
