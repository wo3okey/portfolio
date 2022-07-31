import styled from "styled-components"

export const StyleTechImage = styled.img`
    width: 150px;
    padding: 10px;

    @media ${({ theme }) => theme.device.mobile} {
        width: 70px;
    }
`;

export const StyleSkillLevel = styled.h3`
    margin-top: 50px;
    font-width: bold;
`;