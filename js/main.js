'use strict';

import { $ } from "./bling.js";

const dayElem = $('#day');
const hrElem = $('#hr');
const minElem = $('#min');

const wedding = new Date(2019, 10, 9, 11, 30);


function calcTimeRemaining() {
   const now = new Date();

   // get the diff in minutes, hours, and days
   const diff = wedding.getTime() - now.getTime();
   let mins = diff / 1000 / 60;
   let hrs = mins / 60;
   let days = hrs / 24;

   // lop off everything but the remainders
   mins = mins % 60;
   hrs = hrs % 24;

   // lop off partial days, minutes, hours
   mins = Math.floor(mins).toString();
   hrs = Math.floor(hrs).toString();
   days = Math.floor(days).toString();

   // keep double digits
   if (mins.length < 2) mins = '0' + mins;
   if (hrs.length < 2) hrs = '0' + hrs;
   if (days.length < 2) days = '0' + days;

   // update the dom
   dayElem.textContent = days;
   hrElem.textContent = hrs;
   minElem.textContent = mins;
}

calcTimeRemaining();
setInterval(() => calcTimeRemaining(), 20000);
