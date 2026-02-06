const skillSuggestions={
    developer:["JavaScript", "React", "Node.js", "Git", "SQL"],
    designer:["Figma", "Adobe XD", "UI/UX Design", "Canva"],
    analyst:["Excel", "PowerBI", "Python", "Data Visualization"]
};
function generateResume() {
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const phone=document.getElementById("phone").value;
    const education=document.getElementById("education").value;
    const experience=document.getElementById("experience").value;
    const projects=document.getElementById("projects").value;
    const skills=document.getElementById("skills").value;
    const role=document.getElementById("role").value;

    let suggestedSkills="";
    if(role && skillSuggestions[role]) {
        suggestedSkills = `<p><strong>Suggested Skills:</strong> ${skillSuggestions[role].join(", ")}</p>`;
    }

    const resumeHTML = `
    <h2>${name}<h2>
    <p><strong>Email:</strong> ${email} | <strong>Phone:</strong> ${phone}</p>
    <h3>Education</h3>
    <p>${education}</p>
    <h3>Experience</h3>
    <p>${experience}</p>
    <h3>Projects</h3>
    <p>${projects}</p>
    <h3>Skills</h3>
    <p>${skills}</p>
    ${suggestedSkills}
    `;

    document.getElementById("resume-output").innerHTML=resumeHTML;
}

function downloadResume(){
    const printContents=document.getElementById("resume-output").innerHTML;
    const originalContents=document.body.innerHTML;

    document.body.innerHTML=printContents;
    window.print();
    document.body.innerHTML=originalContents;
}