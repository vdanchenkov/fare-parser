import toTokens from './toTokens';
import { expect } from 'chai';

describe('toTokens', () => {
  it('removes tags', () => {
    expect(toTokens('<div>test</div>')).to.be.eql(['test']);
  })

  it('removes extra spaces', () => {
    expect(toTokens('<div> test  with spaces  </div> ')).to.be.eql(['test with spaces']);
  })

  it('supports nested tags', () => {
    expect(toTokens('<div> test <span>it</span></div>')).to.eql(['test', 'it']);
  })
})