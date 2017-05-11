require 'pry'
class Morse < ApplicationRecord

  def self.start_process(info)
    info
    choose_alphabet(info)
  end

  def self.choose_alphabet(entry)
    # binding.pry
    # alphabet
    if entry[:lang_first] == 'roman' && entry[:lang_second] == 'morse'
      @alphabet_one = [' ', 'a' ,'b' ,'c' ,'d' ,'e' ,'f' ,'g' ,'h' ,'i' ,'j' ,'k' ,'l' ,'m' ,'n' ,'o' ,'p' ,'q' ,'r' ,'s' ,'t' ,'u' ,'v' ,'w' ,'x' ,'y' ,'z']
      @alphabet_two = ['   ','.- ', '-... ', '-.-. ', '-.. ', '. ', '..-. ', '--. ', '.... ', '.. ', '.--- ', '-.- ', '.-.. ', '-- ', '-. ', '--- ', '.--. ', '--.- ', '.-. ', '... ', '- ', '..- ', '...- ', '.-- ', '-..- ', '-.-- ', '--.. ']
    elsif entry[:lang_first] == 'cirilico' && entry[:lang_second] == 'morse'
      # binding.pry
      @alphabet_one = [' ', 'а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я']
      @alphabet_two = ['   ', '.- ', '-... ', '.-- ', '--. ', '-.. ', '. ', '. ', "...- ", '--.. ', '.. ', '.--- ', '-.- ', '.-.. ', '-- ', '-. ', '--- ', '.--. ', '.-. ', '... ', '- ', '..- ', '..-. ', '.... ', '-.-. ', '---. ', '---- ', '--.- ', '-..- ', '-.-- ', '-..- ', '..-.. ', '..-- ', '.-.- ']
    elsif entry[:lang_first] == 'morse' && entry[:lang_second] == 'roman'
    elsif entry[:lang_first] == 'morse' && entry[:lang_second] == 'cirilico'
      # binding.pry
      @alphabet_one = ['   ', ' ', '-...', '...-', '--..', '.---', '.-..', '.--.', '..-.', '....', '-.-.', '---.', '----', '--.-', '-..-', '-.--', '-..-', '..-..', '..--', '.-.-']
      @alphabet_two = [' ', '', 'б', 'ж', 'з', 'й', 'л', 'п', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я']
    end

    transliterate(entry)
  end

  def self.transliterate(info)
    # binding.pry
    if info[:lang_second] == 'morse'
      @text = info[:inphrase]
      @text_in_array = @text.split(%r{\d*})
    else
      @text = info[:inphrase]
      @text_in_array = @text.split(/(.-|-...|.--|--.|-..|.|.|...-|--..|..|.---|-.-|.-..|--|-.|---|.--.|.-.|...|-|..-|..-.|....|-.-.|---.|----|--.-|-..-|-.--|-..-|..-..|..--|.-.-)/)
    end
    # binding.pry
    # transposer
    @text_in_array.map.with_index do |letter, num|
      @alphabet_one.map.with_index do |font, index|
        if letter == "#{font}"
          @text_in_array[num] = @alphabet_two[index]
        end
      end
    end

    info[:outphrase] = @text_in_array.join
    # binding.pry
    info

  end

end
# @alpha_one = [' ', '','а', 'б', 'в', 'г', 'д', 'е', 'ё', 'ж', 'з', 'и', 'й', 'к', 'л', 'м', 'н', 'о', 'п', 'р', 'с', 'т', 'у', 'ф', 'х', 'ц', 'ч', 'ш', 'щ', 'ъ', 'ы', 'ь', 'э', 'ю', 'я']
# @alpha_two = ['   ', ' ', '.-', '-...', '.--', '--.', '-..', '.', '.', '...-', '--..', '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.', '.-.', '...', '-', '..-', '..-.', '....', '-.-.', '---.', '----', '--.-', '-..-', '-.--', '-..-', '..-..', '..--', '.-.-']
