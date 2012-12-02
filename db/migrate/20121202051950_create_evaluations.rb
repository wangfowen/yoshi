class CreateEvaluations < ActiveRecord::Migration
  def change
    create_table :evaluations do |t|
      t.integer :post_id
      t.integer :evaluator_id
      t.integer :rating
      t.string :comments
      t.boolean :recommended, default: "false"
      t.timestamps
    end
  end
end
