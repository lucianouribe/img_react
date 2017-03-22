if Rails.env.development? || Rails.new.test? # it says, only read this in test and development environments
  begin
    mail = "#{Rails.root}/config/mail.yml"
    YAML.load_file(mail). each do |key, value|
      ENV[key] = value
    end
  rescue => e
    puts "ERROR: #{e}"
    raise "No mail.yml config file in cofig directory"
  end
end
