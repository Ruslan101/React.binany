import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import DropMenu from './dropMenu.js';
import i_1 from './files/img/Menu.png';
import i_2 from './files/img/Menu_border.png';
import i_3 from './files/img/binany_logo.png';
import i_4 from './files/img/down.png';



class Header extends React.Component
{
	constructor (props) {
		super(props);
		this.animation = true;
		this.event = this.event.bind(this);
	}

	event () {
		if (this.animation) document.querySelector(".drop_menu_content").style.display = 'flex';
		else setTimeout(() => document.querySelector(".drop_menu_content").style.display = "none", 500);
		document.querySelector(".drop_menu_content").style.animationName = this.animation ? "DropMenu" : "BackDropMenu";
		this.animation = this.animation ? false : true;
	}
	render () 
	{
		return (
			<div>
				<div className="header_left">
					<div className='menu_button_container' id="menu_button">
						<img src={i_1} alt="menu" />
					</div>
					<img src={i_2} alt="menu_border" />
					<img src={i_3} alt="binany" />
				</div>
				<div className="header_right">
					<div className="drop_menu" onClick={this.event}>
						<img src={i_2} alt="menu_border" />
						<p>Учебный счёт<br /><span>$20 000.00</span></p>
						<img src={i_4} alt="down_drop" />
						<DropMenu />
					</div>
					<img src={i_2} alt="menu_border" />
					<div id='replenish' href="#"><span>Пополнить счет</span></div>
				</div>
			</div>
		);
	}
}
ReactDOM.render(<Header />, document.querySelector("header"));