/*
Make a function called randomFoe();
for now, make this in javascript.js
It should do the following at first implementation -
1. Take the list of all the opponents.
2. Find out how long that list is.
3. Use that number and and randomness to get an index for that list.
4. Access (but do not remove) the object at that index to make a copy of that foe.
This means take the template, and use it to make a new monster of the correct class.
for example, if the class was Cowboy, it should make a new object of Class Cowboy.
5. Return that object.

const COMPLETE_LOOT_LiST = [
{name: "Throwing stones",
type: Ranged,
value: 1,
desc: "Just rocks... literaly just rocks",
icon: "L",
range: 4,
damage: {min:2, max:5}
},
{name: "Fireworks",
type: Ranged,
value: 5,
desc: "whoshhhh................... BANG!",
icon: "L",
range: 6,
damage: {min:3, max:8}
},
{name: "Greek Bow",
type: Ranged,
value: 12,
desc: "It's problly at least 20 times older than you",
icon: "L",
range: 5,
damage: {min:6, max:8}
},
{name: "Trained Falcon",
type: Ranged,
value: 10,
desc: "I guess he likes you",
icon: "L",
range: 5,
damage: {min:5, max:6}
},
{name: "Magnetic Rocks",
type: Ranged,
value: 8,
desc: "There cool… fun to play with… hurts when someone throws them at you",
icon: "L",
range: 4,
damage: {min:3, max:6}
},
{name: "Rusty Revolver",
type: Ranged,
value: 20,
desc: "Please just sell it, its unsafe to use every time you pull the trigger there a good chance you'll just blow your hand off",
icon: "L",
range: 6,
damage: {min:8, max:12}
},
{name: "Throwing Axe",
type: Ranged,
value: 24,
desc: "while normal throwing axes are a quarter size of a regular axe but these are the size of a full on battle axe",
icon: "L",
range: 2,
damage: {min:16, max:24}
},
{name: "Shootgun",
type: Ranged,
value: 26,
desc: "A shotgun but longer",
icon: "L",
range: 4,
damage: {min:20, max:26},
},
{name: "Snake Lasso",
type: Ranged,
value: 30,
desc: "Unfortunately he's been defanged but he still has some bite",
icon: "L",
range: 5,
damage: {min:24, max:26},
},
{name: "Money Bag",
type: Ranged,
value: 36,
desc: "A bag of gold tied to your hand kratos style",
icon: "L",
range: 4,
damage: {min:26, max:28}
},
{name: "Laser Pointer",
type: Ranged,
value: 40,
desc: "Aim for the eye for maximum effect",
icon: "L",
range: 10,
damage: {min:28, max:34}
},
{name: "Hacking Laptop",
type: Ranged,
value: 50,
desc: "Smashing hands on keyboard... iM iN (use sunglasses for max effect)",
icon: "L",
range: 6,
damage: {min:30, max:32}
},
{name: "Ray Gun",
type: Ranged,
value: 55,
desc: "Orginated from the body of a very mad man crawling around yelling about need a revive after being knocked down by a disgruntled man in a torn Nazi uniform",
icon: "L",
range: 6,
damage: {min:28, max:34}
},
{name: "Fancy Future Rifle",
type: Ranged,
value: 50,
desc: "This rifle is clearly just an AK-47 with a ton of RGB lighting everywhere",
icon: "L",
range: 8,
damage: {min:34, max:36}
},
{name: "Serrated Fedora",
type: Ranged,
value: 40,
desc: "For those reddit users who watched a little too much James Bond",
icon: "L",
range: 3,
damage: {min:30, max:32}
},
{name: "Replica Mouse",
type: Ranged,
value: 100,
desc: "A replica of A fabled mouse one that shakes the strongest, boldest, and bravest men to the core. this is but a recreation of mikes computer mouse",
icon: "L",
range: 10,
damage: {min:50, max:60}
},
{name: "Mikes Controller",
type: Ranged,
value: 99999999999999,
desc: "The only thing powerful enough to even give you a chance at killing the beast",
icon: "C",
range: 16,
damage: {min:200, max:250}
}
]
const COMPLETE_POTION_LIST = [
  {name: "Bandaid",
  class:Potion,
  value:20,
  desc:"a basic bandaid with a lipstick smug and a message saying LOVE MOM... I love you mom",
  icon:"P",
  heal: {min:1, max:20}
},
{name: "Thoughts and prayers",
class:Potion,
value:15,
desc:"while this tecnecly dose nothing it somehow bolsters your spirits and heals you... I would have prefured a heath kit",
icon:"P",
heal:{min:5, max:5}
},
{name: "Heath kit",
class:Potion,
value:50,
desc:"a basic bandaid with a lipstick smug and a message saying LOVE MOM",
icon:"P",
heal:{min:10, max:40}
},
{  name:"Molotov",
  class:Potion,
  value:20,
  desc:"you would think its cheap but these babys are made with premium botttles",
  icon:"P",
  dot:{min:5, max:20},
  terms: {min:5, max:10}
},
{  name:"Defence potion",
  class:Potion,
  value:30,
  desc:"you recive thicc skin so you can shrug off attcks but you now increadable sensitive to harsh words now",
  icon:"P",
  defence:1.5
},
{  name:"Potion of Buff",
  class:Potion,
  value:30,
  desc:"you become increadably strong at the experce of your literacy, you will forget how to read if you use this... but thats for nerds anyways",
  icon:"P",
},
{  name:"Freeze potion",
  class:Potion,
  value:35,
  desc:"Yo, VIP, let's kick it! Ice ice baby Ice ice baby All right stop Collaborate and listen Ice is back with my brand new invention Something grabs a hold of me tightly Then I flow that a harpoon daily and nightly Will it ever stop? Yo, I don't know Turn off the lights and I'll glow To the extreme, I rock a mic like a vandal Light up a stage and wax a chump like a candle Dance Bum rush the speaker that booms I'm killin' your brain like a poisonous mushroom Deadly, when I play a dope melody Anything less that the best is a felony Love it or leave it You better gain way You better hit bull's eye The kid don't play If there was a problem Yo, I'll solve it Check out the hook while my DJ revolves it Ice ice baby Vanilla Ice ice baby Vanilla Ice ice baby Vanilla Ice ice baby Vanilla Now that the party is jumping With the bass kicked in, the fingers are pumpin' Quick to the point, to the point no faking I'm cooking MC's like a pound of bacon Burning them if they're not quick and nimble I go crazy when I hear a cymbal And a hi hat with a souped up tempo I'm on a roll and it's time to go solo Rollin in my 5.0 With my ragtop down so my hair can blow The girlies on standby Waving just to say hi Did you stop? No, I just drove by Kept on pursuing to the next stop I busted a left and I'm heading to the next block That block was dead Yo so I continued to a1a Beachfront Ave Girls were hot wearing less than bikinis Rock man lovers driving Lamborghini Jealous 'cause I'm out getting mine Shay with a gauge and Vanilla with a nine Ready for the chumps on the wall The chumps are acting ill because they're so full of eight balls Gunshots ranged out like a bell I grabbed my nine All I heard were shells Fallin' on the concrete real fast Jumped in my car, slammed on the gas Bumper to bumper the avenue's packed I'm tryin' to get away before the jackers jack Police on the scene You know what I mean They passed me up, confronted all the dope fiends If there was a problem Yo, I'll solve it Check out the hook while my DJ revolves it Ice ice baby Vanilla Ice ice baby Vanilla Ice ice baby Vanilla Ice ice baby Vanilla Take heed, 'cause I'm a lyrical poet Miami's on the scene just in case you didn't know it My town, that created all the bass sound Enough to shake and kick holes in the ground 'Cause my style's like a chemical spill Feasible rhymes that you can vision and feel Conducted and formed This is a hell of a concept We make it hype and you want to step with this Shay plays on the fade, slice it like a ninja Cut like a razor blade so fast Other DJ's say, damn If my rhyme was a drug I'd sell it by the gram Keep my composure when it's time to get loose Magnetized by the mic while I kick my juice If there was a problem Yo, I'll solve it! Check out the hook while my DJ revolves it Ice ice baby Vanilla Ice ice baby Vanilla Ice ice baby Vanilla Ice ice baby Vanilla Yo man, let's get out of here Word to your mother Ice ice baby Too cold Ice ice baby Too cold too cold Ice ice baby Too cold too cold Ice ice baby Too cold too cold",
  icon:"P",
  freeze: {min:3, max:5}
},
{  name:"lightning",
  class:Potion,
  value:35,
  desc:"Now I am become Death, the destroyer of the 7/11 bathroom-homeless man in NYC",
  icon:"P",
  damage:{min:15, max:35}
},
{  name:"Gold potion",
  class:Potion,
  value:80,

var foo = randomFoe();
when you then type foo, you should have a random foe from the list you made.
*/
