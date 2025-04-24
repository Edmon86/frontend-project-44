#!/usr/bin/env node
import runGame from '../src/index.js';
import getQuestionAndAnswer, { rules } from '../src/games/even.js';

runGame(rules, getQuestionAndAnswer);
