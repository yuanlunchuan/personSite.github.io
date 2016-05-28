class LeaveMessage < ActiveRecord::Base
  validates :phone, presence: true, length: { is: 11 }, numericality: { integer_only: true }, format: { with: /\A1[3-9]\d{9}\z/ }
  validates :message, length: { maximum: 1000 }
  validates :email, length: { maximum: 20 }
end
