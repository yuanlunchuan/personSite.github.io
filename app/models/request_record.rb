class RequestRecord < ActiveRecord::Base
  scope :request_ip_is, -> (ip) { where request_ip: ip }
end
