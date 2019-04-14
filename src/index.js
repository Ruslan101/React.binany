import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { connect, Provider } from 'react-redux';
import './style/index.css';
import DropMenu from './dropMenu.js';

import i_1 from './files/img/Menu.png';
import i_2 from './files/img/Menu_border.png';
import i_3 from './files/img/binany_logo.png';
import i_4 from './files/img/down.png';
import i_5 from './files/img/close.png';
import i_6 from './files/img/flag_ru.png';
import i_7 from './files/img/sidebar_avatar.png';
import i_8 from './files/img/sound.png';
import i_9 from './files/img/exit.png';
import i_0 from './files/img/black_background.png';
import i_10 from './files/img/visa_mcard.png';
import i_11 from './files/img/qiwi.png';
import i_12 from './files/img/yandex.png';
import i_13 from './files/img/webmoney.png';
import i_14 from './files/img/skrill.png';
import i_15 from './files/img/down_currency.png';

var globalState = [0, true]; // Хранит информацию о придыдущих состояниях

const rootReducer = (state, action) => { // Функция обрабатывающая события
	if (action.type == 'onclick') 
		return { pointer: action.payload }
	else
		return state;
};

function changeColor (state) {
	document.querySelectorAll(".nav_left > p")[globalState[0]].style.borderColor = '#d0d8e2';
	document.querySelectorAll(".nav_left > p")[store.getState().pointer].style.borderColor = '#008aff';

	globalState[0] = state.pointer;
}

const store = createStore(rootReducer, { pointer: 0 }); // База данных состояний

const putStateToProps = (state) => { // Записывает данные из state в props
	return {
		pointer: state.pointer
	};
};
var onClickEvent = store.subscribe(() => changeColor(store.getState()));

class Nav extends React.Component {
	componentDidMount () {
		this.event('onclick', 0);
	}
	event (type, payload) {
		this.props.dispatch({ type: type, payload: payload });
	}
	render () {
		return (
		<nav>
			<div className="nav_left">
				<p onClick={ (event) => this.event('onclick', 0) }>Пополнить</p>
				<p onClick={ (event) => this.event('onclick', 1) }>Вывести</p>
				<p onClick={ (event) => this.event('onclick', 2) }>Операции</p>
				<p onClick={ (event) => this.event('onclick', 3) }>Сделки</p>
				<p onClick={ (event) => this.event('onclick', 4) }>Профиль</p>
				<p onClick={ (event) => this.event('onclick', 5) }>Котировки</p>
			</div>
			<div className="nav_right">
				<p>Счет №: 31998640USD</p>
			</div>
		</nav>);
	}
}
class TopApp extends React.Component {
	render () {
		return (
		<div className="main_container">
			<div className="main_content">
				<p id="payment">Выберите способ оплаты</p>
				<p className="main_content_text">Банковские карты</p>
				<div id="mcard">
					<img src={i_10} alt="visa & mcard" />
				</div>
				<p className="main_content_text">Электронные платежные системы</p>
				<div className="cards_container">
					<div><img src={i_11} alt="qiwi_card" /></div>
					<div><img src={i_12} alt="yandex_card" /></div>
					<div><img src={i_13} alt="webmoney_card" /></div>
					<div><img src={i_14} alt="skrill_card" /></div>
				</div>
			</div>
		</div>);
	}
}
class Withdraw extends React.Component {
	componentDidMount () {
		document.querySelector("#drop_menu_currency").onclick = function () {
			if (globalState[1]) {
				document.querySelector("#currency_drop_menu").style.display = 'flex';
				document.querySelector("#currency_drop_menu").style.animationName = 'DropMenu';
				document.querySelector("#currency_img").style.transform = 'rotate(180deg)';
			}
			else {
				document.querySelector("#currency_drop_menu").style.animationName = 'BackDropMenu';
				document.querySelector("#currency_img").style.transform = 'rotate(0deg)';
				setTimeout(() => document.querySelector("#currency_drop_menu").style.display = 'none', 1500);
			}
		globalState[1] = !globalState[1];
		}
	}
	render () {
		return (
			<div className="main_container">
				<div className="main_content">
					<div className="conclusion_content">
						<p id="conclusion">Заявка на вывод средств</p>
						<div className="conclusion_line_1">
							<div>
								<p>Всего</p>
								<span>$25,000</span>
							</div>
							<div>
								<p>Доступные средства</p>
								<span>$25,000</span>
							</div>
							<div>
								<p>Бонусы</p>
								<span>$1,000</span>
							</div>
						</div>
						<form action="post" className="conclusion_line_2">
							<div id="drop_menu_currency">
								<p>Валюта</p>
								<p id="usd">$ USD 
									<img src={i_15} id='currency_img' alt="down_drop" />
								</p>
								<ul id="currency_drop_menu">
									<li>¥ CNY</li>
									<li>€ EUR</li>
									<li>₽ RUB</li>
									<li>$ USD</li>
									<li>£ GBP</li>
								</ul>
							</div>
							<div>
								<p>Сумма</p>
								<p>$   <input type="text" placeholder="100" /></p>
							</div>
							<input type="submit" value="Отправить заявку" />
						</form>
						<p className="end_text">Минимальная сумм а вывода 10,00 s. Деньги спишутся со счета в момент выплаты заявки.</p>
						<p className="end_text">Вывод средств осуществляется теми же платежными методами, с которых вы вводили деньги в систему.</p>
					</div>
				</div>
			</div>
		);
	}
}
class MainContent extends React.Component {
	render () {
		switch (this.props.pointer) {
			case 0: return <TopApp />;	
			case 1: return <Withdraw />;			
			default: return null;
		}
	}
}
class Header extends React.Component {
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
	event_2 () {
		document.querySelector(".sidebar_background").style.animationName = '';
		document.querySelector("aside").style.display = 'flex';
		document.querySelector(".sidebar_menu").style.animationName = "SideBar";
		setTimeout(() => document.querySelector(".sidebar_background").style.animationName = 'DropMenu', 500);
	}
	render () 
	{
		return (
			<div>
				<div className="header_left">
					<div className='menu_button_container' id="menu_button" onClick={this.event_2}>
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
class Bar extends React.Component {
	event () {
		document.querySelector(".sidebar_menu").style.animationName = "SideBarHiden";
		document.querySelector(".sidebar_background").style.animationName = 'BackDropMenu';
		setTimeout(() => document.querySelector("aside").style.display = 'none', 1000);
	}
	render ()
	{
		return (
		<aside>
			<div className="sidebar_menu">
				<div className="sidebar_menu_head">
					<div className='menu_button_container' id="menu_button" onClick={this.event}>
						<img src={i_5} alt="close" />
					</div>
					<img src={i_2} alt="menu_border" />
					<img src={i_3} alt="binany" />
				</div>
				<div className="sidebar_menu_bottom">
					<div className="sidebar_menu_bottom_top">
						<div className="sidebar_menu_bottom_top_container">
							<img src={i_7} alt="avatar" />
							<div>
								<p>Name</p>
								<p id='score'>Счет №: 334337373</p>
							</div>
						</div>
						<div className="sidebar_menu_bottom_top_items">
							<p>Пополнить</p>
							<p>Вывести</p>
							<p>Операции</p>
							<p>Сделки</p>
							<p>Профиль</p>
						</div>
						<div className="sidebar_menu_bottom_top_items_bottom">
							<p>Котировки</p>
							<p>О компании</p>
							<p>Регуляция</p>
							<p>Дополнительно</p>
						</div>
					</div>
					<div className="sidebar_menu_bottom_bottom">
						<div className="sidebar_menu_bottom_bottom_flag">
							<img src={i_6} alt="flag ru" />
						</div>
						<div className="sidebar_menu_bottom_bottom_container">
							<div className="sidebar_menu_bottom_bottom_sound">
								<img src={i_8} alt="sound" />
							</div>
							<div className="sidebar_menu_bottom_bottom_exit">
								<img src={i_9} alt="exit" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="sidebar_background">
				<img src={i_0} alt="background" />
			</div>	
		</aside>);
	}
}
class Body extends React.Component {
	render ()
	{
		return (
			<div>
				<Bar />
				<header>
					<Header />
				</header>
				<main>
					<Provider store={store}><WrapperNavComponent /></Provider>
					<Provider store={store}><WrapperMainContentComponent /></Provider>
				</main>
			</div>
		);
	}
}

const WrapperMainContentComponent = connect (putStateToProps)(MainContent);
const WrapperNavComponent = connect (putStateToProps)(Nav);
const WrapperMainComponent = connect (putStateToProps)(Body);

ReactDOM.render(<Provider store={store}><WrapperMainComponent /></Provider>, document.querySelector("body"));