// array used to pass in content for aboutme description portion

const descriptionContent = {
    "about-me-content": 
    [
        {
            title: "Basic Info",
            content: [
                <span class="border-highlight">Erin Kwon</span>, 
                "Fourth-Year @ UCLA", 
                "ESFJ", 
                "From Southern California",
                "Revamping this website! Made this version as my initial exposure to React and haven't been able to touch it since.",
            ]
        },
        {
            title: " Fun Facts",
            content: [
                <span class="solid-highlight">Believes her iPad revolutionized her note-taking skills</span>, 
                "Food connoisseur, occasional mukbanger", 
                "Has played 5 instruments! Guitar, ukulele, piano, violin, and a toy recorder :)",
                "Enjoys producing musical covers using GarageBand with friends",
                "I designed the Favicon (small icon on the tab) for this page!"
            ]
        },
    ],
    "projects-content":
    [
        {
            title: <span class="border-highlight">Data Deletion Transparency Report Generation Service</span>,
            content: [
                <div>Amazon SDE Internship Project</div>,
                <div>An <span class="solid-highlight">end-to-end dataset visibility service</span> that routinely generates sensitive training data deletion reports for <b>100+</b> Alexa data scientists, considering business needs, technical trade-offs, and development timeline.</div>,
                <div>Implementing workflow using <b>Java</b> to store customers' configuration data into <b>DynamoDB</b> and create a corresponding schedule in <b>EventBridge</b> to trigger a <b>Step Function</b> for data deletion report generation.</div>,
                <div>Programming an algorithm in <b>PySpark Python</b> with <b>Glue</b> to aggregate <b>100,000+</b> data deletion trails from <b>S3</b> over the customer's specified date-range to generate the CSV data deletion report and routinely alert 100+ data scientists using <b>SNS</b>.</div>,
            ],
        },
        {
            title: <span class="border-highlight">"Friends of the Children" Resource Bank</span>,
            content: [
                <div>Collaborated with nonprofit “Friends of the Children” to develop a <span class="solid-highlight">full-stack React web application</span> to serve as a centralized resource bank for caregivers with modules, a calendar, and a messaging system.</div>,
                <div>Developed the module system by pulling data from <b>Firebase</b>, enabling administrators to add or edit nested modules with text/images/links/PDFs, and allow mentors and caregivers to view and access resources in each module.</div>,
                <div>Used <b>Git</b> and <b>Figma</b> to collaborate with 6 developers, 3 designers, and 2 project leads in an <b>agile biweekly sprint</b> environment.</div>,
                <a href="https://github.com/lablueprint/friends-of-the-children" target="_blank" rel="noopener noreferrer">Link to Github</a>,
            ],
        },
        {
            title: <span class="border-highlight">"Plan It"</span>,
            content: [
                <div>Built a <span class="solid-highlight">full-stack React web application</span> called “Plan It” using API calls to <b>Firebase</b> backend that recommends local activities to users and helps them plan out their stay in the greater Los Angeles area.</div>,
                <div>Developed and styled an <b>interactive calendar component</b> using <span class="solid-highlight">React and CSS</span>, allowing users to present their scheduled events on a visually-pleasing calendar.</div>,
                <div>Implemented event handlers and states to pull updated scheduled events as an array of <b>JSON objects</b> from user database on <b>Firebase</b>, populating the calendar with styled event widgets on correct coordinates based on time and date.</div>,
                <div>Parsed through JSON scheduled event objects to access details like event name, start time, and event type to display information and corresponding style, based on the <span class="solid-highlight">Figma prototype,</span> on the calendar event widget.</div>,
                <a href="https://planitcl.netlify.app/" target="_blank" rel="noopener noreferrer">Link to App</a>,
                <a href="https://github.com/snlaurax/planit" target="_blank" rel="noopener noreferrer">Link to Github</a>,
            ],
        },
        {
            title: <span class="border-highlight">"Yumma"</span>,
            content: [
                <div><span class="solid-highlight">TreeHacks 2023 “Best Hack to Connect with Others Through Food”</span></div>,
                <div>Developed a cultural recipe platform using <b>React</b>, <b>CSS</b>, and <b>Convex</b> to facilitate the sharing of traditional recipes and link cultural dishes and heartfelt stories from immigrant parents to AAPI Gen Z.</div>,
                <div>Implemented interactive modal structure for submitting recipes and handling data transactions with backend datasets using <b>Convex</b>.</div>,
                <a href="https://devpost.com/software/yumma" target="_blank" rel="noopener noreferrer">Link to Devpost</a>,
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
    ],
    "contact-content":
    [
        {
            title: "Contact Info",
            role: "Feel free to send me a message!",
            content: [
                <div><span class="border-highlight">(Preferred) E-mail: <a href="mailto:erinkwon01@g.ucla.edu">erinkwon01@g.ucla.edu</a></span></div>,
                <div>LinkedIn: <a href="https://www.linkedin.com/in/erinkwon01/" target="_blank" rel="noopener noreferrer">Erin's LinkedIn</a></div>
            ]
        }
    ]
}

export default descriptionContent;

