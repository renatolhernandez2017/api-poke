# frozen_string_literal: true

require 'uri'
require 'net/http'
require 'base64'
require 'json'

class Pokemon
  def self.get_pokemons(name)
    url      = URI("#{ENV['POKEAPI_URL']}pokemon/#{name}")
    headers  = header
    http     = method_http(url)
    response = http.get(url.path, headers)

    return JSON.parse(response.body) if     response.code == '200'
    return 'Pokemon não encontrado'  unless response.code == '200'
  end

  def self.header
    {
      'Content-Type' => 'application/json', 'Accept' => 'application/json'
    }
  end

  def self.method_http(url)
    http         = Net::HTTP.new(url.host, url.port)
    http.use_ssl = (url.scheme == 'https')

    http
  end
end
