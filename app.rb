require 'sinatra'
require 'color_parser'

set :markdown, :layout_engine => :erb

get '/' do
  erb :index, :layout => "layout"
end

get '/colors' do 
  content_type :json
  
  {}.to_json
end
