import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavMenu from './NavMenu';
import HeaderSearch from '../Search/HeaderSearch';
import { ReactComponent as Logo } from '../../static/images/logo.svg';
import { isBreakpointLarge } from '../../util/breakpoints';

class Header extends Component {
  state = {
    isNavOpen: false,
    isSearchOpen: false,
    isBreakpointLarge: false,
  }

  componentDidMount() {
    isBreakpointLarge() && this.setState({ 
      isBreakpointLarge: true,
      isNavOpen: true
    })
  }

  toggleSearch = () => {
    this.setState(prevState => ({
      isSearchOpen: !prevState.isSearchOpen
    }))
  }

  toggleMenu = () => {
    this.setState(prevState => ({
      isNavOpen: !prevState.isNavOpen
    }))
  }

  render() {
    const { isSearchOpen, isNavOpen, isBreakpointLarge } = this.state

    return (
      <nav>
        <div className="navigation-container">
          <Link to={'/'}>
            <Logo
              className="navigation__logo"
              role="img"
              aria-label="react movies"
            />
          </Link>   

          {(isSearchOpen || isBreakpointLarge) && <HeaderSearch
              isBreakpointLarge={isBreakpointLarge}
            />
          }

          {!isBreakpointLarge && <button
            className="search-container__button"
            type="button"
            onClick={this.toggleSearch}
            title="open search"
            aria-label="open search"
            disabled={isBreakpointLarge}
          >
            <span className="search__icon" aria-hidden></span>
            <small className="is-visually-hidden">search for movies</small>
          </button>}

          <button
            className="mobile-menu__button"
            type="button"
            onClick={this.toggleMenu}
            title="open menu"
            aria-label="open menu"
          >
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
            <small className="is-visually-hidden">mobile menu</small>
          </button>

          {(isNavOpen || isBreakpointLarge) && <NavMenu 
              toggleMenu={this.toggleMenu} 
            />
          }
        </div>
      </nav>
    );
  }
}

export default Header;