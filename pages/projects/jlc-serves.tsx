
import React from "react";
import ProjectContext from "../../components/Projects/ProjectContext";
import ProjectFooter from "../../components/Projects/ProjectFooter";

import ProjectHeader from "../../components/Projects/ProjectHeader";
import ProjectLanding from "../../components/Projects/ProjectLanding";
import ProjectSummary from "../../components/Projects/ProjectSummary";
import { projectInfoList } from "../../util/variables";

const JLCServesProject = () => {

  const proj = projectInfoList[1]

  return (
    <div className="flex flex-col">
      <div className='flex flex-col px-5'>
      <ProjectHeader projectIndex={proj.index} />
      <ProjectLanding
        nameLine1={proj.nameLine1}
        nameLine2={proj.nameLine2}
        genre={proj.genre}
        date={proj.date}
        liveLink={proj.liveLink}
        githubLink={proj.githubLink}
        imgSrc={proj.landingImgSrc}
      />

      </div>
      <ProjectSummary 
        summary={proj.summary}
        techStack={proj.techStack}
        summaryImg={proj.summaryImg}
      />

      <ProjectContext 
        history={proj.history}
        problem={proj.problem}
        role={proj.role}
        impact={proj.impact}
        ctxImg1={proj.ctxImg1}
        ctxImg2={proj.ctxImg2}
        ctxImg3={proj.ctxImg3}
      />
      <ProjectFooter 
        proj1Name="Thankful Notes"
        proj1Href="/projects/thankful-notes"
        proj1date="12.01.2021"
        proj2Name="JLC Academy"
        proj2Href="/projects/jlc-academy"
        proj2date="10.20.2020"
        liveLink={proj.liveLink}
        githubLink={proj.githubLink}
      />
    </div>
  );
};






export default JLCServesProject;
