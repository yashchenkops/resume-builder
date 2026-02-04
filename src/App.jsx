import { useState } from 'react';
import { useComments } from '@/hooks/useComments';

import Header from './components/Header';
import Section from './components/Section';
import SectionItem from './components/SectionItem';
import Experience from './components/Experience';
import CommentsButton from './components/CommentsButton';
import CommentsSidebar from './components/CommentsSidebar';
import CommentsModal from './components/CommentsModal';

import { experience, education, awards, skills } from '@/data/resumeData';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { comments, addComment } = useComments();

  return (
    <>
      <div className="wrapper">
        <main className="resume">
          <Header />
          <Section title="Relevant Experience">
            {experience.map((item) => (
              <SectionItem
                key={item.id}
                left={item.date}
                company={item.company}
                location={item.location}
              >
                <Experience position={item.position} description={item.description} />
              </SectionItem>
            ))}
          </Section>
          <Section title="Education">
            {education.map((item) => (
              <SectionItem
                key={item.id}
                left={item.date}
                company={item.company}
                location={item.location}
              >
                <Experience position={item.position} description={item.description} />
              </SectionItem>
            ))}
          </Section>
          <Section title="Extracurricular & Awards">
            {awards.map((item) => (
              <SectionItem key={item.id} left={item.date}>
                {item.text}
              </SectionItem>
            ))}
          </Section>
          <Section title="Additional Information & Skills">
            {skills.map((skill) => (
              <SectionItem key={skill.id} left={`${skill.label}:`}>
                {skill.items.join(', ')}
              </SectionItem>
            ))}
          </Section>
        </main>

        {comments.length > 0 && <CommentsSidebar comments={comments} />}
      </div>
        <CommentsButton onClick={() => setIsModalOpen(true)} />

        {isModalOpen && <CommentsModal onClose={() => setIsModalOpen(false)} onSave={addComment} />}
    </>
  );
}

export default App;
