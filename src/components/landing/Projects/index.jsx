import React, { useContext } from "react";
import { ThemeContext } from "providers/ThemeProvider";
import { Container, Card } from "components/common";
import { Wrapper, Grid, Item, Content } from "./styles";
// import Fork from "components/common/Icons/Fork";
// import Star from "components/common/Icons/Star";

export const Projects = () => {
  const { theme } = useContext(ThemeContext);
  // const [repos, setRepos] = useState([]);
  // console.log(process.env.GITHUB_TOKEN);
  // useEffect(() => {
  //   axios
  //     .get("https://api.github.com/user/repos", {
  //       params: {
  //         visibility: "public",
  //         per_page: 100,
  //         affiliation: "owner,collaborator",
  //       },
  //       headers: {
  //         Authorization: `token ${process.env.GITHUB_TOKEN}`,
  //       },
  //     })
  //     .then((response) => response.data)
  //     .then((repoData) => {
  //       repoData.sort((a, b) =>
  //         a.stargazers_count < b.stargazers_count ? 1 : -1
  //       );
  //       console.log(repoData);
  //       repoData = repoData.slice(0, 8);
  //       setRepos(repoData);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);
  return (
    <Wrapper as={Container} id="projects">
      {/* {repos.length > 0 && <h2>Projects</h2>} */}
      <Grid>
        {/* {repos.map((node) => (
          <Item
            key={node.id}
            as="a"
            href={node.svn_url}
            target="_blank"
            rel="noopener noreferrer"
            theme={theme}
          >
            <Card theme={theme}>
              <Content>
                <h4>{node.name}</h4>
                <p>{node.description}</p>
              </Content>
              <Stats theme={theme}>
                <div>
                  <Star color={theme === "light" ? "#000" : "#fff"} />
                  <span>{node.stargazers_count}</span>
                </div>
                <div>
                  <Fork color={theme === "light" ? "#000" : "#fff"} />
                  <span>{node.forks_count}</span>
                </div>
              </Stats>
            </Card>
          </Item>
        ))} */}
        <Item theme={theme}>
          <Card theme={theme}>
            <Content theme={theme}>
              <h4>E-Commerce App</h4>
              <p>
                This app has features like <b>dynamic</b> categories for
                products, <b>dynamic</b> cart, <b>payment gateway</b> using{" "}
                <b>Stripe</b>, <b>Authentication</b> system{" "}
                <b>using firebase</b>. Persistence of data after page refresh
                using <b>Redux-Persist</b>. User data is persisted in{" "}
                <b>firebase</b> so after login the old data is still saved.{" "}
                <b>Memoization</b> of data at appropriate places. Retrieving
                only required data instead of everything from redux-state using{" "}
                <b>Selectors</b>.
              </p>
              <br />
              <p>
                <h4 className="tech">Technologies:</h4>
                React, Redux, React Hooks, Firebase and Stripe.
              </p>
              <h5>
                <a
                  href="https://github.com/YadneshKhode/E-commerce-App/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="content__link"
                >
                  CODEBASE
                </a>
              </h5>
              <h5>
                <a
                  href="https://yadnesh-e-commerce.herokuapp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="content__link"
                >
                  LIVE SITE
                </a>
              </h5>
            </Content>
          </Card>
        </Item>
        <Item theme={theme}>
          <Card theme={theme}>
            <Content theme={theme}>
              <h4>Chat-Application</h4>
              <p>
                Users and their friends need to join same room to chat.{" "}
                <b>Authentication</b> system <b>using firebase</b>.{" "}
                <b>Socket.io</b> is used for real-time, bidirectional and
                event-based communication. Profile pictures are displayed to
                quickly recognize users. Dynamic list of users.
              </p>
              <br />
              <p>
                <h4 className="tech">Technologies:</h4>
                ReactJS, React Hooks, Firebase, NodeJS, ExpressJS, Socket.IO.
              </p>
              <h5>
                <a
                  href="https://github.com/YadneshKhode/chat-application"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="content__link"
                >
                  CODEBASE
                </a>
              </h5>
              <h5>
                <a
                  href="https://yadnesh-chat-app.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="content__link"
                >
                  LIVE SITE
                </a>
              </h5>
            </Content>
          </Card>
        </Item>
        <Item theme={theme}>
          <Card theme={theme}>
            <Content theme={theme}>
              <h4>Inventory Management System</h4>
              <p>
                This is a backend application with <b>APIs</b> for CRUD
                operations using <b>REST API</b>. There are two{" "}
                <b>microservices</b> (vendor, inventory) deployed in{" "}
                <b>EC2 instances</b>.
              </p>
              <br />
              <p>
                <h4 className="tech">Technologies:</h4>
                JavaScript, JSP, Spring.
              </p>
              <h5>
                <a
                  href="https://github.com/YadneshKhode/Inventory-Management-System"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="content__link"
                >
                  CODEBASE
                </a>
              </h5>
            </Content>
          </Card>
        </Item>
      </Grid>
    </Wrapper>
  );
};
