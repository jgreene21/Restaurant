class Api::ItemsController < ApplicationController
  def index
    render json: Menu.find(params[:menu_id]).items
  end
end
