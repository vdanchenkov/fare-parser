import toText from './toText';
import { expect } from 'chai';

describe('toText', () => {
  it('removes tags', () => {
    expect(toText('<div>test</div>')).to.be.eq('test');
  })

  it('removes extra spaces', () => {
    expect(toText('<div> test </div> ')).to.be.eq('test');
  })

  it('supports nested tags', () => {
    expect(toText('<div> test <span>it</span></div>')).to.eq('test it');
  })
})