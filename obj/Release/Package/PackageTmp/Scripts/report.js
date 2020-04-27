function get_report() {
    
    document.getElementById("block").style.display = "none";
    
    document.getElementById("hide").style.display = "block";

   
   
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
        vars[key] = value;
    });
    document.getElementById("overall").innerHTML = vars["id"];



    if (vars["id"] < 24) {
        document.getElementById("risk_home").innerHTML = "Low Risk";

    }
    if (vars["id"] >= 24 && vars["id"] <= 40) {
        document.getElementById("risk_home").innerHTML = "Medium Risk";

    }

    if (vars["id"] >= 40 && vars["id"] <= 999) {
        document.getElementById("risk_home").innerHTML = "High Risk";

    }



    if (vars["id"] < 13) {
        document.getElementById("risk_health").innerHTML = "Low Risk";

    }
    if (vars["id"] >= 13 && vars["id"] <= 40) {
        document.getElementById("risk_health").innerHTML = "Medium Risk";

    }

    if (vars["id"] >= 40 && vars["id"] <= 999) {
        document.getElementById("risk_health").innerHTML = "High Risk";

    }
    


    if (vars["q5"] == "n") {
        document.getElementById("one").innerHTML = "Are you currently diagnosed with Osteoporosis or any medical condition that may diminish your bone strength?";
        document.getElementById("ans1").innerHTML = "Researches have shown that osteoporosis can often increase the risk of falls especially among Senior citizens.People with osteoporosis often have weaker muscle strength that can often lead to poor balance control causing people to fal.In addition, people who are suffering from osteoporosis also has a higher chance of receiving multiple fractures during a fall incident, which means the impact of the fall for people who are experiencing osteoporosis will be way more severe compare to someone who is not suffering from any medical condition with diminished bone strength.Therefore, improving muscle quality, strengthening weak muscles, and correcting postural alignment are essential elements for the prevention of falls and fractures in older adults with osteoporosis";

    }
    if (vars["q6"] == "n") {
        document.getElementById("two").innerHTML = "Do you have any visual impairments that can affect your depth perception, peripheral vision and visual acuity (clarity of vision)?";
        document.getElementById("ans2").innerHTML = "Vision problems can make difficult for seniors to anticipate and spot tripping and slipping hazards around their home environment, as their depth perception, peripheral vision and/or visual acuity could be compromised.";
    }

    if (vars["q7"] == "n") {
        document.getElementById("three").innerHTML = "Are you currently suffering from any Cardiovascular Illnesses?";
        document.getElementById("ans3").innerHTML = "Cardiovascular disorders can contribute to falls in seniors due to loss of balance from dizziness, light-headedness or even sudden loss of consciousness caused by various forms of heart complications (e.g. irregular heart beat, low blood pressure and unusual blood flow through the heart";
    }

    if (vars["q8"] == "n") {
        document.getElementById("five").innerHTML = "Are all the areas in your home will lit?";
        document.getElementById("ans5").innerHTML = "Inadequate lighting is a major hazard. To create a home thatâ€™s more suitable for elderly, try to install brighter light bulbs around the house.  Also think about adding night-lights in bedrooms and bathrooms for better guidance at night.";
    }
    if (vars["q9"] == "n") {
        document.getElementById("six").innerHTML = "Do have movement sensor lights near stairs and your hallway?";
        document.getElementById("ans6").innerHTML = "Removing the need to turn lights is a great way to make sure the hallways, stairs or steps or any rooms that has high potential of tripping or slipping automatically light up to minimise the chance of tripping.";
    }
    if (vars["q10"] == "n") {
        document.getElementById("seven").innerHTML = "Are all your light switches in your working?";
        document.getElementById("ans7").innerHTML = "emoving the need to turn lights is a great way to make sure the hallways, stairs or steps or any rooms that has high potential of tripping or slipping automatically light up to minimise the chance of tripping.";

    }
    if (vars["q11"] == "n") {
        document.getElementById("eigth").innerHTML = "Do you always clean up your floors right away when spoilage occurs?";
        document.getElementById("ans8").innerHTML = "Always remeber clean up spills as soon as they happen to reduce your risk of falling.";
    }

    if (vars["q12"] == "n") {
        document.getElementById("nine").innerHTML = "Do you have any uneven floor/ground surface in the house?";
        document.getElementById("ans9").innerHTML = "Talk to a local mat/rug or flooring company about having your mat/rug repaired or replaced if it is uneven. In the meantime, place bright coloured tape over worn areas to remind you not to walk on them.";
    }
    if (vars["q13"] == "n") {
        document.getElementById("ten").innerHTML = "Are your mats or rugs fix to the floors or have non slip underlay? (If you do not have any mats or rugs PLEASE SELECT YES)";
        document.getElementById("ans10").innerHTML = "Consider removing your mats to make your house as safe as possible. Any mats that remain in the house should have a non-slip backing to stop them from moving around as you walk on them, including door mats.";
    }
    if (vars["q14"] == "n") {
        document.getElementById("eleven").innerHTML = "Do you have hand rails for the stairs/steps?";
        document.getElementById("ans11").innerHTML = "A sturdy grab rail can help you move up and down your steps more safely. Install the hand rails for the stairs/steps. OR, speak to your home care provider or GP and request an Occupational Therapy Home Assessment to find out what is best for your situation.";
    }
    if (vars["q15"] == "n") {
        document.getElementById("twelve").innerHTML = "Do you have sensor lights for these stairs/steps?";
        document.getElementById("ans12").innerHTML = "Installing sensor lights that come on automatically as you enter a dark area can help you spot hazards in your path. Another option is to leave a light on in darker areas.";
    }
    if (vars["q16"] == "n") {
        document.getElementById("thirt").innerHTML = "Are your hallways/walkways free from clutter?";
        document.getElementById("ans13").innerHTML = "Keeping objects off the floor and in easy to reach places prevents them from becoming a slip, trip or fall hazard.";

    }
    if (vars["q17"] == "n") {
        document.getElementById("fourt").innerHTML = "Do you have any loose cords laying around the house?";
        document.getElementById("ans14").innerHTML = "Loose cords can be hazardous when they are in your walking path. Speak to a local electrician to have power points fitted closer to where you need them. Keep cords out of your path by securing them against your walls with brightly coloured tape.";
    }
    if (vars["q18"] == "n") {
        document.getElementById("fifteen").innerHTML = "Are you pets wearing any collar bells? (If you do not have any mats or rugs PLEASE SELECT YES)";
        document.getElementById("ans15").innerHTML = "Pets can become a trip hazard when they are at your feet. Attaching a bell to their collar can make it easier to hear when they are close";
    }
    if (vars["id"] < 13) {
        document.getElementById("ans1").innerHTML = "You have a great score. You are at a very low risk of falling";
    }
}

function preview() {
    document.getElementById("hiden").style.display = "block"
    document.getElementById("hide").style.display = "none";
    document.getElementById("block").style.display = "none";
    document.getElementById("btn").style.display = "none";
}