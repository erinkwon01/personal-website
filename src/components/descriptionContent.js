// array used to pass in content for aboutme description portion

const descriptionContent = {
    "about-me-content": 
    [
        {
            title: "Basic Info",
            content: [
                <span class="border-highlight">Erin Kwon</span>, 
                "Third-Year @ UCLA", 
                "Korean-American", 
                "ESFJ-A", 
                "Determined, Goal-driven, Creative, Enthusiastic"
            ]
        },
        {
            title: " Fun Facts",
            content: [
                <span class="solid-highlight">Believes her iPad revolutionized her note-taking skills</span>, 
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
                "Strengthen my front-end development skills, and work on building more back-end development skills",
                <span class="solid-highlight">Help amplify websites and platforms of projects that support underrepresented communities</span>,
                "Learn how to further develop my SWE skills under incredibly talented mentors"
            ]
        }
    ],
    "projects-content":
    [
        {
            title: <span class="border-highlight">"Plan It"</span>,
            content: [
                <div>Built a <span class="solid-highlight">full-stack React web application</span> called “Plan It” using API calls to <b>Firebase</b> backend that recommends local activities to users and helps them plan out their stay in the greater Los Angeles area.</div>,
                <div>Developed and styled an <b>interactive calendar component</b> using <span class="solid-highlight">React, CSS, and libraries like react-grid-layout,</span> allowing users to present their scheduled events on a visually-pleasing calendar.</div>,
                <div>Implemented event handlers and states to pull updated scheduled events as an array of <b>JSON objects</b> from user database on <b>Firebase</b>, populating the calendar with styled event widgets on correct coordinates based on time and date.</div>,
                <div>Parsed through scheduled event data to access details like event name, start time, and event type to display information and corresponding style, based on the <span class="solid-highlight">Figma prototype,</span> on the calendar event widget.</div>,
                <a href="https://planitcl.netlify.app/" target="_blank" rel="noopener noreferrer">Link to App</a>,
                <a href="https://github.com/snlaurax/planit" target="_blank" rel="noopener noreferrer">Link to Github</a>,
            ],
        },
        {
            title: <span class="border-highlight">"Friends of the Children" Resource Bank</span>,
            content: [
                <div>Collaborating with nonprofit “Friends of the Children” to develop a <span class="solid-highlight">full-stack React web application</span> to serve as a <b>centralized resource bank</b> for caregivers with modules, a calendar, and a messaging system.</div>,
                <div>Developing the module system by pulling data from <b>Firebase,</b> enabling administrators to add or edit nested modules with text/images/links/PDFs, and allow mentors and caregivers to view and access resources in each module.</div>,
                <div>Using <b>Git</b> and <b>Figma</b> to collaborate with 6 developers, 3 designers, and 2 project leads in an <b>agile biweekly sprint</b> environment.</div>,
                <a href="https://github.com/lablueprint/friends-of-the-children" target="_blank" rel="noopener noreferrer">Link to Github</a>,
            ],
        },
        {
            title: <span class="border-highlight">Personal Website (this site!)</span>,
            content: [
                <div>Designing and implementing a <span class="solid-highlight">“notebook-style” personal website</span> featuring unique pages and navigation bar using <b>React components, HTML, CSS flexbox and grid.</b></div>,
                <div>Maintained the main and developing branch using <b>Git</b> and deployed onto <b>GitHub</b>.</div>,
                <a href="https://github.com/erinkwon01/personal-website/tree/master" target="_blank" rel="noopener noreferrer">Link to Github</a>,
                "Blueprinted general layout of web page; currently in the process of adding SVG images, hover animations, and additional pages."
            ],
        },
        {
            title: <span class="border-highlight">TunnelMan Video Game</span>,
            content: [
                <div>Developed an <span class="solid-highlight">interactive survival game in C++</span> where the user moves the TunnelMan character through a board of dirt objects, picks up items, and fights enemy objects.</div>,
                "Structured codebase using object-oriented programming for easy development and used 2D vectors, pointers, inheritance, polymorphism, and overloading to ensure a tractable time complexity.",
                "Tested functionality via manual play testing.",
                <a href="https://github.com/erinkwon01/tunnelman-video-game" target="_blank" rel="noopener noreferrer">Link to Github</a>
            ],
        },
        {
            title: <span class="border-highlight">“Online Dating” Database Manager</span>,
            content: [
                <div>Created and populated a <span class="solid-highlight">database of user information and matches</span> via doubly-linked lists <b>in C++</b>. Users can add a match, check if a match already exists, edit personal information, remove a match, and look up a match.</div>,
                "Structured manager using object-oriented programming to allow for dynamic memory allocation and prevent memory leaks.",
                <a href="https://github.com/erinkwon01/online-dating-database-manager" target="_blank" rel="noopener noreferrer">Link to Github</a>
            ],
        },
        {
            title: <span class="border-highlight">Witches Game</span>,
            content: [
                <div>Implemented a <span class="solid-highlight">game in C++</span> using object-oriented programming and 2D arrays, where the user controls a character on a board of witches and navigates through rounds of enemies.</div>,
                <a href="https://github.com/erinkwon01/witches-game" target="_blank" rel="noopener noreferrer">Link to Github</a>
            ],
        }
    ],
    "contact-content":
    [
        {
            title: "Contact Info",
            role: "Feel free to send me a message!",
            content: [
                <div><span class="border-highlight">(Preferred) E-mail: <a href="mailto:erinkwon01@gmail.com">erinkwon01@g.ucla.edu</a></span></div>,
                "Phone Number: (949) 742 - 2800",
                <div>LinkedIn: <a href="https://www.linkedin.com/in/erinkwon01/" target="_blank" rel="noopener noreferrer">Erin's LinkedIn</a></div>
            ]
        }
    ]
}

export default descriptionContent;

