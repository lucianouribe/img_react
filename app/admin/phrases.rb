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
    column :subtheme
    column :level
    actions
  end


  form html: { enctype: 'multipart/form-data' } do |f|
    f.inputs 'Add a Verb' do
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
              collection: Themes.theme,
              include_blank: false
      f.input :subtheme,
              as: :select,
              collection: Themes.full_subtheme,
              include_blank: false
      # Themes.theme.map do |x,y|
      #   f.input :subtheme,
      #           as: :select,
      #           collection: Themes.subtheme(y),
      #           include_blank: false,
      #           input_html: { class: "#{y} phrase_subtheme" }
      # end
      f.input :level
    end
    f.actions
  end
end
