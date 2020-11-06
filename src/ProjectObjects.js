import img1 from "./images/andrew-neel-jtsW--Z6bFw-unsplash.jpg";
import img2 from "./images/christopher-burns-Kj2SaNHG-hg-unsplash (1).jpg"
import img3 from "./images/jeremy-bishop-G9i_plbfDgk-unsplash.jpg"

export const PROJECTS = [
    { img: img1, title: 'Archival Streaming Base', description: 'this is archival-streaming-base', githubBack: "https://github.com/R-Tomas-Gonzalez/archival_streaming_base_backend", githubFront: "https://github.com/R-Tomas-Gonzalez/archival_streaming_base_frontend", demo: "https://www.youtube.com/watch?v=Cehk2wbm4qA&feature=youtu.be", website: "https://archival-streaming-base.netlify.app/" },
    { img: img2, title: 'The New York Times lite', description: 'this is The New York Times lite', githubBack: "https://github.com/R-Tomas-Gonzalez/nytimes-lite-backend", githubFront: "https://github.com/R-Tomas-Gonzalez/nytimes-lite-frontend", demo: "https://www.youtube.com/watch?v=a2mdU67pW2U&feature=youtu.be", website: "https://nytimes-lite.netlify.app/" },
    { img: img3}
];

// make sure to add if statement in the iteration to grab the regular github url if back and front don't exist