# images = ["http://pkmncards.com/wp-content/uploads/charizard-legendary-treasures-ltr-19-ptcgo-1-312x441@2x.jpg",
# "http://pkmncards.com/wp-content/uploads/lucario-black-white-promos-bw85-1-312x443.jpg",
# "http://pkmncards.com/wp-content/uploads/gogoat-xy-promos-xy16-312x439.jpg",
# "http://pkmncards.com/wp-content/uploads/exeggutor-plasma-freeze-plf-5-ptcgo-1-312x441.jpg",
# "http://pkmncards.com/wp-content/uploads/lugia-ex-legendary-treasures-ltr-102-ptcgo-1-312x441@2x.jpg",
# "http://pkmncards.com/wp-content/uploads/deoxys-ex-black-white-promos-bw82-ptcgo-1-312x441@2x.png",
# "http://pkmncards.com/wp-content/uploads/virizion-ex-plasma-blast-plb-9-ptcgo-1-312x441.png",
# "http://pkmncards.com/wp-content/uploads/empoleon-plasma-freeze-plf-117-ptcgo-1-312x441@2x.png",
# "http://pkmncards.com/wp-content/uploads/flareon-plasma-freeze-plf-12-ptcgo-1-312x441.png",
# "http://pkmncards.com/wp-content/uploads/dialga-ex-phantom-forces-phf-62-312x441.jpg",
# "http://pkmncards.com/wp-content/uploads/bronzong-phantom-forces-phf-61-312x441@2x.jpg",
# "http://pkmncards.com/wp-content/uploads/lucario-black-white-promos-bw85-1-312x443.jpg",
# "http://pkmncards.com/wp-content/uploads/gogoat-xy-promos-xy16-312x439.jpg",
# "http://pkmncards.com/wp-content/uploads/exeggutor-plasma-freeze-plf-5-ptcgo-1-312x441.jpg",
# "http://pkmncards.com/wp-content/uploads/lugia-ex-legendary-treasures-ltr-102-ptcgo-1-312x441@2x.jpg",
# "http://pkmncards.com/wp-content/uploads/lucario-black-white-promos-bw85-1-312x443.jpg",
# "http://pkmncards.com/wp-content/uploads/gogoat-xy-promos-xy16-312x439.jpg",
# "http://pkmncards.com/wp-content/uploads/exeggutor-plasma-freeze-plf-5-ptcgo-1-312x441.jpg",
# "http://pkmncards.com/wp-content/uploads/lugia-ex-legendary-treasures-ltr-102-ptcgo-1-312x441@2x.jpg",
# "http://pkmncards.com/wp-content/uploads/deoxys-ex-black-white-promos-bw82-ptcgo-1-312x441@2x.png",
# "http://pkmncards.com/wp-content/uploads/virizion-ex-plasma-blast-plb-9-ptcgo-1-312x441.png",
# "http://pkmncards.com/wp-content/uploads/empoleon-plasma-freeze-plf-117-ptcgo-1-312x441@2x.png",
# "http://pkmncards.com/wp-content/uploads/flareon-plasma-freeze-plf-12-ptcgo-1-312x441.png",
# "http://pkmncards.com/wp-content/uploads/dialga-ex-phantom-forces-phf-62-312x441.jpg",
# "http://pkmncards.com/wp-content/uploads/bronzong-phantom-forces-phf-61-312x441@2x.jpg",
# "http://pkmncards.com/wp-content/uploads/lucario-black-white-promos-bw85-1-312x443.jpg",
# "http://pkmncards.com/wp-content/uploads/gogoat-xy-promos-xy16-312x439.jpg",
# "http://pkmncards.com/wp-content/uploads/exeggutor-plasma-freeze-plf-5-ptcgo-1-312x441.jpg",
# "http://pkmncards.com/wp-content/uploads/lugia-ex-legendary-treasures-ltr-102-ptcgo-1-312x441@2x.jpg",
# "http://pkmncards.com/wp-content/uploads/deoxys-ex-black-white-promos-bw82-ptcgo-1-312x441@2x.png",
# "http://pkmncards.com/wp-content/uploads/virizion-ex-plasma-blast-plb-9-ptcgo-1-312x441.png",
# "http://pkmncards.com/wp-content/uploads/empoleon-plasma-freeze-plf-117-ptcgo-1-312x441@2x.png",
# "http://pkmncards.com/wp-content/uploads/flareon-plasma-freeze-plf-12-ptcgo-1-312x441.png",
# "http://pkmncards.com/wp-content/uploads/dialga-ex-phantom-forces-phf-62-312x441.jpg",
# "http://pkmncards.com/wp-content/uploads/bronzong-phantom-forces-phf-61-312x441@2x.jpg",
# "http://pkmncards.com/wp-content/uploads/lucario-black-white-promos-bw85-1-312x443.jpg",
# "http://pkmncards.com/wp-content/uploads/gogoat-xy-promos-xy16-312x439.jpg",
# "http://pkmncards.com/wp-content/uploads/exeggutor-plasma-freeze-plf-5-ptcgo-1-312x441.jpg",
# "http://pkmncards.com/wp-content/uploads/lugia-ex-legendary-treasures-ltr-102-ptcgo-1-312x441@2x.jpg",
# "http://pkmncards.com/wp-content/uploads/deoxys-ex-black-white-promos-bw82-ptcgo-1-312x441@2x.png",
# "http://pkmncards.com/wp-content/uploads/virizion-ex-plasma-blast-plb-9-ptcgo-1-312x441.png",
# "http://pkmncards.com/wp-content/uploads/empoleon-plasma-freeze-plf-117-ptcgo-1-312x441@2x.png",
# "http://pkmncards.com/wp-content/uploads/flareon-plasma-freeze-plf-12-ptcgo-1-312x441.png",
# "http://pkmncards.com/wp-content/uploads/dialga-ex-phantom-forces-phf-62-312x441.jpg",
# "http://pkmncards.com/wp-content/uploads/bronzong-phantom-forces-phf-61-312x441@2x.jpg",
# "http://pkmncards.com/wp-content/uploads/seismitoad-ex-furious-fists-frf-106-ptcgo-1-312x441@2x.png"]

# images.uniq.each do |image_address|
#   picture = Carrusel.new(
#               name: Faker::Pokemon.name,
#               image: image_address,
#               infopic: Faker::Beer.name,
#               role: ['products', 'spaces', 'others', 'fotosJoyas', 'fotosComp', 'fotosCuadros', 'fotosDetalles', 'fotosPaisajes', 'fotosUrbano', 'fotosTexturas', 'fotosMuelles', 'fotosCuadrados', 'fotosGifs', 'renderGifs'].sample,
#               )
#   unless picture.save
#     puts picture.errors.full_messages.to_sentence
#   end
# end

# puts 'images made'

# 10.times do
#   Proyecto.create(
#               name: Faker::Pokemon.name,
#               topic: ['javascript', 'ruby', 'git', 'literatura'].sample,
#               subtopic: ['rails', 'react', 'github', 'gramatica'].sample,
#               difficulty: ['basic', 'medium', 'advanced', 'sayayin'].sample,
#               orden: rand(1..20)
#               )
# end
#
# puts "proyectos seeded"
#
# 10.times do
#   Paso.create(
#     proyecto_id: rand(1..10),
#     step: Faker::Lorem.paragraph(2),
#     orden: rand(1..20),
#     estilo: ['basic', 'medium', 'advanced', 'sayayin'].sample
#   )
# end
#
# puts "pasos seeded"
#
# 30.times do
#   Procom.create(
#     paso_id: rand(1..10),
#     pro_content: Faker::Lorem.paragraph(1),
#     pro_style: ['comentario', 'problema', 'ejemplo'].sample,
#     pro_order: rand(1..20),
#     type_of_issue: ['comment', 'problem', 'example'].sample
#   )
# end
#
# puts "procom seeded"
AdminUser.create!(email: 'admin@example.com', password: 'password', password_confirmation: 'password') if Rails.env.development?