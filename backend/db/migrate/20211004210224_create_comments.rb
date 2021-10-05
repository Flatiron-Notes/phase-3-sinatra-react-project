class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.string :name
      t.string :text
      t.belongs_to :user
      t.belongs_to :note
    end
  end
end
