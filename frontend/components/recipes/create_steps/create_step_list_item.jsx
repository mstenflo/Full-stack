import React from 'react';

class CreateStepListItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.step;
  }
  
  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    })
  }

  render() {
    if (!this.props.step) return null;
    
    const stepNo = this.props.idx + 1
        return (
          <div>
            <h2 className="recipe-step-title">Step {stepNo}:
              <input type="text" value={this.state.title} placeholder="Step Title" onChange={this.update("title")} /> 
            </h2>
            <div className="recipe-step-body">
              <textarea className="textEditor" placeholder="Step Description" onChange={this.update("body")} />
            </div>
          </div>
        )

    }
}

export default CreateStepListItem;