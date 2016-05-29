class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  before_action :save_request_info
  def save_request_info
    request_recorde = RequestRecord.request_ip_is(request.ip).first
    if request_recorde.present?
      request_recorde.update request_count: (request_recorde.request_count+1)
    else
      RequestRecord.create request_ip: request.ip
    end
  end
end
