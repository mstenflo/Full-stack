export const fetchSteps = (recipeId) =>
  $.ajax({
    method: "GET",
    url: `/api/recipes/${recipeId}/steps`
  });

export const createStep = (step) =>
  $.ajax({
    method: "POST",
    url: `/api/steps`,
    data: {
      step
    }
  });

export const updateStep = step =>
  $.ajax({
    method: "PATCH",
    url: `/api/steps/${step.id}`,
    data: {
      step
    }
  });

export const destroyStep = step =>
  $.ajax({
    method: "DELETE",
    url: `/api/steps/${step.id}`
  });