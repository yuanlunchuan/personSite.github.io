class CreateLeaveMessages < ActiveRecord::Migration
  def change
    create_table :leave_messages do |t|
      
      t.string :guest_name
      t.string :email
      t.string :phone
      t.text :message
      t.timestamps null: false
    end
  end
end
