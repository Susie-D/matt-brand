"use client";

type Props = {
    onClick: () => void;
    children: React.ReactNode;
    className: string;
}

const Button = ({ onClick, children, className }: Props) => {
    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button;