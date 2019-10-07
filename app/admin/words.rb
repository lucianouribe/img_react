ActiveAdmin.register Word do
  menu parent: 'Deutsch', priority: 2

  permit_params :word_type, :theme, :subtheme, :noun, :article, :plural, :ch, :level, :spanish

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
    column :subtheme
    column :level
    actions
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
      f.input :level, input_html: { value: 1 }
    end
    f.actions
  end

end
