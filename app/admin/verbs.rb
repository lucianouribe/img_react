ActiveAdmin.register Verb do
# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
permit_params :verb_type, :theme, :subtheme, :infinitive, :praesens, :praeteritum, :futur_i, :perfekt, :plusquamperfekt, :futur_ii, :ch, :level, :picture, :partizip_perfekt
#
# or
#
# permit_params do
#   permitted = [:permitted, :attributes]
#   permitted << :other if params[:action] == 'create' && current_user.admin?
#   permitted
# end

end
