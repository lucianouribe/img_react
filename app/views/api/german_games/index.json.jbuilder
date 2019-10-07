# json.(@api_german_games, :lifes, :punctuation, :punctuation_4_total, :level, :themes)
# json.extract! @api_german_game, :lifes, :punctuation, :punctuation_4_total, :level, :themes
# json.url api_german_game_url(@api_german_game, format: :json)
require 'pry'

# binding.pry
# json.german_game @german_game, :lifes, :punctuation, :punctuation_4_total, :level, :themes
json.world_themes @themes


# json.array! @german_game do |game|
#   json.id game.id
#   json.lifes game.lifes
#   json.punctuation game.punctuation
#   json.punctuation_4_total game.punctuation_4_total
#   json.level game.level
#   json.themes game.themes
#   json.themes_i @themes
# end

# json.array! @german_game do |game|
  json.(@german_game, :id, :lifes, :punctuation, :punctuation_4_total, :level, :themes)
  # json.url api_german_game_url(german_game, format: :json)
# end

