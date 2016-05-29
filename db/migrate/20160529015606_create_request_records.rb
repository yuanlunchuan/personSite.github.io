class CreateRequestRecords < ActiveRecord::Migration
  def change
    create_table :request_records do |t|
      t.string :request_ip
      t.integer :request_count, default: 1
      t.timestamps null: false
    end
  end
end
