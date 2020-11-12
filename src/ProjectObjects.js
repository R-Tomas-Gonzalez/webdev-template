import img1 from "./images/archivalstreamingbase.png";
import img2 from "./images/nytimeslite.png"
import img3 from "./images/vibewave.png"

export const PROJECTS = [
    { img: img1, title: 'Archival Streaming Base', description: 'This app was built with Ruby on Rails and React.js for my final project at Flatiron School.', githubBack: "https://github.com/R-Tomas-Gonzalez/archival_streaming_base_backend", githubFront: "https://github.com/R-Tomas-Gonzalez/archival_streaming_base_frontend", demo: "https://www.youtube.com/watch?v=Cehk2wbm4qA&feature=youtu.be", website: "https://archival-streaming-base.netlify.app/" },
    { img: img2, title: 'The New York Times lite', description: 'This app was built with Ruby on Rails and React.js for my Mod4 project at Flatiron School.', githubBack: "https://github.com/R-Tomas-Gonzalez/nytimes-lite-backend", githubFront: "https://github.com/R-Tomas-Gonzalez/nytimes-lite-frontend", demo: "https://www.youtube.com/watch?v=a2mdU67pW2U&feature=youtu.be", website: "https://nytimes-lite.netlify.app/" },
    { img: img3, title: 'Vibewave', description: 'This app was built with Ruby on Rails and JavaScript for my Mod3 project at Flatiron School.', demo: "https://youtu.be/RhngjeCWpDY", github: "https://github.com/R-Tomas-Gonzalez/vibewave"}
];

// make sure to add if statement in the iteration to grab the regular github url if back and front don't exist