ActionMailer::Base.smtp_settings = {
    :address => "smtp.gmail.com",
    :port => 587,
    :domain => "gmail.com",
    # :user_name => ENV['GMAIL_USERNAME'],
    :user_name => 'lucianouribe@gmail.com',
    # :password => ENV['GMAIL_PASSWORD'],
    :password => 'suramericabws',
    :authentication => "plain",
    :enable_starttls_auto => true,
    openssl_verify_mode: 'none'
}
