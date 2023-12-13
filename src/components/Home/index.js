import {Link} from 'react-router-dom'

import Header from '../Header'

import RegisterContext from '../../context/RegisterContext'

import {
  HomeContainer,
  HomeHeading,
  HomePara,
  Button,
  Image,
  Name,
  Topic,
} from './styledComponents'

const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

const Home = props => (
  <RegisterContext.Consumer>
    {value => {
      const {isRegistered, name, topic, registerStateChange} = value

      const onRegister = () => {
        registerStateChange('', 'ARTS_AND_CULTURE', false)
        const {history} = props
        history.replace('/register')
      }

      const activeObj = topicsList.filter(eachobj => eachobj.id === topic)

      return (
        <div>
          <Header />

          {isRegistered === true ? (
            <HomeContainer>
              <Name>Hello {name}</Name>
              <Topic>Welcome to {activeObj[0].displayText}</Topic>
              <Image
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
              />
            </HomeContainer>
          ) : (
            <HomeContainer>
              <HomeHeading>Welcome to Meetup</HomeHeading>
              <HomePara>Please register for the topic</HomePara>
              <Link to="/register">
                <Button onClick={onRegister}>Register</Button>
              </Link>

              <Image
                src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
                alt="meetup"
              />
            </HomeContainer>
          )}
        </div>
      )
    }}
  </RegisterContext.Consumer>
)

export default Home
