#!/usr/bin/env node
import runGame from '../src/index.js';
import getProgressionData from '../src/games/progression.js';

const gameDescription = 'What number is missing in the progression?';
runGame(gameDescription, getProgressionData);


