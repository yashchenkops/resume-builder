import Header from './components/Header';
import Section from './components/Section';
import SectionItem from './components/SectionItem';
import Experience from './components/Experience';

import { experience, education, awards, skills } from '@/data/resumeData';

function App() {
  return (
    <main className="resume">
      <Header />
      <Section title="Relevant Experience">
        {experience.map((item) => (
          <SectionItem key={item.id} date={item.date} title={item.company} location={item.location}>
            <Experience position={item.position} description={item.description} />
          </SectionItem>
        ))}
      </Section>
      <Section title="Education">
        {education.map((item) => (
          <SectionItem key={item.id} date={item.date} title={item.company} location={item.location}>
            <Experience position={item.position} description={item.description} />
          </SectionItem>
        ))}
      </Section>
      <Section title="Extracurricular & Awards">
        {awards.map((item) => (
          <div className="section-item">
            <div className="section-item__left">{item.date}</div>
            <div className="section-item__body">{item.text}</div>
          </div>
        ))}
      </Section>
      <Section title="Additional Information & Skills">
        <div className="section-item">
          <div className="section-item__left">Languages:</div>
          <div className="section-item__body">{skills.languages.join(', ')}</div>
        </div>
        <div className="section-item">
          <div className="section-item__left">Additional Skills:</div>
          <div className="section-item__body">{skills.additional.join(', ')}</div>
        </div>
      </Section>
    </main>
  );
}

export default App;
