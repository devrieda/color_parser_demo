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
  {:colors => colors(params[:url]), :url => params[:url]}.to_json
end

def colors(url)
  uri = URI.parse(url)
  if uri.kind_of? URI::HTTP
    parser = ColorParser::Page.new(uri.to_s)
    parser.colors_by_frequency
  else
    []
  end  
end
