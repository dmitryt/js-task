interface ITheme {
  colors: {
    [style: string]: string;
  };
}

export const linkStyles = ({ colors }: ITheme) => `
  color: ${colors.link};
  cursor: pointer;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
