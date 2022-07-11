import styled from "styled-components"
import { Sperator } from '../styles/StyleCommon'

import Html5 from "../images/tech_icon/html5.png"
import Bootstrap from "../images/tech_icon/bootstrap.png"
import Js from "../images/tech_icon/js.png"
import Github from "../images/tech_icon/github.png"
import Jquery from "../images/tech_icon/jquery.png"
import Java from "../images/tech_icon/java.png"
import Css from "../images/tech_icon/css.png"
import Angular from "../images/tech_icon/angular.png"
import Mysql from "../images/tech_icon/mysql.png"
import Jsp from "../images/tech_icon/jsp.png"
import Redis from "../images/tech_icon/redis.png"
import Spring from "../images/tech_icon/spring.png"
import Mybatis from "../images/tech_icon/mybatis.png"
import Maven from "../images/tech_icon/maven.png"
import Oracle from "../images/tech_icon/oracle.png"

import Nodejs from "../images/tech_icon/nodejs.png"
import Kotlin from "../images/tech_icon/kotlin.png"
import Couchbase from "../images/tech_icon/couchbase.png"
import RabbitMq from "../images/tech_icon/rabbitMq.png"
import Memcached from "../images/tech_icon/memcached.png"
import Hadoop from "../images/tech_icon/hadoop.png"
import Nginx from "../images/tech_icon/nginx.png"
import Linux from "../images/tech_icon/linux.png"
import Tomcat from "../images/tech_icon/tomcat.png"

import Reacts from "../images/tech_icon/react.png"
import Aws from "../images/tech_icon/aws.png"
import Docker from "../images/tech_icon/docker.png"
import SpringWebflux from "../images/tech_icon/spring-webflux.png"

import Jira from "../images/tech_icon/jira.png"
import Bitbucket from "../images/tech_icon/bitbucket.png"
import Kibana from "../images/tech_icon/kibana.png"
import Jenkins from "../images/tech_icon/jenkins.png"
import Scouter from "../images/tech_icon/scouter.png"

const Skills = () => {
    return (
        <div>
            <section>
                <h2><b>이만큼 노력하고 있어요</b></h2>
                <Title>꽤 친한사이</Title>
                <TechImage src={Html5} />
                <TechImage src={Bootstrap} />
                <TechImage src={Js} />
                <TechImage src={Github} />
                <TechImage src={Jquery} />
                <TechImage src={Java} />
                <TechImage src={Css} />
                <TechImage src={Angular} />
                <TechImage src={Mysql} />
                <TechImage src={Jsp} />
                <TechImage src={Redis} />
                <TechImage src={Spring} />
                <TechImage src={Mybatis} />
                <TechImage src={Maven} />
                <TechImage src={Oracle} />
                <br></br>

                <Title>점점 친해지고 있는 사이</Title>
                <TechImage src={Nodejs} />
                <TechImage src={Kotlin} />
                <TechImage src={Couchbase} />
                <TechImage src={RabbitMq} />
                <TechImage src={Memcached} />
                <TechImage src={Hadoop} />
                <TechImage src={Nginx} />
                <TechImage src={Linux} />
                <TechImage src={Tomcat} />
                <br></br>

                <Title>친해지고 싶은 사이</Title>
                <TechImage src={Reacts} />
                <TechImage src={Aws} />
                <TechImage src={Docker} />
                <TechImage src={SpringWebflux} />
                <br></br>

                <Title>도움을 많이 받는 사이</Title>
                <TechImage src={Jira} />
                <TechImage src={Bitbucket} />
                <TechImage src={Kibana} />
                <TechImage src={Jenkins} />
                <TechImage src={Scouter} />
            </section>
            <Sperator></Sperator>
        </div>
    )
}

const TechImage = styled.img`
    width: 150px;
    padding: 10px;
`;

const Title = styled.h3`
    margin-top: 50px;
    font-width: bold;
`;


export default Skills