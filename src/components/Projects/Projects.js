import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";

import { SectionContent } from "./Project-style";

class ProjectSection extends Component {
  state = { activeTab: 0 };

  /*
  Switch method, where you toggle between projects
  */
  toggleCategories() {
    switch (this.state.activeTab) {
      case 0:
        return (
          /* Projects NodeJS/BACKEND #1 */
          <div className="Project-grid">
            <Card shadow={5} style={{ minWidth: "400", margin: "auto" }}>
              <CardTitle
                className="node"
                style={{
                  color: "#fff",
                  height: "300px",
                  background:
                    "url(https://joni43.github.io/img/quiz.png) center / cover"
                }}
              >
                React Project #1
              </CardTitle>

              <CardText>
                This is a quiz where the questions are fetched from an API. Save
                score on localstorage.
              </CardText>
              <CardActions border>
                <Button colored>Github</Button>
                <Button colored>CodePen</Button>
                <Button colored>LiveDemo</Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>

            <Card shadow={5} style={{ minWidth: "400", margin: "auto" }}>
              <CardTitle
                className="node"
                style={{
                  color: "#fff",
                  height: "300px",
                  background:
                    "url(https://joni43.github.io/img/github.png) center / cover"
                }}
              >
                Github repos
              </CardTitle>

              <CardText>
                Developing real-time web applications through Web socket and Web
                hooks. Get practical experience how to put the built web
                application into production in a secure way.
              </CardText>
              <CardActions border>
                <Button colored>Github</Button>
                <Button colored>CodePen</Button>
                <Button colored>LiveDemo</Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>

            <Card shadow={5} style={{ minWidth: "400", margin: "auto" }}>
              <CardTitle
                className="node"
                style={{
                  color: "#fff",
                  height: "300px",
                  background:
                    "url(https://joni43.github.io/img/finder.png) center / cover"
                }}
              >
                {" "}
                Github finder
              </CardTitle>

              <CardText>
                Simple application to fetch Gihub API so you can search for
                github user and get their latest repos and info.
              </CardText>
              <CardActions border>
                <Button colored>Github</Button>
                <Button colored>CodePen</Button>
                <Button colored>LiveDemo</Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
        );
      case 1:
        return (
          /* Project React #2 */
          <div className="Project-grid">
            <Card shadow={5} style={{ minWidth: "400", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "300px",
                  background:
                    "url(https://cdn-images-1.medium.com/max/1600/1*T1b83o47E1AI0lTpwzHVvA.png) center / cover"
                }}
              >
                Quiz application
              </CardTitle>

              <CardText>
                My first React project was actually this portfolio.
              </CardText>
              <CardActions border>
                <Button colored>Github</Button>
                <Button colored>CodePen</Button>
                <Button colored>LiveDemo</Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
        );
      case 2:
        return (
          /* Project HTML/CSS #1 */
          <div className="Project-grid">
            <Card shadow={5} style={{ minWidth: "400", margin: "auto" }}>
              <CardTitle
                style={{
                  color: "#fff",
                  height: "300px",
                  background:
                    "url(https://i.imgur.com/yQQj9jV.png) center/ cover"
                }}
              >
                React Project #1
              </CardTitle>

              <CardText>
                A notebook in the browser that is responsive to both mobiles and
                computers. Created by using only HTML5, CSS3 and javascript
                without framework or library.
              </CardText>
              <CardActions border>
                <Button colored>Github</Button>
                <Button colored>CodePen</Button>
                <Button colored>LiveDemo</Button>
              </CardActions>
              <CardMenu style={{ color: "#fff" }}>
                <IconButton name="share" />
              </CardMenu>
            </Card>
          </div>
        );
    }
  }

  render() {
    console.log("id: " + this.props.id);
    return (
      <SectionContent id={this.props.id}>
        <Tabs
          className="projects"
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>NodeJS </Tab>
          <Tab> React</Tab>
          <Tab>HTML/CSS </Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </SectionContent>
    );
  }
}
export default ProjectSection;
