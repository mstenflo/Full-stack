# iCook

[Live App](https://icookapp.herokuapp.com/#/)

![alt text](https://github.com/mstenflo/icook/blob/master/app/assets/images/README/ScreenShot.png "iCook Logo")

iCook is a recipe database and resource for people who like cooking great meals. It allows members to post their own recipes, view other member recipes and comment on them. No membership is required to view the recipes in the database, login is only necessary to post, edit, or delete recipes or comments. The site was built using Rails in the backend and React/Redux in the frontend.

# Features

* User authentication and encrypted login using BCrypt

Frontend error handling was implemented to catch any errors before sending info to the database. Errors are caught and added to the state, displayed and cleared for proper registration and login.

<img src="https://github.com/mstenflo/icook/blob/master/app/assets/images/README/LoginForm.png" width="500">

* Members can browse database of recipes and steps associated with the recipe
* Media stored and retrieved through AWS S3 services
* Using Rails backend
* React for the frontend using Redux to manage the store and local state
* Members can post new recipes

Creating a new recipe sends an ajax promise to the backend and redirects to the recipe edit page

```
export const createRecipe = recipe => (
  $.ajax({
    method: "POST",
    url: "/api/recipes",
    data: {
      recipe
    }
  })
```

<img src="https://github.com/mstenflo/icook/blob/master/app/assets/images/README/PublishRecipe.png" width="500">

* Members can edit recipes they posted

Registered users can add ingredients which dynamically get added and displayed on the edit page. Adding ingredients only updates the local state and renders the new ingredients on the DOM and does not add them to the database until the user submits the changes, allowing the user to cancel the changes if they do not want to accept their changes. The new ingredient is added to a new variable with the existing ingredients using the spread operator. The new ingredient that has been added then gets cleared to an empty string.

```
handleIngredient(e) {
    e.preventDefault();

    const updatedIngredients = [...this.state.ingredients, this.state.ingredient]
    this.setState({
      ingredients: updatedIngredients,
      ingredient: ''
    })
  }
  ```

<img src="https://github.com/mstenflo/icook/blob/master/app/assets/images/README/EditRecipe.png" width="500">
<img src="https://github.com/mstenflo/icook/blob/master/app/assets/images/README/EditTitleAndIngredients.png" width="500">

* Members can attach a photo to their recipe

Only ask to upload an image if no image has been added yet.

```
  {
      !this.state.photourl &&
      <label className="upload-image" htmlFor="newImage">upload an image:</label>
  }
```

If there is an image, display the thumbnail.

```
  {
      this.state.photourl && 
        <div className="thumbnail">
          <img src={this.state.photourl} />
        </div>
    }
```

<img src="https://github.com/mstenflo/icook/blob/master/app/assets/images/README/AddPhoto.png" width="500">

* Members can post comments on recipes

Used the json package "moment" to handle time in javascript. Has the ```.fromNow()``` command that displays how long ago the post was created, using the ```created_at``` timestamp from the comment model.

```
{
  moment(comment.created_at).startOf('minute').fromNow()
}
```

A different message is displayed, based on the number of comments that exist. If there are no comments yet, "Be the first to comment" is displayed, if there is a single comment, "discussion" is singular, otherwise "discussions" is used to display the number of existing discussions. 

```
let discussion = "Discussion"
    if ( comments.length > 1 ) discussion = "Discussions"
    
    if (!comments || comments.length === 0) {
      return (
        <div className="discussion">
          <h2>
            Be the first to leave a comment!
          </h2>
          ...
  ```
  
  Comments are displayed within its own presentational component. Comments are mapped through the array of existing comments, but only if there are comments present.
  
  ```
  commentList = comments && comments.map(comment => (
      <Comment key={comment.id} comment={comment} />
    ))
```

<img src="https://github.com/mstenflo/icook/blob/master/app/assets/images/README/CommentForm.png" width="500">

# Upcoming Features

* Database is searchable
* Recipes are displayed by categories
* Members have their own show pages with personal info and a list of recipes they posted
