class Client::SitesController < ApplicationController
  def show

  end

  def create
    leave_message = LeaveMessage.new guest_name: params[:name], email: params[:email], phone: params[:phone], message: params[:message]
    if leave_message.save
      render json: { message: "send success" }.to_json
    else
      render json: { message: leave_message.errors.full_messages }.to_json
    end
  end
end
