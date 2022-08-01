import styled from "styled-components"

export const StyleThanks = styled.h2`
    @media ${({ theme }) => theme.device.mobile} {
        font-size: 20px;
    }
`;

export const StyleMail = styled.span`
    color: pink;
    font-size: 20px;

    @media ${({ theme }) => theme.device.mobile} {
        font-size: 15px;
    }
`;

export const StyleContactWord = styled.span`
    font-size: 20px;
    
    @media ${({ theme }) => theme.device.mobile} {
        font-size: 15px;
    }
`;

export const StyleCopyright = styled.div`
    color: rgba(255, 255, 255, 0.5);
    font-size: 15px;
    text-align: center;
    
    @media ${({ theme }) => theme.device.mobile} {
        font-size: 10px;
    }
`;

