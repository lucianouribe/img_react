module Themes

  def self.theme
    {
      'familie' => 'familie',
      'korper' => 'korper',
      'essen' => 'essen',
      'einkaufen' => 'einkaufen',
      'kleidung' => 'kleidung',
      # 'zuhause' => 'zuhause',
      # 'draussen' => 'draussen',
      # 'tiere' => 'tiere',
      # 'machen' => 'machen',
      # 'arbeit' => 'arbeit',
      # 'verkehr' => 'verkehr',
      # 'wetter' => 'wetter',
      # 'zeit' => 'zeit',
      # 'welt' => 'welt',
      # 'math' => 'math',
    }
  end

  def self.subtheme(option = 'familie')
    prefix = send(option.to_s)
  end

  def self.familie
    {
      'zusammen' => 'zusammen',
      'verwandten' => 'verwandten',
      'mensch' => 'mensch',
      'feiern' => 'feiern',
    }
  end

  def self.korper
    {
      'kann1' => 'kann1',
      'kann2' => 'kann2',
      'sinne' => 'sinne',
      'verschieden' => 'verschieden',
      'fuhlen' => 'fuhlen',
      'kranken' => 'kranken',
      'badezimmer' => 'badezimmer',
    }
  end

  def self.essen
    {
      'fruhstuck' => 'fruhstuck',
      'appetit' => 'appetit',
      'hunger' => 'hunger',
      'werkzeuge' => 'werkzeuge',
      'kochen' => 'kochen',
    }
  end

  def self.einkaufen
    {
      'kaufen' => 'kaufen',
      'wie_viel' => 'wie_viel',
      'kasse' => 'kasse',
    }
  end

  def self.kleidung
    {
      'ziehen' => 'ziehen',
      'kapuze' => 'kapuze',
      'hose' => 'hose',
    }
  end

end