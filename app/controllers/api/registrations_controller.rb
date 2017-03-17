class Api::RegistrationsController < Devise::RegistrationsController
  skip_before_action :verify_authenticity_token
  before_action :authenticate_user!
  protect_from_forgery with: :exception
  clear_respond_to
  respond_to :json

  private

  def sign_up_params
    params.require(:user).permit(
      :first_name, :last_name, :role,
      :email, :verify_email, :password, :password_confirmation
    )
  end

  def account_update_params
    params.require(:user).permit(
      :first_name, :last_name, :role,
      :email, :verify_email, :password, :password_confirmation, :current_password
    )
  end

  def update_resource(resource, params)
    resource.update_without_password(params)
  end

end
