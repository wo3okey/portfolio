import styled from "styled-components"

export const StyleUpdateAt = styled.div`
    margin-right: 10px;
    font-size:18px;
    text-align:right;
    font-weight: normal;

    @media ${({ theme }) => theme.device.mobile} {
        font-size: 10px;
    }
`;