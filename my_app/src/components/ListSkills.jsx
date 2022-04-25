import React from 'react';
import skills from '../data/skills';
import Skills from './Skills';

function ListSkills() {
  return (
    <section>
      <ul
        className="soft-skills "
      >
        {skills.map((skilsJs) => (
          <Skills
            key={skilsJs.name}
            titleSkills={skilsJs.name}
            listSkills={skilsJs}
          />
        ))}
      </ul>
    </section>
  );
}

export default ListSkills;
