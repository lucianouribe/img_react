ActiveAdmin.register Verb do
  menu parent: 'Deutsch', priority: 3


  action_item :add, only: :show do
    link_to "New Verb", new_admin_verb_path
  end

  action_item :add, only: :show do
    link_to "All Verbs", admin_verbs_path
  end

  permit_params :verb_type, :theme, :subtheme, :infinitive, :praesens, :praeteritum, :futur_i, :perfekt, :plusquamperfekt, :futur_ii, :ch, :level, :picture, :partizip_perfekt, :spanish, :picture

  index do
    selectable_column
    column :id
    column :infinitive
    column :praesens
    column :praeteritum
    column :partizip_perfekt
    column :perfekt
    column :plusquamperfekt
    column :futur_i
    column :futur_ii
    column :ch
    column :spanish
    column :verb_type
    column :theme
    column :subtheme do |verb|
      if verb.subtheme.to_i > 0
        Themes.variable_name(verb.subtheme.to_i).name
      else
        "#{verb.subtheme} *"
      end
    end
    column :level
    column 'Picture', sortable: :picture_file_name do |word| 
      image_tag(word.picture.url, width: '64') 
    end
    column :picture_file_size, sortable: :picture_file_size do |word|
      "#{word.picture_file_size.to_i / 1024} KB" 
    end
    actions
  end

  show do |verb|
    attributes_table do
      row :infinitive
      row :praesens
      row :praeteritum
      row :partizip_perfekt
      row :perfekt
      row :plusquamperfekt
      row :futur_i
      row :futur_ii
      row :ch
      row :spanish
      row :verb_type
      row :theme
      row 'SUBTHEME' do
        Themes.variable_name(verb.subtheme.to_i).name
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
    f.inputs 'Verb Form' do
      f.input :verb_type,
              as: :select,
              collection: Verbs.verb_type,
              include_blank: false
      f.input :infinitive
      f.input :praesens
      f.input :praeteritum
      f.input :partizip_perfekt
      f.input :perfekt
      f.input :plusquamperfekt
      f.input :futur_i
      f.input :futur_ii
      f.input :ch
      f.input :spanish
      f.input :theme,
              as: :select,
              collection: Themes.worlds,
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

end
