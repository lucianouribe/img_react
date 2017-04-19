require 'pry'
class Translator < ApplicationRecord

  def self.translate_process(info)
    if info[:lang_first] == 'espanol'
      # alphabet
      @latino = %w(a b c d e f g h i j k l m n o p q r s t u v w x y z)
      @cirilico = ['a', 'б', 'к', 'д', 'е', 'ф', 'г', "\s", 'и', 'х', 'к', 'л', 'м', 'н', 'о', 'п', 'к', 'р', 'с', 'т', 'у', 'в', 'у', 'ц', 'ж', 'з']
      # language exceptions
      @exception = ['ñ', 'y ', 'h', 'ch', 'll', 'rr', 'qu', 'ce', 'ci', 'ge', 'gi', 'gu', 'zz']
      @kirilik = ['н', 'и ', ' ', 'ч', 'ж', 'р', 'к', 'се', 'си', 'хе', 'хы', 'г', 'ц']
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

      # info[:lang_second] = 'cirilic'
      info[:outphrase] = @text_in_array.join
      info
    elsif info[:lang_first] == 'english'
      @latino = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
      @cirilico = ['a', 'б', 'к', 'д', 'е', 'ф', 'г', "х", 'и', 'х', 'к', 'л', 'м', 'н', 'о', 'п', 'к', 'р', 'с', 'т', 'у', 'в', 'у', 'кс', 'и', 'з']
      # language exceptions
      @exception = ['ll', 'qu', 'ow', 'i ', 'gh', 'the', 'tha', 'thi', 'th', 'thr', 'ch', 'sh', 'ea', 'ee', 'ya', 'ye', 'you', 'ju', 'oo', 'yo', 'wh', 'zz']
      @kirilik = ['л', 'ку', 'ау', 'ай ', 'г', 'дэ', 'да', 'ди', 'т', 'тр', 'ч', 'ш', 'ы', 'и', 'я', 'е', 'ю', 'шу', 'у', 'ё', 'у', 'ц']


      # input
      user_input = info[:inphrase].downcase

      # create a rejex for exceptions
      @text = user_input.split(/(ll|qu|ow|i |gh|the|tha|thi|th|thr|ch|sh|ea|ee|ya|ye|you|ju|oo|yo|wh|zz)/)
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

      # info[:lang_second] = 'cirilic'
      info[:outphrase] = @text_in_array.join
      info
    elsif info[:lang_first] == 'deutsch'
      @latino = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
      @cirilico = ['a', 'б', 'к', 'д', 'е', 'ф', 'г', '', 'и', 'и', 'к', 'л', 'м', 'н', 'о', 'п', 'к', 'р', 'с', 'т', 'у', 'ф', 'в', 'кс', 'уй', 'ц']
      # language exceptions
      @exception = ['zz', 'll', 'tz', 'sch', 'ie', 'ei', 'ha', 'hei', 'ch', 'sh', 'ä', 'ö', 'ü', 'ß', 'je', 'ehe']
      @kirilik = ['ц', 'л', 'ц', 'ш', 'и', 'ай', 'ха', 'хай', 'х', 'ш', 'э', 'оь', 'уй', 'з', 'йе', 'ехе']


      # input
      user_input = info[:inphrase].downcase

      # create a rejex for exceptions
      @text = user_input.split(/(zz|ll|tz|sch|ie|ei|ha|hei|ch|sh|ä|ö|ü|ß|je|ehe)/)
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

      # info[:lang_second] = 'cirilic'
      info[:outphrase] = @text_in_array.join
      info
    elsif info[:lang_first] == 'ruso'
      @cirilico = ['a',  'b',  'v',  'h',  'g',  'd', 'e',  'ye', 'zh', 'z',  'y',  'i', 'yi', 'y',  'k',  'l',  'm',  'n', 'o',  'p',  'r',  's',  't',  'u', 'f',  'kh', 'ts', 'ch', 'sh', 'shch', 'yu', 'ya', '', 'i']
      @latino = ['а',  'б',  'в',  'г',  'г',  'д', 'е',  'є', 'ж', 'з',  'и',  'і', 'ї', 'й',  'к',  'л',  'м',  'н', 'о',  'п',  'р',  'с',  'т',  'у', 'ф',  'х', 'ц', 'ч', 'ш', 'щ',
      'ю', 'я', 'ь', 'ы']

      # language exceptions
      # @exception = ['zz', 'll', 'tz', 'sch', 'ie', 'ei', 'ha', 'hei', 'ch', 'sh', 'ä', 'ö', 'ü', 'ß', 'je', 'ehe']
      # @kirilik = ['ц', 'л', 'ц', 'ш', 'и', 'ай', 'ха', 'хай', 'х', 'ш', 'э', 'оь', 'уй', 'з', 'йе', 'ехе']


      # input
      @text = info[:inphrase].downcase

      # create a rejex for exceptions
      # @text = user_input.split(/(zz|ll|tz|sch|ie|ei|ha|hei|ch|sh|ä|ö|ü|ß|je|ehe)/)
      # # exceptor
      # @text.map.with_index do |letter, num|
      #   @exception.map.with_index do |font, index|
      #     if letter == "#{font}"
      #       @text[num] = @kirilik[index]
      #     end
      #   end
      # end

      # @text = @text.join
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

      info[:lang_second] = 'latino'
      info[:outphrase] = @text_in_array.join
      info

    end
  #     string = info[:inphrase]
  #     binding.pry
  #     alphabet = {
  #       'а' => 'a',  'б' => 'b',  'в' => 'v',  'г' => 'h',  'ґ' => 'g',  'д' => 'd',
  #       'е' => 'e',  'є' => 'ye', 'ж' => 'zh', 'з' => 'z',  'и' => 'y',  'і' => 'i',
  #       'ї' => 'yi', 'й' => 'y',  'к' => 'k',  'л' => 'l',  'м' => 'm',  'н' => 'n',
  #       'о' => 'o',  'п' => 'p',  'р' => 'r',  'с' => 's',  'т' => 't',  'у' => 'u',
  #       'ф' => 'f',  'х' => 'kh', 'ц' => 'ts', 'ч' => 'ch', 'ш' => 'sh', 'щ' => 'shch',
  #       'ю' => 'yu', 'я' => 'ya',
  #       'А' => 'a',  'Б' => 'b',  'В' => 'v',  'Г' => 'h',  'Ґ' => 'g',  'Д' => 'd',
  #       'Е' => 'e',  'Є' => 'ye', 'Ж' => 'zh', 'З' => 'z',  'И' => 'y',  'І' => 'i',
  #       'Ї' => 'yi', 'Й' => 'y',  'К' => 'k',  'Л' => 'l',  'М' => 'm',  'Н' => 'n',
  #       'О' => 'o',  'П' => 'p',  'Р' => 'r',  'С' => 's',  'Т' => 't',  'У' => 'u',
  #       'Ф' => 'f',  'Х' => 'kh', 'Ц' => 'ts', 'Ч' => 'ch', 'Ш' => 'sh', 'Щ' => 'shch',
  #       'Ю' => 'yu', 'Я' => 'ya',
  #       'ь' => '' # Ignore symbol, because its standard presentation is not allowed in URLs
  #     }
  #     result = string.gsub(/[а-яА-ЯіїєґІЇЄҐ]/, alphabet)
  #     binding.pry
  #     result.gsub(/[äöüß]/i) do |match|
  #       case match.downcase
  #         when "ä" 'ae'
  #         when "ö" 'oe'
  #         when "ü" 'ue'
  #         when "ß" 'ss'
  #       end
  #     end
  #     binding.pry
  #
  #     info[:outphrase] = result.gsub(/\W/, '').downcase
  #     info
  #
  #
  #   end
  #
  end

end
