require 'pry'
class Translator < ApplicationRecord

  def self.translate_process(info)
    if info[:lang_first] == 'espanol'
      # alphabet
      @latino = %w(a b c d e f g h i j k l m n o p q r s t u v w x y z)
      @cirilico = ['a', 'б', 'к', 'д', 'э', 'ф', 'г', "\s", 'и', 'х', 'к', 'л', 'м', 'н', 'о', 'п', 'к', 'р', 'с', 'т', 'у', 'в', 'у', 'ц', 'ж', 'з']
      # language exceptions
      @exception = ['ñ', 'y ', 'h', 'ch', 'll', 'rr', 'qu', 'ce', 'ci', 'ge', 'gi', 'gu', 'zz']
      @kirilik = ['н', 'и ', ' ', 'ч', 'ж', 'р', 'к', 'сэ', 'си', 'хэ', 'хы', 'г', 'ц']
      # input
      user_input = info[:inphrase].downcase

      # create a rejex for exceptions
      @text = user_input.split(/(ñ|y |h|ch|ll|rr|qu|ce|ci|ge|gi|gu|zz)/)
      # exceptor
      @text.map.with_index do |letter, num|
        @exception.map.with_index do |font, index|
          if letter == "#{font}"
            @text[num] = @kirilik[index]
          end
        end
      end

      @text = @text.join
      # separa las letras de la frase
      @text_in_array = @text.split(%r{\d*})

      # transposer
      @text_in_array.map.with_index do |letter, num|
        @latino.map.with_index do |font, index|
          if letter == "#{font}"
            @text_in_array[num] = @cirilico[index]
          end
        end
      end

      info[:lang_second] = 'cirilic'
      info[:outphrase] = @text_in_array.join
      info
    end
  end

end

#     elsif info[:lang_first] == 'english'
#       info[:inphrase].downcase!
#       # binding.pry
#       info[:inphrase].include? "qu"
#       info[:inphrase].gsub!(/qu/, 'ку')
#       info[:inphrase].include? "ow"
#       info[:inphrase].gsub!(/ow/, 'ау')
#       info[:inphrase].include? "i "
#       info[:inphrase].gsub!(/i /, 'ай ')
#       info[:inphrase].include? "gh"
#       info[:inphrase].gsub!(/gh/, 'г')
#       info[:inphrase].include? "the"
#       info[:inphrase].gsub!(/the/, 'дэ')
#       info[:inphrase].include? "tha"
#       info[:inphrase].gsub!(/tha/, 'да')
#       info[:inphrase].include? "thi"
#       info[:inphrase].gsub!(/thi/, 'ди')
#       info[:inphrase].include? "th"
#       info[:inphrase].gsub!(/th/, 'т')
#       info[:inphrase].include? "thr"
#       info[:inphrase].gsub!(/thr/, 'тр')
#       info[:inphrase].include? "ch"
#       info[:inphrase].gsub!(/ch/, 'ч')
#       info[:inphrase].include? "sh"
#       info[:inphrase].gsub!(/sh/, 'ш')
#       info[:inphrase].include? "ea"
#       info[:inphrase].gsub!(/ea/, 'ы')
#       info[:inphrase].include? "ee"
#       info[:inphrase].gsub!(/ee/, 'и')
#       info[:inphrase].include? "ya"
#       info[:inphrase].gsub!(/ya/, 'я')
#       info[:inphrase].include? "ye"
#       info[:inphrase].gsub!(/ye/, 'е')
#       info[:inphrase].include? "you"
#       info[:inphrase].gsub!(/you/, 'ю')
#       info[:inphrase].include? "ju"
#       info[:inphrase].gsub!(/ju/, 'ю')
#       info[:inphrase].include? "oo"
#       info[:inphrase].gsub!(/oo/, 'у')
#       info[:inphrase].include? "yo"
#       info[:inphrase].gsub!(/yo/, 'ё')
#       info[:inphrase].include? "wh"
#       info[:inphrase].gsub!(/wh/, 'у')
#       # Alphabet
#       info[:inphrase].include? "a"
#       info[:inphrase].gsub!(/a/, 'a')
#       info[:inphrase].include? "b"
#       info[:inphrase].gsub!(/b/, "б")
#       info[:inphrase].include? "c"
#       info[:inphrase].gsub!(/c/, "к")
#       info[:inphrase].include? "d"
#       info[:inphrase].gsub!(/d/, "д")
#       info[:inphrase].include? "e"
#       info[:inphrase].gsub!(/e/, "э")
#       info[:inphrase].include? "f"
#       info[:inphrase].gsub!(/f/, "ф")
#       info[:inphrase].include? "g"
#       info[:inphrase].gsub!(/g/, "г")
#       info[:inphrase].include? "h"
#       info[:inphrase].gsub!(/h/, "х")
#       info[:inphrase].include? "i"
#       info[:inphrase].gsub!(/i/, "и")
#       info[:inphrase].include? "j"
#       info[:inphrase].gsub!(/j/, "х")
#       info[:inphrase].include? "k"
#       info[:inphrase].gsub!(/k/, "к")
#       info[:inphrase].include? "ll"
#       info[:inphrase].gsub!(/ll/, "л")
#       info[:inphrase].include? "l"
#       info[:inphrase].gsub!(/l/, "л")
#       info[:inphrase].include? "m"
#       info[:inphrase].gsub!(/m/, "м")
#       info[:inphrase].include? "n"
#       info[:inphrase].gsub!(/n/, "н")
#       info[:inphrase].include? "o"
#       info[:inphrase].gsub!(/o/, "о")
#       info[:inphrase].include? "p"
#       info[:inphrase].gsub!(/p/, "п")
#       info[:inphrase].include? "q"
#       info[:inphrase].gsub!(/q/, "к")
#       info[:inphrase].include? "r"
#       info[:inphrase].gsub!(/r/, "р")
#       info[:inphrase].include? "s"
#       info[:inphrase].gsub!(/s/, "с")
#       info[:inphrase].include? "t"
#       info[:inphrase].gsub!(/t/, "т")
#       info[:inphrase].include? "u"
#       info[:inphrase].gsub!(/u/, "у")
#       info[:inphrase].include? "v"
#       info[:inphrase].gsub!(/v/, "в")
#       info[:inphrase].include? "w"
#       info[:inphrase].gsub!(/w/, "у")
#       info[:inphrase].include? "x"
#       info[:inphrase].gsub!(/x/, "кс")
#       info[:inphrase].include? "y "
#       info[:inphrase].gsub!(/y /, "и ")
#       info[:inphrase].include? "y"
#       info[:inphrase].gsub!(/y/, "и")
#       info[:inphrase].include? "zz"
#       info[:inphrase].gsub!(/zz/, "ц")
#       info[:inphrase].include? "z"
#       info[:inphrase].gsub!(/z/, "з")
#       info[:inphrase].capitalize!
#     elsif info[:lang_first] == 'deutsch'
#       info[:inphrase].downcase!
#       info[:inphrase].downcase!
#       info[:inphrase].include? "tz"
#       info[:inphrase].gsub!(/tz/, 'ц')
#       info[:inphrase].include? "sch"
#       info[:inphrase].gsub!(/sch/, 'ш')
#       info[:inphrase].include? "ie"
#       info[:inphrase].gsub!(/ie/, "и")
#       info[:inphrase].include? "ei"
#       info[:inphrase].gsub!(/ei/, "ай")
#       info[:inphrase].include? "ha"
#       info[:inphrase].gsub!(/ha/, "ха")
#       info[:inphrase].include? "hei"
#       info[:inphrase].gsub!(/hei/, "хай")
#       info[:inphrase].include? "ch"
#       info[:inphrase].gsub!(/ch/, 'х')
#       info[:inphrase].include? "sh"
#       info[:inphrase].gsub!(/sh/, 'ш')
#       info[:inphrase].include? "ä"
#       info[:inphrase].gsub!(/ä/, 'э')
#       info[:inphrase].include? "ö"
#       info[:inphrase].gsub!(/ö/, 'оь')
#       info[:inphrase].include? "ü"
#       info[:inphrase].gsub!(/ü/, 'уй')
#       info[:inphrase].include? "ß"
#       info[:inphrase].gsub!(/ß/, 'з')
#       info[:inphrase].include? "je"
#       info[:inphrase].gsub!(/je/, 'е')
#       info[:inphrase].include? "ehe"
#       info[:inphrase].gsub!(/ehe/, 'эхэ')
#       #alphabet
#       info[:inphrase].include? "a"
#       info[:inphrase].gsub!(/a/, 'a')
#       info[:inphrase].include? "b"
#       info[:inphrase].gsub!(/b/, "б")
#       info[:inphrase].include? "c"
#       info[:inphrase].gsub!(/c/, "к")
#       info[:inphrase].include? "d"
#       info[:inphrase].gsub!(/d/, "д")
#       info[:inphrase].include? "e"
#       info[:inphrase].gsub!(/e/, "э")
#       info[:inphrase].include? "f"
#       info[:inphrase].gsub!(/f/, "ф")
#       info[:inphrase].include? "g"
#       info[:inphrase].gsub!(/g/, "г")
#       info[:inphrase].include? "h"
#       info[:inphrase].gsub!(/h/, "")
#       info[:inphrase].include? "i"
#       info[:inphrase].gsub!(/i/, "и")
#       info[:inphrase].include? "j"
#       info[:inphrase].gsub!(/j/, "х")
#       info[:inphrase].include? "k"
#       info[:inphrase].gsub!(/k/, "к")
#       info[:inphrase].include? "ll"
#       info[:inphrase].gsub!(/ll/, "л")
#       info[:inphrase].include? "l"
#       info[:inphrase].gsub!(/l/, "л")
#       info[:inphrase].include? "m"
#       info[:inphrase].gsub!(/m/, "м")
#       info[:inphrase].include? "n"
#       info[:inphrase].gsub!(/n/, "н")
#       info[:inphrase].include? "o"
#       info[:inphrase].gsub!(/o/, "о")
#       info[:inphrase].include? "p"
#       info[:inphrase].gsub!(/p/, "п")
#       info[:inphrase].include? "q"
#       info[:inphrase].gsub!(/q/, "к")
#       info[:inphrase].include? "r"
#       info[:inphrase].gsub!(/r/, "р")
#       info[:inphrase].include? "s"
#       info[:inphrase].gsub!(/s/, "с")
#       info[:inphrase].include? "t"
#       info[:inphrase].gsub!(/t/, "т")
#       info[:inphrase].include? "u"
#       info[:inphrase].gsub!(/u/, "у")
#       info[:inphrase].include? "v"
#       info[:inphrase].gsub!(/v/, "ф")
#       info[:inphrase].include? "w"
#       info[:inphrase].gsub!(/w/, "в")
#       info[:inphrase].include? "x"
#       info[:inphrase].gsub!(/x/, "кс")
#       info[:inphrase].include? "y"
#       info[:inphrase].gsub!(/y/, "уй")
#       info[:inphrase].include? "zz"
#       info[:inphrase].gsub!(/zz/, "ц")
#       info[:inphrase].include? "z"
#       info[:inphrase].gsub!(/z/, "ц")
#       info[:inphrase].capitalize!
#     end
#
#   end
#
# end
