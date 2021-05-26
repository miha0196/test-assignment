import React, { useCallback, useState, useEffect, useRef } from 'react'
import { Route, useHistory, useLocation, Switch } from 'react-router-dom'
import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";

import MainPage from './pages/MainPage'
import ClockPage from './pages/ClockPage'
import ScrollTo from './commponents/ScrollTo';

import './app.scss'

const App: React.FC = () => {
  const history = useHistory();
  const location = useLocation();

  const [swipeDirection, setSwipeDirection] = useState<'left' | 'right'>('left')
  const scrollOffset = useRef(0);
  const curX = useRef(0);

  const changePage = useCallback((startCoord, endCoord) => {
    if (startCoord - endCoord > document.documentElement.scrollWidth / 4) {
      if (history.location.pathname === '/clock') return

      scrollOffset.current = window.pageYOffset;
      setSwipeDirection('left')
      history.push('/clock')
    }
    
    if (endCoord - startCoord > document.documentElement.scrollWidth / 4) {
      if (history.location.pathname === '/') return

      setSwipeDirection('right')
      history.push('/')
    }
  }, [history])

  const touchStartHandler: {(event: TouchEvent): void} = useCallback((event) => {
    curX.current = event.changedTouches[0].pageX
  }, [])

  const mouseDownHandler: {(event: MouseEvent): void} = useCallback((event) => {
    curX.current = event.clientX
  }, [])

  const mouseUpHandler: {(event: MouseEvent): void} = useCallback((event) => {
    changePage(curX.current, event.clientX)
  }, [changePage])

  const touchEndHandler: {(event: TouchEvent): void} = useCallback((event) => {
    changePage(curX.current, event.changedTouches[0].pageX)
  }, [changePage])

  useEffect(() => {    
    window.addEventListener('touchstart', touchStartHandler);
    window.addEventListener('touchend', touchEndHandler);
    window.addEventListener('mousedown', mouseDownHandler)
    window.addEventListener('mouseup', mouseUpHandler)
    
    return () => {
      window.removeEventListener('touchstart', touchStartHandler)
      window.removeEventListener('touchstart', touchEndHandler)
      window.addEventListener('mousedown', mouseDownHandler)
      window.addEventListener('mouseup', mouseUpHandler)
    }
  }, [touchStartHandler, touchEndHandler, mouseDownHandler, mouseUpHandler])
  
  return (
    <div className='App'>
      <TransitionGroup>
        <CSSTransition
          key={location.key}
          classNames={`${swipeDirection === 'left' ? 'swipe-left' : 'swipe-right'}`}
          timeout={300}
        >
          <Switch location={location}>
            <Route path="/" exact>
              <ScrollTo topOffset={scrollOffset.current} />
              <MainPage />
            </Route>
            <Route path="/clock">
              <ClockPage />
            </Route>
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
