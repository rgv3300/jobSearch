const jobContainer = document.querySelector('.jobContainer');
const searchJob = document.querySelector('#jobInterest')
let jobs = [];

searchJob.addEventListener("keyup", (e) => {
    let jobCompany = e.target.value.toLowerCase();
    // let jobLang = jobs.languages.map((language) => language.toLowerCase());
    // let jobTools = jobs.tools.map((tool) => tool.toLowerCase());
    const filteredJobs = jobs.filter((job) => {
        return (job.company.toLowerCase().includes(jobCompany) || job.position.toLowerCase().includes(jobCompany));
    });
    displayJobs(filteredJobs);
})

let jobData = (async() => {
    try {
        const fetchJob = await fetch('./data.json');
        jobs = await fetchJob.json();
        displayJobs(jobs);
    } catch (err) {
        console.log(err)
    };
})();

const displayJobs = (jobs) => {
    const htmlString = jobs
        .map((job) => {
            return `
            <div class="job-card">
                <img class ="icon-img"src=${job.logo} alt="">
                <h1>${job.company}</h1>
                <h2>${job.position}</h2>
                <p>${job.postedAt} \n.  ${job.contract} \n.  ${job.location}</p>
                <span class="languages">${job.languages.join(" ")} ${job.tools.join(" ")}</span>
            </div>
            `;
        })
        .join('');
    console.log(htmlString);
    jobContainer.innerHTML = htmlString;
}