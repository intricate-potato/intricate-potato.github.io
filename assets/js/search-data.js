// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "Full list of publications, in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Ongoing research projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "Master of Computer Science candidate at Dalhousie University, supervised by Dr. Rita Orji.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-mortar-board-started-my-master-of-computer-science-at-dalhousie-university-supervised-by-dr-rita-orji-at-the-persuasive-computing-lab-will-be-an-nserc-create-cybersecurity-trainee",
          title: ':mortar_board: Started my Master of Computer Science at Dalhousie University, supervised by Dr....',
          description: "",
          section: "News",},{id: "news-trophy-awarded-the-nova-scotia-graduate-scholarship-master-s-cad-20-000-for-research-excellence",
          title: ':trophy: Awarded the Nova Scotia Graduate Scholarship (Master’s), CAD $20,000, for research excellence!...',
          description: "",
          section: "News",},{id: "news-bar-chart-finished-top-10-at-the-health-data-challenge-atlantic-ai-summit-2025-developing-ai-solutions-for-public-health-communication",
          title: ':bar_chart: Finished Top 10 at the Health Data Challenge, Atlantic AI Summit 2025,...',
          description: "",
          section: "News",},{id: "news-paperclip-our-paper-blockchain-integration-in-vanets-challenges-and-research-frontiers-in-security-and-trust-has-been-published-in-vehicular-communications",
          title: ':paperclip: Our paper “Blockchain Integration in VANETs: Challenges and Research Frontiers in Security...',
          description: "",
          section: "News",},{id: "news-tada-work-from-my-msc-thesis-has-been-accepted-at-the-9th-aaai-acm-conference-on-ai-ethics-and-society-aies",
          title: ':tada: Work from my MSc thesis has been accepted at the 9th AAAI/ACM...',
          description: "",
          section: "News",},{id: "news-airplane-grateful-to-receive-travel-grants-from-nserc-and-dalhousie-fgs-for-my-aies-paper-presentation-see-you-in-malmö-sweden-this-october-sweden-sparkles",
          title: ':airplane: Grateful to receive travel grants from NSERC and Dalhousie FGS for my...',
          description: "",
          section: "News",},{id: "projects-persuasive-strategies-for-mindful-use-of-ai",
          title: 'Persuasive Strategies for Mindful use of AI',
          description: "A persuasive AI companion that promotes mindful, critical engagement with generative AI during graduate research.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/active-ai-researcher/";
            },},{id: "projects-covert-dialect-bias-in-llms",
          title: 'Covert Dialect Bias in LLMs',
          description: "Measuring covert dialect prejudice and contextual integrity violations in large language models.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dialect-bias-llms/";
            },},{id: "projects-narrative-aware-news-recommendation",
          title: 'Narrative-Aware News Recommendation',
          description: "A narrative-grounded, explainable news recommender built on Greimas&#39; Actantial Model.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/narrative-news-recsys/";
            },},{id: "projects-security-and-privacy-in-vanets",
          title: 'Security and Privacy in VANETs',
          description: "Blockchain-based trust management and privacy-preserving authentication for vehicular ad-hoc networks.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/vanets-security-privacy/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%62%64%75%6C%6C%61%68%33%39@%64%61%6C.%63%61", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/intricate-potato", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/chy-md-abdullah", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0003-1114-6531", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=HISlKZ8AAAAJ", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
