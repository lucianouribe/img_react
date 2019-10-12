module Themes
  def self.themes
    [
      'familie',
      'körper',
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

  def self.variable_name(variable)
    Subtheme.find_by id: "#{variable}"
  end

  def self.subthemes
    Subtheme.all.map { |s| ["#{s.name}", "#{s.id}", {:class => "#{s.theme}"}] }
  end
  
end