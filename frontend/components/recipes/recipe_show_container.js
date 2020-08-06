import { requestRecipe, deleteRecipe } from "../../actions/recipe_actions";
import { connect } from "react-redux";
import RecipeShow from "./recipe_show";
import { createComment } from "../../actions/comment_actions";

const mapStateToProps = (state, ownProps) => ({
  recipe: state.entities.recipes[ownProps.match.params.recipeId],
  currentUser: state.entities.users[state.session.id],
});

const mapDispatchToProps = dispatch => ({
  requestRecipe: recipeId => dispatch(requestRecipe(recipeId)),
  deleteRecipe: recipeId => dispatch(deleteRecipe(recipeId)),
  createComment: comment => dispatch(createComment(comment))
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeShow);