import { Header } from './components/Header.js'
import { ProfileCard } from './components/ProfileCard'
import { ExperienceCard } from './components/ExperienceCard'
import { HobbiesCard } from './components/HobbiesCard'
import { SkillsCard } from './components/SkillsCard'
import { ProjectCard } from './components/ProjectCard'
import './main.scss'

const app = document.getElementById('app')

app.appendChild(Header())
app.appendChild(ProfileCard())
app.appendChild(ExperienceCard())
app.appendChild(HobbiesCard())
app.appendChild(SkillsCard())
app.appendChild(ProjectCard())
