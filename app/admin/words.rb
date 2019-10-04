ActiveAdmin.register Word do
  menu parent: 'Deutsch', priority: 1

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
    f.inputs 'Add a Word' do
      f.input :article,
              as: :select,
              collection: ['der', 'die', 'das'],
              include_blank: false
      f.input :noun
      f.input :plural
      f.input :ch
      f.input :spanish
      f.input :word_type
      f.input :theme,
              as: :select,
              collection: Themes.theme,
              include_blank: false
      Themes.theme.map do |x,y|
        f.input :subtheme,
                as: :select,
                collection: Themes.subtheme(y),
                include_blank: false,
                input_html: { class: "#{y} word_subtheme" }
      end
      f.input :level
    end
    f.actions
  end

end
