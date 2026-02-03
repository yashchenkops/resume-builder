import Resume from './components/Resume';
import Header from './components/Header';
import Section from './components/Section';
import SectionItem from './components/SectionItem';

function App() {
  return (
    <Resume>
      <Header />
      <Section title="Relevant Experience">
        <SectionItem date="10.24 - 02.25" title="CyberFort Solutions" location="Barcelona, Spain">
          <div className="test">123</div>
        </SectionItem>
      </Section>
    </Resume>
  );
}

export default App;
