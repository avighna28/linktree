const resources = [
    { title: "2-Month Placement Roadmap", url: "https://www.dropbox.com/scl/fi/b6gh2xk66jdhfse790863/2-Month-Placement-Roadmap.pdf?rlkey=whzk94iouij67vove8hy6d8nr&st=1fm0qthp&dl=0" },
    { title: "Coding Roadmap 1 month", url: "https://www.dropbox.com/scl/fi/k0ob4x05k1511ca0wc3al/Coding-Roadmap-1-month.pdf?rlkey=ysfpszikr6y27ul95bvqdfokb&st=zhje464d&dl=0" },
    { title: "1 Month Roadmap for On-Campus Placements", url: "https://www.dropbox.com/scl/fi/vw7bih49dd4ztedlizbnk/1-Month-Roadmap-for-On-Campus-Placements.pdf?rlkey=3ukuvkdonrbevforsk0tfmbq5&st=bwrybywa&dl=0" },
    { title: "Apply to 100 Companies Daily", url: "https://www.dropbox.com/scl/fi/3xtc6mdc8fq62oyz8v4y3/_Apply-to-100-Companies-Daily.pdf?rlkey=h7a7hjdh89jia83kcc4e31stb&st=hqrbv7q7&dl=0" },
    { title: "Coding Problem Solving", url: "https://www.dropbox.com/scl/fi/yim9fvg55sjicrj61felj/Coding-Problem-Solving.pdf?rlkey=lr6jkur1an5hxcnng8pp6suk1&st=4q3kxif6&dl=0" },
    { title: "Career Recovery & Growth Guide", url: "https://www.dropbox.com/scl/fi/diu3c5r4f11nl4i8dzmdb/Career-Recovery-Growth-Guide.pdf?rlkey=s7g301504k0cp6tlinxzbuox4&st=iyt94jpk&dl=0" },
    { title: "Resume Template & Tips", url: "https://www.dropbox.com/scl/fi/0zbifyzbtduinv8n0g1ov/Resume-Template-Tips.pdf?rlkey=gkuxw4aw27avjvznuvzb4drvg&st=082wgvou&dl=0" },
    { title: "Ultimate On-Campus Placement Preparation Module", url: "https://www.dropbox.com/scl/fi/38gcfcueterxslwpfhulm/Ultimate-On-Campus-Placement-Preparation-Module.pdf?rlkey=irw89xbi96mrliqedsc48u51j&st=dr0d7axj&dl=0" },
    { title: "Programs & Internships for Women in Tech 2026", url: "https://www.dropbox.com/scl/fi/3hxop5fc2aj12rtdhard7/Programs-Internships-for-Women-in-Tech-2026.pdf?rlkey=zaeewf28atfnuexku33xegi1p&st=qz9vx7qk&dl=0" },
    { title: "3-Month Roadmap - AI", url: "https://www.dropbox.com/scl/fi/90340vt6o59adz2xzmtqc/3-Month-Roadmap-AI.pdf?rlkey=rb4nfh1pfzkj56grv4gr99221&st=a8uy80oz&dl=0" },
    { title: "15-Days Coding Roadmap", url: "https://www.dropbox.com/scl/fi/kve9wpm8m0ig71xs3tr1l/15-Day-Programming-Language-Roadmap-Kaabil-Engineer.pdf?rlkey=kchk390xebdgk7co0wbnwwx7g&st=e1cv1yxc&dl=0" },
    { title: "Last minute Placement & Companies list", url: "https://www.dropbox.com/scl/fi/b135kjivq4uy7oqd1crx1/Last-minute-Placement-Companies-list.pdf?rlkey=4basn64expyds0951he969pa8&st=mu7gb2ub&dl=0" },
    { title: "Kaabil DSA Sheet - Beginner Friendly", url: "https://www.dropbox.com/scl/fi/loh3j7xhowmt6tbkuthuf/Kaabil-Sheet-DSA-Beginner-Friendly.pdf?rlkey=padvbuso5le7h1e2o061y3guy&st=7xqt179y&dl=0" },
    { title: "OOPS Concept Guide", url: "https://www.dropbox.com/scl/fi/1xonaamwlc2jztlc7qdih/OOPS.pdf?rlkey=nexq5a88x2u3gaw7dkpci5sj4&st=i2mzmab8&dl=0" },
    { title: "Laptops Configs for Engineers", url: "https://www.dropbox.com/scl/fi/f0v531g9vclv4vef38hll/Laptops.pdf?rlkey=4jpxswy7oat6i4p18ksw4g9e1&st=l7pxz0u7&dl=0" },
    { title: "Leetcode SQL Top 50", url: "https://leetcode.com/studyplan/top-sql-50/" },
    { title: "Hackerrank SQL Preparation", url: "https://www.hackerrank.com/domains/sql" },
    { title: "Java Blogs for Selection", url: "https://www.hungrycoders.com/blog" },
    { title: "Java Full Course Playlist", url: "https://www.youtube.com/@CodingwithAmanSahni" },
    { title: "GD Topics with Answers", url: "https://www.indiabix.com/group-discussion/topics-with-answers/" },
    { title: "GD Tips & Strategy", url: "https://www.dropbox.com/scl/fi/b2z56lg6z30j3t5ikm2py/All-about-GD.pdf?rlkey=3uxdyo431atfqocjowsd2b2p7&st=mt8cxwxo&dl=0" },
    { title: "Placement Drive Preparation Part 1", url: "https://www.dropbox.com/scl/fi/ob44ekp7vehjzukfwnc4v/Placement-Drive.pdf?rlkey=tnf2l7x3mbkkkzrp4738ecrzi&st=st8xzfqp&dl=0" },
    { title: "AIML Roadmap PDF", url: "https://www.dropbox.com/scl/fi/gi4sqa21uy2uv91xyxmhv/AIML_Roadmap.pdf?rlkey=0yufljmevcbzjn6l3nbvh70ie&st=3jcbgisd&dl=0" },
    { title: "Create Projects in 15 Days", url: "https://www.dropbox.com/scl/fi/pnxf5bk9n4obk3qrinm55/project-ideas.pdf?rlkey=qj1tzbqg6k9g5lug67ei5nwyk&st=t7db4nyt&dl=0" },
    { title: "Learn any Programming Language Guide", url: "https://www.dropbox.com/scl/fi/od7q46wf46d1gci0tckn5/codingpractice.pdf?rlkey=ge7okwow39qi51q2gesddq8nm&st=pzl9e4rz&dl=0" },
    { title: "HR Interview: Introduce Yourself", url: "https://www.indiabix.com/hr-interview/tell-me-about-yourself/" },
    { title: "Project Report Template", url: "https://www.dropbox.com/scl/fi/7tzt9cx6v8n9wmw8fqll1/projecttemplate.pdf?rlkey=gnqq9c9o7f8jamsz11zoisg24&st=wnqw7gg8&dl=0" },
    { title: "Blind 75 DSA Sheet", url: "https://takeuforward.org/interviews/blind-75-leetcode-problems-detailed-video-solutions" },
    { title: "Striver SDE DSA Sheet", url: "https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems" },
    { title: "Best A2Z DSA Sheet", url: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2" },
    { title: "Computer Science Core Subjects", url: "https://www.dropbox.com/scl/fi/j0xs4ia7aeaq0kuqjpq7a/allcore.pdf?rlkey=7mkdvf9osmbkfq2vp4sg6x50a&st=qdro29xh&dl=0" },
    { title: "OOP & DBMS Preparation", url: "https://www.dropbox.com/scl/fi/v060ucqk01zj9c5juptoe/oop-dbms.pdf?rlkey=16crrnvzyqy387xqnize8ec86&st=unxv8i05&dl=0" },
    { title: "10 Days Aptitude Preparation", url: "https://www.dropbox.com/scl/fi/oix11fqblta401w1itnb6/aptitudedays.pdf?rlkey=dk3zp5pkqe6dwddt17ddlt3eq&st=1tez2821&dl=0" },
    { title: "GFG DSA Practice Sheet", url: "https://www.geeksforgeeks.org/practice-for-cracking-any-coding-interview/" },
    { title: "Beginner Project Ideas Collection", url: "https://www.dropbox.com/scl/fi/tyftd1lx3m4hvfu588ie5/projectsbasic.pdf?rlkey=fecxmuzpoht74lshx4xmszg2e&st=61omnx0u&dl=0" },
    { title: "Basic Coding Snippets", url: "https://www.dropbox.com/scl/fi/9a1r4v2abe88upn60eka/basicscode.pdf?rlkey=ga9lzpezpu4236u13evyxel8d&st=47lgqvnt&dl=0" },
    { title: "Mock Aptitude Test Online", url: "https://www.indiabix.com/online-test/aptitude-test/" },
    { title: "DSA Basic Topics Foundation", url: "https://www.dropbox.com/scl/fi/w8692o9f6ptdtl729goez/basic.pdf?rlkey=w4t25lh9ca0ming72h80eb35e&st=z6jtfp19&dl=0" },
    { title: "Aptitude Topics Comprehensive", url: "https://www.dropbox.com/scl/fi/srmvgrovwcq10j6iej16x/aptitude.pdf?rlkey=6fz5r4jy94yk5bxcdvf7cru50&st=xgic8vlo&dl=0" }
];

const linksGrid = document.getElementById('links-grid');
const searchInput = document.getElementById('resource-search');
const modal = document.getElementById('preview-modal');
const modalTitle = document.getElementById('modal-title');
const previewFrame = document.getElementById('preview-frame');
const closeModalBtn = document.getElementById('close-modal');

function getEmbedUrl(url) {
    if (url.includes('dropbox.com')) {
        // Transform dropbox link to embeddable raw link
        return url.replace('dl=0', 'raw=1');
    }
    return url;
}

function isEmbeddable(url) {
    // These sites usually block iframes
    const nonEmbeddable = ['youtube.com', 'leetcode.com', 'hackerrank.com', 'takeuforward.org', 'geeksforgeeks.org', 'indiabix.com', 'hungrycoders.com', 'github.com'];
    return !nonEmbeddable.some(site => url.includes(site));
}

function openModal(res) {
    const embedUrl = getEmbedUrl(res.url);
    modalTitle.textContent = res.title;
    previewFrame.src = embedUrl;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
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
        
        // Decide whether to open in modal or new tab
        const canEmbed = isEmbeddable(res.url);
        
        card.addEventListener('click', (e) => {
            if (canEmbed) {
                e.preventDefault();
                openModal(res);
            } else {
                // If not embeddable, open in new tab normally
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

// Initial render
renderLinks();
