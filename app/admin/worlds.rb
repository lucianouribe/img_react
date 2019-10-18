ActiveAdmin.register World do
  menu parent: 'Deutsch', priority: 1


  action_item :add, only: :show do
    link_to "New World", new_admin_world_path
  end

  action_item :add, only: :show do
    link_to "All Worlds", admin_worlds_path
  end

  permit_params :name, :level, :points, :status, :image

  index do
    selectable_column
    column :id
    column :name
    column :level
    column :points
    column :status
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
      row :level
      row :points
      row :status
      row 'Image', sortable: :image_file_name do |world| 
        image_tag(world.image.url, width: '64') 
      end
      row :created_at
      row :updated_at
    end
  end

  form html: { enctype: 'multipart/form-data' } do |f|
    f.inputs 'Subthemes folder' do
      f.input :name
      f.input :level, input_html: {default_value: 1}
      f.input :points, input_html: {default_value: 0}
      f.input :status,
              as: :select,
              collection: ['open', 'closed', 'won', 'lost'],
              include_blank: false
      f.inputs "Upload" do
        f.input :image, required: true, as: :file
      end
    end
    f.actions
  end

end