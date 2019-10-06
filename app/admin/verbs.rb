ActiveAdmin.register Verb do
  menu parent: 'Deutsch', priority: 2

  permit_params :verb_type, :theme, :subtheme, :infinitive, :praesens, :praeteritum, :futur_i, :perfekt, :plusquamperfekt, :futur_ii, :ch, :level, :picture, :partizip_perfekt, :spanish

  index do
    selectable_column
    column :id
    column :infinitive
    column :praesens
    column :praeteritum
    column :futur_i
    column :partizip_perfekt
    column :perfekt
    column :plusquamperfekt
    column :futur_ii
    column :ch
    column :spanish
    column :verb_type
    column :theme
    column :subtheme
    column :level
    actions
  end


  form html: { enctype: 'multipart/form-data' } do |f|
    f.inputs 'Add a Verb' do
      f.input :verb_type,
              as: :select,
              collection: Verbs.verb_type,
              include_blank: false
      f.input :infinitive
      f.input :praesens
      f.input :praeteritum
      f.input :futur_i
      f.input :partizip_perfekt
      f.input :perfekt
      f.input :plusquamperfekt
      f.input :futur_ii
      f.input :ch
      f.input :spanish
      f.input :theme,
              as: :select,
              collection: Themes.theme,
              include_blank: false
      f.input :subtheme,
              as: :select,
              collection: Themes.full_subtheme,
              include_blank: false
      f.input :level
    end
    f.actions
  end

end
