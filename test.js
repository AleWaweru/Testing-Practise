const stringLength = require('./index');

describe('stringLength', () => {
  test('returns the correct length for a non-empty string', () => {
    expect(stringLength('hello world')).toBe(11);
  });
});

  

  
 
 