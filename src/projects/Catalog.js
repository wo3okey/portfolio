import { StyleProject } from "../styles/StyleProjects"
import { StyleProjectTitle } from "../styles/StyleProjects"
import { StyleContentsArea } from "../styles/StyleProjects"
import { StyleContentsLeft } from "../styles/StyleProjects"
import { StyleContentsRight } from "../styles/StyleProjects"
import { StyleContentsTitle } from "../styles/StyleProjects"
import { StyleContents } from "../styles/StyleProjects"
import { StyleContent } from "../styles/StyleProjects"

import { StyleImages } from "../styles/StyleProjects"
import { StyleImage } from "../styles/StyleProjects"

import Catalog1 from "../images/project/catalog1.png"
import Catalog2 from "../images/project/catalog2.png"
import Catalog3 from "../images/project/catalog3.png"
import Catalog4 from "../images/project/catalog4.png"


import { StyleBadgeGreen } from '../styles/StyleCommon'
import { StyleSperator } from '../styles/StyleCommon'

import Project2 from "../images/project/project2.JPG"

const Catalog = () => {
    return (
        <div>
            <StyleProject>
                <StyleContentsArea>
                    <StyleContentsLeft>
                        <blockquote>
                            <StyleProjectTitle>2021.08 - 2021.11</StyleProjectTitle>
                            <StyleProjectTitle>카탈로그 시스템</StyleProjectTitle>
                            <StyleBadgeGreen>spring boot</StyleBadgeGreen>
                            <StyleBadgeGreen>kotlin</StyleBadgeGreen>
                            <StyleBadgeGreen>mysql</StyleBadgeGreen>
                            <StyleBadgeGreen>redis</StyleBadgeGreen>
                            <StyleBadgeGreen>jpa</StyleBadgeGreen>
                            <StyleBadgeGreen>elasticsearch</StyleBadgeGreen>
                            <StyleBadgeGreen>AWS</StyleBadgeGreen>
                            <StyleBadgeGreen>kinesis</StyleBadgeGreen>
                            <StyleBadgeGreen>parameter store</StyleBadgeGreen>
                        </blockquote>
                    </StyleContentsLeft>
                    <StyleContentsRight>
                        <StyleContentsTitle>카탈로그 시스템 제목1</StyleContentsTitle>
                        <StyleContents>
                            <StyleContent>내용1-1</StyleContent>
                            <StyleContent>내용1-2</StyleContent>
                            <StyleContent>내용1-3</StyleContent>
                        </StyleContents>
                        <StyleContentsTitle>카탈로그 시스템 제목2</StyleContentsTitle>
                        <StyleContents>
                            <StyleContent>내용2-1</StyleContent>
                            <StyleContent>내용2-2</StyleContent>
                            <StyleContent>내용2-3</StyleContent>
                        </StyleContents>
                        <StyleImages>
                        <StyleImage src={Catalog3} title="카탈로그3" alt="" />
                            <StyleImage src={Catalog4} title="카탈로그4" alt="" />
                            
                            <StyleImage src={Catalog2} title="카탈로그2" alt="" />
                            <StyleImage src={Catalog1} title="카탈로그1" alt="" />
                            
                            
                        </StyleImages>
                    </StyleContentsRight>
                </StyleContentsArea>
            </StyleProject>
        </div>
    )
}

export default Catalog