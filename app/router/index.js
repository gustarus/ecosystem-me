import {Router, Route, Redirect, IndexRedirect, IndexRoute, browserHistory} from 'react-router'
import Mock from '@core/views/mock'

// import application pages
import DefaultsIndexPage from '@core/router/defaults/index'
import DefaultsResumePage from '@core/router/defaults/resume'
import DefaultsInfographicPage from '@core/router/defaults/infographic'
import SpeechesFrontendconfPage from '@core/router/speeches/frontendconf'
import SpeechesHolyjsPage from '@core/router/speeches/holyjs'
import SpeechesMoscowjsPage from '@core/router/speeches/moscowjs'
import SpeechesDatabasePage from '@core/router/speeches/database'
import SpeechesCanvasPage from '@core/router/speeches/canvas'

export default () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={DefaultsIndexPage}>
        <IndexRoute component={Mock}/>
        <Route path="resume" component={DefaultsResumePage}/>
        <Route path="infographic" component={DefaultsInfographicPage}/>
        <Route path="speeches">
          <IndexRedirect to="/"/>
          <Route path="frontendconf" component={SpeechesFrontendconfPage}/>
          <Route path="holyjs" component={SpeechesHolyjsPage}/>
          <Route path="moscowjs" component={SpeechesMoscowjsPage}/>
          <Route path="database" component={SpeechesDatabasePage}/>
          <Route path="canvas" component={SpeechesCanvasPage}/>
        </Route>
        <Redirect from="*" to="/"/>
      </Route>
    </Router>
  );
}
