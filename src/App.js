import React from 'react'
import { BrowserRouter as Router, Switch, Route, BrowserRouter } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import Home from './pages/Home'
import About from './pages/About'
import Sectors from './pages/Sectors'
import Services from './pages/Services'
import Testimonials from './pages/Testimonials'
import Careers from './pages/Careers'
import Contact from './pages/Contact'

import Factories from './pages/sectors/FactoriesIndustrial'
import Offices from './pages/sectors/Offices'
import RetailShops from './pages/sectors/RetailShops'
import Schools from './pages/sectors/Schools'

import CladdingRestoration from './pages/services/CladdingRestoration'
import DecorativeCoatings from './pages/services/DecorativeCoatings'
import PaintSpray from './pages/services/InternalExternalPaintSpray'
import Paintaing from './pages/services/Painting'
import ProtectiveCoatings from './pages/services/ProtectiveCoatings'
import RenderingPlastering from './pages/services/RenderingPlastering'

import RouteScrollToTop from './components/RouteScrollToTop'
import './App.scss'

const apolloClient = new ApolloClient({
  uri: `${process.env.REACT_APP_GRAPHQL_URL}`,
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <BrowserRouter>
        <Router>
          <RouteScrollToTop />
          <Switch>
            <Route exact path = "/" component={Home} />
            <Route path = "/about" component={About} />
            <Route exact path = "/sectors" component={Sectors} />
            <Route exact path = "/services" component={Services} />
            <Route path = "/testimonials" component={Testimonials} />
            <Route path = "/careers" component={Careers} />
            <Route path = "/contact" component={Contact} />
          </Switch>
          <Switch>
            <Route path = "/sectors/factories-industrial" component={Factories} />
            <Route path = "/sectors/offices" component={Offices} />
            <Route path = "/sectors/retail-shops" component={RetailShops} />
            <Route path = "/sectors/schools" component={Schools} />
          </Switch>
          <Switch>
          <Route path = "/services/cladding-restoration" component={CladdingRestoration} />
            <Route path = "/services/decorative-coatings" component={DecorativeCoatings} />
            <Route path = "/services/internal-external-paint-spray" component={PaintSpray} />
            <Route path = "/services/painting" component={Paintaing} />
            <Route path = "/services/protective-coatings" component={ProtectiveCoatings} />
            <Route path = "/services/rendering-plastering" component={RenderingPlastering} />
          </Switch>
        </Router>
      </BrowserRouter>
    </ApolloProvider>
    
  )
}

export default App;
