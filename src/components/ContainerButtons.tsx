import styled from '@emotion/styled';
import { BtnColor } from './BtnColor';
import { BtnDefault } from './BtnDefault';
import { BtnIcon } from './BtnIcon';
import { BtnOutline } from './BtnOutline';
import { BtnText } from './BtnText';

export const ContainerButtons = () => {
	const handleClick = () => {
		console.log('hola');
	};
	return (
		<Container>
			<h1>Buttons - Botones</h1>
			<p>
				Los botones varian respecto a los tamaños <b>sm md lg </b>
			</p>

			<p>
				Each pattern have the sizes
				<b>sm md lg</b>
			</p>
			<div>
				<h2>Default - Defecto</h2>
				<BtnDefault disabled={false} text="Default" size="lg" handleClick={handleClick} />
				<BtnDefault disabled={true} text="Default" size="md" handleClick={handleClick} />
			</div>

			<div>
				<h2>Outline - Contorno</h2>
				<BtnOutline color="primary" text="Default" disabled={false} size="sm" />
				<BtnOutline color="primary" text="Default" disabled={true} size="sm" />

				<BtnOutline color="secondary" text="Default" disabled={false} size="md" />
				<BtnOutline color="secondary" text="Default" disabled={true} size="md" />

				<BtnOutline color="danger" text="Default" disabled={false} size="lg" />
				<BtnOutline color="danger" text="Default" disabled={true} size="lg" />
			</div>

			<div>
				<h2>Text - Texto</h2>
				<BtnText color="primary" disabled={false} text="Default" size="sm" />
				<BtnText color="secondary" disabled={false} text="Default" size="md" />
				<BtnText color="danger" disabled={false} text="Default" size="lg" />
				<BtnText color="danger" disabled={true} text="Default" size="lg" />
			</div>

			<div>
				<h2>Without Shadow - Sin sombra</h2>
				<Button type="button" className="btn-primary disabled-shadow">
					Default
				</Button>

				{/* <Button type="button" className="btn-text" disabled>
					Default
				</Button> */}
			</div>

			<div>
				<h2>Icons - Iconos</h2>
				<BtnIcon color="danger" size="lg" type="text" startIcon={true} disabled={false}>
					<span className="material-icons-outlined icon">shopping_cart</span>
					<span>Default</span>
				</BtnIcon>

				<BtnIcon color="danger" size="lg" type="bg" startIcon={true} disabled={true}>
					<span className="material-icons-outlined icon">shopping_cart</span>
					<span>Default</span>
				</BtnIcon>

				<BtnIcon color="primary" size="md" type="text" startIcon={false} disabled={false}>
					<span className="material-icons-outlined icon">shopping_cart</span>
					<span>Default</span>
				</BtnIcon>

				<BtnIcon color="primary" size="md" type="text" startIcon={false} disabled={true}>
					<span className="material-icons-outlined icon">shopping_cart</span>
					<span>Default</span>
				</BtnIcon>

				<BtnIcon
					color="secondary"
					size="sm"
					type="outline"
					startIcon={false}
					disabled={false}
				>
					<span className="material-icons-outlined icon">shopping_cart</span>
					<span>Default</span>
				</BtnIcon>

				<BtnIcon
					color="secondary"
					size="sm"
					type="outline"
					startIcon={false}
					disabled={true}
				>
					<span className="material-icons-outlined icon">shopping_cart</span>
					<span>Default</span>
				</BtnIcon>
			</div>

			<div>
				<h2>Color</h2>
				<BtnColor disabled={false} color="primary" text="Default" size="sm" />
				<BtnColor disabled={true} color="primary" text="Default" size="sm" />
				<BtnColor disabled={false} color="secondary" text="Default" size="md" />
				<BtnColor disabled={true} color="secondary" text="Default" size="md" />
				<BtnColor disabled={false} color="danger" text="Default" size="lg" />
				<BtnColor disabled={true} color="danger" text="Default" size="lg" />
			</div>
		</Container>
	);
};

const Container = styled.section`
	max-width: 120rem;
	width: 90%;
	margin: 2rem auto;
	background-color: #fff;
	padding: 2rem;
	margin-bottom: 5rem;
	box-shadow: 0px 2px 5px 3px #33333333;
	border-radius: 1rem;
	div {
		margin-bottom: 2rem;
		display: flex;
		gap: 2rem;
		flex-wrap: wrap;
		align-items: center;
	}
`;
const Button = styled.button`
	background-color: #e0e0e0;
	border-radius: 6px;
	box-shadow: 0px 2px 3px 0px #33333333;
	color: #000;
	border: none;
	font-size: 1.6rem;
	padding: 0.8rem 1.6rem;
	transition: background-color 0.3s ease;

	&:hover,
	&:focus {
		background-color: #aeaeae;
		cursor: pointer;
	}

	&.disabled-shadow {
		box-shadow: none;
	}

	/* color de Fondo   */
	&.btn-primary {
		background-color: #3d5afe;
		color: white;
		&:hover {
			background-color: #0039cb;
		}
	}
`;
