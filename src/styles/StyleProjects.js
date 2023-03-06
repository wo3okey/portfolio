import styled from "styled-components"

export const StyleCompany = styled.h3`
font-weight: normal;
`;

export const StyleProject = styled.section`
    margin-bottom: 100px;
`;

export const StyleProjectTitle = styled.div`
    font-weight: normal;
`;

export const StyleSubTitle = styled.p`
    margin-top: 0px;
    margin-bottom: 0px;
`;

export const StyleTextLeft = styled.div`
    text-align: left;
`;

export const StyleContents = styled.ul``;

export const StyleContent = styled.li`
    padding-bottom: 10px;
`;

export const StyleContentsTitle = styled.h4`
    font-weight: normal;
`;

export const StyleContentsArea = styled.div`
    display: flex;
    flex-wrap: nowrap;

    @media ${({ theme }) => theme.device.mobile} {
        display: block;
    }
`;


export const StyleContentsLeft = styled.div`
    flex-shrink: 0;
    width: 350px;
`;

export const StyleContentsRight = styled.div`
    flex-grow: 1;
    margin-left: 15px;
`;

export const StyleImages = styled.div`
    display: flex;
`;

export const StyleImage = styled.img`
    width: 200px;
    margin: 2px;
    border-radius: 5px;

    @media ${({ theme }) => theme.device.mobile} {
        width: 24%;
    }
`;

export const StyleCompanyIcon = styled.img`
    width: 20px;
    margin-right: 3px;

    @media ${({ theme }) => theme.device.mobile} {
        width: 15px;
    }
`;

export const StyleProjectImage = styled.img`
    width: 800px;
    margin: 2px;
    border-radius: 5px;

    @media ${({ theme }) => theme.device.mobile} {
        width: 100%;
    }
`;