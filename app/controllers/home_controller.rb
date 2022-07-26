class HomeController < ApplicationController
  def index; end

  def pokemon
    name    = params['name']
    pokemon = Pokemon.get_pokemons(name)

    if pokemon == 'Pokemon não encontrado'
      render json: pokemon 
    else
      ability_name = pokemon['abilities'].map { |p| p['ability']['name'] }.sort
      name         = pokemon['name'].upcase
      image        = pokemon['sprites']['other']['official-artwork']['front_default']
      weight       = pokemon['weight']
      height       = pokemon['height']

      render json: { ability_name: ability_name, name: name, image: image, weight: weight , height: height }
    end
  end
end
