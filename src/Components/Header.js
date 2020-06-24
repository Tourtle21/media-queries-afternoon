import React, {Component} from 'react';

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dropDownView: false,
            type: 'doNothing',
        }
    }

    toggleDropDown = () => {
        let newType = 'grow';
        if (this.state.dropDownView) {
            newType = 'shrink'
        }
        this.setState({dropDownView:!this.state.dropDownView, type:newType})
    }

    render() {
        return (
            <header className='header'>
                <div className='container'>
                    <h3 id='logo'>Start Bootstrap</h3>
                    <nav className='head-nav'>
                        <span>About</span>
                        <span>Projects</span>
                        <span>Contact</span>
                    </nav>
                    <div onClick={this.toggleDropDown} className='dropdown'>Menu <span className='hamberger'><span>__</span><span>__</span><span>__</span></span></div>
                </div>
                <div style={{animationName: this.state.type}} className='dropdown-menu'>
                    <span className='dropdown-item'>About</span>
                    <span className='dropdown-item'>Projects</span>
                    <span className='dropdown-item'>Contact</span>
                </div>
            </header>
        )
    }
}

export default Header;