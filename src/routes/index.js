// React
import React, {Component} from 'react';

// Routing & Links
import {Switch, Route} from 'react-router-dom';
import * as links from '../links';

// Google Analytics
import ReactGA from 'react-ga';
import {GA_TRACKING_NUMBER} from '../data/constants';

// Pages
import Blog from '../pages/Blog';
import BlogPostDetails from '../pages/BlogPostDetails';
import Portfolio from '../pages/Portfolio';
import About from '../pages/About';
import Error from '../pages/Error';

// Strings
import {errorStrings} from '../strings';

// Initilize Google Analytics
/**
 * Add this to enable debugging messages in the console
 *
 * ReactGA.initialize(GA_TRACKING_NUMBER, {
 *  cookieDomain: 'auto',
 *  debug: true
 *});
 *
 **/
ReactGA.initialize(GA_TRACKING_NUMBER);

class Routes extends Component {

  logPageView() {
    ReactGA.set({
      page: window.location.pathname + window.location.search
    });
    ReactGA.pageview(window.location.pathname + window.location.search);
    return null;
  }

  render() {
    return [
      <Route key='home' path='/' component={this.logPageView}/>,
      <Switch key='routes'>
        <Route exact path={links.blogLink.url} component={Blog}/>
        <Route exact path={`${links.blogLink.url}/:post_id`} component={BlogPostDetails}/>
        <Route exact path={links.portfolioLink.url} component={Portfolio}/>
        <Route exact path={links.aboutLink.url} component={About}/>
        <Route render={() => (<Error error={errorStrings.notFound}/>)}/>
      </Switch>
    ];
  }

}

export default Routes;