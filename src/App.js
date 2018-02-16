import React from 'react'
import { Route, Switch, Link, withRouter } from 'react-router-dom'
import { view as HomePage } from './pages/HomePage'
import { view as MoviePage } from './pages/SubjectPage'
import { view as ReviewPage } from './pages/ReviewPage'
import { view as CommentPage } from './pages/CommentPage'
import NotFoundPage from './pages/404Page'
import { view as CelebrityPage } from './pages/CelebrityPage'
import { view as ChartPage } from './pages/ChartPage'
import { view as CinemaPage } from './pages/CinemaPage'
import { view as SearchPage } from './pages/SearchPage'
import { Input } from 'antd'
import navStyle from './css/navigation.scss'
import baseStyle from './css/base.scss'
import footerStyle from './css/footer.scss'

const HomeRoute = ({ match }) => {
  console.log('HomeRoute')
  console.log(match)
  return (
    <Switch >
      <Route path={`${match.url}`} exact component={HomePage} />
      <Route path={`${match.url}index`} component={HomePage} />
    </Switch >
  )
}

const SubjectRoute = ({ match }) => {
  console.log('SubjectRoute')
  console.log(match)
  return (
    <Switch>
      <Route path={`${match.path}/:id`} exact component={MoviePage} />
      <Route path={`${match.path}/:id/reviews`} component={ReviewPage} />
      <Route path={`${match.path}/:id/reviews?start=:start`} component={ReviewPage} />
      <Route path={`${match.path}/:id/comments`} component={CommentPage} />
      <Route path={`${match.path}/:id/comments?start=:start`} component={CommentPage} />
    </Switch>
  )
}

const CelebrityRoute = ({ match }) => {
  console.log('Celebrity route')
  console.log(match)
  return (
    <Switch>
      <Route path={`${match.path}/:id`} exact component={CelebrityPage} />
    </Switch>
  )
}

const ChartRoute = ({ match }) => {
  console.log('Chart route')
  console.log(match)
  return (
    <Switch>
      <Route path={`${match.path}`} exact component={ChartPage} />
    </Switch>
  )
}

const CinemaRoute = ({ match }) => {
  console.log('Cinema route')
  console.log(match)
  return (
    <Switch>
      <Route path={`${match.path}`} exact component={CinemaPage} />
    </Switch>
  )
}

const SearchRoute = ({ match, location }) => {
  console.log('Search route')
  return (
    <SearchPage query={location.search.substring(3)} />
  )
}

const NavBar = withRouter((props) => {
  return (
    <div>
      <div className={navStyle.globalNavItems} >
        <Link to={'/'} >豆瓣</Link>
        <a>读书</a>
        <a>读书</a>
        <a>音乐</a>
      </div>
      <div className={navStyle.movieNav}>
        <div className={navStyle.titleAndSearchWrapper}>
          <div className={navStyle.titleAndSearch}>
            <Link className={navStyle.title} to={'/'}>
              豆瓣电影
            </Link>
            <Input.Search
              placeholder="搜索电影、电视剧、综艺、影人"
              className={navStyle.searchBar}
              onSearch={
                (value) => {
                  props.history.location.pathname = `/`
                  props.history.push(`search?q=${value}`)
                }
              }
            />
          </div>
        </div>
        <div className={navStyle.movieCateNavWrapper}>
          <div className={navStyle.movieCateNav}>
            <Link to="/cinema">影讯&购票</Link>
            <Link to="/chart">排行榜</Link>
          </div>
        </div>
      </div>
    </div>
  )
})

const Footer = () => (
  <div className={footerStyle.footerWrapper}>
    <span>© 2005－2017 douban.com, all rights reserved 北京豆网科技有限公司</span>
    <span>🎇 2017-2018 Made By <a href="https://github.com/fi3ework">fi3ework</a></span>
  </div>
)

const App = () => {
  let host = ''
  return (
    <div>
      <NavBar />
      <main className={baseStyle.main}>
        <Switch>
          <Route path={`/${host}subject`} render={SubjectRoute} />
          <Route path={`/${host}celebrity`} render={CelebrityRoute} />
          <Route path={`/${host}chart`} render={ChartRoute} />
          <Route path={`/${host}cinema`} render={CinemaRoute} />
          {/* <Route path={`/${host}search?q=:q`} render={SearchRoute} /> */}
          <Route path={`/${host}search`} render={SearchRoute} />
          <Route path={`/${host}`} render={HomeRoute} />
          <Route path="/*" render={NotFoundPage} />
        </Switch>
      </main>
      <Footer />
    </div>
  )
}

export default App