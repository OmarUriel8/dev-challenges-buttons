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

	/* Solo texto  */
	&.text-blue {
		background-color: #fff;
		color: #3d5afe;
		&:hover {
			background-color: #2962ff1a;
		}
	}

	/* color de Fondo   */
	&.text-primary {
		background-color: #fff;
		color: #3d5afe;
		&:hover {
			background-color: #3d5afe1a;
		}
	}
	&.text-secondary {
		background-color: #fff;
		color: #455a64;
		&:hover {
			background-color: #455a641a;
		}
	}

	&.text-danger {
		background-color: #fff;
		color: #d32f2f;
		&:hover {
			background-color: #d32f2f1a;
		}
	}

	/* Desabilitado  */
	&:disabled {
		background-color: #fff;
		color: #9e9e9e;
		cursor: no-drop;
		&:hover {
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
	color: string;
	text: string;
	disabled: boolean;
	size: string;
}
export const BtnText = ({ color, text, disabled, size }: BtnProps) => {
	return (
		<Button type="button" className={`text-${color} ${size}`} disabled={disabled}>
			{text}
		</Button>
	);
};
