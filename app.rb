require 'sinatra'
require 'uri'
require 'active_support'
require 'json'
require 'color_parser'

get '/' do
  erb :index
end

post '/parse' do 
  content_type :json  

  uri = URI.parse(params[:url])

  @colors = if uri.kind_of? URI::HTTP
    parser  = ColorParser::Page.new(uri.to_s)
    parser.colors.keys    
  else
    []
  end

  {:colors => @colors, :url => params[:url]}.to_json
end

