# DodgeBall

## The grading breakdown is

1. 20pts - Code Plan - Include this in a README.md file in your folder with comment in your code.
2. 20pts - Can add People to Players - When clicked the people are added to the Players column and removed from the People list while getting new values of a player added to them.
3. 20pts - Can add Players to different Teams - When we click on the blue button the Player is added to the blue team and removed from the Player list while also getting the keys color and mascot extended to them when they are moved to a team.
4. 20pts - Uses class - This is not a hack job. You should use class to add the new properties you need and extend when you need.
5. 20pts - Minimum 3 Unit Tests - Use Mocha and Chai to give us at least 3 unit tests that prove a person becomes a player and a player becomes a teammate.

## Code Plan

### Set up Player class

- variables: NAME, AGE, SKILL
- methods: N/A

### Allow people to be added to list of players

1. Create new player with Player class
2. Add new player to players array
3. Add player to list in the UI
4. Remove player from people array
5. Remove player from people list in the UI

### Extend player class with TeamMember class

- variables:
  - extended: NAME, AGE, SKILL
  - new: TEAM, MASCOT
- methods: N/A

### Allow players to be added to team

1. Create new member with Team Member class
2. Add new player to either red or blue team array
3. Add player to list of either red or blue team in the UI
4. Remove player from players array
5. Remove player from players list in the UI

## Test Explanations

### 1. Adding person to list of dodge ball players

- [x] When clicking on a "Make Player" button next to a person, I expect that player to be removed from the "List of People" and added to the "Dodge Ball Players" in the UI. The people array should have that person removed and the players array should have that new person added. The UI and console log tests show this is happening.

### 2. Add person to either blue or red team

- [x] When clicking on either the "Red Team" or "Blue Team" button next to a player listed under "Dodge Ball Players", that person should be removed from the list of "Dodge Ball Players" in the UI. This player should also be removed from the players array and added to the array of the appropriate colored team. This new team member should also have two additional fields attached to it: the color of the team and the appropriate mascot. The UI and console log tests show this is happening.
