import { StyleProject } from "../styles/StyleProjects"
import { StyleProjectTitle } from "../styles/StyleProjects"
import { StyleContentsArea } from "../styles/StyleProjects"
import { StyleContentsLeft } from "../styles/StyleProjects"
import { StyleContentsRight } from "../styles/StyleProjects"
import { StyleContentsTitle } from "../styles/StyleProjects"
import { StyleContents } from "../styles/StyleProjects"
import { StyleContent } from "../styles/StyleProjects"

import { StyleBadgeGreen } from '../styles/StyleCommon'
import { StyleSperator } from '../styles/StyleCommon'

import Project2 from "../images/project/project2.JPG"

const Inspection = () => {
    return (
        <div>
            <StyleProject>
                <StyleContentsArea>
                    <StyleContentsLeft>
                        <blockquote>
                            <StyleProjectTitle>2021.12 - 2022.06</StyleProjectTitle>
                            <StyleProjectTitle>검수대행 시스템</StyleProjectTitle>
                            <StyleBadgeGreen>spring boot</StyleBadgeGreen>
                            <StyleBadgeGreen>kotlin</StyleBadgeGreen>
                            <StyleBadgeGreen>mysql</StyleBadgeGreen>
                            <StyleBadgeGreen>redis</StyleBadgeGreen>
                            <StyleBadgeGreen>jpa</StyleBadgeGreen>
                            <StyleBadgeGreen>AWS</StyleBadgeGreen>
                            <StyleBadgeGreen>kinesis</StyleBadgeGreen>
                            <StyleBadgeGreen>parameter store</StyleBadgeGreen>
                        </blockquote>
                    </StyleContentsLeft>
                    <StyleContentsRight>
                        <StyleContentsTitle>검수대행 시스템 제목1</StyleContentsTitle>
                        <StyleContents>
                            <StyleContent>내용1-1</StyleContent>
                            <StyleContent>내용1-2</StyleContent>
                            <StyleContent>내용1-3</StyleContent>
                        </StyleContents>
                        <StyleContentsTitle>검수대행 시스템 제목2</StyleContentsTitle>
                        <StyleContents>
                            <StyleContent>내용2-1</StyleContent>
                            <StyleContent>내용2-2</StyleContent>
                            <StyleContent>내용2-3</StyleContent>
                        </StyleContents>
                    </StyleContentsRight>
                </StyleContentsArea>
            </StyleProject>
        </div>
    )
}

export default Inspection