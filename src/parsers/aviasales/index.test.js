import parser from './index';
import { expect } from 'chai';
import fs from 'fs';

describe('aviasales parser', () => {
  it('parses tickets in russian language and rubles currency', () => {
    const path = __dirname + '/moscow_samara_rur.test.html';
    const html = fs.readFileSync(path).toString();
    const result = parser(html);
    expect(result).to.eql(['' +
        '5 288',
        '5 288',
        '5 385',
        '5 385',
        '5 385',
        '5 700',
        '5 700',
        '5 700']);
  });
});
