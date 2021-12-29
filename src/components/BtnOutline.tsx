import styled from '@emotion/styled';
const Button = styled.button`
	background-color: #e0e0e0;
	border-radius: 6px;
	box-shadow: 0px 2px 3px 0px #33333333;
	color: #000;
	border: none;
	font-size: 1.6rem;
	padding: 0.8rem 1.6rem;
	transition: background-color 0.3s ease, color 0.3s ease;

	&:hover,
	&:focus {
		background-color: #aeaeae;
		cursor: pointer;
	}

	/* Solo contorno  */
	&.btn-outline-primary {
		background-color: #fff;
		color: #3d5afe;
		border: 1px solid #3d5afe;
		&:hover {
			background-color: #0039cb;
			color: #fff;
		}
	}
	&.btn-outline-secondary {
		background-color: #fff;
		color: #455a64;
		border: 1px solid #455a64;
		&:hover {
			background-color: #1c313a;
			color: #fff;
		}
	}

	&.btn-outline-danger {
		color: #d32f2f;
		background-color: white;
		border: 1px solid #d32f2f;
		&:hover {
			background-color: #9a0007;
			color: #fff;
		}
	}

	/* Desabilitado  */
	&:disabled {
		background-color: #fff;
		border: 1px solid #9e9e9e !important;
		color: #9e9e9e;
		cursor: no-drop;
		border: none;
		&:hover {
			color: #9e9e9e;
			background-color: #fff;
		}
	}

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
export const BtnOutline = ({ color, text, disabled, size }: BtnProps) => {
	return (
		<Button type="button" className={`btn-outline-${color} ${size}`} disabled={disabled}>
			{text}
		</Button>
	);
};
