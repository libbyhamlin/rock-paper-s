// IMPORT MODULES under test here:
// import example from '../src/example.js';
import { compThrow } from '../get-random-throw.js';

const test = QUnit.test;

test('if getThrow === 0 return rock', function(assert) {
  //Arrange
  // Set up your parameters and expectations
    const num = 0;
    const expected = 'rock';

  //Act
  // Call the function you're testing and set the result to a const
    const answer = compThrow(num);

  //Assert
  // Make assertions about what is expected valid result
    assert.equal(answer, expected);
});

test('if getThrow === 1 return paper', function(assert) {
  //Arrange
  // Set up your parameters and expectations
    const num = 1;
    const expected = 'paper';

  //Act
  // Call the function you're testing and set the result to a const
    const answer = compThrow(num);

  //Assert
  // Make assertions about what is expected valid result
    assert.equal(answer, expected);
});

test('if num === 2 return scissors', function(assert) {
  //Arrange
  // Set up your parameters and expectations
    const num = 2;
    const expected = 'scissors';

  //Act
  // Call the function you're testing and set the result to a const
    const answer = compThrow(num);

  //Assert
  // Make assertions about what is expected valid result
    assert.equal(answer, expected);
});

// Step 1: write test first.
// step 2: write function.
// step 3: Check to see if your tests pass.
