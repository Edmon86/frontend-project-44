#!/usr/bin/env node
import runGame from '../src/index.js';
import getGcdData from '../src/games/gcd.js';

runGame('Find the greatest common divisor of given numbers.',getGcdData);

