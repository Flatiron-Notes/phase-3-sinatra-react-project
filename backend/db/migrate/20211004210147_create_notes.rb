class CreateNotes < ActiveRecord::Migration[6.1]
  def change
    create_table :notes do |t|
      t.string :title
      t.string :format
      t.integer :difficulty
      t.string :content
      t.belongs_to :user
    end
  end
end
