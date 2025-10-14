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
  },{id: "nav-articles",
          title: "articles",
          description: "selected articles. not a full list",
          section: "Navigation",
          handler: () => {
            window.location.href = "/articles/";
          },
        },{id: "nav-visualizations",
          title: "visualizations",
          description: "selected visualizations. not a full list",
          section: "Navigation",
          handler: () => {
            window.location.href = "/visualizations/";
          },
        },{id: "post-a-post-with-plotly-js",
        
          title: "a post with plotly.js",
        
        description: "this is what included plotly.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/plotly/";
          
        },
      },{id: "post-a-post-with-image-galleries",
        
          title: "a post with image galleries",
        
        description: "this is what included image galleries could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/photo-gallery/";
          
        },
      },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-a-post-with-tabs",
        
          title: "a post with tabs",
        
        description: "this is what included tabs in a post could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/tabs/";
          
        },
      },{id: "post-a-post-with-typograms",
        
          title: "a post with typograms",
        
        description: "this is what included typograms code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/typograms/";
          
        },
      },{id: "post-a-post-that-can-be-cited",
        
          title: "a post that can be cited",
        
        description: "this is what a post that can be cited looks like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/post-citation/";
          
        },
      },{id: "post-a-post-with-pseudo-code",
        
          title: "a post with pseudo code",
        
        description: "this is what included pseudo code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/pseudocode/";
          
        },
      },{id: "post-a-post-with-code-diff",
        
          title: "a post with code diff",
        
        description: "this is how you can display code diffs",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/code-diff/";
          
        },
      },{id: "post-a-post-with-advanced-image-components",
        
          title: "a post with advanced image components",
        
        description: "this is what advanced image components could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/advanced-images/";
          
        },
      },{id: "post-a-post-with-vega-lite",
        
          title: "a post with vega lite",
        
        description: "this is what included vega lite code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/vega-lite/";
          
        },
      },{id: "post-a-post-with-geojson",
        
          title: "a post with geojson",
        
        description: "this is what included geojson code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/geojson-map/";
          
        },
      },{id: "post-a-post-with-echarts",
        
          title: "a post with echarts",
        
        description: "this is what included echarts code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/echarts/";
          
        },
      },{id: "post-a-post-with-chart-js",
        
          title: "a post with chart.js",
        
        description: "this is what included chart.js code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/chartjs/";
          
        },
      },{id: "post-a-post-with-tikzjax",
        
          title: "a post with TikZJax",
        
        description: "this is what included TikZ code could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tikzjax/";
          
        },
      },{id: "post-a-post-with-bibliography",
        
          title: "a post with bibliography",
        
        description: "an example of a blog post with bibliography",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/post-bibliography/";
          
        },
      },{id: "post-a-post-with-jupyter-notebook",
        
          title: "a post with jupyter notebook",
        
        description: "an example of a blog post with jupyter notebook",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/jupyter-notebook/";
          
        },
      },{id: "post-a-post-with-custom-blockquotes",
        
          title: "a post with custom blockquotes",
        
        description: "an example of a blog post with custom blockquotes",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/custom-blockquotes/";
          
        },
      },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
        
          title: "a post with table of contents on a sidebar",
        
        description: "an example of a blog post with table of contents on a sidebar",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/sidebar-table-of-contents/";
          
        },
      },{id: "post-a-post-with-audios",
        
          title: "a post with audios",
        
        description: "this is what included audios could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/audios/";
          
        },
      },{id: "post-a-post-with-videos",
        
          title: "a post with videos",
        
        description: "this is what included videos could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/videos/";
          
        },
      },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
        
          title: "displaying beautiful tables with Bootstrap Tables",
        
        description: "an example of how to use Bootstrap Tables",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/tables/";
          
        },
      },{id: "post-a-post-with-table-of-contents",
        
          title: "a post with table of contents",
        
        description: "an example of a blog post with table of contents",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/table-of-contents/";
          
        },
      },{id: "post-a-post-with-giscus-comments",
        
          title: "a post with giscus comments",
        
        description: "an example of a blog post with giscus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/giscus-comments/";
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "post-a-post-with-redirect",
        
          title: "a post with redirect",
        
        description: "you can also redirect to assets like pdf",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/assets/pdf/example_pdf.pdf";
          
        },
      },{id: "post-a-post-with-diagrams",
        
          title: "a post with diagrams",
        
        description: "an example of a blog post with diagrams",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/diagrams/";
          
        },
      },{id: "post-a-distill-style-blog-post",
        
          title: "a distill-style blog post",
        
        description: "an example of a distill-style blog post and main elements",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2021/distill/";
          
        },
      },{id: "post-a-post-with-twitter",
        
          title: "a post with twitter",
        
        description: "an example of a blog post with twitter",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2020/twitter/";
          
        },
      },{id: "post-a-post-with-disqus-comments",
        
          title: "a post with disqus comments",
        
        description: "an example of a blog post with disqus comments",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/disqus-comments/";
          
        },
      },{id: "post-a-post-with-math",
        
          title: "a post with math",
        
        description: "an example of a blog post with some math",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/math/";
          
        },
      },{id: "post-a-post-with-code",
        
          title: "a post with code",
        
        description: "an example of a blog post with some code",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/code/";
          
        },
      },{id: "post-a-post-with-images",
        
          title: "a post with images",
        
        description: "this is what included images could look like",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/images/";
          
        },
      },{id: "post-a-post-with-formatting-and-links",
        
          title: "a post with formatting and links",
        
        description: "march &amp; april, looking forward to summer",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/formatting-and-links/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "projects-the-surge-in-homelessness",
          title: 'The surge in homelessness',
          description: "As numbers climb, advocates say Rochester and Monroe County aren’t doing enough.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/surge-homelessness/";
            },},{id: "projects-the-good-cause-question",
          title: 'The Good Cause question',
          description: "Rochester City Council is weighing whether to opt in to new statewide Good Cause Eviction protections. Tenant groups support the legislation, while landlords warn of unintended consequences.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/good-cause/";
            },},{id: "projects-advocates-push-for-passage-of-state-rental-subsidy-program",
          title: 'Advocates push for passage of state rental-subsidy program',
          description: "Supporters believe the Housing Access Voucher Program could be a key tool in alleviating housing problems, but it is opposed by Gov. Kathy Hochul, who thinks the price tag is too high.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/havp/";
            },},{id: "projects-ur-graduate-students-go-on-strike",
          title: 'UR graduate students go on strike',
          description: "The Graduate Labor Union, which seeks increased wages and representation for University of Rochester graduate students, says it has been frustrated with negotiations for a private election agreement.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/glu-strike/";
            },},{id: "projects-wroc-workers-press-nexstar-to-join-union-talks",
          title: 'WROC workers press Nexstar to join union talks',
          description: "Some two years after a successful move to organize, the television station’s staff are still waiting to be heard.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/wroc-strike/";
            },},{id: "projects-higher-ed-under-the-ax",
          title: 'Higher ed under the ax',
          description: "For Rochester-area colleges and universities, expenditures of federal awards have totaled nearly $1 billion annually—but that number would be cut sharply if the Trump administration has its way.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/higher-ed/";
            },},{id: "projects-push-for-sanctuary-city-ordinance-continues",
          title: 'Push for sanctuary city ordinance continues',
          description: "City Council is facing criticism for tabling action on the ordinance pending the outcome of the Trump administration’s lawsuit against the city.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/sanctuary-continued/";
            },},{id: "projects-housing-advocates-criticize-rpd-dismantling-of-encampments",
          title: 'Housing advocates criticize RPD dismantling of encampments',
          description: "City officials defended the actions at three unhoused encampments, saying they were taken in response to open-air drug activity.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/rpd-encampments/";
            },},{id: "projects-ice-raids-asian-food-store-in-henrietta",
          title: 'ICE raids Asian food store in Henrietta',
          description: "Immigration and Customs Enforcement officers made multiple arrests in a raid Wednesday morning at the Asia Food Market on Brighton Henrietta Town Line Road.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ice-afm/";
            },},{id: "projects-motel-6-near-airport-faces-new-claims",
          title: 'Motel 6 near airport faces new claims',
          description: "Some tenants say unsanitary conditions continue at the motel, which provides emergency housing for Monroe County’s Department of Human Services.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/motel-6/";
            },},{id: "projects-food-and-health-care-access-at-risk",
          title: 'Food and health care access at risk',
          description: "With enactment of the One Big Beautiful Bill Act, sweeping changes to eligibility and funding for the Supplemental Nutrition Assistance Program and Medicaid are coming.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/food-healthcare/";
            },},{id: "projects-the-sanctuary-city-battle",
          title: 'The sanctuary city battle',
          description: "Sued in April by the Trump administration over its sanctuary city policy, Rochester is not backing down: City Council this week codified the city policy. But the legal fight is far from over.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/sanctuary-battle/";
            },},{id: "projects-ice-raid-disrupted-by-crowd-of-opposition",
          title: 'ICE raid disrupted by crowd of opposition',
          description: "Activists and community leaders arrived Tuesday morning as Immigration and Customs Enforcement officers targeted roofers on a project near the George Eastman Museum, leading to a standoff.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/westminster/";
            },},{id: "projects-zone-of-contention",
          title: 'Zone of contention',
          description: "When Verizon applied to build a cell tower along Portland Avenue, residents mobilized in opposition, raising questions about lack of transparency and inconsistencies in the review process. The application was denied, but their concerns remain.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/verizon/";
            },},{id: "projects-ny-fed-chief-voices-cautious-optimism-on-the-economy",
          title: 'NY Fed chief voices cautious optimism on the economy',
          description: "In an interview with the Beacon during his visit to Rochester Monday, New York Federal Reserve Bank president and CEO John Williams discussed tariffs, artificial intelligence and other issues.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ny-fed/";
            },},{id: "projects-ufw-pushes-for-farms-to-honor-union-contracts",
          title: 'UFW pushes for farms to honor union contracts',
          description: "United Farm Workers organizers have called on Wayne County’s Wafler Farms to implement a contract imposed in arbitration.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ufw/";
            },},{id: "projects-new-focus-on-the-homelessness-crisis",
          title: 'New focus on the homelessness crisis',
          description: "Advocates, providers, and legislators agree: unsheltered and chronic homelessness in Rochester and Monroe County are on the rise and must be addressed.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/homelessness-crisis/";
            },},{id: "visualizations-food-and-health-care-access-at-risk",
          title: 'Food and health care access at risk',
          description: "With enactment of the One Big Beautiful Bill Act, sweeping changes to eligibility and funding for the Supplemental Nutrition Assistance Program and Medicaid are coming.",
          section: "Visualizations",handler: () => {
              window.location.href = "/visualizations/food-healthcare/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
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
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
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
