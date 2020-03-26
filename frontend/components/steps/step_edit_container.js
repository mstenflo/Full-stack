import { connect } from "react-redux";
import StepEdit from './step_edit';
import { requestStep, updateStep } from '../../actions/step_actions';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.entities.users[state.session.id],
  recipe: state.entities.recipes[ownProps.match.params.recipeId],
  steps: state.entities.steps
})

const mapDispatchToProps = dispatch => ({
  requestStep: (stepId) => dispatch(requestStep(stepId)),
  updateStep: (stepId) => dispatch(updateStep(stepId)),
  destroyStep: (stepId) => dispatch(destroyStep(stepId))
});

export default connect(mapStateToProps, mapDispatchToProps)(StepEdit);