import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import i_1 from './files/img/Menu.png';
import i_2 from './files/img/Menu_border.png';
import i_3 from './files/img/binany_logo.png';
import i_4 from './files/img/down.png';



class Header extends React.Component
{
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
					<div className="drop_menu">
						<img src={i_2} alt="menu_border" />
						<p>Учебный счёт<br /><span>$20 000.00</span></p>
						<img src={i_4} alt="down_drop" />
						<div className="drop_menu_content" style={{display: 'none'}}>
							<div className="drop_menu_content_top">
								<p className="drop_menu_content_top_text_1">Реальный счёт</p>
								<div id="drop_menu_content_top_line">
									<div>
										<p className="drop_menu_content_top_text_2">Депозит</p>
										<p>$0.00</p>
									</div>
									<div>
										<p className="drop_menu_content_top_text_2">Бонусы</p>
										<p>$0.00</p>
									</div>
								</div>
							</div>
							<div className="drop_menu_content_bottom">
								<p className="drop_menu_content_top_text_3">Учебный счёт</p>
								<p className="drop_menu_content_top_text_4">$20 000.00</p>
							</div>
						</div>
					</div>
					<img src={i_2} alt="menu_border" />
					<div id='replenish' href="#"><span>Пополнить счет</span></div>
				</div>
			</div>
		);
	}
}
ReactDOM.render(<Header />, document.querySelector("header"));