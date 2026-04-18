const resources = [
    { title: "2-Month Placement Roadmap", url: "assets/resources/2-Month-Placement-Roadmap.pdf" },
    { title: "Coding Roadmap 1 month", url: "assets/resources/Coding-Roadmap-1-month.pdf" },
    { title: "1 Month Roadmap for On-Campus Placements", url: "assets/resources/1-Month-Roadmap-for-On-Campus-Placements.pdf" },
    { title: "Apply to 100 Companies Daily", url: "assets/resources/Apply-to-100-Companies-Daily.pdf" },
    { title: "Coding Problem Solving", url: "assets/resources/Coding-Problem-Solving.pdf" },
    { title: "Career Recovery & Growth Guide", url: "assets/resources/Career-Recovery---Growth-Guide.pdf" },
    { title: "Resume Template & Tips", url: "assets/resources/Resume-Template---Tips.pdf" },
    { title: "Ultimate On-Campus Placement Preparation Module", url: "assets/resources/Ultimate-On-Campus-Placement-Preparation-Module.pdf" },
    { title: "Programs & Internships for Women in Tech 2026", url: "assets/resources/Programs---Internships-for-Women-in-Tech-2026.pdf" },
    { title: "3-Month Roadmap - AI", url: "assets/resources/3-Month-Roadmap---AI.pdf" },
    { title: "15-Days Coding Roadmap", url: "assets/resources/15-Days-Coding-Roadmap.pdf" },
    { title: "Last minute Placement & Companies list", url: "assets/resources/Last-minute-Placement---Companies-list.pdf" },
    { title: "Ultimate DSA Sheet - Beginner Friendly", url: "assets/resources/Ultimate-DSA-Sheet---Beginner-Friendly.pdf" },
    { title: "OOPS Concept Guide", url: "assets/resources/OOPS-Concept-Guide.pdf" },
    { title: "Leetcode SQL Top 50", url: "https://leetcode.com/studyplan/top-sql-50/" },
    { title: "Hackerrank SQL Preparation", url: "https://www.hackerrank.com/domains/sql" },
    { title: "Java Blogs for Selection", url: "https://www.hungrycoders.com/blog" },
    { title: "Java Full Course Playlist", url: "https://www.youtube.com/@CodingwithAmanSahni" },
    { title: "GD Topics with Answers", url: "https://www.indiabix.com/group-discussion/topics-with-answers/" },
    { title: "GD Tips & Strategy", url: "assets/resources/GD-Tips---Strategy.pdf" },
    { title: "Placement Drive Preparation Part 1", url: "assets/resources/Placement-Drive-Preparation-Part-1.pdf" },
    { title: "AIML Roadmap PDF", url: "assets/resources/AIML-Roadmap-PDF.pdf" },
    { title: "Create Projects in 15 Days", url: "assets/resources/Create-Projects-in-15-Days.pdf" },
    { title: "Learn any Programming Language Guide", url: "assets/resources/Learn-any-Programming-Language-Guide.pdf" },
    { title: "HR Interview: Introduce Yourself", url: "https://www.indiabix.com/hr-interview/tell-me-about-yourself/" },
    { title: "Project Report Template", url: "assets/resources/Project-Report-Template.pdf" },
    { title: "Blind 75 DSA Sheet", url: "https://takeuforward.org/interviews/blind-75-leetcode-problems-detailed-video-solutions" },
    { title: "Striver SDE DSA Sheet", url: "https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems" },
    { title: "Best A2Z DSA Sheet", url: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2" },
    { title: "Computer Science Core Subjects", url: "assets/resources/Computer-Science-Core-Subjects.pdf" },
    { title: "OOP & DBMS Preparation", url: "assets/resources/OOP---DBMS-Preparation.pdf" },
    { title: "10 Days Aptitude Preparation", url: "assets/resources/10-Days-Aptitude-Preparation.pdf" },
    { title: "GFG DSA Practice Sheet", url: "https://www.geeksforgeeks.org/practice-for-cracking-any-coding-interview/" },
    { title: "Beginner Project Ideas Collection", url: "assets/resources/Beginner-Project-Ideas-Collection.pdf" },
    { title: "Mock Aptitude Test Online", url: "https://www.indiabix.com/online-test/aptitude-test/" },
    { title: "DSA Basic Topics Foundation", url: "assets/resources/DSA-Basic-Topics-Foundation.pdf" },
    { title: "Aptitude Topics Comprehensive", url: "assets/resources/Aptitude-Topics-Comprehensive.pdf" }
];

const linksGrid = document.getElementById('links-grid');
const searchInput = document.getElementById('resource-search');
const modal = document.getElementById('preview-modal');
const modalTitle = document.getElementById('modal-title');
const previewFrame = document.getElementById('preview-frame');
const closeModalBtn = document.getElementById('close-modal');

function getEmbedUrl(url) {
    // Local files and direct PDFs can be viewed directly
    return url;
}

function isEmbeddable(url) {
    // These external sites usually block iframes
    const nonEmbeddable = ['youtube.com', 'leetcode.com', 'hackerrank.com', 'takeuforward.org', 'geeksforgeeks.org', 'indiabix.com', 'hungrycoders.com', 'github.com'];
    return !nonEmbeddable.some(site => url.includes(site));
}

function openModal(res) {
    const embedUrl = getEmbedUrl(res.url);
    modalTitle.textContent = res.title;
    previewFrame.src = embedUrl;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; 
}

function closeModal() {
    modal.classList.remove('active');
    previewFrame.src = '';
    document.body.style.overflow = 'auto';
}

closeModalBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

function renderLinks(filter = '') {
    linksGrid.innerHTML = '';
    const filteredResources = resources.filter(res => 
        res.title.toLowerCase().includes(filter.toLowerCase())
    );

    filteredResources.forEach((res, index) => {
        const card = document.createElement('a');
        card.href = res.url;
        card.className = 'link-card';
        card.style.animationDelay = `${index * 0.05}s`;
        
        const canEmbed = isEmbeddable(res.url);
        
        card.addEventListener('click', (e) => {
            if (canEmbed) {
                e.preventDefault();
                openModal(res);
            } else {
                card.target = "_blank";
            }
        });

        card.innerHTML = `
            <div class="link-icon-circle">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
            </div>
            <span class="link-title">${res.title}</span>
            <div class="external-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
            </div>
        `;
        
        linksGrid.appendChild(card);
    });

    if (filteredResources.length === 0) {
        linksGrid.innerHTML = '<p style="text-align: center; color: var(--text-secondary); margin-top: 2rem;">No resources found for your search.</p>';
    }
}

searchInput.addEventListener('input', (e) => {
    renderLinks(e.target.value);
});

renderLinks();
