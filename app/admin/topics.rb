ActiveAdmin.register Topic do
  menu parent: 'iTuto', priority: 2

  action_item :add, only: :show do
    link_to "New Topic", new_admin_topic_path
  end

  action_item :add, only: :show do
    link_to "All Topics", admin_topics_path
  end

  permit_params :name, :image

  index do
    selectable_column
    column :id
    column :name
    column 'Image', sortable: :image_file_name do |world| 
      image_tag(world.image.url, width: '64') 
    end
    column :image_file_size, sortable: :image_file_size do |world|
      "#{world.image_file_size.to_i / 1024} KB" 
    end
    actions
  end

  show do
    attributes_table do
      row :id
      row :name
      row 'Image', sortable: :image_file_name do |world| 
        image_tag(world.image.url, width: '64') 
      end
      row :created_at
      row :updated_at
    end
  end

  form html: { enctype: 'multipart/form-data' } do |f|
    f.inputs 'Topic data' do
      f.input :name
      f.inputs "Upload" do
        f.input :image, required: true, as: :file
      end
    end
    f.actions
  end

end
