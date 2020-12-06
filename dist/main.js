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
eval("const jobContainer = document.querySelector('.jobContainer');\nconst searchJob = document.querySelector('#jobInterest')\nlet jobs = [];\n\nsearchJob.addEventListener(\"keyup\", (e) => {\n    let jobCompany = e.target.value.toLowerCase();\n    // let jobLang = jobs.languages.map((language) => language.toLowerCase());\n    // let jobTools = jobs.tools.map((tool) => tool.toLowerCase());\n    const filteredJobs = jobs.filter((job) => {\n        return (job.company.toLowerCase().includes(jobCompany) || job.position.toLowerCase().includes(jobCompany));\n    });\n    displayJobs(filteredJobs);\n})\n\nlet jobData = (async() => {\n    try {\n        const fetchJob = await fetch('./data.json');\n        jobs = await fetchJob.json();\n        displayJobs(jobs);\n    } catch (err) {\n        console.log(err)\n    };\n})();\n\nconst displayJobs = (jobs) => {\n    const htmlString = jobs\n        .map((job) => {\n            return `\n            <div class=\"job-card\">\n                <img class =\"icon-img\"src=${job.logo} alt=\"\">\n                <div class = \"job-company\">${job.company}</div>\n                <div class = \"job-position\">${job.position}</div>\n                <div class = \"job-details\">${job.postedAt} . ${job.contract} . ${job.location}</div>\n                <div class= \"job-languages\"><span>${job.languages.join(\" \")}</span><span>${job.tools.join(\" \")}</span></div>\n            </div>\n            `;\n        })\n        .join('');\n    console.log(htmlString);\n    jobContainer.innerHTML = htmlString;\n}\n\n//# sourceURL=webpack://jobsearch/./src/script.js?");
/******/ })()
;