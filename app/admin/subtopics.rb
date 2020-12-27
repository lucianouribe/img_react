ActiveAdmin.register Subtopic do
  menu parent: 'iTuto', priority: 3

  action_item :add, only: :show do
    link_to "New SubTopic", new_admin_subtopic_path
  end

  action_item :add, only: :show do
    link_to "All SubTopics", admin_subtopics_path
  end

  permit_params :name, :topic_id, :image

  index do
    selectable_column
    column :id
    column :name
    column :topic
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
      row :topic
      row 'Image', sortable: :image_file_name do |world| 
        image_tag(world.image.url, width: '64') 
      end
      row :created_at
      row :updated_at
    end
  end

  form html: { enctype: 'multipart/form-data' } do |f|
    f.inputs 'Subtopic data' do
      f.input :name
      f.input :topic_id, as: :select, collection: Topic.all.map {|t| [t.name, t.id]}, :include_blank => false
      f.inputs "Upload" do
        f.input :image, required: true, as: :file
      end
    end
    f.actions
  end

end
