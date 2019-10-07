ActiveAdmin.register Subtheme do
  menu parent: 'Deutsch', priority: 1

  permit_params :name, :theme, :hearts, :points, :status, :level, :german_game_id

  index do
    selectable_column
    column :id
    column :name
    column :theme
    column :hearts
    column :points
    column :status
    column :level
    column :german_game_id
    actions
  end

  form html: { enctype: 'multipart/form-data' } do |f|
    f.inputs 'Add a Word' do
      f.input :name
      f.input :theme,
              as: :select,
              collection: Themes.theme,
              include_blank: false
      f.input :hearts, input_html: {value: 3}
      f.input :points, input_html: {value: 0}
      f.input :status,
              as: :select,
              collection: ['open', 'closed', 'won', 'lost'],
              include_blank: false
      f.input :level, input_html: {value: 1}
      f.input :german_game_id,
              as: :select,
              collection: GermanGame.all.map {|game| "#{game.id}"},
              include_blank: false
    end
    f.actions
  end

end
