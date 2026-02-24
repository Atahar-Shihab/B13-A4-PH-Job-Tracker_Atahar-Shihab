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


    for (let i = 0; i < jobsToShow.length; i++) {
        let job = jobsToShow[i]; 
        
        let badgeText = "NOT APPLIED";
        let badgeClass = "bg-blue-50 text-blue-600";
        if (job.status === "interview") {
            badgeText = "INTERVIEW";
            badgeClass = "bg-green-50 text-green-700";
        } else if (job.status === "rejected") {
            badgeText = "REJECTED";
            badgeClass = "bg-red-50 text-red-700";
        }

        const btnIntClass = job.status === 'interview' ? 'bg-green-600 text-white border-green-600' : 'bg-white text-green-600 border-green-600 hover:bg-green-50';
        const btnRejClass = job.status === 'rejected' ? 'bg-red-600 text-white border-red-600' : 'bg-white text-red-600 border-red-600 hover:bg-red-50';

        const card = document.createElement("div");
        card.className = "bg-white p-5 rounded-lg shadow-sm border border-gray-100 relative";
        

        card.innerHTML = `
            <div class="flex justify-between items-start mb-3">
                <div>
                    <h3 class="text-lg font-bold text-blue-900">${job.companyName}</h3>
                    <p class="text-sm text-gray-500 mt-1">${job.position}</p>
                </div>
                <button class="delete-btn text-gray-300 hover:text-red-500 text-xl" data-id="${job.id}">🗑️</button>
            </div>
            <div class="flex flex-wrap gap-4 text-xs text-gray-600 mb-4">
                <span>  ${job.location}</span>
                <span>• ${job.type}</span>
                <span>• ${job.salary}</span>
            </div>
            <span class="inline-block px-2 py-1 rounded text-xs font-bold mb-4 ${badgeClass}">${badgeText}</span>
            <p class="text-sm text-gray-600 mb-5 leading-relaxed">${job.description}</p>
            <div class="flex gap-3">
                <button class="status-btn px-4 py-1.5 border rounded text-xs font-bold transition-colors ${btnIntClass}" data-action="interview" data-id="${job.id}">INTERVIEW</button>
                <button class="status-btn px-4 py-1.5 border rounded text-xs font-bold transition-colors ${btnRejClass}" data-action="rejected" data-id="${job.id}">REJECTED</button>
            </div>
        `;
        container.appendChild(card);
    }
