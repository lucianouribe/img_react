task ordenar: [:environment] do
  Proyecto.all.each do |proyecto|
    @main_order = 0
    proyecto.pasos.each_with_index do |paso, index|
      paso.update_attributes(orden: @main_order)
      @main_order += 1
    end
  end
end
