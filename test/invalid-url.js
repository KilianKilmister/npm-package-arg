import {npa} from '../lib/npm-package-arg.js';
import t from 'tap';

t.throws(() => npa('foo@gopher://goodluckwiththat'), {
  code: 'EUNSUPPORTEDPROTOCOL'
})
