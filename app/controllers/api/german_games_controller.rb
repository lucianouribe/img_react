class Api::GermanGamesController < ApplicationController
  def index
    @german_game = current_user.german_game
    @worlds = World.all
    getWorldTheme
  end

  def getWorldTheme
    @themes = []
    World.all.order_by_id.each {|t| @themes << [t.name, t.image.url]}
    return @themes
  end
end
