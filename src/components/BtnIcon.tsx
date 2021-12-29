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
	&.btn-bg-primary {
		background-color: #3d5afe;
		color: white;
		&:hover {
			background-color: #0039cb;
		}
	}
	&.btn-bg-secondary {
		background-color: #455a64;
		color: white;
		&:hover {
			background-color: #1c313a;
		}
	}

	&.btn-bg-danger {
		background-color: #d32f2f;
		color: white;
		&:hover {
			background-color: #9a0007;
		}
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

	/* color de Fondo   */
	&.btn-text-primary {
		background-color: #fff;
		color: #3d5afe;
		&:hover {
			background-color: #3d5afe1a;
		}
	}
	&.btn-text-secondary {
		background-color: #fff;
		color: #455a64;
		&:hover {
			background-color: #455a641a;
		}
	}

	&.btn-text-danger {
		background-color: #fff;
		color: #d32f2f;
		&:hover {
			background-color: #d32f2f1a;
		}
	}

	/*iconos*/
	&.btn-icon {
		display: flex;
		align-items: center;
		column-gap: 0.5rem;
	}
	&.start-icon {
		.icon {
			order: -1;
			font-size: 1.6rem;
		}
	}
	&.end-icon {
		.icon {
			order: 1;
			font-size: 1.6rem;
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

	/* Desabilitado  */
	&:disabled {
		&.bg-disabled {
			background-color: #e0e0e0;
			color: #9e9e9e;
			cursor: no-drop;
			&:hover {
				background-color: #e0e0e0;
			}
		}
		&.text-disabled {
			background-color: #fff;
			color: #9e9e9e;
			cursor: no-drop;
			&:hover {
				background-color: #fff;
			}
		}
		&.outline-disabled {
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
	}
`;

type Color = 'primary' | 'secondary' | 'danger';
type Size = 'sm' | 'md' | 'lg';
type Type = 'bg' | 'text' | 'outline';

interface BtnProps {
	color: Color;
	children: JSX.Element | JSX.Element[];
	disabled: boolean;
	size: Size;
	type: Type;
	startIcon: boolean;
}
// Children debe de tener la clase icon
// Type [bg, text, outline]

export const BtnIcon = ({
	color,
	children,
	disabled,
	size,
	type,
	startIcon,
}: BtnProps) => {
	return (
		<Button
			disabled={disabled}
			className={`btn-icon btn-${type}-${color} ${size} ${
				startIcon ? 'start-icon' : 'end-icon'
			} ${disabled ? `${type}-disabled` : ''}`}
		>
			{children}
		</Button>
	);
};
