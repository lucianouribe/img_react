class Api::ProcomsController < ApplicationController
  before_action :set_api_paso, except: :set_last_procom_id
  before_action :set_api_procom, only: [:show, :edit, :update, :destroy]

  def index
    @api_procoms = @api_paso.procoms.order_by_id.all
  end

  def set_last_procom_id
    @procom = Procom.all.maximum(:id)
    render :set_last_procom_id, status: :ok
  end

  def show
  end

  def new
    @api_procom = @api_paso.procoms.new
  end

  def edit
  end

  def create
    #4
    @api_procom = @api_paso.procoms.new(api_procom_params)

    if @api_procom.save
      render :show, status: :created
    else
      render json: @api_procom.errors, status: :unprocessable_entity
    end
  end

  def update
    if @api_procom.update(api_procom_params)
      render :show, status: :ok
    else
      render json: @api_procom.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @api_procom.destroy
      head :no_content
  end

  private

    def set_api_paso
      @api_paso = Paso.find(params[:paso_id])
    end

    def api_procom_params
      params.require(:procom).permit(:pro_content, :pro_style, :pro_order, :type_of_issue)
    end

    def set_api_procom
      @api_procom = @api_paso.procoms.find(params[:id])
    end
end
