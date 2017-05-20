class PanoramicoController < ApplicationController
  respond_to :xml

    def index
      @panoramico = Panoramico.all
      #
      # respond_to do |format|
      #   if @panoramico.save
      #     format.json { render :show, status: :created }
      #   else
      #     format.json { render json: @api_carrusel.errors, status: :unprocessable_entity }
      #   end
      # end
    end
end
