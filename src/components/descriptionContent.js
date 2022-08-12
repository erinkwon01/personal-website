// array used to pass in content for aboutme description portion

const descriptionContent = {
    "about-me-content": 
    [
        {
            title: "Basic Info",
            content: [
                <u>Erin Kwon</u>, 
                "Rising Third-Year @ UCLA", 
                "Korean-American", 
                "ENFJ-A (most notably, 93% J)", 
                "Determined, Goal-driven, Creative, Enthusiastic"
            ]
        },
        {
            title: " Fun Facts",
            content: [
                "Believes her iPad revolutionized her note-taking skills", 
                "Food connoisseur; occasional mukbanger", 
                "Has played 5 instruments (guess which ones :O)",
                "… was a theater, orchestra, SciOly, and ASB kid…",
                "Enjoys video-editing using iMovie (for YouTube) and VLLO (for Tik Tok)",
                "I designed the Favicon (small icon on the tab) for this page!"
            ]
        },
        {
            title: "Goals",
            content: [
                "Develop wonderful websites for users to interact with and get inspired!",
                <u>Help amplify websites and platforms of projects that support underrepresented communities</u>,
                "Learn how to further develop my SWE skills under incredibly talented mentors"
            ]
        }
    ],
    "resume-content": 
    [
        {
            title: "Education",
            role: "University of California, Los Angeles",
            content: [
                "Bachelors of Science, Computational and Systems Biology",
                "Expected Graduation June 2024",
                "Relevant Coursework: Intro to Algorithms and Data Structures; Algorithms and Complexity; Discrete Mathematics; Linear Algebra and Applications; Essential Calculus for Mathematical Biologists"
            ]
        },
        {
            title: "Skills",
            role: "HTML (4), CSS (4), React (3), JavaScript (3), C++ (4), Python (3), Git (3), Korean (5)", 
            content: [
                "Front-End Development (3), Object-Oriented Programming (4)", 
                "Adaptability (5), Communication (4), People Management (4), Teaching (4), Organization (5), Time Management (5)"
            ]
        },
        {
            title: "Korean American Student Association (KASA)",
            role: "Internal Vice President (September 2020 – Present): ",
            content: [
                <div><u>Coordinated and structured weekly exec meetings</u> and one-on-ones with staff members to check in on progress and resolve blockers; <u>improved efficiency in workflow</u> by prioritizing committees’ concerns with executive board and <u>distributing resolutions and meeting notes</u> to staff.</div>,
                <div>Oversaw and <u>restructured the intern program</u> featuring 10+ interns to include personal projects and assigned mentors for interns. Reviewed over <u>30+ intern applications</u> and <u>onboarded interns</u> to specific departments.</div>,
                <div>Created and led a LinkedIn group focused on <u>strengthening the professional pillars</u> of KASA members, enabling <u>200+ members</u> to network with alumni and share career-related resources.</div>,
                // "Big/Mentor:",
                // "Planned and hosted 4+ cultural and networking events for mentees per quarter.",
                // "Video-edited a 14-minute recap video, showcasing highlights and every group event from the year."
            ]
        },
        {
            title: "Life Sciences Student Association (LSSA)",
            role: "Equity, Diversity, and Inclusion (EDI) Committee Coordinator (November 2020 – Present):",
            content: [
                <div>Creating a <u>more inclusive environment for 10,000+ life science students</u> of all financial and cultural backgrounds.</div>,
                "Coordinated three panelist events with speakers from underrepresented backgrounds to share their unique experiences."
            ]
        },
        {
            title: "Girls Who Code (GWC) Summer Immersion Program",
            role: "Student (June 2019 – August 2019)",
            content: [
                "Practiced Python, HTML, JavaScript, CSS, C using community-based programming under the mentorship of women at Blizzard.",
                <div>Programmed a <u>user-friendly travel website</u> using HTML, JavaScript, and CSS [<a href="https://erinkwon01.github.io/Trailblazers/" target="_blank" rel="noopener noreferrer">Link to Website</a>]</div> 
            ]
        },
        {
            title: "Work Experience",
            role: "Private Tutor (September 2019 – Present):",
            content: [
                "Have tutored Algebra 1 Honors, Geometry Honors, Algebra 2 Trigonometry Honors, English, Chemistry CP, Physics CP",
                <div>Developed <u>interpersonal skills</u> while explaining concepts such as quadratic equations, congruency in triangles, grammar, reading comprehension, kinematics, and forces</div>,
                <div>Improved <u>time-management skills</u> while finding the balance between school and work"</div>
            ]
        }
    ],
    "projects-content":
    [
        {
            title: "Personal Website (this site!)",
            content: [
                "Designing and implementing a “notebook-style” personal website featuring unique pages and navigation bar using React components, HTML, CSS flexbox and grid.",
                "Maintained the main and developing branch using git and deployed onto github.",
                "Blueprinted general layout of web page; currently in the process of adding SVG images, hover animations, and additional pages."
            ]
        },
        {
            title: "TunnelMan Video Game",
            content: [
                "Developed an interactive survival game in C++ where the user moves the TunnelMan character through a board of dirt objects, picks up items, and fights enemy objects.",
                "Structured codebase using object-oriented programming for easy development and used 2D vectors, pointers, inheritance, polymorphism, and overloading to ensure a tractable time complexity.",
                "Tested functionality via manual play testing.",
                <a href="https://github.com/erinkwon01/tunnelman-video-game" target="_blank" rel="noopener noreferrer">Link to Github</a>
            ]
        },
        {
            title: "“Online Dating” Database Manager",
            content: [
                "Created and populated a database of user information and matches via doubly-linked lists in C++. Users can add a match, check if a match already exists, edit personal information, remove a match, and look up a match.",
                "Structured manager using object-oriented programming to allow for dynamic memory allocation and prevent memory leaks.",
                <a href="https://github.com/erinkwon01/online-dating-database-manager" target="_blank" rel="noopener noreferrer">Link to Github</a>
            ]
        },
        {
            title: "Witches Game",
            content: [
                "Implemented a game in C++ using object-oriented programming and 2D arrays, where the user controls a character on a board of witches and navigates through rounds of enemies.",
                <a href="https://github.com/erinkwon01/witches-game" target="_blank" rel="noopener noreferrer">Link to Github</a>
            ]
        }
    ],
    "contact-content":
    [
        {
            title: "Contact Info",
            role: "Feel free to send me a message!",
            content: [
                <div>(Preferred) E-mail: <a href="mailto:erinkwon01@gmail.com">erinkwon01@gmail.com</a></div>,
                "Phone Number: (949) 742 - 2800",
                <div>LinkedIn: <a href="https://www.linkedin.com/in/erinkwon01/" target="_blank" rel="noopener noreferrer">Erin's LinkedIn</a></div>
            ]
        }
    ]
}

export default descriptionContent;

