// array used to pass in content for aboutme description portion
import erinPic from "./images/erinProfilePicture.jpg";

const descriptionContent = {
    "home-content":
    [
        {
            title: <img src={erinPic} width="230" height="300" alt="Erin Profile"></img>,
            content: [
                "hello my name is erin kwon"
            ]
        }
    ],
    "about-me-content": 
    [
        {
            title: "Basic Info",
            content: [
                "Erin Kwon", 
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
                "Help amplify websites and platforms of projects that support underrepresented communities like women, POC, immigrants, and LGBTQ+!",
                "Learn how to further develop my SWE skills under incredibly talented mentors"
            ]
        }
    ],
    "resume-content": 
    [
        {
            title: "Education",
            content: [
                "University of California, Los Angeles",
                "Bachelors of Science, Computational and Systems Biology",
                "Expected Graduation June 2024",
                "Relevant Coursework: Intro to Algorithms and Data Structures; Algorithms and Complexity; Discrete Mathematics; Linear Algebra and Applications; Essential Calculus for Mathematical Biologists"
            ]
        },
        {
            title: "Skills",
            content: [
                "HTML (4), CSS (4), React (3), JavaScript (3), C++ (4), Python (3), Git (3), Korean (5)", 
                "Front-End Development (3), Object-Oriented Programming (4)", 
                "Adaptability (5), Communication (4), People Management (4), Teaching (4), Organization (5), Time Management (5)"
            ]
        },
        {
            title: "Korean American Student Association (KASA)",
            content: [
                "Internal Vice President (September 2020 – Present): ",
                "Coordinated and structured weekly exec meetings and one-on-ones with staff members to check in on progress and resolve blockers; improved efficiency in workflow by prioritizing committees’ concerns with executive board and distributing resolutions and meeting notes to staff.",
                "Oversaw and restructured the intern program featuring 10+ interns to include personal projects and assigned mentors for interns. Reviewed over 30+ intern applications and onboarded interns to specific departments.",
                "Created and led a LinkedIn group focused on strengthening the professional pillars of KASA members, enabling 200+ members to network with alumni and share career-related resources.",
                "Big/Mentor:",
                "Planned and hosted 4+ cultural and networking events for mentees per quarter.",
                "Video-edited a 14-minute recap video, showcasing highlights and every group event from the year."
            ]
        },
        {
            title: "Life Sciences Student Association (LSSA)",
            content: [
                "Equity, Diversity, and Inclusion (EDI) Committee Coordinator (November 2020 – Present):",
                "Creating a more inclusive environment for 10,000+ life science students of all financial and cultural backgrounds.",
                "Coordinated three panelist events with speakers from underrepresented backgrounds to share their unique experiences."
            ]
        },
        {
            title: "Girls Who Code (GWC) Summer Immersion Program",
            content: [
                "Student (June 2019 – August 2019)",
                "Practiced Python, HTML, JavaScript, CSS, C using community-based programming under the mentorship of women at Blizzard.",
                "Programmed a user-friendly travel website using HTML, JavaScript, and CSS"
            ]
        },
        {
            title: "Work Experience",
            content: [
                "Private Tutor (September 2019 – Present):",
                "Have tutored Algebra 1 Honors, Geometry Honors, Algebra 2 Trigonometry Honors, English, Chemistry CP, Physics CP",
                "Developed interpersonal skills while explaining concepts such as quadratic equations, congruency in triangles, grammar, reading comprehension, kinematics, and forces",
                "Improved time-management skills while finding the balance between school and work"
            ]
        },
        {
            title: "Hobbies",
            content: [
                "Star-gazing, Video-Editing, Guitar, Singing, Dancing, Road Trips, Koreatown Food Tours"
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
                "Tested functionality via manual play testing."
            ]
        },
        {
            title: "“Online Dating” Database Manager",
            content: [
                "Created and populated a database of user information and matches via doubly-linked lists in C++. Users can add a match, check if a match already exists, edit personal information, remove a match, and look up a match.",
                "Structured manager using object-oriented programming to allow for dynamic memory allocation and prevent memory leaks."
            ]
        },
        {
            title: "Witches Game",
            content: [
                "Implemented a game in C++ using object-oriented programming and 2D arrays, where the user controls a character on a board of witches and navigates through rounds of enemies."
            ]
        }
    ],
    "contact-content":
    [
        {
            title: "Contact Info",
            content: [
                "email: erinkwon01@gmail.com",
                "phone number: (123) 456 - 7890",
                "LinkedIn: link to linkedin"
            ]
        },
        {
            title: "Send Me a Message!",
            content: [
                "filler",
                "blah blah"
            ]
        },
    ]
}

export default descriptionContent;

