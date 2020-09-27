//  Work experience cards


const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Research and Development Intern",
    cardImage: "assets/images/experience-page/IISC.jpg",
    place: "Indian Instituite of Science",
    time: "(May2018-July2018)",
    desp: "<li>Face and object Recognition using IR Spectrum thermal camera.</li> <li>Using OpenCV and Image processesing</li> <li>Project designed for Indian Army</li>", 
  },
  {
    title: "Summer Intern",
    cardImage: "assets/images/experience-page/6.jpg",
    place: "American Express",
    time: "(Jan-Jun,2020)",
    desp: "<li>Automation of repitetive tasks using Python.</li> <li>Creation of Dashboard for monitoring Real-time systems using Machine Learning.</li> <li>Data Analytics useful for incident management</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
      <ul>
      <li class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </li>
    </ul>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);


// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
{
    title: "GirlScript Jamshedpur Moderator",
    cardImage: "./assets/images/experience-page/3.jpg",
    description:
      "Mentoring at Girlscript Jamshepur  to help newbies in technology",
  },
  {
    title: "GirlScript Summer Of Code 2020",
    cardImage: "./assets/images/experience-page/7.png",
    description:
      "Opensource contribution to  project named how_many_topics which is a data science project",
  },
   {
    title: "Hakin-Codes",
    cardImage: "./assets/images/experience-page/4.jpg",
    description:
      "Top contributor at HackinCodes",
  },
  {
    title: "Content Creator at Failure To Sucess(FTS)",
    cardImage: "./assets/images/experience-page/2.jpg",
    description:
      "Content writer and creator for technical and non-technical topics",
  },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card" style="background-image: url(${cardImage});background-repeat: no-repeat, repeat; background-size: cover; background-position: center;">
      <div class="content">
          <h2 class="title">${title}</h2>
          <p class="copy">${description}</p></div>
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);


// Mentorship Card


const mentorshipcards = document.querySelector(".mentorship-cards");
const mentor = [
  {
    title: "Girlscript Jamshepur Moderator",
    image: "./assets/images/experience-page/3.jpg",
    time: "04/2020 - present",
    desp: "<li>It is an non-profit start-up which  is working to change lives by imparting tech education and relevant skills..</li><hr /><li>Ample amount of technologies and projects are there and we are given opportunity to work on them according to our interest and knowledge.</li>",
  },
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, time, desp}) =>
      (output += `        
      <div class="col-sm-6">
      <div class="card card2">
        <img src="${image}" class="card-img-top" alt="..."  width="64" height="300">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p>${time}</p>
        </div>
        <ul class="list-group list-group-flush p-0 right-aligned">
          <div class="list-group-item card2">${desp}</div>
        </ul>
      </div>
      </div>
      `)
  );
  mentorshipcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
