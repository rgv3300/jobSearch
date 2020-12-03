/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements:  */
eval("const jobContainer = document.querySelector('.jobContainer');\n\nlet jobData = (async() => {\n    try {\n        const fetchJob = await fetch('./data.json');\n        let jobs = await fetchJob.json();\n        displayJobs(jobs);\n    } catch (err) {\n        console.log(err)\n    };\n})();\n\nconst displayJobs = (jobs) => {\n    const htmlString = jobs\n        .map((job) => {\n            return `\n            <div class=\"job-card\">\n                <span><img class =\"icon-img\"src=${job.logo} alt=\"\"></span>\n                <h1>${job.company}</h1>\n                <h2>${job.position}</h2>\n                <p>${job.postedAt}${job.contract}${job.location}</p>\n                <span class=\"languages\">${job.languages}</span>\n            </div>\n            `;\n        })\n        .join('');\n    jobContainer.innerHTML = htmlString;\n}\n\n//# sourceURL=webpack://jobsearch/./src/script.js?");
/******/ })()
;