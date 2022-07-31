import styled from "styled-components"

export const StyleMajor = styled.div`
    display: flex;
    padding-bottom: 20px;

    @media ${({ theme }) => theme.device.mobile} {
        max-width: 350px;
        padding-bottom: 15px;
        line-height: 15px;
    }
`;

export const StyleMajorDate = styled.div`
    flex-shrink: 0;
    width: 150px;
    font-weight: normal;

    @media ${({ theme }) => theme.device.mobile} {
        width: 75px;
        font-size: 5px;
    }
`;

export const StyleMajorCompany = styled.div`
    flex-shrink: 0;
    width: 150px;
    margin-left: 15px;

    @media ${({ theme }) => theme.device.mobile} {
        width: 70px;
        font-size: 5px;
    }
`;

export const StyleMajorExplain = styled.div`
    @media ${({ theme }) => theme.device.mobile} {
        width: 200px;
        font-size: 5px;
    }
`;