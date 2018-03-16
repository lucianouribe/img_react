namespace :api do
  task change_locale: [:environment] do
    file_path = Rails.root.join('db', 'users-2018-03-09-51.csv')
    CSV.foreach(file_path, headers: true) do |row|
      user = User.find_by id: row[0]
      if user
        user.update_attribute :locale, 'es'
      end
    end
  end
end
