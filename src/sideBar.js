import React from 'react';
import ReactDOM from 'react-dom';
import i_5 from './files/img/close.png';
import i_2 from './files/img/Menu_border.png';
import i_3 from './files/img/binany_logo.png';
import i_6 from './files/img/flag_ru.png';

class Bar extends React.Component {
	render ()
	{
		return (
		<aside>
			<div className="sidebar_menu">
				<div className="sidebar_menu_head">
					<div className='menu_button_container' id="menu_button">
						<img src={i_5} alt="close" />
					</div>
					<img src={i_2} alt="menu_border" />
					<img src={i_3} alt="binany" />
				</div>
				<div className="sidebar_menu_bottom">
					<div className="sidebar_menu_bottom_top">
						<div className="sidebar_menu_bottom_top_container">
							<img src="img/sidebar_avatar.png" alt="avatar" />
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
								<img src="img/sound.png" alt="sound" />
							</div>
							<div className="sidebar_menu_bottom_bottom_exit">
								<img src="img/exit.png" alt="exit" />
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="sidebar_background">
				<img src={"localhost:3000/src/files/img/black_background.png"} alt="background" />
			</div>	
		</aside>);
	}
}
