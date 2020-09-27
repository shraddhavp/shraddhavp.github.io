/*Research Details Table*/

const researchTable = document.querySelector(".main");
const citeTable = document.querySelector(".citeT");

const research = [
    {
        title : "Corporate Escapades",
        authors : "Shraddha",
        conferences : "Medium",
        researchYr : 2020,
        image : "assets/images/research-page/inteferenceNetwork.png",
        vancouver : "Blog on the my experience as an intern at a Corporate Company",
        bibtex : "Qile Zhu, Wei Bi, Xiaojiang Liu, Xiyao Ma, Xiaolin Li and Dapeng Wu. A Batch Normalized Inference Network Keeps the KL Vanishing Away. The 58th Annual Meeting of the Association for Computational Linguistics 2020."
    },

    {
        title : "A Walk-through journey as an IISC Intern",
        authors : "Shraddha",
        conferences : "Medium",
        researchYr : 2020,
        image : "assets/images/research-page/crossLingual.png",
        vancouver : "Blog on my experience as a research intern and more insights",
        bibtex : "Mikel Artetxe, Sebastian Ruder, Dani Yogatama, Gorka Labaka and Eneko Agirre. A Call for More Rigor in Unsupervised Cross-lingual Learning. The 58th Annual Meeting of the Association for Computational Linguistics 2020."
    },

    {
        title : "Internship -A ship leading to new opportunities",
        authors : "Shraddha",
        conferences : "Medium",
        researchYr : 2020,
        image : "assets/images/research-page/wordRepresentation.png",
        vancouver : "This blog gives more insights on the research projectt carried out at IISC",
        bibtex : "Nastaran Babanejad, Ameeta Agrawal, Aijun An and Manos Papagelis. A Comprehensive Analysis of Preprocessing for Word Representation Learning in Affective Tasks. The 58th Annual Meeting of the Association for Computational Linguistics 2020."
    },
];

const fillData = () => {
    let output = "";
    research.forEach(
        ({image, title, authors, conferences, researchYr, vancouver, bibtex}) =>
        (output +=`
            <tr> 
            <td class="imgCol"><img src="${image}" class="rImg"></td>
            <td class = "researchTitleName">
            <div><span class="imgResponsive"><img src="${image}" class="imgRes"></span></div>
            <a href="#0" class="paperTitle"> ${title} </a> 
            <div> ${authors} </div> <div class="rConferences"> ${conferences} 
            <div class="researchY">${researchYr}</div>
            </div>
            
            <!--CITE BUTTON-->
            <span class = "resCite">
            <a href="https://medium.com/@anitha.shraddha/internship-a-ship-leading-to-new-opportunities-bc4625878d7a" class="button button-accent button-small">Go Read</a>
            </span>
            </td>

            <td class="researchCite">
            <!--CITE BUTTON-->
            <a href="#popup1" class="button button-accent button-small">Go Read</a>
            </td>
            </tr>

            `)
        );
    researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);

const citeData = () => {
    let output = "";
    research.forEach(
        ({vancouver, bibtex}) =>
        (output += `
        <tr> <td class="left-cell"> Vancouver </td> <td class="right-cell">${vancouver} </td></tr>
                    <tr> <td class="left-cell"> BibTeX </td> <td class="right-cell"> ${bibtex}
                    </td></tr>                     
        `)
    );
    citeTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", citeData);