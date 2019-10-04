ActiveAdmin.register Phrase do
  menu parent: 'Deutsch', priority: 4
# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
permit_params :phrase_type, :theme, :subtheme, :phrase_praesens, :phrase_praeteritum, :phrase_futur_i, :phrase_perfekt, :phrase_plusquamperfekt, :phrase_futur_ii, :phrase_ch, :phrase_verb, :level
#
# or
#
# permit_params do
#   permitted = [:permitted, :attributes]
#   permitted << :other if params[:action] == 'create' && current_user.admin?
#   permitted
# end

end
