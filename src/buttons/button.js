import styled from "styled-components"

export const Button = styled.button`
    font-size: 24px;
    padding: 30px;
    border-radius: 30px;
    border: 0;
    margin-bottom: 20px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

`;

export const PrimaryButton = styled(Button)<{$active?: boolean}>`
    background-color: ${props => props.$active ? "#cbce91" : "#76528b"};
    color: ${props => props.$active ? "#76528b" : "#cbce91"};
`;

export const SecondaryButton = styled(Button)`
    background-color: #333d79;
    color: #faebef;
`;