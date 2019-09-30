import React from 'react';
import '../assest/styles/Header.scss';

const Header = () => (
	<header>
		<div className="container">
			<div className="containerAbove">
				<div className="Languages">
					<div className="Espanol">
						<a href="/">Español</a>
					</div>
					<div className="Ingles">
						<a href="/">Ingles</a>
					</div>
					<div className="portugues">
						<a href="/">Portugues</a>
					</div>
				</div>
				<div className="login">
					<div>
						<a href="">idae@idaesoluciones.com</a>
					</div>
					<div>

					</div>
					<div>
						<a href="/">Iniciar Sesión</a>
					</div>
				</div>
			</div>
			<div className="containerLower">
				<div className="containerlogos">

				</div>
				<div className="containerOptions">

				</div>
			</div>
		</div>
	</header>	
);

export default Header