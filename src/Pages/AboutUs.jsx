
import React from 'react';
import FamilyFacts from '../COMPS/FamilyFacts';
import '../CSS/about.css';

const AboutUs = () => {
  const familyFacts = [
    "We settle disputes with dance-offs! When a decision needs to be made, we have a friendly dance competition, and the best moves determine the outcome.",
    "We've developed a top-secret family handshake that's so intricate even the youngest members have it down pat. It's like our own secret language.",
    "Every summer, we have an epic potato salad-making competition. It's fiercely competitive, and our neighbors often wonder if we're preparing for a Potato Salad Olympics.",
    "When we have movie nights, they quickly escalate into what we call 'Seal-nado' nights. There's a whirlwind of popcorn, laughter, and sometimes even costumes related to the movie theme.",
    "We secretly dream of becoming a famous family band, but we're still deciding on the band name. Suggestions are welcome!",
    "We're renowned for our elaborate scavenger hunts during family reunions. They've been known to involve treasure maps, riddles, and the occasional unexpected twist.",
    "Cooking competitions are our specialty, but they usually end up with at least one kitchen disaster. We wear aprons that say, 'Nuclear Seals: Where Taste and Chaos Collide.'",
    "We once visited a petting zoo and ended up adopting several animals. We now have an 'unofficial' family petting zoo in our backyard.",
    "The annual water balloon fight is so legendary that the entire neighborhood is on high alert when we start filling balloons.",
    "We're the family who can turn a simple road trip into a full-blown karaoke concert. Our harmonies are a work in progress.",
    "Every year, we host a 'Hidden Talent Night' where family members unveil their secret, often quirky, talents. Expect surprises like spoon-playing, expert whistling, or impromptu stand-up comedy.",
    "Family vacations often turn into our own version of the TV show 'Survivor.' Who can make the best shelter out of beach towels, or who can catch the most exotic seashells."
  ];

  return (
    <div className="about-container"> {/* Updated class name */}
      
      <FamilyFacts facts={familyFacts} />
    </div>
  );
}

export default AboutUs;






















/* import React from 'react';
import FamilyFacts from '../COMPS/FamilyFacts'; // Import your FamilyFacts component
import '../CSS/about.css';

const AboutUs = () => {
  const familyFacts = [
    "We settle disputes with dance-offs! When a decision needs to be made, we have a friendly dance competition, and the best moves determine the outcome.",
    "We've developed a top-secret family handshake that's so intricate even the youngest members have it down pat. It's like our own secret language.",
    "Every summer, we have an epic potato salad-making competition. It's fiercely competitive, and our neighbors often wonder if we're preparing for a Potato Salad Olympics.",
    "When we have movie nights, they quickly escalate into what we call 'Seal-nado' nights. There's a whirlwind of popcorn, laughter, and sometimes even costumes related to the movie theme.",
    "We secretly dream of becoming a famous family band, but we're still deciding on the band name. Suggestions are welcome!",
    "We're renowned for our elaborate scavenger hunts during family reunions. They've been known to involve treasure maps, riddles, and the occasional unexpected twist.",
    "Cooking competitions are our specialty, but they usually end up with at least one kitchen disaster. We wear aprons that say, 'Nuclear Seals: Where Taste and Chaos Collide.'",
    "We once visited a petting zoo and ended up adopting several animals. We now have an 'unofficial' family petting zoo in our backyard.",
    "The annual water balloon fight is so legendary that the entire neighborhood is on high alert when we start filling balloons.",
    "We're the family who can turn a simple road trip into a full-blown karaoke concert. Our harmonies are a work in progress.",
    "Every year, we host a 'Hidden Talent Night' where family members unveil their secret, often quirky, talents. Expect surprises like spoon-playing, expert whistling, or impromptu stand-up comedy.",
    "Family vacations often turn into our own version of the TV show 'Survivor.' Who can make the best shelter out of beach towels, or who can catch the most exotic seashells."
  ];

  return (
    <div className="App">
      <h1>Fun Family Facts</h1>
      <FamilyFacts facts={familyFacts} />
    </div>
  );
}

export default AboutUs;
 */











