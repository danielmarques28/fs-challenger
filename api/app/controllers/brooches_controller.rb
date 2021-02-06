class BroochesController < ApplicationController
  # GET /brooches
  def index
    @brooches = Brooch.all

    render json: @brooches
  end
end
