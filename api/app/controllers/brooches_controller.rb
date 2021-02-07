class BroochesController < ApplicationController
  before_action :authorized

  # GET /brooches
  def index
    brooches = Brooch.all
    render json: brooches
  end
end
