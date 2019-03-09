import React from 'react';
import ReactDOM from 'react-dom';
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

function Main (i = 0) {
	//if (typeof(i) == "object") i = 0;

	if (i == 0) { return (
		class MainContent extends React.Component {
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
		});
	}
	else if (i == 1) {
		class MainContent extends React.Component {
			render () {
				return (
				<div className="main_container">
					<div className="main_content">
						<div className="conclusion_content">
							<p idName="conclusion">Заявка на вывод средств</p>
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
									<p id="usd">$ USD <img src="img/down_currency.png" id='currency_img' alt="down_drop" /></p>
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
				</div>);
			}
		}
	}
	return null; 
}

class Nav extends React.Component {
	render () {
		return (
		<nav>
			<div className="nav_left">
				<p>Пополнить</p>
				<p>Вывести</p>
				<p>Операции</p>
				<p>Сделки</p>
				<p>Профиль</p>
				<p>Котировки</p>
			</div>
			<div className="nav_right">
				<p>Счет №: 31998640USD</p>
			</div>
		</nav>);
	}
}
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
	render () {
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
					<Nav />
					<Main />
				</main>
			</div>
		);
	}
}
ReactDOM.render(<Body />, document.querySelector("body"));

document.querySelectorAll(".nav_left > p")[0].onclick = () => menuKlick(0);
document.querySelectorAll(".nav_left > p")[1].onclick = () => menuKlick(1);
document.querySelectorAll(".nav_left > p")[2].onclick = () => menuKlick(2);
document.querySelectorAll(".nav_left > p")[3].onclick = () => menuKlick(3);
document.querySelectorAll(".nav_left > p")[4].onclick = () => menuKlick(4);
document.querySelectorAll(".nav_left > p")[5].onclick = () => menuKlick(5);

var pointer = 0;

menuKlick(0);

function menuKlick (e) {
	document.querySelectorAll(".nav_left > p")[pointer].style.borderColor = '#d0d8e2';
	document.querySelectorAll(".nav_left > p")[e].style.borderColor = '#008aff';
	pointer = e;

	Main(e);
}

//document.querySelectorAll(".nav_left > p")[this.pointer].style.borderColor = 'none';
//document.querySelectorAll(".nav_left > p")[point].style.borderColor = '#008aff';