import React from 'react';
export default class Home extends React.Component {

  render() {
    return (
      <React.Fragment>
      <section className="home">
        <div className="title">
          <h1>Hi,</h1>
          <h1>{`I'm ${this.props.name},`}</h1>
          <h1>web developer.</h1>
          <h6>{this.props.job}</h6>
        </div>
        <div className="hire-me">
          <a href="/contact" onClick={this.props.changeToContact}>Yes, I'm Available For Hire</a>
        </div>
        <div className="social-icons">
          {this.props.socialMedia.map((social, index)=> <a key={index} href={social[1]} target="_blank"><i className={`fab ${social[2]}`}></i> </a>)}
        </div>
      </section>
      </React.Fragment>
      );
  }
}
