class MoviesController < ApplicationController
    skip_before_filter :authenticate!, only: [ :show, :index ]
    def index
        @movies = Movie.all
    end
    
    def show
    id = params[:id] # retrieve movie ID from URI route
    @movie = Movie.find(id) # look up movie by unique ID
    render(:partial => 'movie', :object => @movie) if request.xhr?
    # will render app/views/movies/show.<extension> by default
    end
     
    def index
      @movies = Movie.order(:title)
    end
    
    def new
      @movies = Movie.new
    end
    
    def create
        @movie = Movie.create!(movie_params)
        flash[:notice] = "#{@movie.title} was successfully created."
        redirect_to movies_path
    end
    
    def movie_params
      params.require(:movie).permit(:title, :rating, :description,
    :release_date)
    end
    
    def edit
      @movie = Movie.find params[:id]
    end
     
    def update
      @movie = Movie.find params[:id]
      @movie.update_attributes!(movie_params)
      flash[:notice] = "#{@movie.title} was successfully updated."
      redirect_to movie_path(@movie)
    end
    
    def destroy
      @movie = Movie.find(params[:id])
      @movie.destroy
      flash[:notice] = "Movie '#{@movie.title}' deleted."
      redirect_to movies_path
    end
  
end