import styled from '@emotion/styled';
import React from 'react';
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

	/* Desabilitado  */
	&:disabled {
		background-color: #e0e0e0;
		color: #9e9e9e;
		cursor: no-drop;
		&:hover {
			background-color: #e0e0e0;
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
	text: string;
	disabled: boolean;
	size: string;
	handleClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export const BtnDefault = ({ text, disabled, size, handleClick }: BtnProps) => {
	return (
		<Button type="button" disabled={disabled} className={size} onClick={handleClick}>
			{text}
		</Button>
	);
};
