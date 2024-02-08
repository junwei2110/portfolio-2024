
export const profilePic = {
    url: "https://junwei-portfolio.s3.ap-southeast-1.amazonaws.com/profilepic_linkedin.png",
    alt: "profile-pic"
}

export const personalInfo = {
    name: "Jayden Ng",
    description: "Engineer, Student, Mentor",
    introduction: `<p><strong>Hi everyone  ,</strong></p>
    <p>
        I'm Jayden from Singapore!<br />
        I love coding and working with passionate people.<br />
        In my spare time, I do some tutoring and give back to the community.<br />
        Please feel free to check out some of my past work below.
    </p>`,
    gitLink: "https://github.com/junwei2110",
    linkedIn: "https://linkedin.com/in/jun-wei-ng-039b60105",
    reddit: "https://www.reddit.com/user/chickenworshipper",
    email: "ngjw2110@gmail.com"
}


export const projects = [
    {
        title: "DBS Equities & Crypto Trading App",
        timeline: "May 2022 - present",
        description: `
        <p>
        The trading application serves as an add-on platform to the current DBS Banking App, and enables wealth customers
        to monitor the markets, place orders and keep track of their positions all in one place. As a full stack engineer
        with a stronger emphasis on the frontend, I was building the portfolio management, equities watchlist
        and order management features. On the backend, I helped develop several APIs and built batch jobs for the customer onboarding process.
        </p> 
        <br />
        <ul>
        <li>Designed and implemented Micro-Frontend Architecture for the Crypto and Equities Trading
        React web app. Executed features including Module Federation, Analytics Tagging, Error
        Handling, Backend API integration, Real-time streaming, Design library integration, lazy loading
        and optimization</li>
        <li>Implemented web APIs for Equities Trading using Springboot; Implemented documentation
        read write operations using spring batch; Implemented step-by-step workflow operations using
        Camunda; Perform container configuration, deployment and testing in dev to UAT env</li>
        <li>Perform Test-Driven Development using Jest, Pact and Cypress for FE and Junit and Karate for
        BE. Build up good code coverage and security using Sonarqube and nexus scans</li>
        <li>Communicate and work together in large multifunctional teams using collaboration tools like
        git, jira and confluence with AGILE practices</li>
        </ul>`,
        displayPic: "/DBS_Webview.png",
        displayAlt: "Digibank App",
        website: "https://www.dbs.com.sg/personal/support/wealth-oet-search-for-stock.html"
    },
    {
        title: "MOS World Company Website",
        timeline: "Oct 2023 - Dec 2023",
        description: `
        <p>
        MOS World is a company specializing in providing end to end audio and IT solutions. The owner never had a website and only used
        word of mouth and his past networks to source for new projects. As I knew the owner personally, I suggested to create a basic website
        for him, just showcasing his past works and ways to contact him. Because the timeline was pretty short, I couldn't add on as many features
        as I wanted, but overall he was satisfied with the end result.
        </p> 
        `,
        displayPic: "/MOS_Logo.png",
        displayAlt: "MOS World Logo",
        gitLink: "https://github.com/junwei2110/MOS-SEA",
        website: "https://mos-sea.vercel.app/"
    },
    {
        title: "Payroll Calculation Automation",
        timeline: "Aug 2023 - Sep 2023",
        description: `
        <p>
        The client needed to calculate the payrolls for his company's contract staff during the holiday period. Due to the complexity of the payroll calculations,
        client did not know how to automate the process using excel, and had to resort to manual work. Created a basic Python script using pandas and numpy to automate
        the process, which allowed the client to use the same script for the future
        </p> 
        `,
        displayPic: "/payroll_auto.png",
        displayAlt: "payroll automation",
        gitLink: "https://github.com/junwei2110/payroll-automation-mazars"
    },
    {
        title: "Love Nest Mobile App",
        timeline: "Oct 2022 - May 2023",
        description: `
        <p>
        Love Nest was a passion project I started when my girlfriend had to move overseas for an extended period of time. I wanted to learn how to use React Native
        and build an app that will allow me to keep track of our important dates, share intimate pictures, and plan dates. It was a bittersweet memory, missing my girlfriend
        while keeping myself occupied with this project. 
        </p> 
        <br />
        <ul>
        <li>Built a full stack mobile application using React Native for the frontend and Parse Server for the backend</li>
        <li>Features include photo sharing, timetable scheduling, tourist locations search function API integration,
        search bar optimization, push notifications using Google Firebase, deep-linking for user
        redirection, and chat application using Web Sockets.</li>
        </ul>`,
        displayPic: "/LoveNest.png",
        displayAlt: "LoveNest App",
        gitLink: "https://github.com/junwei2110/LoveNest"
    }
]