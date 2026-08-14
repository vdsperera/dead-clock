const PROMPTS = [
  {text:"Would you rather know exactly when you will die, or never know but live with uncertainty?", a:"KNOW", b:"NEVER KNOW", axis:"CONTROL", deltaA:1, deltaB:-1},
  {text:"If you could change one thing in your past, knowing it could change everything that followed in unpredictable ways, would you?", a:"CHANGE IT", b:"LEAVE IT", axis:"CONTROL", deltaA:1, deltaB:-1},
  {text:"You find $20 on the sidewalk. No one's around.", a:"SPEND IT TODAY", b:"SAVE IT", axis:"PRESENCE", deltaA:1, deltaB:-1},
  {text:"Someone cuts in front of you in a long line.", a:"SAY SOMETHING", b:"LET IT GO", axis:"CONNECTION", deltaA:1, deltaB:-1},
  {text:"You already sent the email. Now you spot the typo.", a:"SEND A CORRECTION", b:"HOPE NO ONE NOTICES", axis:"HONESTY", deltaA:1, deltaB:-1},
  {text:"You always order the same thing here. Tonight there's a new dish.", a:"TRY THE NEW ONE", b:"ORDER THE USUAL", axis:"CONTROL", deltaA:1, deltaB:-1},
  {text:"You're scrolling old photos. It's 1am and you have work tomorrow.", a:"KEEP SCROLLING", b:"CLOSE IT, SLEEP", axis:"PRESENCE", deltaA:1, deltaB:-1},
  {text:"You're exhausted. A friend texts asking you to come out tonight.", a:"CANCEL, REST", b:"GO ANYWAY", axis:"CONNECTION", deltaA:1, deltaB:-1},
  {text:"Mid-argument, you realize you're actually the one who's wrong.", a:"ADMIT IT NOW", b:"WAIT FOR THEM TO SAY IT FIRST", axis:"HONESTY", deltaA:1, deltaB:-1},
  {text:"Big decision, deadline in an hour. No time to sleep on it.", a:"GO WITH YOUR FIRST INSTINCT", b:"MAKE A QUICK PROS/CONS LIST", axis:"CONTROL", deltaA:1, deltaB:-1},
  {text:"Everyone's out tonight. You're comfortable at home, but you know you'll hear about it tomorrow.", a:"STAY IN", b:"GO, YOU DON'T WANT TO MISS IT", axis:"PRESENCE", deltaA:1, deltaB:-1},
  {text:"Someone who hurt you a while back just texted 'hey, thinking of you.'", a:"IGNORE IT", b:"REPLY", axis:"CONNECTION", deltaA:1, deltaB:-1},
];
