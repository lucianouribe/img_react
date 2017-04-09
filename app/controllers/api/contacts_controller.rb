require 'pry'
class Api::ContactsController < ApplicationController
  def index
  end

  def new
  end

  def create
    contact = Contact.create(contact_params)
    ContactMailer.new_contact(contact).deliver
  end

  private
  def contact_params
    params.require(:contact).permit(:name, :email, :message)
  end
end
