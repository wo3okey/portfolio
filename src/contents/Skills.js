import theme from "../styles/Theme";
import { StyleSkillLevel, StyleTechImage } from "../styles/StyleSkills"
import { StyleSperator, StyleDivision } from '../styles/StyleCommon'

import Graphql from "../images/tech_icon/graphql.png"
import Html5 from "../images/tech_icon/html5.png"
import Rust from "../images/tech_icon/rust.png"
import Typescript from "../images/tech_icon/typescript.png"
import ElasticSearch from "../images/tech_icon/elasticsearch.png"
import Kubernetes from "../images/tech_icon/kubernetes.png"
import Dynamodb from "../images/tech_icon/dynamodb.png"
import Kinesis from "../images/tech_icon/kinesis.png"
import Datadog from "../images/tech_icon/datadog.png"
import Airflow from "../images/tech_icon/airflow.png"
import SpringBoot from "../images/tech_icon/springboot.png"
import Swagger from "../images/tech_icon/swagger.png"
import Logstash from "../images/tech_icon/logstash.png"
import Redash from "../images/tech_icon/redash.png"
import JPA from "../images/tech_icon/jpa.png"
import Bootstrap from "../images/tech_icon/bootstrap.png"
import Intelij from "../images/tech_icon/intellij.png"
import Js from "../images/tech_icon/js.png"
import Github from "../images/tech_icon/github.png"
import Git from "../images/tech_icon/git.png"
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
import Kafka from "../images/tech_icon/kafka.png"

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
                <StyleDivision>이만큼 노력하고 있어요</StyleDivision>
                <StyleSkillLevel>꽤 친한사이</StyleSkillLevel>
                
                <StyleTechImage theme={theme} src={SpringBoot}/>
                <StyleTechImage theme={theme} src={JPA} />
                <StyleTechImage theme={theme} src={Kotlin} />
                <StyleTechImage theme={theme} src={Java} />
                <StyleTechImage theme={theme} src={ElasticSearch} />
                <StyleTechImage theme={theme} src={Mysql} />
                <StyleTechImage theme={theme} src={Redis} />
                <StyleTechImage theme={theme} src={Git} />

                <StyleSkillLevel>점점 친해지고 있는 사이</StyleSkillLevel>
                <StyleTechImage theme={theme} src={Reacts} />
                <StyleTechImage theme={theme} src={Aws} />
                <StyleTechImage theme={theme} src={Kinesis} />
                <StyleTechImage theme={theme} src={Dynamodb} />
                <StyleTechImage theme={theme} src={Kafka} />
                <StyleTechImage theme={theme} src={Docker} />
                <StyleTechImage theme={theme} src={Airflow} />
                <StyleTechImage theme={theme} src={Redash} />
                <StyleTechImage theme={theme} src={Kibana} />
                <StyleTechImage theme={theme} src={Nginx} />


                <StyleSkillLevel>친해지고 싶은 사이</StyleSkillLevel>
                <StyleTechImage theme={theme} src={SpringWebflux} />
                <StyleTechImage theme={theme} src={Graphql} />
                
                <StyleTechImage theme={theme} src={Typescript} />
                <StyleTechImage theme={theme} src={Kubernetes} />
                <StyleTechImage theme={theme} src={Rust} />
                <StyleTechImage theme={theme} src={Logstash} />
                

                <StyleSkillLevel>도움을 많이 받는 사이</StyleSkillLevel>
                <StyleTechImage theme={theme} src={Intelij} />
                <StyleTechImage theme={theme} src={Datadog} />
                <StyleTechImage theme={theme} src={Swagger} />
                <StyleTechImage theme={theme} src={Jira} />
                <StyleTechImage theme={theme} src={Bitbucket} />
                <StyleTechImage theme={theme} src={Jenkins} />
                <StyleTechImage theme={theme} src={Linux} />
                <StyleTechImage theme={theme} src={Github} />

                <StyleSkillLevel>꽤 친했던 사이</StyleSkillLevel>
                <StyleTechImage theme={theme} src={Spring} />
                <StyleTechImage theme={theme} src={Nodejs} />
                <StyleTechImage theme={theme} src={RabbitMq} />
                <StyleTechImage theme={theme} src={Couchbase} />
                <StyleTechImage theme={theme} src={Memcached} />
                <StyleTechImage theme={theme} src={Hadoop} />
                <StyleTechImage theme={theme} src={Oracle} />
                <StyleTechImage theme={theme} src={Mybatis} />
                <StyleTechImage theme={theme} src={Maven} />
                <StyleTechImage theme={theme} src={Html5} />
                <StyleTechImage theme={theme} src={Js} />
                <StyleTechImage theme={theme} src={Css} />
                <StyleTechImage theme={theme} src={Bootstrap} />
                <StyleTechImage theme={theme} src={Jquery} />
                <StyleTechImage theme={theme} src={Angular} />
                <StyleTechImage theme={theme} src={Jsp} />
                <StyleTechImage theme={theme} src={Scouter} />
            </section>
            <StyleSperator></StyleSperator>
        </div>
    )
}

export default Skills