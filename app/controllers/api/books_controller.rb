class Api::BooksController < ApplicationController
  before_action :set_tag, except: [:index, :new, :create]
  skip_before_action :verify_authenticity_token

  def index
    @book = Book.all
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
  
  def book_params
    # binding.pry
    params.require(:book).permit(:title, :author, :language, :pages, :book_date, :score, :mood, :synopsis, :comment)
  end

end