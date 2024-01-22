1. Create the game components:
    - Create a Game component that will serve as the main container for the game.
    - Create a Board component that represents the game board.
    - Create a Square component that represents an individual square on the board.

2. Set up the initial state:
     - In the Game component, set up the initial state that includes an empty board and the current player.
    - Use the state hook, such as useState, to manage the state variables.

3. Render the game board:
    - In the Board component, render a 3x3 grid of Square components.
    - Pass the necessary props, such as the square's value and a click event handler, to each Square component.

4. Handle player moves:
    - Implement a handleClick function in the Game component that handles the player's moves.
    - Update the board state with the player's symbol (X or O) when a square is clicked.

5. Implement the game logic:
    - Create a function to check for a winner after each move.
    - Check if any row, column, or diagonal has three of the same symbols in a row.
    - Update the game status accordingly (win, draw, or ongoing).

5. Add game status and restart functionality:  
    - Display the game status (win, draw, or ongoing) in the Game component.
    - Implement a restart button that resets the board and the game state.

- component tree: Game > Board > Square
- state:
    -  game score number in Game component
    - update Board state after clicking square component
    - update board state if 3 individual squares are same veritcallu/horizontally/diagnoally to make a line through
    - update game component to say which team won
    onclick, if team noughts turn then make that div o etc

