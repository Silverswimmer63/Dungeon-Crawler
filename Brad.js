/*1. Add a parameter _status to the parent class of all monsters. Set this to "none" by default.
This will be "none" or it will be an object with the keys type, duration, damage
(for example {type: "frozen", duration: 5, damage: {min: 3, max: 5}}
2. Add a getter for status
3. Change the method for monsters attacking to check if the status is not equal
to none. If it is not, check to see if the status.type is frozen. If it is, then return 0;
4. Go though the various item assets, and for anything that produces damage or
healing add a key "type" to their damage object (right now it looks like {min: some number, max: some number}).
type should be set to one of the following - "damage" (normal damage), "healing", "frozen", or "burning"
5. if the type is "frozen" or "burning" add another key to the object, this key should be "duration"
6. Do the same for all the monster assets.

We will be working on making changes for all the parts of the monsters and items that need to be in
place to add back in DoT and 2ndary effects to combat in the next few days.
A. We will be changing how things give and take damage so that those are objects and can convey the
type of damage and the duration, if need be
B. We will start our update method for monsters, initially this will be used simply to count down any
duration timers, (and apply any DoT damage) but will do more when we have more of a game.
C. We will turn _status into an array, and will have to change attack method and update to support this
(so yeah, we can have freezing & burning monsters all at the same time, fun) */
