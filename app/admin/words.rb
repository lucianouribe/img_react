ActiveAdmin.register Word do
  menu parent: 'Deutsch', priority: 2

  action_item :add, only: :show do
    link_to "New Word", new_admin_word_path
  end

  action_item :add, only: :show do
    link_to "All Words", admin_words_path
  end
  

  permit_params :word_type, :theme, :subtheme, :noun, :article, :plural, :ch, :level, :spanish, :picture

  index do
    selectable_column
    column :id
    column :article
    column :noun
    column :plural
    column :ch
    column :spanish
    column :word_type
    column :theme
    column :subtheme do |word|
      if word.subtheme.to_i > 0
        Themes.variable_name(word.subtheme.to_i).name
      else
        "#{word.subtheme} *"
      end
    end
    column :level
    column 'Picture', sortable: :picture_file_name do |word| 
      image_tag(word.picture.url, width: '64') 
    end
    column :picture_file_size, sortable: :picture_file_size do |word| "#{word.picture_file_size.to_i / 1024} KB" end
    actions
  end

  show do |word|
    attributes_table do
      row :article
      row :noun
      row :plural
      row :ch
      row :spanish
      row :word_type
      row :theme
      row 'SUBTHEME' do
        Themes.variable_name(word.subtheme.to_i).name
      end
      row :level
      row 'Picture', sortable: :picture_file_name do |word| 
        image_tag(word.picture.url, width: '64') 
      end
      row :created_at
      row :updated_at
    end
  end

  form html: { enctype: 'multipart/form-data' } do |f|
    f.inputs 'Words Form' do
      f.input :article,
              as: :select,
              collection: ['der', 'die', 'das'],
              include_blank: false
      f.input :noun
      f.input :plural
      f.input :ch
      f.input :spanish
      f.input :word_type,
              as: :select,
              collection: ['noun'],
              include_blank: false
      f.input :theme,
              as: :select,
              collection: Themes.themes,
              include_blank: false
      f.input :subtheme,
              as: :select,
              collection: Themes.subthemes
      f.input :level, input_html: { default_value: 1 }
      f.inputs "Upload" do
        f.input :picture, required: true, as: :file
      end
    end
    f.actions
  end

  controller do
    def create
      create! do |format|
        format.html { redirect_to new_admin_word_path(resource, add_more: true) }
      end
    end
  end

end
