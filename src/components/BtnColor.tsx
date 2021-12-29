import styled from '@emotion/styled';

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
	/* color de Fondo   */
	&.btn-primary {
		background-color: #3d5afe;
		color: white;
		&:hover {
			background-color: #0039cb;
		}
	}
	&.btn-secondary {
		background-color: #455a64;
		color: white;
		&:hover {
			background-color: #1c313a;
		}
	}

	&.btn-danger {
		background-color: #d32f2f;
		color: white;
		&:hover {
			background-color: #9a0007;
		}
	}

	/* Desabilitado  */
	&:disabled {
		background-color: #e0e0e0;
		color: #9e9e9e;
		cursor: no-drop;
		&:hover {
			background-color: #e0e0e0;
		}
	}
	/* Tamaño  */
	&.sm {
		padding: 0.6rem 1.2rem;
	}
	&.md {
		padding: 0.8rem 1.6rem;
	}
	&.lg {
		padding: 1.1rem 2.2rem;
	}
`;

interface BtnProps {
	color?: string;
	text: string;
	disabled: boolean;
	size: string;
}
export const BtnColor = ({ color = 'primary', text, disabled, size }: BtnProps) => {
	return (
		<Button type="button" className={`btn-${color} ${size}`} disabled={disabled}>
			{text}
		</Button>
	);
};
