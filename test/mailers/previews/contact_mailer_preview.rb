class ContactMailerPreview < ActionMailer::Preview
  def new_contact_preview
    contact = Contact.last || Contact.create(name: 'Steve Jobs', email: 'steve@jobs.com', message: 'hello you')
    ContactMailer.new_contact(contact)
  end
end
