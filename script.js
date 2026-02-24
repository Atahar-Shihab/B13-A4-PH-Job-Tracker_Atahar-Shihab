let jobs = [
    { id: 1, companyName: "Mobile First Corp", position: "React Native Developer", location: "Remote", type: "Full-time", salary: "$100k - $130k", description: "Build robust mobile applications using React Native.", status: "none" },
    { id: 2, companyName: "WebFlow Agency", position: "Web Designer", location: "Los Angeles, CA", type: "Part-time", salary: "$50k - $70k", description: "Create stunning web experiences for high-profile clients.", status: "none" },
    { id: 3, companyName: "DataViz Solutions", position: "Data Specialist", location: "Boston, MA", type: "Full-time", salary: "$120k - $140k", description: "Transform complex data into compelling visual narratives.", status: "none" },
    { id: 4, companyName: "CloudFirst Inc", position: "Backend Developer", location: "Seattle, WA", type: "Full-time", salary: "$130k - $160k", description: "Design and maintain scalable backend systems.", status: "none" },
    { id: 5, companyName: "Innovation Labs", position: "UI/UX Engineer", location: "Austin, TX", type: "Full-time", salary: "$110k - $140k", description: "Create beautiful user interfaces for our suite of products.", status: "none" },
    { id: 6, companyName: "MegaCorp", position: "JavaScript Developer", location: "New York, NY", type: "Full-time", salary: "$100k - $120k", description: "Build software applications with JavaScript and modern frameworks.", status: "none" },
    { id: 7, companyName: "StartupXYZ", position: "Full Stack Engineer", location: "Remote", type: "Full-time", salary: "$120k - $150k", description: "Join our fast-growing team and work on our core platform.", status: "none" },
    { id: 8, companyName: "TechCorp", position: "Frontend Developer", location: "San Francisco", type: "Full-time", salary: "$140k - $170k", description: "Lead scalable web applications using React and TypeScript.", status: "none" }
];

let currentTab = "None";

function renderApp() {
    let interviewCount = 0;
    let rejectedCount = 0;
    
    for (let i = 0; i < jobs.length; i++) {
        if (jobs[i].status === "interview") {
            interviewCount++;
        } else if (jobs[i].status === "rejected") {
            rejectedCount++;
        }
    }

    document.getElementById("total-count").innerText = jobs.length;
    document.getElementById("interview-count").innerText = interviewCount;
    document.getElementById("rejected-count").innerText = rejectedCount;


    let jobsToShow = [];
    
    for (let i = 0; i < jobs.length; i++) {
        if (currentTab === "all") {
            jobsToShow.push(jobs[i]);
        } else if (jobs[i].status === currentTab) {
            jobsToShow.push(jobs[i]);
        }
    }

    document.getElementById("tab-job-count").innerText = jobsToShow.length;

    const container = document.getElementById("job-container");
    container.innerHTML = ""; 

    if (jobsToShow.length === 0) {
        container.innerHTML = `
            <div class="text-center py-16 px-5 bg-white rounded-lg border border-gray-100 shadow-sm">
                <h3 class="text-xl font-bold text-blue-900 mb-2">No jobs available</h3>
                <p class="text-gray-500 text-sm">Check back later for new job opportunities</p>
            </div>`;
        return; 
    }}