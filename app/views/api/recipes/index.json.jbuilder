@recipes.each do |recipe|
    json.set! recipe.id do
        json.extract! recipe, :id, :title, :category, :body, :author_id

        json.author do
            json.extract! recipe.author, :username
        end

        @steps.each do |step|
            json.steps do
                json.extract! step, :id, :title, :body, :recipe_id
            end
        end
        # json.@steps do
        #     json.extract! recipe.steps, :body
        # end
      #  json.photo_url url_for(recipe.photo)
    end
end