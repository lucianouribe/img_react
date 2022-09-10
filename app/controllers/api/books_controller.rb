class Api::BooksController < ApplicationController
  before_action :set_tag, :evaluate_token, except: [:index, :new, :create]
  before_action :evaluate_token
  skip_before_action :verify_authenticity_token

  def index
    @book = Book.order_by_id.all
    render json: @book
  end

  def show
  end

  def new
    @book = Book.new
  end

  def edit
  end

  def create
    @book = Book.new(book_params)
    if @book.save
      render json: @book, status: :created
    else
      render :new, error: "Try again!"
    end
  end
  
  def update
    if @book.update(book_params)
      render json: @book, status: :ok
    else
      render :edit
    end
  end
  
  def destroy
    @book.destroy
    render json: @books, success: "Book deleted successfully"
  end
  
  private
  
  def set_tag
    @book = Book.find(params[:id])
  end

  def evaluate_token
    token = request.headers["Token"]
    array = []
    token.chars.unshift('x').unshift('x').each_with_index do |x,index|
      if index % 3 == 0
        array << x
      end
    end
    cleaned_token = array.join()
    unless cleaned_token.include? 'NhoyJM0g7'
      render status: 400, json: { success: false, message: 'something smells fishy here' }.reject { |k,v| k != :success && v.blank? }
    end
  end
  
  def book_params
    params.require(:book).permit(:title, :author, :language, :pages, :book_date, :score, :mood, :synopsis, :comment)
  end

end