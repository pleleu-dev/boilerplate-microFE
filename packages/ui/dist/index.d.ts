declare const Header: () => JSX.Element;

declare const Table: () => JSX.Element;

interface IButton {
    handleClick: () => void;
    label: string;
}
declare const Button: ({ handleClick, label }: IButton) => JSX.Element;

export { Button, Header, IButton, Table };
