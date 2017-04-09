require 'pry'
class Api::TranslatorsController < ApplicationController

  def translate
    @translator = Translator.new(api_translator_params)
    # binding.pry
    if @translator[:lang_first] == 'espanol'
      @translator[:inphrase].downcase!
      # binding.pry
      @translator[:inphrase].include? "ñ"
      @translator[:inphrase].gsub!(/ñ/, "н")
      @translator[:inphrase].include? "ch"
      @translator[:inphrase].gsub!(/ch/, 'ч')
      @translator[:inphrase].include? "ll"
      @translator[:inphrase].gsub!(/ll/, 'ж')
      @translator[:inphrase].include? "rr"
      @translator[:inphrase].gsub!(/rr/, 'р')
      @translator[:inphrase].include? "qu"
      @translator[:inphrase].gsub!(/qu/, 'к')
      @translator[:inphrase].include? "a"
      @translator[:inphrase].gsub!(/a/, 'a')
      @translator[:inphrase].include? "b"
      @translator[:inphrase].gsub!(/b/, "б")
      @translator[:inphrase].include? "ce"
      @translator[:inphrase].gsub!(/ce/, "се")
      @translator[:inphrase].include? "ci"
      @translator[:inphrase].gsub!(/ci/, "си")
      @translator[:inphrase].include? "c"
      @translator[:inphrase].gsub!(/c/, "к")
      @translator[:inphrase].include? "d"
      @translator[:inphrase].gsub!(/d/, "д")
      @translator[:inphrase].include? "e"
      @translator[:inphrase].gsub!(/e/, "е")
      @translator[:inphrase].include? "f"
      @translator[:inphrase].gsub!(/f/, "ф")
      @translator[:inphrase].include? "ge"
      @translator[:inphrase].gsub!(/ge/, "хе")
      @translator[:inphrase].include? "gi"
      @translator[:inphrase].gsub!(/gi/, "хы")
      @translator[:inphrase].include? "gu"
      @translator[:inphrase].gsub!(/gu/, "г")
      @translator[:inphrase].include? "g"
      @translator[:inphrase].gsub!(/g/, "г")
      @translator[:inphrase].include? "h"
      @translator[:inphrase].gsub!(/h/, "")
      @translator[:inphrase].include? "i"
      @translator[:inphrase].gsub!(/i/, "и")
      @translator[:inphrase].include? "j"
      @translator[:inphrase].gsub!(/j/, "х")
      @translator[:inphrase].include? "k"
      @translator[:inphrase].gsub!(/k/, "к")
      @translator[:inphrase].include? "l"
      @translator[:inphrase].gsub!(/l/, "л")
      @translator[:inphrase].include? "m"
      @translator[:inphrase].gsub!(/m/, "м")
      @translator[:inphrase].include? "n"
      @translator[:inphrase].gsub!(/n/, "н")
      @translator[:inphrase].include? "o"
      @translator[:inphrase].gsub!(/o/, "о")
      @translator[:inphrase].include? "p"
      @translator[:inphrase].gsub!(/p/, "п")
      @translator[:inphrase].include? "q"
      @translator[:inphrase].gsub!(/q/, "к")
      @translator[:inphrase].include? "r"
      @translator[:inphrase].gsub!(/r/, "р")
      @translator[:inphrase].include? "s"
      @translator[:inphrase].gsub!(/s/, "с")
      @translator[:inphrase].include? "t"
      @translator[:inphrase].gsub!(/t/, "т")
      @translator[:inphrase].include? "u"
      @translator[:inphrase].gsub!(/u/, "у")
      @translator[:inphrase].include? "v"
      @translator[:inphrase].gsub!(/v/, "в")
      @translator[:inphrase].include? "w"
      @translator[:inphrase].gsub!(/w/, "у")
      @translator[:inphrase].include? "x"
      @translator[:inphrase].gsub!(/x/, "ц")
      @translator[:inphrase].include? "y "
      @translator[:inphrase].gsub!(/y /, "и ")
      @translator[:inphrase].include? "y"
      @translator[:inphrase].gsub!(/y/, "ж")
      @translator[:inphrase].include? "zz"
      @translator[:inphrase].gsub!(/zz/, "ц")
      @translator[:inphrase].include? "z"
      @translator[:inphrase].gsub!(/z/, "з")
      @translator[:inphrase].capitalize!
    elsif @translator[:lang_first] == 'english'
      @translator[:inphrase].downcase!
      # binding.pry
      @translator[:inphrase].include? "qu"
      @translator[:inphrase].gsub!(/qu/, 'ку')
      @translator[:inphrase].include? "ow"
      @translator[:inphrase].gsub!(/ow/, 'ау')
      @translator[:inphrase].include? "i "
      @translator[:inphrase].gsub!(/i /, 'ай ')
      @translator[:inphrase].include? "gh"
      @translator[:inphrase].gsub!(/gh/, 'г')
      @translator[:inphrase].include? "the"
      @translator[:inphrase].gsub!(/the/, 'дэ')
      @translator[:inphrase].include? "tha"
      @translator[:inphrase].gsub!(/tha/, 'да')
      @translator[:inphrase].include? "thi"
      @translator[:inphrase].gsub!(/thi/, 'ди')
      @translator[:inphrase].include? "th"
      @translator[:inphrase].gsub!(/th/, 'т')
      @translator[:inphrase].include? "thr"
      @translator[:inphrase].gsub!(/thr/, 'тр')
      @translator[:inphrase].include? "ch"
      @translator[:inphrase].gsub!(/ch/, 'ч')
      @translator[:inphrase].include? "sh"
      @translator[:inphrase].gsub!(/sh/, 'ш')
      @translator[:inphrase].include? "ea"
      @translator[:inphrase].gsub!(/ea/, 'ы')
      @translator[:inphrase].include? "ee"
      @translator[:inphrase].gsub!(/ee/, 'и')
      @translator[:inphrase].include? "ya"
      @translator[:inphrase].gsub!(/ya/, 'я')
      @translator[:inphrase].include? "ye"
      @translator[:inphrase].gsub!(/ye/, 'е')
      @translator[:inphrase].include? "you"
      @translator[:inphrase].gsub!(/you/, 'ю')
      @translator[:inphrase].include? "ju"
      @translator[:inphrase].gsub!(/ju/, 'ю')
      @translator[:inphrase].include? "oo"
      @translator[:inphrase].gsub!(/oo/, 'у')
      @translator[:inphrase].include? "yo"
      @translator[:inphrase].gsub!(/yo/, 'ё')
      @translator[:inphrase].include? "wh"
      @translator[:inphrase].gsub!(/wh/, 'у')
      # Alphabet
      @translator[:inphrase].include? "a"
      @translator[:inphrase].gsub!(/a/, 'a')
      @translator[:inphrase].include? "b"
      @translator[:inphrase].gsub!(/b/, "б")
      @translator[:inphrase].include? "c"
      @translator[:inphrase].gsub!(/c/, "к")
      @translator[:inphrase].include? "d"
      @translator[:inphrase].gsub!(/d/, "д")
      @translator[:inphrase].include? "e"
      @translator[:inphrase].gsub!(/e/, "э")
      @translator[:inphrase].include? "f"
      @translator[:inphrase].gsub!(/f/, "ф")
      @translator[:inphrase].include? "g"
      @translator[:inphrase].gsub!(/g/, "г")
      @translator[:inphrase].include? "h"
      @translator[:inphrase].gsub!(/h/, "х")
      @translator[:inphrase].include? "i"
      @translator[:inphrase].gsub!(/i/, "и")
      @translator[:inphrase].include? "j"
      @translator[:inphrase].gsub!(/j/, "х")
      @translator[:inphrase].include? "k"
      @translator[:inphrase].gsub!(/k/, "к")
      @translator[:inphrase].include? "ll"
      @translator[:inphrase].gsub!(/ll/, "л")
      @translator[:inphrase].include? "l"
      @translator[:inphrase].gsub!(/l/, "л")
      @translator[:inphrase].include? "m"
      @translator[:inphrase].gsub!(/m/, "м")
      @translator[:inphrase].include? "n"
      @translator[:inphrase].gsub!(/n/, "н")
      @translator[:inphrase].include? "o"
      @translator[:inphrase].gsub!(/o/, "о")
      @translator[:inphrase].include? "p"
      @translator[:inphrase].gsub!(/p/, "п")
      @translator[:inphrase].include? "q"
      @translator[:inphrase].gsub!(/q/, "к")
      @translator[:inphrase].include? "r"
      @translator[:inphrase].gsub!(/r/, "р")
      @translator[:inphrase].include? "s"
      @translator[:inphrase].gsub!(/s/, "с")
      @translator[:inphrase].include? "t"
      @translator[:inphrase].gsub!(/t/, "т")
      @translator[:inphrase].include? "u"
      @translator[:inphrase].gsub!(/u/, "у")
      @translator[:inphrase].include? "v"
      @translator[:inphrase].gsub!(/v/, "в")
      @translator[:inphrase].include? "w"
      @translator[:inphrase].gsub!(/w/, "у")
      @translator[:inphrase].include? "x"
      @translator[:inphrase].gsub!(/x/, "кс")
      @translator[:inphrase].include? "y "
      @translator[:inphrase].gsub!(/y /, "и ")
      @translator[:inphrase].include? "y"
      @translator[:inphrase].gsub!(/y/, "и")
      @translator[:inphrase].include? "zz"
      @translator[:inphrase].gsub!(/zz/, "ц")
      @translator[:inphrase].include? "z"
      @translator[:inphrase].gsub!(/z/, "з")
      @translator[:inphrase].capitalize!
    elsif @translator[:lang_first] == 'deutsch'
      @translator[:inphrase].downcase!
      @translator[:inphrase].downcase!
      @translator[:inphrase].include? "tz"
      @translator[:inphrase].gsub!(/tz/, 'ц')
      @translator[:inphrase].include? "sch"
      @translator[:inphrase].gsub!(/sch/, 'ш')
      @translator[:inphrase].include? "ie"
      @translator[:inphrase].gsub!(/ie/, "и")
      @translator[:inphrase].include? "ei"
      @translator[:inphrase].gsub!(/ei/, "ай")
      @translator[:inphrase].include? "ha"
      @translator[:inphrase].gsub!(/ha/, "ха")
      @translator[:inphrase].include? "hei"
      @translator[:inphrase].gsub!(/hei/, "хай")
      @translator[:inphrase].include? "ch"
      @translator[:inphrase].gsub!(/ch/, 'х')
      @translator[:inphrase].include? "sh"
      @translator[:inphrase].gsub!(/sh/, 'ш')
      @translator[:inphrase].include? "ä"
      @translator[:inphrase].gsub!(/ä/, 'э')
      @translator[:inphrase].include? "ö"
      @translator[:inphrase].gsub!(/ö/, 'оь')
      @translator[:inphrase].include? "ü"
      @translator[:inphrase].gsub!(/ü/, 'уй')
      @translator[:inphrase].include? "ß"
      @translator[:inphrase].gsub!(/ß/, 'з')
      @translator[:inphrase].include? "je"
      @translator[:inphrase].gsub!(/je/, 'е')
      @translator[:inphrase].include? "ehe"
      @translator[:inphrase].gsub!(/ehe/, 'эхэ')
      #alphabet
      @translator[:inphrase].include? "a"
      @translator[:inphrase].gsub!(/a/, 'a')
      @translator[:inphrase].include? "b"
      @translator[:inphrase].gsub!(/b/, "б")
      @translator[:inphrase].include? "c"
      @translator[:inphrase].gsub!(/c/, "к")
      @translator[:inphrase].include? "d"
      @translator[:inphrase].gsub!(/d/, "д")
      @translator[:inphrase].include? "e"
      @translator[:inphrase].gsub!(/e/, "э")
      @translator[:inphrase].include? "f"
      @translator[:inphrase].gsub!(/f/, "ф")
      @translator[:inphrase].include? "g"
      @translator[:inphrase].gsub!(/g/, "г")
      @translator[:inphrase].include? "h"
      @translator[:inphrase].gsub!(/h/, "")
      @translator[:inphrase].include? "i"
      @translator[:inphrase].gsub!(/i/, "и")
      @translator[:inphrase].include? "j"
      @translator[:inphrase].gsub!(/j/, "х")
      @translator[:inphrase].include? "k"
      @translator[:inphrase].gsub!(/k/, "к")
      @translator[:inphrase].include? "ll"
      @translator[:inphrase].gsub!(/ll/, "л")
      @translator[:inphrase].include? "l"
      @translator[:inphrase].gsub!(/l/, "л")
      @translator[:inphrase].include? "m"
      @translator[:inphrase].gsub!(/m/, "м")
      @translator[:inphrase].include? "n"
      @translator[:inphrase].gsub!(/n/, "н")
      @translator[:inphrase].include? "o"
      @translator[:inphrase].gsub!(/o/, "о")
      @translator[:inphrase].include? "p"
      @translator[:inphrase].gsub!(/p/, "п")
      @translator[:inphrase].include? "q"
      @translator[:inphrase].gsub!(/q/, "к")
      @translator[:inphrase].include? "r"
      @translator[:inphrase].gsub!(/r/, "р")
      @translator[:inphrase].include? "s"
      @translator[:inphrase].gsub!(/s/, "с")
      @translator[:inphrase].include? "t"
      @translator[:inphrase].gsub!(/t/, "т")
      @translator[:inphrase].include? "u"
      @translator[:inphrase].gsub!(/u/, "у")
      @translator[:inphrase].include? "v"
      @translator[:inphrase].gsub!(/v/, "ф")
      @translator[:inphrase].include? "w"
      @translator[:inphrase].gsub!(/w/, "в")
      @translator[:inphrase].include? "x"
      @translator[:inphrase].gsub!(/x/, "кс")
      @translator[:inphrase].include? "y"
      @translator[:inphrase].gsub!(/y/, "уй")
      @translator[:inphrase].include? "zz"
      @translator[:inphrase].gsub!(/zz/, "ц")
      @translator[:inphrase].include? "z"
      @translator[:inphrase].gsub!(/z/, "ц")
      @translator[:inphrase].capitalize!
    end
    @translator[:outphrase] = @translator[:inphrase]
    # binding.pry
    # @translator[:outphrase] = 'world'
    @translator.save
  end

  def translated
    @translator = Translator.last
    destroy
  end

  def destroy
    @api_translators = Translator.last
    @api_translators.destroy
  end

  private
  def api_translator_params
    params.require(:translator).permit(:inphrase, :outphrase, :lang_first, :lang_second)
  end

end
