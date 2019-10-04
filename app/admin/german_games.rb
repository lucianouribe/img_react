ActiveAdmin.register GermanGame do
  menu parent: 'Deutsch', label: 'Player', priority: 0
# See permitted parameters documentation:
# https://github.com/activeadmin/activeadmin/blob/master/docs/2-resource-customization.md#setting-up-strong-parameters
#
permit_params :lifes, :punctuation, :punctuation_4_total, :level, :user_id, :themes
#
# or
#
# permit_params do
#   permitted = [:permitted, :attributes]
#   permitted << :other if params[:action] == 'create' && current_user.admin?
#   permitted
# end

end
