
import React, { Component } from 'react'
import {Tabs, Tab, Grid, Cell, Card, CardTitle, CardText,CardActions, Button, CardMenu, IconButton} from 'react-mdl';
import './projects.css'



class  ProjectSection extends Component {
  constructor (props){
    super(props)
    this.state = {activeTab: 0}
  }

  /*
  Switch method, where you toggle between projects
  */
toggleCategories () {
  switch(this.state.activeTab) {
    case 0:
    return (
      <Card shadow={5} style={{minWidth:'400', margin:'auto'}}>
        <CardTitle style={{color:'#fff', height:'300px', background:'url(https://cdn-images-1.medium.com/max/1600/1*T1b83o47E1AI0lTpwzHVvA.png) center / cover'}}>React Project #1</CardTitle>

       <CardText>
        My first React project was actually this portfolio.
       </CardText>
        <CardActions border>
        <Button colored>Github</Button>
        <Button colored>CodePen</Button>
        <Button colored>LiveDemo</Button>
        </CardActions>
        <CardMenu style={{color:'#fff'}}>
            <IconButton name="share"></IconButton>
            </CardMenu>
      </Card>
    )
    case 1:
    return (
    <div><h1>This is NodeJS</h1></div>
    )
    case 3:
    return (
    <div><h1>This is Html/Css</h1></div>
    )
  }
}

  render(id) {
    return (

      <div className="section-content" id={id}>
        <Tabs
             className="projects"
            activeTab={this.state.activeTab}
            onChange={(tabId) => this.setState({activeTab: tabId})}
            ripple
            >
            <Tab>React </Tab>
            <Tab> NodeJS</Tab>
            <Tab>HTML/CSS </Tab>
        </Tabs>

          <section className="projects-grid">
          <Grid className="projects-grid">
          <Cell col={12}>
          <div className="content">{this.toggleCategories()}</div>
          </Cell>
          </Grid>

          </section>
           </div>

    ) }

}
export default ProjectSection
