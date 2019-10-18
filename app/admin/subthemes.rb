ActiveAdmin.register Subtheme do
  menu parent: 'Deutsch', priority: 1


  action_item :add, only: :show do
    link_to "New Subtheme", new_admin_subtheme_path
  end

  action_item :add, only: :show do
    link_to "All Subthemes", admin_subthemes_path
  end

  permit_params :name, :theme, :hearts, :points, :status, :level, :german_game_id, :image

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
    column 'Image', sortable: :image_file_name do |subtheme| 
      image_tag(subtheme.image.url, width: '64') 
    end
    column :image_file_size, sortable: :image_file_size do |subtheme|
      "#{subtheme.image_file_size.to_i / 1024} KB" 
    end
    actions
  end

  show do
    attributes_table do
      row :id
      row :name
      row :theme
      row :hearts
      row :points
      row :status
      row :level
      row :german_game_id
      row 'Image', sortable: :image_file_name do |subtheme| 
        image_tag(subtheme.image.url, width: '64') 
      end
      row :created_at
      row :updated_at
    end
  end

  form html: { enctype: 'multipart/form-data' } do |f|
    f.inputs 'Subthemes folder' do
      f.input :name
      f.input :theme,
              as: :select,
              # collection: Themes.themes,
              collection: Themes.worlds,
              include_blank: false
      f.input :hearts, input_html: {default_value: 3}
      f.input :points, input_html: {default_value: 0}
      f.input :status,
              as: :select,
              collection: ['open', 'closed', 'won', 'lost'],
              include_blank: false
      f.input :level, input_html: {default_value: 1}
      f.input :german_game_id,
              as: :select,
              collection: GermanGame.all.map {|game| "#{game.id}"},
              include_blank: false
      f.inputs "Upload" do
        f.input :image, required: true, as: :file
      end
    end
    f.actions
  end

end
