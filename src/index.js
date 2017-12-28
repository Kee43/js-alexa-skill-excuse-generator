'use strict';
const Alexa = require('alexa-sdk');

var APP_ID = "amzn1.ask.skill.1d612a65-b4f6-49e2-bfec-8a77a9653c87";

var languageStrings = {
  "en-GB": {
    "translation": {
      "DATA_LATE_EXCUSES": [
        "I've earned it",
        "My car won't start",
        "I have food poisoning",
        "I have had an allergic reaction",
        "I thought it was still the weekend",
        "I overslept because someone changed all the clocks in the house",
        "I drove to the place I'd rather work at by mistake",
        "I tried a new way in to work and it took me two hours",
        "There is a strike on",
        "Lost my car keys",
        "My alarm clock broke again",
        "My cat got stuck in the toilet",
        "I fell asleep in the car on the way",
        "My wife is ill, so I needed to get the children to school first",
        "I had the runs this morning",
        "I had a car accident and had to go to the hospital for whiplash",
        "I was waiting for a delivery guy that never showed",
        "I was waiting for a repairman to fix the washing machine",
        "A bird pooped on me and I had to run home and change clothes",
        "I fell asleep in the shower",
        "My phone was on silent and didn’t wake me up",
        "Traffic was really bad",
        "I got pulled over in a case of mistaken idendity",
        "I was delivering a baby",
      ],
      "DATA_HOMEWORK_EXCUSES": [
        "My dog ate it… duh!",
        "I don't remember we had homework?",
        "I've accidentally left it at home instead of putting it in my bag",
        "My printer broke",
        "My computer froze and I forgot to save",
        "I've been ill so couldn't finish it",
        "My bag was stolen",
        "A sudden wind blew it out of my hand literally just before I came in here",
        "I wasn’t here the day you gave it out",
        "I accidentally threw it out",
        "I accidentally flushed it down the toilet",
        "There was a freak storm and a tree fell on my house and now im homeless",
        "My cat sat on my keyboard and wouldn't get off",
        "I didn't fancy it",
        "It was too boring ",
        "Someone said I could copy theirs but then they changed their mind so now I have nothing",
        "What you gonna do?",
        "I've got a job at Dominos and I'm out of here",
        "My computer said no",
      ],
      "DATA_ATTENDING_EXCUSES": [
        "Someone flooded the toilet and now I have to wait for a plumber",
        "I'd rather watch Netflix",
        "I spent all my money on food and now I'm broke",
        "I'm banned from Uber",
        "I've got diarrehea and I'm too scared to leave the house",
        "My cat is better company. I don't have a cat",
        "Theres a freshly painted wall just waiting to be watched",
        "I never intended to attend, and I'm just letting you know now. You're welcome",
        "My partner accidentally donated all my clothes to charity so now I have nothing to wear",
        "The place you've chosen doesn't do gluten free vegan food",
        "I got an ASBO last weekend",
        "I went outside to take the bins out and now im too tired",
        "Ive decided that you are a bad influence",
        "I'm not that desperate"
      ],
      "SKILL_NAME": "Excuse Generator",
      "WELCOME_MESSAGE": "Weclome to excuse generator, start by asking me: Why am I late? Why didnt I do my homework? or Why cant I go out? and I will response with an excuse!",
      "HELP_MESSAGE": "You can ask me a question like: Why am I late? Why didnt I do my homework? or Why cant I go out? and I will response with an excuse!",
      "HELP_REPROMPT": "What can I help you with?",
      "STOP_MESSAGE": "Goodbye!",
      "GET_EXCUSE_LATE_START": "Okay your late excuse is: ",
      "GET_EXCUSE_HOMEWORK_START": "Okay your homework excuse is: ",
      "GET_EXCUSE_ATTENDING_START": "Okay your attending excuse is: ",
    }
  },
  "en-US": {
    "translation": {
        "DATA_LATE_EXCUSES": [
            "I've earned it",
            "My car won't start",
            "I have food poisoning",
            "I have had an allergic reaction",
            "I thought it was still the weekend",
            "I overslept because someone changed all the clocks in the house",
            "I drove to the place I'd rather work at by mistake",
            "I tried a new way in to work and it took me two hours",
            "There is a strike on",
            "Lost my car keys",
            "My alarm clock broke again",
            "My cat got stuck in the toilet",
            "I fell asleep in the car on the way",
            "My wife is ill, so I needed to get the children to school first",
            "I had the runs this morning",
            "I had a car accident and had to go to the hospital for whiplash",
            "I was waiting for a delivery guy that never showed",
            "I was waiting for a repairman to fix the washing machine",
            "A bird pooped on me and I had to run home and change clothes",
            "I fell asleep in the shower",
            "My phone was on silent and didn’t wake me up",
            "Traffic was really bad",
            "I got pulled over in a case of mistaken idendity",
            "I was delivering a baby",
        ],
        "DATA_HOMEWORK_EXCUSES": [
            "My dog ate it… duh!",
            "I don't remember we had homework?",
            "I've accidentally left it at home instead of putting it in my bag",
            "My printer broke",
            "My computer froze and I forgot to save",
            "I've been ill so couldn't finish it",
            "My bag was stolen",
            "A sudden wind blew it out of my hand literally just before I came in here",
            "I wasn’t here the day you gave it out",
            "I accidentally threw it out",
            "I accidentally flushed it down the toilet",
            "There was a freak storm and a tree fell on my house and now im homeless",
            "My cat sat on my keyboard and wouldn't get off",
            "I didn't fancy it",
            "It was too boring ",
            "Someone said I could copy theirs but then they changed their mind so now I have nothing",
            "What you gonna do?",
            "I've got a job at Dominos and I'm out of here",
            "My computer said no",
        ],
        "DATA_ATTENDING_EXCUSES": [
            "Someone flooded the toilet and now I have to wait for a plumber",
            "I'd rather watch Netflix",
            "I spent all my money on food and now I'm broke",
            "I'm banned from Uber",
            "I've got diarrehea and I'm too scared to leave the house",
            "My cat is better company. I don't have a cat",
            "Theres a freshly painted wall just waiting to be watched",
            "I never intended to attend, and I'm just letting you know now. You're welcome",
            "My partner accidentally donated all my clothes to charity so now I have nothing to wear",
            "The place you've chosen doesn't do gluten free vegan food",
            "I got an ASBO last weekend",
            "I went outside to take the bins out and now im too tired",
            "Ive decided that you are a bad influence",
            "I'm not that desperate"
        ],
        "SKILL_NAME": "Excuse Generator",
        "WELCOME_MESSAGE": "Weclome to excuse generator, start by asking me: Why am I late? Why didnt I do my homework? or Why cant I go out? and I will response with an excuse!",
        "HELP_MESSAGE": "You can ask me a question like: Why am I late? Why didnt I do my homework? or Why cant I go out? and I will response with an excuse!",
        "HELP_REPROMPT": "What can I help you with?",
        "STOP_MESSAGE": "Goodbye!",
        "GET_EXCUSE_LATE_START": "Okay your late excuse is: ",
        "GET_EXCUSE_HOMEWORK_START": "Okay your homework excuse is: ",
        "GET_EXCUSE_ATTENDING_START": "Okay your attending excuse is: "
        }
    },
    "en-AU": {
    "translation": {
      "DATA_LATE_EXCUSES": [
        "I've earned it",
        "My car won't start",
        "I have food poisoning",
        "I have had an allergic reaction",
        "I thought it was still the weekend",
        "I overslept because someone changed all the clocks in the house",
        "I drove to the place I'd rather work at by mistake",
        "I tried a new way in to work and it took me two hours",
        "There is a strike on",
        "Lost my car keys",
        "My alarm clock broke again",
        "My cat got stuck in the toilet",
        "I fell asleep in the car on the way",
        "My wife is ill, so I needed to get the children to school first",
        "I had the runs this morning",
        "I had a car accident and had to go to the hospital for whiplash",
        "I was waiting for a delivery guy that never showed",
        "I was waiting for a repairman to fix the washing machine",
        "A bird pooped on me and I had to run home and change clothes",
        "I fell asleep in the shower",
        "My phone was on silent and didn’t wake me up",
        "Traffic was really bad",
        "I got pulled over in a case of mistaken idendity",
        "I was delivering a baby",
      ],
      "DATA_HOMEWORK_EXCUSES": [
        "My dog ate it… duh!",
        "I don't remember we had homework?",
        "I've accidentally left it at home instead of putting it in my bag",
        "My printer broke",
        "My computer froze and I forgot to save",
        "I've been ill so couldn't finish it",
        "My bag was stolen",
        "A sudden wind blew it out of my hand literally just before I came in here",
        "I wasn’t here the day you gave it out",
        "I accidentally threw it out",
        "I accidentally flushed it down the toilet",
        "There was a freak storm and a tree fell on my house and now im homeless",
        "My cat sat on my keyboard and wouldn't get off",
        "I didn't fancy it",
        "It was too boring ",
        "Someone said I could copy theirs but then they changed their mind so now I have nothing",
        "What you gonna do?",
        "I've got a job at Dominos and I'm out of here",
        "My computer said no",
      ],
      "DATA_ATTENDING_EXCUSES": [
        "Someone flooded the toilet and now I have to wait for a plumber",
        "I'd rather watch Netflix",
        "I spent all my money on food and now I'm broke",
        "I'm banned from Uber",
        "I've got diarrehea and I'm too scared to leave the house",
        "My cat is better company. I don't have a cat",
        "Theres a freshly painted wall just waiting to be watched",
        "I never intended to attend, and I'm just letting you know now. You're welcome",
        "My partner accidentally donated all my clothes to charity so now I have nothing to wear",
        "The place you've chosen doesn't do gluten free vegan food",
        "I got an ASBO last weekend",
        "I went outside to take the bins out and now im too tired",
        "Ive decided that you are a bad influence",
        "I'm not that desperate"
      ],
      "SKILL_NAME": "Excuse Generator",
      "WELCOME_MESSAGE": "Weclome to excuse generator, start by asking me: Why am I late? Why didnt I do my homework? or Why cant I go out? and I will response with an excuse!",
      "HELP_MESSAGE": "You can ask me a question like: Why am I late? Why didnt I do my homework? or Why cant I go out? and I will response with an excuse!",
      "HELP_REPROMPT": "What can I help you with?",
      "STOP_MESSAGE": "Goodbye!",
      "GET_EXCUSE_LATE_START": "Okay your late excuse is: ",
      "GET_EXCUSE_HOMEWORK_START": "Okay your homework excuse is: ",
      "GET_EXCUSE_ATTENDING_START": "Okay your attending excuse is: ",
    }
  },
  "en-CN": {
    "translation": {
      "DATA_LATE_EXCUSES": [
        "I've earned it",
        "My car won't start",
        "I have food poisoning",
        "I have had an allergic reaction",
        "I thought it was still the weekend",
        "I overslept because someone changed all the clocks in the house",
        "I drove to the place I'd rather work at by mistake",
        "I tried a new way in to work and it took me two hours",
        "There is a strike on",
        "Lost my car keys",
        "My alarm clock broke again",
        "My cat got stuck in the toilet",
        "I fell asleep in the car on the way",
        "My wife is ill, so I needed to get the children to school first",
        "I had the runs this morning",
        "I had a car accident and had to go to the hospital for whiplash",
        "I was waiting for a delivery guy that never showed",
        "I was waiting for a repairman to fix the washing machine",
        "A bird pooped on me and I had to run home and change clothes",
        "I fell asleep in the shower",
        "My phone was on silent and didn’t wake me up",
        "Traffic was really bad",
        "I got pulled over in a case of mistaken idendity",
        "I was delivering a baby",
      ],
      "DATA_HOMEWORK_EXCUSES": [
        "My dog ate it… duh!",
        "I don't remember we had homework?",
        "I've accidentally left it at home instead of putting it in my bag",
        "My printer broke",
        "My computer froze and I forgot to save",
        "I've been ill so couldn't finish it",
        "My bag was stolen",
        "A sudden wind blew it out of my hand literally just before I came in here",
        "I wasn’t here the day you gave it out",
        "I accidentally threw it out",
        "I accidentally flushed it down the toilet",
        "There was a freak storm and a tree fell on my house and now im homeless",
        "My cat sat on my keyboard and wouldn't get off",
        "I didn't fancy it",
        "It was too boring ",
        "Someone said I could copy theirs but then they changed their mind so now I have nothing",
        "What you gonna do?",
        "I've got a job at Dominos and I'm out of here",
        "My computer said no",
      ],
      "DATA_ATTENDING_EXCUSES": [
        "Someone flooded the toilet and now I have to wait for a plumber",
        "I'd rather watch Netflix",
        "I spent all my money on food and now I'm broke",
        "I'm banned from Uber",
        "I've got diarrehea and I'm too scared to leave the house",
        "My cat is better company. I don't have a cat",
        "Theres a freshly painted wall just waiting to be watched",
        "I never intended to attend, and I'm just letting you know now. You're welcome",
        "My partner accidentally donated all my clothes to charity so now I have nothing to wear",
        "The place you've chosen doesn't do gluten free vegan food",
        "I got an ASBO last weekend",
        "I went outside to take the bins out and now im too tired",
        "Ive decided that you are a bad influence",
        "I'm not that desperate"
      ],
      "SKILL_NAME": "Excuse Generator",
      "WELCOME_MESSAGE": "Weclome to excuse generator, start by asking me: Why am I late? Why didnt I do my homework? or Why cant I go out? and I will response with an excuse!",
      "HELP_MESSAGE": "You can ask me a question like: Why am I late? Why didnt I do my homework? or Why cant I go out? and I will response with an excuse!",
      "HELP_REPROMPT": "What can I help you with?",
      "STOP_MESSAGE": "Goodbye!",
      "GET_EXCUSE_LATE_START": "Okay your late excuse is: ",
      "GET_EXCUSE_HOMEWORK_START": "Okay your homework excuse is: ",
      "GET_EXCUSE_ATTENDING_START": "Okay your attending excuse is: ",
    }
  },
  "en-IN": {
    "translation": {
      "DATA_LATE_EXCUSES": [
        "I've earned it",
        "My car won't start",
        "I have food poisoning",
        "I have had an allergic reaction",
        "I thought it was still the weekend",
        "I overslept because someone changed all the clocks in the house",
        "I drove to the place I'd rather work at by mistake",
        "I tried a new way in to work and it took me two hours",
        "There is a strike on",
        "Lost my car keys",
        "My alarm clock broke again",
        "My cat got stuck in the toilet",
        "I fell asleep in the car on the way",
        "My wife is ill, so I needed to get the children to school first",
        "I had the runs this morning",
        "I had a car accident and had to go to the hospital for whiplash",
        "I was waiting for a delivery guy that never showed",
        "I was waiting for a repairman to fix the washing machine",
        "A bird pooped on me and I had to run home and change clothes",
        "I fell asleep in the shower",
        "My phone was on silent and didn’t wake me up",
        "Traffic was really bad",
        "I got pulled over in a case of mistaken idendity",
        "I was delivering a baby",
      ],
      "DATA_HOMEWORK_EXCUSES": [
        "My dog ate it… duh!",
        "I don't remember we had homework?",
        "I've accidentally left it at home instead of putting it in my bag",
        "My printer broke",
        "My computer froze and I forgot to save",
        "I've been ill so couldn't finish it",
        "My bag was stolen",
        "A sudden wind blew it out of my hand literally just before I came in here",
        "I wasn’t here the day you gave it out",
        "I accidentally threw it out",
        "I accidentally flushed it down the toilet",
        "There was a freak storm and a tree fell on my house and now im homeless",
        "My cat sat on my keyboard and wouldn't get off",
        "I didn't fancy it",
        "It was too boring ",
        "Someone said I could copy theirs but then they changed their mind so now I have nothing",
        "What you gonna do?",
        "I've got a job at Dominos and I'm out of here",
        "My computer said no",
      ],
      "DATA_ATTENDING_EXCUSES": [
        "Someone flooded the toilet and now I have to wait for a plumber",
        "I'd rather watch Netflix",
        "I spent all my money on food and now I'm broke",
        "I'm banned from Uber",
        "I've got diarrehea and I'm too scared to leave the house",
        "My cat is better company. I don't have a cat",
        "Theres a freshly painted wall just waiting to be watched",
        "I never intended to attend, and I'm just letting you know now. You're welcome",
        "My partner accidentally donated all my clothes to charity so now I have nothing to wear",
        "The place you've chosen doesn't do gluten free vegan food",
        "I got an ASBO last weekend",
        "I went outside to take the bins out and now im too tired",
        "Ive decided that you are a bad influence",
        "I'm not that desperate"
      ],
      "SKILL_NAME": "Excuse Generator",
      "WELCOME_MESSAGE": "Weclome to excuse generator, start by asking me: Why am I late? Why didnt I do my homework? or Why cant I go out? and I will response with an excuse!",
      "HELP_MESSAGE": "You can ask me a question like: Why am I late? Why didnt I do my homework? or Why cant I go out? and I will response with an excuse!",
      "HELP_REPROMPT": "What can I help you with?",
      "STOP_MESSAGE": "Goodbye!",
      "GET_EXCUSE_LATE_START": "Okay your late excuse is: ",
      "GET_EXCUSE_HOMEWORK_START": "Okay your homework excuse is: ",
      "GET_EXCUSE_ATTENDING_START": "Okay your attending excuse is: ",
    }
  }
}

/**
 * ExcuseGenerator is a child of AlexaSkill.
 */
var ExcuseGenerator = function () {
    AlexaSkill.call(this, APP_ID);
};

// Extend AlexaSkill
const handlers = {
    'LaunchRequest': function () {
        this.emit(':ask', this.t("WELCOME_MESSAGE"));
    },
    'GetLateExcuseIntent': function () {

        const excuseArray = this.t("DATA_LATE_EXCUSES");
        const excuseIndex = Math.floor(Math.random() * excuseArray.length);
        const randomExcuse = excuseArray[excuseIndex];
        const speechOutput = this.t("GET_EXCUSE_LATE_START") + randomExcuse;
        this.emit(':tellWithCard', speechOutput, this.t("SKILL_NAME"), speechOutput);
    },
    'GetHomeworkExcuseIntent': function () {

        const excuseArray = this.t("DATA_HOMEWORK_EXCUSES");
        const excuseIndex = Math.floor(Math.random() * excuseArray.length);
        const randomExcuse = excuseArray[excuseIndex];
        const speechOutput =  this.t("GET_EXCUSE_HOMEWORK_START") + randomExcuse;
        this.emit(':tellWithCard', speechOutput, this.t("SKILL_NAME"), speechOutput);
    },
    'GetAttendingExcuseIntent': function () {

        const excuseArray = this.t("DATA_ATTENDING_EXCUSES");
        const excuseIndex = Math.floor(Math.random() * excuseArray.length);
        const randomExcuse = excuseArray[excuseIndex];
        const speechOutput = this.t("GET_EXCUSE_ATTENDING_START") + randomExcuse;
        this.emit(':tellWithCard', speechOutput, this.t("SKILL_NAME"), speechOutput);
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = this.t("HELP_MESSAGE");
        const reprompt = this.t("HELP_REPROMPT");
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t("STOP_MESSAGE"));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t("STOP_MESSAGE"));
    },
};

exports.handler = function (event, context, callback) {
    const alexa = Alexa.handler(event, context, callback);
    alexa.APP_ID = APP_ID;
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};
