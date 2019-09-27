Myrottenpotatoes::Application.routes.draw do
    #resources :articles
    resources :movies
    #post '/movies/search_tmdb'
    root :to => redirect('/movies')
    
    get 'auth/:provider/callback' , to: 'sessions#create'
    get 'auth/:provider'        => 'sessions#loginbefore'
    post 'logout'                  => 'sessions#destroy'
    get 'auth/failure'            => 'sessions#failure'
    get 'auth/facebook'  => 'login'
    get 'auth/twitter'  => 'login'
    resources :movies
end

