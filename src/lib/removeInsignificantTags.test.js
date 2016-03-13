import removeInsignificantTags from './removeInsignificantTags';
import { expect } from 'chai';

describe('removeInsignificantTags', () => {
  it('removes those tags', () => {
    const collapseWhitespace = (text) => text.replace(/\s+/g,' ');
    const html = `
      <html>
        <head>
          <script>
            some code
          </script>
        </head>
        <body>
          <div>text</div>
          <script>
            more code
          </script>
        </body>
      </html>
     `;
    const expectation = `
      <html>
        <body>
          <div>text</div>
        </body>
      </html>
    `;
    expect(collapseWhitespace(removeInsignificantTags(html))).eq(collapseWhitespace(expectation));
  });
});