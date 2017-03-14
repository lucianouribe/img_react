images = ["http://pkmncards.com/wp-content/uploads/charizard-legendary-treasures-ltr-19-ptcgo-1-312x441@2x.jpg",
"http://pkmncards.com/wp-content/uploads/lucario-black-white-promos-bw85-1-312x443.jpg",
"http://pkmncards.com/wp-content/uploads/gogoat-xy-promos-xy16-312x439.jpg",
"http://pkmncards.com/wp-content/uploads/exeggutor-plasma-freeze-plf-5-ptcgo-1-312x441.jpg",
"http://pkmncards.com/wp-content/uploads/lugia-ex-legendary-treasures-ltr-102-ptcgo-1-312x441@2x.jpg",
"http://pkmncards.com/wp-content/uploads/deoxys-ex-black-white-promos-bw82-ptcgo-1-312x441@2x.png",
"http://pkmncards.com/wp-content/uploads/virizion-ex-plasma-blast-plb-9-ptcgo-1-312x441.png",
"http://pkmncards.com/wp-content/uploads/empoleon-plasma-freeze-plf-117-ptcgo-1-312x441@2x.png",
"http://pkmncards.com/wp-content/uploads/flareon-plasma-freeze-plf-12-ptcgo-1-312x441.png",
"http://pkmncards.com/wp-content/uploads/dialga-ex-phantom-forces-phf-62-312x441.jpg",
"http://pkmncards.com/wp-content/uploads/bronzong-phantom-forces-phf-61-312x441@2x.jpg",
"http://pkmncards.com/wp-content/uploads/seismitoad-ex-furious-fists-frf-106-ptcgo-1-312x441@2x.png"]

images.uniq.each do |image_address|
  picture = Carrusel.new(
              name: Faker::Pokemon.name,
              image: image_address,
              infopic: Faker::Beer.name,
              role: ['products', 'spaces', 'others'].sample,
              )
  unless picture.save
    puts picture.errors.full_messages.to_sentence
  end
end

puts 'images made'
