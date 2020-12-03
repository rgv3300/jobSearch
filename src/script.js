const jobContainer = document.querySelector('.jobContainer');

let jobData = (async() => {
    try {
        const fetchJob = await fetch('./data.json');
        let jobs = await fetchJob.json();
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
                <span><img class ="icon-img"src=${job.logo} alt=""></span>
                <h1>${job.company}</h1>
                <h2>${job.position}</h2>
                <p>${job.postedAt}${job.contract}${job.location}</p>
                <span class="languages">${job.languages}</span>
            </div>
            `;
        })
        .join('');
    jobContainer.innerHTML = htmlString;
}