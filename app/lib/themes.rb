module Themes

  def self.theme
    {
      'familie' => 'familie',
      'korper' => 'korper',
      'essen' => 'essen',
      'einkaufen' => 'einkaufen',
      'kleidung' => 'kleidung',
      'zuhause' => 'zuhause',
      'draussen' => 'draussen',
      'tiere' => 'tiere',
      'machen' => 'machen',
      'arbeit' => 'arbeit',
      'verkehr' => 'verkehr',
      'wetter' => 'wetter',
      'zeit' => 'zeit',
      'welt' => 'welt',
      'math' => 'math',
    }
  end

  def self.full_subtheme
    subtheme.merge(korper)
            .merge(essen)
            .merge(einkaufen)
            .merge(kleidung)
            .merge(zuhause)
            .merge(draussen)
            .merge(tiere)
            .merge(machen)
            .merge(arbeit)
            .merge(verkehr)
            .merge(wetter)
            .merge(zeit)
            .merge(welt)
            .merge(math)
  end

  def self.subtheme(option = 'familie')
    prefix = send(option.to_s)
  end

  def self.familie
    {
      '-- FAMILIE --' => '',
      'zusammen' => 'zusammen',
      'verwandten' => 'verwandten',
      'mensch' => 'mensch',
      'feiern' => 'feiern',
    }
  end

  def self.korper
    {
      '-- KÖRPER --' => '',
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
      '-- ESSEN & TRINKEN --' => '',
      'fruhstuck' => 'fruhstuck',
      'appetit' => 'appetit',
      'hunger' => 'hunger',
      'werkzeuge' => 'werkzeuge',
      'kochen' => 'kochen',
    }
  end

  def self.einkaufen
    {
      '-- EINKAUFEN --' => '',
      'kaufen' => 'kaufen',
      'wie_viel' => 'wie_viel',
      'kasse' => 'kasse',
    }
  end

  def self.kleidung
    {
      '-- KLEIDUNG --' => '',
      'ziehen' => 'ziehen',
      'kapuze' => 'kapuze',
      'hose' => 'hose',
    }
  end

  def self.zuhause
    {
      '-- ZUHAUSE --' => '',
      'zimmer' => 'zimmer',
      'haus' => 'haus',
      'kueche' => 'kueche',
      'wohnzimmer' => 'wohnzimmer',
      'gebaut' => 'gebaut',
    }
  end

  def self.draussen
    {
      '-- DRAUSSEN --' => '',
      'spielplatz' => 'spielplatz',
      'stadt' => 'stadt',
      'garten' => 'garten',
      'park' => 'park',
      'wald' => 'wald',
      'bauernhof' => 'bauernhof',
      'wasser' => 'wasser',
      'bergen' => 'bergen',
    }
  end

  def self.tiere
    {
      '-- TIERE --' => '',
      'haustiere' => 'haustiere',
      'waldtiere' => 'waldtiere',
      'bauerhoftiere' => 'bauerhoftiere',
      'fische' => 'fische',
      'vogel' => 'vogel',
      'zootiere' => 'zootiere',
    }
  end

  def self.machen
    {
      '-- MACHE --' => '',
      'spielen' => 'spielen',
      'malen' => 'malen',
      'sport' => 'sport',
      'bucher' => 'bucher',
      'urlaub' => 'urlaub',
      'ausflug' => 'ausflug',
      'museum' => 'museum',
      'experiment' => 'experiment',
      'marchen' => 'marchen',
    }
  end

  def self.arbeit
    {
      '-- ARBEIT --' => '',
      'schule' => 'schule',
      'polizei' => 'polizei',
      'feuerwehr' => 'feuerwehr',
      'krankenhaus' => 'krankenhaus',
      'fabrik' => 'fabrik',
      'buro' => 'buro',
      'rathaus' => 'rathaus',
    }
  end

  def self.verkehr
    {
      '-- VERKEHR --' => '',
      'fuss' => 'fuss',
      'strasse' => 'strasse',
      'auto' => 'auto',
      'schiene' => 'schiene',
      'schiffe' => 'schiffe',
      'flugzeuge' => 'flugzeuge',
      'lasten' => 'lasten',
    }
  end

  def self.wetter
    {
      '-- WETTER --' => '',
      'wetter' => 'wetter',
      'wetterbericht' => 'wetterbericht',
    }
  end

  def self.zeit
    {
      '-- ZEIT --' => '',
      'zeit' => 'zeit',
      'jahreszeiten' => 'jahreszeiten',
      'geburtstag' => 'geburtstag',
    }
  end

  def self.welt
    {
      '-- WELT --' => '',
      'ausland' => 'ausland',
      'erde' => 'erde',
      'worterbuch' => 'worterbuch',
    }
  end

  def self.math
    {
      '-- MATH --' => '',
      'nummer' => 'nummer',
    }
  end

end