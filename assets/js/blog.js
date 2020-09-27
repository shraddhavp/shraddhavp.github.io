/* Project Cards */

const projectcards = document.querySelector(".projectcards");
const projects = [
  {
    title: "Corporate Escapades",
    cardImage: "assets/images/blog-page/2.jpg",
    description:
      "Blog on the my experience as an intern at a Corporate Company",
    Previewlink: "https://medium.com/@anitha.shraddha/corporate-escapades-c040901a389e",
    
  },
  {
    title: "A Walk-through journey as an IISC Intern",
    cardImage: "assets/images/blog-page/1.png",
    description:
      "Blog on my experience as a research intern and more insights",
    Previewlink: "https://medium.com/@anitha.shraddha/a-walk-through-journey-as-an-iisc-intern-67a719d0933b",
    
  },
  {
    title: "Internship -A ship leading to new opportunities",
    cardImage: "assets/images/blog-page/3.jpg",
    description:
      "This blog gives more insights on the research projectt carried out at IISC",
    Previewlink: "https://medium.com/@anitha.shraddha/internship-a-ship-leading-to-new-opportunities-bc4625878d7a",
    
  },
];

const showCards = () => {
  let output = "";
  projects.forEach(
    ({ title, cardImage, description, Previewlink }) =>
      (output += `       
    <div class="column skill-card card">
      <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
        <div class="header">
        </div>
        <div class="data">
          <div class="content">
            <h1 class="title"><a href="#">${title}</a></h1>
            <p class="text">${description}</p>
            <ul class="menu-content">
              <li><a href="${Previewlink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>`)
  );
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);
