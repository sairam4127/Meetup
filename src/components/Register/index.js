import {Component} from 'react'
import Header from '../Header'

import RegisterContext from '../../context/RegisterContext'

import {
  RegisterContainer,
  RegisterImg,
  Form,
  RegisterHeading,
  InputContainer,
  Label,
  Input,
  Select,
  RegisterButton,
  ErrorMsg,
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

class Register extends Component {
  state = {regName: '', regOption: topicsList[0].id, showError: false}

  onChangeTopic = event => {
    this.setState({regOption: event.target.value})
  }

  render() {
    return (
      <RegisterContext.Consumer>
        {value => {
          const {registerStateChange} = value

          const submitRegistration = event => {
            event.preventDefault()
            const {regName, regOption} = this.state
            if (regName !== '') {
              registerStateChange(regName, regOption, true)
              const {history} = this.props
              history.replace('/')
            } else {
              this.setState(prevState => ({showError: !prevState.showError}))
            }
          }

          const onChangeName = event => {
            this.setState({regName: event.target.value})
          }

          const {showError, regName, regOption} = this.state

          return (
            <div>
              <Header />
              <div>
                <RegisterContainer>
                  <RegisterImg
                    src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
                    alt="website register"
                  />
                  <Form onSubmit={submitRegistration}>
                    <RegisterHeading>Let us join</RegisterHeading>
                    <InputContainer>
                      <Label htmlFor="name">NAME</Label>
                      <Input
                        id="name"
                        value={regName}
                        type="text"
                        onChange={onChangeName}
                        placeholder="Your name"
                      />
                    </InputContainer>
                    <InputContainer>
                      <Label htmlFor="topic">Topics</Label>
                      <Select
                        id="topic"
                        value={regOption}
                        onChange={this.onChangeTopic}
                      >
                        {topicsList.map(each => (
                          <option value={each.id} key={each.id}>
                            {each.displayText}
                          </option>
                        ))}
                      </Select>
                    </InputContainer>
                    <RegisterButton type="submit">Register Now</RegisterButton>
                    {showError === true ? (
                      <ErrorMsg>Please enter your name</ErrorMsg>
                    ) : (
                      ''
                    )}
                  </Form>
                </RegisterContainer>
              </div>
            </div>
          )
        }}
      </RegisterContext.Consumer>
    )
  }
}
export default Register
