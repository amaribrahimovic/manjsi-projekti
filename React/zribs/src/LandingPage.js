import './style.css';
import Header from './components/Header';
import SmallButton from './components/SmallButton';

const LandingPage = () => {
    return (
    <div className="App">
        <div className="dark-bg">
          <div className="circle"></div>
          <div className="flex-container">
            <Header/>
            <div className="down">
              <h2>Vstopi v našo virtualno učilnico</h2>
              <div className="buttons">
                <SmallButton name="Prijava"/>
                <SmallButton name="Registracija"/>
              </div>
            </div>
          </div>
        </div>
    </div>
    )
}

export default LandingPage
