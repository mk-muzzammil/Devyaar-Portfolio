import React, { useState } from "react";
import { TabContent, TabPane, Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
import Image from "next/image";

// Import available local icons
import PHP from "/public/images/icons/icon_php.svg";
import JS from "/public/images/icons/icon_javascript.svg";
import Typescript from "/public/images/icons/icon_typescript.svg";
import python from "/public/images/icons/icon_python.svg";
import Java from "/public/images/icons/icon_java.svg";
import Ruby from "/public/images/icons/icon_ruby.svg";
import CPP from "/public/images/icons/icon_c_plus.svg";
import reactJS from "/public/images/icons/icon_react_js.svg";
import Laravel from "/public/images/icons/icon_laravel.svg";
import Angular from "/public/images/icons/icon_angular.svg";
import Vue from "/public/images/icons/icon_vue.svg";
import MYSQL from "/public/images/icons/icon_mysql.svg";
import POSTGREE from "/public/images/icons/icon_postgree.svg";
import NEXT from "/public/images/icons/icon_next.svg";
import DJANGO from "/public/images/icons/icon_django.svg";
import MONGO from "/public/images/icons/icon_mongo.svg";
import FASTAPI from "/public/images/icons/icon_fastapi.svg";
import SUPABASE from "/public/images/icons/icon_supabase.svg";
import Dynamo from "/public/images/icons/icon_dynamo.svg";
import Redis from "/public/images/icons/icon_redis.svg";
import Firebase from "/public/images/icons/icon_firebase.svg";
import ElasticSeach from "/public/images/icons/icon_elasticsearch.svg";
import AmazonWebServices from "/public/images/icons/amazonwebservices-original.svg";
import Docker from "/public/images/icons/docker-original.svg";
import Flutter from "/public/images/icons/flutter-original.svg";
import Node from "/public/images/icons/nodejs-original.svg";
import Express from "/public/images/icons/express-original.svg";
import Github from "/public/images/icons/github-original.svg";
import GoogleCloud from "/public/images/icons/googlecloud-original.svg";
import Kubernetes from "/public/images/icons/kubernetes-plain.svg";
import Kotlin from "/public/images/icons/kotlin-original.svg";
import Jenkins from "/public/images/icons/jenkins-original.svg";
import Tensorflow from "/public/images/icons/tensorflow-original.svg";
import Pytorch from "/public/images/icons/pytorch-original.svg";
import Azure from "/public/images/icons/azure-original.svg";

const TechnologyList = [
  // Web Platform Technologies
  {
    Id: "1",
    sIcon: reactJS,
    title: "React Js",
    category: "web",
  },
  {
    Id: "2",
    sIcon: JS,
    title: "JavaScript",
    category: "web",
  },
  {
    Id: "3",
    sIcon: Typescript,
    title: "TypeScript",
    category: "web",
  },
  {
    Id: "4",
    sIcon: PHP,
    title: "PHP",
    category: "web",
  },
  {
    Id: "5",
    sIcon: python,
    title: "Python",
    category: "web",
  },
  {
    Id: "6",
    sIcon: Java,
    title: "Java",
    category: "web",
  },
  {
    Id: "7",
    sIcon: Laravel,
    title: "Laravel",
    category: "web",
  },
  {
    Id: "8",
    sIcon: NEXT,
    title: "Next.js",
    category: "web",
  },
  {
    Id: "9",
    sIcon: Vue,
    title: "Vue.js",
    category: "web",
  },
  {
    Id: "10",
    sIcon: Angular,
    title: "Angular",
    category: "web",
  },
  {
    Id: "11",
    sIcon: DJANGO,
    title: "Django",
    category: "web",
  },
  {
    Id: "12",
    sIcon: FASTAPI,
    title: "FastAPI",
    category: "web",
  },

  // Database Technologies
  {
    Id: "13",
    sIcon: POSTGREE,
    title: "PostgreSQL",
    category: "database",
  },
  {
    Id: "14",
    sIcon: MYSQL,
    title: "MySQL",
    category: "database",
  },
  {
    Id: "15",
    sIcon: MONGO,
    title: "MongoDB",
    category: "database",
  },
  {
    Id: "16",
    sIcon: Redis,
    title: "Redis",
    category: "database",
  },
  {
    Id: "17",
    sIcon: Dynamo,
    title: "DynamoDB",
    category: "database",
  },
  {
    Id: "18",
    sIcon: ElasticSeach,
    title: "Elasticsearch",
    category: "database",
  },
  {
    Id: "19",
    sIcon: Firebase,
    title: "Firebase",
    category: "database",
  },
  {
    Id: "20",
    sIcon: SUPABASE,
    title: "Supabase",
    category: "database",
  },

  // Cloud & DevOps Technologies
  {
    Id: "21",
    sIcon: AmazonWebServices,
    title: "AWS",
    category: "cloud",
  },
  {
    Id: "22",
    sIcon: Docker,
    title: "Docker",
    category: "cloud",
  },
  {
    Id: "23",
    sIcon: Kubernetes,
    title: "Kubernetes",
    category: "cloud",
  },
  {
    Id: "24",
    sIcon: Azure,
    title: "Azure",
    category: "cloud",
  },
  {
    Id: "25",
    sIcon: GoogleCloud,
    title: "Google Cloud",
    category: "cloud",
  },

  {
    Id: "26",
    sIcon: Jenkins,
    title: "Jenkins",
    category: "cloud",
  },
  {
    Id: "27",
    sIcon: Github,
    title: "GitHub Actions",
    category: "cloud",
  },

  // Mobile Technologies
  {
    Id: "28",
    sIcon: Kotlin,
    title: "Kotlin",
    category: "mobile",
  },
  {
    Id: "29",
    sIcon: reactJS,
    title: "React Native",
    category: "mobile",
  },
  {
    Id: "30",
    sIcon: Flutter,
    title: "Flutter",
    category: "mobile",
  },

  // Other Frameworks & Technologies
  {
    Id: "31",
    sIcon: CPP,
    title: "C++",
    category: "other",
  },
  {
    Id: "32",
    sIcon: Ruby,
    title: "Ruby",
    category: "other",
  },
  {
    Id: "33",
    sIcon: Node,
    title: "Node.js",
    category: "other",
  },
  {
    Id: "34",
    sIcon: Tensorflow,
    title: "TensorFlow",
    category: "other",
  },
  {
    Id: "35",
    sIcon: Pytorch,
    title: "PyTorch",
    category: "other",
  },
];

const TechnologySection = (props) => {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const getFilteredTechnologies = (category) => {
    return TechnologyList.filter((tech) => tech.category === category);
  };

  return (
    <div className="section_space">
      <div className="heading_block text-center">
        <div
          className="heading_focus_text has_underline d-inline-flex"
          style={{
            backgroundImage: `url(${"/images/shapes/shape_title_under_line.svg"})`,
          }}
        >
          Our Technologies
        </div>
        <h2 className="heading_text mb-0">
          We Use <mark>Technologies</mark>
        </h2>
      </div>

      <div className="tab_block_wrapper">
        <Nav tabs className="nav justify-content-center">
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "1" })}
              onClick={() => {
                toggle("1");
              }}
            >
              Web Platform
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "2" })}
              onClick={() => {
                toggle("2");
              }}
            >
              Databases
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "3" })}
              onClick={() => {
                toggle("3");
              }}
            >
              Cloud & DevOps
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "4" })}
              onClick={() => {
                toggle("4");
              }}
            >
              Mobile Apps
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === "5" })}
              onClick={() => {
                toggle("5");
              }}
            >
              Other Frameworks
            </NavLink>
          </NavItem>
        </Nav>

        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <div className="web_development_technologies row justify-content-center">
              {getFilteredTechnologies("web").map((technology, cnt) => (
                <div
                  className="col-lg-2 col-md-3 col-sm-4 col-6"
                  key={technology.Id}
                >
                  <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                    <div className="iconbox_icon">
                      <Image
                        src={technology.sIcon}
                        alt={technology.title}
                        width={60}
                        height={60}
                      />
                    </div>
                    <div className="iconbox_content">
                      <h3 className="iconbox_title mb-0">{technology.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPane>
          <TabPane tabId="2">
            <div className="web_development_technologies row justify-content-center">
              {getFilteredTechnologies("database").map((technology, cnt) => (
                <div
                  className="col-lg-2 col-md-3 col-sm-4 col-6"
                  key={technology.Id}
                >
                  <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                    <div className="iconbox_icon">
                      <Image
                        src={technology.sIcon}
                        alt={technology.title}
                        width={60}
                        height={60}
                      />
                    </div>
                    <div className="iconbox_content">
                      <h3 className="iconbox_title mb-0">{technology.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPane>
          <TabPane tabId="3">
            <div className="web_development_technologies row justify-content-center">
              {getFilteredTechnologies("cloud").map((technology, cnt) => (
                <div
                  className="col-lg-2 col-md-3 col-sm-4 col-6"
                  key={technology.Id}
                >
                  <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                    <div className="iconbox_icon">
                      <Image
                        src={technology.sIcon}
                        alt={technology.title}
                        width={60}
                        height={60}
                      />
                    </div>
                    <div className="iconbox_content">
                      <h3 className="iconbox_title mb-0">{technology.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPane>
          <TabPane tabId="4">
            <div className="web_development_technologies row justify-content-center">
              {getFilteredTechnologies("mobile").map((technology, cnt) => (
                <div
                  className="col-lg-2 col-md-3 col-sm-4 col-6"
                  key={technology.Id}
                >
                  <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                    <div className="iconbox_icon">
                      <Image
                        src={technology.sIcon}
                        alt={technology.title}
                        width={60}
                        height={60}
                      />
                    </div>
                    <div className="iconbox_content">
                      <h3 className="iconbox_title mb-0">{technology.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPane>
          <TabPane tabId="5">
            <div className="web_development_technologies row justify-content-center">
              {getFilteredTechnologies("other").map((technology, cnt) => (
                <div
                  className="col-lg-2 col-md-3 col-sm-4 col-6"
                  key={technology.Id}
                >
                  <div className="iconbox_block text-center p-0 shadow-none bg-transparent">
                    <div className="iconbox_icon">
                      <Image
                        src={technology.sIcon}
                        alt={technology.title}
                        width={60}
                        height={60}
                      />
                    </div>
                    <div className="iconbox_content">
                      <h3 className="iconbox_title mb-0">{technology.title}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPane>
        </TabContent>
      </div>
    </div>
  );
};

export default TechnologySection;
