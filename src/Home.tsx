
import Contact from './Contact'
import Education from './Education'
import HeroSection from './HeroSection'
import Project from './Project'
import Intern from './Internship'
import Skill from './Skill'

const Home = () => {
  return (
    <div className="glass-photo">
      <HeroSection></HeroSection>
      <Education></Education>
      <Project></Project>
      <Skill></Skill>
      <Intern></Intern>
      <Contact></Contact>
    
    </div>
  )
}

export default Home