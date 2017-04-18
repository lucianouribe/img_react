require 'pry'
class ContactMailer < ApplicationMailer
  default from: ENV['MAIL_FROM']

  def new_contact(contact)
    @contact = contact
    mail(to: 'lucianouribe@gmail.com', subject: @contact.name )
  end

end
