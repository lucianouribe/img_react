source 'https://rubygems.org'

git_source(:github) do |repo_name|
  repo_name = "#{repo_name}/#{repo_name}" unless repo_name.include?("/")
  "https://github.com/#{repo_name}.git"
end

gem 'rails', '~> 5.1.6', '>= 5.1.6.1'
gem 'pg', '>= 0.18', '< 2.0'
gem 'puma', '~> 3.7'
gem 'coffee-rails', '~> 4.2'
gem 'jquery-rails'
gem 'jbuilder', '~> 2.5'
gem 'repack'
gem 'devise', '~> 4.6.0'
gem 'font-awesome-rails'
gem 'materialize-sass'
# secret stuff
gem 'dotenv'
gem 'dotenv-rails'
gem 'cloudinary', '~> 1.11.1'
# gem 'paperclip'
gem 'paperclip-cloudinary', '~> 1.3.2'
# gem 'attachinary'
gem 'letter_opener'
gem 'ambethia-smtp-tls'
gem "sentry-raven"
# Use Capistrano for deployment
# gem 'capistrano-rails', group: :development
gem 'activeadmin'

group :development, :test do
  gem 'pry'
end

group :development do
  gem 'web-console', '>= 3.3.0'
  gem 'listen', '>= 3.0.5', '< 3.2'
  gem 'spring'
  gem 'spring-watcher-listen', '~> 2.0.0'
  gem 'annotate'
end

group :assets do
  # gem 'therubyracer'
  gem 'mini_racer'
  gem 'sass-rails', '~> 5.0.7'
  gem 'uglifier', '>= 1.3.0'
end
# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem 'tzinfo-data', platforms: [:mingw, :mswin, :x64_mingw, :jruby]
