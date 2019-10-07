ActiveAdmin.register Phrase do
  menu parent: 'Deutsch', priority: 4

  permit_params :phrase_type, :theme, :subtheme, :phrase_praesens, :phrase_praeteritum, :phrase_futur_i, :phrase_perfekt, :phrase_plusquamperfekt, :phrase_futur_ii, :phrase_ch, :phrase_verb, :level, :spanish, :example

  index do
    selectable_column
    column :id
    column :phrase_praesens
    column :phrase_praeteritum
    column :phrase_futur_i
    column :phrase_perfekt
    column :phrase_plusquamperfekt
    column :phrase_futur_ii
    column :phrase_ch
    column :example
    column :spanish
    column :phrase_verb
    column :phrase_type
    column :theme
    column :subtheme do |phrase|
      if phrase.subtheme.to_i > 0
        Themes.variable_name(phrase.subtheme.to_i).name
      else
        "#{phrase.subtheme} *"
      end
    end
    column :level
    actions
  end

  show do |phrase|
    attributes_table do
      row :phrase_praesens
      row :phrase_praeteritum
      row :phrase_futur_i
      row :phrase_perfekt
      row :phrase_plusquamperfekt
      row :phrase_futur_ii
      row :phrase_ch
      row :example
      row :spanish
      row :phrase_verb
      row :phrase_type
      row :theme
      row 'SUBTHEME' do
        Themes.variable_name(phrase.subtheme.to_i).name
      end
      row :level
      row :created_at
      row :updated_at
    end
  end


  form html: { enctype: 'multipart/form-data' } do |f|
    f.inputs 'Phrase Form' do
      f.input :phrase_type,
              as: :select,
              collection: Phrases.phrase_type,
              include_blank: false
      f.input :phrase_praesens
      f.input :phrase_praeteritum
      f.input :phrase_futur_i
      f.input :phrase_perfekt
      f.input :phrase_plusquamperfekt
      f.input :phrase_futur_ii
      f.input :phrase_ch
      f.input :example
      f.input :spanish
      f.input :phrase_verb
      f.input :theme,
              as: :select,
              collection: Themes.themes,
              include_blank: false
      f.input :subtheme,
              as: :select,
              collection: Themes.subthemes
      f.input :level, input_html: { default_value: 1 }
    end
    f.actions
  end
end
