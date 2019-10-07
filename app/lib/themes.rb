module Themes
  def self.themes
    [
      'familie',
      'korper',
      'essen',
      'einkaufen',
      'kleidung',
      'zuhause',
      'draussen',
      'tiere',
      'machen',
      'arbeit',
      'verkehr',
      'wetter',
      'zeit',
      'welt',
      'math'  
    ]
  end

  def self.subthemes
    Subtheme.all.map { |s| ["#{s.name}", "#{s.name}", {:class => "#{s.theme}"}] }
  end

end