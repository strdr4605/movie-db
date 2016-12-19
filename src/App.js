import React, { Component } from 'react'// import { Provider } from 'react-redux'// import { createStore } from 'redux'import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'import Home from './Home'import Movie from './Movie'const About = () => <div><h1>About</h1><Links /></div>const NoMatch = () => <div><h1>NoMatch</h1><Links /></div>const Links = () =><ul>  <Link to='/'>Home</Link>  <br/>  <Link to='/about'>About</Link></ul>class App extends Component {  render () {    return (      <Router history={browserHistory}>        <Route path='/'>          <IndexRoute component={Home}/>          <Route path='about' component={About}/>          <Route path='movie/:movieId' component={Movie}/>        </Route>        <Route path='*' component={NoMatch}/>      </Router>    )  }}export default App