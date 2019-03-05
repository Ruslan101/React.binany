import React from 'react';
import './style/index.css';

class DropMenu extends React.Component 
{
	render ()
	{
		return (
		<div className="drop_menu_content">
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
		);
	}
}
export default DropMenu;