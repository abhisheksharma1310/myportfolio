import React from 'react'
import './experience.css';
import Skills from './Skills';
import myExperience from '../../mydata/Experience';

const Experience = () => {

    const { frontEndskills, backEndSkills } = myExperience;

    return (
        <section id='experience'>
            <h5>What Skills I have</h5>
            <h2>My Experience</h2>

            <div className='container experience__container'>
                <div className='experience__frontend'>
                    <h3>Frontend Development</h3>
                    <div className='experience__content'>
                        {frontEndskills.map((skill) => <Skills skillName={skill.name} level={skill.level} />)}
                    </div>
                </div>

                <div className='experience__backend'>
                    <h3>Backend Development</h3>
                    <div className='experience__content'>
                        {backEndSkills.map((skill) => <Skills skillName={skill.name} level={skill.level} />)}
                    </div>
                </div>
            </div>

        </section>
    )

}


export default Experience